#!/usr/bin/env node
// Go2Busan Threads publisher. Run by .github/workflows/threads-publisher.yml every 15 minutes.
//
// Safety model
//  - DRY RUN unless THREADS_LIVE=true. Dry runs never call publish endpoints and never touch the log.
//  - Only posts with status "approved" (owner sign-off; time-sensitive facts verified) are eligible.
//  - Idempotent: publish-log.json (kept on the `threads-state` branch, not main) records container
//    and post IDs. Before creating anything it checks the log AND the account's recent posts, so a
//    crash between "publish" and "save log" cannot cause a second copy.
//  - At most one post per account per run, at most 2 per account per local day.
//  - Retries: max 3 attempts per post, only for network/5xx/429. Auth/validation errors stop that post.
//  - More than 3h late (e.g. Actions outage) -> "missed"; never burst-posts a backlog.
//  - URLs inside a post are fetched before publishing; a non-200 link blocks the post.
//  - Tokens come only from env and are redacted from every message.
//
// Usage: node scripts/threads/publish.mjs [--now ISO] [--log path] [--wait-ms 30000]
import { ACCOUNTS, SCHEDULE_FILE, LOG_FILE, MAX_ATTEMPTS, LATE_WINDOW_MIN, REPLY_LATE_WINDOW_MIN, MAX_PER_LOCAL_DAY,
  readJson, writeJson, makeClient, checkPost, redact } from "./lib.mjs";

const norm = (t) => String(t || "").replace(/\s+/g, " ").trim();
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export async function run({ now = new Date(), schedule, log, env = process.env, fetchImpl = fetch, waitMs = 30000,
  save = () => {}, out = console.log } = {}) {
  const live = env.THREADS_LIVE === "true";
  log.posts ||= {};
  const summary = { live, verified: [], published: [], replies: [], missed: [], failed: [], waiting: [], dry_run: [], not_configured: [] };
  const entry = (id) => (log.posts[id] ||= { status: "pending", attempts: 0 });
  const persist = () => save(log);

  for (const [market, acc] of Object.entries(ACCOUNTS)) {
    const due = schedule.posts
      .filter((p) => p.market === market && p.status === "approved" && new Date(p.publish_at_utc) <= now)
      .filter((p) => !["published", "missed", "failed"].includes(log.posts[p.id]?.status))
      .sort((a, b) => a.publish_at_utc.localeCompare(b.publish_at_utc));
    const pendingReplies = schedule.posts.filter((p) => p.market === market && p.link_reply &&
      log.posts[p.id]?.status === "published" && !["done", "failed", "missed"].includes(log.posts[p.id]?.reply_status));
    if (!due.length && !pendingReplies.length) continue;

    const token = env[acc.tokenEnv];
    if (!token) { summary.not_configured.push(`${market}: ${acc.tokenEnv} not set (${due.length} due)`); continue; }

    // Guard: the token must belong to this market's account (prevents JP copy going to the US account).
    const client = makeClient({ token, fetchImpl });
    let me;
    try { me = await client.me(); }
    catch (err) { summary.failed.push(`${market}: token check failed (${redact(err.message)})`); continue; }
    if (String(me.username).toLowerCase() !== acc.handle) {
      summary.failed.push(`${market}: ${acc.tokenEnv} belongs to @${me.username}, expected @${acc.handle} — nothing posted`); continue;
    }
    summary.verified.push(`${market}: @${me.username}`);

    // First reply with the guide link. Never blocks or alters the main post.
    const postReply = async (p) => {
      const e = entry(p.id); const lr = p.link_reply;
      if (!e.thread_id) return;
      if ((now - new Date(e.published_at || now)) / 60000 > REPLY_LATE_WINDOW_MIN) { e.reply_status = "missed"; persist(); summary.missed.push(`${p.id} (reply)`); return; }
      if ((e.reply_attempts || 0) >= MAX_ATTEMPTS) { e.reply_status = "failed"; persist(); summary.failed.push(`${p.id}: reply max attempts`); return; }
      try { const r = await fetchImpl(lr.url, { method: "GET", redirect: "follow" }); if (r.status !== 200) throw new Error(`HTTP ${r.status}`); }
      catch (err) { e.reply_status = "failed"; e.reply_error = `link: ${redact(err.message)}`; persist(); summary.failed.push(`${p.id}: reply link check failed`); return; }
      try {
        const existing = await client.replies(e.thread_id).catch(() => ({ data: [] }));
        const hit = (existing.data || []).find((r) => String(r.text || "").includes(lr.url));
        if (hit) { Object.assign(e, { reply_status: "done", reply_id: hit.id, reply_recovered: true }); persist(); summary.replies.push(`${p.id} (already replied)`); return; }
        e.reply_attempts = (e.reply_attempts || 0) + 1;
        const fresh = e.reply_creation_id && (now - new Date(e.reply_container_created_at)) < 23 * 3600e3;
        if (!fresh) {
          const c = await client.createText(me.id, lr.text, { reply_to_id: e.thread_id });
          Object.assign(e, { reply_status: "container_created", reply_creation_id: c.id, reply_container_created_at: now.toISOString() });
          persist(); await sleep(waitMs);
        }
        const pub = await client.publish(me.id, e.reply_creation_id);
        Object.assign(e, { reply_status: "done", reply_id: pub.id, reply_error: null }); persist();
        summary.replies.push(`${p.id} -> reply ${pub.id}`);
      } catch (err) {
        e.reply_error = redact(err.message);
        e.reply_status = err.retryable && e.reply_attempts < MAX_ATTEMPTS ? "retry_pending" : "failed";
        persist(); summary.failed.push(`${p.id}: reply ${e.reply_error} (${e.reply_status})`);
      }
    };

    if (pendingReplies.length) {
      if (live) await postReply(pendingReplies[0]);
      else summary.dry_run.push(`${pendingReplies[0].id} reply pending`);
    }

    // Late posts become "missed" (owner decides later); then handle at most one post this run.
    if (!due.length) continue;
    let p = null;
    for (const c of due) {
      const lateMin = (now - new Date(c.publish_at_utc)) / 60000;
      if (lateMin > LATE_WINDOW_MIN && !log.posts[c.id]?.creation_id) {
        if (live) { Object.assign(entry(c.id), { status: "missed", missed_at: now.toISOString() }); persist(); }
        summary.missed.push(c.id); continue;
      }
      p = c; break;
    }
    if (!p) continue;

    const sameDay = Object.entries(log.posts).filter(([id, e]) => e.status === "published" &&
      schedule.posts.find((x) => x.id === id && x.market === market && x.local_date === p.local_date)).length;
    if (sameDay >= MAX_PER_LOCAL_DAY) { summary.waiting.push(`${p.id}: daily cap reached`); continue; }

    const { issues, urls } = checkPost(p);
    if (issues.length) { summary.failed.push(`${p.id}: ${issues.join("; ")}`); if (live) { Object.assign(entry(p.id), { status: "failed", last_error: issues.join("; ") }); persist(); } continue; }
    let badLink = null;
    for (const u of urls) {
      try { const r = await fetchImpl(u, { method: "GET", redirect: "follow" }); if (r.status !== 200) badLink = `${u} -> ${r.status}`; }
      catch (e) { badLink = `${u} -> ${redact(e.message)}`; }
    }
    if (badLink) { summary.failed.push(`${p.id}: link check failed ${badLink}`); if (live) { Object.assign(entry(p.id), { status: "failed", last_error: `link: ${badLink}` }); persist(); } continue; }

    if (!live) { summary.dry_run.push(`${p.id} @${acc.handle} ${p.local_date} ${p.local_time} ${acc.tz}${p.link_reply ? " + link reply" : ""}`); continue; }

    const e = entry(p.id);
    if (e.attempts >= MAX_ATTEMPTS) { e.status = "failed"; persist(); summary.failed.push(`${p.id}: max attempts`); continue; }
    try {
      // Dedupe against what is actually on the account (covers crash-after-publish).
      const recent = await client.recent(me.id);
      const hit = (recent.data || []).find((r) => norm(r.text) === norm(p.text));
      if (hit) {
        Object.assign(e, { status: "published", thread_id: hit.id, permalink: hit.permalink || null, published_at: hit.timestamp || now.toISOString(), recovered: true });
        persist(); summary.published.push(`${p.id} (already on account, log recovered)`); continue;
      }
      e.attempts += 1; e.last_attempt_at = now.toISOString();
      const fresh = e.creation_id && (now - new Date(e.container_created_at)) < 23 * 3600e3;
      if (!fresh) {
        const c = await client.createText(me.id, p.text);
        Object.assign(e, { status: "container_created", creation_id: c.id, container_created_at: now.toISOString() });
        persist();
        await sleep(waitMs);
      }
      const pub = await client.publish(me.id, e.creation_id);
      const meta = await client.permalink(pub.id).catch(() => ({}));
      Object.assign(e, { status: "published", thread_id: pub.id, permalink: meta.permalink || null, published_at: now.toISOString(), last_error: null });
      persist(); summary.published.push(`${p.id} -> ${meta.permalink || pub.id}`);
    } catch (err) {
      e.last_error = redact(err.message);
      e.status = err.retryable && e.attempts < MAX_ATTEMPTS ? "retry_pending" : "failed";
      persist(); summary.failed.push(`${p.id}: ${e.last_error} (${e.status}, attempt ${e.attempts}/${MAX_ATTEMPTS})`);
      continue;
    }
    if (p.link_reply && e.status === "published") { await sleep(waitMs); await postReply(p); }
  }

  out(JSON.stringify(summary, null, 2));
  return summary;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const opt = (k) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : undefined; };
  const logPath = opt("--log") || LOG_FILE;
  const schedule = readJson(SCHEDULE_FILE, null);
  if (!schedule) { console.log("No schedule.json (launch date not set). Nothing to do."); process.exit(0); }
  const log = readJson(logPath, { posts: {} });
  const s = await run({ now: opt("--now") ? new Date(opt("--now")) : new Date(), schedule, log,
    waitMs: Number(opt("--wait-ms") ?? 30000), save: (l) => writeJson(logPath, l) });
  // Fail the workflow run (-> GitHub notification) when something needs the owner's attention.
  if (s.failed.length || (s.live && s.not_configured.length)) process.exit(1);
}

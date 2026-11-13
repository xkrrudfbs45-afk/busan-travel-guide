// Publishes due, approved Instagram carousels. Dry run unless INSTAGRAM_LIVE=true.
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { SCHEDULE_FILE, ACCOUNTS, LATE_WINDOW_MIN, MAX_ATTEMPTS, checkPost, client, redact } from "./lib.mjs";

export const localQa = (cardsDir) => (id) => {
  const f = `${cardsDir}/${id}/qa.json`;
  try { return existsSync(f) ? JSON.parse(readFileSync(f, "utf8")) : null; } catch (_) { return null; }
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const norm = (s) => String(s || "").replace(/\s+/g, " ").trim().slice(0, 80);

export async function run({ now = new Date(), schedule, log, env = process.env, fetchImpl = fetch, mkClient = client,
  baseUrl, waitMs = 5000, save = () => {}, qaFor = localQa("state/cards") }) {
  const live = env.INSTAGRAM_LIVE === "true";
  const out = { live, published: [], dry_run: [], waiting: [], failed: [], missed: [], not_configured: [], blocked_qa: [] };
  log.posts ||= {};
  const entry = (id) => (log.posts[id] ||= { status: "pending", attempts: 0 });
  for (const p of schedule.posts) {
    if (p.status !== "approved") continue;
    const e = log.posts[p.id];
    if (e && ["published", "missed", "failed"].includes(e.status)) continue;
    if (new Date(p.publish_at_utc) > now) { out.waiting.push(p.id); continue; }
    const issues = checkPost(p);
    if (issues.length) { out.failed.push(`${p.id}: ${issues.join("; ")}`); continue; }
    if ((now - new Date(p.publish_at_utc)) / 60000 > LATE_WINDOW_MIN) {
      if (live) { Object.assign(entry(p.id), { status: "missed", missed_at: now.toISOString() }); save(log); }
      out.missed.push(p.id); continue;
    }
    // Fail-closed QA gate: publish only cards whose render QA passed (qa.json ok === true).
    // Missing or failed QA blocks the post without using an attempt, so a fixed re-render can still go out in time.
    const qa = qaFor(p.id);
    if (!qa || qa.ok !== true) {
      const why = !qa ? "qa.json missing" : (qa.problems || []).slice(0, 3).join("; ") || "qa.ok is not true";
      out.blocked_qa.push(`${p.id}: ${why}`);
      if (live) { Object.assign(entry(p.id), { qa_blocked_at: now.toISOString(), qa_error: redact(why) }); save(log); }
      continue;
    }
    const acc = ACCOUNTS[p.account];
    const token = env[acc.tokenEnv];
    if (!token) { out.not_configured.push(`${p.id}: ${acc.tokenEnv} not set`); continue; }
    const urls = p.cards.map((_, i) => `${baseUrl}/${p.id}/${String(i + 1).padStart(2, "0")}.jpg`);
    if (!live) { out.dry_run.push(`${p.id} @${acc.handle}: ${p.cards.length} cards`); continue; }

    const st = entry(p.id);
    try {
      const api = mkClient(token, fetchImpl);
      const me = await api.me();
      if (me.username !== acc.handle) throw Object.assign(new Error(`token belongs to @${me.username}, expected @${acc.handle}`), { fatal: true });
      const recent = await api.recent(me.user_id || me.id);
      const hit = (recent.data || []).find((r) => norm(r.caption) === norm(p.caption));
      if (hit) { Object.assign(st, { status: "published", permalink: hit.permalink, recovered: true }); save(log); out.published.push(`${p.id} (already on account)`); continue; }
      for (const u of urls) {
        const r = await fetchImpl(u);
        if (r.status !== 200 || !/image\/jpe?g/.test(r.headers.get("content-type") || "")) throw Object.assign(new Error(`image not public yet: ${u} -> ${r.status}`), { retryable: true, noAttempt: true });
      }
      if (st.attempts >= MAX_ATTEMPTS) { st.status = "failed"; save(log); out.failed.push(`${p.id}: max attempts`); continue; }
      st.attempts += 1; st.last_attempt_at = now.toISOString();
      const kids = [];
      for (const u of urls) kids.push((await api.child(me.user_id || me.id, u)).id);
      const car = await api.carousel(me.user_id || me.id, kids, p.caption);
      Object.assign(st, { status: "container_created", creation_id: car.id }); save(log);
      for (let i = 0; i < 12; i++) {
        const s = await api.status(car.id);
        if (s.status_code === "FINISHED") break;
        if (s.status_code === "ERROR" || s.status_code === "EXPIRED") throw new Error(`container ${s.status_code}`);
        await sleep(waitMs);
      }
      const pub = await api.publish(me.user_id || me.id, car.id);
      const meta = await api.permalink(pub.id).catch(() => ({}));
      Object.assign(st, { status: "published", media_id: pub.id, permalink: meta.permalink || null, published_at: now.toISOString(), last_error: null });
      save(log); out.published.push(`${p.id} -> ${meta.permalink || pub.id}`);
    } catch (err) {
      st.last_error = redact(err.message);
      if (err.noAttempt) st.attempts = Math.max(0, st.attempts);
      st.status = err.fatal ? "failed" : "retry_pending";
      if (!err.retryable && !err.fatal && st.attempts >= MAX_ATTEMPTS) st.status = "failed";
      save(log); out.failed.push(`${p.id}: ${st.last_error} (${st.status})`);
    }
  }
  console.log(JSON.stringify(out, null, 2));
  return out;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const opt = (k) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : undefined; };
  const logPath = opt("--log") || "state/publish-log.json";
  const schedule = JSON.parse(readFileSync(SCHEDULE_FILE, "utf8"));
  const log = existsSync(logPath) ? JSON.parse(readFileSync(logPath, "utf8")) : { posts: {} };
  const repo = process.env.GITHUB_REPOSITORY || "xkrrudfbs45-afk/busan-travel-guide";
  const baseUrl = process.env.INSTAGRAM_CARDS_BASE_URL || `https://raw.githubusercontent.com/${repo}/instagram-state/cards`;
  const cardsDir = opt("--cards") || "state/cards";
  const s = await run({ schedule, log, baseUrl, qaFor: localQa(cardsDir), save: (l) => writeFileSync(logPath, JSON.stringify(l, null, 2)) });
  if (s.failed.length || s.blocked_qa.length || (s.live && s.not_configured.length)) process.exit(1);
}

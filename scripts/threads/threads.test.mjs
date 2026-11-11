// node --test scripts/threads/
import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { CALENDAR_MD, parseCalendar, localToUtc, checkPost, redact } from "./lib.mjs";
import { buildSchedule, validateSchedule, addMarket } from "./build-schedule.mjs";
import { CALENDAR_TW_MD } from "./lib.mjs";
import { run } from "./publish.mjs";
import { pathFor, guideUrl, checkLinkReply } from "./link-replies.mjs";

const md = readFileSync(CALENDAR_MD, "utf8");

test("calendar parses to 60 JP + 60 US posts, 2 per account per day, copy untouched", () => {
  const posts = parseCalendar(md);
  assert.equal(posts.filter((p) => p.market === "JP").length, 60);
  assert.equal(posts.filter((p) => p.market === "US").length, 60);
  for (let d = 1; d <= 30; d++) for (const m of ["JP", "US"]) assert.equal(posts.filter((p) => p.day === d && p.market === m).length, 2, `day ${d} ${m}`);
  assert.ok(posts[0].text.startsWith("釜山旅行は、行きたい場所を詰め込むより"));
  assert.ok(posts.every((p) => !p.text.includes("###") && !p.text.includes("## ")));
});

test("every post passes hard checks (length, language)", () => {
  for (const p of parseCalendar(md)) assert.deepEqual(checkPost(p).issues, [], p.id);
});

test("launch date is required", () => {
  assert.throws(() => buildSchedule(md, undefined), /required/);
});

test("time zones: JST fixed, ET follows DST", () => {
  assert.equal(localToUtc("2026-11-05", "08:00", "Asia/Tokyo"), "2026-11-04T23:00:00.000Z");
  assert.equal(localToUtc("2026-11-05", "08:00", "America/New_York"), "2026-11-05T13:00:00.000Z"); // EST
  assert.equal(localToUtc("2026-07-01", "18:00", "America/New_York"), "2026-07-01T22:00:00.000Z"); // EDT
  assert.equal(localToUtc("2027-03-14", "08:00", "America/New_York"), "2027-03-14T12:00:00.000Z"); // DST starts 3/14/2027
});

test("schedule maps Day N to start+N-1 and validates", () => {
  const s = buildSchedule(md, "2026-11-05");
  const p = s.posts.find((x) => x.id === "d30-us-2");
  assert.equal(p.local_date, "2026-12-04"); assert.equal(p.local_time, "18:00");
  assert.deepEqual(validateSchedule(s, md), []);
  s.posts[0].status = "approved";
  assert.match(validateSchedule(s, md).join(), /approved without approver/);
  s.posts[1].text += "!";
  assert.match(validateSchedule(s, md).join(), /copy differs/);
});

test("time-sensitive detector flags concrete facts", () => {
  assert.ok(checkPost({ market: "US", text: "Tickets cost ₩4,500 and it opens at 10:00." }).flags.length >= 2);
  assert.equal(checkPost({ market: "US", text: "Check current fares before departure." }).flags.length, 0);
});

test("tokens are redacted", () => {
  assert.ok(!redact("bad access_token=THAAabcdefghijklmnopqrstuvwxyz123 x").includes("abcdefghij"));
});

// ---- publisher with a fake Threads API ----
function fakeApi({ failPublish = 0, recentTexts = [], users = { jp: "go2busan.jp", us: "go2busan.us" } } = {}) {
  const calls = []; let n = 0; let pubFails = failPublish;
  const fetchImpl = async (url, init = {}) => {
    const u = String(url); calls.push(`${init.method || "GET"} ${u.replace(/\?.*/, "")}`);
    const ok = (j) => ({ ok: true, status: 200, json: async () => j });
    if (!u.includes("graph.threads.net")) return ok({});
    if (u.includes("/me")) { const tok = String(init.headers?.Authorization || "").replace("Bearer ", ""); return ok({ id: "U1", username: users[tok] || "someone_else" }); }
    if (u.endsWith("/threads") && init.method === "POST") return ok({ id: `C${++n}` });
    if (u.includes("/threads?") || (u.endsWith("/threads") && !init.method)) return ok({ data: recentTexts.map((t, i) => ({ id: `R${i}`, text: t })) });
    if (u.includes("threads_publish")) {
      if (pubFails-- > 0) return { ok: false, status: 503, json: async () => ({ error: { message: "temporarily unavailable" } }) };
      return ok({ id: `T${n}` });
    }
    return ok({ id: "T", permalink: "https://www.threads.com/@x/post/T" });
  };
  return { fetchImpl, calls };
}

function approved(start = "2026-11-05") {
  const s = buildSchedule(md, start);
  for (const p of s.posts) { if (p.verification.status !== "evergreen") continue; p.status = "approved"; p.approval = { approved_by: "test", approved_at: "2026-11-01T00:00:00Z" }; }
  return s;
}

const quiet = () => {};
const ENV = { THREADS_LIVE: "true", THREADS_JP_ACCESS_TOKEN: "jp", THREADS_US_ACCESS_TOKEN: "us" };

test("dry run never publishes or writes log (only reads /me to verify the account)", async () => {
  const api = fakeApi(); const log = { posts: {} };
  const s = await run({ now: new Date("2026-11-04T23:05:00Z"), schedule: approved(), log, env: { THREADS_JP_ACCESS_TOKEN: "jp" }, fetchImpl: api.fetchImpl, waitMs: 0, out: quiet });
  assert.equal(s.live, false); assert.deepEqual(s.dry_run.length, 1); assert.deepEqual(s.verified, ["JP: @go2busan.jp"]);
  assert.ok(api.calls.every((c) => !c.includes("graph.threads.net") || c.startsWith("GET") && c.endsWith("/me")));
  assert.deepEqual(log.posts, {});
});

test("drafts are never published", async () => {
  const api = fakeApi(); const log = { posts: {} };
  const s = await run({ now: new Date("2026-11-04T23:05:00Z"), schedule: buildSchedule(md, "2026-11-05"), log, env: ENV, fetchImpl: api.fetchImpl, waitMs: 0, out: quiet });
  assert.equal(s.published.length, 0); assert.ok(!api.calls.some((c) => c.includes("threads_publish")));
});

test("publishes the due JP post once; second run does not duplicate", async () => {
  const api = fakeApi(); const log = { posts: {} }; const sch = approved(); const now = new Date("2026-11-04T23:05:00Z");
  await run({ now, schedule: sch, log, env: ENV, fetchImpl: api.fetchImpl, waitMs: 0, out: quiet });
  assert.equal(log.posts["d01-jp-1"].status, "published");
  assert.equal(log.posts["d01-us-1"], undefined); // US 08:00 ET not due yet
  await run({ now, schedule: sch, log, env: ENV, fetchImpl: api.fetchImpl, waitMs: 0, out: quiet });
  assert.equal(api.calls.filter((c) => c.includes("threads_publish")).length, 1);
});

test("crash after publish: post found on account is recovered, not re-posted", async () => {
  const sch = approved(); const text = sch.posts.find((p) => p.id === "d01-jp-1").text;
  const api = fakeApi({ recentTexts: [text] }); const log = { posts: {} };
  await run({ now: new Date("2026-11-04T23:05:00Z"), schedule: sch, log, env: ENV, fetchImpl: api.fetchImpl, waitMs: 0, out: quiet });
  assert.equal(log.posts["d01-jp-1"].recovered, true);
  assert.ok(!api.calls.some((c) => c.includes("threads_publish") || c.startsWith("POST https://graph.threads.net/v1.0/U1/threads")));
});

test("5xx retries reuse the same container, capped at 3 attempts", async () => {
  const api = fakeApi({ failPublish: 5 }); const log = { posts: {} }; const sch = approved(); const now = new Date("2026-11-04T23:05:00Z");
  for (let i = 0; i < 5; i++) await run({ now, schedule: sch, log, env: ENV, fetchImpl: api.fetchImpl, waitMs: 0, out: quiet });
  const e = log.posts["d01-jp-1"];
  assert.equal(e.status, "failed"); assert.equal(e.attempts, 3);
  assert.equal(api.calls.filter((c) => c.endsWith("/U1/threads") && c.startsWith("POST")).length, 1); // one container only
});

test("posts more than 3h late are marked missed, not burst-posted", async () => {
  const api = fakeApi(); const log = { posts: {} };
  const s = await run({ now: new Date("2026-11-05T12:00:00Z"), schedule: approved(), log, env: ENV, fetchImpl: api.fetchImpl, waitMs: 0, out: quiet });
  assert.ok(s.missed.includes("d01-jp-1"));
  assert.ok(!api.calls.some((c) => c.includes("threads_publish") && false));
});

test("missing token in live mode is reported, nothing posted", async () => {
  const api = fakeApi(); const log = { posts: {} };
  const s = await run({ now: new Date("2026-11-04T23:05:00Z"), schedule: approved(), log, env: { THREADS_LIVE: "true" }, fetchImpl: api.fetchImpl, waitMs: 0, out: quiet });
  assert.equal(s.not_configured.length, 1); assert.equal(s.published.length, 0);
});

test("swapped tokens are refused: JP copy never goes to the US account", async () => {
  const api = fakeApi({ users: { jp: "go2busan.us", us: "go2busan.jp" } }); const log = { posts: {} };
  const s = await run({ now: new Date("2026-11-04T23:05:00Z"), schedule: approved(), log, env: ENV, fetchImpl: api.fetchImpl, waitMs: 0, out: quiet });
  assert.equal(s.published.length, 0); assert.match(s.failed.join(), /belongs to @go2busan.us, expected @go2busan.jp/);
  assert.ok(!api.calls.some((c) => c.startsWith("POST")));
});

// ---- link replies ----
function withReplies(s) {
  for (const p of s.posts) { const path = pathFor(p); if (path) { const url = guideUrl(path, p.market, p.day); p.link_reply = { url, text: `guide 👇\n${url}` }; } }
  return s;
}

test("link mapping: JP -> /ja/ pages, US -> English pages, all pages exist", () => {
  const s = withReplies(buildSchedule(md, "2026-11-04"));
  const withLink = s.posts.filter((p) => p.link_reply);
  assert.ok(withLink.length >= 20);
  for (const p of withLink) assert.deepEqual(checkLinkReply(p), [], p.id);
  assert.match(s.posts.find((p) => p.id === "d08-jp-2").link_reply.url, /\/ja\/guides\/airport-to-haeundae\//);
  assert.equal(s.posts.find((p) => p.id === "d08-jp-1").link_reply, undefined);
  assert.match(s.posts.find((p) => p.id === "d01-us-1").link_reply.url, /utm_campaign=threads30_us&utm_content=day01/);
});

test("link reply is posted as a reply to the new thread, once", async () => {
  const api = fakeApi(); const log = { posts: {} }; const sch = withReplies(approved()); const now = new Date("2026-11-04T23:05:00Z");
  const bodies = []; const f = async (u, init = {}) => { if (init.body) bodies.push(String(init.body)); return api.fetchImpl(u, init); };
  await run({ now, schedule: sch, log, env: ENV, fetchImpl: f, waitMs: 0, out: quiet });
  const e = log.posts["d01-jp-1"];
  assert.equal(e.status, "published"); assert.equal(e.reply_status, "done");
  assert.ok(bodies.some((b) => b.includes("reply_to_id=" + e.thread_id)));
  await run({ now, schedule: sch, log, env: ENV, fetchImpl: f, waitMs: 0, out: quiet });
  assert.equal(bodies.filter((b) => b.includes("reply_to_id")).length, 1);
});

test("a failed reply never undoes or reposts the main post; retried next run", async () => {
  let failReply = 1; const base = fakeApi(); const log = { posts: {} }; const sch = withReplies(approved()); const now = new Date("2026-11-04T23:05:00Z");
  const f = async (u, init = {}) => { if (String(init.body || "").includes("reply_to_id") && failReply-- > 0) return { ok: false, status: 503, json: async () => ({ error: { message: "busy" } }) }; return base.fetchImpl(u, init); };
  await run({ now, schedule: sch, log, env: ENV, fetchImpl: f, waitMs: 0, out: quiet });
  assert.equal(log.posts["d01-jp-1"].status, "published"); assert.equal(log.posts["d01-jp-1"].reply_status, "retry_pending");
  await run({ now: new Date("2026-11-04T23:20:00Z"), schedule: sch, log, env: ENV, fetchImpl: f, waitMs: 0, out: quiet });
  assert.equal(log.posts["d01-jp-1"].reply_status, "done");
  assert.equal(base.calls.filter((c) => c.includes("threads_publish")).length, 2); // 1 post + 1 reply
});

// ---- Taiwan ----
const twMd = readFileSync(CALENDAR_TW_MD, "utf8");
const allMd = md + "\n" + twMd;

test("Taiwan calendar: 60 Traditional Chinese posts, 2 per day, all pass checks", () => {
  const tw = parseCalendar(twMd).filter((p) => p.market === "TW");
  assert.equal(tw.length, 60);
  for (let d = 1; d <= 30; d++) assert.equal(tw.filter((p) => p.day === d).length, 2, `day ${d}`);
  for (const p of tw) { const c = checkPost(p); assert.deepEqual(c.issues, [], p.id); assert.deepEqual(c.flags, [], p.id); }
});

test("adding Taiwan keeps JP/US untouched, uses its own start date and Asia/Taipei", () => {
  const s = approved("2026-11-04"); const before = JSON.stringify(s.posts);
  addMarket(s, allMd, "TW", "2026-11-07");
  assert.equal(JSON.stringify(s.posts.filter((p) => p.market !== "TW")), before);
  const p = s.posts.find((x) => x.id === "d01-tw-1");
  assert.equal(p.local_date, "2026-11-07"); assert.equal(p.publish_at_utc, "2026-11-07T00:00:00.000Z"); assert.equal(p.status, "draft");
  assert.deepEqual(validateSchedule(s, allMd), []);
  assert.throws(() => addMarket(s, allMd, "TW", "2026-11-08"), /already/);
});

test("Taiwan link replies go only to /zh-tw/ pages", () => {
  const s = addMarket(buildSchedule(md, "2026-11-04", ["JP", "US"]), allMd, "TW", "2026-11-07"); withReplies(s);
  const tw = s.posts.filter((p) => p.market === "TW" && p.link_reply);
  assert.ok(tw.length >= 10);
  for (const p of tw) { assert.match(p.link_reply.url, /go2busan\.com\/zh-tw\//); assert.deepEqual(checkLinkReply(p), [], p.id); }
});

test("Taiwan drafts never publish even with a token", async () => {
  const api = fakeApi({ users: { jp: "go2busan.jp", us: "go2busan.us", tw: "go2busan.tw" } }); const log = { posts: {} };
  const s = addMarket(approved("2026-11-04"), allMd, "TW", "2026-11-04");
  await run({ now: new Date("2026-11-04T00:05:00Z"), schedule: s, log, env: { ...ENV, THREADS_TW_ACCESS_TOKEN: "tw" }, fetchImpl: api.fetchImpl, waitMs: 0, out: quiet });
  assert.equal(Object.keys(log.posts).filter((k) => k.includes("-tw-")).length, 0);
});

// ---- schedule coverage of the publisher cron (owner asked for low-frequency checks) ----
function cronHours() {
  const yml = readFileSync(".github/workflows/threads-publisher.yml", "utf8");
  const m = yml.match(/cron:\s*"(\d+) ([\d,]+) \* \* \*"/);
  assert.ok(m, "publisher cron must be a fixed minute + explicit UTC hour list");
  return { minute: Number(m[1]), hours: m[2].split(",").map(Number) };
}
const nextRunAfter = (iso, { minute, hours }) => {
  const t = new Date(iso);
  for (let i = 0; i < 48 * 60; i++) {
    const c = new Date(t.getTime() + i * 60000);
    if (c.getUTCMinutes() === minute && hours.includes(c.getUTCHours())) return c;
  }
  return null;
};

// Slots fall exactly on UTC hours listed in the cron, so the computed wait is the cron minute (7 min).
// The 60-minute bound leaves room for one extra slot hour being added later without hiding a missing hour.
test("publisher cron reaches every scheduled post within 60 minutes of its slot (both US DST states)", () => {
  const cron = cronHours();
  assert.ok(cron.hours.length <= 8, "keep scheduled runs low (no 15-minute polling)");
  const sched = JSON.parse(readFileSync("content/social/threads-30day/schedule.json", "utf8"));
  const sample = [...sched.posts.map((p) => p.publish_at_utc)];
  // Also check each market slot on a date in US daylight time and in US standard time.
  for (const d of ["2027-07-01", "2027-01-15"]) for (const [tz, slots] of [["Asia/Tokyo", ["08:00", "20:00"]], ["Asia/Taipei", ["08:00", "20:00"]], ["America/New_York", ["08:00", "18:00"]]])
    for (const s of slots) sample.push(localToUtc(d, s, tz));
  for (const iso of sample) {
    const run = nextRunAfter(iso, cron);
    assert.ok(run, `no run after ${iso}`);
    const lateMin = (run - new Date(iso)) / 60000;
    assert.ok(lateMin <= 60, `${iso} would wait ${lateMin} min for the next run`);
  }
});

test("a retry with an old container is abandoned after 12h instead of posting a stale post", async () => {
  const api = fakeApi(); const sch = approved();
  const log = { posts: { "d01-jp-1": { status: "retry_pending", attempts: 1, creation_id: "C9", container_created_at: "2026-11-04T23:05:00Z" } } };
  // d01-jp-1 was due 2026-11-04T23:00Z; 2 days later it must not be published.
  const s = await run({ now: new Date("2026-11-06T23:05:00Z"), schedule: sch, log, env: ENV, fetchImpl: api.fetchImpl, waitMs: 0, out: quiet });
  assert.equal(log.posts["d01-jp-1"].status, "missed");
  assert.ok(s.missed.includes("d01-jp-1"));
  assert.ok(!s.published.some((x) => x.startsWith("d01-jp-1")));
});

test("a retry with a container still completes when only a little late (within 12h)", async () => {
  const api = fakeApi(); const sch = approved();
  const log = { posts: { "d01-jp-1": { status: "retry_pending", attempts: 1, creation_id: "C9", container_created_at: "2026-11-04T23:05:00Z" } } };
  await run({ now: new Date("2026-11-05T04:05:00Z"), schedule: sch, log, env: ENV, fetchImpl: api.fetchImpl, waitMs: 0, out: quiet });
  assert.equal(log.posts["d01-jp-1"].status, "published");
});

test("stale-retry cutoff is measured from the scheduled slot: exactly 12h still completes, 12h+1min is missed", async () => {
  const sch = approved(); const slot = sch.posts.find((p) => p.id === "d01-jp-1").publish_at_utc; // 2026-11-04T23:00Z
  const at = (min) => new Date(new Date(slot).getTime() + min * 60000);
  const entryWith = () => ({ posts: { "d01-jp-1": { status: "retry_pending", attempts: 1, creation_id: "C9", container_created_at: slot } } });
  // Exactly 720 min after the slot: not stale (cutoff is "more than 12h").
  let log = entryWith(); let api = fakeApi();
  await run({ now: at(720), schedule: sch, log, env: ENV, fetchImpl: api.fetchImpl, waitMs: 0, out: quiet });
  assert.equal(log.posts["d01-jp-1"].status, "published");
  // 721 min after the slot: stale -> missed, not published.
  log = entryWith(); api = fakeApi();
  const s = await run({ now: at(721), schedule: sch, log, env: ENV, fetchImpl: api.fetchImpl, waitMs: 0, out: quiet });
  assert.equal(log.posts["d01-jp-1"].status, "missed");
  assert.ok(!s.published.some((x) => x.startsWith("d01-jp-1")));
});

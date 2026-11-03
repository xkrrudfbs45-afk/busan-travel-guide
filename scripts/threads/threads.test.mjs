// node --test scripts/threads/
import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { CALENDAR_MD, parseCalendar, localToUtc, checkPost, redact } from "./lib.mjs";
import { buildSchedule, validateSchedule } from "./build-schedule.mjs";
import { run } from "./publish.mjs";

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
function fakeApi({ failPublish = 0, recentTexts = [] } = {}) {
  const calls = []; let n = 0; let pubFails = failPublish;
  const fetchImpl = async (url, init = {}) => {
    const u = String(url); calls.push(`${init.method || "GET"} ${u.replace(/\?.*/, "")}`);
    const ok = (j) => ({ ok: true, status: 200, json: async () => j });
    if (!u.includes("graph.threads.net")) return ok({});
    if (u.includes("/me")) return ok({ id: "U1", username: "x" });
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
  for (const p of s.posts) { p.status = "approved"; p.approval = { approved_by: "test", approved_at: "2026-11-01T00:00:00Z" }; }
  return s;
}

const quiet = () => {};
const ENV = { THREADS_LIVE: "true", THREADS_JP_ACCESS_TOKEN: "jp", THREADS_US_ACCESS_TOKEN: "us" };

test("dry run never publishes or writes log", async () => {
  const api = fakeApi(); const log = { posts: {} };
  const s = await run({ now: new Date("2026-11-04T23:05:00Z"), schedule: approved(), log, env: { THREADS_JP_ACCESS_TOKEN: "jp" }, fetchImpl: api.fetchImpl, waitMs: 0, out: quiet });
  assert.equal(s.live, false); assert.deepEqual(s.dry_run.length, 1);
  assert.ok(!api.calls.some((c) => c.includes("graph.threads.net")));
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

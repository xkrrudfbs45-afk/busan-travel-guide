// node --test scripts/instagram/
import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { checkPost } from "./lib.mjs";
import { run } from "./publish.mjs";
import { cardHtml, dueForRender, specHash } from "./render.mjs";

const realSchedule = JSON.parse(readFileSync("content/social/instagram/schedule.json", "utf8"));
// Synthetic real-photo post (the pipeline still supports photo cards; production posts now use AI illustrations).
const photoPost = { id: "ig-test-photo", account: "US", status: "draft", publish_at_utc: "2026-11-05T23:00:00.000Z",
  photo: { url: "https://upload.wikimedia.org/x.jpg", credit: "Photo: Busan Metropolitan City / Wikimedia Commons · CC BY-SA 4.0" },
  cards: [{ tag: "T", headline: ["A"], date_line: "d" }, { tag: "T2", headline: ["B"], date_line: "e" }], caption: "Photo: Wikimedia Commons (CC BY-SA 4.0) #a #b #c", verification: { status: "needs_check" } };
const schedule = { ...realSchedule, posts: [photoPost, ...realSchedule.posts] };
const scheduledPost = schedule.posts[0];
const unverifiedApprovedPost = { ...scheduledPost, status: "approved" };
const unverifiedSchedule = { ...schedule, posts: schedule.posts.map((p) => p.id === scheduledPost.id ? unverifiedApprovedPost : p) };
const post = { ...unverifiedApprovedPost, verification: { ...unverifiedApprovedPost.verification, status: "verified" } };
const verifiedSchedule = { ...schedule, posts: schedule.posts.map((p) => p.id === post.id ? post : p) };
const cardFiles = (n) => Array.from({ length: n }, (_, i) => `${String(i + 1).padStart(2, "0")}.jpg`);
const qaOk = () => ({ ok: true, problems: [], spec_hash: specHash(post), card_count: post.cards.length });
const renderOk = () => ({ hash: specHash(post), files: cardFiles(post.cards.length) });
const after = new Date(new Date(post.publish_at_utc).getTime() + 60000);

test("schedule never labels an unverified post approved", () => {
  assert.ok(schedule.posts.every((p) => p.status !== "approved" || p.verification?.status === "verified"));
});
test("unverified approved post is blocked from rendering and publishing", async () => {
  assert.ok(checkPost(unverifiedApprovedPost).some((i) => /verification.status=verified/.test(i)));
  assert.equal(dueForRender(unverifiedSchedule, { posts: {} }, after).some((p) => p.id === scheduledPost.id), false);
  assert.equal(checkPost(post).length, 0);
  const s = await run({
    now: after, schedule: unverifiedSchedule, log: { posts: {} },
    env: { INSTAGRAM_LIVE: "true", INSTAGRAM_US_ACCESS_TOKEN: "t" },
    baseUrl: "https://x", qaFor: qaOk, renderFor: renderOk,
    mkClient: () => { throw new Error("unverified post must not call Instagram API"); }
  });
  assert.equal(s.published.length, 0);
  assert.ok(s.failed.some((i) => /verification.status=verified/.test(i)));
});
test("missing photo credit is rejected", () => assert.ok(checkPost({ ...post, photo: { url: "x", credit: "" } }).length));
test("card html always carries the credit line", () => assert.ok(cardHtml(post.cards[0], "data:,", post.photo.credit).includes("CC BY-SA 4.0")));
test("render planned only for approved unpublished posts", () => {
  assert.equal(dueForRender(verifiedSchedule, { posts: {} }, after).filter((x) => x.id === post.id).length, 1);
  assert.equal(dueForRender(verifiedSchedule, { posts: { [post.id]: { status: "published" } } }, after).filter((x) => x.id === post.id).length, 0);
});
test("dry run publishes nothing", async () => {
  const s = await run({ now: after, schedule: verifiedSchedule, log: { posts: {} }, env: { INSTAGRAM_US_ACCESS_TOKEN: "t" }, baseUrl: "https://x", qaFor: qaOk, renderFor: renderOk });
  assert.equal(s.dry_run.length, 1); assert.equal(s.published.length, 0);
});
test("live: wrong account token is refused", async () => {
  const mk = () => ({ me: async () => ({ username: "someone.else", user_id: "1" }) });
  const s = await run({ now: after, schedule: verifiedSchedule, log: { posts: {} }, env: { INSTAGRAM_LIVE: "true", INSTAGRAM_US_ACCESS_TOKEN: "t" }, baseUrl: "https://x", qaFor: qaOk, renderFor: renderOk, mkClient: mk });
  assert.equal(s.published.length, 0); assert.match(s.failed[0], /expected @go2busan.us/);
});
test("live: publishes carousel in order and logs it", async () => {
  const calls = [];
  const mk = () => ({
    me: async () => ({ username: "go2busan.us", user_id: "9" }), recent: async () => ({ data: [] }),
    child: async (id, u) => (calls.push(["child", u]), { id: `c${calls.length}` }),
    carousel: async (id, kids) => (calls.push(["carousel", kids.length]), { id: "car" }),
    status: async () => ({ status_code: "FINISHED" }), publish: async () => (calls.push(["publish"]), { id: "m1" }),
    permalink: async () => ({ permalink: "https://instagram.com/p/x" }),
  });
  const f = async () => ({ status: 200, headers: { get: () => "image/jpeg" } });
  const log = { posts: {} };
  const s = await run({ now: after, schedule: verifiedSchedule, log, env: { INSTAGRAM_LIVE: "true", INSTAGRAM_US_ACCESS_TOKEN: "t" }, baseUrl: "https://x", qaFor: qaOk, renderFor: renderOk, mkClient: mk, fetchImpl: f, waitMs: 0 });
  assert.equal(s.published.length, 1); assert.equal(log.posts[post.id].status, "published");
  assert.deepEqual(calls.map((c) => c[0]), ["child", "child", "carousel", "publish"]);
});

import { generateArt, artTodo } from "./art.mjs";
const aiPost = { ...post, id: "ig-us-art-test", art: { type: "ai", prompt: "A bowl of fish cake soup on a table, steam rising", credit: "Illustration: AI-generated · Go2Busan" }, photo: undefined };
test("AI art post passes; real place names in the prompt are refused", () => {
  assert.deepEqual(checkPost(aiPost), []);
  assert.ok(checkPost({ ...aiPost, art: { ...aiPost.art, prompt: "Gwangan Bridge at night" } }).some((i) => /real place/.test(i)));
  assert.ok(checkPost({ ...aiPost, art: { ...aiPost.art, credit: "Go2Busan" } }).some((i) => /AI-generated/.test(i)));
});
test("art generation: decodes image, reports API errors, skips existing files", async () => {
  const ok = async () => ({ ok: true, status: 200, json: async () => ({ data: [{ b64_json: Buffer.from("png").toString("base64") }] }) });
  assert.equal((await generateArt("x", { key: "k", fetchImpl: ok })).toString(), "png");
  const bad = async () => ({ ok: false, status: 401, json: async () => ({ error: { message: "bad key" } }) });
  await assert.rejects(generateArt("x", { key: "k", fetchImpl: bad }), /401/);
  assert.equal(artTodo({ posts: [aiPost] }, "/nonexistent").length, 1);
});

// ---- 7-day series (v2) data checks ----
import { readFileSync as rf } from "node:fs";
test("v2 series posts are drafts, valid, share backgrounds per topic and have registered sources", () => {
  const sched = realSchedule;
  const reg = JSON.parse(rf("content/social/instagram/source-register.json", "utf8"));
  const v2 = sched.posts.filter((p) => p.design === "v2");
  assert.equal(v2.length, 69); // 21 launch series + 45 fifteen-day drafts + 3 Nov 28 event drafts
  for (const p of v2) {
    assert.deepEqual(checkPost(p), [], p.id);
    // Only posts whose topic was fact-checked (verification.verified) may be approved; everything else stays a draft.
    if (p.status === "approved") assert.equal(p.verification.status, "verified", `${p.id} approved without verification`);
    else assert.equal(p.status, "draft", p.id);
    assert.ok(reg.topics[p.verification.register], `${p.id} register`);
  }
  const gwangbok = v2.filter((p) => p.verification.register === "ig-fresh15-16");
  assert.equal(gwangbok.length, 3);
  assert.ok(gwangbok.every((p) => p.status === "draft" && p.verification.status === "needs_check"));
  assert.ok(gwangbok.every((p) => p.publish_at_utc.startsWith("2026-11-28T")));
  const bySet = {};
  for (const p of v2) (bySet[p.art.set] ??= []).push(p);
  for (const [set, ps] of Object.entries(bySet)) {
    assert.equal(ps.length, 3, set);
    assert.equal(new Set(ps.map((p) => JSON.stringify(p.art.prompts))).size, 1, `${set} backgrounds identical across languages`);
    assert.equal(new Set(ps.map((p) => p.art.prompts.join("|"))).size, 1);
  }
});

test("art gate limits generation to listed sets", () => {
  const all = artTodo(realSchedule, "/nonexistent", null).filter((t) => /^d\d\d-/.test(t.file)).length;
  const one = artTodo(realSchedule, "/nonexistent", ["d01-fireworks-v2"]).filter((t) => /^d\d\d-/.test(t.file));
  assert.equal(all, 35);
  assert.equal(one.length, 5);
});

test("QA gate: stale, legacy, missing or failed render state blocks publishing with zero API calls and no attempt", async () => {
  const n = post.cards.length, h = specHash(post);
  const q = (o = {}) => ({ ok: true, problems: [], spec_hash: h, card_count: n, ...o });
  const r = (o = {}) => ({ hash: h, files: cardFiles(n), ...o });
  const cases = {
    "missing QA": [() => null, r],
    "ok:false": [() => q({ ok: false, problems: ["card 5: .body text overflows horizontally"] }), r],
    "ok missing": [() => ({ problems: [] }), r],
    "legacy QA without hash": [() => ({ ok: true, problems: [] }), r],
    "stale QA hash": [() => q({ spec_hash: "000000000000" }), r],
    "QA card_count mismatch": [() => q({ card_count: n - 1 }), r],
    "missing .hash": [() => q(), () => r({ hash: null })],
    "stale .hash": [() => q(), () => r({ hash: "000000000000" })],
    "no JPEGs": [() => q(), () => r({ files: [] })],
    "partial JPEG set": [() => q(), () => r({ files: cardFiles(n).slice(0, n - 1) })],
    "extra stale JPEG": [() => q(), () => r({ files: cardFiles(n + 1) })],
  };
  for (const live of [true, false]) {
    for (const [name, [qaFor, renderFor]] of Object.entries(cases)) {
      let apiCalls = 0, fetches = 0;
      const env = { INSTAGRAM_US_ACCESS_TOKEN: "t", ...(live ? { INSTAGRAM_LIVE: "true" } : {}) };
      const log = { posts: {} };
      const s = await run({ now: after, schedule: verifiedSchedule, log, env, baseUrl: "https://x", qaFor, renderFor,
        mkClient: () => { apiCalls++; throw new Error("must not reach the API"); }, fetchImpl: async () => { fetches++; throw new Error("no network"); } });
      assert.equal(s.published.length, 0, name);
      assert.equal(s.blocked_qa.length, 1, name);
      assert.equal(s.dry_run.length, 0, name);
      assert.equal(apiCalls + fetches, 0, `${name}: no external calls`);
      assert.equal(log.posts[post.id]?.attempts ?? 0, 0, name);
      assert.ok(!["published", "failed"].includes(log.posts[post.id]?.status), name);
    }
  }
});

test("QA gate: a valid current render passes the gate", async () => {
  const s = await run({ now: after, schedule: verifiedSchedule, log: { posts: {} }, env: { INSTAGRAM_US_ACCESS_TOKEN: "t" }, baseUrl: "https://x", qaFor: qaOk, renderFor: renderOk });
  assert.equal(s.blocked_qa.length, 0);
  assert.equal(s.dry_run.length, 1);
});

test("QA gate: render identity is written by writeCards and read back by localRender", async () => {
  const { mkdtempSync, writeFileSync } = await import("node:fs");
  const { writeCards } = await import("./render.mjs");
  const { localRender, localQa, renderBlockReason } = await import("./publish.mjs");
  const dir = mkdtempSync("/tmp/igid-");
  const shots = post.cards.map((_, i) => [String(i + 1).padStart(2, "0"), Buffer.from("x")]);
  writeCards(dir, post.id, shots, [], { spec_hash: specHash(post), card_count: post.cards.length });
  assert.match(renderBlockReason(post, localQa(dir)(post.id), localRender(dir)(post.id)), /\.hash missing/);
  writeFileSync(`${dir}/${post.id}/.hash`, specHash(post));
  assert.equal(renderBlockReason(post, localQa(dir)(post.id), localRender(dir)(post.id)), null);
  assert.match(renderBlockReason({ ...post, caption: post.caption, cards: [...post.cards, post.cards[0]] }, localQa(dir)(post.id), localRender(dir)(post.id)), /stale/);
});

test("QA gate: localQa reads <cards>/<id>/qa.json and treats unreadable files as missing", async () => {
  const { mkdtempSync, mkdirSync, writeFileSync } = await import("node:fs");
  const { localQa } = await import("./publish.mjs");
  const dir = mkdtempSync("/tmp/igqa-");
  mkdirSync(`${dir}/a`); writeFileSync(`${dir}/a/qa.json`, JSON.stringify({ ok: true, problems: [] }));
  mkdirSync(`${dir}/b`); writeFileSync(`${dir}/b/qa.json`, "{not json");
  const q = localQa(dir);
  assert.equal(q("a").ok, true); assert.equal(q("b"), null); assert.equal(q("missing"), null);
});

test("QA gate: failed render keeps previews out of the publishable path", async () => {
  const { mkdtempSync, existsSync, readFileSync, writeFileSync, mkdirSync } = await import("node:fs");
  const { writeCards } = await import("./render.mjs");
  const dir = mkdtempSync("/tmp/igcards-");
  const shots = [["01", Buffer.from("a")], ["02", Buffer.from("b")]];
  assert.equal(writeCards(dir, "p", shots, []), true);
  assert.ok(existsSync(`${dir}/p/01.jpg`));
  assert.equal(writeCards(dir, "p", shots, ["p card 2: overflow"]), false);
  assert.ok(!existsSync(`${dir}/p/01.jpg`) && !existsSync(`${dir}/p/02.jpg`), "stale publishable cards removed");
  assert.ok(existsSync(`${dir}/p/qa-failed/02.jpg`));
  assert.equal(JSON.parse(readFileSync(`${dir}/p/qa.json`, "utf8")).ok, false);
  assert.equal(writeCards(dir, "p", shots, []), true);
  assert.ok(existsSync(`${dir}/p/02.jpg`) && !existsSync(`${dir}/p/qa-failed`), "fixed render restores cards");
});

test("render: shrinking a carousel (4 -> 3) removes the stale extra card, on both the ok and QA-failed paths", async () => {
  const { mkdtempSync, existsSync, writeFileSync } = await import("node:fs");
  const { writeCards } = await import("./render.mjs");
  const mk = (n) => Array.from({ length: n }, (_, i) => [String(i + 1).padStart(2, "0"), Buffer.from("x")]);
  for (const problems of [[], ["p card 1: overflow"]]) {
    const dir = mkdtempSync("/tmp/igshrink-");
    writeCards(dir, "p", mk(4), []);
    assert.ok(existsSync(`${dir}/p/04.jpg`));
    writeFileSync(`${dir}/p/notes.txt`, "keep");
    writeCards(dir, "p", mk(3), problems, { spec_hash: "h", card_count: 3 });
    assert.ok(!existsSync(`${dir}/p/04.jpg`), `stale 04.jpg removed (problems=${problems.length})`);
    assert.equal(existsSync(`${dir}/p/03.jpg`), problems.length === 0);
    assert.ok(existsSync(`${dir}/p/notes.txt`), "non-card files untouched");
  }
});

test("render planner: legacy or stale QA identity forces a re-render", async () => {
  const { mkdtempSync, mkdirSync, writeFileSync } = await import("node:fs");
  const { needsRender } = await import("./render.mjs");
  const dir = mkdtempSync("/tmp/igneeds-"); mkdirSync(`${dir}/${post.id}`);
  const h = specHash(post), qa = (o) => writeFileSync(`${dir}/${post.id}/qa.json`, JSON.stringify(o));
  assert.equal(needsRender(post, dir), true); // nothing rendered
  writeFileSync(`${dir}/${post.id}/.hash`, h);
  assert.equal(needsRender(post, dir), true); // .hash but no qa.json
  qa({ ok: true, problems: [] }); assert.equal(needsRender(post, dir), true); // legacy qa
  qa({ ok: true, problems: [], spec_hash: "000000000000", card_count: post.cards.length }); assert.equal(needsRender(post, dir), true);
  qa({ ok: true, problems: [], spec_hash: h, card_count: post.cards.length }); assert.equal(needsRender(post, dir), false);
});

test("render planner: failed QA with a current hash is retried for approved posts and held for drafts", async () => {
  const { mkdtempSync, mkdirSync, writeFileSync } = await import("node:fs");
  const { needsRender } = await import("./render.mjs");
  const dir = mkdtempSync("/tmp/igretry-"); mkdirSync(`${dir}/${post.id}`);
  const h = specHash(post);
  writeFileSync(`${dir}/${post.id}/.hash`, h);
  writeFileSync(`${dir}/${post.id}/qa.json`, JSON.stringify({ ok: false, problems: ["x"], spec_hash: h, card_count: post.cards.length }));
  assert.equal(needsRender({ ...post, status: "approved" }, dir), true, "approved: retry failed QA");
  assert.equal(needsRender({ ...post, status: "draft" }, dir), false, "draft: hold until spec changes");
});

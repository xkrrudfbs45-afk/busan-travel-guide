// node --test scripts/instagram/
import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { checkPost } from "./lib.mjs";
import { run } from "./publish.mjs";
import { cardHtml, dueForRender } from "./render.mjs";

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
    baseUrl: "https://x",
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
  const s = await run({ now: after, schedule: verifiedSchedule, log: { posts: {} }, env: { INSTAGRAM_US_ACCESS_TOKEN: "t" }, baseUrl: "https://x" });
  assert.equal(s.dry_run.length, 1); assert.equal(s.published.length, 0);
});
test("live: wrong account token is refused", async () => {
  const mk = () => ({ me: async () => ({ username: "someone.else", user_id: "1" }) });
  const s = await run({ now: after, schedule: verifiedSchedule, log: { posts: {} }, env: { INSTAGRAM_LIVE: "true", INSTAGRAM_US_ACCESS_TOKEN: "t" }, baseUrl: "https://x", mkClient: mk });
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
  const s = await run({ now: after, schedule: verifiedSchedule, log, env: { INSTAGRAM_LIVE: "true", INSTAGRAM_US_ACCESS_TOKEN: "t" }, baseUrl: "https://x", mkClient: mk, fetchImpl: f, waitMs: 0 });
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
  assert.equal(v2.length, 21);
  for (const p of v2) {
    assert.deepEqual(checkPost(p), [], p.id);
    assert.equal(p.status, "draft");
    assert.ok(reg.topics[p.verification.register], `${p.id} register`);
  }
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
  const one = artTodo(realSchedule, "/nonexistent", ["d01-fireworks"]).filter((t) => /^d\d\d-/.test(t.file));
  assert.equal(all, 35);
  assert.equal(one.length, 5);
});

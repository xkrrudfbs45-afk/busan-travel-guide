// node --test scripts/instagram/
import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { checkPost } from "./lib.mjs";
import { run } from "./publish.mjs";
import { cardHtml, dueForRender } from "./render.mjs";

const schedule = JSON.parse(readFileSync("content/social/instagram/schedule.json", "utf8"));
const post = schedule.posts[0];
const after = new Date(new Date(post.publish_at_utc).getTime() + 60000);

test("schedule post passes hard checks", () => assert.deepEqual(checkPost(post), []));
test("missing photo credit is rejected", () => assert.ok(checkPost({ ...post, photo: { url: "x", credit: "" } }).length));
test("card html always carries the credit line", () => assert.ok(cardHtml(post.cards[0], "data:,", post.photo.credit).includes("CC BY-SA 4.0")));
test("render planned only for approved unpublished posts", () => {
  assert.equal(dueForRender(schedule, { posts: {} }, after).filter((x) => x.id === post.id).length, 1);
  assert.equal(dueForRender(schedule, { posts: { [post.id]: { status: "published" } } }, after).filter((x) => x.id === post.id).length, 0);
});
test("dry run publishes nothing", async () => {
  const s = await run({ now: after, schedule, log: { posts: {} }, env: { INSTAGRAM_US_ACCESS_TOKEN: "t" }, baseUrl: "https://x" });
  assert.equal(s.dry_run.length, 1); assert.equal(s.published.length, 0);
});
test("live: wrong account token is refused", async () => {
  const mk = () => ({ me: async () => ({ username: "someone.else", user_id: "1" }) });
  const s = await run({ now: after, schedule, log: { posts: {} }, env: { INSTAGRAM_LIVE: "true", INSTAGRAM_US_ACCESS_TOKEN: "t" }, baseUrl: "https://x", mkClient: mk });
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
  const s = await run({ now: after, schedule, log, env: { INSTAGRAM_LIVE: "true", INSTAGRAM_US_ACCESS_TOKEN: "t" }, baseUrl: "https://x", mkClient: mk, fetchImpl: f, waitMs: 0 });
  assert.equal(s.published.length, 1); assert.equal(log.posts[post.id].status, "published");
  assert.deepEqual(calls.map((c) => c[0]), ["child", "child", "carousel", "publish"]);
});

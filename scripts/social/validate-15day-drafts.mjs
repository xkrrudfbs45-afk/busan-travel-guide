#!/usr/bin/env node
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";

const ig = JSON.parse(readFileSync("content/social/instagram/nov12-26-drafts.json", "utf8")).posts;
const th = JSON.parse(readFileSync("content/social/threads-15day/nov12-26-drafts.json", "utf8")).posts;
const markets = ["US", "JP", "TW"];
const dates = Array.from({ length: 15 }, (_, i) => new Date(Date.UTC(2026, 10, 12 + i)).toISOString().slice(0, 10));
const timeZones = { US: "America/New_York", JP: "Asia/Tokyo", TW: "Asia/Taipei" };
const pathFor = (market) => market === "US" ? "/" : market === "JP" ? "/ja/" : "/zh-tw/";
const localParts = (utc, tz) => Object.fromEntries(new Intl.DateTimeFormat("en-CA", {
  timeZone: tz, year: "numeric", month: "2-digit", day: "2-digit",
  hour: "2-digit", minute: "2-digit", hourCycle: "h23"
}).formatToParts(new Date(utc)).map((x) => [x.type, x.value]));
const countBy = (items, fn) => {
  const out = {};
  for (const item of items) out[fn(item)] = (out[fn(item)] || 0) + 1;
  return out;
};

assert.equal(ig.length, 45, "Instagram campaign must contain 45 posts");
assert.equal(th.length, 90, "Threads campaign must contain 90 posts");
assert.deepEqual(countBy(ig, (p) => p.account), { US: 15, JP: 15, TW: 15 });
assert.deepEqual(countBy(th, (p) => p.market), { US: 30, JP: 30, TW: 30 });

for (const p of ig) {
  assert.equal(p.status, "draft", p.id + " must remain draft");
  assert.equal(p.verification?.status, "needs_check", p.id + " must remain unverified");
  assert.ok(dates.includes(p.publish_at_utc.slice(0, 10)), p.id + " outside campaign dates");
  assert.equal(p.cards?.length, 5, p.id + " must have five cards");
  assert.equal(p.art?.prompts?.length, 5, p.id + " must have five image prompts");
  assert.ok(p.art?.set && p.art?.stylized, p.id + " needs a stylized art set");
  assert.match(p.art?.credit || "", /AI/i, p.id + " needs AI art credit");
  assert.match(p.caption || "", /AI/i, p.id + " caption needs AI disclosure");
  assert.ok((p.caption.match(/#[^\\s#]+/g) || []).length >= 3, p.id + " needs hashtags");
  assert.ok(p.cards.at(-1)?.cta, p.id + " needs final-card CTA");
  const guide = new URL(p.guide_url);
  assert.equal(guide.hostname, "go2busan.com", p.id + " guide must use Go2Busan");
  assert.ok(guide.pathname.startsWith(pathFor(p.account)), p.id + " wrong localized guide path");
  assert.ok(existsSync("." + guide.pathname + "index.html"), p.id + " guide page missing");
  const bio = new URL(p.bio_link_url);
  assert.equal(bio.searchParams.get("utm_source"), "instagram", p.id + " missing Instagram UTM source");
  assert.equal(bio.searchParams.get("utm_medium"), "social", p.id + " missing Instagram UTM medium");
  assert.ok(bio.searchParams.get("utm_campaign"), p.id + " missing Instagram campaign UTM");
  assert.ok(bio.searchParams.get("utm_content"), p.id + " missing Instagram content UTM");
  const parts = localParts(p.publish_at_utc, timeZones[p.account]);
  assert.equal(parts.hour + ":" + parts.minute, "12:00", p.id + " must publish at local noon");
  assert.equal(parts.year + "-" + parts.month + "-" + parts.day, p.publish_at_utc.slice(0, 10), p.id + " local date mismatch");
}

for (const p of th) {
  assert.equal(p.status, "draft", p.id + " must remain draft");
  assert.equal(p.verification?.status, "needs_check", p.id + " must remain unverified");
  assert.ok(dates.includes(p.local_date), p.id + " outside campaign dates");
  assert.ok(["08:00", "20:00"].includes(p.local_time), p.id + " invalid local slot");
  assert.equal(p.tz, timeZones[p.market], p.id + " wrong timezone");
  const parts = localParts(p.publish_at_utc, p.tz);
  assert.equal(parts.year + "-" + parts.month + "-" + parts.day, p.local_date, p.id + " local date mismatch");
  assert.equal(parts.hour + ":" + parts.minute, p.local_time, p.id + " local time mismatch");
  assert.ok(p.text && [...p.text].length <= 500, p.id + " text empty or over 500 chars");
  const link = new URL(p.link_reply?.url);
  assert.equal(link.hostname, "go2busan.com", p.id + " guide must use Go2Busan");
  assert.ok(link.pathname.startsWith(pathFor(p.market)), p.id + " wrong localized guide path");
  for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content"]) {
    assert.ok(link.searchParams.get(key), p.id + " missing " + key);
  }
  assert.equal(link.searchParams.get("utm_source"), "threads", p.id + " wrong UTM source");
  if (p.market === "TW") assert.ok(/[\\u4e00-\\u9fff]/.test(p.text) && !/[\\u3040-\\u30ff]/.test(p.text), p.id + " must be Traditional Chinese, not Japanese");
  if (p.market === "JP") assert.ok(/[\\u3040-\\u30ff\\u4e00-\\u9fff]/.test(p.text), p.id + " must be Japanese");
  if (p.market === "US") assert.ok(!/[\\u3040-\\u30ff]/.test(p.text), p.id + " contains Japanese text");
}

assert.deepEqual(countBy(th, (p) => p.local_date), Object.fromEntries(dates.map((d) => [d, 6])));
assert.deepEqual(countBy(ig, (p) => p.publish_at_utc.slice(0, 10)), Object.fromEntries(dates.map((d) => [d, 3])));
assert.equal(new Set(ig.map((p) => p.account + "|" + p.caption)).size, ig.length, "duplicate Instagram captions found");
assert.equal(new Set(th.map((p) => p.market + "|" + p.local_date + "|" + p.text)).size, th.length, "duplicate Threads posts found");

for (const market of markets) {
  const firstDayIG = ig.find((p) => p.account === market && p.publish_at_utc.startsWith("2026-11-12"));
  const firstDayThreads = th.filter((p) => p.market === market && p.local_date === "2026-11-12");
  assert.match(firstDayIG.caption, /KTX/i, market + " Instagram first day must cover integrated KTX");
  assert.equal(firstDayThreads.length, 2, market + " needs two first-day Threads posts");
  assert.ok(firstDayThreads.every((p) => /KTX/i.test(p.text)), market + " Threads first day must cover integrated KTX");
}

console.log("15-day social draft validation passed: 45 Instagram + 90 Threads posts, 3 markets, 15 dates.");

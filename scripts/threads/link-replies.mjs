#!/usr/bin/env node
// Adds a "first reply with a guide link" to selected posts in schedule.json.
// Only posts whose copy clearly matches an existing localized guide get a link; JP links go to /ja/ pages,
// US links to English pages. No English fallback for Japanese posts. Post copy itself is not changed.
//
// Usage: node scripts/threads/link-replies.mjs            # apply mapping to schedule.json
//        node scripts/threads/link-replies.mjs --check    # validate existing link_reply fields
import { existsSync, readFileSync } from "node:fs";
import { SCHEDULE_FILE, readJson, writeJson } from "./lib.mjs";

const SITE = "https://go2busan.com";
// post id (without market) -> [English path, Japanese path, Traditional Chinese path] (null = no link)
export const LINKS = {
  "d01-1": ["/guides/busan-first-time-guide/", "/ja/guides/first-trip/", "/zh-tw/guides/first-trip/"],
  "d06-tw-2": [null, null, "/zh-tw/guides/jagalchi-market/"],
  "d07-tw-2": [null, null, "/zh-tw/guides/airport-to-haeundae/"],
  "d08-tw-1": [null, null, "/zh-tw/guides/transit-card/"],
  "d08-tw-2": [null, null, "/zh-tw/guides/haeundae-neighborhood-guide/"],
  "d09-tw-2": [null, null, "/zh-tw/guides/local-food-by-neighborhood/"],
  "d10-tw-1": [null, null, "/zh-tw/guides/gwangalli-neighborhood-guide/"],
  "d10-tw-2": [null, null, "/zh-tw/guides/nampo-neighborhood-guide/"],
  "d11-tw-1": [null, null, "/zh-tw/guides/busan-eomuk-history/"],
  "d03-1": ["/guides/busan-neighborhood-food-guide/", "/ja/guides/local-food-by-neighborhood/", "/zh-tw/guides/local-food-by-neighborhood/"],
  "d04-1": ["/guides/jagalchi-market-no-surprise-bill/", "/ja/guides/jagalchi-market/", "/zh-tw/guides/jagalchi-market/"],
  "d05-1": ["/guides/things-to-do-in-busan/", "/ja/guides/things-to-do-in-busan/", "/zh-tw/guides/things-to-do-in-busan/"],
  "d06-1": ["/guides/busan-rainy-day-guide/", "/ja/guides/rainy-day/", "/zh-tw/guides/rainy-day/"],
  "d07-1": ["/guides/busan-three-days/", "/ja/guides/three-days/", "/zh-tw/guides/three-days/"],
  "d08-us-1": ["/guides/gimhae-airport-to-haeundae/", null, null],   // US post 1 is the airport/luggage post
  "d08-jp-2": [null, "/ja/guides/airport-to-haeundae/", null],
  "d08-tw-1": [null, null, "/zh-tw/guides/airport-to-haeundae/"],   // TW post 1 is the arrival/luggage post,       // JP post 2 is the airport post
  "d09-1": ["/guides/where-to-stay-busan/", "/ja/guides/where-to-stay-busan/", "/zh-tw/guides/where-to-stay-busan/"],
  "d13-1": ["/guides/busan-local-culture/", null, null],
  "d16-1": ["/guides/busan-food-stories/", "/ja/guides/busan-food-stories/", "/zh-tw/guides/busan-food-stories/"],
  "d22-1": ["/guides/busan-winter-travel-guide/", "/ja/guides/busan-winter-travel-guide/", "/zh-tw/guides/busan-winter-travel-guide/"],
  "d25-1": ["/guides/busan-travel-budget/", null, null],
};

const REPLY_TEXT = {
  US: (url) => `More detail in our local Busan guide 👇\n${url}`,
  JP: (url) => `詳しくはGo2Busanの釜山ガイドで👇\n${url}`,
  TW: (url) => `更多細節請看 Go2Busan 釜山在地指南👇\n${url}`,
};

export function guideUrl(path, market, day) {
  const u = new URL(SITE + path);
  u.searchParams.set("utm_source", "threads");
  u.searchParams.set("utm_medium", "social");
  u.searchParams.set("utm_campaign", `threads30_${market.toLowerCase()}`);
  u.searchParams.set("utm_content", `day${String(day).padStart(2, "0")}`);
  return u.toString();
}

export function pathFor(p) {
  const [d, , slot] = p.id.split("-");                 // e.g. d08-us-1
  const pair = LINKS[p.id] || LINKS[`${d}-${slot}`];   // post-specific entry wins over the day/slot entry
  return pair ? pair[{ US: 0, JP: 1, TW: 2 }[p.market]] : null;
}

export function checkLinkReply(p, { root = ".", sitemap = "" } = {}) {
  const errs = [];
  const lr = p.link_reply; if (!lr) return errs;
  let u; try { u = new URL(lr.url); } catch { return [`${p.id}: invalid link_reply url`]; }
  if (u.origin !== SITE) errs.push(`${p.id}: link must be on ${SITE}`);
  if (p.market === "JP" && !u.pathname.startsWith("/ja/")) errs.push(`${p.id}: JP reply must link to a /ja/ page`);
  if (p.market === "US" && /^\/(ja|zh-tw)\//.test(u.pathname)) errs.push(`${p.id}: US reply must link to an English page`);
  if (p.market === "TW" && !u.pathname.startsWith("/zh-tw/")) errs.push(`${p.id}: TW reply must link to a /zh-tw/ page`);
  if (!existsSync(`${root}${u.pathname}index.html`)) errs.push(`${p.id}: page missing in repo ${u.pathname}`);
  if (sitemap && !sitemap.includes(`${SITE}${u.pathname}`)) errs.push(`${p.id}: page not in sitemap ${u.pathname}`);
  if (!lr.text.includes(lr.url)) errs.push(`${p.id}: reply text must contain the url`);
  if ([...lr.text].length > 500) errs.push(`${p.id}: reply over 500 chars`);
  return errs;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const s = readJson(SCHEDULE_FILE, null);
  if (!s) { console.error("schedule.json missing"); process.exit(1); }
  const sitemap = existsSync("sitemap.xml") ? readFileSync("sitemap.xml", "utf8") : "";
  if (!process.argv.includes("--check")) {
    for (const p of s.posts) {
      const path = pathFor(p);
      if (!path) { delete p.link_reply; continue; }
      const url = guideUrl(path, p.market, p.day);
      p.link_reply = { url, text: REPLY_TEXT[p.market](url) };
    }
    writeJson(SCHEDULE_FILE, s);
  }
  const errs = s.posts.flatMap((p) => checkLinkReply(p, { sitemap }));
  if (errs.length) { console.error(errs.join("\n")); process.exit(1); }
  const n = (m) => s.posts.filter((p) => p.market === m && p.link_reply).length;
  console.log(`link replies OK: JP ${n("JP")}, US ${n("US")}, TW ${n("TW")}`);
  for (const p of s.posts.filter((x) => x.link_reply)) console.log(`  ${p.id}  ${new URL(p.link_reply.url).pathname}`);
}

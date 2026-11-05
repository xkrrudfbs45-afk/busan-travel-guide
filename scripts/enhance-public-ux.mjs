#!/usr/bin/env node
// Third post-build pass on public/ (after enhance-public-extras.mjs). Source HTML stays untouched.
//  1. "Keep exploring" block with 3 related guides (same language) at the end of every guide
//  2. Atom feeds per language (/feed.xml, /ja/feed.xml, /zh-tw/feed.xml) + autodiscovery links
//  3. "Recently updated guides" block on the three homepages
//  4. ux.css + ux.js (share, progress, anchors, jump menu, language hint, continue reading)
// Usage: node scripts/enhance-public-ux.mjs [publicDir=public]
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";
import { execFileSync } from "node:child_process";
import { SOCIAL, localeOf, formatDate } from "./enhance-public-extras.mjs";

const PUB = process.argv[2] || "public";
const SITE = "https://go2busan.com";
const stats = {};
const bump = (k, n = 1) => { stats[k] = (stats[k] || 0) + n; };
const ASSET_VERSION = (process.env.RENDER_GIT_COMMIT || (() => {
  try { return execFileSync("git", ["rev-parse", "HEAD"], { encoding: "utf8" }).trim(); } catch { return "dev"; }
})()).slice(0, 12);

const T = {
  en: { keep: "Keep exploring", recent: "Recently updated guides", follow: "Follow Go2Busan for new guides", feed: "Go2Busan guides", rss: "Subscribe via feed", lang: "en", src: "Sources for this guide", srcNote: "Go2Busan's last update", srcWarn: "Prices, hours and timetables change. Confirm them at the source before you go.", srcBy: "Updated date is when Go2Busan last edited this page, not a guarantee that every detail was re-checked." },
  ja: { keep: "あわせて読みたい", recent: "最近更新したガイド", follow: "新しいガイドはSNSでお知らせします", feed: "Go2Busan ガイド", rss: "フィードで購読", lang: "ja", src: "このガイドの参考ソース", srcNote: "Go2Busan最終更新", srcWarn: "料金・営業時間・時刻表は変更されます。出発前に各ソースで最新情報をご確認ください。", srcBy: "更新日はGo2Busanがこのページを最後に編集した日であり、すべての情報を再確認した日を意味するものではありません。" },
  tw: { keep: "延伸閱讀", recent: "最近更新的指南", follow: "追蹤 Go2Busan 獲得新指南", feed: "Go2Busan 指南", rss: "訂閱摘要", lang: "zh-TW", src: "本指南的參考來源", srcNote: "Go2Busan 最後更新", srcWarn: "費用、營業時間與時刻表可能變動，出發前請至來源確認最新資訊。", srcBy: "更新日期為 Go2Busan 最後編輯此頁的日期，並不代表所有細節皆已重新確認。" },
};
const PREFIX = { en: "", ja: "/ja", tw: "/zh-tw" };
const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const unesc = (s) => s.replace(/<[^>]+>/g, "").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (name.endsWith(".html")) out.push(p);
  }
  return out;
}
const urlPath = (file) => "/" + file.slice(PUB.length).replace(/^\/+/, "").replace(/index\.html$/, "");
const isGuideUrl = (u) => /^\/(?:ja\/|zh-tw\/)?guides\/[^/]+\/$/.test(u);

function tokens(text) {
  const out = [];
  const lower = text.toLowerCase();
  for (const w of lower.match(/[a-z0-9]{3,}/g) || []) out.push(w);
  for (const run of lower.match(/[぀-ヿ㐀-鿿]+/g) || []) {
    for (let i = 0; i < run.length - 1; i++) out.push(run.slice(i, i + 2));
  }
  return out;
}

function readGuide(file) {
  const h = readFileSync(file, "utf8");
  const url = urlPath(file);
  if (/<meta name="robots" content="[^"]*noindex/i.test(h)) return null;
  const title = unesc((h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || (h.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || "").replace(/\s*\|\s*Go2Busan$/, "");
  if (!title) return null;
  const desc = unesc((h.match(/<meta name="description" content="([^"]*)"/) || [])[1] || "");
  const h2 = [...h.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map((m) => unesc(m[1])).join(" ");
  const date = (h.match(/class="page-updated"[^>]*>[\s\S]*?<time datetime="(\d{4}-\d{2}-\d{2})"/) || [])[1] || null;
  const body = (h.match(/<div class="article-body"[\s\S]*?<\/div>\s*<\/article>/) || [""])[0] || h;
  const linked = new Set([...body.matchAll(/href="(\/(?:ja\/|zh-tw\/)?guides\/[^/"#?]+\/)"/g)].map((m) => m[1]));
  const tf = new Map();
  for (const t of tokens(`${title} ${title} ${desc} ${h2}`)) tf.set(t, (tf.get(t) || 0) + 1);
  return { file, url, loc: localeOf(url), title, desc, date, linked, tf, html: h };
}

function related(guide, pool, idf) {
  const norm = (tf) => {
    let s = 0; const v = new Map();
    for (const [t, c] of tf) { const w = c * (idf.get(t) || 0); v.set(t, w); s += w * w; }
    return { v, n: Math.sqrt(s) || 1 };
  };
  const a = norm(guide.tf);
  return pool.filter((g) => g.url !== guide.url && !guide.linked.has(g.url))
    .map((g) => {
      const b = norm(g.tf); let dot = 0;
      for (const [t, w] of a.v) if (b.v.has(t)) dot += w * b.v.get(t);
      return { g, score: dot / (a.n * b.n) };
    })
    .filter((x) => x.score > 0)
    .sort((x, y) => y.score - x.score || x.g.url.localeCompare(y.g.url))
    .slice(0, 3).map((x) => x.g);
}

function feedXml(loc, items) {
  const t = T[loc];
  const self = `${SITE}${PREFIX[loc]}/feed.xml`;
  const updated = items[0] ? `${items[0].date}T00:00:00Z` : new Date(0).toISOString();
  const entries = items.map((g) => `<entry><title>${esc(g.title)}</title><link href="${SITE}${g.url}"/><id>${SITE}${g.url}</id><updated>${g.date}T00:00:00Z</updated><summary>${esc(g.desc)}</summary></entry>`).join("");
  return `<?xml version="1.0" encoding="utf-8"?><feed xmlns="http://www.w3.org/2005/Atom" xml:lang="${t.lang}"><title>${esc(t.feed)}</title><link href="${self}" rel="self"/><link href="${SITE}${PREFIX[loc]}/"/><id>${SITE}${PREFIX[loc]}/</id><updated>${updated}</updated><author><name>Go2Busan</name></author>${entries}</feed>\n`;
}

const link = (g, withDate, loc) => `<li><a href="${g.url}">${esc(g.title)}</a>${withDate && g.date ? ` <time datetime="${g.date}">${esc(formatDate(g.date, loc))}</time>` : ""}</li>`;

if (import.meta.url === `file://${process.argv[1]}`) {
  const files = walk(PUB);
  const guides = files.filter((f) => isGuideUrl(urlPath(f))).map(readGuide).filter(Boolean);
  const byLoc = { en: [], ja: [], tw: [] };
  guides.forEach((g) => byLoc[g.loc].push(g));
  const feedLocs = new Set();

  for (const loc of Object.keys(byLoc)) {
    const pool = byLoc[loc];
    const df = new Map();
    pool.forEach((g) => new Set(g.tf.keys()).forEach((t) => df.set(t, (df.get(t) || 0) + 1)));
    const idf = new Map([...df].map(([t, c]) => [t, Math.log((pool.length + 1) / c) + 0.1]));
    const dated = pool.filter((g) => g.date).sort((a, b) => b.date.localeCompare(a.date) || a.url.localeCompare(b.url));
    if (dated.length >= 3) {
      writeFileSync(join(PUB, PREFIX[loc].replace(/^\//, ""), "feed.xml"), feedXml(loc, dated.slice(0, 30)));
      feedLocs.add(loc); bump("2 feeds written");
    }
    const social = (SOCIAL[loc] || []).map((s) => `<a href="${s.url}" rel="noopener" target="_blank">${s.name}</a>`).join(" · ");
    for (const g of pool) {
      let h = g.html;
      const rel = related(g, pool, idf);
      if (rel.length >= 2 && !h.includes('class="shell keep-exploring"') && h.includes("</main>")) {
        const t = T[loc];
        const block = `<section class="shell keep-exploring" aria-labelledby="keep-exploring-title"><h2 id="keep-exploring-title">${t.keep}</h2><ul>${rel.map((r) => link(r, false, loc)).join("")}</ul>${social ? `<p class="keep-follow">${t.follow}: ${social}</p>` : ""}</section>`;
        h = h.replace("</main>", block + "</main>"); bump("1 related blocks");
      }
      if (!h.includes('class="shell source-box"') && h.includes("</main>")) {
        const body = (h.match(/<article class="article-body"[\s\S]*?<\/article>/) || [""])[0];
        const seen = new Set(); const items = [];
        for (const m of body.matchAll(/<a [^>]*href="(https?:\/\/[^"]+)"[^>]*>([\s\S]*?)<\/a>/g)) {
          const u = m[1].replace(/&amp;/g, "&");
          if (/go2busan\.com|klook|agoda|instagram|threads|creativecommons|wikimedia|wikipedia|zimcarry\.net\/reserve|google\.com|naver\.|yanolja|seantour|c1\.co\.kr/i.test(u) || seen.has(u)) continue;
          const label = unesc(m[2]); if (!label || label.length > 90) continue;
          seen.add(u); items.push(`<li><a href="${esc(u)}" rel="noopener noreferrer" target="_blank">${esc(label)}</a></li>`);
        }
        if (items.length >= 2 && g.date) {
          const t = T[loc];
          const box = `<section class="shell source-box" aria-labelledby="source-box-title"><h2 id="source-box-title">${t.src}</h2><ul>${items.slice(0, 6).join("")}</ul><p>${t.srcNote}: <time datetime="${g.date}">${esc(formatDate(g.date, loc))}</time>. ${t.srcWarn}</p><p class="source-box__note">${t.srcBy}</p></section>`;
          h = h.replace('<section class="shell keep-exploring"', box + '<section class="shell keep-exploring"'); if (!h.includes("source-box")) h = h.replace("</main>", box + "</main>");
          bump("5 source boxes");
        }
      }
      writeFileSync(g.file, h);
    }
  }

  for (const file of files) {
    const url = urlPath(file);
    const loc = localeOf(url);
    let h = readFileSync(file, "utf8");
    const before = h;
    const noindex = /<meta name="robots" content="[^"]*noindex/i.test(h);
    if (!noindex && !h.includes("/assets/ux.css") && h.includes("</head>")) {
      const feed = feedLocs.has(loc) ? `<link rel="alternate" type="application/atom+xml" title="${esc(T[loc].feed)}" href="${PREFIX[loc]}/feed.xml">` : "";
      h = h.replace("</head>", `${feed}<link rel="stylesheet" href="/assets/ux.css?v=${ASSET_VERSION}"></head>`); bump("4 ux.css linked");
    }
    if (!noindex && !h.includes("/assets/js/ux.js") && h.includes("</body>")) {
      h = h.replace("</body>", `<script defer src="/assets/js/ux.js?v=${ASSET_VERSION}"></script></body>`); bump("4 ux.js linked");
    }
    if (url === `${PREFIX[loc]}/` || (loc === "en" && url === "/")) {
      const dated = byLoc[loc].filter((g) => g.date).sort((a, b) => b.date.localeCompare(a.date) || a.url.localeCompare(b.url)).slice(0, 5);
      const marker = '<section class="home-content shell" id="guides">';
      if (dated.length >= 3 && h.includes(marker) && !h.includes("recent-updates")) {
        const t = T[loc];
        h = h.replace(marker, `<section class="shell recent-updates" aria-labelledby="recent-updates-title"><h2 id="recent-updates-title">${t.recent}</h2><ul>${dated.map((g) => link(g, true, loc)).join("")}</ul>${feedLocs.has(loc) ? `<p><a href="${PREFIX[loc]}/feed.xml">${t.rss}</a></p>` : ""}</section>${marker}`);
        bump("3 home recent blocks");
      }
    }
    if (h !== before) writeFileSync(file, h);
  }
  console.log("enhance-public-ux:", JSON.stringify(stats));
}

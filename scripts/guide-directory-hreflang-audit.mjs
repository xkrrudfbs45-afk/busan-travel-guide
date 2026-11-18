#!/usr/bin/env node
// Guide-directory language cluster audit (issue #548): EN / JA / zh-TW / zh-CN directory pages must each
// have a self canonical, all four reciprocal hreflang alternates plus x-default (EN), a visible switcher to the
// other three directories, and one matching reciprocal cluster per URL in sitemap.xml.
import { readFileSync } from "node:fs";
const SITE = "https://go2busan.com";
const PAGES = { en: "/guides/", ja: "/ja/guides/", "zh-TW": "/zh-tw/guides/", "zh-CN": "/zh-cn/guides/" };
const problems = [];
const file = (p) => p.replace(/^\//, "") + "index.html";
for (const [lang, path] of Object.entries(PAGES)) {
  const html = readFileSync(file(path), "utf8");
  const canon = [...html.matchAll(/<link rel="canonical" href="([^"]+)"/g)].map((m) => m[1]);
  if (canon.length !== 1 || canon[0] !== SITE + path) problems.push(`${path}: canonical must be exactly ${SITE + path} (found ${canon.join(", ") || "none"})`);
  const alts = {};
  for (const m of html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)) {
    if (alts[m[1]]) problems.push(`${path}: duplicate hreflang ${m[1]}`);
    alts[m[1]] = m[2];
  }
  for (const [l, p] of Object.entries(PAGES)) if (alts[l] !== SITE + p) problems.push(`${path}: hreflang ${l} should be ${SITE + p} (found ${alts[l] || "none"})`);
  if (alts["x-default"] !== SITE + PAGES.en) problems.push(`${path}: x-default should be ${SITE + PAGES.en}`);
  for (const [l, p] of Object.entries(PAGES)) {
    if (l === lang) continue;
    if (!new RegExp(`<a class="language-pill" href="${p.replace(/\//g, "\\/")}"`).test(html)) problems.push(`${path}: missing visible language switcher to ${p}`);
  }
}
const sitemap = readFileSync("sitemap.xml", "utf8");
for (const path of Object.values(PAGES)) {
  const entries = [...sitemap.matchAll(/<url>[\s\S]*?<\/url>/g)].map((m) => m[0]).filter((u) => u.includes(`<loc>${SITE + path}</loc>`));
  if (entries.length !== 1) { problems.push(`sitemap: ${path} must appear exactly once (found ${entries.length})`); continue; }
  for (const [l, p] of [...Object.entries(PAGES), ["x-default", PAGES.en]]) {
    if (!entries[0].includes(`hreflang="${l}" href="${SITE + p}"`)) problems.push(`sitemap: ${path} missing alternate ${l} -> ${SITE + p}`);
  }
}
if (problems.length) { for (const p of problems) console.error("guide-directory-hreflang: " + p); process.exit(1); }
console.log("Guide directory hreflang audit passed: 4 pages, reciprocal EN/JA/zh-TW/zh-CN + x-default, sitemap cluster OK");

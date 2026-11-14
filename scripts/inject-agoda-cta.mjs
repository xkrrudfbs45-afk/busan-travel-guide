#!/usr/bin/env node
// Inject owner-supplied Agoda hotel-search links into relevant accommodation decision pages.
import { readFileSync, writeFileSync, existsSync } from "node:fs";
const args = process.argv.slice(2);
const CHECK = args.includes("--check");
const ROOT = CHECK ? "." : (args.find((a) => !a.startsWith("--")) || "public");
const data = JSON.parse(readFileSync("content/affiliate/agoda-placements.json", "utf8"));
const localeParams = { en: "en-us", ja: "ja-jp", "zh-tw": "zh-tw" };
const copy = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const problems = [];
const ids = new Set();
for (const p of data.pages) {
  const where = p.path;
  if (!localeParams[p.locale]) problems.push(where + ": unsupported locale");
  if (!/^agoda-stay-[a-z0-9-]+$/.test(p.id) || ids.has(p.id + ":" + p.locale)) problems.push(where + ": invalid or duplicate CTA id");
  ids.add(p.id + ":" + p.locale);
  const file = ROOT + "/" + p.path;
  if (!existsSync(file)) { problems.push(where + ": source page missing"); continue; }
  const html = readFileSync(file, "utf8");
  const count = html.split(p.before).length - 1;
  if (count !== 1) { problems.push(where + ": insertion anchor found " + count + " times (need exactly 1)"); continue; }
  const url = "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=" + data.cid + "&hl=" + localeParams[p.locale] + "&city=" + data.city;
  if (CHECK) continue;
  const block = '<section class="agoda-stay-cta" data-affiliate-placement="' + copy(p.id) + '" aria-labelledby="' + copy(p.id) + '-title"><div class="agoda-stay-cta__copy"><p class="agoda-stay-cta__eyebrow">AGODA · HOTEL SEARCH</p><h2 id="' + copy(p.id) + '-title">' + copy(p.title) + '</h2><p>' + copy(p.body) + '</p><p class="agoda-stay-cta__disclosure">' + (p.locale === "ja" ? "このリンクはアフィリエイトリンクです。予約が成立した場合、Go2Busanに紹介手数料が支払われることがあります。お客様の料金は変わりません。" : p.locale === "zh-tw" ? "此為聯盟連結。若透過此連結完成符合條件的預訂，Go2Busan 可能獲得推薦佣金，您的費用不會因此增加。" : "This is an affiliate link. Go2Busan may earn a commission from qualifying bookings at no extra cost to you.") + ' <a href="' + (p.locale === "ja" ? "/ja/disclosure.html" : p.locale === "zh-tw" ? "/zh-tw/disclosure.html" : "/disclosure.html") + '">' + (p.locale === "ja" ? "提携リンクについて" : p.locale === "zh-tw" ? "聯盟連結揭露" : "Affiliate disclosure") + '</a></p></div><div class="agoda-stay-cta__action"><a href="' + url.replace(/&/g, "&amp;") + '" target="_blank" rel="sponsored nofollow noopener noreferrer">' + copy(p.button) + ' ↗</a></div></section>\n';
  if (html.includes('data-affiliate-placement="' + p.id + '"')) { problems.push(where + ": CTA already present in source"); continue; }
  writeFileSync(file, html.replace(p.before, block + p.before));
}
if (problems.length) { for (const p of problems) console.error("agoda-cta: " + p); process.exit(1); }
console.log(CHECK ? "Agoda CTA check passed: " + data.pages.length + " placements" : "Agoda CTAs injected: " + data.pages.length + " placements");

#!/usr/bin/env node
import { readFileSync, writeFileSync, existsSync } from "node:fs";
const CHECK = process.argv.includes("--check");
const ROOT = CHECK ? "." : (process.argv.slice(2).find((x) => !x.startsWith("--")) || "public");
const config = JSON.parse(readFileSync("assets/data/airport-transfer-fares.json", "utf8"));
const pages = [
  {path:"guides/gimhae-airport-to-haeundae/index.html",locale:"en",destination:"haeundae",before:'<h2 id="choose">Which option should you choose?</h2>'},
  {path:"ja/guides/airport-to-haeundae/index.html",locale:"ja",destination:"haeundae",before:'<h2 id="arrival-decisions">到着後に迷わないための3つの確認</h2>'},
  {path:"zh-tw/guides/airport-to-haeundae/index.html",locale:"zh-TW",destination:"haeundae",before:'<h2 id="arrival-decisions">抵達後不慌張：先確認三件事</h2>'},
  {path:"guides/gimhae-airport-to-seomyeon/index.html",locale:"en",destination:"seomyeon",before:'<h2 id="choose">Which option fits your arrival?</h2>'},
  {path:"ja/guides/airport-to-seomyeon/index.html",locale:"ja",destination:"seomyeon",before:'<h2 id="choose">到着状況別の選び方</h2>'},
  {path:"zh-tw/guides/airport-to-seomyeon/index.html",locale:"zh-TW",destination:"seomyeon",before:'<h2 id="choose">依抵達情況選擇</h2>'}
];
const errors=[];
const checked = new Date(config.checked_on + "T00:00:00Z");
const ageDays = Math.floor((Date.now() - checked.getTime()) / 86400000);
if (!Number.isFinite(checked.getTime()) || ageDays > 120) console.warn(`transfer-compare: fare data is ${ageDays} days old; refresh official sources`);
for (const p of pages) {
  const file=`${ROOT}/${p.path}`;
  if (!existsSync(file)) { errors.push(`${p.path}: page missing`); continue; }
  const html=readFileSync(file,"utf8");
  if (html.includes('id="airport-transfer-tool"')) { errors.push(`${p.path}: comparator already injected`); continue; }
  const count=html.split(p.before).length-1;
  if (count!==1) { errors.push(`${p.path}: insertion anchor found ${count} times`); continue; }
  if (CHECK) continue;
  const block=`<section class="airport-transfer-tool" id="airport-transfer-tool" data-destination="${p.destination}" data-locale="${p.locale}" aria-labelledby="airport-transfer-title"><p class="eyebrow" data-i18n="eyebrow">AIRPORT TRANSFER PLANNER</p><h2 id="airport-transfer-title" data-i18n="title">Compare your airport options</h2><p class="airport-transfer-intro" data-i18n="intro">Estimate the cost and check which options fit your arrival, group and luggage.</p><div class="airport-transfer-app" aria-live="polite"><p data-i18n="loading">Loading current fare data…</p></div><noscript><p data-i18n="noscript">Enable JavaScript to use the comparison tool. The transport guidance on this page remains available below.</p></noscript></section><script defer src="/assets/js/airport-transfer-compare.js"></script>\n`;
  writeFileSync(file,html.replace(p.before,block+p.before));
}
if (errors.length) { errors.forEach((x)=>console.error("transfer-compare:",x)); if(CHECK)process.exit(1); }
console.log(CHECK ? "transfer-compare check ok: 6 pages" : "transfer-compare injected: 6 pages");

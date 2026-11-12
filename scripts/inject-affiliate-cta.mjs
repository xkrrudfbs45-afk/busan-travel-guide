#!/usr/bin/env node
// Inject data-driven Klook CTAs (content/affiliate/zh-tw-cta.json) into the built site.
// Usage: node scripts/inject-affiliate-cta.mjs public   (build: warn + skip on anchor mismatch)
//        node scripts/inject-affiliate-cta.mjs --check  (CI: validate data against source pages, exit 1 on problems)
import { readFileSync, writeFileSync, existsSync } from "node:fs";

const args = process.argv.slice(2);
const CHECK = args.includes("--check");
const ROOT = CHECK ? "." : (args.find((a) => !a.startsWith("--")) || "public");
const data = JSON.parse(readFileSync("content/affiliate/zh-tw-cta.json", "utf8"));
const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const DISCLOSURE = '價格、內容與供應情況可能變動，購買前請確認最新條款。此為聯盟連結，Go2Busan 可能因此獲得佣金，您不需支付額外費用。<a href="/zh-tw/disclosure.html">聯盟揭露說明</a>';

const problems = [];
let injected = 0;
const ids = new Set();
for (const p of data.pages) {
  const where = p.path;
  if (ids.has(p.id)) problems.push(`${where}: duplicate id ${p.id}`);
  ids.add(p.id);
  if (!/^cta-[a-z0-9-]+$/.test(p.id)) problems.push(`${where}: id must match cta-* (TOC skip rule)`);
  if (!/^\d{7}$/.test(p.aff_adid)) problems.push(`${where}: bad aff_adid`);
  if (!/^https:\/\/www\.klook\.com\/zh-TW\//.test(p.dest) || /[?#]/.test(p.dest)) problems.push(`${where}: dest must be a plain klook.com/zh-TW/ URL`);
  if (p.en_counterpart) {
    const en = existsSync(p.en_counterpart) ? readFileSync(p.en_counterpart, "utf8") : "";
    const enDest = p.dest.replace("/zh-TW/", "/en-US/");
    const want = `aff_adid=${p.aff_adid}&amp;k_site=${encodeURIComponent(enDest)}`;
    if (!en.includes(want)) problems.push(`${where}: destination/aff_adid not found on English counterpart ${p.en_counterpart}`);
  }
  const file = `${ROOT}/${p.path}`;
  if (!existsSync(file)) { problems.push(`${where}: page missing`); continue; }
  let h = readFileSync(file, "utf8");
  if (h.includes(`id="${p.id}"`)) { problems.push(`${where}: CTA ${p.id} already present`); continue; }
  const n = h.split(p.before).length - 1;
  if (n !== 1) { problems.push(`${where}: anchor found ${n} times (need exactly 1)`); continue; }
  if (CHECK) continue;
  const href = `https://affiliate.klook.com/redirect?aid=${data.aid}&amp;aff_adid=${p.aff_adid}&amp;k_site=${encodeURIComponent(p.dest)}`;
  const block = `<section class="pass-conversion-cta" aria-labelledby="${p.id}"><div class="pass-cta-copy"><p class="pass-cta-kicker">${esc(p.kicker)}</p><h2 id="${p.id}">${esc(p.title)}</h2><p>${esc(p.body)}</p><p class="pass-cta-disclosure">${DISCLOSURE}</p></div><div class="pass-cta-actions"><a class="pass-cta-primary" href="${href}" target="_blank" rel="sponsored nofollow noopener noreferrer">${esc(p.button)}</a></div></section>\n`;
  h = h.replace(p.before, block + p.before);
  writeFileSync(file, h);
  injected++;
}

if (problems.length) {
  for (const m of problems) console[CHECK ? "error" : "warn"](`affiliate-cta: ${m}`);
  if (CHECK) process.exit(1);
}
console.log(CHECK ? `affiliate-cta check ok: ${data.pages.length} entries` : `affiliate-cta: injected ${injected}/${data.pages.length}`);

#!/usr/bin/env node
// Inject data-driven Klook CTAs (content/affiliate/*-cta.json) into the built site.
// Usage: node scripts/inject-affiliate-cta.mjs public   (build: warn + skip on anchor mismatch)
//        node scripts/inject-affiliate-cta.mjs --check  (CI: validate data against source pages, exit 1 on problems)
import { readFileSync, writeFileSync, existsSync, readdirSync } from "node:fs";

const args = process.argv.slice(2);
const CHECK = args.includes("--check");
const ROOT = CHECK ? "." : (args.find((a) => !a.startsWith("--")) || "public");
const DIR = "content/affiliate";
const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const problems = [];
let injected = 0, total = 0;
for (const name of readdirSync(DIR).filter((f) => f.endsWith("-cta.json")).sort()) {
  const data = JSON.parse(readFileSync(`${DIR}/${name}`, "utf8"));
  const lp = data.locale_path;
  if (!/^\/[a-zA-Z-]+\/$/.test(lp || "")) { problems.push(`${name}: locale_path missing`); continue; }
  if (!/<a href="\/[a-z-]+\/disclosure\.html">/.test(data.disclosure || "")) problems.push(`${name}: disclosure must link to the localized disclosure page`);
  const ids = new Set();
  for (const p of data.pages) {
    total++;
    const where = `${name} ${p.path}`;
    if (ids.has(p.id)) problems.push(`${where}: duplicate id ${p.id}`);
    ids.add(p.id);
    if (!/^cta-[a-z0-9-]+$/.test(p.id)) problems.push(`${where}: id must match cta-* (TOC skip rule)`);
    if (!/^\d{7}$/.test(p.aff_adid)) problems.push(`${where}: bad aff_adid`);
    if (!p.dest.startsWith(`https://www.klook.com${lp}`) || /[?#]/.test(p.dest)) problems.push(`${where}: dest must be a plain klook.com${lp} URL`);
    if (p.en_counterpart) {
      const en = existsSync(p.en_counterpart) ? readFileSync(p.en_counterpart, "utf8") : "";
      const want = `aff_adid=${p.aff_adid}&amp;k_site=${encodeURIComponent(p.dest.replace(lp, "/en-US/"))}`;
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
    const block = `<section class="pass-conversion-cta" aria-labelledby="${p.id}"><div class="pass-cta-copy"><p class="pass-cta-kicker">${esc(p.kicker)}</p><h2 id="${p.id}">${esc(p.title)}</h2><p>${esc(p.body)}</p><p class="pass-cta-disclosure">${data.disclosure}</p></div><div class="pass-cta-actions"><a class="pass-cta-primary" href="${href}" target="_blank" rel="sponsored nofollow noopener noreferrer">${esc(p.button)}</a></div></section>\n`;
    writeFileSync(file, h.replace(p.before, block + p.before));
    injected++;
  }
}

if (problems.length) {
  for (const m of problems) console[CHECK ? "error" : "warn"](`affiliate-cta: ${m}`);
  if (CHECK) process.exit(1);
}
console.log(CHECK ? `affiliate-cta check ok: ${total} entries` : `affiliate-cta: injected ${injected}/${total}`);

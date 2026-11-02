#!/usr/bin/env node
// Language switch audit: a visible 日本語 / 繁體中文 / English link must point to the
// page's hreflang counterpart when one exists, and must never point to a missing page.
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const SKIP = new Set([".git", "node_modules", "public", "docs", "marketing", "scripts"]);
const LABELS = { "日本語": "ja", "繁體中文": "zh-TW", "English": "en", "EN": "en" };
const HOME = { ja: "/ja/", "zh-TW": "/zh-tw/", en: "/" };

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (SKIP.has(name)) continue;
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (name.endsWith(".html") && !name.startsWith("google")) out.push(p);
  }
  return out;
}

const toPath = (href) => href.replace(/^https:\/\/go2busan\.com/, "");
const fileFor = (path) => join(ROOT, path.replace(/^\//, "") + (path.endsWith("/") ? "index.html" : ""));

const findings = [];
let checked = 0;
for (const file of walk(ROOT)) {
  const html = readFileSync(file, "utf8");
  const alts = {};
  for (const tag of html.match(/<link[^>]*hreflang[^>]*>/g) || []) {
    const lang = (tag.match(/hreflang="([^"]+)"/) || [])[1];
    const href = (tag.match(/href="([^"]+)"/) || [])[1];
    if (lang && href) alts[lang] = toPath(href);
  }
  for (const m of html.matchAll(/<a[^>]*href="([^"]*)"[^>]*>(日本語|繁體中文|English|EN)<\/a>/g)) {
    checked++;
    const target = toPath(m[1]);
    const lang = LABELS[m[2]];
    const rel = file.slice(ROOT.length + 1);
    if (target.startsWith("/") && !existsSync(fileFor(target))) {
      findings.push(`${rel}: ${m[2]} link points to a missing page ${target}`);
    } else if (alts[lang] && target === HOME[lang] && alts[lang] !== HOME[lang]) {
      findings.push(`${rel}: ${m[2]} link goes to ${target} but the translated page is ${alts[lang]}`);
    }
  }
}

console.log(`Language switch links checked: ${checked}`);
console.log(`Findings: ${findings.length}`);
for (const f of findings) console.log(`[ERROR] ${f}`);
process.exit(findings.length ? 1 : 0);

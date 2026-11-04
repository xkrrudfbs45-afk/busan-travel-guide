#!/usr/bin/env node
// Image rights audit. Every external photo used by the site must be listed in assets/data/image-credits.json.
//   node scripts/image-credit-audit.mjs            -> fails on unregistered images, incomplete verified entries,
//                                                     broken registry; reports do_not_use / needs_review usage as WARN
//   node scripts/image-credit-audit.mjs --strict   -> also fails when a do_not_use image is still in use
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const strict = process.argv.includes("--strict");
const REGISTRY = path.join(root, "assets/data/image-credits.json");
const ignored = new Set([".git", "node_modules", "public", "docs", ".vercel", "marketing", "content", "scripts"]);

const norm = (s) => decodeURIComponent(s).replace(/ /g, "_").replace(/^File:/i, "");
const keyOf = {
  commons: (m) => "wikimedia:" + norm(m),
  unsplash: (m) => "unsplash:" + m,
};

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) { if (!ignored.has(e.name)) walk(path.join(dir, e.name), out); }
    else if (/\.(html|css)$/.test(e.name) && !e.name.startsWith("google")) out.push(path.join(dir, e.name));
  }
  return out;
}

const PATTERNS = [
  [/commons\.wikimedia\.org\/wiki\/Special:FilePath\/([^"'?&\s]+)/g, keyOf.commons],
  [/upload\.wikimedia\.org\/wikipedia\/commons\/thumb\/[0-9a-f]\/[0-9a-f]{2}\/([^/"'\s]+)\//g, keyOf.commons],
  [/upload\.wikimedia\.org\/wikipedia\/commons\/[0-9a-f]\/[0-9a-f]{2}\/([^/"'\s?]+)/g, keyOf.commons],
  [/images\.unsplash\.com\/(photo-[0-9a-f-]+)/g, keyOf.unsplash],
];

const errors = [];
const warns = [];
let registry;
try { registry = JSON.parse(fs.readFileSync(REGISTRY, "utf8")); }
catch (e) { console.error("ERROR: cannot read assets/data/image-credits.json: " + e.message); process.exit(1); }

const byKey = new Map();
for (const e of registry.images) {
  const key = e.source === "wikimedia" ? "wikimedia:" + norm(e.file) : "unsplash:" + e.id;
  if (byKey.has(key)) errors.push(`duplicate registry entry ${key}`);
  byKey.set(key, e);
  if (!["verified", "needs_review", "do_not_use"].includes(e.status)) errors.push(`${key}: invalid status "${e.status}"`);
  if (e.status === "verified") {
    for (const f of ["source_url", "author", "license", "license_url", "checked_on"])
      if (!e[f]) errors.push(`${key}: verified entry missing "${f}"`);
    if (e.commercial_use !== true) errors.push(`${key}: verified entry must have commercial_use true`);
    if (e.source !== "wikimedia") errors.push(`${key}: only Wikimedia entries can be verified without owner sign-off`);
  }
}

const usage = new Map(); // key -> Set(files)
for (const file of walk(root)) {
  const text = fs.readFileSync(file, "utf8");
  const rel = path.relative(root, file).split(path.sep).join("/");
  for (const [re, mk] of PATTERNS) {
    for (const m of text.matchAll(re)) {
      const key = mk(m[1]);
      if (!usage.has(key)) usage.set(key, new Set());
      usage.get(key).add(rel);
    }
  }
}

for (const [key, files] of usage) {
  const e = byKey.get(key);
  const where = [...files].slice(0, 3).join(", ") + (files.size > 3 ? ` (+${files.size - 3})` : "");
  if (!e) { errors.push(`unregistered image ${key} used in ${where}. Add it to assets/data/image-credits.json after checking license and subject.`); continue; }
  if (e.status === "do_not_use") (strict ? errors : warns).push(`do_not_use image in use: ${key} (${files.size} files: ${where}) - ${e.note || ""}`);
  else if (e.status === "needs_review") warns.push(`needs_review: ${key} (${files.size} files: ${where}) - ${e.note || ""}`);
}

// 1) Article pages: a photo that is actually displayed (<img src>) must name its author and license.
//    Photos used only in og:image / JSON-LD metadata are not displayed on the page and are not checked here.
const shortLic = (e) => e.license.replace(/ 1\.0$/, "");
for (const file of walk(root).filter((f) => f.endsWith(".html"))) {
  const html = fs.readFileSync(file, "utf8");
  const rel = path.relative(root, file).split(path.sep).join("/");
  for (const fig of html.matchAll(/<figure\b[^>]*>([\s\S]*?)<\/figure>/gi)) {
    const img = fig[1].match(/<img\b[^>]*\bsrc="([^"]+)"/i);
    if (!img) continue;
    const key = PATTERNS.map(([re, mk]) => { re.lastIndex = 0; const m = re.exec(img[1]); return m ? mk(m[1]) : null; }).find(Boolean);
    const e = key && byKey.get(key);
    if (!e || e.source !== "wikimedia") continue;
    const cap = ((fig[1].match(/<figcaption\b[^>]*>([\s\S]*?)<\/figcaption>/i) || [])[1] || "").replace(/<[^>]+>/g, "");
    if (e.attribution_required && (!cap.includes(e.author.split(" (")[0]) || !cap.includes(shortLic(e))))
      errors.push(`${rel}: caption for ${key} must name "${e.author}" and "${shortLic(e)}"`);
    if (!e.attribution_required && /CC BY/.test(cap)) errors.push(`${rel}: caption claims a CC BY license but ${key} is ${e.license}`);
  }
}

// 2) Homepage cards (CSS background images): each card must carry the right credit for its effective image.
const css = fs.readFileSync(path.join(root, "assets/styles.css"), "utf8");
const effective = new Map(); // card class -> registry key (the last matching rule wins, as in the browser)
for (const rule of css.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
  const u = rule[2].match(/url\(["']?([^"')]+)/);
  if (!u || !/background/.test(rule[2])) continue;
  const key = PATTERNS.map(([re, mk]) => { re.lastIndex = 0; const m = re.exec(u[1]); return m ? mk(m[1]) : null; }).find(Boolean);
  if (!key) continue;
  for (const sel of rule[1].split(",")) {
    const c = (sel.trim().split(/\s+/).pop() || "").match(/^\.((?:trend|thumb)-[a-z0-9-]+)$/);
    if (c) effective.set(c[1], key);
  }
}
for (const home of ["index.html", "ja/index.html", "zh-tw/index.html"]) {
  const html = fs.readFileSync(path.join(root, home), "utf8");
  for (const card of html.matchAll(/<div class="trend-image ([^"]*)">([\s\S]*?)<\/div>/g)) {
    const cls = card[1].split(/\s+/).filter((c) => effective.has(c)).pop();
    if (!cls) continue;
    const e = byKey.get(effective.get(cls));
    const credit = (card[2].match(/<span class="trend-credit">([^<]*)<\/span>/) || [])[1];
    if (!e) continue;
    if (e.source !== "wikimedia") { if (credit) errors.push(`${home}: card ${cls} shows a credit ("${credit}") but its photo is not a Wikimedia photo`); continue; }
    if (e.attribution_required && !(credit && credit.includes(e.author.split(" (")[0]) && credit.includes(shortLic(e))))
      errors.push(`${home}: card ${cls} needs credit "${e.author} / ${shortLic(e)}" (has: ${credit || "none"})`);
  }
}

for (const [key] of byKey) if (!usage.has(key)) warns.push(`registry entry not used anywhere: ${key}`);

for (const w of warns) console.log("WARN  " + w);
for (const e of errors) console.log("ERROR " + e);
console.log(`image-credit-audit: ${usage.size} images in use, ${byKey.size} registered, ${warns.length} warnings, ${errors.length} errors${strict ? " (strict)" : ""}`);
process.exit(errors.length ? 1 : 0);

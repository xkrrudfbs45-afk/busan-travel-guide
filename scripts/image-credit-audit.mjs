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

// Pages that show a credit-required photo should name the author somewhere in the HTML.
for (const [key, files] of usage) {
  const e = byKey.get(key);
  if (!e || !e.attribution_required || !e.author) continue;
  for (const f of files) {
    if (!f.endsWith(".html")) continue;
    const html = fs.readFileSync(path.join(root, f), "utf8");
    if (!html.includes(e.author.split(" (")[0])) warns.push(`credit missing: ${f} shows ${key} but never names "${e.author}"`);
  }
}

for (const [key] of byKey) if (!usage.has(key)) warns.push(`registry entry not used anywhere: ${key}`);

for (const w of warns) console.log("WARN  " + w);
for (const e of errors) console.log("ERROR " + e);
console.log(`image-credit-audit: ${usage.size} images in use, ${byKey.size} registered, ${warns.length} warnings, ${errors.length} errors${strict ? " (strict)" : ""}`);
process.exit(errors.length ? 1 : 0);

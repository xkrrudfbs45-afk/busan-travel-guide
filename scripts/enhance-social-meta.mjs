#!/usr/bin/env node
// Final share-preview pass on public/ (runs after enhance-images.mjs, which may swap og:image).
// Fills gaps only; never overrides a value an author set:
//  1. og:description from the meta description; twitter:title / twitter:description from og:title / og:description
//  2. twitter:image:alt from og:image:alt; og:image:alt from the page's twitter:image:alt
//  3. ja / zh-TW pages whose og:image:alt was inherited in English (from the EN counterpart or site default):
//     reuse the alt another page of the same language already gives the same image
//  4. og:image:width / og:image:height for Wikimedia Special:FilePath images with known original dimensions
//     (content/images/cover-photos.json), scaled to the ?width= requested
// Usage: node scripts/enhance-social-meta.mjs [publicDir=public]   |   --check : report gaps, exit 1 if any
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const args = process.argv.slice(2);
const CHECK = args.includes("--check");
const PUB = args.find((a) => !a.startsWith("--")) || "public";
const walk = (d, out = []) => { for (const n of readdirSync(d)) { const p = join(d, n); statSync(p).isDirectory() ? walk(p, out) : n.endsWith(".html") && !n.startsWith("google") && out.push(p); } return out; };
const meta = (h, key) => { const m = h.match(new RegExp(`<meta (?:property|name)="${key.replace(/:/g, "\\:")}" content="([^"]*)"`)); return m ? m[1] : null; };
const has = (h, key) => meta(h, key) !== null;
const insertHead = (h, s) => h.replace("</head>", s + "</head>");
const locale = (f) => { const r = relative(PUB, f).replace(/\\/g, "/"); return r.startsWith("ja/") ? "ja" : r.startsWith("zh-tw/") ? "zh-tw" : "en"; };
const indexable = (h) => !/<meta name="robots" content="[^"]*noindex/.test(h) && /<meta property="og:title"/.test(h);
const latin = (s) => !/[぀-ヿ㐀-鿿]/.test(s || "");

const dims = JSON.parse(readFileSync("content/images/cover-photos.json", "utf8")).files;
function sizeFor(url) {
  const m = url.match(/Special:FilePath\/([^?]+)\?width=(\d+)/);
  if (!m) return null;
  const file = decodeURIComponent(m[1]);
  const d = dims[file] || dims[file.replace(/ /g, "_")];
  if (!d) return null;
  const w = Math.min(Number(m[2]), d.w);
  return { w, h: Math.round((w * d.h) / d.w) };
}

const files = walk(PUB);
// Same-language alt text already used for an image (localized authors' wording wins over inherited English).
const altBy = {};
for (const f of files) {
  const h = readFileSync(f, "utf8"); const img = meta(h, "og:image"); const alt = meta(h, "og:image:alt");
  if (img && alt && (locale(f) === "en" || !latin(alt))) (altBy[locale(f)] ||= {})[img] ||= alt;
}

const stats = {}; const bump = (k) => { stats[k] = (stats[k] || 0) + 1; };
const gaps = [];
for (const f of files) {
  let h = readFileSync(f, "utf8");
  if (!indexable(h)) continue;
  const before = h; const loc = locale(f); const img = meta(h, "og:image");
  if (!CHECK) {
    const desc = (h.match(/<meta name="description" content="([^"]*)"/) || [])[1];
    if (!has(h, "og:description") && desc) { h = insertHead(h, `<meta property="og:description" content="${desc}">`); bump("og:description"); }
    if (!has(h, "twitter:title")) { h = insertHead(h, `<meta name="twitter:title" content="${meta(h, "og:title")}">`); bump("twitter:title"); }
    if (!has(h, "twitter:description") && has(h, "og:description")) { h = insertHead(h, `<meta name="twitter:description" content="${meta(h, "og:description")}">`); bump("twitter:description"); }
    if (loc !== "en" && img && latin(meta(h, "og:image:alt")) && altBy[loc]?.[img]) {
      const local = altBy[loc][img];
      h = has(h, "og:image:alt") ? h.replace(/(<meta property="og:image:alt" content=")[^"]*(")/, `$1${local}$2`) : insertHead(h, `<meta property="og:image:alt" content="${local}">`);
      bump("og:image:alt localized");
    }
    if (!has(h, "og:image:alt") && has(h, "twitter:image:alt")) { h = insertHead(h, `<meta property="og:image:alt" content="${meta(h, "twitter:image:alt")}">`); bump("og:image:alt"); }
    if (has(h, "og:image:alt")) {
      const alt = meta(h, "og:image:alt");
      if (!has(h, "twitter:image:alt")) { h = insertHead(h, `<meta name="twitter:image:alt" content="${alt}">`); bump("twitter:image:alt"); }
    }
    const size = img && !has(h, "og:image:width") && sizeFor(img);
    if (size) { h = insertHead(h, `<meta property="og:image:width" content="${size.w}"><meta property="og:image:height" content="${size.h}">`); bump("og:image size"); }
    if (h !== before) { writeFileSync(f, h); bump("pages changed"); }
  }
  const rel = "/" + relative(PUB, f).replace(/\\/g, "/");
  for (const k of ["og:title", "og:description", "og:image", "og:image:alt", "twitter:card", "twitter:title", "twitter:description", "twitter:image", "twitter:image:alt"]) if (!has(h, k)) gaps.push(`${rel}: missing ${k}`);
  const og = meta(h, "og:image");
  if (og && /\.svg(?:$|\?)/i.test(og)) gaps.push(`${rel}: og:image is SVG`);
  if (og && meta(h, "twitter:image") && meta(h, "twitter:image") !== og) gaps.push(`${rel}: twitter:image differs from og:image`);
}

if (CHECK) {
  gaps.forEach((g) => console.log(g));
  console.log(`social-meta check: ${gaps.length} gap(s)`);
  process.exit(gaps.length ? 1 : 0);
}
console.log("enhance-social-meta:", JSON.stringify(stats), gaps.length ? `remaining gaps: ${gaps.length}` : "no gaps");

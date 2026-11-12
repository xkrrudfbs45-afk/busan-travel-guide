#!/usr/bin/env node
// Image quality pass on the built site (docs/IMAGE_QUALITY_STANDARD.md).
//   node scripts/enhance-images.mjs public    build: add data-driven cover photos, fix cover loading priority
//   node scripts/enhance-images.mjs --check   CI: validate content/images/cover-photos.json against the registry and pages
// 1. Cover photos from content/images/cover-photos.json for guides that have no in-page photo:
//    <figure class="article-cover shell"> with srcset, intrinsic width/height, alt, and an author/license caption
//    taken from assets/data/image-credits.json (status must be "verified"). `og: true` also replaces og:image.
// 2. Every figure.article-cover image is a first-screen LCP candidate: no loading="lazy", fetchpriority="high".
import { readFileSync, writeFileSync, existsSync } from "node:fs";

const args = process.argv.slice(2);
const CHECK = args.includes("--check");
const ROOT = CHECK ? "." : (args.find((a) => !a.startsWith("--")) || "public");
const data = JSON.parse(readFileSync("content/images/cover-photos.json", "utf8"));
const registry = JSON.parse(readFileSync("assets/data/image-credits.json", "utf8")).images;
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const fp = (file, w) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file).replace(/%2C/g, "%2C")}?width=${w}`;
const CREDIT = { ja: "写真", "zh-TW": "照片", en: "Photo" };
const lang = (p) => (p.startsWith("ja/") ? "ja" : p.startsWith("zh-tw/") ? "zh-TW" : "en");

const problems = [];
const stats = { cover: 0, og: 0, priority: 0 };
const seen = new Set();
for (const p of data.pages) {
  const where = p.path;
  if (seen.has(where)) problems.push(`${where}: listed twice`);
  seen.add(where);
  const reg = registry.find((e) => e.source === "wikimedia" && e.file === p.file);
  if (!reg) { problems.push(`${where}: ${p.file} is not in assets/data/image-credits.json`); continue; }
  if (reg.status !== "verified") { problems.push(`${where}: ${p.file} has status ${reg.status} (must be verified)`); continue; }
  const dim = data.files[p.file];
  if (!dim?.w || !dim?.h) { problems.push(`${where}: no width/height for ${p.file} in "files"`); continue; }
  if (!p.alt || !p.caption) { problems.push(`${where}: alt and caption are required`); continue; }
  const file = `${ROOT}/${p.path}`;
  if (!existsSync(file)) { problems.push(`${where}: page missing`); continue; }
  let h = readFileSync(file, "utf8");
  if (/class="article-cover/.test(h)) { problems.push(`${where}: page already has an article-cover (remove this entry)`); continue; }
  const heroEnd = h.search(/<section class="article-hero[^"]*"[\s\S]*?<\/section>/);
  if (heroEnd === -1) { problems.push(`${where}: no article-hero section to insert after`); continue; }
  if (CHECK) continue;
  const end = h.indexOf("</section>", heroEnd) + "</section>".length;
  const H = Math.round((1600 * dim.h) / dim.w);
  const credit = `${CREDIT[lang(p.path)]}: <a href="${esc(reg.source_url)}" target="_blank" rel="noopener noreferrer">${esc(reg.author.replace(/ \(Flickr\)$/, ""))} / Wikimedia Commons</a>, <a href="${esc(reg.license_url)}" target="_blank" rel="noopener noreferrer">${esc(reg.license)}</a>`;
  const fig = `\n<figure class="article-cover shell"><img srcset="${fp(p.file, 640)} 640w, ${fp(p.file, 1000)} 1000w, ${fp(p.file, 1600)} 1600w" sizes="(max-width: 800px) 100vw, 1000px" src="${fp(p.file, 1600)}" alt="${esc(p.alt)}" width="1600" height="${H}" fetchpriority="high" decoding="async"><figcaption>${esc(p.caption)}. ${credit}</figcaption></figure>`;
  h = h.slice(0, end) + fig + h.slice(end);
  stats.cover++;
  if (p.og) {
    const img = fp(p.file, 1600);
    h = h.replace(/(<meta property="og:image" content=")[^"]*(")/, `$1${img}$2`).replace(/(<meta name="twitter:image" content=")[^"]*(")/, `$1${img}$2`);
    if (/<meta property="og:image:alt"/.test(h)) h = h.replace(/(<meta property="og:image:alt" content=")[^"]*(")/, `$1${esc(p.alt)}$2`);
    stats.og++;
  }
  writeFileSync(file, h);
}

if (!CHECK) {
  // 2. Cover images are first-screen: never lazy, always high priority.
  const { readdirSync, statSync } = await import("node:fs");
  const walk = (d, out = []) => { for (const f of readdirSync(d)) { const q = `${d}/${f}`; statSync(q).isDirectory() ? walk(q, out) : f.endsWith(".html") && out.push(q); } return out; };
  for (const f of walk(ROOT)) {
    let h = readFileSync(f, "utf8"); const before = h;
    h = h.replace(/(<figure class="article-cover[^"]*">\s*)(<img\b[^>]*>)/g, (_m, a, img) => {
      let t = img.replace(/\sloading="lazy"/, "");
      if (!/fetchpriority=/.test(t)) t = t.replace(/^<img/, '<img fetchpriority="high"');
      return a + t;
    });
    if (h !== before) { writeFileSync(f, h); stats.priority++; }
  }
}

if (problems.length) {
  for (const m of problems) console[CHECK ? "error" : "warn"](`enhance-images: ${m}`);
  if (CHECK) process.exit(1);
}
console.log(CHECK ? `enhance-images check ok: ${data.pages.length} cover entries` : `enhance-images: covers ${stats.cover}, og replaced ${stats.og}, cover priority fixed on ${stats.priority} pages`);

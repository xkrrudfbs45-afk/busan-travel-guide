#!/usr/bin/env node
// Audits the BUILT site (public/) after scripts/enhance-public.mjs: what visitors and crawlers get.
// Usage: node scripts/public-quality-audit.mjs [publicDir=public]
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative } from "node:path";
const PUB = process.argv[2] || "public";
const f = [];
function walk(dir, out = []) { for (const n of readdirSync(dir)) { const p = join(dir, n); if (statSync(p).isDirectory()) walk(p, out); else if (n.endsWith(".html") && !n.startsWith("google")) out.push(p); } return out; }
const pages = walk(PUB);
for (const file of pages) {
  const rel = relative(PUB, file).replace(/\\/g, "/");
  const h = readFileSync(file, "utf8");
  const noindex = /<meta[^>]+name="robots"[^>]+noindex/i.test(h);
  for (const m of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) { try { JSON.parse(m[1]); } catch { f.push(`${rel}: invalid JSON-LD`); } }
  if (!/name="theme-color"/.test(h)) f.push(`${rel}: missing theme-color`);
  if (!h.includes('rel="manifest"') || !h.includes("/assets/js/offline.js")) f.push(`${rel}: missing offline support (manifest/offline.js)`);
  const main = h.indexOf("<main");
  if (main !== -1) {
    const body = h.slice(main), h2 = body.indexOf("<h2");
    const first = [...body.matchAll(/<img\b[^>]*>/g)].find((m) => !/go2busan-(mark|logo)/.test(m[0]));
    if (first && (h2 === -1 || first.index < h2) && /loading="lazy"/.test(first[0])) f.push(`${rel}: first-screen image is lazy`);
  }
  if (!noindex && /<meta property="og:title"/.test(h)) {
    const og = (h.match(/<meta property="og:image" content="([^"]+)"/) || [])[1];
    if (!og) f.push(`${rel}: missing og:image`);
    else if (og.startsWith("https://go2busan.com/") && !existsSync(join(PUB, og.replace("https://go2busan.com/", "").split("?")[0]))) f.push(`${rel}: og:image file not in build (${og})`);
    if (!/name="twitter:card"/.test(h)) f.push(`${rel}: missing twitter:card`);
    if (!/name="twitter:image"/.test(h)) f.push(`${rel}: missing twitter:image`);
  }
  if (/^(ja|zh-tw)\/guides\/[^/]+\/index\.html$/.test(rel) && h.includes('class="breadcrumbs"') && !h.includes("BreadcrumbList")) f.push(`${rel}: breadcrumb without BreadcrumbList`);
}
for (const need of ["sw.js", "manifest.webmanifest", "offline.html", "assets/js/offline.js"]) if (!existsSync(join(PUB, need))) f.push(`missing ${need} in build`);
try { JSON.parse(readFileSync(join(PUB, "manifest.webmanifest"), "utf8")); } catch { f.push("manifest.webmanifest is not valid JSON"); }
const sm = readFileSync(join(PUB, "sitemap.xml"), "utf8");
if (!/^<\?xml/.test(sm.trim()) || !sm.includes("</urlset>")) f.push("sitemap.xml: not a urlset");
for (const m of sm.matchAll(/<lastmod>([^<]*)<\/lastmod>/g)) if (!/^\d{4}-\d{2}-\d{2}$/.test(m[1])) f.push(`sitemap.xml: bad lastmod ${m[1]}`);
console.log(`Built pages checked: ${pages.length}`);
console.log(`Findings: ${f.length}`);
for (const x of f) console.log(`[ERROR] ${x}`);
process.exit(f.length ? 1 : 0);

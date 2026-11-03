#!/usr/bin/env node
// Post-build enhancements applied to public/ (the deployed copy) by scripts/build-static.sh.
// Source HTML stays untouched; every new page gets the same treatment automatically.
// Each fix only fills a gap and never overrides something an author already set.
//  1. First-screen image (first content <img> before the first <h2>): not lazy, fetchpriority=high
//  2. Other content images: decoding="async" (and loading="lazy" if no loading attribute)
//  3. <meta name="theme-color"> when missing
//  4. Localized guides with a visible breadcrumb but no BreadcrumbList: add it from the visible trail
//  5. preconnect hints for external image hosts the page actually uses
//  6. Share previews: og:image / og:image:alt / twitter:card / twitter:image when missing
//     (page's own first image -> English counterpart's og:image -> site default)
//  7. sitemap <lastmod> from git history (skipped on shallow clones or when git is unavailable)
//  8. Offline support: link manifest.webmanifest and load assets/js/offline.js (registers /sw.js)
// Usage: node scripts/enhance-public.mjs [publicDir=public]
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative } from "node:path";
import { execFileSync } from "node:child_process";

const PUB = process.argv[2] || "public";
const SITE = "https://go2busan.com";
const HOSTS = ["commons.wikimedia.org", "upload.wikimedia.org", "images.unsplash.com"];
const stats = {};
const bump = (k, n = 1) => { stats[k] = (stats[k] || 0) + n; };

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (name.endsWith(".html") && !name.startsWith("google")) out.push(p);
  }
  return out;
}
const urlPath = (file) => "/" + relative(PUB, file).replace(/\\/g, "/").replace(/index\.html$/, "");
const attr = (tag, name) => (tag.match(new RegExp(`\\b${name}="([^"]*)"`)) || [])[1];
const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const unesc = (s) => s.replace(/<[^>]+>/g, "").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").trim();
const absolute = (src) => (src.startsWith("http") ? src : SITE + (src.startsWith("/") ? src : "/" + src));
const insertHead = (html, snippet) => html.replace("</head>", snippet + "</head>");

const files = walk(PUB);
const ogByPath = {};
for (const f of files) {
  const h = readFileSync(f, "utf8");
  const og = (h.match(/<meta property="og:image" content="([^"]+)"/) || [])[1];
  const alt = (h.match(/<meta property="og:image:alt" content="([^"]+)"/) || [])[1];
  if (og) ogByPath[urlPath(f)] = { og, alt };
}
const siteDefault = ogByPath["/"];

for (const f of files) {
  let h = readFileSync(f, "utf8");
  const before = h;
  const path = urlPath(f);
  const noindex = /<meta[^>]+name="robots"[^>]+noindex/i.test(h);
  const mainAt = h.indexOf("<main");

  if (mainAt !== -1) {
    let body = h.slice(mainAt);
    const firstH2 = body.indexOf("<h2");
    let seen = false;
    body = body.replace(/<img\b[^>]*>/g, (tag, offset) => {
      if (/go2busan-(mark|logo)/.test(tag)) return tag;
      let t = tag;
      if (!seen) {
        seen = true;
        if (firstH2 === -1 || offset < firstH2) {
          if (/\sloading="lazy"/.test(t)) { t = t.replace(/\sloading="lazy"/, ""); bump("1 first-screen image made eager"); }
          if (!/fetchpriority=/.test(t)) t = t.replace(/^<img/, '<img fetchpriority="high"');
          return t;
        }
      }
      if (!/decoding=/.test(t)) { t = t.replace(/^<img/, '<img decoding="async"'); bump("2 decoding=async added"); }
      if (!/loading=/.test(t)) { t = t.replace(/^<img/, '<img loading="lazy"'); bump("2 loading=lazy added"); }
      return t;
    });
    h = h.slice(0, mainAt) + body;
  }

  if (!/name="theme-color"/.test(h) && /<meta name="viewport"[^>]*>/.test(h)) {
    h = h.replace(/(<meta name="viewport"[^>]*>)/, '$1<meta name="theme-color" content="#f8fafc">');
    bump("3 theme-color added");
  }

  if (/^\/(ja|zh-tw)\/guides\/[^/]+\/$/.test(path) && !h.includes("BreadcrumbList")) {
    const trail = (h.match(/<div class="breadcrumbs">([\s\S]*?)<\/div>/) || [])[1];
    if (trail) {
      const items = trail.split(/\s\/\s/).map((part, i) => {
        const a = part.match(/<a href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/);
        return { "@type": "ListItem", position: i + 1, name: unesc(a ? a[2] : part), item: a ? absolute(a[1]) : SITE + path };
      });
      const ld = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items };
      h = insertHead(h, `<script type="application/ld+json">${JSON.stringify(ld).replace(/</g, "\\u003c")}</script>`);
      bump("4 BreadcrumbList added");
    }
  }

  for (const host of HOSTS) {
    const used = new RegExp(`(?:src|srcset)="https://${host.replace(/\./g, "\\.")}/|url\\(["']?https://${host.replace(/\./g, "\\.")}/`).test(h);
    if (used && !h.includes(`rel="preconnect" href="https://${host}"`)) {
      h = insertHead(h, `<link rel="preconnect" href="https://${host}"${host.startsWith("upload") ? " crossorigin" : ""}>`);
      bump("5 preconnect added");
    }
  }

  // 8. Offline support: web app manifest + service worker registration on every page
  if (!h.includes('rel="manifest"')) { h = insertHead(h, '<link rel="manifest" href="/manifest.webmanifest">'); bump("8 manifest linked"); }
  if (!h.includes("/assets/js/offline.js") && h.includes("</body>")) { h = h.replace("</body>", '<script defer src="/assets/js/offline.js"></script></body>'); bump("8 offline script added"); }

  if (!noindex && /<meta property="og:title"/.test(h)) {
    if (!/<meta property="og:image"/.test(h)) {
      let img = null, alt = "";
      const first = mainAt !== -1 ? (h.slice(h.indexOf("<main")).match(/<img\b(?![^>]*go2busan-(?:mark|logo))[^>]*>/) || [])[0] : null;
      if (first && attr(first, "src")) { img = absolute(attr(first, "src")); alt = attr(first, "alt") || ""; }
      if (!img) {
        const en = (h.match(/hreflang="en" href="https:\/\/go2busan\.com([^"]+)"/) || [])[1];
        if (en && ogByPath[en]) ({ og: img, alt = "" } = ogByPath[en]);
      }
      if (!img && siteDefault) ({ og: img, alt = "" } = siteDefault);
      if (img) {
        h = insertHead(h, `<meta property="og:image" content="${esc(img)}">` + (alt && !/og:image:alt/.test(h) ? `<meta property="og:image:alt" content="${esc(unesc(alt))}">` : ""));
        bump("6 og:image added");
      }
    }
    if (!/name="twitter:card"/.test(h)) { h = insertHead(h, '<meta name="twitter:card" content="summary_large_image">'); bump("6 twitter:card added"); }
    if (!/name="twitter:image"/.test(h)) {
      const og = (h.match(/<meta property="og:image" content="([^"]+)"/) || [])[1];
      if (og) { h = insertHead(h, `<meta name="twitter:image" content="${og}">`); bump("6 twitter:image added"); }
    }
  }

  if (h !== before) { writeFileSync(f, h); bump("pages changed"); }
}

// 7. sitemap lastmod from git (real last change of each page's source file)
const sm = join(PUB, "sitemap.xml");
if (existsSync(sm)) {
  let ok = false;
  try { ok = execFileSync("git", ["rev-parse", "--is-shallow-repository"], { encoding: "utf8" }).trim() === "false"; } catch { ok = false; }
  if (ok) {
    let xml = readFileSync(sm, "utf8");
    xml = xml.replace(/<url>\s*<loc>https:\/\/go2busan\.com([^<]*)<\/loc>(?!\s*<lastmod>)/g, (m, p) => {
      const src = p.endsWith("/") ? `${p.slice(1)}index.html` : p.slice(1);
      let d = "";
      try { d = execFileSync("git", ["log", "-1", "--format=%cs", "--", src], { encoding: "utf8" }).trim(); } catch {}
      if (!d) return m;
      bump("7 sitemap lastmod added");
      return `${m}<lastmod>${d}</lastmod>`;
    });
    writeFileSync(sm, xml);
  } else bump("7 sitemap lastmod skipped (no full git history)");
}

console.log("enhance-public:", JSON.stringify(stats));

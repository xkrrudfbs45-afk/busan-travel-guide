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
//  7. Dates from git: sitemap <lastmod> and Article datePublished/dateModified (fetches full history on shallow
//     clones such as Render; skipped if history is unavailable, so dates are never guessed)
//  8. Offline support: link manifest.webmanifest and load assets/js/offline.js (registers /sw.js)
//  9. tabindex="0" on .table-wrap so keyboard users can scroll wide tables
// 10. Original category illustration (assets/illustrations/*.svg) for guides with no first-screen image
// Usage: node scripts/enhance-public.mjs [publicDir=public]
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative } from "node:path";
import { execFileSync } from "node:child_process";

const PUB = process.argv[2] || "public";
const SITE = "https://go2busan.com";
const HOSTS = ["commons.wikimedia.org", "upload.wikimedia.org", "images.unsplash.com"];
const ILLUSTRATIONS = [
  [/fireworks|festival/, "fireworks"], [/airport|gimhae|late-arrival/, "airport"], [/jagalchi|market/, "market"],
  [/beomeosa|geumjeongsan|temple/, "mountain"], [/rain/, "rain"], [/where-to-stay|blueline|spa-land|hotel/, "stay"],
  [/transit|ktx|luggage|zimcarry/, "transit"],
  [/gukbap|milmyeon|eomuk|pajeon|guksu|jaecheop|food|nakgopsae|makgeolli|porridge|breakfast|pork|kkeutjip|soju/, "food"],
  [/ochoryang|culture|dialect|traits|history/, "heritage"],
];
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
  // 10. Guides with no image before the first <h2> get an original category illustration under the title.
  if (/^\/(?:ja\/|zh-tw\/)?guides\/[^/]+\/$/.test(path) && !noindex) {
    const m0 = h.indexOf("<main"), firstH2 = h.indexOf("<h2", m0);
    const top = m0 === -1 ? "" : h.slice(m0, firstH2 === -1 ? undefined : firstH2);
    const hasImage = /<img\b(?![^>]*go2busan-(?:mark|logo))/.test(top);
    const heroEnd = h.indexOf("</section>", h.indexOf('class="article-hero', m0));
    if (!hasImage && heroEnd !== -1 && !h.includes("guide-illustration")) {
      const art = ILLUSTRATIONS.find(([re]) => re.test(path))?.[1] || "plan";
      h = h.slice(0, heroEnd) + `<figure class="guide-illustration"><img src="/assets/illustrations/${art}.svg" alt="" width="1600" height="900"></figure>` + h.slice(heroEnd);
      bump("10 illustration added");
    }
  }
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

  // 9. Keyboard access for horizontally scrollable tables (WCAG: scrollable region must be focusable)
  if (/<div class="table-wrap">/.test(h)) {
    const n = (h.match(/<div class="table-wrap">/g) || []).length;
    h = h.replace(/<div class="table-wrap">/g, '<div class="table-wrap" tabindex="0">');
    bump("9 table-wrap focusable", n);
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
      if (first && attr(first, "src") && !/\.svg(\?|$)/i.test(attr(first, "src"))) { img = absolute(attr(first, "src")); alt = attr(first, "alt") || ""; }
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

// 7. Dates from git history: sitemap <lastmod>, and datePublished/dateModified on Article JSON-LD.
//    Render clones shallowly, so try to fetch full history first; if that fails, skip (never guess dates).
function gitDates() {
  const run = (args, opts = {}) => execFileSync("git", args, { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"], ...opts });
  try {
    if (run(["rev-parse", "--is-shallow-repository"]).trim() === "true") {
      try { run(["fetch", "--unshallow", "--quiet"], { timeout: 90000 }); } catch {}
      if (run(["rev-parse", "--is-shallow-repository"]).trim() === "true") {
        try { run(["fetch", "--unshallow", "--quiet", "https://github.com/xkrrudfbs45-afk/busan-travel-guide.git", "main"], { timeout: 90000 }); } catch {}
      }
      if (run(["rev-parse", "--is-shallow-repository"]).trim() === "true") return null;
    }
    const log = run(["log", "--format=@%cs", "--name-only", "--no-renames"], { maxBuffer: 64 * 1024 * 1024 });
    const first = {}, last = {};
    let d = "";
    for (const line of log.split("\n")) {
      if (line.startsWith("@")) d = line.slice(1);
      else if (line) { if (!last[line]) last[line] = d; first[line] = d; }
    }
    return { first, last };
  } catch { return null; }
}
const dates = gitDates();
const srcOf = (p) => (p.endsWith("/") ? `${p.slice(1)}index.html` : p.slice(1));
if (!dates) bump("7 git dates skipped (no full history)");
else {
  const sm = join(PUB, "sitemap.xml");
  if (existsSync(sm)) {
    const xml = readFileSync(sm, "utf8").replace(/<url>\s*<loc>https:\/\/go2busan\.com([^<]*)<\/loc>(?!\s*<lastmod>)/g, (m, p) => {
      const d = dates.last[srcOf(p)];
      if (!d) return m;
      bump("7 sitemap lastmod added");
      return `${m}<lastmod>${d}</lastmod>`;
    });
    writeFileSync(sm, xml);
  }
  for (const f of files) {
    const src = srcOf(urlPath(f));
    if (!dates.last[src]) continue;
    let h = readFileSync(f, "utf8");
    const before = h;
    h = h.replace(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g, (m, body) => {
      let data; try { data = JSON.parse(body); } catch { return m; }
      let changed = false;
      const fill = (node) => {
        if (!node || typeof node !== "object") return;
        if (Array.isArray(node)) return node.forEach(fill);
        if (node["@type"] === "Article") {
          if (!node.datePublished) { node.datePublished = dates.first[src]; changed = true; }
          if (!node.dateModified) { node.dateModified = dates.last[src]; changed = true; }
        }
        if (node["@graph"]) fill(node["@graph"]);
      };
      fill(data);
      return changed ? `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>` : m;
    });
    if (h !== before) { writeFileSync(f, h); bump("7 Article dates added"); }
  }
}

console.log("enhance-public:", JSON.stringify(stats));

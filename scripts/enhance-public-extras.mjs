#!/usr/bin/env node
// Second post-build pass applied to public/ (after scripts/enhance-public.mjs). Source HTML stays untouched.
// Every fix only fills a gap and never overrides something an author already set.
//  1. Visible "Page last updated" date on guides (from git history; skipped if history is unavailable)
//  2. Article + BreadcrumbList JSON-LD for guides that have no structured data at all
//  3. og:image / twitter:image never point to an SVG (social platforms need PNG/JPEG/WebP)
//  4. Footer links to the official Instagram / Threads profiles for the visitor's language + Organization sameAs
//  5. Skip link (and an id on <main>) on pages that lack one
//  6. robots meta "max-image-preview:large" on indexable pages that have no robots meta
//  7. Japanese / Traditional Chinese pages link to their own About / Disclosure / Privacy pages (not the English ones)
//  8. apple-touch-icon link, shared extras.css and two small deferred scripts (prefetch, engagement events)
// Usage: node scripts/enhance-public-extras.mjs [publicDir=public]
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative } from "node:path";
import { execFileSync } from "node:child_process";

const PUB = process.argv[2] || "public";
const SITE = "https://go2busan.com";
const stats = {};
const bump = (k, n = 1) => { stats[k] = (stats[k] || 0) + n; };

// Official profiles. Only list a profile here once the account exists and is public.
export const SOCIAL = {
  en: [
    { name: "Instagram", url: "https://www.instagram.com/go2busan.us/" },
    { name: "Threads", url: "https://www.threads.com/@go2busan.us" },
  ],
  ja: [
    { name: "Instagram", url: "https://www.instagram.com/go2busan.jp/" },
    { name: "Threads", url: "https://www.threads.com/@go2busan.jp" },
  ],
  tw: [{ name: "Instagram", url: "https://www.instagram.com/go2busan.tw/" }],
};
const LABEL = {
  en: { updated: "Page last updated", skip: "Skip to content", follow: "Follow Go2Busan" },
  ja: { updated: "最終更新", skip: "本文へスキップ", follow: "Go2Busanをフォロー" },
  tw: { updated: "最後更新", skip: "跳到主要內容", follow: "追蹤 Go2Busan" },
};
const MONTHS_EN = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function localeOf(path) {
  if (path.startsWith("/ja/")) return "ja";
  if (path.startsWith("/zh-tw/")) return "tw";
  return "en";
}
export function formatDate(iso, loc) {
  const [y, m, d] = iso.split("-").map(Number);
  if (loc === "ja") return `${y}年${m}月${d}日`;
  if (loc === "tw") return `${y}年${m}月${d}日`;
  return `${MONTHS_EN[m - 1]} ${d}, ${y}`;
}
const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const unesc = (s) => s.replace(/<[^>]+>/g, "").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").trim();
const ldScript = (obj) => `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, "\\u003c")}</script>`;
const insertHead = (html, snippet) => html.replace("</head>", snippet + "</head>");

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (name.endsWith(".html") && !name.startsWith("google")) out.push(p);
  }
  return out;
}
const urlPath = (file) => "/" + relative(PUB, file).replace(/\\/g, "/").replace(/index\.html$/, "");
const srcOf = (p) => (p.endsWith("/") ? `${p.slice(1)}index.html` : p.slice(1));

function gitDates() {
  const run = (args, opts = {}) => execFileSync("git", args, { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"], ...opts });
  try {
    if (run(["rev-parse", "--is-shallow-repository"]).trim() === "true") return null; // never guess dates
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
const ASSET_VERSION = (process.env.RENDER_GIT_COMMIT || (() => {
  try { return execFileSync("git", ["rev-parse", "--short=12", "HEAD"], { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim(); }
  catch { return "dev"; }
})()).slice(0, 12);

export function enhanceExtras(html, ctx) {
  let h = html;
  const { path, dates, hasAsset, defaultOg } = ctx;
  const loc = localeOf(path);
  const noindex = /<meta[^>]+name="robots"[^>]+noindex/i.test(h);
  const isGuide = /^\/(?:ja\/|zh-tw\/)?guides\/[^/]+\/$/.test(path);
  const src = srcOf(path);

  // 3. SVG share images -> raster
  const rasterFor = (svgUrl) => {
    const m = svgUrl.match(/^https:\/\/go2busan\.com\/assets\/([^/]+)\.svg$/);
    if (m && hasAsset(`${m[1]}-og.png`)) return `${SITE}/assets/${m[1]}-og.png`;
    return defaultOg && !/\.svg(\?|$)/i.test(defaultOg) ? defaultOg : null;
  };
  h = h.replace(/(<meta (?:property="og:image"|name="twitter:image") content=")([^"]+\.svg)(")/g, (m, a, url, c) => {
    const r = rasterFor(url);
    if (!r) return m;
    bump("3 svg share image replaced");
    return `${a}${r}${c}`;
  });

  // 0. localized guide pages: point "travel guides" links at the localized directory page
  if (loc !== "en") {
    const p = loc === "ja" ? "/ja" : "/zh-tw";
    const before = h;
    h = h.split(`href="${p}/#guides"`).join(`href="${p}/guides/"`).split(`"${SITE}${p}/#guides"`).join(`"${SITE}${p}/guides/"`);
    if (h !== before) bump("0 localized directory links");
  }

  // 1. visible last-updated date
  if (isGuide && dates?.last[src] && !h.includes('class="page-updated"')) {
    const heroEnd = h.indexOf("</section>", h.indexOf('class="article-hero'));
    const d = dates.last[src];
    const line = `<p class="page-updated">${LABEL[loc].updated}: <time datetime="${d}">${formatDate(d, loc)}</time></p>`;
    if (h.includes('class="article-hero') && heroEnd !== -1) {
      h = h.slice(0, heroEnd) + line + h.slice(heroEnd);
      bump("1 last-updated date added");
    } else {
      // Pages built on another template: place the date right after the main heading.
      const h1End = h.indexOf("</h1>", h.indexOf("<main"));
      if (h1End !== -1) {
        h = h.slice(0, h1End + 5) + line + h.slice(h1End + 5);
        bump("1 last-updated date added (after h1)");
      }
    }
  }

  // 2. structured data for guides that have none
  if (isGuide && !h.includes("application/ld+json")) {
    const title = unesc((h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || "");
    const desc = (h.match(/<meta name="description" content="([^"]*)"/) || [])[1] || "";
    const img = (h.match(/<meta property="og:image" content="([^"]+)"/) || [])[1];
    if (title) {
      const article = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description: unesc(desc),
        inLanguage: loc === "ja" ? "ja" : loc === "tw" ? "zh-Hant-TW" : "en",
        mainEntityOfPage: { "@type": "WebPage", "@id": SITE + path },
        author: { "@type": "Organization", "@id": `${SITE}/#organization`, name: "Go2Busan" },
        publisher: { "@type": "Organization", "@id": `${SITE}/#organization`, name: "Go2Busan" },
      };
      if (img) article.image = img;
      if (dates?.first[src]) article.datePublished = dates.first[src];
      if (dates?.last[src]) article.dateModified = dates.last[src];
      let block = ldScript(article);
      const trail = (h.match(/<div class="breadcrumbs">([\s\S]*?)<\/div>/) || [])[1];
      if (trail) {
        const items = trail.split(/\s\/\s/).map((part, i) => {
          const a = part.match(/<a href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/);
          return { "@type": "ListItem", position: i + 1, name: unesc(a ? a[2] : part), item: a ? (a[1].startsWith("http") ? a[1] : SITE + a[1]) : SITE + path };
        });
        block += ldScript({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items });
      }
      h = insertHead(h, block);
      bump("2 structured data added");
    }
  }

  // 7. localized legal pages (the localized versions exist for every language)
  if (loc !== "en") {
    const prefix = loc === "ja" ? "/ja" : "/zh-tw";
    let n = 0;
    h = h.replace(/href="\/(about|disclosure|privacy)\.html"/g, (m, name) => { n++; return `href="${prefix}/${name}.html"`; });
    if (n) bump("7 localized legal links fixed", n);
  }

  // 4. official social profiles
  if (!noindex && !h.includes('class="footer-social"') && h.includes("</footer>")) {
    const links = SOCIAL[loc].map((s) => `<a href="${s.url}" rel="me noopener" target="_blank" data-social="${s.name.toLowerCase()}">${s.name}</a>`).join("");
    const block = `<div class="footer-social" aria-label="${esc(LABEL[loc].follow)}"><span>${esc(LABEL[loc].follow)}</span>${links}</div>`;
    if (h.includes('class="footer-links"')) h = h.replace(/(<div class="footer-links">[\s\S]*?<\/div>)/, `$1${block}`);
    else if (h.includes("</div></footer>")) h = h.replace("</div></footer>", `${block}</div></footer>`);
    else block && (h = h);
    if (h.includes('class="footer-social"')) bump("4 footer social links added");
  }
  if (h.includes('"@type":"Organization"') && !h.includes("sameAs")) {
    const same = [...SOCIAL.en, ...SOCIAL.ja, ...SOCIAL.tw].map((s) => s.url);
    let added = false;
    h = h.replace(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g, (m, body) => {
      if (added) return m;
      let data; try { data = JSON.parse(body); } catch { return m; }
      const fix = (node) => {
        if (!node || typeof node !== "object") return;
        if (Array.isArray(node)) return node.forEach(fix);
        if (!added && node["@type"] === "Organization" && node.name === "Go2Busan" && !node.sameAs) { node.sameAs = same; added = true; return; }
        for (const v of Object.values(node)) fix(v);
      };
      fix(data);
      return added ? ldScript(data) : m;
    });
    if (added) bump("4 Organization sameAs added");
  }

  // 5. skip link
  if (!/class="skip-link"/.test(h) && /<main\b/.test(h)) {
    if (!/<main\b[^>]*\bid=/.test(h)) h = h.replace(/<main\b/, '<main id="main"');
    h = h.replace(/(<body[^>]*>)/, `$1<a class="skip-link" href="#main">${LABEL[loc].skip}</a>`);
    bump("5 skip link added");
  }

  // 6. robots preview directive
  if (!noindex && !/<meta name="robots"/.test(h) && /<meta name="viewport"/.test(h)) {
    h = h.replace(/(<meta name="viewport"[^>]*>)/, '$1<meta name="robots" content="index,follow,max-image-preview:large">');
    bump("6 robots max-image-preview added");
  }

  // 7. shared assets
  if (!h.includes("/assets/extras.css")) {
    h = insertHead(h, `<link rel="apple-touch-icon" href="/assets/icon-180.png"><link rel="stylesheet" href="/assets/extras.css?v=${ASSET_VERSION}">`);
    bump("7 extras.css linked");
  }
  if (!noindex && !h.includes("/assets/js/prefetch.js") && h.includes("</body>")) {
    h = h.replace("</body>", `<script defer src="/assets/js/prefetch.js?v=${ASSET_VERSION}"></script><script defer src="/assets/js/engagement.js?v=${ASSET_VERSION}"></script></body>`);
    bump("7 prefetch + engagement scripts added");
  }
  return h;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const files = walk(PUB);
  const dates = gitDates();
  if (!dates) bump("1 git dates unavailable (shallow clone): dates skipped");
  const hasAsset = (n) => existsSync(join(PUB, "assets", n));
  const home = readFileSync(join(PUB, "index.html"), "utf8");
  const defaultOg = (home.match(/<meta property="og:image" content="([^"]+)"/) || [])[1];
  for (const f of files) {
    const before = readFileSync(f, "utf8");
    const after = enhanceExtras(before, { path: urlPath(f), dates, hasAsset, defaultOg });
    if (after !== before) { writeFileSync(f, after); bump("pages changed"); }
  }
  console.log("enhance-public-extras:", JSON.stringify(stats));
}

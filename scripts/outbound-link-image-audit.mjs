import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const htmlFiles = [];
const ignored = new Set([".git", "node_modules", "public", "docs", ".vercel"]);
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (!ignored.has(entry.name)) walk(path.join(dir, entry.name));
    } else if (entry.isFile() && entry.name.endsWith(".html") && entry.name !== "404.html" && !entry.name.startsWith("google")) {
      htmlFiles.push(path.join(dir, entry.name));
    }
  }
}
walk(root);
const findings = [];
const partnerLinks = [];
const externalBlankLinks = [];
const attr = (tag, name) => {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = tag.match(new RegExp("\\b" + escaped + "\\s*=\\s*([\"'])(.*?)\\1", "i"));
  return match ? match[2].replace(/&amp;/g, "&").trim() : "";
};
const add = (level, file, message) => findings.push({ level, file: path.relative(root, file).split(path.sep).join("/"), message });

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");

  // First-pass image policy checks. These checks flag candidates for human review;
  // they do not claim that a photo's subject or license has been visually verified.
  for (const imageMatch of html.matchAll(/<img\b[^>]*>/gi)) {
    const tag = imageMatch[0];
    const src = attr(tag, "src");
    const alt = attr(tag, "alt");
    if (!src) {
      add("WARN", file, "Image tag has no src attribute");
      continue;
    }
    if (!alt && !/go2busan-(mark|logo)\.svg/i.test(src)) add("WARN", file, "Image is missing descriptive alt text: " + src);
    let imageUrl;
    try { imageUrl = new URL(src, "https://go2busan.com/"); } catch {
      add("WARN", file, "Malformed image URL: " + src);
      continue;
    }
    if (imageUrl.origin === "https://go2busan.com") continue;
    const host = imageUrl.hostname.toLowerCase();
    const isWikimedia = host === "commons.wikimedia.org" || host === "upload.wikimedia.org";
    const startFigure = html.lastIndexOf("<figure", imageMatch.index);
    const endFigure = html.indexOf("</figure>", imageMatch.index);
    const figure = startFigure >= 0 && endFigure >= 0
      ? html.slice(startFigure, endFigure + "</figure>".length)
      : "";
    const caption = (figure.match(/<figcaption\b[^>]*>([\s\S]*?)<\/figcaption>/i) || [])[1] || "";
    if (isWikimedia) {
      if (!/Wikimedia Commons/i.test(caption) || !/(CC BY|CC BY-SA|Public domain|KOGL)/i.test(caption)) {
        add("WARN", file, "External Wikimedia image needs a visible creator/source and exact license attribution: " + src);
      }
    } else {
      add("WARN", file, "External image host requires source, subject-match, and license review: " + host + " — " + src);
    }
  }
  // Bukangi-specific checks prevent mismatched artwork and stale social previews.
  if (/bukangi-soju/i.test(file)) {
    const start = html.indexOf('<figure class="article-cover');
    const end = start >= 0 ? html.indexOf("</figure>", start) : -1;
    const coverHtml = start >= 0 && end >= 0 ? html.slice(start, end + 9) : "";
    if (coverHtml && !coverHtml.includes("bukangi-soju-edition-illustration.svg")) {
      add("WARN", file, "Bukangi soju article should use the bottle-specific editorial illustration");
    }
  }
  if (/bukangi-busan-north-port-shark/i.test(file)) {
    const start = html.indexOf('<figure class="article-cover');
    const end = start >= 0 ? html.indexOf("</figure>", start) : -1;
    const coverHtml = start >= 0 && end >= 0 ? html.slice(start, end + 9) : "";
    if (coverHtml && !coverHtml.includes("bukangi-illustration.svg")) {
      add("WARN", file, "Bukangi North Port story should use the canonical friendly mascot illustration");
    }
  }
  if (/bukangi/i.test(file) && html.includes("bukangi-illustration-og.png")) {
    add("WARN", file, "Stale Bukangi social-preview PNG reference remains; align metadata with current topic-matched artwork");
  }
  if (/bukangi/i.test(file) && !html.includes('name="twitter:image:alt"')) {
    add("WARN", file, "Bukangi social image is missing twitter:image:alt");
  }
  const cover = html.match(/<figure\b[^>]*class\s*=\s*["'][^"']*article-cover[^"']*["'][^>]*>([\s\S]*?)<\/figure>/i);
  if (cover) {
    const coverBody = cover[1];
    const imgTag = coverBody.match(/<img\b[^>]*>/i);
    const src = imgTag ? attr(imgTag[0], "src") : "";
    const caption = (coverBody.match(/<figcaption\b[^>]*>([\s\S]*?)<\/figcaption>/i) || [])[1] || "";
    if (/Wikimedia Commons/i.test(caption) && !/(^|\/\/)(commons\.wikimedia\.org|upload\.wikimedia\.org\/wikipedia\/commons)\//i.test(src)) {
      add("WARN", file, "Cover caption credits Wikimedia Commons but the displayed image URL is not from Wikimedia Commons");
    }
    if (/Unsplash/i.test(caption) && !/images\.unsplash\.com/i.test(src)) {
      add("WARN", file, "Cover caption credits Unsplash but the displayed image URL is not from Unsplash");
    }
    const ogTag = html.match(/<meta\b(?=[^>]*\bproperty\s*=\s*["']og:image["'])[^>]*>/i);
    const ogImage = ogTag ? attr(ogTag[0], "content") : "";
    if (src && ogImage) {
      const normalize = (value) => {
        try {
          const url = new URL(value, "https://go2busan.com/");
          // assets/<name>-og.png is the raster social-preview export of assets/<name>.svg.
          return url.origin + url.pathname.replace(/-og\.png$/i, ".svg");
        } catch { return value; }
      };
      if (normalize(src) !== normalize(ogImage)) {
        add("WARN", file, "Article cover and og:image use different image URLs; confirm they show the same relevant subject");
      }
    }
  }
  for (const match of html.matchAll(/<a\b[^>]*>/gi)) {
    const tag = match[0];
    const href = attr(tag, "href");
    if (!href) continue;
    let url;
    try { url = new URL(href, "https://go2busan.com/"); } catch {
      add("WARN", file, "Malformed anchor URL: " + href);
      continue;
    }
    if (url.origin === "https://go2busan.com" || !/^https?:$/.test(url.protocol)) continue;
    const host = url.hostname.toLowerCase();
    const partner = host === "klook.com" || host.endsWith(".klook.com")
      ? "Klook"
      : (host === "agoda.com" || host.endsWith(".agoda.com") ? "Agoda" : "");
    if (partner) partnerLinks.push({ file, partner, href, tag, html });
    if (attr(tag, "target").toLowerCase() === "_blank") {
      const rel = attr(tag, "rel").toLowerCase().split(/\s+/);
      // noopener (or noreferrer, which implies it) closes the window.opener hole.
      // noreferrer is not required: affiliate partners may use the referrer for attribution.
      if (!rel.includes("noopener") && !rel.includes("noreferrer")) {
        externalBlankLinks.push({ file, href });
        add("WARN", file, "External target=_blank link should include rel=\"noopener\": " + href);
      }
    }
  }
}

const partnerPages = new Map();
for (const link of partnerLinks) {
  const key = link.file;
  if (!partnerPages.has(key)) partnerPages.set(key, { partners: new Set(), hasDisclosure: /affiliate-note|affiliate disclosure|affiliate links|\bdisclosure\b/i.test(link.html) });
  partnerPages.get(key).partners.add(link.partner);
}
for (const [file, info] of partnerPages) {
  if (!info.hasDisclosure) add("WARN", file, "Contains Klook/Agoda links but no visible affiliate/disclosure wording was detected");
}

const cssFile = path.join(root, "assets", "styles.css");
const cssImages = new Map();
if (fs.existsSync(cssFile)) {
  const css = fs.readFileSync(cssFile, "utf8");
  for (const match of css.matchAll(/([^{}]+)\{[^{}]*?background(?:-image)?\s*:[^{}]*?url\((['"]?)(.*?)\2\)[^{}]*\}/gis)) {
    const selector = match[1].trim().replace(/\s+/g, " ").slice(0, 120);
    const url = match[3].trim();
    if (!url || url.startsWith("data:")) continue;
    if (!cssImages.has(url)) cssImages.set(url, []);
    cssImages.get(url).push(selector);
  }
}
const repeatedCssImages = [...cssImages.entries()].filter(([, selectors]) => selectors.length > 1);
for (const [url, selectors] of repeatedCssImages) {
  add("INFO", cssFile, "CSS background image reused by selectors (" + selectors.length + "): " + url + " | " + selectors.join("; "));
}
// Card-level topic and credit checks. These are targeted guardrails for known
// misleading mappings; they do not replace visual review of every rendered image.
const cssForCardAudit = fs.existsSync(cssFile)
  ? fs.readFileSync(cssFile, "utf8").replace(/\/\*[\s\S]*?\*\//g, "")
  : "";
const cssRulesForCardAudit = [...cssForCardAudit.matchAll(/([^{}]+)\{([^{}]*)\}/g)].map((match) => ({
  selectors: match[1].split(",").map((selector) => selector.trim().replace(/\s+/g, " ")),
  body: match[2]
}));
function backgroundForClass(className) {
  let resolved = "";
  for (const rule of cssRulesForCardAudit) {
    const matchesClass = rule.selectors.some((selector) =>
      selector === "." + className || selector === ".home-refresh ." + className
    );
    if (!matchesClass) continue;
    const image = rule.body.match(/background(?:-image)?\s*:[^;{}]*?url\((['"]?)(.*?)\1\)/i);
    if (image) resolved = image[2].trim();
  }
  return resolved;
}
for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  for (const cardMatch of html.matchAll(/<a\b[^>]*>[\s\S]*?<\/a>/gi)) {
    const card = cardMatch[0];
    if (!/class=["'][^"']*trend-card/i.test(card)) continue;
    const href = attr(card.match(/<a\b[^>]*>/i)?.[0] || "", "href");
    const imageTag = card.match(/<div\b[^>]*class=["'][^"']*trend-image[^"']*["'][^>]*>/i)?.[0] || "";
    const classes = attr(imageTag, "class").split(/\s+/).filter((name) => name.startsWith("trend-"));
    const credit = (card.match(/<span\b[^>]*class=["'][^"']*trend-credit[^"']*["'][^>]*>([\s\S]*?)<\/span>/i) || [])[1] || "";
    const resolved = classes.map(backgroundForClass).filter(Boolean).at(-1) || "";
    if (/\bPhoto\s*:/i.test(credit) && /\.svg(?:[?#]|$)/i.test(resolved)) {
      add("WARN", file, "Homepage card credits a photograph but its CSS background is an SVG illustration: " + href + " — " + resolved);
    }
    if (/busan-winter-travel-guide/i.test(href) && classes.includes("trend-rainy")) {
      add("WARN", file, "Winter guide card uses the rainy-day image class: " + href);
    }
    if (/visit-busan-pass-guide/i.test(href) && classes.includes("trend-sky-capsule")) {
      add("WARN", file, "Visit Busan Pass card uses a Sky Capsule image that may imply an unverified inclusion: " + href);
    }
    if (/pork-soup-awards/i.test(href) && classes.includes("trend-food")) {
      add("WARN", file, "Pork-soup card uses the generic food image class; use a dedicated pork-soup mapping: " + href);
    }
  }
}

console.log("Go2Busan outbound-link and CSS-image audit");
console.log("HTML pages scanned: " + htmlFiles.length);
console.log("Klook/Agoda links found: " + partnerLinks.length + " across " + partnerPages.size + " pages");
console.log("External target=_blank links missing safe rel attributes: " + externalBlankLinks.length);
console.log("Repeated CSS background URLs: " + repeatedCssImages.length);
console.log("Findings: " + findings.length);
for (const item of findings) console.log("[" + item.level + "] " + item.file + ": " + item.message);
if (process.env.GITHUB_STEP_SUMMARY) {
  fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, [
    "## Outbound links and CSS image audit",
    "",
    "- HTML pages scanned: **" + htmlFiles.length + "**",
    "- Klook/Agoda links: **" + partnerLinks.length + "** across **" + partnerPages.size + "** pages",
    "- External target=_blank links missing safe rel attributes: **" + externalBlankLinks.length + "**",
    "- Repeated CSS background URLs: **" + repeatedCssImages.length + "**",
    "",
    ...findings.map((item) => "- [" + item.level + "] " + item.file + ": " + item.message)
  ].join("\n") + "\n");
}

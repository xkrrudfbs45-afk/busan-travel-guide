#!/usr/bin/env node
/**
 * Dependency-free technical SEO and content hygiene audit for Go2Busan.
 * Reports findings without blocking deployment by default. Set SEO_AUDIT_STRICT=1
 * locally to fail on errors after the baseline has been cleaned up.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const IGNORE_DIRS = new Set([".git", "node_modules", "public", "docs", ".vercel"]);
const htmlFiles = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (!IGNORE_DIRS.has(entry.name)) walk(path.join(dir, entry.name));
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith(".html") && entry.name !== "404.html" && !entry.name.startsWith("google")) {
      htmlFiles.push(path.join(dir, entry.name));
    }
  }
}
walk(ROOT);

const findings = [];
const titles = new Map();
const canonicals = new Map();
const imageUsage = new Map();
let checkedLinks = 0;
let brokenLocalLinks = 0;
let missingAlt = 0;
let missingDescription = 0;
let missingCanonical = 0;
let missingSocialImage = 0;

const rel = (file) => path.relative(ROOT, file).split(path.sep).join("/") || "index.html";
const add = (level, file, message) => findings.push({ level, file: rel(file), message });
const attr = (tag, name) => {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const m = tag.match(new RegExp("\\b" + escaped + "\\s*=\\s*([\"'])(.*?)\\1", "i"));
  return m ? m[2].replace(/&amp;/g, "&").trim() : "";
};
const metaContent = (html, key, value) => {
  const re = new RegExp("<meta\\b(?=[^>]*\\b" + key + "\\s*=\\s*([\"'])" + value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\1)[^>]*>", "i");
  const m = html.match(re);
  return m ? attr(m[0], "content") : "";
};
const pageUrl = (file) => {
  const pathname = "/" + rel(file).replace(/index\\.html$/, "");
  return pathname || "/";
};
const localTarget = (raw, file) => {
  let u;
  try { u = new URL(raw, "https://go2busan.com" + pageUrl(file)); } catch { return null; }
  if (u.origin !== "https://go2busan.com" || raw.startsWith("//")) return null;
  let pathname;
  try { pathname = decodeURIComponent(u.pathname); } catch { pathname = u.pathname; }
  pathname = pathname.replace(/^\/+/, "");
  if (!pathname) pathname = "index.html";
  let target = path.join(ROOT, pathname);
  if (fs.existsSync(target) && fs.statSync(target).isDirectory()) target = path.join(target, "index.html");
  if (!path.extname(target)) {
    if (fs.existsSync(target + ".html")) target += ".html";
    else target = path.join(target, "index.html");
  }
  return target;
};

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  const page = rel(file);
  const titleMatch = html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1].replace(/\s+/g, " ").trim() : "";
  if (!title) add("ERROR", file, "Missing <title>");
  else {
    const key = title.toLowerCase();
    if (titles.has(key)) add("WARN", file, `Duplicate title also used by ${titles.get(key)}`);
    else titles.set(key, page);
    if (title.length > 65) add("WARN", file, `Title is ${title.length} characters; review SERP truncation`);
  }

  const description = metaContent(html, "name", "description");
  if (!description) {
    missingDescription++;
    add("ERROR", file, "Missing meta description");
  } else if (description.length < 70 || description.length > 170) {
    add("WARN", file, `Meta description length is ${description.length}; review clarity and truncation`);
  }

  const canonicalTag = html.match(/<link\b(?=[^>]*\brel\s*=\s*["']canonical["'])[^>]*>/i);
  const canonical = canonicalTag ? attr(canonicalTag[0], "href") : "";
  if (!canonical) {
    missingCanonical++;
    add("ERROR", file, "Missing canonical URL");
  } else {
    if (!canonical.startsWith("https://go2busan.com/")) add("WARN", file, "Canonical is not an absolute Go2Busan URL");
    if (canonicals.has(canonical)) add("WARN", file, `Duplicate canonical also used by ${canonicals.get(canonical)}`);
    else canonicals.set(canonical, page);
  }

  const lang = (html.match(/<html\b[^>]*\blang\s*=\s*["']([^"']+)["']/i) || [])[1];
  if (!lang) add("WARN", file, "Missing html lang attribute");

  const ogImage = metaContent(html, "property", "og:image");
  const twitterImage = metaContent(html, "name", "twitter:image");
  const ogImageAlt = metaContent(html, "property", "og:image:alt");
  if (ogImage && !ogImageAlt) add("WARN", file, "Missing og:image:alt text");
  if (!ogImage || !twitterImage) {
    missingSocialImage++;
    add("WARN", file, "Missing og:image or twitter:image");
  }

  for (const match of html.matchAll(/<img\b[^>]*>/gi)) {
    const tag = match[0];
    const src = attr(tag, "src");
    const alt = attr(tag, "alt");
    if (!alt) {
      missingAlt++;
      add("WARN", file, `Image missing alt text: ${src || "(src missing)"}`);
    }
    if (src && !/^data:/i.test(src)) {
      const absolute = new URL(src, "https://go2busan.com" + pageUrl(file)).href;
      if (!imageUsage.has(absolute)) imageUsage.set(absolute, new Set());
      imageUsage.get(absolute).add(page);
    }
  }

  const linkAttrs = [
    ...[...html.matchAll(/<(?:a|link|script|source)\b[^>]*>/gi)].map(m => ({ tag: m[0], attr: /<script\b/i.test(m[0]) || /<source\b/i.test(m[0]) ? "src" : "href" }))
  ];
  for (const item of linkAttrs) {
    const raw = attr(item.tag, item.attr);
    if (!raw || raw.startsWith("#") || /^(mailto:|tel:|javascript:|data:)/i.test(raw)) continue;
    const target = localTarget(raw, file);
    if (!target) continue;
    checkedLinks++;
    if (!fs.existsSync(target)) {
      brokenLocalLinks++;
      add("ERROR", file, `Broken local ${item.attr}: ${raw}`);
    }
  }
}

const repeatedImages = [...imageUsage.entries()].filter(([, pages]) => pages.size > 1);
for (const [url, pages] of repeatedImages) {
  const list = [...pages];
  add("INFO", path.join(ROOT, list[0]), `Image reused on ${list.length} pages; review whether contextually appropriate: ${url}`);
}

const counts = findings.reduce((acc, f) => (acc[f.level] = (acc[f.level] || 0) + 1, acc), {});
console.log("Go2Busan technical SEO audit");
console.log("============================");
console.log(`HTML pages scanned: ${htmlFiles.length}`);
console.log(`Local links checked: ${checkedLinks}; broken local links: ${brokenLocalLinks}`);
console.log(`Missing descriptions: ${missingDescription}; missing canonicals: ${missingCanonical}`);
console.log(`Images missing alt: ${missingAlt}; pages missing social image metadata: ${missingSocialImage}`);
console.log(`Image URLs reused across pages: ${repeatedImages.length}`);
console.log(`Findings: ${JSON.stringify(counts)}`);
for (const f of findings) console.log(`[${f.level}] ${f.file}: ${f.message}`);

if (process.env.GITHUB_STEP_SUMMARY) {
  const summary = [
    "## Go2Busan technical SEO audit",
    "",
    `- HTML pages scanned: **${htmlFiles.length}**`,
    `- Local links checked: **${checkedLinks}**; broken: **${brokenLocalLinks}**`,
    `- Missing descriptions: **${missingDescription}**; missing canonicals: **${missingCanonical}**`,
    `- Images missing alt text: **${missingAlt}**`,
    `- Image URLs reused across pages: **${repeatedImages.length}** (review context before changing)`,
    "",
    "| Level | Page | Finding |",
    "|---|---|---|",
    ...findings.map(f => `| ${f.level} | ${f.file.replace(/\|/g, "\\|")} | ${f.message.replace(/\|/g, "\\|")} |`)
  ].join("\n") + "\n";
  fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, summary);
}
if (process.env.SEO_AUDIT_STRICT === "1" && findings.some(f => f.level === "ERROR")) process.exitCode = 1;

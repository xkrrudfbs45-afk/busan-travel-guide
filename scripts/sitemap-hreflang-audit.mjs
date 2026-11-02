import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const file = path.join(root, "sitemap.xml");
const issues = [];
if (!fs.existsSync(file)) {
  console.error("ERROR: sitemap.xml is missing");
  process.exit(1);
}
const xml = fs.readFileSync(file, "utf8");
const unescapeXml = (s) => s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const blocks = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/gi)].map((m) => m[1]);
const entries = [];
for (const block of blocks) {
  const loc = unescapeXml((block.match(/<loc>\s*([\s\S]*?)\s*<\/loc>/i) || [])[1] || "");
  if (!loc) {
    issues.push("URL entry missing <loc>");
    continue;
  }
  const alternates = [...block.matchAll(/<xhtml:link\b[^>]*>/gi)].map((m) => {
    const tag = m[0];
    const rel = (tag.match(/\brel=["']([^"']+)["']/i) || [])[1] || "";
    const hreflang = (tag.match(/\bhreflang=["']([^"']+)["']/i) || [])[1] || "";
    const href = unescapeXml((tag.match(/\bhref=["']([^"']+)["']/i) || [])[1] || "");
    return { rel, hreflang, href };
  });
  entries.push({ loc, alternates });
}
const urls = new Set(entries.map((entry) => entry.loc));
const toFile = (url) => {
  let parsed;
  try { parsed = new URL(url); } catch { return null; }
  if (parsed.origin !== "https://go2busan.com") return null;
  let pathname;
  try { pathname = decodeURIComponent(parsed.pathname); } catch { pathname = parsed.pathname; }
  const relative = pathname.replace(/^\/+/, "") || "index.html";
  let target = path.join(root, relative);
  if (fs.existsSync(target) && fs.statSync(target).isDirectory()) target = path.join(target, "index.html");
  if (!path.extname(target)) target = path.join(target, "index.html");
  return target;
};
for (const entry of entries) {
  const target = toFile(entry.loc);
  if (!target || !fs.existsSync(target)) issues.push("Sitemap URL has no local page: " + entry.loc);
  const alternates = entry.alternates.filter((a) => a.rel === "alternate" && a.hreflang && a.href);
  const languages = new Set(alternates.map((a) => a.hreflang.toLowerCase()));
  if (alternates.length && !languages.has("x-default")) issues.push("Translated URL group has no x-default: " + entry.loc);
  for (const alternate of alternates) {
    if (!urls.has(alternate.href)) issues.push("hreflang target is not a sitemap URL: " + alternate.href + " (from " + entry.loc + ")");
    const alternateFile = toFile(alternate.href);
    if (!alternateFile || !fs.existsSync(alternateFile)) issues.push("hreflang target has no local page: " + alternate.href);
    const targetEntry = entries.find((candidate) => candidate.loc === alternate.href);
    if (targetEntry && !targetEntry.alternates.some((candidate) => candidate.hreflang.toLowerCase() === alternate.hreflang.toLowerCase() && candidate.href === entry.loc)) {
      // x-default is a fallback, not a language code; don't require reciprocal x-default.
      if (alternate.hreflang.toLowerCase() !== "x-default") issues.push("hreflang is not reciprocal: " + entry.loc + " -> " + alternate.href + " (" + alternate.hreflang + ")");
    }
  }
}
console.log("Go2Busan sitemap/hreflang audit");
console.log("Sitemap URL entries: " + entries.length);
console.log("hreflang links: " + entries.reduce((sum, entry) => sum + entry.alternates.length, 0));
console.log("Findings: " + issues.length);
for (const issue of issues) console.log("[WARN] " + issue);
if (process.env.GITHUB_STEP_SUMMARY) {
  fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, [
    "## Sitemap and hreflang audit",
    "",
    "- Sitemap URL entries: **" + entries.length + "**",
    "- hreflang links: **" + entries.reduce((sum, entry) => sum + entry.alternates.length, 0) + "**",
    "- Findings: **" + issues.length + "**",
    ...issues.map((issue) => "- " + issue)
  ].join("\n") + "\n");
}

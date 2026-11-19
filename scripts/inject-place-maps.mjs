#!/usr/bin/env node
// Inject "Open in Google Maps" buttons for places a guide already names (content/maps/place-map-links.json).
// Usage: node scripts/inject-place-maps.mjs [public]   |   node scripts/inject-place-maps.mjs --check (validates against source pages)
import { readFileSync, writeFileSync, existsSync } from "node:fs";
const args = process.argv.slice(2);
const CHECK = args.includes("--check");
const ROOT = CHECK ? "." : (args.find((a) => !a.startsWith("--")) || "public");
const data = JSON.parse(readFileSync("content/maps/place-map-links.json", "utf8"));
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const label = { en: (n) => `Open ${n} in Google Maps ↗`, ja: (n) => `${n}の地図 ↗`, "zh-tw": (n) => `開啟${n}地圖 ↗` };
const problems = [];
const seen = new Set();
for (const p of data.pages) {
  const where = p.path;
  if (!label[p.locale]) { problems.push(`${where}: unsupported locale ${p.locale}`); continue; }
  if (!/^[a-z0-9-]+$/.test(p.id) || seen.has(p.path)) problems.push(`${where}: invalid id or duplicate page entry`);
  seen.add(p.path);
  const expectPrefix = p.locale === "en" ? "guides/" : `${p.locale}/guides/`;
  if (!p.path.startsWith(expectPrefix)) problems.push(`${where}: path does not match locale ${p.locale}`);
  const links = [];
  for (const key of p.places || []) {
    const place = data.places[key];
    if (!place || !place.q || !place[p.locale]) { problems.push(`${where}: place '${key}' missing query or ${p.locale} name`); continue; }
    const url = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(place.q);
    links.push(`<a class="place-map-link" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label[p.locale](place[p.locale]))}</a>`);
  }
  if (!links.length) problems.push(`${where}: no places`);
  const file = `${ROOT}/${p.path}`;
  if (!existsSync(file)) { problems.push(`${where}: page missing`); continue; }
  const html = readFileSync(file, "utf8");
  const count = html.split(p.before).length - 1;
  if (count !== 1) { problems.push(`${where}: anchor found ${count} times (need exactly 1)`); continue; }
  if (html.includes(`data-place-map="${p.id}"`)) { problems.push(`${where}: block already present`); continue; }
  if (CHECK) continue;
  // Flex row with a gap instead of " · " separators, which showed up as stray dots between stacked buttons on phones.
  const block = `<p class="place-map-action" data-place-map="${esc(p.id)}" style="display:flex;flex-wrap:wrap;gap:8px">${links.join("")}</p>\n`;
  writeFileSync(file, html.replace(p.before, block + p.before));
}
if (problems.length) { for (const m of problems) console.error("place-maps: " + m); process.exit(1); }
console.log(`${CHECK ? "Place map check passed" : "Place map buttons injected"}: ${data.pages.length} pages`);

#!/usr/bin/env node
// Validates content/social/30-day-calendar.json before anything can be scheduled.
// Fails (exit 1) on: missing fields, empty captions, invalid/non-canonical/wrong-language URLs,
// broken UTM rules, copy that drifts from the source CSV, secrets in the file, and any post that
// could be scheduled or published without fact-check + approval.
// Usage: node scripts/social-content-audit.mjs [--self-test]
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const FILE = "content/social/30-day-calendar.json";
const STATUSES = ["draft", "fact_checked", "approved", "scheduled", "published"];
const GATED = new Set(["approved", "scheduled", "published"]);
const REQUIRED = ["id", "day", "market", "language", "platform", "theme", "caption", "hashtags", "visual_brief",
  "target_url", "utm_campaign", "status", "fact_check_status", "fact_check_notes", "approval", "needs_page"];
const MARKET = { US: { lang: "en", campaign: "30day_us" }, JP: { lang: "ja", campaign: "30day_jp" } };

function parseCsv(text) {
  const rows = []; let row = [], cell = "", q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) { if (c === '"' && text[i + 1] === '"') { cell += '"'; i++; } else if (c === '"') q = false; else cell += c; }
    else if (c === '"') q = true;
    else if (c === ",") { row.push(cell); cell = ""; }
    else if (c === "\n" || c === "\r") { if (c === "\r" && text[i + 1] === "\n") i++; row.push(cell); rows.push(row); row = []; cell = ""; }
    else cell += c;
  }
  if (cell || row.length) { row.push(cell); rows.push(row); }
  const [head, ...body] = rows.filter((r) => r.length > 1);
  return body.map((r) => Object.fromEntries(head.map((h, i) => [h.replace(/^\uFEFF/, ""), r[i]])));
}

const pageFile = (p) => join(ROOT, p.replace(/^\//, ""), "index.html");
const sitemap = existsSync(join(ROOT, "sitemap.xml")) ? readFileSync(join(ROOT, "sitemap.xml"), "utf8") : "";

export function audit(data, { sourceRows } = {}) {
  const f = [];
  const err = (id, m) => f.push(`${id}: ${m}`);
  if (!data || !Array.isArray(data.posts)) return ["file: missing posts array"];
  if (data.timezone !== "Asia/Seoul") f.push("file: timezone must be Asia/Seoul");
  const raw = JSON.stringify(data);
  if (/(access_token|EAA[A-Za-z0-9]{20,}|hooks?\.[a-z]+\.com\/|api\.render\.com\/deploy|password)/i.test(raw)) f.push("file: looks like it contains a secret");
  const ids = new Set(), slots = new Set();
  for (const p of data.posts) {
    const id = p.id || "(no id)";
    for (const k of REQUIRED) if (!(k in p)) err(id, `missing field ${k}`);
    if (ids.has(id)) err(id, "duplicate id"); ids.add(id);
    const slot = `${p.day}|${p.market}|${p.platform}`; if (slots.has(slot)) err(id, "duplicate day/market/platform"); slots.add(slot);
    if (!MARKET[p.market]) { err(id, `unknown market ${p.market}`); continue; }
    if (p.language !== MARKET[p.market].lang) err(id, `language ${p.language} does not match market ${p.market}`);
    if (!["threads", "instagram"].includes(p.platform)) err(id, `unknown platform ${p.platform}`);
    if (typeof p.caption !== "string" || !p.caption.trim()) err(id, "empty caption");
    if (!Array.isArray(p.hashtags) || p.hashtags.some((h) => !/^#\S+$/.test(h))) err(id, "hashtags must be an array of #tags");
    if (!STATUSES.includes(p.status)) err(id, `unknown status ${p.status}`);
    if (!Array.isArray(p.fact_check_notes)) err(id, "fact_check_notes must be an array");
    if (p.utm_campaign !== MARKET[p.market].campaign) err(id, `utm_campaign must be ${MARKET[p.market].campaign}`);

    if (p.target_url) {
      let u; try { u = new URL(p.target_url); } catch { err(id, "target_url is not a URL"); continue; }
      if (u.origin !== "https://go2busan.com") err(id, "target_url must be on https://go2busan.com");
      const path = u.pathname;
      if (!existsSync(pageFile(path))) err(id, `target page does not exist in repo: ${path}`);
      else {
        const html = readFileSync(pageFile(path), "utf8");
        const canon = (html.match(/<link rel="canonical" href="([^"]+)"/) || [])[1];
        if (canon !== `https://go2busan.com${path}`) err(id, `target is not the canonical URL (${canon})`);
        if (/<meta[^>]+name="robots"[^>]+noindex/i.test(html)) err(id, "target page is noindex");
      }
      if (!sitemap.includes(`<loc>https://go2busan.com${path}</loc>`)) err(id, `target not in sitemap: ${path}`);
      const isJa = path.startsWith("/ja/"), isZh = path.startsWith("/zh-tw/");
      if (p.language === "ja" && !isJa) err(id, "Japanese post must link to a /ja/ page (no English fallback)");
      if (p.language === "en" && (isJa || isZh)) err(id, "English post must link to an English page");
      if (p.target_path && p.target_path !== path) err(id, "target_path does not match target_url");
      const q = u.searchParams;
      const want = { utm_source: p.platform, utm_medium: "social", utm_campaign: p.utm_campaign, utm_content: `day${String(p.day).padStart(2, "0")}` };
      for (const [k, v] of Object.entries(want)) if (q.get(k) !== v) err(id, `${k} should be ${v}`);
      if ([...q.keys()].some((k) => !(k in want))) err(id, "unexpected query parameter in target_url");
      if (p.needs_page) err(id, "needs_page=true but a target_url is set");
    } else if (p.cta_type !== "profile_link" && !p.needs_page) {
      err(id, "no target_url: set needs_page=true and explain in mapping_note");
    }
    if (p.needs_page && !p.mapping_note) err(id, "needs_page=true requires mapping_note");

    // Approval gate: nothing can be approved/scheduled/published without verification and sign-off.
    if (GATED.has(p.status)) {
      if (p.fact_check_status !== "verified") err(id, `status ${p.status} requires fact_check_status=verified`);
      if (!p.approval?.approved_by || !p.approval?.approved_at) err(id, `status ${p.status} requires approval.approved_by and approved_at`);
      if (!p.target_url && p.cta_type !== "profile_link") err(id, `status ${p.status} requires a verified target_url`);
      if (p.platform === "instagram" && (!p.image_rights_confirmed || !(p.image_assets || []).length)) err(id, `status ${p.status} on Instagram requires image_assets with confirmed rights`);
    }
    if (["scheduled", "published"].includes(p.status) && (!p.scheduled_date || !p.scheduled_time_kst)) err(id, `${p.status} requires scheduled_date and scheduled_time_kst (KST)`);
    if (p.status === "published" && !p.published_url) err(id, "published requires published_url");
    if (p.status === "fact_checked" && p.fact_check_status !== "verified") err(id, "fact_checked requires fact_check_status=verified");

    // OCHORYANG: keep context, never hard-code unverified visit details in copy.
    if (/ochoryang|オチョリャン|오초량/i.test(`${p.theme} ${p.caption}`)) {
      if (!p.fact_check_notes.some((n) => /official/i.test(n))) err(id, "OCHORYANG post needs an official-source verification note");
      if (/\b\d{1,2}:\d{2}\b|₩|\bKRW\b|\d+\s*won\b|円/.test(p.caption)) err(id, "OCHORYANG caption must not hard-code hours or prices before verification");
      if (/walk-in cafe$|^cafe$/i.test(p.key_angle || "")) err(id, "OCHORYANG must not be framed as a simple cafe");
    }
  }

  // Copy must match the source calendar exactly (no silent edits or exaggeration).
  if (sourceRows) {
    const col = { "US|threads": "US Threads copy", "JP|threads": "Japan Threads copy", "US|instagram": "US Instagram caption", "JP|instagram": "Japan Instagram caption" };
    for (const p of data.posts) {
      const row = sourceRows.find((r) => Number(r.Day) === p.day);
      if (!row) { err(p.id, "day not found in source CSV"); continue; }
      const rebuilt = p.hashtags.length ? `${p.caption} ${p.hashtags.join(" ")}` : p.caption;
      if (rebuilt !== row[col[`${p.market}|${p.platform}`]]) err(p.id, "caption/hashtags differ from the source CSV");
    }
  }
  return f;
}

function load() {
  const data = JSON.parse(readFileSync(join(ROOT, FILE), "utf8"));
  const srcPath = join(ROOT, data.source || "");
  const sourceRows = data.source && existsSync(srcPath) ? parseCsv(readFileSync(srcPath, "utf8")) : null;
  return { data, sourceRows };
}

if (process.argv.includes("--self-test")) {
  const { data, sourceRows } = load();
  const base = audit(data, { sourceRows });
  if (base.length) { console.log("Self-test aborted: base file has findings"); process.exit(1); }
  const clone = () => JSON.parse(JSON.stringify(data));
  const first = (d, pred) => d.posts.find(pred);
  const cases = {
    "empty caption": (d) => { first(d, (p) => p.target_url).caption = " "; },
    "missing page": (d) => { const p = first(d, (p) => p.target_url); p.target_url = p.target_url.replace(/\/guides\/[^/]+\//, "/guides/does-not-exist/"); },
    "JP post falls back to English": (d) => { const p = first(d, (p) => p.market === "JP" && p.target_url); p.target_url = p.target_url.replace("/ja/", "/"); },
    "approved without fact-check": (d) => { const p = first(d, (p) => p.target_url); p.status = "approved"; p.approval = { approved_by: "x", approved_at: "2026-11-03T09:00:00+09:00" }; },
    "scheduled without approval": (d) => { const p = first(d, (p) => p.target_url); p.status = "scheduled"; p.fact_check_status = "verified"; p.scheduled_date = "2026-11-10"; p.scheduled_time_kst = "09:00"; },
    "edited copy": (d) => { first(d, (p) => p.platform === "threads").caption += " Best in Korea!"; },
    "wrong utm": (d) => { const p = first(d, (p) => p.target_url); p.target_url = p.target_url.replace("utm_medium=social", "utm_medium=cpc"); },
    "secret committed": (d) => { d.posts[0].access_token = "EAAB" + "x".repeat(30); },
    "OCHORYANG hours hard-coded": (d) => { const p = first(d, (p) => /OCHORYANG/.test(p.theme)); p.caption += " Open 10:30"; },
  };
  let fail = 0;
  for (const [name, mutate] of Object.entries(cases)) {
    const d = clone(); mutate(d);
    const r = audit(d, { sourceRows });
    console.log(`${r.length ? "PASS" : "FAIL"}  ${name} -> ${r.length ? "rejected" : "NOT rejected"}`);
    if (!r.length) fail++;
  }
  console.log(`Self-test: ${Object.keys(cases).length - fail}/${Object.keys(cases).length} rejected as expected`);
  process.exit(fail ? 1 : 0);
}

const { data, sourceRows } = load();
const findings = audit(data, { sourceRows });
const posts = data.posts;
console.log(`Social posts checked: ${posts.length} (linked ${posts.filter((p) => p.target_url).length}, needs_page ${posts.filter((p) => p.needs_page).length})`);
console.log(`Findings: ${findings.length}`);
for (const m of findings) console.log(`[ERROR] ${m}`);
process.exit(findings.length ? 1 : 0);

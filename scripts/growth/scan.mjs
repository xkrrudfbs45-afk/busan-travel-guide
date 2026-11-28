#!/usr/bin/env node
// Go2Busan 4-hourly growth scan (read-only).
// Usage: node scripts/growth/scan.mjs [--public public] [--out growth-report] [--offline]
// Writes <out>/report.md and <out>/report.json. Never prints secret values.
// Social: reads only the state branches already fetched by the workflow (no Instagram/Threads API calls).
// Analytics: intentionally skipped; daily analytics automation owns GSC/GA4.
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, statSync } from "node:fs";
import { execFileSync, spawnSync } from "node:child_process";
import { join, relative } from "node:path";

const arg = (k, d) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : d; };
const PUB = arg("--public", "public");
const OUT = arg("--out", "growth-report");
const OFFLINE = process.argv.includes("--offline");
const SITE = "https://go2busan.com";
const startedAt = new Date();
const report = { started_at: startedAt.toISOString(), sections: {}, errors: [], priorities: [] };
const md = [];
const sec = (name, fn) => {
  try { return fn(); } catch (e) { report.errors.push(`${name}: ${String(e.message || e).slice(0, 300)}`); md.push(`\n### ${name}\n- ⚠️ failed: ${String(e.message || e).slice(0, 200)}`); }
};
const asec = async (name, fn) => {
  try { return await fn(); } catch (e) { report.errors.push(`${name}: ${String(e.message || e).slice(0, 300)}`); md.push(`\n### ${name}\n- ⚠️ failed: ${String(e.message || e).slice(0, 200)}`); }
};
const git = (...a) => { try { return execFileSync("git", a, { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim(); } catch { return ""; } };
const loc = (u) => (u.startsWith("/ja/") ? "ja" : u.startsWith("/zh-tw/") ? "zh-TW" : "en");
const unesc = (s) => (s || "").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").trim();
const width = (s) => [...(s || "")].reduce((n, c) => n + (c.codePointAt(0) > 0x2e80 ? 2 : 1), 0);
const pct = (a, b) => (b ? `${((a / b) * 100).toFixed(1)}%` : "n/a");

// ---------- 1. Built pages ----------
function walk(d, out = []) { for (const f of readdirSync(d)) { const p = join(d, f); statSync(p).isDirectory() ? walk(p, out) : f.endsWith(".html") && out.push(p); } return out; }
const pages = {};
for (const f of walk(PUB)) { const u = "/" + relative(PUB, f).replace(/index\.html$/, ""); pages[u] = readFileSync(f, "utf8"); }
const isGuide = (u) => /^\/(ja\/|zh-tw\/)?guides\/[^/]+\/$/.test(u);
const indexable = Object.keys(pages).filter((u) => !/noindex/.test((pages[u].match(/<meta name="robots"[^>]*>/) || [""])[0]) && !/^\/google[0-9a-f]+\.html$/.test(u) && u !== "/404.html" && u !== "/offline.html");
const smXml = existsSync(`${PUB}/sitemap.xml`) ? readFileSync(`${PUB}/sitemap.xml`, "utf8") : "";
const smUrls = [...smXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

sec("Technical SEO (built site)", () => {
  const I = {};
  const add = (k, v) => (I[k] ||= []).push(v);
  const titles = {}, descs = {};
  for (const u of indexable) {
    const h = pages[u];
    const t = unesc((h.match(/<title>([\s\S]*?)<\/title>/) || [])[1]);
    const d = unesc((h.match(/<meta name="description" content="([^"]*)"/) || [])[1]);
    const can = (h.match(/<link rel="canonical" href="([^"]*)"/) || [])[1];
    (titles[t] ||= []).push(u); if (d) (descs[d] ||= []).push(u);
    if (!t) add("title-missing", u);
    if (!d) add("description-missing", u);
    if (can !== SITE + u) add("canonical-not-self", `${u} → ${can || "none"}`);
    if (!/property="og:title"/.test(h) || !/property="og:image"/.test(h)) add("og-missing", u);
    if (!/name="twitter:card"/.test(h)) add("twitter-card-missing", u);
    if ((h.match(/<h1[\s>]/g) || []).length !== 1) add("h1-not-single", u);
    if (isGuide(u) && !/"BreadcrumbList"/.test(h)) add("breadcrumb-schema-missing", u);
    if (loc(u) === "en" ? width(t) > 75 : width(t) > 68) add("title-may-truncate", `${u} (${t.length} chars)`);
    if (!smUrls.includes(SITE + u)) add("indexable-not-in-sitemap", u);
    for (const m of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) { try { JSON.parse(m[1]); } catch { add("jsonld-invalid", u); } }
    for (const m of h.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)) {
      const tgt = m[2].replace(SITE, "");
      if (!pages[tgt]) add("hreflang-target-missing", `${u} ${m[1]} → ${tgt}`);
      else if (!pages[tgt].includes(`href="${SITE}${u}"`)) add("hreflang-not-reciprocal", `${u} ${m[1]} → ${tgt}`);
    }
    for (const m of new Set([...h.matchAll(/href="(\/[^"#?]*)"/g)].map((x) => x[1]))) {
      if (/\.(css|js|png|jpe?g|webp|svg|ico|xml|txt|webmanifest|json)$/.test(m) || m.startsWith("/assets/")) continue;
      const k = /\/$|\.html$/.test(m) ? m : m + "/";
      if (!pages[k]) add("broken-internal-link", `${u} → ${m}`);
    }
    const imgs = h.match(/<img\b[^>]*>/g) || [];
    if (imgs.some((i) => !/\balt="/.test(i))) add("img-alt-attr-missing", u);
  }
  for (const [t, us] of Object.entries(titles)) if (us.length > 1) add("duplicate-title", `${t} :: ${us.join(", ")}`);
  for (const [d, us] of Object.entries(descs)) if (us.length > 1) add("duplicate-description", `${d.slice(0, 50)}… :: ${us.join(", ")}`);
  for (const s of smUrls) if (!pages[s.replace(SITE, "")]) add("sitemap-url-without-page", s);
  report.sections.technical = Object.fromEntries(Object.entries(I).map(([k, v]) => [k, v.length]));
  const byLoc = indexable.reduce((a, u) => ((a[loc(u)] = (a[loc(u)] || 0) + 1), a), {});
  md.push(`\n### Technical SEO (built site)`, `- Indexable pages: ${indexable.length} (${Object.entries(byLoc).map(([k, v]) => `${k} ${v}`).join(" · ")}); sitemap URLs: ${smUrls.length}`);
  const keys = Object.keys(I).sort();
  if (!keys.length) md.push("- No issues found by this scan.");
  for (const k of keys) md.push(`- **${k}**: ${I[k].length}${I[k].length ? ` — e.g. ${I[k].slice(0, 3).map((x) => `\`${x}\``).join(", ")}` : ""}`);
  const blockers = ["canonical-not-self", "sitemap-url-without-page", "broken-internal-link", "hreflang-target-missing", "jsonld-invalid", "title-missing", "description-missing"];
  for (const b of blockers) if (I[b]?.length) report.priorities.push(`P1 tech: fix ${b} (${I[b].length})`);
});

// ---------- 2. CI audits ----------
sec("CI audit suite", () => {
  const audits = [["public-quality-audit.mjs", PUB], ["seo-audit.mjs"], ["sitemap-hreflang-audit.mjs"], ["outbound-link-image-audit.mjs"], ["homepage-food-image-audit.mjs"], ["image-credit-audit.mjs", "--strict"], ["analytics-navigation-audit.mjs"], ["build-social-calendar.mjs", "--check"], ["social-content-audit.mjs"], ["language-switch-audit.mjs"], ["inject-affiliate-cta.mjs", "--check"], ["enhance-images.mjs", "--check"]];
  const res = [];
  for (const [s, ...a] of audits) {
    if (!existsSync(`scripts/${s}`)) continue;
    const r = spawnSync("node", [`scripts/${s}`, ...a], { encoding: "utf8", timeout: 120000 });
    res.push({ s, ok: r.status === 0, tail: (r.stderr || r.stdout || "").trim().split("\n").slice(-2).join(" ").slice(0, 160) });
  }
  report.sections.audits = res.map(({ s, ok }) => ({ s, ok }));
  const fails = res.filter((r) => !r.ok);
  md.push(`\n### CI audit suite`, `- ${res.length - fails.length}/${res.length} pass on \`${git("rev-parse", "--short", "HEAD")}\``);
  for (const f of fails) { md.push(`- ❌ ${f.s}: ${f.tail}`); report.priorities.push(`P0 tech: ${f.s} failing on main`); }
});

// ---------- 3. Affiliate inventory ----------
sec("Affiliate links", () => {
  const per = { en: [0, 0], ja: [0, 0], "zh-TW": [0, 0] };
  const dests = new Map(); const bad = [];
  for (const u of indexable.filter(isGuide)) {
    const links = [...pages[u].matchAll(/<a\b[^>]*href="(https:\/\/(?:affiliate\.klook\.com|[^"]*agoda[^"]*)[^"]*)"[^>]*>/g)];
    per[loc(u)][0]++; if (links.length) per[loc(u)][1]++;
    for (const m of links) {
      const href = unesc(m[1]); const tag = m[0];
      if (href.includes("klook.com")) {
        const q = new URL(href).searchParams;
        if (q.get("aid") !== "141680" || !/^\d{7}$/.test(q.get("aff_adid") || "") || !q.get("k_site")) bad.push(`${u} bad Klook format`);
        else dests.set(q.get("k_site"), (dests.get(q.get("k_site")) || 0) + 1);
      }
      if (!/rel="[^"]*sponsored/.test(tag)) bad.push(`${u} missing rel=sponsored`);
    }
  }
  report.sections.affiliate = { coverage: per, unique_destinations: dests.size, problems: bad.length };
  report._dests = [...dests.keys()];
  md.push(`\n### Affiliate links (built site, incl. build-time CTAs)`, `- Guides with a partner link: ${Object.entries(per).map(([k, [n, a]]) => `${k} ${a}/${n} (${pct(a, n)})`).join(" · ")}`, `- Unique Klook destinations: ${dests.size}; format/rel problems: ${bad.length}${bad.length ? ` — ${bad.slice(0, 3).join("; ")}` : ""}`);
  if (per["zh-TW"][1] / Math.max(per["zh-TW"][0], 1) < 0.25) report.priorities.push(`P2 revenue: zh-TW partner-link coverage ${pct(per["zh-TW"][1], per["zh-TW"][0])} — add relevant CTAs via content/affiliate/zh-tw-cta.json`);
});

// ---------- 4. Coverage / content gaps ----------
sec("Coverage and content gaps", () => {
  const en = indexable.filter((u) => isGuide(u) && loc(u) === "en");
  const missing = { ja: [], "zh-TW": [] };
  for (const u of en) {
    const h = pages[u];
    for (const [l, code] of [["ja", "ja"], ["zh-TW", "zh-TW"]]) if (!new RegExp(`hreflang="${code}"`).test(h)) missing[l].push(u);
  }
  const topicsFile = "scripts/growth/topics.json";
  const gaps = [];
  if (existsSync(topicsFile)) {
    const topics = JSON.parse(readFileSync(topicsFile, "utf8")).topics;
    for (const t of topics) for (const [l, kws] of Object.entries(t.keywords)) {
      const pool = indexable.filter((u) => isGuide(u) && loc(u) === l);
      const hit = pool.find((u) => { const head = (pages[u].match(/<title>([\s\S]*?)<\/title>/) || [])[1] || ""; const h1 = (pages[u].match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || ""; return kws.some((k) => (head + " " + h1 + " " + u).toLowerCase().includes(k.toLowerCase())); });
      if (!hit) gaps.push({ topic: t.id, locale: l, priority: t.priority?.[l] ?? 3 });
    }
  }
  gaps.sort((a, b) => a.priority - b.priority || (a.locale === "zh-TW" ? -1 : 1));
  report.sections.coverage = { en_guides: en.length, en_without_ja: missing.ja.length, en_without_zh_tw: missing["zh-TW"].length, topic_gaps: gaps };
  md.push(`\n### Coverage and content gaps`, `- EN guides: ${en.length}; without JA version: ${missing.ja.length}; without zh-TW version: ${missing["zh-TW"].length}`);
  if (gaps.length) md.push(`- Topic gaps (no page whose title/H1/URL matches the topic keywords) — top 12:`, ...gaps.slice(0, 12).map((g) => `  - [${g.locale}] ${g.topic} (p${g.priority})`));
  for (const g of gaps.filter((g) => g.priority === 1).slice(0, 3)) report.priorities.push(`P2 content (ChatGPT): new ${g.locale} page for "${g.topic}"`);
});

// ---------- 5. Social (state branches only) ----------
sec("Social publishing (logs only)", () => {
  const now = Date.now(), H24 = 864e5;
  const out = [];
  const tLog = git("show", "origin/threads-state:publish-log.json");
  if (tLog) {
    const posts = JSON.parse(tLog).posts || {};
    const v = Object.entries(posts);
    const recent = v.filter(([, p]) => p.last_attempt_at && now - Date.parse(p.last_attempt_at) < H24);
    const count = (arr, s) => arr.filter(([, p]) => p.status === s).length;
    out.push(`- Threads log: ${v.length} entries; published ${count(v, "published")}, missed ${count(v, "missed")}, failed ${count(v, "failed")}; last 24h attempts ${recent.length} (published ${count(recent, "published")}, failed ${count(recent, "failed")})`);
    if (count(recent, "failed")) report.priorities.push("P0 social: Threads publish failures in the last 24h — check threads-publisher runs");
    const sched = JSON.parse(readFileSync("content/social/threads-30day/schedule.json", "utf8")).posts;
    const due = sched.filter((p) => Date.parse(p.publish_at_utc) < now - 3 * 36e5 && !posts[p.id]);
    out.push(`- Threads schedule: ${sched.length} posts; past due >3h with no log entry: ${due.length}${due.length ? ` (e.g. ${due.slice(0, 3).map((p) => p.id).join(", ")})` : ""}`);
    const next = sched.filter((p) => Date.parse(p.publish_at_utc) > now).sort((a, b) => a.publish_at_utc.localeCompare(b.publish_at_utc)).slice(0, 3);
    if (next.length) out.push(`- Next Threads posts: ${next.map((p) => `${p.id} ${p.publish_at_utc.slice(5, 16)}Z`).join(", ")}`);
  } else out.push("- Threads log: not available (threads-state branch not fetched)");
  const iLog = git("show", "origin/instagram-state:publish-log.json");
  const ig = JSON.parse(readFileSync("content/social/instagram/schedule.json", "utf8")).posts;
  const st = ig.reduce((a, p) => ((a[p.status] = (a[p.status] || 0) + 1), a), {});
  out.push(`- Instagram schedule: ${ig.length} posts (${Object.entries(st).map(([k, v]) => `${k} ${v}`).join(", ")})`);
  if (iLog) { const p = Object.values(JSON.parse(iLog).posts || {}); out.push(`- Instagram log: ${p.length} entries; published ${p.filter((x) => x.status === "published").length}, failed ${p.filter((x) => x.status === "failed").length}`); }
  const byMarket = ig.reduce((a, p) => ((a[p.account] = (a[p.account] || 0) + 1), a), {});
  out.push(`- Instagram mix by account: ${Object.entries(byMarket).map(([k, v]) => `${k} ${v}`).join(", ")}`);
  report.sections.social = { threads_log: !!tLog, instagram_log: !!iLog };
  md.push(`\n### Social publishing (read from logs; no Meta API calls)`, ...out);
});

// ---------- 6. Live site (network) ----------
async function fetchStatus(url, opts = {}) {
  const ctl = new AbortController(); const t = setTimeout(() => ctl.abort(), 15000);
  try { const r = await fetch(url, { redirect: "manual", signal: ctl.signal, headers: { "user-agent": "Go2BusanGrowthScan/1.0 (+https://go2busan.com/)" }, ...opts }); return { status: r.status, location: r.headers.get("location"), text: opts.body === undefined && opts.wantText ? await r.text() : null }; }
  catch (e) { return { status: 0, error: String(e.message || e).slice(0, 80) }; } finally { clearTimeout(t); }
}
await asec("Live site", async () => {
  if (OFFLINE) { md.push("\n### Live site", "- skipped (--offline)"); return; }
  const out = []; const head = git("rev-parse", "origin/main") || git("rev-parse", "HEAD"); // on PR runs HEAD is a merge commit
  const v = await fetch(`${SITE}/version.txt`).then((r) => r.text()).catch(() => "");
  const live = v.trim();
  out.push(`- Deployed version: \`${live.slice(0, 7) || "unknown"}\` — main \`${head.slice(0, 7)}\` ${live && head.startsWith(live.slice(0, 7)) ? "✅ in sync" : "⚠️ differs (deploy pending or failed)"}`);
  const robots = await fetch(`${SITE}/robots.txt`).then((r) => r.text()).catch(() => "");
  out.push(`- robots.txt: ${/Sitemap:\s*https:\/\/go2busan\.com\/sitemap\.xml/i.test(robots) ? "OK, sitemap declared" : "⚠️ sitemap line missing"}${/Disallow:\s*\/\s*$/m.test(robots) ? " — ⚠️ Disallow: / present" : ""}`);
  const redirs = [];
  for (const [from, want] of [["http://go2busan.com/", `${SITE}/`], ["https://www.go2busan.com/", `${SITE}/`]]) {
    const r = await fetchStatus(from); redirs.push(`${from} → ${r.status} ${r.location || r.error || ""}`.trim());
    if (!(r.status >= 300 && r.status < 400 && (r.location || "").startsWith(SITE))) report.priorities.push(`P1 tech: ${from} does not redirect to ${want}`);
  }
  out.push(`- Redirects: ${redirs.join(" · ")}`);
  const nf = await fetchStatus(`${SITE}/this-page-should-not-exist-${Date.now()}/`);
  out.push(`- Unknown URL returns: ${nf.status}${nf.status === 404 ? " ✅" : " ⚠️ expected 404"}`);
  const bad = []; const q = [...smUrls]; let ok = 0;
  await Promise.all(Array.from({ length: 6 }, async () => { while (q.length) { const u = q.shift(); const r = await fetchStatus(u); if (r.status === 200) ok++; else bad.push(`${u.replace(SITE, "")} ${r.status}${r.location ? ` → ${r.location}` : ""}`); } }));
  out.push(`- Sitemap URLs live: ${ok}/${smUrls.length} return 200${bad.length ? ` — ⚠️ ${bad.slice(0, 5).join("; ")}` : ""}`);
  if (bad.length) report.priorities.push(`P0 tech: ${bad.length} sitemap URLs not 200 on the live site`);
  const dests = (report._dests || []).slice(0, 30); const dbad = [];
  for (const d of dests) { const r = await fetchStatus(d); if (!(r.status === 200 || (r.status >= 300 && r.status < 400))) dbad.push(`${d.replace("https://www.klook.com", "")} ${r.status || r.error}`); }
  out.push(`- Klook destinations reachable: ${dests.length - dbad.length}/${dests.length}${dbad.length ? ` — unverified/blocked: ${dbad.slice(0, 4).join("; ")} (Klook blocks most automated requests with 403, so this is not proof of a broken link; confirm in a browser before changing anything)` : ""}`);
  report.sections.live = { version_in_sync: !!(live && head.startsWith(live.slice(0, 7))), sitemap_ok: ok, sitemap_total: smUrls.length, klook_unverified: dbad.length };
  md.push("\n### Live site", ...out);
});

// ---------- 7. Analytics role separation ----------
report.sections.analytics = "skipped-by-design";
md.push("\\n### Analytics", "- Skipped by design: GA4/GSC are handled by the daily analytics task. This 4-hour scan does not read analytics credentials or query those APIs.");

// ---------- 8. GitHub queue ----------
await asec("GitHub queue", async () => {
  const tok = process.env.GITHUB_TOKEN, repo = process.env.GITHUB_REPOSITORY;
  if (!tok || !repo) { md.push("\n### GitHub queue", "- skipped (no GITHUB_TOKEN in this environment)"); return; }
  const gh = (p) => fetch(`https://api.github.com/repos/${repo}/${p}`, { headers: { authorization: `Bearer ${tok}`, accept: "application/vnd.github+json" } }).then((r) => r.json());
  const prs = await gh("pulls?state=open&per_page=100");
  const old = prs.filter((p) => Date.now() - Date.parse(p.updated_at) > 7 * 864e5);
  const auto = prs.filter((p) => p.labels?.some((l) => l.name === "growth-autopilot"));
  md.push("\n### GitHub queue", `- Open PRs: ${prs.length} (drafts ${prs.filter((p) => p.draft).length}); not updated for 7+ days: ${old.length}${old.length ? ` (#${old.slice(0, 8).map((p) => p.number).join(", #")})` : ""}`, `- Open autopilot PRs: ${auto.length}`);
  if (old.length > 10) report.priorities.push(`P3 ops: ${old.length} stale PRs — owner triage (close superseded) to cut conflict risk`);
  report.sections.github = { open_prs: prs.length, stale: old.length, autopilot_open: auto.length };
});

// ---------- write ----------
const pri = [...new Set(report.priorities)].sort();
const head = [`## Growth scan — ${startedAt.toISOString().replace("T", " ").slice(0, 16)} UTC (KST ${new Date(startedAt.getTime() + 9 * 36e5).toISOString().slice(11, 16)})`, `Commit \`${git("rev-parse", "--short", "HEAD")}\` · ${OFFLINE ? "offline" : "online"} · errors: ${report.errors.length}`, "", "### Next priorities", ...(pri.length ? pri.slice(0, 8).map((p) => `- ${p}`) : ["- No change needed: no rule fired."])];
delete report._dests;
report.priorities = pri; report.finished_at = new Date().toISOString();
mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, "report.md"), [...head, ...md, "", report.errors.length ? `<details><summary>Scan errors</summary>\n\n${report.errors.map((e) => `- ${e}`).join("\n")}\n</details>` : ""].join("\n"));
writeFileSync(join(OUT, "report.json"), JSON.stringify(report, null, 2));
console.log(`growth scan: ${pri.length} priorities, ${report.errors.length} errors → ${OUT}/report.md`);

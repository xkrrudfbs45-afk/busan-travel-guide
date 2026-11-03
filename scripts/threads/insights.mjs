#!/usr/bin/env node
// Day-14 (or any day) performance note. Reads publish-log.json, fetches real Threads insights for
// published posts (needs threads_manage_insights), and writes a markdown report. Metrics that the
// API did not return are shown as "n/a" — never estimated. Site sessions come from GA4 separately.
//
// Usage: node scripts/threads/insights.mjs [--log path] [--out content/social/threads-30day/reports/day14.md]
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";
import { ACCOUNTS, SCHEDULE_FILE, LOG_FILE, readJson, makeClient, redact } from "./lib.mjs";

export async function collect({ schedule, log, env = process.env, fetchImpl = fetch }) {
  const rows = [];
  for (const [market, acc] of Object.entries(ACCOUNTS)) {
    const token = env[acc.tokenEnv];
    const posts = schedule.posts.filter((p) => p.market === market && log.posts?.[p.id]?.status === "published");
    if (!token) { posts.forEach((p) => rows.push({ ...p, metrics: null, note: `${acc.tokenEnv} not set` })); continue; }
    const client = makeClient({ token, fetchImpl });
    for (const p of posts) {
      try {
        const r = await client.insights(log.posts[p.id].thread_id);
        const m = Object.fromEntries((r.data || []).map((x) => [x.name, x.values?.[0]?.value ?? x.total_value?.value ?? null]));
        rows.push({ ...p, metrics: m, permalink: log.posts[p.id].permalink });
      } catch (e) { rows.push({ ...p, metrics: null, note: redact(e.message) }); }
    }
  }
  return rows;
}

export function report(rows, title = "Threads performance note") {
  const v = (r, k) => r.metrics?.[k] ?? "n/a";
  const score = (r) => r.metrics ? (r.metrics.replies || 0) * 3 + (r.metrics.reposts || 0) * 2 + (r.metrics.likes || 0) : -1;
  const lines = [`# ${title}`, "", `Generated ${new Date().toISOString()}. Only metrics returned by the Threads API are shown; profile visits and site sessions must be read from Threads/GA4 directly.`, ""];
  for (const market of Object.keys(ACCOUNTS)) {
    const rs = rows.filter((r) => r.market === market);
    lines.push(`## ${market} (@${ACCOUNTS[market].handle}) — ${rs.length} published`, "", "| Post | Day | Views | Likes | Replies | Reposts | Quotes |", "|---|---|---|---|---|---|---|");
    for (const r of rs) lines.push(`| ${r.permalink ? `[${r.id}](${r.permalink})` : r.id} | ${r.day} | ${v(r, "views")} | ${v(r, "likes")} | ${v(r, "replies")} | ${v(r, "reposts")} | ${v(r, "quotes")} |`);
    const top = [...rs].filter((r) => r.metrics).sort((a, b) => score(b) - score(a)).slice(0, 5);
    lines.push("", `Top 5 by replies×3 + reposts×2 + likes: ${top.map((r) => r.id).join(", ") || "n/a"}`, "");
  }
  lines.push("## Replacement proposals (draft — owner approval required, scheduled copy is not changed)", "", "_To be written from the data above._", "");
  return lines.join("\n");
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const opt = (k) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : undefined; };
  const out = opt("--out") || "content/social/threads-30day/reports/day14.md";
  const rows = await collect({ schedule: readJson(SCHEDULE_FILE, { posts: [] }), log: readJson(opt("--log") || LOG_FILE, { posts: {} }) });
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, report(rows));
  console.log(`Wrote ${out} (${rows.length} published posts)`);
}

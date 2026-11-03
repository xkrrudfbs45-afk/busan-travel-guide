#!/usr/bin/env node
// Records the owner's approval in schedule.json. Only the owner (or Claude on the owner's explicit
// instruction in chat) should run this. Time-sensitive posts additionally need --verified.
//
// Usage:
//   node scripts/threads/approve.mjs --by "Tak" [--market JP|US] [--days 1-14] [--ids d01-jp-1,...]
//   node scripts/threads/approve.mjs --by "Tak" --ids d09-us-2 --verified "checked official fare page 2026-11-05"
//   node scripts/threads/approve.mjs --cancel --ids d20-jp-1 --by "Tak" --reason "replaced, see CHANGELOG"
import { SCHEDULE_FILE, readJson, writeJson } from "./lib.mjs";

const args = process.argv.slice(2);
const opt = (k) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : undefined; };
const by = opt("--by");
if (!by) { console.error("--by <name> is required"); process.exit(1); }
const s = readJson(SCHEDULE_FILE, null);
if (!s) { console.error("schedule.json missing; build it with --start first"); process.exit(1); }

const market = opt("--market");
const ids = opt("--ids")?.split(",");
const [d1, d2] = (opt("--days") || "1-30").split("-").map(Number);
const now = new Date().toISOString();
let changed = 0, skipped = [];

for (const p of s.posts) {
  if (market && p.market !== market) continue;
  if (ids && !ids.includes(p.id)) continue;
  if (!ids && (p.day < d1 || p.day > (d2 || d1))) continue;
  if (args.includes("--cancel")) { p.status = "cancelled"; p.cancel_reason = opt("--reason") || null; changed++; continue; }
  if (p.verification.status === "blocked") { skipped.push(`${p.id} (blocked: ${p.verification.issues.join("; ")})`); continue; }
  if (p.verification.status === "needs_check") {
    if (!opt("--verified")) { skipped.push(`${p.id} (needs fact check: ${p.verification.flags.join(", ")})`); continue; }
    p.verification.verified_by = by; p.verification.verified_at = now; p.verification.note = opt("--verified");
  }
  if (p.status === "draft") { p.status = "approved"; p.approval = { approved_by: by, approved_at: now }; changed++; }
}
writeJson(SCHEDULE_FILE, s);
console.log(`${changed} post(s) updated.`);
if (skipped.length) console.log("Not approved:\n  " + skipped.join("\n  "));

#!/usr/bin/env node
// Builds content/social/threads-30day/schedule.json from marketing/threads-30-day-ja-en-calendar.md.
// The launch date is never assumed: --start YYYY-MM-DD is required (Day 1 = that local date in each
// account's time zone). Copy is not edited. Every post starts as "draft" and needs owner approval.
//
// Usage:
//   node scripts/threads/build-schedule.mjs --start 2026-11-05            # write schedule
//   node scripts/threads/build-schedule.mjs --check                        # verify file matches calendar copy
import { readFileSync } from "node:fs";
import { ACCOUNTS, CALENDAR_MD, SCHEDULE_FILE, parseCalendar, localToUtc, addDays, checkPost, readJson, writeJson } from "./lib.mjs";

const args = process.argv.slice(2);
const opt = (k) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : undefined; };

export function buildSchedule(md, start) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(start || "")) throw new Error("--start YYYY-MM-DD is required (launch date must be agreed, not assumed)");
  const posts = parseCalendar(md);
  return {
    source: CALENDAR_MD,
    start_date: start,
    accounts: Object.fromEntries(Object.entries(ACCOUNTS).map(([k, a]) => [k, { handle: a.handle, tz: a.tz, slots: a.slots }])),
    status_flow: ["draft", "approved", "cancelled"],
    posts: posts.map((p) => {
      const acc = ACCOUNTS[p.market];
      const date = addDays(start, p.day - 1);
      const time = acc.slots[p.slot - 1];
      const { issues, flags } = checkPost(p);
      return {
        id: p.id, day: p.day, theme: p.theme, market: p.market, account: acc.handle, language: acc.language,
        local_date: date, local_time: time, tz: acc.tz, publish_at_utc: localToUtc(date, time, acc.tz),
        text: p.text,
        verification: { status: issues.length ? "blocked" : flags.length ? "needs_check" : "evergreen", issues, flags, verified_by: null, verified_at: null },
        approval: { approved_by: null, approved_at: null },
        status: "draft",
      };
    }),
  };
}

export function validateSchedule(s, md) {
  const errs = [];
  const src = new Map(parseCalendar(md).map((p) => [p.id, p]));
  if (s.posts.length !== src.size) errs.push(`post count ${s.posts.length} != calendar ${src.size}`);
  const seen = new Set();
  for (const p of s.posts) {
    if (seen.has(p.id)) errs.push(`${p.id}: duplicate id`); seen.add(p.id);
    const o = src.get(p.id);
    if (!o) { errs.push(`${p.id}: not in calendar`); continue; }
    if (o.text !== p.text && !p.replacement) errs.push(`${p.id}: copy differs from calendar without a logged replacement`);
    if (ACCOUNTS[p.market].handle !== p.account) errs.push(`${p.id}: wrong account`);
    if (p.status === "approved") {
      if (!p.approval?.approved_by || !p.approval?.approved_at) errs.push(`${p.id}: approved without approver`);
      if (p.verification.status === "blocked") errs.push(`${p.id}: approved but blocked (${p.verification.issues.join("; ")})`);
      if (p.verification.status === "needs_check" && !p.verification.verified_by) errs.push(`${p.id}: approved but time-sensitive facts unverified`);
    }
  }
  return errs;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const md = readFileSync(CALENDAR_MD, "utf8");
  if (args.includes("--check")) {
    const s = readJson(SCHEDULE_FILE, null);
    if (!s) { console.log("No schedule.json yet (launch date not set) — nothing to check."); process.exit(0); }
    const errs = validateSchedule(s, md);
    if (errs.length) { console.error(errs.join("\n")); process.exit(1); }
    console.log(`schedule.json OK: ${s.posts.length} posts, start ${s.start_date}`);
  } else {
    const s = buildSchedule(md, opt("--start"));
    writeJson(SCHEDULE_FILE, s);
    const by = (st) => s.posts.filter((p) => p.verification.status === st).length;
    console.log(`Wrote ${SCHEDULE_FILE}: ${s.posts.length} posts from ${s.start_date}. evergreen=${by("evergreen")} needs_check=${by("needs_check")} blocked=${by("blocked")}`);
  }
}

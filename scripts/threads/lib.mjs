// Shared helpers for the Go2Busan Threads 30-day auto-posting pipeline.
// No secrets are read or written here; tokens are passed in by the caller from env.
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

export const CALENDAR_MD = "marketing/threads-30-day-ja-en-calendar.md";
export const CALENDAR_TW_MD = "marketing/threads-30-day-zh-tw-calendar.md";
export const SCHEDULE_FILE = "content/social/threads-30day/schedule.json";
export const LOG_FILE = "content/social/threads-30day/publish-log.json";
export const CHANGELOG_FILE = "content/social/threads-30day/CHANGELOG.md";

// Account config. Times come from the calendar's operating rules (JST 08/20, ET 08/18).
export const ACCOUNTS = {
  JP: { handle: "go2busan.jp", language: "ja", tz: "Asia/Tokyo", slots: ["08:00", "20:00"], tokenEnv: "THREADS_JP_ACCESS_TOKEN" },
  US: { handle: "go2busan.us", language: "en", tz: "America/New_York", slots: ["08:00", "18:00"], tokenEnv: "THREADS_US_ACCESS_TOKEN" },
  TW: { handle: "go2busan.tw", language: "zh-TW", tz: "Asia/Taipei", slots: ["08:00", "20:00"], tokenEnv: "THREADS_TW_ACCESS_TOKEN" },
};

export const MAX_TEXT = 500;           // Threads text post limit
export const MAX_ATTEMPTS = 3;         // total publish attempts per post (across runs)
export const LATE_WINDOW_MIN = 180;    // more than 3h late -> "missed", never auto-posted
export const MAX_PER_LOCAL_DAY = 2;    // planned cadence per account
export const REPLY_LATE_WINDOW_MIN = 360; // link reply must follow its post within 6h
export const STALE_RETRY_MAX_MIN = 720; // a retry with an existing container is abandoned (missed) after 12h

// ---------- calendar parsing ----------
export function parseCalendar(md) {
  const posts = [];
  let day = null, theme = null, cur = null;
  const flush = () => { if (cur) { cur.text = cur.lines.join("\n").trim(); delete cur.lines; posts.push(cur); cur = null; } };
  for (const line of md.split(/\r?\n/)) {
    const d = line.match(/^## Day (\d+) — (.+)$/);
    if (d) { flush(); day = Number(d[1]); theme = d[2].trim(); continue; }
    if (/^## /.test(line)) { flush(); day = null; continue; }          // protocol sections end the calendar
    const p = line.match(/^### (Japan|USA|Taiwan) · Post (\d) \((\d\d:\d\d) (JST|ET|TST)\)$/);
    if (p && day) {
      flush();
      const market = { Japan: "JP", USA: "US", Taiwan: "TW" }[p[1]];
      cur = { id: `d${String(day).padStart(2, "0")}-${market.toLowerCase()}-${p[2]}`, day, theme, market,
        slot: Number(p[2]), local_time: p[3], lines: [] };
      continue;
    }
    if (cur) cur.lines.push(line);
  }
  flush();
  return posts;
}

// ---------- time zones ----------
// Offset (minutes) of `tz` at the given UTC instant.
function tzOffsetMin(tz, utcMs) {
  const parts = Object.fromEntries(new Intl.DateTimeFormat("en-US", { timeZone: tz, hourCycle: "h23",
    year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" })
    .formatToParts(new Date(utcMs)).map((x) => [x.type, x.value]));
  const asUtc = Date.UTC(+parts.year, +parts.month - 1, +parts.day, +parts.hour, +parts.minute, +parts.second);
  return Math.round((asUtc - utcMs) / 60000);
}

// Local wall time (YYYY-MM-DD, HH:MM) in tz -> UTC ISO string. Handles DST.
export function localToUtc(date, time, tz) {
  const [y, m, d] = date.split("-").map(Number); const [hh, mm] = time.split(":").map(Number);
  const guess = Date.UTC(y, m - 1, d, hh, mm);
  let ms = guess - tzOffsetMin(tz, guess) * 60000;
  ms = guess - tzOffsetMin(tz, ms) * 60000;            // second pass settles DST edges
  return new Date(ms).toISOString();
}

export function addDays(date, n) {
  const [y, m, d] = date.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d + n)).toISOString().slice(0, 10);
}

export function localDate(utcIso, tz) {
  return new Intl.DateTimeFormat("en-CA", { timeZone: tz }).format(new Date(utcIso));
}

// ---------- validation ----------
const URL_RE = /https?:\/\/[^\s)]+/g;
// Concrete, changeable facts that must be verified by a person before publishing.
const TIME_SENSITIVE = [
  [/[₩$¥]\s?\d|\d[\d,]*\s?(원|円|won|KRW|JPY|USD|dollars?)\b/i, "price/amount"],
  [/\b\d{1,2}:\d{2}\b|\d{1,2}時|\d{1,2}\s?(am|pm)\b/i, "clock time / opening hours"],
  [/\d+\s?(分|minutes?|mins?|hours?|時間)\b/i, "duration / travel time"],
  [/(20\d\d年|\b20\d\d\b|\d{1,2}月\d{1,2}日|\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\.? \d{1,2}\b)/i, "specific date / event"],
  [/(the best|最高の|No\.?\s?1|secret|穴場|最好吃|最棒|第一名|私房|祕境|秘境)/i, "superlative / unverifiable claim"],
];

export function checkPost(p) {
  const issues = [], flags = [];
  if (!p.text) issues.push("empty text");
  if ([...p.text].length > MAX_TEXT) issues.push(`text over ${MAX_TEXT} chars (${[...p.text].length})`);
  if (p.market === "JP" && !/[\u3040-\u30ff\u4e00-\u9fff]/.test(p.text)) issues.push("JP post is not Japanese");
  if (p.market === "US" && /[\u3040-\u30ff]/.test(p.text)) issues.push("US post contains Japanese");
  if (p.market === "TW" && (!/[\u4e00-\u9fff]/.test(p.text) || /[\u3040-\u30ff]/.test(p.text))) issues.push("TW post is not Traditional Chinese");
  for (const [re, label] of TIME_SENSITIVE) if (re.test(p.text)) flags.push(label);
  const urls = p.text.match(URL_RE) || [];
  if (urls.length) flags.push("contains URL (checked live before publish)");
  return { issues, flags, urls };
}

// ---------- json state ----------
export function readJson(file, fallback) { return existsSync(file) ? JSON.parse(readFileSync(file, "utf8")) : fallback; }
export function writeJson(file, data) { mkdirSync(dirname(file), { recursive: true }); writeFileSync(file, JSON.stringify(data, null, 2) + "\n"); }

// Redact anything that looks like a token before it reaches a log line.
export function redact(s) {
  return String(s).replace(/(access_token=)[^&\s"]+/gi, "$1***").replace(/\b(TH|EAA|IG)[A-Za-z0-9_-]{20,}\b/g, "***");
}

// ---------- Threads API (graph.threads.net) ----------
export class ThreadsError extends Error {
  constructor(msg, { status, retryable }) { super(msg); this.status = status; this.retryable = retryable; }
}

export function makeClient({ token, fetchImpl = fetch, base = "https://graph.threads.net/v1.0" }) {
  if (!token) throw new Error("missing access token");
  async function call(method, path, params = {}) {
    const url = new URL(base + path);
    const body = new URLSearchParams(params);
    let res;
    try {
      res = method === "GET"
        ? await fetchImpl(url + (Object.keys(params).length ? "?" + body : ""), { headers: { Authorization: `Bearer ${token}` } })
        : await fetchImpl(url, { method, headers: { Authorization: `Bearer ${token}` }, body });
    } catch (e) { throw new ThreadsError(`network: ${redact(e.message)}`, { status: 0, retryable: true }); }
    const json = await res.json().catch(() => ({}));
    if (!res.ok || json.error) {
      const msg = redact(json?.error?.message || res.statusText || "unknown error");
      throw new ThreadsError(`${res.status}: ${msg}`, { status: res.status, retryable: res.status >= 500 || res.status === 429 });
    }
    return json;
  }
  return {
    me: () => call("GET", "/me", { fields: "id,username" }),
    quota: (uid) => call("GET", `/${uid}/threads_publishing_limit`, { fields: "quota_usage,config" }),
    createText: (uid, text, extra = {}) => call("POST", `/${uid}/threads`, { media_type: "TEXT", text, ...extra }),
    publish: (uid, creationId) => call("POST", `/${uid}/threads_publish`, { creation_id: creationId }),
    recent: (uid) => call("GET", `/${uid}/threads`, { fields: "id,text,timestamp,permalink", limit: "25" }),
    permalink: (mediaId) => call("GET", `/${mediaId}`, { fields: "id,permalink,timestamp" }),
    replies: (mediaId) => call("GET", `/${mediaId}/replies`, { fields: "id,text" }),
    insights: (mediaId) => call("GET", `/${mediaId}/insights`, { metric: "views,likes,replies,reposts,quotes,shares" }),
  };
}

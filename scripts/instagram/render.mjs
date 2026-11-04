// Renders Instagram carousel cards (1080x1350 JPEG) from a real, licensed photo.
// Runs in GitHub Actions: the photo is downloaded on the runner and the credit line is always drawn.
import { readFileSync, mkdirSync, writeFileSync, existsSync } from "node:fs";
import { createHash } from "node:crypto";
import { SCHEDULE_FILE, checkPost } from "./lib.mjs";

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

export function cardHtml(card, photoDataUri, credit) {
  const lines = (card.headline || []).map((l) => `<div>${esc(l)}</div>`).join("");
  const size = (card.headline || []).some((l) => l.length > 12) ? 92 : 150;
  return `<!doctype html><meta charset="utf-8"><style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;700;800&family=Noto+Sans+JP:wght@500;700;800&display=swap');
*{margin:0;box-sizing:border-box}
body{width:1080px;height:1350px;position:relative;overflow:hidden;background:#070d24;font-family:Inter,'Noto Sans JP','Helvetica Neue',Arial,sans-serif;color:#fff}
.photo{position:absolute;left:0;top:0;width:1080px;height:760px;background:url(${photoDataUri}) center/cover}
.fade{position:absolute;left:0;top:0;width:1080px;height:760px;background:linear-gradient(180deg,rgba(7,13,36,.15) 0%,rgba(7,13,36,0) 40%,rgba(7,13,36,.85) 88%,#070d24 100%)}
.bg{position:absolute;left:0;top:700px;width:1080px;height:650px;background:linear-gradient(180deg,#070d24,#12214f)}
.txt{position:absolute;left:88px;right:88px;top:640px}
.tag{color:#ffd166;font-weight:700;font-size:30px;letter-spacing:6px}
.h{font-weight:800;font-size:${size}px;line-height:1.02;margin-top:26px}
.d{font-weight:700;font-size:${card.sub ? 52 : 52}px;color:#ffd166;margin-top:34px}
.sub{font-weight:500;font-size:36px;margin-top:22px;opacity:.9}
.credit{position:absolute;left:88px;top:1294px;max-width:760px;font-weight:500;font-size:20px;opacity:.65;white-space:nowrap}
.brand{position:absolute;right:88px;top:1284px;font-weight:800;font-size:30px}
</style><div class="bg"></div><div class="photo"></div><div class="fade"></div>
<div class="txt"><div class="tag">${esc(card.tag)}</div><div class="h">${lines}</div>
<div class="d">${esc(card.date_line)}</div>${card.sub ? `<div class="sub">${esc(card.sub)}</div>` : ""}</div>
<div class="credit">${esc(credit)}</div><div class="brand">Go2Busan</div>`;
}

export async function fetchPhoto(url, fetchImpl = fetch) {
  const r = await fetchImpl(url, { headers: { "user-agent": "Go2BusanBot/1.0 (https://go2busan.com; contact via site)" } });
  if (!r.ok) throw new Error(`photo download ${r.status}`);
  const buf = Buffer.from(await r.arrayBuffer());
  return `data:image/jpeg;base64,${buf.toString("base64")}`;
}

export const specHash = (p) => createHash("sha1").update(JSON.stringify([p.cards, p.photo, p.art])).digest("hex").slice(0, 12);

// Approved posts inside the horizon, plus drafts (so previews exist before approval).
export function dueForRender(schedule, log, now, horizonH = 36) {
  return schedule.posts.filter((p) => (p.status === "draft" || p.status === "approved") &&
    !["published", "missed"].includes(log.posts?.[p.id]?.status) && checkPost(p).length === 0 &&
    (p.status === "draft" || new Date(p.publish_at_utc) - now < horizonH * 3600e3));
}

// Skip posts whose cards are already rendered for the current spec.
export function needsRender(p, outDir) {
  const f = `${outDir}/${p.id}/.hash`;
  return !(existsSync(f) && readFileSync(f, "utf8").trim() === specHash(p));
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const opt = (k) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : undefined; };
  const outDir = opt("--out") || "state/cards";
  const logPath = opt("--log") || "state/publish-log.json";
  const schedule = JSON.parse(readFileSync(SCHEDULE_FILE, "utf8"));
  const log = existsSync(logPath) ? JSON.parse(readFileSync(logPath, "utf8")) : { posts: {} };
  const artDir = opt("--art") || "state/art";
  const todo = dueForRender(schedule, log, new Date(), Number(opt("--horizon-h") ?? 36))
    .filter((p) => needsRender(p, outDir))
    .filter((p) => !p.art || existsSync(`${artDir}/${p.id}.png`)); // AI art must be generated first
  if (args.includes("--list")) { console.log(todo.length); process.exit(0); }
  if (!todo.length) { console.log("Nothing to render."); process.exit(0); }
  const { chromium } = await import("playwright");
  const browser = await chromium.launch();
  for (const p of todo) {
    const photo = p.art ? `data:image/png;base64,${readFileSync(`${artDir}/${p.id}.png`).toString("base64")}` : await fetchPhoto(p.photo.url);
    const credit = p.art ? p.art.credit : p.photo.credit;
    const page = await browser.newPage({ viewport: { width: 1080, height: 1350 } });
    mkdirSync(`${outDir}/${p.id}`, { recursive: true });
    for (let i = 0; i < p.cards.length; i++) {
      await page.setContent(cardHtml(p.cards[i], photo, credit), { waitUntil: "networkidle" });
      await page.evaluate(() => document.fonts.ready);
      writeFileSync(`${outDir}/${p.id}/${String(i + 1).padStart(2, "0")}.jpg`, await page.screenshot({ type: "jpeg", quality: 92 }));
    }
    writeFileSync(`${outDir}/${p.id}/.hash`, specHash(p));
    await page.close();
    console.log(`rendered ${p.id}: ${p.cards.length} cards`);
  }
  await browser.close();
}

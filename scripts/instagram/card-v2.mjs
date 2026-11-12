// Series card template v2 (1080x1350, 4:5): full-bleed illustration, navy text panel, fixed brand/AI-label/page elements.
// Text is always rendered here (never by the image model). Includes in-page layout QA.
export const SAFE = { x: 80, top: 90, bottom: 90 };
const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const FONT = { en: "Inter", ja: "Noto Sans JP", "zh-TW": "Noto Sans TC" };
const WEIGHT = { en: 800, ja: 800, "zh-TW": 800 };
export const CTA_BY_LANG = { en: "Save this for your Busan trip.", ja: "釜山旅行の前に保存しておこう。", "zh-TW": "出發前先收藏起來。" };

export function cardV2Html(card, { bgDataUri, lang, index, total, credit, theme }) {
  const first = index === 0;
  const cjk = lang !== "en";
  const titleSize = first ? (cjk ? 104 : 118) : (cjk ? 82 : 92);
  const font = FONT[lang] || FONT.en;
  return `<!doctype html><html lang="${lang === "zh-TW" ? "zh-Hant-TW" : lang}"><meta charset="utf-8"><style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;700;800&family=Noto+Sans+JP:wght@500;700;800&family=Noto+Sans+TC:wght@500;700;800&display=swap');
*{margin:0;box-sizing:border-box}
body{width:1080px;height:1350px;position:relative;overflow:hidden;background:#101B3B;font-family:'${font}',Inter,'Noto Sans JP','Noto Sans TC','Noto Sans CJK TC','Noto Sans CJK JP',sans-serif;color:#fff}
.bg{position:absolute;inset:0;background:url(${bgDataUri}) center/cover}
.shade{position:absolute;inset:0;background:linear-gradient(180deg,rgba(16,27,59,.55) 0%,rgba(16,27,59,0) 22%,rgba(16,27,59,.0) 38%,rgba(16,27,59,.9) 66%,#101B3B 86%)}
.cat{text-shadow:0 1px 10px rgba(16,27,59,.9);position:absolute;left:${SAFE.x}px;top:${SAFE.top}px;color:#FFC94A;font-weight:700;font-size:28px;letter-spacing:${cjk ? 3 : 6}px}
.pg{text-shadow:0 1px 10px rgba(16,27,59,.9);position:absolute;right:${SAFE.x}px;top:${SAFE.top}px;font-weight:700;font-size:28px;color:#F7F1E6}
.txt{position:absolute;left:${SAFE.x}px;right:${SAFE.x}px;bottom:200px}
.title{text-wrap:balance;text-shadow:0 2px 18px rgba(16,27,59,.45);font-weight:${WEIGHT[lang] || 800};font-size:${titleSize}px;line-height:1.1;overflow-wrap:anywhere;${cjk ? "line-break:strict;" : ""}}
.body{text-wrap:${cjk ? "balance" : "pretty"};font-weight:500;font-size:${cjk ? 40 : 42}px;line-height:1.4;margin-top:30px;color:#F7F1E6;max-width:900px}
.cta{display:inline-block;margin-top:40px;background:#FFC94A;color:#101B3B;font-weight:800;font-size:${cjk ? 38 : 40}px;padding:20px 34px;border-radius:14px;line-height:1.25}
.foot{position:absolute;left:${SAFE.x}px;right:${SAFE.x}px;bottom:${SAFE.bottom}px;height:44px}
.ai{position:absolute;left:0;bottom:6px;font-weight:500;font-size:20px;color:#F7F1E6;opacity:.8;max-width:620px;white-space:nowrap}
.brand{position:absolute;right:0;bottom:0;font-weight:800;font-size:32px;color:#fff;font-family:Inter,sans-serif}
.brand b{color:#FFC94A}
${lang === "ja" ? ".title,.body{word-break:auto-phrase}" : ""}
${theme === "bright" ? BRIGHT : ""}
</style><div class="bg"></div><div class="shade"></div>
<div class="cat">${esc(card.cat)}</div><div class="pg">${index + 1}/${total}</div>
<div class="txt"><div class="title">${esc(card.title)}</div>${card.body ? `<div class="body">${esc(card.body)}</div>` : ""}${card.cta ? `<div class="cta">${esc(card.cta)}</div>` : ""}</div>
<div class="foot"><div class="ai">${esc(credit)}</div><div class="brand">Go2<b>Busan</b></div></div>`;
}

// "bright" theme: light cream text panel and navy type over a daytime illustration (owner request 2026-11-13).
// Bump BRIGHT_VERSION when the bright template changes so render.mjs re-renders those cards.
export const BRIGHT_VERSION = 2;
const BRIGHT = `body{background:#FFF8EC;color:#13294B}
.shade{background:linear-gradient(180deg,rgba(19,41,75,.18) 0%,rgba(19,41,75,0) 12%,rgba(255,248,236,0) 30%,rgba(255,248,236,.9) 46%,#FFF8EC 58%)}
.cat{color:#FFE27A;text-shadow:none;background:rgba(19,41,75,.78);padding:8px 18px;border-radius:999px}
.pg{color:#fff;text-shadow:none;background:rgba(19,41,75,.78);padding:8px 16px;border-radius:999px}
.title{color:#13294B;text-shadow:none}
.body{color:#33415C}
.cta{background:#FF7A59;color:#fff}
.ai{color:#33415C;opacity:.85}
.brand{color:#13294B}
.brand b{color:#FF7A59}`;

// Runs inside the page: returns a list of layout problems.
export function layoutProbe({ SAFE, isLast }) {
  const issues = [];
  const q = (s) => document.querySelector(s);
  const lines = (el) => Math.round(el.getBoundingClientRect().height / parseFloat(getComputedStyle(el).lineHeight));
  for (const s of [".cat", ".pg", ".title", ".body", ".cta", ".ai", ".brand"]) {
    const el = q(s); if (!el) continue;
    const r = el.getBoundingClientRect();
    if (r.left < SAFE.x - 1 || r.right > 1080 - SAFE.x + 1) issues.push(`${s} outside side safe area`);
    if (r.top < SAFE.top - 1 || r.bottom > 1350 - 60) issues.push(`${s} outside vertical safe area`);
  }
  for (const s of [".title", ".body", ".cta", ".ai"]) { const el = q(s); if (el && el.scrollWidth > el.clientWidth + 1) issues.push(`${s} text overflows horizontally`); }
  const t = q(".title"), b = q(".body");
  if (t && lines(t) > 3) issues.push(`title wraps to ${lines(t)} lines`);
  if (b && lines(b) > 4) issues.push(`body wraps to ${lines(b)} lines`);
  if (!q(".brand")) issues.push("brand missing");
  if (isLast && !q(".cta")) issues.push("last card needs a CTA");
  const txt = q(".txt").getBoundingClientRect();
  if (txt.top < 380) issues.push("text block too tall (overlaps top area)");
  return issues;
}

// Cheap Simplified-vs-Traditional guard for zh-TW copy (common simplified-only glyphs).
const SIMPLIFIED_ONLY = /[这个们来时国说会对开关车门东买网页书页间电话钟饭楼边测试宝贵费]/;
export function langIssues(lang, texts) {
  const out = [];
  const all = texts.join("\n");
  if (lang === "zh-TW" && SIMPLIFIED_ONLY.test(all)) out.push("zh-TW copy contains simplified-only characters");
  if (lang === "ja" && !/[぀-ヿ一-鿿]/.test(all)) out.push("ja copy has no Japanese characters");
  return out;
}

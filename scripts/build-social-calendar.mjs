#!/usr/bin/env node
// Builds content/social/30-day-calendar.json from the PM's source CSV.
// Copy is never edited: Instagram hashtags are only split off the end of the caption.
// Page choices (EN slug per day) and notes live here so changes are reviewable.
// Usage: node scripts/build-social-calendar.mjs [--check]
export const EN = {1:"busan-first-time-guide",2:"busan-dwaeji-gukbap-history",3:null,4:"busan-milmyeon-history",5:"busan-three-days",
 6:"busan-transit-card",7:"busan-neighborhood-food-guide",8:"jagalchi-market-no-surprise-bill",9:"things-to-do-in-busan",
 10:"busan-rainy-day-guide",11:"busan-local-culture",12:"busan-eomuk-history",13:"things-to-do-in-busan",14:"things-to-do-in-busan",
 15:"busan-travel-budget",16:"busan-neighborhood-food-guide",17:"things-to-do-in-busan",18:"things-to-do-in-busan",
 19:"busan-street-dialect-guide",20:"busan-local-culture",21:"jagalchi-market-no-surprise-bill",22:null,23:"busan-local-culture",
 24:"gimhae-airport-to-haeundae",25:"busan-luggage-storage",26:"ktx-booking-guide",27:"busan-first-time-guide",28:null,
 29:"busan-local-culture",30:"busan-first-time-guide"};
export const NOTE = {2:"Label was \"Local food guide\"; linked to the dedicated dwaeji-gukbap page.",
 4:"Label was \"Local food guide\"; linked to the dedicated milmyeon page (pork soup page is linked from it).",
 7:"No page covers Jeonpo cafe streets specifically; closest is the neighborhood food guide. Content gap.",
 9:"Label was \"First-time guide\", which does not mention Gamcheon; things-to-do covers it.",
 11:"No dedicated Choryang page; local culture hub is the closest.",
 13:"Label was \"First-time guide\"; things-to-do covers Gwangalli.",
 14:"Label was \"First-time guide\"; things-to-do covers Haeundae and Gwangalli.",
 16:"Label was \"Local food guide\"; neighborhood food guide mentions hotteok.",
 17:"No page mentions Huinnyeoul; things-to-do is the closest. Content gap.",
 18:"No temple/green-space guide; things-to-do is the closest. Content gap.",
 19:"Label was \"Local food guide\"; dialect guide covers useful local phrases.",
 23:"No coffee/garden guide; local culture hub is the closest. Content gap.",
 24:"Airport guides exist for Haeundae and Seomyeon; Haeundae has JA/ZH versions.",
 3:"No Go2Busan page about OCHORYANG. Do not invent one; propose a page separately after checking Choryang/local-culture intent.",
 22:"No Go2Busan page about OCHORYANG. Do not invent one; propose a page separately after checking Choryang/local-culture intent.",
 28:"Engagement post; CTA is the profile link, not a site page."};
export const OCHO_NOTES = [
 "Describe OCHORYANG as a historic house with a garden and cultural programmes, not a walk-in cafe.",
 "Verify with an official source before publishing: how to visit (reservation or not), opening days/hours, fees, current exhibition/programme, photography rules, address and access.",
 "Secondary sources (not official): built in 1925 as a Japanese-style wooden house in Choryang during the colonial period; registered cultural heritage No. 349 (2007); reopened as an exhibition/education space run by the Ilmaek Cultural Foundation; outdoor garden registered as a Busan private garden in July 2025. Confirm before using any of these facts.",
 "Give historical context with care: the house dates from the Japanese colonial period and was later lived in and maintained by Korean residents. Do not present it only as an aesthetic backdrop.",
 "Use only original or licensed photos. Do not present generated images as photos of OCHORYANG."];

export function parseCsv(text) {
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

const hreflangs = (html) => Object.fromEntries([...html.matchAll(/hreflang="([^"]+)" href="https:\/\/go2busan\.com([^"]+)"/g)].map((m) => [m[1], m[2]]));
function splitTags(cap) {
  const m = cap.match(/((?:\s#[^\s#]+)+)\s*$/);
  return m ? [cap.slice(0, m.index), m[1].trim().split(/\s+/)] : [cap, []];
}

// readPage(slug) -> HTML of guides/<slug>/index.html (sync or async)
export async function build(csvText, readPage) {
  const rows = parseCsv(csvText); const posts = [];
  for (const r of rows) {
    const d = Number(r.Day), slug = EN[d], a = slug ? hreflangs(await readPage(slug)) : {};
    for (const [market, lang, camp, cols] of [["US", "en", "30day_us", ["US Threads copy", "US Instagram caption"]], ["JP", "ja", "30day_jp", ["Japan Threads copy", "Japan Instagram caption"]]]) {
      for (const [platform, col] of [["threads", cols[0]], ["instagram", cols[1]]]) {
        const src = r[col];
        const [cap, tags] = platform === "threads" ? [src, []] : splitTags(src);
        let path = null, exc = null;
        if (slug) { path = lang === "en" ? `/guides/${slug}/` : (a.ja || null); if (lang === "ja" && !path) exc = `No Japanese version of /guides/${slug}/ exists. Not falling back to English.`; }
        else if (d === 3 || d === 22) exc = "needs_page: no OCHORYANG page on Go2Busan.";
        const dd = String(d).padStart(2, "0");
        const url = path ? `https://go2busan.com${path}?utm_source=${platform}&utm_medium=social&utm_campaign=${camp}&utm_content=day${dd}` : null;
        const fc = [r.Status.replace("Draft — ", "").trim()];
        if (d === 3 || d === 22) fc.push(...OCHO_NOTES);
        if (d === 11) fc.push("Choryang is a residential area; keep the 'respect residential spaces' guidance in visuals and captions.");
        posts.push({ id: `d${dd}-${market.toLowerCase()}-${platform}`, day: d, market, language: lang, platform,
          theme: r.Theme, content_pillar: r["Content pillar"], key_angle: r["Key angle"], format: r["Instagram format"],
          caption: cap, hashtags: tags, visual_brief: r["Visual brief"],
          cta_label: r["Suggested page / CTA"], target_path: path, target_url: url,
          utm_source: platform, utm_medium: "social", utm_campaign: camp, utm_content: `day${dd}`,
          needs_page: url === null && d !== 28, cta_type: d === 28 ? "profile_link" : "site_page",
          mapping_note: [NOTE[d], exc].filter(Boolean).join("; ") || null,
          scheduled_date: null, scheduled_time_kst: null,
          status: "draft", fact_check_status: "pending", fact_check_notes: fc,
          approval: { approved_by: null, approved_at: null },
          image_assets: [], image_rights_confirmed: false,
          published_url: null, published_at: null, metrics: {} });
      }
    }
  }
  const out = { schema_version: 1, campaign: "go2busan-30day-us-jp", timezone: "Asia/Seoul",
    source: "content/social/source/30-day-calendar.source.csv",
    status_flow: ["draft", "fact_checked", "approved", "scheduled", "published"], posts };
  return JSON.stringify(out, null, 2) + "\n";
}

if (typeof process !== "undefined" && process.argv?.[1]?.endsWith("build-social-calendar.mjs")) {
  const { readFileSync, writeFileSync } = await import("node:fs");
  const csv = readFileSync("content/social/source/30-day-calendar.source.csv", "utf8");
  const json = await build(csv, (slug) => readFileSync(`guides/${slug}/index.html`, "utf8"));
  const target = "content/social/30-day-calendar.json";
  if (process.argv.includes("--check")) {
    const ok = readFileSync(target, "utf8") === json;
    console.log(ok ? "30-day-calendar.json is up to date with the source CSV" : "[ERROR] 30-day-calendar.json differs from the build output; run node scripts/build-social-calendar.mjs");
    process.exit(ok ? 0 : 1);
  }
  writeFileSync(target, json); console.log(`Wrote ${target}`);
}

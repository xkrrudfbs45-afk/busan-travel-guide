# Taiwan-market SEO and content roadmap — 2026-11-11

## Objective
Grow qualified visits from Taiwan by making the Traditional Chinese (Taiwan) experience the clearest practical answer for planning a Busan trip. Prioritize search intent coverage, localized usefulness, trustworthy venue-level details, mobile conversion and internal discovery. Do not publish search-volume or visitor-market statistics unless independently verified from an authoritative current source.

## Research snapshot
A review of current Traditional Chinese search results on 2026-11-11 shows recurring page formats and user questions:
- Broad trip planning: 釜山自由行、釜山旅遊攻略、釜山三天兩夜／四天三夜、行程規劃、旅遊費用.
- Trip decisions: 釜山住宿推薦／住哪一區、西面 vs 海雲台 vs 南浦洞、交通卡、地鐵／公車／計程車、金海機場到市區.
- High-intent attractions: 海雲台天空膠囊列車、汗蒸幕／Spa Land、甘川洞文化村、松島海上纜車、太宗臺.
- Food and shopping: 釜山美食、豬肉湯飯、魚糕、札嘎其市場、南浦洞／BIFF廣場、伴手禮.
- Weather/contingencies: 下雨天釜山景點、深夜抵達、行李寄放、親子／長輩動線.

Qualitative SERP examples reviewed:
- UDN, 釜山自由行3天2夜: https://travel.udn.com/travel/story/9653/9746554
- BringYou, 釜山自由行攻略: https://www.bring-you.info/zh-tw/busan-travel-guide
- KKday, 釜山自由行攻略: https://www.kkday.com/zh-tw/blog/21438/asia-korea-busan-guide-self-tour
- Trip.com Taiwan, 釜山旅遊費用: https://tw.trip.com/guide/info/釜山旅遊費用.html
- Taiwan-market Spa Land guide example: https://krvisitguide.com/zh/busan/busan-jjimjilbang-spa-land-zh/

These results demonstrate recurring intent, not search volume or ranking difficulty. Treat this as qualitative SERP research only.

## Existing-site-first rule
Before creating any URL, inspect sitemap.xml, assets/data/search-index.json, and the EN/JA/zh-tw guide equivalents. Improve an existing page when it already answers the same intent. New pages must have a distinct intent and reciprocal hreflang, canonical, sitemap, search-index and internal-link updates in one PR.

Current Taiwan content already covers important entry points including transit card, late airport arrival, KTX booking, BTS in Busan, Taejongdae, Ochoryang, Spa Land and neighborhood hubs. The open work around PR #312, #318, #320, #311 and #321 must be reconciled before overlapping edits are made.

## Priority clusters and recommended actions

### P0 — Make the Taiwan landing experience convert
Target intent: 釜山自由行、釜山旅遊攻略、釜山自由行行程.
- Make the zh-tw homepage and/or existing Taiwan trip-planning entry point answer: first visit, recommended trip length, where to stay, transport basics, top neighborhood routes, food, weather/rain alternatives and links to booking/official information.
- Add a compact “第一次來釜山，先從這裡開始” route with 3-day / 4-day / 5-day planning choices only if the site has distinct useful itinerary content to support them.
- Add visible pathways to the four neighborhood hubs: 海雲台、西面、南浦洞、廣安里.
- Add editorial trust signals: who writes/reviews, what was personally visited vs desk-researched, last verified date and source links.
- Do not create a second generic “complete Busan guide” if the homepage already serves that role.

### P1 — High-intent practical guides
1. Airport arrival and transport
   - Strengthen the existing late-arrival and transit-card pages.
   - Explicitly explain Gimhae Airport → Sasang transfer → metro, taxi/ride-hailing options, late-night constraints, luggage and payment.
   - Use Taiwan-native terms consistently: 金海機場、輕軌、地鐵、交通卡、計程車.
   - Ensure prices/timetables carry a checked date and official source; avoid evergreen wording for changeable facts.

2. Where to stay
   - Strengthen the existing Taiwan neighborhood hub/where-to-stay content rather than creating a duplicate hotel roundup.
   - Give a decision matrix: 西面 for central transfers/food/shopping; 海雲台 for beach/coastal attractions; 南浦洞 for markets/old downtown; 廣安里 for bridge/night views.
   - State trade-offs and likely transport implications, not a universal “best area”.

3. 3-day / 4-day trip planning
   - First check existing itinerary pages and the homepage.
   - If no page owns the intent, create one Taiwan-localized 3天2夜 practical itinerary as a new canonical cluster page; optionally 4天3夜 only when it provides genuinely different pacing.
   - Cluster by geography to reduce backtracking; include arrival/departure-day variants, rainy-day swaps, transit estimates with source/date and links to detailed venue guides.
   - Do not cram every attraction into one day or imply exact travel times without route verification.

4. Spa Land and jjimjilbang
   - Reconcile the current Spa Land PR (#318) with the existing page.
   - Cover entry procedure, bathing etiquette, same-gender bathing areas, shared-clothing areas, family/child rules, last admission, duration and how to get there.
   - Make “汗蒸幕” and “Spa Land” natural query language in title/H2/FAQ without keyword stuffing.
   - Recheck all prices, hours and rules against official venue sources before publication.

### P2 — Distinctive local food and neighborhood content
5. Busan food by neighborhood
   - Strengthen existing food guide and #311 rather than making generic “必吃美食” duplicates.
   - Structure by 西面、南浦洞、海雲台、廣安里、釜山大學周邊.
   - Each venue needs exact name (Traditional Chinese + Korean), address, map link, what to order, realistic price range with checked date, hours/closed days with source, payment/queue notes and firsthand/research status.
   - Clearly distinguish personally visited venues from recommendations researched from reliable sources.
   - Prioritize signature local dishes: 豬肉湯飯、魚糕、籽仁糖餅、海鮮 and market dining; explain what is distinctive and where to find it.
   - Use original user-shot photos where available; illustrative images must be labelled and must not imply a specific restaurant photo.

6. Rainy-day and winter alternatives
   - Strengthen existing winter and indoor attraction guides.
   - Build a useful decision route around Centum City/Spa Land, indoor exhibitions, markets and cafes; verify current opening/last-entry details.
   - Add internal links from weather-sensitive attraction pages.

7. BTS and fan travel
   - Improve the existing BTS in Busan page with verified member-linked locations, public access, transit and respectful visitor guidance.
   - Separate official/public sites from fan-created photo spots; avoid claiming a place is officially affiliated without evidence.
   - Add local food and neighborhood route suggestions only where geographically practical.

## Taiwan localization checklist
- Use natural Taiwan Traditional Chinese; prefer common Taiwan travel vocabulary (自由行、行程、住宿、地鐵、交通卡、計程車、伴手禮) consistently.
- Avoid Simplified Chinese, Mainland-specific vocabulary and literal Korean/English translations.
- Localize title, meta description, H1/H2, image alt, OG/Twitter text, FAQ, breadcrumbs, button labels, search tags and internal-link anchors.
- Preserve Korean venue names in Hangul alongside a readable Traditional Chinese name on first mention.
- Titles should lead with the primary intent and stay concise; descriptions should state the practical outcome, not repeat the title.
- Do not put a year in evergreen titles unless the page is genuinely annual/current-year specific.
- Keep one H1, logical H2/H3 hierarchy, descriptive image alt text and useful FAQ answers.
- Validate lang, canonical, reciprocal hreflang="zh-TW"/EN/JA/x-default, sitemap and structured data.
- Check mobile first: table overflow, map tap targets, image loading, sticky UI obstruction, text size and page speed.
- Every changeable claim (price, opening hours, schedule, rules, event date) needs source and checked date.

## Internal-link architecture
- Taiwan homepage → trip-planning entry → neighborhood hubs → specific attraction/food/transport guides.
- Every guide should link to 2–4 genuinely relevant neighboring guides and its parent hub.
- Add contextual links, not repetitive “read more” blocks.
- Avoid orphan pages and avoid linking to a draft URL that is not merged/live.
- On itinerary pages, link each stop to its detail guide and each neighborhood to its hub.

## Measurement plan
Create a Taiwan-only Search Console review (query/page/country/device) and GA4 landing-page segment:
- Search Console: Taiwan country, zh-tw URL prefix, clicks, impressions, CTR, average position, query groups.
- GA4: Taiwan country + landing page path beginning /zh-tw/; engaged sessions, key events, outbound booking clicks, map interactions and next-page path.
- Track branded vs non-branded queries separately.
- Review weekly for 4 weeks after release, then monthly. Do not claim growth from impressions alone; assess engaged sessions and meaningful actions.
- Add a baseline export before changing metadata so post-release impact can be compared.

## Release sequence
1. Reconcile open PRs and prevent duplicate edits: #312, #318, #320, #311, #321, #304, #305.
2. Complete Taiwan landing page and existing-guide internal-link improvements.
3. Complete venue-level food verification and photo treatment.
4. Add a distinct 3天2夜 itinerary only after confirming no existing page owns that intent.
5. Run technical SEO, hreflang, sitemap, broken-link, mobile and structured-data checks.
6. Merge only after owner approval; verify production version.txt SHA and live URLs.
7. Capture Search Console/GA4 baseline and start weekly review.

## Definition of done
- No competing URLs targeting the same primary intent.
- All Taiwan pages use natural Taiwan Traditional Chinese and have complete metadata.
- All new/changed pages have correct canonical, reciprocal hreflang, sitemap/search-index and internal links.
- Venue facts have sources and checked dates; firsthand status is explicit.
- Mobile QA and technical audits pass.
- PR is reviewed and owner-approved; deployment SHA and live page are verified.
- Taiwan search and engagement baseline is recorded for follow-up.

## Immediate implementation note
This roadmap is a planning artifact, not a claim that page copy, analytics or production settings have already changed. The next implementation PR should be limited to Taiwan landing-page and internal-link improvements after checking the latest merged state and the overlapping open PRs.

# Busan Metro international-card ticket coverage — 2026-11-24

**Checked:** 2026-11-24 (KST)  
**Baseline:** `main` at `916380c27894e49d05bb00bb2b5ec5d992dfb4f4`  
**Scope:** Existing EN / JA / zh-TW public-transport guides only. No new URL.

## Decision

Refresh the existing single-journey ticket coverage note in all three language versions with Busan City's November 18 update. The pages already distinguished a station-machine single-journey ticket from topping up a stored-value T-money / Cashbee card; this change adds a current official source, a clear checked date, and the fact that the December rollout has no exact activation date in the notice.

## Official verification

- **Busan City English notice, 2026-11-18:** https://www.busan.go.kr/eng/bsnews01/1764153
- **Busan City Japanese notice, 2026-11-18:** https://www.busan.go.kr/jpn/bsnews01/1764157
- **Busan City Traditional Chinese notice, 2026-11-18:** https://www.busan.go.kr/zhs/bsnews01/1764158
- The City says the ticket-machine card-payment service began on 2026-10-21. Overseas-issued Visa, Mastercard and JCB cards are accepted for single-journey tickets at participating machines.
- The Line 1 section between Dongmae and Dadaepo Beach, and all of Line 4, are excluded at the time of the notice. The remaining sections are scheduled for December after payment modules are installed. The notice does not state an exact activation date.
- This is **not** bank-card tap-to-ride at the fare gate and does **not** mean foreign cards can top up T-money / Cashbee. Keep these product distinctions explicit.

## Community and search context

- Taiwan Dcard, 2026 Busan five-day trip report: one traveler reported Busan Station lockers nearly full and used a staffed luggage counter as a backup. The post showed 104 reactions and 10 comments when checked on 2026-11-24; exact publication time was not exposed. This is one trip report, not a demand estimate for foreign-card ticketing: https://www.dcard.tw/f/korea_travel/p/261419325
- Taiwan PTT, 2026-07-15 five-day Busan itinerary: the public search result groups Nampo, Haeundae, Gwangalli and other districts into separate area days, supporting practical route planning but not a specific payment-demand claim: https://www.ptt.cc/bbs/Korea_Travel/M.1784120556.A.8B2.html
- Japan 4travel, 2026-09-02 Zimcarry review: one visitor describes the staffed counter near Busan Station Exit 5 and QR-based booking; useful context for visitors combining rail and local transport, not evidence of broad payment demand: https://4travel.jp/os_shisetsu_tips/15308080
- English Reddit, 2026-11-13 December Seoul / Busan planning thread: a traveler asked for itinerary and winter logistics. It is a single question and is not treated as a consensus: https://www.reddit.com/r/koreatravel/comments/1xv5q7e/seoul_and_busan_in_december/
- Yahoo!知恵袋: no current public question specifically about Busan Metro ticket-machine foreign-card coverage was verified in this pass.
- Korean public-community search: no recent independent discussion directly verifying this payment rollout surfaced. Naver Blog search returned a robots.txt block; no access-control bypass was attempted. Existing Korean community notes about luggage and last-mile walking are contextual only, not proof of demand for this payment feature.

## Competitor structure check

- The Seoulist's 2026-10-23 guide lists the same excluded sections but does not provide an exact activation date: https://theseoulist.com/plan-your-trip/busan-metro-card-tickets-2026
- Hantabi's 2026-11-14 guide explains foreign-card single tickets and the Line 1 / Line 4 exclusions, but predates the City's November 18 multilingual update: https://hantabi.org/korea/articles/busan-transit-card
- Go2Busan's useful distinction remains: a foreign card buys a single-journey ticket at a participating machine; it does not tap the gate or reload a stored-value transit card.

## Changes

- Updated only the current coverage paragraph in:
  - `guides/busan-transit-card/index.html`
  - `ja/guides/transit-card/index.html`
  - `zh-tw/guides/transit-card/index.html`
- Added the localized official Busan City source link and checked date.
- Kept all URLs, canonical / hreflang, page titles, JSON-LD, images, affiliate links, analytics and SNS unchanged.
- No fare or station-level activation date was invented.

## QA and remaining limits

- Source-level replacement check: each old coverage paragraph was found once and replaced once.
- Build, SEO audit, link audit and image-license audit: pending PR CI on the exact head.
- Browser QA at 360 / 390 / 1,280 px, live image HTTP/MIME, crop, LCP / CLS: not performed in this run.
- No merge, main edit, production deploy, analytics change or SNS action.

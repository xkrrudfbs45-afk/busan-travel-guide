# Early Gimhae Flight: Hotel-Choice Guidance — 2026-11-24

## Decision

Update the existing EN, JA and zh-TW accommodation-area guide rather than create a new URL. The new material answers a distinct, repeated question: whether a traveler staying in Haeundae should move to Busan Station or another airport-side base before a very early flight from Gimhae Airport.

## Community evidence

| Market / source | Date and context | Signal | How used |
|---|---|---|---|
| US — [Reddit r/SouthKoreaTravel](https://www.reddit.com/r/SouthKoreaTravel/comments/1y46o5v/busan_location_suggestion/) | 2026-11-24; traveler asks whether to move from Haeundae to Busan Station for a 07:00 Gimhae flight. Replies suggest comparing a hotel-arranged taxi with a final night near Sasang/airport; one reply says not to relocate to Busan Station automatically. | Current, direct accommodation-choice question; low vote count and one thread. | Strong problem signal, not consensus. Do not repeat user-generated drive-time estimates as facts. |
| US — [Reddit r/koreatravel](https://www.reddit.com/r/koreatravel/comments/1retrhv/haeundae_to_gimhae_airport/) | 2026-02-25/26; traveler staying in Haeundae asks how to reach Gimhae before 06:00 for a 07:20 flight. Replies compare rail transfer and taxi. | Same early-flight problem appears in a separate thread. | Qualitative corroboration; no crowd-sourced times or prices used as official facts. |
| US — [Reddit r/busan](https://www.reddit.com/r/busan/comments/1lrc6jj/) | 2025-07-04/05; traveler with a 07:45 international flight asks how to reach the airport around 05:00–05:30 and where to stay. Replies mention hotel-arranged taxis and airport-side hotels. | Recurring early-departure concern. | Context only; airport opening-time anecdotes are not repeated. |
| Japan — [Yahoo!知恵袋](https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q14316047424) | 2025-06-08; traveler asks about reaching Gimhae for a 07:10 flight and first public transport. | Direct Japanese-language question about first-service timing. | Qualitative signal only; old community timetable advice is not used for current service facts. |
| Japan — [4travel, summer 2026 family trip](https://4travel.jp/travelogue/12075350) | 2026-08-12 to 2026-08-16; family trip from Hakata by ferry, two nights in Nampo and two in Haeundae, return by air from Gimhae; traveler describes taxi and T-money use. | Multi-area hotel choice and transport decisions. | Context only; not evidence of early-flight demand. |
| Taiwan — Dcard / PTT search pass | Searches on 2026-11-24 found no current, directly matching early-flight hotel-choice thread. A [PTT 2024 airport-limousine thread](https://www.ptt.cc/bbs/Korea_Travel/M.1720773009.A.C44.html) describes a route that was later replaced. | No current Taiwan-specific confirmation found. | Old PTT route details explicitly excluded from current transport facts. |
| Korea — public community search | Searches across Theqoo, Clien, Ppomppu and DC Inside did not surface a current independent early-flight discussion. [Clien's 2026-11-17 Tagless post](https://www.clien.net/service/board/news/19294275) is adjacent transport news (1,154 views, 1 recommendation, 0 comments), not evidence of early-flight demand. | Related accessibility / luggage context only. | Not used to justify the early-flight content. No login-gated or private data accessed. |

## Official fact-check (checked 2026-11-24)

- [Busan Metropolitan City, airport limousine revision effective 2026-01-05](https://www.busan.go.kr/eng/bsnews01/1714674): Airport Limousine 1 serves the Haeundae–Gijang corridor. The city notice lists the first departure from Jangsan at 05:30 and an approximately 90-minute one-way journey. A 07:00 flight with a two-hour airport-arrival target cannot be served by that first departure.
- [Korea Airports Corporation, Gimhae Airport taxi information](https://www.airport.co.kr/gimhaeeng/cms/frCon/index.do?CONTENTS_NO=4&MENU_ID=110): the published standard-taxi estimate for Haeundae (Paradise Hotel) is KRW 25,000 / 70 minutes; deluxe/jumbo estimate is KRW 45,000. Standard-taxi night surcharges are listed as +20% 23:00–midnight, +30% midnight–02:00 and +20% 02:00–04:00. Estimates are not fixed quotes.
- [Korea Airports Corporation, current airport bus page](https://www.airport.co.kr/gimhaeeng/cms/frCon/index.do?CONTENTS_NO=1&MENU_ID=110) lists departures from Gimhae Airport toward Busan. It must not be mistaken for the city-to-airport timetable.
- [T-money / Busan–Gimhae Light Rail Tagless notice](https://www.tmoney.co.kr/aeb/cmnctn/news/readNewsView.dev?bdSeqNo=4450), 2026-11-17: separate future project, with late-March 2027 target; not relevant to the current early-flight departure recommendation and not presented as available now.

## Competitive review

- [Hantabi airport guide](https://hantabi.org/en/korea/articles/gimhae-airport-to-busan) and [Korea Starter Kit](https://koreastarterkit.com/visit/gimhae-airport-to-busan/) present transport modes, fare tables and taxi estimates clearly.
- Go2Busan's gap was the hotel decision for an early departure, not another generic airport-arrival comparison. The new callout adds a decision layer to the existing accommodation guide and links back to the existing Haeundae airport route page. No competitor copy or imagery was reused.

## Changes in this PR

- EN: `guides/where-to-stay-busan/index.html`
- JA: `ja/guides/where-to-stay-busan/index.html`
- zh-TW: `zh-tw/guides/where-to-stay-busan/index.html`
- Clarify that Busan Station's main advantage is KTX, not automatically an early Gimhae flight.
- Add a localized early-flight callout covering Jangsan first departure, the 90-minute published route, airport-arrival buffer, taxi estimate, hotel-arranged pickup and comparison with Sasang / airport-side lodging.
- No new URL, no new image, no affiliate destination or commercial terms changed.
- No canonical, hreflang, OG, Twitter, JSON-LD, sitemap or robots changes; technical SEO remains outside this content PR.

## SEO / user-value hypothesis

Capture and satisfy intent around:
- EN: `Busan early flight airport`, `Haeundae to Gimhae Airport early morning`
- JA: `釜山 早朝便 金海空港`, `海雲台 金海空港 早朝 タクシー`
- zh-TW: `釜山 金海機場 早班機`, `海雲台 到 金海機場 清晨`

Expected value: reduce uncertainty about hotel relocation, prevent readers from treating Busan Station as the default airport base, and help them compare a hotel-arranged taxi with an airport-side last night. The content is qualitative; no traffic or conversion uplift is claimed.

## Image and QA record

- No image asset or image markup changed. Existing image source, license, caption, alt text and crop remain untouched.
- Source-level checks: each localized insertion marker matched exactly once; each page contains exactly one `early-gimhae-flight` section; Busan Station table/description clarified; official links and internal Haeundae route link included.
- Build / CI: pending PR workflow.
- Browser visual QA at 360 / 390 / 1280 px: not performed in this run. Do not mark mobile visual review complete.
- Remaining risks: Busan City timetables may change; the 90-minute duration is a published route estimate, not a guarantee; the airport taxi table is an estimate for the Haeundae destination and not a fixed outbound quote; airline check-in requirements vary; hotel taxi arrangement is not guaranteed. Readers are told to confirm the exact stop, flight check-in deadline, pickup and fare with the relevant provider.

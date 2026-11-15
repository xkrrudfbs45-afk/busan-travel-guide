# Busan Ferry Terminal Walking-Time Clarification (EN/JA/zh-TW)

Research and source check: 2026-11-16  
Base commit: `ed3681a96ffab3d49e9e78e89fdbd1e0cb7cde03`  
Target pages:
- `guides/busan-ferry-terminal-arrival/index.html`
- `ja/guides/busan-ferry-terminal-arrival/index.html`
- `zh-tw/guides/busan-ferry-terminal-arrival/index.html`

## Why this change

The existing pages gave the Busan Port Authority's 10–15 minute estimate from the railway station building, then loosely described shorter 5–10 minute estimates as depending on starting point. The route distinction was not explicit enough for visitors choosing between KTX/SRT, Metro Line 1 and Choryang Station.

The official sources describe three different starting points:
- Rail station building Exit 10 via moving walkway and Busan Port pedestrian deck: about 10–15 minutes.
- Metro Line 1 Busan Station Exit 6, via the station building's Exit 10 and the same deck: about 20 minutes.
- Choryang Station Exit 6, via the crossing over Chungjang-daero: about 20 minutes.

Daea Express Shipping separately lists about 5–7 minutes for the pedestrian-deck-to-terminal segment. That is not the full route from the station building.

## Community and travel-demand signals

- Taiwan Dcard, [關釜渡輪全流程分享](https://www.dcard.tw/@cheop/post/259997489/b/1), posted 2025-11-11; the author says the sailing was on 2025-09-27 and describes the booking and Busan-port process. The post notes that detailed information was limited online. This is one traveller's account and is used only as a discoverability / information-gap signal, not as current operational guidance.
- Japan 4travel, [Busan International Passenger Terminal reviews](https://4travel.jp/os_shisetsu/10455750), 93 public reviews were displayed when checked 2026-11-16. A review for travel in August 2026 describes the covered connection to Busan Station as convenient. An older review dated 2023-06-13 describes the pedestrian bridge and moving walkway; this is historical context, not a current timetable.
- Japan 4travel, [2019 review of walking from Choryang Station](https://4travel.jp/os_shisetsu_tips/13588936), reports a walk of more than 20 minutes. This is an older individual account; current route time is taken from the Port Authority.
- Japan 4travel, [2021 review mentioning Busan Station Exit 8](https://4travel.jp/os_shisetsu_tips/14475679), describes a shorter alternative at that time. It is not used as current directions because exits and construction conditions can change.
- Taiwan PTT, [Busan–Tsushima ferry travelogue](https://www.ptt.cc/bbs/Japan_Travel/M.1567859462.A.35B.html), posted 2019-09-07. Old context only; no current route-time claim is taken from it.
- Yahoo!知恵袋: no sufficiently relevant recent public question about the terminal-to-station walk was found in this pass.
- English Reddit: no sufficiently relevant current public thread about this specific terminal-to-station walking route was found in this pass.
- Korean public Naver Blog pages were not opened because the search endpoint returned an access restriction. No login or access-control workaround was attempted.

These examples support making the exact starting point visible, but they do not establish population-level demand.

## Official fact check — 2026-11-16

1. Busan Port Authority, [International Passenger Terminal — Directions](https://www.busanpa.com/index.bpa?menuCd=DOM_000000401008000000), accessed 2026-11-16:
   - Railway / KTX station building Exit 10 → moving walkway → Busan Port pedestrian deck → International Passenger Terminal: approximately 10–15 minutes.
   - Metro Line 1 Busan Station Exit 6 → station building Exit 10 → moving walkway → pedestrian deck → terminal: approximately 20 minutes.
   - Choryang Station Exit 6 → first underpass intersection → crosswalk over Chungjang-daero → terminal: approximately 20 minutes.
2. Daea Express Shipping, [Busan Terminal Directions](https://www.daea.com/location/busan), accessed 2026-11-16:
   - Describes the rail-station / pedestrian-deck connection.
   - Lists approximately 5–7 minutes for the pedestrian-deck-to-terminal segment. The edit explicitly distinguishes this segment from the full walk from the station building.

## Page changes

Before:
- The 10–15 minute railway-station estimate was followed by a vague reference to shorter 5–10 minute venue estimates.
- Readers could not easily tell whether the shorter time applied to the whole station-to-terminal route or only part of the pedestrian deck.

After:
- Adds a localized three-starting-point route list to EN, JA and zh-TW pages.
- Explains that the 5–7 minute figure is only the pedestrian-deck-to-terminal segment.
- Adds Daea Express Shipping as an official operator source on all three language pages.
- Preserves existing URLs, canonical, hreflang, image assets, affiliate links, analytics and SNS settings.

## SEO and visitor-value hypothesis

Relevant intent:
- EN: Busan ferry terminal to Busan Station walk; Busan port to KTX/SRT station with luggage.
- JA: 釜山港国際旅客ターミナル 釜山駅 徒歩; 釜山港 釜山駅 行き方.
- zh-TW: 釜山港國際客運碼頭 釜山站 步行; 釜山港到釜山站 行李.

Expected value: reduce route confusion for ferry passengers, especially visitors carrying suitcases or transferring to KTX/SRT. No ranking, traffic or conversion uplift is claimed before measurement.

## Images, tests and remaining risks

- No images, image URLs, image credits, OG images or image metadata changed.
- No new image licence is required.
- Exact-head CI and static build must run after PR creation.
- Browser QA at 360px, 390px and 1280px remains pending; do not report it as completed.
- The Port Authority's posted times are estimates. Visitors should follow current station and terminal signage and allow extra time for lifts, crowds and luggage.
- No GA4/GSC query was run. No SNS posts or schedules were changed. No merge or production deployment was performed.

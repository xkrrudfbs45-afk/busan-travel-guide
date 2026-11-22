# KTX / transit community verification — 2026-11-22

Source: project-owner verification handoff on issue #365 (2026-11-22). Findings below are as reported by the owner; this docs-only pass did not re-fetch the sources. No page edit was required.

| Source | Date | Finding | Existing coverage / action |
| --- | --- | --- | --- |
| Taiwan PTT | 2026-07-23 | First-time Korea trip: KTX vs express bus, two 28-inch suitcases, hotel-to-station luggage friction | KTX booking, luggage-storage and where-to-stay pages already cover it |
| Taiwan PTT | 2026-09-30 | Two-month advance-sale window from 2026-10-01, 07:00 KST | Korail notice of 2026-10-08 confirms two months; EN/JA/zh-TW KTX pages already explain it |
| Korean KTX DCInside | 2026-09-19 | One post: cancellation seat appeared around 03:20 (784 views, 4 comments at crawl) | Anecdotal only; guides correctly say there is no official daily reset time |
| SR official notice | 2026-08-21 | From 2026-09-01 use Korail+ / Korail website; old SRT app/site had only a temporary non-member general-ticket exception | Existing pages keep the integrated flow; do not add a separate SRT booking guide |
| Korean Clien + Busan City release | 2026-11-11 | Sea Taxi (Suyeonggang–Gwangalli–Haeundae, 45 min) ran twice as a media test; full service targeted after infrastructure completion in H2 2027 | Not bookable; watchlist only, no new page |
| Japanese 4travel | 2026 | Rail-trip reports found, no clear ticket-release pain point | Do not manufacture demand |

## Image review (PR #644 comment 7077510526, source-level)

- JA / zh-TW where-to-stay and three-day itinerary pages have no article images; EN has a hero / Gamcheon cover.
- KTX covers (EN/JA/zh-TW) are CC0 and captioned, but use `loading="lazy"` with no preload / `fetchpriority="high"`: LCP risk to verify, not a measured regression.
- No browser crop, LCP/CLS or transfer-size measurement was performed; no image was replaced.

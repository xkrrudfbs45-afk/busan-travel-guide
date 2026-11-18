# Go2Busan — current verified status

_Last checked: 2026-11-18 (ChatGPT content / operations pass)_

## Repository and production

- Repository: `xkrrudfbs45-afk/busan-travel-guide`; default branch: `main`.
- Latest verified main SHA: `d2457ae3c2972c11082622abee6a72291fcd0846` (merge of PR #525 at 2026-11-18 00:40:22 UTC).
- Last independently confirmed Render production SHA remains `af35154405aecc6e520ce6a7d38877d829067f86`, from deploy workflow #44003912824. No later Render deployment or fresh public `/version.txt` response was verified in this pass. The public domain could not be fetched by the current web runtime. Do not assume current main is live; no deployment was initiated.
- No Render workspace was selected for this pass, so no Render service/deploy API check was performed.

## Merged into main since the previous status snapshot

- #516 — citywide luggage-storage guidance and Humetro locker fact corrections.
- #518 — large-family / group planning advice in EN / JA / zh-TW.
- #519 — Seomyeon and Millak winter-light event coverage and event radar.
- #522 — 15-day SNS audit and draft Gwangbok-ro artwork corrections; no approved/live post or publishing schedule was changed.
- #523 — report-only image/social-metadata audit.
- #524 — practical restaurant queue guidance in EN / JA / zh-TW.
- #525 — Huinnyeoul stairs, slopes, luggage and stroller access warning in EN / JA / zh-TW.
- Earlier merged #511–#514 remain in main.

## Open pull requests

- **#527 Draft** — older-traveller planning, late-arrival guidance and New Year status in EN / JA / zh-TW. Branch `content/senior-friendly-new-year-20261118-rebased`, based on main `d2457ae3c2972c11082622abee6a72291fcd0846`. Updated to reflect the current organizer listing for the Busan Citizen’s Bell-tolling Ceremony. Latest verified exact-head Technical SEO CI #1783 passed on commit `a71f8ad8a729b6b8f174326a4e16b4a1fda42447`: 245 HTML pages, 7,007 local links / 0 broken, 244 sitemap URLs, 892 hreflang links, 0 canonical pages missing from sitemap, and strict image audit 49 in use / 57 registered / 9 warnings / 0 errors. Check the newest run again after any later documentation-only commit. Responsive browser QA at 360 / 390 / 768 / 1280 has not been performed. Keep Draft.
- **#472 Draft** — old BTS title / description experiment. Its base is stale (`ed3681a96ffab3d49e9e78e89fdbd1e0cb7cde03)); hold and re-evaluate against fresh GSC data before any rebase or merge.

## Current open work / technical follow-ups

- #528 — dedicated Busan New Year 2026–27 guide in EN / JA / zh-TW; content / localization and technical SEO are pending. Target first useful version by 2026-11-19 if quality gates allow.

- #517 — localized metadata for expanded luggage-storage guides.
- #520 — winter-events hub metadata for Seomyeon / Millak.
- #521 — EN / JA / zh-TW winter-guide metadata for Seomyeon / Millak.
- #474 — main branch protection / required-check enforcement remains a separate owner/admin verification.
- #365 — historic sitemap / reciprocal hreflang warnings; recheck against current main before acting.

## New Year 2026–27 fact status

- Busan Festivals Organization lists the Busan Citizen’s Bell-tolling Ceremony for **2026-12-31 to 2027-01-01 at Yongdusan Park**, hosted by Busan Metropolitan City. The listed programme categories are a year-end music festival and countdown, bell-ringing ceremony and New Year’s address: https://bfo.or.kr/event/57.
- Exact start times, detailed running order, crowd-control / entry arrangements, extended transit and a special Gwangalli New Year drone performance remain unconfirmed in the 2026–27 notices reviewed.
- The organizer's detailed programme posts currently show a 2025-12-30 publication date; do not reuse those prior-edition images or last year's transport-extension notices as current-year details.
- PR #527 and `EVENT-RADAR.md` now distinguish confirmed event date / venue / programme categories from unconfirmed operational details.

## Image and technical baseline

- Last passing strict image audit on exact PR #525 head #1767: 49 images in use, 57 registered, 9 warnings, 0 strict errors. This is a recent repository baseline, not a fresh audit of the current #527 head.
- PR #527 adds no new image and does not change image credits.
- No browser screenshots or visual verification at 360 / 390 / 1280 were captured in this pass. Static CI, when available, must not be described as visual QA.

## Analytics, SNS and release controls

- No GA4 / GSC query in this content pass; the separate daily operations automation owns those metrics.
- No Instagram / Threads post, schedule, LIVE setting, token, analytics consent or measurement configuration was changed.
- Affiliate clicks are not bookings or revenue; partner conversion / commission remains unverified unless owner-side partner data is available.
- PR merge, main changes and Render deployment require the owner's explicit approval. No merge or deployment was performed in this pass.

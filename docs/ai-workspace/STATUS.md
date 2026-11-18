# Go2Busan — current verified status

_Last checked: 2026-11-18 10:36 KST_

## Repository and production
- Repository: `xkrrudfbs45-afk/busan-travel-guide`; default branch: `main`.
- Latest verified main SHA: `2a16aa811e577592e8a558174dcdbe7ed6369472` (merge commit for PR #527, 2026-11-18 00:55:57 UTC).
- PRs #516, #518, #519, #522, #523, #524, #525 and #527 are merged into main.
- Last independently documented Render production SHA remains `af35154405aecc6e520ce6a7d38877d829067f86` from deploy workflow #44003912824. This pass did not verify a newer Render deployment or fresh public `/version.txt` response. Do not assume current main is live.
- The repository has no root `version.txt` file on main (GitHub contents lookup returned 404); public runtime verification is separate.

## Open pull requests
- **#472 Draft** — BTS in Busan title / description CTR experiment. Its base is stale (`ed3681a96ffab3d49e9e78e89fdbd1e0cb7cde03`). Re-evaluate against fresh Search Console data and current main before rebasing; do not merge automatically.
- No other open PR was returned by the current repository open-PR search.

## Recently merged content
- #516 — localized luggage-storage options and Humetro locker fact corrections.
- #518 — large-family / group planning advice in EN / JA / zh-TW.
- #519 — Seomyeon and Millak winter-light event coverage and event radar.
- #522 — 15-day SNS audit and draft Gwangbok-ro artwork corrections; no approved/live post or publishing schedule was changed.
- #523 — report-only image/social-metadata audit.
- #524 — practical restaurant queue guidance in EN / JA / zh-TW.
- #525 — Huinnyeoul stairs, slopes, luggage and stroller access warning in EN / JA / zh-TW.
- #527 — optional lower-strain / older-family-member planning, late-arrival guidance and corrected 2026–27 New Year status in EN / JA / zh-TW.

## Current follow-up work
- #528 — dedicated Busan New Year 2026–27 guide in EN / JA / zh-TW. Confirmed listing: Busan Citizen’s Bell-tolling Ceremony, 2026-12-31 to 2027-01-01, Yongdusan Park. Exact times, detailed running order, crowd controls, extended transit and a special Gwangalli New Year drone show remain unconfirmed. Do not recycle 2025 programme details.
- #517 — localized metadata for expanded luggage-storage guides.
- #520 — winter-events hub metadata for Seomyeon / Millak.
- #521 — EN / JA / zh-TW winter-guide metadata for Seomyeon / Millak.
- #474 — main branch protection / required-check enforcement; owner/admin verification required.
- #365 — historic sitemap / reciprocal hreflang warnings; recheck against current main before acting.

## Audience and editorial direction
- Primary audience remains independent international visitors planning their own Busan trip, with young adults and 20–40s travellers an important creative focus. Do not reposition the whole site as a senior-travel service.
- Lead with visually compelling, practical Busan experiences: coast, night views, cafes, food, shopping, neighborhoods, events and easy-to-follow itineraries.
- Accessibility, stairs, slopes, elevators, luggage and rest-stop information should appear where relevant as useful trip-planning detail for any visitor.
- Taiwan Traditional Chinese remains a priority market, alongside English and Japanese. Validate market prioritization with GA4 / Search Console / social performance rather than assumptions alone.

## Image and homepage baseline
- Main homepage hero uses a Wikimedia Commons Busan skyline photograph (Gwangan Bridge / Marine City / LCT) with a dark overlay. The homepage also has a six-item quick navigation and four-card visual picks area.
- Homepage styling is layered across `assets/homepage-editorial.css` and `assets/homepage-showcase.css`; inspect cascade order and mobile overrides before changing design.
- Last documented strict image baseline on PR #527 exact-head audit: 49 images in use, 57 registered, 9 warnings, 0 strict errors. This is not a new image audit in this pass.
- Next homepage visual pass should prioritize real, place-matched photography, image rights / credit verification, mobile crops, loading priority and visual consistency. Do not use generated images to misrepresent actual Busan locations.

## Release, analytics and SNS controls
- No Render deployment was initiated or verified in this pass.
- No GA4 / Search Console query was run in this pass.
- No Instagram / Threads post, schedule, LIVE setting, token, consent or measurement configuration was changed.
- PR merge and production deployment are separate actions; do not claim a merge is live without deployment evidence.

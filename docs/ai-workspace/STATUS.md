## 2026-11-18 — production and PR portfolio reconciliation

- PR #535 was merged at 2026-11-18 08:25:07 UTC (merge commit `99d99aa9a6250c4f7560d1a38fe194423e3ca559`). Its 18 area-specific Agoda CTAs now disclose that the link opens a Busan-wide hotel search and that users should set their intended neighborhood on the partner search page.
- Current main SHA: `0ef0ed7523700a0c80bcfe65b204688bddb3a1cf` (merge PR #541). Render's latest deploy is live on that exact SHA: deploy `dep-dbuns6afngtc73dc3pag`, finished 2026-11-18 10:29:58 UTC. Render auto-deploy remains disabled; manual deployment was triggered for approved main merges.
- PR #540 remains Draft / open / unmerged / undeployed. Latest content includes zh-CN first-trip, airport, accommodation and neighborhood-food guides. Exact-head code run #1867 passed; docs follow-up run #1869 is in progress. Current PR branch is 67 commits ahead / 3 behind main, but GitHub currently reports mergeable=true. Do not merge until the branch is reconciled with current main and native Chinese, visual and mainland-network release gates are complete.
- Current growth priority remains: improve existing high-impression pages and contextual booking conversion before publishing many more URLs. Taiwan zh-TW remains the primary market; zh-CN is a separate pilot.

---

## 2026-11-18 — zh-CN local food guide added and validated

- Added `/zh-cn/guides/local-food-by-neighborhood/`, a mainland Simplified Chinese localized guide covering Seomyeon pork soup and milmyeon, Nampo / BIFF market snacks, Jagalchi seafood price checks, Haeundae dining, Songdo and Dongnae dishes, Korean ordering phrases, and foreign-visitor queue guidance.
- Linked from the zh-CN guide directory, homepage food entry and first-trip guide. Added a localized cover record to the shared image manifest so the common pipeline can generate responsive variants and localized alt/caption metadata.
- Added reciprocal EN / JA / zh-TW / zh-CN hreflang, sitemap entry, language switch links across all four guide versions, and static-build smoke check.
- Exact-head Technical SEO run #1867 passed on commit `6d328880b55b6dbd70f64210cb7996a55edcd4e5`: static build, localized first-trip checklist, deterministic map generation and dependency-free audit succeeded; 7,252 local links checked / 0 broken; 253 sitemap URLs; 936 hreflang links; 254 canonical HTML pages / 0 sitemap omissions; 693 language-switch links / 0 findings; strict image-credit audit 51 images in use / 59 registered / 8 unused-entry warnings / 0 errors; shared image pipeline 29 cover entries.
- Broader local SEO audit reports 106 warnings and 39 informational findings, and image-background audit reports 14 informational findings. These are existing site-wide findings and require separate triage; no claim that all are caused by this change.
- PR #540 remains Draft, not merged or deployed. Its branch is 67 commits ahead and 3 commits behind current main (main SHA `0ef0ed7523700a0c80bcfe65b204688bddb3a1cf`); reconcile latest main changes before merge. Native Simplified Chinese editorial review, responsive visual QA at 360 / 390 / tablet / desktop, and mainland-network reachability remain open release gates. No Baidu verification/submission or Xiaohongshu publishing was performed.

---

## 2026-11-18 — final image-pipeline validation for accommodation guide

- Current PR #540 content head: `bd691104189e9995c2d6e522462d628d893932c9` (Draft; not merged or deployed).
- The shared cover-photo manifest now owns the zh-CN accommodation guide image. The page no longer hardcodes a second `article-cover`; the common build pipeline injects the registered Hankook12 / Wikimedia Commons CC0 1.0 photo, responsive variants, localized alt/caption and share-image metadata.
- Exact-head Technical SEO run #1854 passed on the current content head: public static build and dependency-free audit succeeded; 7,214 local links checked / 0 broken; 252 sitemap URLs; 928 hreflang links; 253 canonical pages / 0 missing from sitemap; 684 language-switch links / 0 findings; strict image-credit audit 51 in use / 59 registered / 8 unused-registry warnings / 0 errors; shared image pipeline check 28 cover entries.
- Existing non-blocking audit warnings remain on unrelated pages, including some older localized accommodation pages without share images. They are not introduced by the zh-CN guide.
- Release gates still open: native Simplified Chinese editorial review; responsive visual QA at 360 / 390 / tablet / desktop; mainland-network reachability. Keep PR #540 Draft; no merge/deployment, Baidu submission or Xiaohongshu publishing.

---

## 2026-11-18 — latest zh-CN accommodation guide QA checkpoint

- Current PR #540 head: `cabcf42cd445e0edfda56dad9521035895e634a0` (Draft; not merged or deployed).
- Exact-head Technical SEO run #1851 passed: static build, first-trip checklist validation, deterministic EN/JA/zh-TW map generation and dependency-free audit all succeeded.
- Run #1850 identified three sitemap-level reciprocal hreflang warnings. Added the matching zh-CN alternate to the EN, JA and zh-TW accommodation-page sitemap entries. Run #1851 now reports 252 sitemap URLs, 253 canonical HTML pages, 928 hreflang links, 0 canonical pages missing from sitemap and 0 sitemap/hreflang findings.
- Local-link audit: 7,214 checked, 0 broken. Language-switch audit: 684 checked, 0 findings. Strict image-credit audit: 51 images in use, 59 registered, 8 pre-existing unused-registry warnings, 0 errors. Other audit output includes 107 warnings / 39 informational findings in the broad local SEO audit and 14 CSS background reuse informational findings; these are not failures and are not all introduced by this PR.
- The new zh-CN accommodation guide compares 西面、海云台、广安里、南浦洞 and 釜山站; uses a registered CC0 1.0 cover image with source/licence links; and is linked from the zh-CN homepage, guide directory and first-trip guide.
- Remaining release gates: native Simplified Chinese editorial review; responsive visual QA at 360 / 390 / tablet / desktop; mainland-network reachability. These have not been completed. No Baidu verification/submission or Xiaohongshu publishing was performed. Keep PR Draft; no merge or deployment.

---

## 2026-11-18 — zh-CN accommodation guide expansion

- PR #540 branch `feature/zh-cn-mainland-entry-20261118` now includes `/zh-cn/guides/where-to-stay-busan/`, a Simplified Chinese comparison of Seomyeon, Haeundae, Gwangalli, Nampo-dong and Busan Station.
- The new guide uses the registered CC0 1.0 Haeundae photo by Hankook12, with visible Commons source and licence links. It includes area trade-offs, a mobile-scroll comparison table, booking checks and contextual links to the airport and first-trip guides.
- Added directory, homepage and first-trip internal links; added the URL and reciprocal EN / JA / zh-TW / zh-CN hreflang to the sitemap; added the page to the static-build smoke checks; added reciprocal zh-CN hreflang to the existing EN / JA / zh-TW accommodation comparison pages.
- Removed the repeated Simplified Chinese language switch from the English homepage.
- Current latest code/content commit at this checkpoint: `80cede936434db0030a696861f7ac0c7be5b2317`. Exact-head Technical SEO run #1849 is in progress. Run #1848 passed on the immediately preceding head before the final photo-credit link adjustment; do not substitute that result for #1849.
- PR #540 remains Draft and is not merged or deployed. Native-language editorial review, responsive visual QA at 360 / 390 / tablet / desktop, and mainland-network reachability remain outstanding. No Baidu verification/submission or Xiaohongshu publishing was performed.

---

## 2026-11-18 — Mainland China implementation checkpoint

- Production Render static site is live on main commit `b1f829c3fe5eca58909ff2ec2ec4b1bea8c8dbb0` (deploy `dep-dbum29k9v7es739067ig`, succeeded 2026-11-18 08:26 UTC). Render auto-deploy is disabled; deployments must be explicitly triggered after an approved merge.
- Mainland China first implementation is in [PR #540](https://github.com/xkrrudfbs45-afk/busan-travel-guide/pull/540), branch `feature/zh-cn-mainland-entry-20261118`. It adds `/zh-cn/`, a guide directory and a first-trip guide; adds zh-CN language links, reciprocal hreflang, sitemap entries, build checks and language-switch audit.
- PR #540 is open and remains Draft; latest previously verified code head `83900b3d74d11396027141e0a2fbe4c974414f43` passed Technical SEO runs #1831 and #1832. Airport guide added; exact-head CI run #1837 found one stale unregistered OG image URL. That URL was corrected to the existing licensed LERK/Wikimedia image. Exact-head run #1838 passed on code head `ffc9825d43c1a18f6006e98512d8caf4de6a3b95`; docs-only follow-up run #1839 also passed on `c05b3599915901460dce9fb252c7767f3b6a8ad3`. Do not merge/deploy until build, SEO, image-credit and responsive QA gates are satisfied.
- Sitemap structure was programmatically checked for the three zh-CN URLs and reciprocal hreflang; no reciprocal-target issues were found in that focused check. This is not a substitute for the repository's full audit suite.
- PR #538 remains the separate mainland-market strategy/research PR. Keep Taiwan zh-TW as the priority growth market; zh-CN is an additional pilot.
- Mainland network reachability, Baidu account verification/submission, native-language review and Xiaohongshu publishing are not completed. No ICP, DNS, hosting, payment, analytics or social-account settings were changed.

# Go2Busan — current verified status

_Last checked: 2026-11-18 13:50 KST_

## Repository and production
- Repository: `xkrrudfbs45-afk/busan-travel-guide`; default branch: `main`.
- Latest verified main SHA: `90395b7ac6f1c86536c14529e897241574933ed9` (merged PR #534).
- Render service: `busan-travel-guide` (`srv-dbjk4lo473hc73a3d7ag`), static site, branch `main`, auto-deploy disabled.
- Latest Render deployment: `dep-dbuilpgm7kps73ch7m70`, status `live`, commit `90395b7ac6f1c86536c14529e897241574933ed9`, finished 2026-11-18 04:34:57 UTC.
- Direct public-domain `/version.txt` and page fetches were not accessible to the current web inspection runtime. Render API confirms the live deploy SHA; do not claim an independently verified custom-domain HTTP response.
- No root `version.txt` file exists in the GitHub repository; runtime verification is separate.

## Open pull requests
- **#535 Draft** — clarify that all 18 area-specific Agoda CTAs in EN / JA / zh-TW open a Busan city-level search, not neighborhood-only results. Branch `fix/agoda-haeundae-search-scope-20261118`, based on main `90395b7ac6f1c86536c14529e897241574933ed9`. The expanded CTA content/config commit `7f2e0a3ba54a9c52499a7a4f02c5cededc6b82e4` passed Technical SEO CI #1812; the subsequent docs-only head `d18515c8bd785862354b7c2fed7119640047702b` passed CI #1813. Responsive browser QA remains pending.
- **#472 Draft** — BTS title / description CTR experiment. Its base is stale (`ed3681a96ffab3d49e9e78e89fdbd1e0cb7cde03`). Re-evaluate against fresh Search Console data and current main before rebasing; do not merge automatically.

## Recently merged
- #516 — localized luggage-storage options and Humetro locker fact corrections.
- #518 — large-family / group planning advice in EN / JA / zh-TW.
- #519 — Seomyeon and Millak winter-light event coverage and event radar.
- #522 — 15-day SNS audit and draft Gwangbok-ro artwork corrections; no approved/live post or publishing schedule was changed.
- #523 — report-only image/social-metadata audit.
- #524 — practical restaurant queue guidance in EN / JA / zh-TW.
- #525 — Huinnyeoul stairs, slopes, luggage and stroller access warning in EN / JA / zh-TW.
- #527 — optional lower-strain / older-family-member planning, late-arrival guidance and corrected 2026–27 New Year status in EN / JA / zh-TW.
- #531 — homepage and Haeundae imagery matched to the actual Busan places shown, with rights records.
- #532 — contextual Klook CTA on BTS guides and Agoda hotel-search CTA on Haeundae food guides, EN / JA / zh-TW.
- #533 — dedicated 2026–27 New Year guide and event radar updates.
- #534 — corrected homepage image-credit links and excluded Agoda CTA headings from guide TOCs.

## Current follow-up work
- #535 — correct all 18 area-specific Agoda CTA placements to disclose the Busan city-level search scope; Draft. The expanded CTA content/config passed CI #1812 and the subsequent docs-only head passed CI #1813; responsive mobile QA remains pending.
- #530 — owner-approved revenue-first direction. #532 implemented the primary BTS / Haeundae CTA placements; partner dashboard and completed-booking reporting remain owner-side follow-ups. #535 fixes a destination-scope wording issue.
- #528 — dedicated Busan New Year 2026–27 guide. PR #533 is merged; keep the issue open for responsive/mobile QA and later official timetable updates.
- #517 — localized metadata for expanded luggage-storage coverage.
- #520 / #521 — winter-events hub and localized winter-guide metadata.
- #474 — main branch protection / required-check enforcement; owner/admin verification required.
- #365 — historic sitemap / reciprocal hreflang warnings; recheck against current main before acting.

## Audience and editorial direction
- Primary audience remains independent international visitors planning their own Busan trip, with young adults and 20–40s travellers an important creative focus. Do not reposition the whole site as a senior-travel service.
- Taiwan Traditional Chinese is the first growth market, with English and Japanese reviewed in parallel. Prioritize local intent and natural language rather than direct translation.
- Follow the owner direction in #530: improve existing high-impression pages and contextual conversion paths before creating more URLs. Use one relevant booking CTA at a real decision point; do not force a CTA where no matching product exists.
- The BTS guide's Klook hanbok product is destination-matched to Gamcheon. The Haeundae food Agoda search uses Busan city ID 17172 without a Haeundae-only filter; CTA copy must state that clearly. The PNU food guide remains without an affiliate CTA until a matching bookable product is verified.
- Affiliate clicks are not bookings or revenue. Partner dashboard data is required to confirm completed bookings and commission.

## Image and homepage baseline
- Homepage photo credits and displayed-image links were corrected in merged PR #534.
- Last strict image baseline on PR #533: 49 images in use, 57 registered, 9 warnings, 0 strict errors. This is not a new image audit in this pass.
- Next image work should prioritize licensed, place-matched photography, responsive crops, and real browser QA. Do not use generated images as photographs of real Busan locations.

## Release, analytics and SNS controls
- Latest Render live deployment is verified through Render API. The public Render subdomain homepage and EN / JA / zh-TW New Year guide pages loaded in read-only browser inspection; the custom `go2busan.com` domain and its `version.txt` endpoint were not accessible to that inspection runtime. No deployment was initiated in this pass.
- No GA4 / Search Console query was run (separate daily operations automation owns it).
- No Instagram / Threads post, schedule, LIVE setting, token, consent or measurement configuration was changed.
- PR merge and production deployment are separate actions; do not merge or deploy without explicit project-owner approval.



## 2026-11-18 — zh-CN airport arrival content expansion

- Added `/zh-cn/guides/gimhae-airport-to-city/` to PR #540: original route schematic, airport light rail + Metro Line 2 guidance, airport limousine routes to Seomyeon/Bujeon and Haeundae/Gijang, taxi decision guidance, luggage and late-arrival checks.
- Linked the new guide from the zh-CN guide directory and first-trip guide; added the page to sitemap and static-build smoke checks.
- Operational facts checked against Gimhae Airport's current transport page and Busan City's January 5, 2026 limousine revision notice. The page states a 2026-11-18 fact-check date and warns that fares/timetables can change.
- No image is presented as a photograph of the airport; the route diagram is an original schematic and is explicitly labelled not to scale.
- Exact-head CI, page-level metadata/image audit, native-language review, mobile visual QA and mainland network reachability remain pending. PR #540 stays Draft; no merge or production deploy.

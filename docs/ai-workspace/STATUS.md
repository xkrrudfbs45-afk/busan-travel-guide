## 2026-11-26 05:32 KST — KTX foreign-card checkout Draft PR #681

- Verified current main SHA: 6fbc38d98d8d39fd7dbf59270c9c2d28d6a37bd5. PRs #669 (KTX integration cleanup), #674 (transit/taxi/winter refresh), #678 (K.Ride guidance) and #679 (winter-lights image cleanup) are merged. PR #680 remains open / Draft / unmerged.
- Main sitemap source read-only check: 276 <loc> entries, 276 unique URLs, 276 <url> open/close pairs, no literal escaped-newline text; the zh-CN Gimhae Airport guide is represented once. This is source-level inspection, not XML parser validation or a live sitemap check.
- Draft PR #681: https://github.com/xkrrudfbs45-afk/busan-travel-guide/pull/681 (branch content/ktx-foreign-card-booking-20261126). It deepens the three existing KTX pages with foreign-card checkout and ticket-record checks. Research: docs/ai-workspace/RESEARCH-KTX-FOREIGN-CARD-BOOKING-2026-11-26.md. No new URL, image, affiliate, analytics, SNS or production setting.
- Technical SEO workflow #2642 passed on head efcb8a90cec0e1b61bd423ee033fcb7497123a98 (run https://github.com/xkrrudfbs45-afk/busan-travel-guide/actions/runs/45696843242). Local build / Node audits were not run; browser QA at 360 / 390 / 1280, live payment UI, live site, image HTTP/MIME, LCP and CLS remain unverified. Local build / Node audits were not run; browser QA at 360 / 390 / 1280, live payment UI, live site, image HTTP/MIME, LCP and CLS remain unverified. Custom-domain access is unavailable in this runtime; Render workspace selection is not available without owner confirmation.
- No GA4 / GSC query, merge or production deployment.

## 2026-11-25 21:39 KST — winter-lights image cleanup Draft PR #679

- Verified current main baseline: `402b6b058ddbb2c3d603551a0cf6b628d8697e0b`, merged PR #678. Recent main changes include #676 / #677 CTA parity and #678 localized k.ride safety guidance; those are merged, not this draft.
- Draft PR #679, branch `content/winter-lights-image-cleanup-20261125`, removes the redundant second copy of the 2020 Haeundae archive photo from the existing EN / JA / zh-TW winter-lights hub pages. The retained image remains in the opening photo pair, with direct source and KOGL Type 1 links in the caption. No image asset, URL, affiliate CTA, analytics, SNS, sitemap, canonical or hreflang change.
- Research note: `docs/ai-workspace/RESEARCH-WINTER-LIGHTS-IMAGE-CLEANUP-2026-11-25.md`. Taiwan Dcard, PTT, Japan 4travel/Yahoo, Reddit and Korean public-source searches were reviewed; only small qualitative signals were found. No new page or demand claim.
- Gwangbok-ro vehicle-control notice #30307 remains unverified against the official original/attachment (the official page returns 400 in this environment; only a public republication is readable). No traffic-control wording was added; issue #663 remains open.
- GitHub Technical SEO workflow #2636 passed on initial PR head `c3f76567dcdd1995b125c92526e46532a49190c9`; its public build, dependency-free audit, localized checklist and deterministic map checks succeeded. The latest head now differs from that tested head only in the research note, STATUS and HANDOFF documentation; no new run was associated with those docs-only updates. Browser QA and a full live-image audit remain pending. Local build was not run; 360 / 390 / 1280 browser QA, image HTTP/MIME and crop checks remain pending. The custom domain cannot be fetched by this runtime and Render workspace selection is not available without owner confirmation.
- No GA4 / GSC query, affiliate change, SNS publication/schedule change, merge or production deployment.

## 2026-11-25 05:36 KST — KTX integration cleanup

- Verified GitHub main SHA: 5eeb3c94f335274ef401e67d0b967bf8f4eecf74. Render static service busan-travel-guide is on branch main, auto-deploy disabled; latest deploy dep-dc2oppt9fdbs738aj4jg is live on the same SHA. The Render-hosted EN / JA / zh-TW KTX pages were readable; the custom-domain /version.txt endpoint was not verified in this pass.
- Draft PR #669: https://github.com/xkrrudfbs45-afk/busan-travel-guide/pull/669 (branch content/ktx-integration-cleanup-20261125). It updates only the existing EN / JA / zh-TW KTX booking pages and one dated research note. No new URL, image, affiliate, analytics or SNS change.
- Content decision: remove the ambiguous suggestion that the former SRT app / website may be a current non-member booking route. SR's 2026-08-07 Q&A says SRT tickets were sold only for trains running through 2026-08-31; from 2026-09-01 former SRT routes are booked as KTX through Korail+ or Korail's website. The 2026-08-21 notice describes the temporary transition exception. The zh-TW guide now surfaces the two-month foreign-traveller booking window in its opening callout and removes a duplicated paragraph.
- Community / competitor evidence and caveats are recorded in RESEARCH-KTX-INTEGRATION-CURRENT-2026-11-25.md: Taiwan PTT 2026-09-30, Japan 4travel 2026-10-14, English Reddit, Korean DCInside transport / monorail, TheQoo and Clien; no recent Yahoo question; Naver Blog search was blocked by robots.txt; Ppomppu / Instagram / YouTube produced no relevant public result. No broad-demand claim is made.
- Main technical checks: robots.txt allows crawling and references the sitemap. The three KTX pages retain self-canonical, reciprocal EN / JA / zh-TW hreflang, OG / Twitter images and are in the sitemap. The current sitemap still has 273 <loc> entries and three literal backslash-n sequences around the zh-CN Gimhae Airport block; separate P1 issue #657 remains open. Keep sitemap / lastmod work in that technical lane; update the three KTX URL lastmod values after this content branch merges.
- PR #658 has merged. Draft PRs #667 and #668 remain open. Docs-only PR #648 is stale (base 47b70a4) and GitHub reports it non-mergeable; do not merge that historical STATUS / HANDOFF snapshot as-is.
- Build / SEO CI on this exact branch head is pending. Local build could not be run without a repository checkout. Browser QA at 360 / 390 / 1,280 px, live image HTTP / MIME, crop, LCP / CLS and custom-domain version verification remain unverified. No GA4 / GSC query, SNS change, merge or production deploy.
- No merge or deployment has been performed. Keep the content PR Draft until exact-head CI and browser review are complete.

---
## 2026-11-24 05:37 KST — Metro locker source alignment Draft PR #658

- Verified main SHA: `f1a0266d0c8a192f3862e951dc2ab9cfc60f6594`. Render static service `busan-travel-guide` has auto-deploy disabled; latest live deployment `dep-dc2475jm8hqs739bcfdg` is on the same SHA and reports `live`.
- Draft PR [#658](https://github.com/xkrrudfbs45-afk/busan-travel-guide/pull/658), branch `content/metro-locker-source-alignment-20261124`, changes six existing EN / JA / zh-TW pages plus one research note. No new URL.
- Current operator source (Busan Transportation Corporation, checked 2026-11-24) is used for locker fit and first-three-hour base prices. Busan City's directory remains for listed locations; its summary table differs on dimensions and some prices. The duplicate City price table was removed from the dedicated luggage guide; KTX guides now use the same operator figures.
- Community evidence: Dcard 2026 reports one traveller finding Busan Station lockers full and using Zimcarry; a separate early-arrival report shows the 06:05 arrival / 09:00 Spa Land gap. PTT family-trip and 4travel Zimcarry reports are recorded with single-experience caveats. Reddit's free-storage list included Haeundae Platform, but Yonhap confirmed that service was temporary (2026-08-04–08-30), so it is not listed as year-round.
- Research and source record: `docs/ai-workspace/RESEARCH-METRO-LOCKER-PRICE-RECONCILIATION-2026-11-24.md`.
- Content head `0f755d71418d89df8026029bd004d6e569abf0b6` passed Technical SEO audit [run #45262279946](https://github.com/xkrrudfbs45-afk/busan-travel-guide/actions/runs/45262279946): public-site build and dependency-free audit succeeded. This status/handoff update advances the PR head; verify exact-head CI again before review.
- Main `sitemap.xml` remains a separate P1 issue: source has 273 `<loc>` entries and three literal backslash-`n` sequences; one malformed entry is at line 1719 (zh-CN Gimhae Airport to City). [Issue #657](https://github.com/xkrrudfbs45-afk/busan-travel-guide/issues/657) remains separate and untouched; no fix PR was found in the open-PR list.
- Real browser QA at 360 / 390 / 1,280 px, live image HTTP/MIME/crop and LCP/CLS remain unverified. No merge, main change, production deployment, GA4/GSC query, affiliate change, or SNS publication/schedule change.

---

## 2026-11-21 21:35 KST — Gwangalli last-mile localization PR #619

- Verified main SHA: `8afd2a3913ca1f72eedbc86f3670d55abe7ec353`. Production `/version.txt` reported the same SHA in successful Deploy main after CI run [#44895090808](https://github.com/xkrrudfbs45-afk/busan-travel-guide/actions/runs/44895090808); the Render deploy hook returned HTTP 200 and the production smoke test passed. This is the pre-PR production state.
- Draft PR [#619](https://github.com/xkrrudfbs45-afk/busan-travel-guide/pull/619), branch `content/gwangalli-last-mile-20261121`, deepens only the existing EN / JA / zh-TW Gwangalli neighborhood pages and adds one research note. No new URL.
- The localized pages now distinguish Gwangan Station Exit 5 (Visit Busan: about 13 minutes on foot) from Geumnyeonsan Station Exit 3 (official Gwangalli Drone Show directions: about 5 minutes). Copy warns that these are exit-specific estimates and directs readers to check the exact accommodation address.
- Research note records the 2026-11-18 TheQoo local discussion, Taiwan Dcard / PTT, Japan 4travel / Yahoo!知恵袋, English Reddit, official route sources and access limitations. The ambiguous Dcard elevator observation was not published.
- Existing Gwangalli cover image remains unchanged: Glabb / Wikimedia Commons, Public Domain; no new image or asset.
- Exact-head Technical SEO CI was triggered for the initial PR head; recheck after this documentation-only update. Real browser QA at 360 / 390 / 1,280 px, live image HTTP/MIME, crop and LCP/CLS remain unverified.
- No GA4 / GSC query, SNS publication or schedule change, affiliate change, merge, or production deployment was made in this run.

---

## 2026-11-21 17:50 KST — verified airport-guide growth checkpoint

- GitHub main: `f000cbcaf0fea9653d04fbc66fe6457d88bee318`. Render static service `busan-travel-guide` remains auto-deploy off; latest live deployment `dep-dc0l16bm8hqs73ertcgg` is on the same SHA. No production deploy was triggered.
- Draft PR [#615](https://github.com/xkrrudfbs45-afk/busan-travel-guide/pull/615) deepens the existing EN / JA / zh-TW airport-to-Haeundae guides; no new URL. The latest content head before this status-only update, `e54d0547633303d3792f8851fb5af45c3ed8e068`, passed [CI run #44886546254](https://github.com/xkrrudfbs45-afk/busan-travel-guide/actions/runs/44886546254): public static build and dependency-free audit succeeded; Agoda CTA check 24 placements; external target links missing safe rel 0; strict image-credit errors 0.
- Exact route distinction: Airport Limousine 1's Jangsan-bound airport departures end at 16:50; 21:40 is the Gijang-bound branch. The three language pages tell readers to verify their hotel stop against that branch. Route 307's large-suitcase pilot ended 2026-09-30.
- The same audit found five separate sitemap/hreflang warnings for the EN solo-dining canonical URL missing from sitemap.xml and JA / zh-TW hreflang references to that missing target. This was recorded in [issue #611](https://github.com/xkrrudfbs45-afk/busan-travel-guide/issues/611); it is not changed in PR #615.
- PR #615 remains Draft / open / mergeable / unmerged. This status-only update is included in the PR; verify its exact-head CI before any review decision. Browser QA at 360 / 390 / 1,280 px and Agoda final-result UI verification remain outstanding.
- Community / official-source record: `docs/ai-workspace/RESEARCH-AIRPORT-HAEUNDAE-CONVERSION-2026-11-21.md`. It records Taiwan Dcard/PTT, Japan Yahoo!知恵袋/4travel, English Reddit, Korean local press, Busan City and Gimhae Airport verification, competitor structure notes and image rights.
- Existing airport cover remains the LERK / Wikimedia Commons departure-hall photo, CC BY-SA 4.0, with filename / author / license credit. EN Pinterest media matches the article / OG image and includes the credit. No image asset was replaced or generated.
- Existing PR #472 remains Draft / open / unmerged; no change was made. No GA4 / GSC query, SNS post / schedule change, merge, production deployment, analytics or partner setting change occurred.

---

## 2026-11-21 17:32 KST — verified airport-guide growth checkpoint

- GitHub main: `f000cbcaf0fea9653d04fbc66fe6457d88bee318`. Render static service `busan-travel-guide` remains auto-deploy off; latest live deployment `dep-dc0l16bm8hqs73ertcgg` is on the same SHA. No production deploy was triggered.
- Draft PR [#615](https://github.com/xkrrudfbs45-afk/busan-travel-guide/pull/615) deepens the existing EN / JA / zh-TW airport-to-Haeundae guides; no new URL. The content head before this status-only update, `4a28261f5eefb816ee14bb33e64e61b986842246`, passed [CI run #44886148892](https://github.com/xkrrudfbs45-afk/busan-travel-guide/actions/runs/44886148892): public static build and dependency-free audit succeeded; Agoda CTA check 24 placements; external target links missing safe rel 0; strict image-credit errors 0.
- The same audit found five separate sitemap/hreflang warnings for the EN solo-dining canonical URL missing from sitemap.xml and JA / zh-TW hreflang references to that missing target. This was recorded in [issue #611](https://github.com/xkrrudfbs45-afk/busan-travel-guide/issues/611); it is not changed in PR #615.
- PR #615 remains Draft / open / mergeable / unmerged. The status/handoff update is documentation-only and will receive its own exact-head CI run. Browser QA at 360 / 390 / 1,280 px and Agoda final-result UI verification remain outstanding.
- Community / official-source record: `docs/ai-workspace/RESEARCH-AIRPORT-HAEUNDAE-CONVERSION-2026-11-21.md`. It records Taiwan Dcard/PTT, Japan Yahoo!知恵袋/4travel, English Reddit, Korean local press, Busan City and Gimhae Airport verification, competitor structure notes and image rights.
- Airport facts rechecked 2026-11-21: Line 1 Jangsan airport departures end 16:50; Gijang branch runs to 21:40; Line 2 adult fare KRW 6,000; Route 307 large-suitcase pilot ended 2026-09-30. The 307 test ride is described as one dated local report, not a timetable.
- Existing airport cover remains the LERK / Wikimedia Commons departure-hall photo, CC BY-SA 4.0, with filename / author / license credit. EN Pinterest media now matches the article / OG image and includes the credit. No image asset was replaced or generated.
- Existing PR #472 remains Draft / open / unmerged; no change was made. No GA4 / GSC query, SNS post / schedule change, merge, production deployment, analytics or partner setting change occurred.

---

## 2026-11-20 09:40 KST — verified growth-pass checkpoint

- GitHub `main`: `a9c727517f5d3bf8937fb52e55a3f0e3884a2006` (merged PR #580, Haeundae image-rights cleanup).
- Render static service `busan-travel-guide` (`srv-dbjk4lo473hc73a3d7ag`) has auto-deploy disabled. Latest deployment `dep-dbvopb97lnhs73bm5m50` is `live` on the same SHA, finished 2026-11-19 23:56:41 UTC. Render API state only; custom-domain page, `/version.txt`, `/sitemap.xml` and `/robots.txt` were not verified by direct HTTP in this pass.
- Open PRs: #587 (ready for review), #586, #585 and #581 (Draft). Exact-head Technical SEO runs all passed: #587 `44646734880`, #586 `44645098132`, #585 `44644703668`, #581 `44638299545`. None merged in this pass.
- Review branch: `fix/gimhae-airport-photo-attribution-20261120`. It adds the exact Commons filename / author / license credit to ten airport-guide language variants and corrects the EN late-arrival Pinterest image. Research: `docs/ai-workspace/IMAGE-CREDIT-AND-COMMUNITY-RECHECK-2026-11-20.md`.
- Existing late-arrival transport facts were rechecked against Busan City / Gimhae Airport references; no duplicate page or unverified timetable edit was made. Tagless rollout details were already present in localized transit-card pages.
- GA4 / GSC were intentionally not queried. No Instagram / Threads post or schedule changed. No PR was merged and no production deploy was triggered.
- Browser checks at 360 / 390 / 1,280 px and custom-domain HTTP / social-preview checks remain unverified.


---

## 2026-11-19 21:31 KST — current production checkpoint

- Current GitHub main: `13c1182cb60065673a9ea1bd6ccd4f7fab2888b6`.
- Exact-main Technical SEO run [#44515255541](https://github.com/xkrrudfbs45-afk/busan-travel-guide/actions/runs/44515255541) passed: 258 sitemap URLs, 259 canonical HTML pages, 966 hreflang links, zero canonical pages missing from sitemap, zero social-meta gaps, and 32 verified cover entries. Strict image-credit audit: 52 images in use / 60 registered / 8 unused-entry warnings / 0 errors. Homepage food-card audit: 10 cards / 10 distinct image URLs.
- Production deploy [#44515311750](https://github.com/xkrrudfbs45-afk/busan-travel-guide/actions/runs/44515311750) succeeded. Its deployment log confirms `/version.txt` matched the main SHA, the EN/JA/zh-TW/home guide-directory caches were fresh, core smoke-test URLs returned HTTP 200, and all 258 sitemap URLs passed the deployment smoke test.
- Main now includes the November 19 G-STAR EN/JA/zh-TW update, KTX sold-out/cancellation guidance, seasonal winter-event image/metadata work, and the three-language Tagless pilot clarification (PRs #571–#574). No new content URL was justified in this checkpoint.
- Open PR #472 remains Draft / open / unmerged and is not mergeable against its old base. Keep it on hold until the planned post-change GSC review around 2026-11-28; do not merge or reset the title test early.
- Image follow-up #384 was updated with comment [#7009354711](https://github.com/xkrrudfbs45-afk/busan-travel-guide/issues/384#issuecomment-7009354711). Remaining gates are real browser crop review at 360/390/1280, external image response checks, and current Lighthouse/LCP/CLS measurement.
- No GA4/GSC query was run in this recurring growth pass. No SNS schedule/publication, affiliate destination, analytics configuration, production setting, or deployment was changed by this pass.

---

## 2026-11-18 — KTX foreign booking-window correction / PR #550

- Korail's official 2026-10-08 press release (nttNo=27403) explicitly states that from 2026-10-01 the advance booking window for foreign rail users expanded from one month to two months before departure. The Korail English homepage / FAQ still contains one-month wording, so this is documented as a live-source inconsistency; visitor guidance points to the date-specific live booking form and latest notices.
- Updated EN / JA / zh-TW KTX guide copy and the shared research note to state the two-month foreign-traveller rule and link the dated Korail announcement.
- PR #550 is Draft / open / unmerged / undeployed. Head: `a82301d44e01a1ac7e45818e57d895c0c2f54605`. GitHub reports mergeable=true; no CI run was visible at the checkpoint. Responsive visual QA at 360 / 390 / tablet / desktop remains outstanding.
- Original PR #549 was closed as superseded; no changes from it were merged or deployed. PR #550 is the sole review target for the KTX update.
- Production deployment was not attempted. Do not merge until exact-head Technical SEO CI and visual QA pass, then obtain owner approval.

---

## 2026-11-18 — final exact-head validation checkpoint

- PR #540 latest content/code head `6d328880b55b6dbd70f64210cb7996a55edcd4e5` passed exact-head Technical SEO run #1867. The subsequent handoff-only head `d6f5d8cc213163a1df8a50063839589c3c1d79c0` passed #1869, and production/PR portfolio documentation head `928b2c0858b35922705db385f134f81b27e7202d` passed #1870. All three included static build, localized first-trip checklist, deterministic map generation and dependency-free audit.
- #1867 audit: 7,252 local links / 0 broken; 253 sitemap URLs; 936 hreflang links; 254 canonical HTML pages / 0 sitemap omissions; 693 language-switch links / 0 findings; strict image-credit audit 51 images in use / 59 registered / 8 unused-entry warnings / 0 errors; 29 shared cover entries.
- Current production main is `0ef0ed7523700a0c80bcfe65b204688bddb3a1cf`, live on Render deploy `dep-dbuns6afngtc73dc3pag`. PR #535 merged and is included in that deployment.
- PR #540 is still Draft, open and unmerged. GitHub reports mergeable=true; its branch is 67 commits ahead / 3 behind main. The three newer main commits touch only Japanese and Traditional Chinese Haeundae food-page image metadata, but branch ancestry should still be reconciled before merge.
- Remaining release gates: native Simplified Chinese editorial review, responsive visual QA at 360 / 390 / tablet / desktop, and mainland-network reachability. No Baidu verification/submission or Xiaohongshu publishing was performed. No PR #540 merge or production deployment.

---

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
- Latest observed main SHA: `b1f829c3fe5eca58909ff2ec2ec4b1bea8c8dbb0` (merge commit for PR #536, 2026-11-18). Render deployment on this newer SHA has not been verified in this pass.
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

## Mainland China expansion — initiated 2026-11-18
- Owner direction: begin a mainland-China market pilot in Simplified Chinese, separate from Taiwan Traditional Chinese.
- Repository audit: no /zh-cn/ directory exists on the inspected main tree. Current localized roots are /ja/ and /zh-tw/, alongside English at /.
- The zh-TW homepage is explicitly Taiwan-facing and must not be copied mechanically or relabeled for mainland users.
- New market decision, backlog items and research brief are included in Draft PR #538: https://github.com/xkrrudfbs45-afk/busan-travel-guide/pull/538.
- Proposed initial scope: mainland access test, localized zh-CN homepage and 5–8 high-intent guides, Baidu platform readiness, Xiaohongshu draft calendar.
- Mainland-specific live network tests, Baidu account verification, sitemap submission and social account access have not been performed. Do not claim indexation or social reach.
- No hosting migration, ICP filing, DNS change, paid service activation, account creation or publication is authorized.
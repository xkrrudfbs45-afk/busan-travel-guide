# Image operations audit — 2026-11-19

- Audit date: 2026-11-19
- Baseline main SHA: `5e57f2c266a79a9ba72fe8ad38b7adf65ab6ccb0`
- Exact-head Technical SEO workflow: [#44315016608](https://github.com/xkrrudfbs45-afk/busan-travel-guide/actions/runs/44315016608)
- Scope: current built-site source warnings, image-rights registry, responsive/loading counters, and the 2026-11-19 to 2026-12-03 Instagram creative window
- Priority market: zh-TW, followed by ja and en
- This is a documentation-only proposal. No HTML, CSS, image asset, schedule, publish log, approval, LIVE setting, token, or production deployment was changed.

## 1. Current website social-image backlog

The exact-main audit emitted **89 page-level social-image warnings**:
- EN: 31 (27 English pages plus 4 root pages)
- JA: 26
- zh-TW: 32

Of the 89 warnings:
- **86** pages are missing `og:image` or `twitter:image` (at least one of the pair).
- **3** pages have an OG image but lack `og:image:alt`.

These are metadata warnings, **not 89 broken image files**. The audit did not prove that in-body photos are absent, nor that the referenced image URLs return 404.

### 1.1 Missing social image tags

#### English pages (31 including root pages)
- `about.html` — Missing og:image or twitter:image
- `disclosure.html` — Missing og:image or twitter:image
- `guides/beomeosa-food-guide/index.html` — Missing og:image or twitter:image
- `guides/beomil-dong-nakgopsae/index.html` — Missing og:image or twitter:image
- `guides/busan-autumn-foliage/index.html` — Missing og:image or twitter:image
- `guides/busan-dongnae-pajeon-history/index.html` — Missing og:image or twitter:image
- `guides/busan-dwaeji-gukbap-history/index.html` — Missing og:image or twitter:image
- `guides/busan-eomuk-history/index.html` — Missing og:image or twitter:image
- `guides/busan-fireworks-festival-fair-price-stays/index.html` — Missing og:image or twitter:image
- `guides/busan-food-stories/index.html` — Missing og:image or twitter:image
- `guides/busan-jaecheopguk-history/index.html` — Missing og:image or twitter:image
- `guides/busan-milmyeon-history/index.html` — Missing og:image or twitter:image
- `guides/busan-night-views-local-tips/index.html` — Missing og:image or twitter:image
- `guides/busan-souvenirs/index.html` — Missing og:image or twitter:image
- `guides/busan-suyuk-baekban-guide/index.html` — Missing og:image or twitter:image
- `guides/busan-taxi-vs-subway-motion-sickness/index.html` — Missing og:image or twitter:image
- `guides/catchtable-global-busan-guide/index.html` — Missing og:image or twitter:image
- `guides/day-trips-from-busan-gyeongju-ulsan-tongyeong/index.html` — Missing og:image or twitter:image
- `guides/geumjeongsanseong-makgeolli/index.html` — Missing og:image or twitter:image
- `guides/geumjeongsanseong-village-food/index.html` — Missing og:image or twitter:image
- `guides/gijang-kkeutjip-abalone-porridge/index.html` — Missing og:image or twitter:image
- `guides/gwangalli-parking-guide/index.html` — Missing og:image or twitter:image
- `guides/homigot-sunrise-festival-2027/index.html` — Missing og:image or twitter:image
- `guides/jeonpo-cafe-street/index.html` — Missing og:image or twitter:image
- `guides/ochoryang-historic-house/index.html` — Missing og:image or twitter:image
- `guides/seoul-to-busan-transport-comparison/index.html` — Missing og:image or twitter:image
- `guides/taejongdae-danubi-train-tips/index.html` — Missing og:image or twitter:image
- `guides/yeongdo-half-day-coastal-route/index.html` — Missing og:image or twitter:image
- `guides/yeongdo-one-day/index.html` — Missing og:image or twitter:image
- `offline.html` — Missing og:image or twitter:image
- `privacy.html` — Missing og:image or twitter:image

#### Japanese pages (25 missing tags; one additional alt issue below)
- `ja/about.html` — Missing og:image or twitter:image
- `ja/disclosure.html` — Missing og:image or twitter:image
- `ja/guides/beomeosa-food-guide/index.html` — Missing og:image or twitter:image
- `ja/guides/beomil-dong-nakgopsae/index.html` — Missing og:image or twitter:image
- `ja/guides/busan-coffee-guide/index.html` — Missing og:image or twitter:image
- `ja/guides/busan-dongnae-pajeon-history/index.html` — Missing og:image or twitter:image
- `ja/guides/busan-dwaeji-gukbap-history/index.html` — Missing og:image or twitter:image
- `ja/guides/busan-eomuk-history/index.html` — Missing og:image or twitter:image
- `ja/guides/busan-food-stories/index.html` — Missing og:image or twitter:image
- `ja/guides/busan-jaecheopguk-history/index.html` — Missing og:image or twitter:image
- `ja/guides/busan-milmyeon-history/index.html` — Missing og:image or twitter:image
- `ja/guides/busan-shopping-souvenirs/index.html` — Missing og:image or twitter:image
- `ja/guides/busan-suyuk-baekban-guide/index.html` — Missing og:image or twitter:image
- `ja/guides/catchtable-global-busan-guide/index.html` — Missing og:image or twitter:image
- `ja/guides/food-etiquette/index.html` — Missing og:image or twitter:image
- `ja/guides/geumjeongsanseong-makgeolli/index.html` — Missing og:image or twitter:image
- `ja/guides/geumjeongsanseong-village-food/index.html` — Missing og:image or twitter:image
- `ja/guides/gwangalli-parking-guide/index.html` — Missing og:image or twitter:image
- `ja/guides/ochoryang/index.html` — Missing og:image or twitter:image
- `ja/guides/taejongdae/index.html` — Missing og:image or twitter:image
- `ja/guides/travel-mistakes/index.html` — Missing og:image or twitter:image
- `ja/guides/where-to-stay-busan/index.html` — Missing og:image or twitter:image
- `ja/guides/where-to-stay-songjeong-gijang/index.html` — Missing og:image or twitter:image
- `ja/guides/yeongdo-half-day/index.html` — Missing og:image or twitter:image
- `ja/privacy.html` — Missing og:image or twitter:image

#### Traditional Chinese pages (30 missing tags; two additional alt issues below)
- `zh-tw/about.html` — Missing og:image or twitter:image
- `zh-tw/disclosure.html` — Missing og:image or twitter:image
- `zh-tw/guides/beomeosa-food-guide/index.html` — Missing og:image or twitter:image
- `zh-tw/guides/beomil-dong-nakgopsae/index.html` — Missing og:image or twitter:image
- `zh-tw/guides/bukangi-busan-north-port-shark/index.html` — Missing og:image or twitter:image
- `zh-tw/guides/busan-autumn-foliage/index.html` — Missing og:image or twitter:image
- `zh-tw/guides/busan-dongnae-pajeon-history/index.html` — Missing og:image or twitter:image
- `zh-tw/guides/busan-family-travel/index.html` — Missing og:image or twitter:image
- `zh-tw/guides/busan-food-stories/index.html` — Missing og:image or twitter:image
- `zh-tw/guides/busan-jaecheopguk-history/index.html` — Missing og:image or twitter:image
- `zh-tw/guides/busan-local-culture/index.html` — Missing og:image or twitter:image
- `zh-tw/guides/busan-local-traits-culture/index.html` — Missing og:image or twitter:image
- `zh-tw/guides/busan-shopping-souvenirs/index.html` — Missing og:image or twitter:image
- `zh-tw/guides/busan-souvenirs/index.html` — Missing og:image or twitter:image
- `zh-tw/guides/busan-street-dialect-guide/index.html` — Missing og:image or twitter:image
- `zh-tw/guides/busan-suyuk-baekban-guide/index.html` — Missing og:image or twitter:image
- `zh-tw/guides/catchtable-global-busan-guide/index.html` — Missing og:image or twitter:image
- `zh-tw/guides/food-etiquette/index.html` — Missing og:image or twitter:image
- `zh-tw/guides/geumjeongsanseong-makgeolli/index.html` — Missing og:image or twitter:image
- `zh-tw/guides/geumjeongsanseong-village-food/index.html` — Missing og:image or twitter:image
- `zh-tw/guides/gwangalli-parking-guide/index.html` — Missing og:image or twitter:image
- `zh-tw/guides/jeonpo-cafe-street/index.html` — Missing og:image or twitter:image
- `zh-tw/guides/ochoryang/index.html` — Missing og:image or twitter:image
- `zh-tw/guides/taejongdae/index.html` — Missing og:image or twitter:image
- `zh-tw/guides/travel-mistakes/index.html` — Missing og:image or twitter:image
- `zh-tw/guides/where-to-stay-busan/index.html` — Missing og:image or twitter:image
- `zh-tw/guides/where-to-stay-songjeong-gijang/index.html` — Missing og:image or twitter:image
- `zh-tw/guides/yeongdo-half-day/index.html` — Missing og:image or twitter:image
- `zh-tw/guides/yeongdo-one-day/index.html` — Missing og:image or twitter:image
- `zh-tw/privacy.html` — Missing og:image or twitter:image

#### Missing `og:image:alt` (3)
- `ja/guides/index.html`
- `zh-tw/guides/busan-newspaper-food-picks/index.html`
- `zh-tw/guides/index.html`

**Safe remediation rule:** add a social image only when the page already has a subject-matched, rights-cleared image suitable for a 1200×630 crop. If the page has no appropriate image or the license/crop is uncertain, leave the warning open and commission or source a verified asset. Do not use a generic skyline or unrelated destination image to silence the audit.

## 2. Image registry and reuse

Exact-main `image-credit-audit.mjs --strict` result:
- 51 image references in use
- 59 registry entries
- 8 warnings
- 0 errors

The eight warnings are unused registry entries, not active broken images:
- `wikimedia:Busan-gimhae-light-rail-transit-21-Kaya-university-station-platform-20180331-173938.jpg`
- `wikimedia:Oldder_woman_selling_vegetables_and_more_things.jpg`
- `unsplash:photo-1553062407-98eeb64c6a62`
- `unsplash:photo-1519692933481-e162a57d6721`
- `unsplash:photo-1436491865332-7a61a109cc05`
- `unsplash:photo-1598059763116-742d9b4b99a1`
- `wikimedia:Seomyeon_Street.jpg`
- `unsplash:undefined`

Do not delete or reuse these entries until each original source and intended use has been rechecked. The audit also reported 39 image URLs reused across pages; this is an inspection cue, not automatically a defect. The homepage food-card audit passed: 10 cards, 10 distinct image URLs.

## 3. Responsive images, loading priority, and measurement limits

The build enhancement log recorded:
- 52 first-screen images changed to eager loading
- 62 lazy images added
- 87 responsive-image updates
- 52 first-screen image priority updates

These are source/build counters, not proof of real-device LCP improvement.

Not verified in this run:
- HTTP response/download status for every external image URL
- The EN/JA/zh-TW Taejongdae guides place the same 480×854 Wikimedia train photo immediately after the article hero and mark it `loading="lazy"`. It is a first article image and an LCP candidate, but whether it enters the initial mobile viewport is unmeasured. Check at 360/390 px before deciding whether eager loading and `fetchpriority="high"` are appropriate; no loading-priority change is made here.
- The Wikimedia `Special:FilePath` URL did not return a verifiable image response in this crawler run; treat its HTTP/download status as unverified, not healthy or broken.
- visual crop and focal-point behavior at 360 / 390 / 1280 px
- image byte savings and current mobile Lighthouse LCP/CLS
- actual social-platform OG preview rendering

The production deploy smoke test checked site routes and the deployed commit, but it is not a full image-download or visual test. The latest main audit did not include a current Lighthouse result. Keep these items explicitly unverified until a browser/image-fetch pass is completed.

## 4. Instagram creative audit — 2026-11-19 to 2026-12-03

Current main's active Instagram schedule contains 27 of 45 expected market/day slots:
- 24 approved / verified posts for 11/19–11/26
- 3 draft / needs_check posts for 11/28
- 18 empty slots: 11/27, 11/29, 11/30, 12/01, 12/02, 12/03

The 27 entries have locale-matched guide and bio URLs with UTM parameters, five cards, and a final-card CTA. Caption exact duplicates: 0. This does not mean every card has current image QA.

Current image QA evidence from the SNS audit:
- 8 sets have current spec hash and 5-card metadata.
- 18 sets have legacy QA metadata and must be re-rendered before they can pass the current publisher gate.
- `ig-fresh15-1125-jp` has `qa.ok=false` because card 5 overflows horizontally.
- The strict publisher is fail-closed: stale/missing hash, wrong card count, missing files, or failed QA blocks publication.

### Visual locality corrections

| Local date | Market/theme | Severity | Evidence and proposed direction |
|---|---|---|---|
| 11/19 | Haeundae, EN/JA/zh-TW | Medium | Prior set contains unrelated hillside/cable-car/cherry-blossom cues. Use Haeundae Beach, Dongbaekseom and the actual Sky Capsule context; no Gamcheon/Songdo motifs. |
| 11/21 | Seomyeon, EN/JA/zh-TW | High | Coastal/bridge scenery conflicts with an inland shopping and Line 1/2 transfer district. Use urban shopping streets, underground shopping and station-transfer context. |
| 11/22 | Busan food, EN/JA/zh-TW | Medium | Spring blossoms/coastal skyline and map-like artwork risk implying a false location. Use the actual dish/market context; no fabricated map or shop branding. |
| 11/23 | Rainy-day plan, EN/JA/zh-TW | Medium | Beach/bridge scenery is repeated in an indoor-alternative topic. Use museum, aquarium, mall or indoor passage scenes. |
| 11/25 | Japanese food etiquette | High | Card 5 horizontal text overflow; shorten and re-render, then pass current hash/card-count QA. |
| 11/26 | Taejongdae, EN/JA/zh-TW | Critical | Current approved copy says to check the Danubi train, and art depicts the train. The operator notice cited in [SNS audit PR #554](https://github.com/xkrrudfbs45-afk/busan-travel-guide/pull/554) says the train is suspended for safety inspection and a free circular shuttle is operating instead. Replace the misleading train-dependent advice only after owner approval and a fresh operator notice check on 11/25 and the morning of 11/26. |
| 11/28 | Gwangbok-ro, EN/JA/zh-TW | High | Existing art set is coastal/bridge-oriented for an inland balcony music event. Use Gwangbok-ro storefronts, balconies and street-level jazz; keep draft until new art and QA pass. |

The 11/26 Taejongdae operational fact and 11/24 plug-voltage copy correction are detailed separately in PR #554. This PR records the image implications only and does not modify the approved content or schedule.

## 5. Priority remediation plan

1. **P0 — Taejongdae 11/26:** owner-approved copy correction and non-operating-train visual; recheck operator notice immediately before publication.
2. **P1 — OG/Twitter metadata:** resolve the three missing OG alt fields first; then fill the 86 tag gaps only where a matching, licensed source image exists.
3. **P1 — Instagram QA:** re-render the 18 legacy sets inside the publisher's preparation window; fix the 11/25 Japanese overflow; never bypass the fail-closed gate.
4. **P1 — locality art:** replace mismatched Seomyeon, rainy-day and Gwangbok-ro scenes; verify each frame, not only the prompt.
5. **P2 — delivery/performance:** fetch image URLs, record HTTP status and dimensions, verify responsive srcset/sizes and lazy/eager behavior, then run browser crops and Lighthouse at 360 / 390 / 1280.
6. **P2 — registry cleanup:** review the eight unused entries and 39 reused URLs; do not bulk-delete or replace assets based on counts alone.

## 6. Related work and change boundary

- Existing image-quality issue: [#384](https://github.com/xkrrudfbs45-afk/busan-travel-guide/issues/384).
- Current 15-day SNS content and fact-check audit: [#554](https://github.com/xkrrudfbs45-afk/busan-travel-guide/pull/554).
- Existing image quality standard: `docs/IMAGE_QUALITY_STANDARD.md`.

This PR adds only this audit document. It does not change website HTML, OG tags, image files, image credits, CSS, SNS captions, scheduled times, post statuses, approvals, state branches, external accounts, or production. No merge or deploy is included.

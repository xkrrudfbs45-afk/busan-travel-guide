# Go2Busan image remediation proposal — 2026-11-17

## Scope and safety

This is a documentation-only proposal based on the current `main` image/SNS audit and the `instagram-state` QA branch. It does not change image assets, active schedules, publish logs, credentials, site HTML, or production deployment. All SNS corrections below require normal owner approval before the active queue is changed.

## P1 — Instagram creative must match the named Busan location

The current 15-day review covers 33 Instagram market/day sets (EN, JA, zh-TW). The retained visual audit found the following mismatches:

| Local date | Post IDs (EN / JA / zh-TW) | Finding | Remediation |
|---|---|---|---|
| Nov 18 · Gwangalli | `ig-fresh15-1118-us`, `-jp`, `-tw` | Card 4 is an abstract light ribbon, not a recognizable drone formation; official show names are not localized consistently | Use a clearly recognizable drone formation over Gwangan Bridge and localized official program names |
| Nov 19 · Haeundae | `ig-fresh15-1119-us`, `-jp`, `-tw` | Gamcheon-like hillside, cable-car scenery, lighthouse and spring blossoms are mixed into a Haeundae set | Use Haeundae Beach, LCT, Dongbaekseom and the actual Sky Capsule context; remove unrelated hillside/cable-car scenes |
| Nov 20 · Nampo | `ig-fresh15-1120-us`, `-jp`, `-tw` | Gwangan Bridge/Marine City and unrelated train imagery in an inland Nampo set | Use Jagalchi, BIFF Square, Gwangbok-ro and Yongdusan; remove coastal skyline |
| Nov 21 · Seomyeon | `ig-fresh15-1121-us`, `-jp`, `-tw` | Beach and bridge scenery in an inland shopping/transfer district | Use Seomyeon shopping streets and Line 1/2 transfer context; no sea or coastal skyline |
| Nov 22 · Local food | `ig-fresh15-1122-us`, `-jp`, `-tw` | Cherry blossoms and repeated coastal skyline imply the wrong season/location | Use late-autumn street-food/restaurant context without a coastal backdrop |
| Nov 26 · Taejongdae | `ig-fresh15-1126-us`, `-jp`, `-tw` | Later cards show city skyline, bridge and generic bus-stop scenes rather than Taejongdae | Use Taejongdae cliffs, pine forest, Yeongdo Lighthouse and the open-sided Danubi train |
| Nov 28 · Gwangbok-ro (draft) | `ig-fresh15-1128-us`, `-jp`, `-tw` | Draft artwork shows Gwangan Bridge/Marine City rather than the Nampo shopping street and balcony-stage setting | Keep draft until Gwangbok-ro storefronts, balconies and street-level performance are represented |

Spring cherry-blossom imagery should be replaced with late-autumn/winter foliage or neutral seasonal scenery. AI-generated illustrations must remain clearly labeled as illustrations and must not imply a real named shop or documentary photograph.

## P1 — Instagram image QA readiness

The active 15-day queue has 33 sets:
- 8 sets have current `spec_hash` / `card_count` QA metadata and matching stored `.hash`.
- 24 sets have legacy QA without `spec_hash`; legacy `qa.ok=true` does not certify the current schedule.
- 1 set, `ig-fresh15-1125-jp`, has `qa.ok=false` because card 5 text overflows horizontally.

The current publisher is fail-closed and requires current QA metadata, a matching spec hash, matching card count, matching stored hash and all expected JPEGs. Keep legacy or failed sets blocked. Re-render each set in its 36-hour preparation window and verify the exact five cards before its slot. Do not edit the state branch or activate posts as part of this proposal.

## P2 — Site image licensing review

Asset: `Bukmun_of_Dongnae_eupseong_in_2018.jpg`

Affected current-main files:
- `/`
- `/guides/dongnae-hot-spring-half-day/`
- `/ja/guides/dongnae-hot-spring-half-day/`
- `/zh-tw/guides/dongnae-hot-spring-half-day/`

The image registry marks the asset `needs_review`. Keep existing Go2Busan website placements unchanged while the current web-use record is retained. Do not reuse it in newspaper or Facebook creative without confirming the required permission. If broader reuse is needed, replace all four placements with a subject-matched asset licensed for those channels and update the registry, visible credit, alt and OG metadata together.

## P2 — Delivery validation still incomplete

The latest retained static crawl covered 50 of 240 pages and found no missing image alt attributes in those 50 pages (138 image elements). It did not independently download every external image URL. The latest Lighthouse batch returned `INSUFFICIENT_CREDITS`; no numeric LCP/CLS/INP claim is available.

Before declaring image delivery fully verified:
1. Check HTTP response and content type for every unique live image URL, including OG images.
2. Review representative 360px, 390px, 768px and 1280px crops for focal-point mismatches.
3. Confirm first-viewport LCP candidates are eager/high-priority and below-fold images remain lazy-loaded.
4. Re-run Lighthouse when sufficient credits are available.

## Current audit baseline — 2026-11-17

- Main Technical SEO audit #44003848364 (main/live SHA `af35154405aecc6e520ce6a7d38877d829067f86`): 245 canonical HTML pages, 244 sitemap URLs, 892 hreflang links, 0 canonical pages missing from sitemap, 6,979 local links checked / 0 broken.
- Strict image-credit audit: 49 images in use, 57 registered, 9 warnings, 0 errors. The Dongnae-eupseong photo remains website-only; eight registered assets are unused.
- Homepage food cards: 10 cards, 10 distinct image URLs. Cover image enhancement entries: 24.
- Source-level crawl warnings: 87 pages omit explicit `og:image` / `twitter:image` declarations, 3 omit `og:image:alt`, and 16 have title/meta length warnings. The production build enhancer fills the social metadata and the final `social-meta check` reports 0 gaps; the remaining issue is subject-match quality of fallback images, not missing tags in the built output. Prioritize zh-TW pages for page-specific, licensed social images.
- `scripts/enhance-images.mjs` emits responsive 640 / 1000 / 1600 `srcset`, intrinsic dimensions, `fetchpriority="high"` and `decoding="async"` for the 24 registered cover entries. It does not transcode remote Wikimedia `Special:FilePath` assets to WebP / AVIF. Do not bulk-convert or self-host until the file's license permits the intended use and attribution is preserved; consider a small, measured local-WebP/AVIF batch for high-priority assets.
- Homepage hero uses responsive CSS background-image widths (1800 / 1400 / 1000) rather than an HTML `picture` / `srcset`. It remains a potential LCP optimization target, but no fresh Lighthouse result or real-browser crop review was available in this run.
- Busan Station EN / JA / zh-TW OG photo and localized alt correction remains resolved; do not reopen it.

## Verification still required

1. Download and inspect every unique live image URL, including OG images, for HTTP response, content type, dimensions and unexpected redirects.
2. Review representative 360px, 390px, 768px and 1280px crops for focal-point mismatches.
3. Confirm first-viewport LCP candidates are eager/high-priority and below-fold images remain lazy-loaded.
4. Re-run Lighthouse when sufficient credits are available.
5. For any WebP / AVIF conversion, retain the original license/attribution metadata and verify visual quality at the actual card crop.


This is a documentation-only baseline update. No image asset, page markup, social schedule or production file was changed.

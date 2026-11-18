# Image operations audit — 2026-11-18

**Scope:** read-only audit of the built-site image/SEO checks on main.  
**Audited commit:** \`7fb25dea937f6113f2ac06d56d52ff3c3cf60390\`  
**Evidence:** [Technical SEO audit run #44205826929](https://github.com/xkrrudfbs45-afk/busan-travel-guide/actions/runs/44205826929), job \`134471360051\` (2026-11-18 00:12 UTC).

## Findings

### P1 — 87 localized pages have incomplete social-image metadata

The page-level SEO audit reports **87 pages missing at least one of \`og:image\` or \`twitter:image\`**:
- English: 31
- Japanese: 26
- Traditional Chinese: 30

These are page-level gaps; the separate \`social-meta check: 0 gap(s)\` result does not cover the same page set and must not be treated as evidence that all page OG/Twitter metadata is complete.

#### English (31)

- \`about.html\`
- \`disclosure.html\`
- \`guides/beomeosa-food-guide/index.html\`
- \`guides/beomil-dong-nakgopsae/index.html\`
- \`guides/busan-autumn-foliage/index.html\`
- \`guides/busan-dongnae-pajeon-history/index.html\`
- \`guides/busan-dwaeji-gukbap-history/index.html\`
- \`guides/busan-eomuk-history/index.html\`
- \`guides/busan-fireworks-festival-fair-price-stays/index.html\`
- \`guides/busan-food-stories/index.html\`
- \`guides/busan-jaecheopguk-history/index.html\`
- \`guides/busan-milmyeon-history/index.html\`
- \`guides/busan-night-views-local-tips/index.html\`
- \`guides/busan-souvenirs/index.html\`
- \`guides/busan-suyuk-baekban-guide/index.html\`
- \`guides/busan-taxi-vs-subway-motion-sickness/index.html\`
- \`guides/catchtable-global-busan-guide/index.html\`
- \`guides/day-trips-from-busan-gyeongju-ulsan-tongyeong/index.html\`
- \`guides/geumjeongsanseong-makgeolli/index.html\`
- \`guides/geumjeongsanseong-village-food/index.html\`
- \`guides/gijang-kkeutjip-abalone-porridge/index.html\`
- \`guides/gwangalli-parking-guide/index.html\`
- \`guides/homigot-sunrise-festival-2027/index.html\`
- \`guides/jeonpo-cafe-street/index.html\`
- \`guides/ochoryang-historic-house/index.html\`
- \`guides/seoul-to-busan-transport-comparison/index.html\`
- \`guides/taejongdae-danubi-train-tips/index.html\`
- \`guides/yeongdo-half-day-coastal-route/index.html\`
- \`guides/yeongdo-one-day/index.html\`
- \`offline.html\`
- \`privacy.html\`

#### Japanese (26)

- \`ja/about.html\`
- \`ja/disclosure.html\`
- \`ja/guides/beomeosa-food-guide/index.html\`
- \`ja/guides/beomil-dong-nakgopsae/index.html\`
- \`ja/guides/busan-coffee-guide/index.html\`
- \`ja/guides/busan-dongnae-pajeon-history/index.html\`
- \`ja/guides/busan-dwaeji-gukbap-history/index.html\`
- \`ja/guides/busan-eomuk-history/index.html\`
- \`ja/guides/busan-food-stories/index.html\`
- \`ja/guides/busan-jaecheopguk-history/index.html\`
- \`ja/guides/busan-milmyeon-history/index.html\`
- \`ja/guides/busan-shopping-souvenirs/index.html\`
- \`ja/guides/busan-suyuk-baekban-guide/index.html\`
- \`ja/guides/catchtable-global-busan-guide/index.html\`
- \`ja/guides/food-etiquette/index.html\`
- \`ja/guides/geumjeongsanseong-makgeolli/index.html\`
- \`ja/guides/geumjeongsanseong-village-food/index.html\`
- \`ja/guides/gwangalli-parking-guide/index.html\`
- \`ja/guides/haeundae-food-guide/index.html\`
- \`ja/guides/ochoryang/index.html\`
- \`ja/guides/taejongdae/index.html\`
- \`ja/guides/travel-mistakes/index.html\`
- \`ja/guides/where-to-stay-busan/index.html\`
- \`ja/guides/where-to-stay-songjeong-gijang/index.html\`
- \`ja/guides/yeongdo-half-day/index.html\`
- \`ja/privacy.html\`

#### Traditional Chinese (30)

- \`zh-tw/about.html\`
- \`zh-tw/disclosure.html\`
- \`zh-tw/guides/beomeosa-food-guide/index.html\`
- \`zh-tw/guides/beomil-dong-nakgopsae/index.html\`
- \`zh-tw/guides/bukangi-busan-north-port-shark/index.html\`
- \`zh-tw/guides/busan-autumn-foliage/index.html\`
- \`zh-tw/guides/busan-dongnae-pajeon-history/index.html\`
- \`zh-tw/guides/busan-family-travel/index.html\`
- \`zh-tw/guides/busan-food-stories/index.html\`
- \`zh-tw/guides/busan-jaecheopguk-history/index.html\`
- \`zh-tw/guides/busan-local-culture/index.html\`
- \`zh-tw/guides/busan-local-traits-culture/index.html\`
- \`zh-tw/guides/busan-shopping-souvenirs/index.html\`
- \`zh-tw/guides/busan-souvenirs/index.html\`
- \`zh-tw/guides/busan-street-dialect-guide/index.html\`
- \`zh-tw/guides/busan-suyuk-baekban-guide/index.html\`
- \`zh-tw/guides/catchtable-global-busan-guide/index.html\`
- \`zh-tw/guides/food-etiquette/index.html\`
- \`zh-tw/guides/geumjeongsanseong-makgeolli/index.html\`
- \`zh-tw/guides/geumjeongsanseong-village-food/index.html\`
- \`zh-tw/guides/gwangalli-parking-guide/index.html\`
- \`zh-tw/guides/jeonpo-cafe-street/index.html\`
- \`zh-tw/guides/ochoryang/index.html\`
- \`zh-tw/guides/taejongdae/index.html\`
- \`zh-tw/guides/travel-mistakes/index.html\`
- \`zh-tw/guides/where-to-stay-busan/index.html\`
- \`zh-tw/guides/where-to-stay-songjeong-gijang/index.html\`
- \`zh-tw/guides/yeongdo-half-day/index.html\`
- \`zh-tw/guides/yeongdo-one-day/index.html\`
- \`zh-tw/privacy.html\`

### P2 — Three pages are missing \`og:image:alt\`

- \`ja/guides/index.html\`
- \`zh-tw/guides/busan-newspaper-food-picks/index.html\`
- \`zh-tw/guides/index.html\`

### P2 — One active image-license review warning

The image-credit audit reports 49 images in use, 57 registered, 9 warnings and 0 errors. One active \`needs_review\` warning is:

\`Bukmun_of_Dongnae_eupseong_in_2018.jpg\`

Used in:
- \`guides/dongnae-hot-spring-half-day/index.html\`
- \`ja/guides/dongnae-hot-spring-half-day/index.html\`
- \`zh-tw/guides/dongnae-hot-spring-half-day/index.html\`
- \`index.html\`

The registry says the Commons file page permits commercial use with attribution but warns that its license is incompatible with South Korean newspaper and Facebook licensing terms. Keep current website use within the registry note; do not reuse in newspaper or Facebook material without permission.

The registry also retains \`needs_review\` entries for the Kaya University light-rail photo (wrong subject for airport guides) and the 2026 Christmas Village poster (reuse terms not stated). A source search found these filenames only in the registry, not in current page HTML; keep them blocked from new use until verified.

## Positive checks

- In-page \`<img>\` elements missing \`alt\`: **0**.
- \`enhance-images check ok: 24 cover entries\`; cover entries require verified source, localized alt/caption, dimensions and responsive widths.
- Article cover generation sets \`fetchpriority="high"\` and does not lazy-load first-screen covers.
- Homepage hero image has desktop and mobile image preloads with \`fetchpriority="high"\`.
- Homepage food-card audit: **10 cards, 10 distinct image URLs**.
- Current Busan Station local-walk EN / JA / zh-TW OG images use the Busan Station sign photo with localized \`og:image:alt\`; the earlier station-image mismatch is not present in these three current page heads.
- The audit reports 39 reused image URLs across pages. This is a review signal, not a blanket defect: shared logos and localized versions of the same guide can legitimately reuse an image.

## Verification limits

- The current SEO/image audit checks markup, metadata, source registry and CSS reuse. It does **not** download every remote image URL or prove that all external image responses are HTTP 200.
- The deploy smoke test checks core page URLs, sitemap, robots and site assets, not every external image.
- No Lighthouse workflow run was found in the latest 100 Actions runs. Actual LCP/CLS, mobile crop and visual subject match therefore remain unmeasured in this run.
- The homepage hero preload and the 24 article-cover priority rules are code-level checks, not a measured Core Web Vitals result.

## Safe remediation proposal

1. Add a localized OG/Twitter image pair to the 87 listed pages, prioritizing guide pages and leaving legal/offline pages lower priority.
2. Add localized \`og:image:alt\` to the three pages listed above.
3. Before assigning an image, confirm location/food subject, image URL response, license and credit. Do not use the Kaya University image for airport content or the Christmas poster without reuse permission.
4. Add a CI check that fails on missing page-level OG/Twitter metadata, and a separate bounded image-URL HEAD/GET check with timeouts and a small allowlist for external hosts.
5. Add a scheduled Lighthouse/mobile screenshot audit for representative EN / JA / zh-TW pages. Record LCP and crop evidence rather than treating source markup as visual proof.

**This PR is report-only.** It changes no production HTML, image, metadata, publishing queue, token or secret. No merge or deployment is requested.

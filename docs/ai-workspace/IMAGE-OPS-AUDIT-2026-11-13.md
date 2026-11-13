# Image operations audit — 2026-11-13

**Scope:** current production source at `main` commit `2353c70827c5f365e57dbb5895d03e7d0ba59709`; latest completed Technical SEO audit run #1182 (2026-11-12 23:15 UTC), plus merged image batches #383 and #385. This is a report-only draft; no live HTML, image asset, schedule, token, secret, deployment, or external post is changed.

## Executive findings

| Check | Result | Severity |
|---|---:|---|
| Built HTML pages | 177 checked, 0 build-quality errors | Pass |
| Missing `img alt` attributes | 0 | Pass |
| Pages missing `og:image` or `twitter:image` | 72 | P1 |
| Pages missing `og:image:alt` | 3 | P2 |
| Pages using SVG for OG/Twitter preview | 3 (6 metadata warnings) | P1 |
| English titles over 65 characters | 5 | P2 |
| Cross-page image URL reuse | 12 URLs | P3 / review context |
| Cover photo registry | 20 page entries, 10 unique assets; all 10 verified; all entries have alt + caption | Pass |
| Image-credit audit | 34 images in use, 41 registered, 8 warnings, 0 errors | Review |
| Sitemap / hreflang | 175 URL entries, 590 hreflang links, 0 missing canonical pages | Pass |

The CI workflow is green because strict mode blocks **errors**, not these SEO warnings. The current warning set is therefore not a deployment failure, but it leaves social-preview coverage incomplete.

## P1 — Missing social preview metadata (72 URLs)

The SEO audit reports no `og:image` or `twitter:image` on the following pages. Add a topic-matched, crawlable PNG/JPEG/WebP image and corresponding alt text; keep OG and Twitter images aligned. Prioritize high-traffic guides and the Taiwan/Japan entry pages first.

### English / default (25)
- [about.html](https://go2busan.com/about.html)
- [disclosure.html](https://go2busan.com/disclosure.html)
- [guides/beomeosa-food-guide/index.html](https://go2busan.com/guides/beomeosa-food-guide/index.html)
- [guides/beomil-dong-nakgopsae/index.html](https://go2busan.com/guides/beomil-dong-nakgopsae/index.html)
- [guides/busan-city-tour-bus-guide/index.html](https://go2busan.com/guides/busan-city-tour-bus-guide/index.html)
- [guides/busan-dongnae-pajeon-history/index.html](https://go2busan.com/guides/busan-dongnae-pajeon-history/index.html)
- [guides/busan-dwaeji-gukbap-history/index.html](https://go2busan.com/guides/busan-dwaeji-gukbap-history/index.html)
- [guides/busan-eomuk-history/index.html](https://go2busan.com/guides/busan-eomuk-history/index.html)
- [guides/busan-fireworks-festival-fair-price-stays/index.html](https://go2busan.com/guides/busan-fireworks-festival-fair-price-stays/index.html)
- [guides/busan-food-stories/index.html](https://go2busan.com/guides/busan-food-stories/index.html)
- [guides/busan-gupo-guksu-history/index.html](https://go2busan.com/guides/busan-gupo-guksu-history/index.html)
- [guides/busan-jaecheopguk-history/index.html](https://go2busan.com/guides/busan-jaecheopguk-history/index.html)
- [guides/busan-milmyeon-history/index.html](https://go2busan.com/guides/busan-milmyeon-history/index.html)
- [guides/busan-night-views-local-tips/index.html](https://go2busan.com/guides/busan-night-views-local-tips/index.html)
- [guides/busan-taxi-vs-subway-motion-sickness/index.html](https://go2busan.com/guides/busan-taxi-vs-subway-motion-sickness/index.html)
- [guides/geumjeongsanseong-makgeolli/index.html](https://go2busan.com/guides/geumjeongsanseong-makgeolli/index.html)
- [guides/geumjeongsanseong-village-food/index.html](https://go2busan.com/guides/geumjeongsanseong-village-food/index.html)
- [guides/gijang-kkeutjip-abalone-porridge/index.html](https://go2busan.com/guides/gijang-kkeutjip-abalone-porridge/index.html)
- [guides/gwangalli-drone-show-viewing-tips/index.html](https://go2busan.com/guides/gwangalli-drone-show-viewing-tips/index.html)
- [guides/gwangalli-parking-guide/index.html](https://go2busan.com/guides/gwangalli-parking-guide/index.html)
- [guides/haedong-yonggungsa-visit-tips/index.html](https://go2busan.com/guides/haedong-yonggungsa-visit-tips/index.html)
- [guides/ochoryang-historic-house/index.html](https://go2busan.com/guides/ochoryang-historic-house/index.html)
- [guides/taejongdae-danubi-train-tips/index.html](https://go2busan.com/guides/taejongdae-danubi-train-tips/index.html)
- [offline.html](https://go2busan.com/offline.html)
- [privacy.html](https://go2busan.com/privacy.html)

### Japanese (23)
- [ja/about.html](https://go2busan.com/ja/about.html)
- [ja/disclosure.html](https://go2busan.com/ja/disclosure.html)
- [ja/guides/beomeosa-food-guide/index.html](https://go2busan.com/ja/guides/beomeosa-food-guide/index.html)
- [ja/guides/beomil-dong-nakgopsae/index.html](https://go2busan.com/ja/guides/beomil-dong-nakgopsae/index.html)
- [ja/guides/busan-city-tour-bus-guide/index.html](https://go2busan.com/ja/guides/busan-city-tour-bus-guide/index.html)
- [ja/guides/busan-dongnae-pajeon-history/index.html](https://go2busan.com/ja/guides/busan-dongnae-pajeon-history/index.html)
- [ja/guides/busan-dwaeji-gukbap-history/index.html](https://go2busan.com/ja/guides/busan-dwaeji-gukbap-history/index.html)
- [ja/guides/busan-eomuk-history/index.html](https://go2busan.com/ja/guides/busan-eomuk-history/index.html)
- [ja/guides/busan-food-stories/index.html](https://go2busan.com/ja/guides/busan-food-stories/index.html)
- [ja/guides/busan-gupo-guksu-history/index.html](https://go2busan.com/ja/guides/busan-gupo-guksu-history/index.html)
- [ja/guides/busan-jaecheopguk-history/index.html](https://go2busan.com/ja/guides/busan-jaecheopguk-history/index.html)
- [ja/guides/busan-milmyeon-history/index.html](https://go2busan.com/ja/guides/busan-milmyeon-history/index.html)
- [ja/guides/food-etiquette/index.html](https://go2busan.com/ja/guides/food-etiquette/index.html)
- [ja/guides/geumjeongsanseong-makgeolli/index.html](https://go2busan.com/ja/guides/geumjeongsanseong-makgeolli/index.html)
- [ja/guides/geumjeongsanseong-village-food/index.html](https://go2busan.com/ja/guides/geumjeongsanseong-village-food/index.html)
- [ja/guides/gwangalli-parking-guide/index.html](https://go2busan.com/ja/guides/gwangalli-parking-guide/index.html)
- [ja/guides/haedong-yonggungsa/index.html](https://go2busan.com/ja/guides/haedong-yonggungsa/index.html)
- [ja/guides/ochoryang/index.html](https://go2busan.com/ja/guides/ochoryang/index.html)
- [ja/guides/taejongdae/index.html](https://go2busan.com/ja/guides/taejongdae/index.html)
- [ja/guides/travel-mistakes/index.html](https://go2busan.com/ja/guides/travel-mistakes/index.html)
- [ja/guides/where-to-stay-busan/index.html](https://go2busan.com/ja/guides/where-to-stay-busan/index.html)
- [ja/guides/where-to-stay-songjeong-gijang/index.html](https://go2busan.com/ja/guides/where-to-stay-songjeong-gijang/index.html)
- [ja/privacy.html](https://go2busan.com/ja/privacy.html)

### Traditional Chinese / Taiwan (24)
- [zh-tw/about.html](https://go2busan.com/zh-tw/about.html)
- [zh-tw/disclosure.html](https://go2busan.com/zh-tw/disclosure.html)
- [zh-tw/guides/beomeosa-food-guide/index.html](https://go2busan.com/zh-tw/guides/beomeosa-food-guide/index.html)
- [zh-tw/guides/beomil-dong-nakgopsae/index.html](https://go2busan.com/zh-tw/guides/beomil-dong-nakgopsae/index.html)
- [zh-tw/guides/busan-city-tour-bus-guide/index.html](https://go2busan.com/zh-tw/guides/busan-city-tour-bus-guide/index.html)
- [zh-tw/guides/busan-dongnae-pajeon-history/index.html](https://go2busan.com/zh-tw/guides/busan-dongnae-pajeon-history/index.html)
- [zh-tw/guides/busan-dwaeji-gukbap-history/index.html](https://go2busan.com/zh-tw/guides/busan-dwaeji-gukbap-history/index.html)
- [zh-tw/guides/busan-eomuk-history/index.html](https://go2busan.com/zh-tw/guides/busan-eomuk-history/index.html)
- [zh-tw/guides/busan-food-stories/index.html](https://go2busan.com/zh-tw/guides/busan-food-stories/index.html)
- [zh-tw/guides/busan-gupo-guksu-history/index.html](https://go2busan.com/zh-tw/guides/busan-gupo-guksu-history/index.html)
- [zh-tw/guides/busan-jaecheopguk-history/index.html](https://go2busan.com/zh-tw/guides/busan-jaecheopguk-history/index.html)
- [zh-tw/guides/busan-milmyeon-history/index.html](https://go2busan.com/zh-tw/guides/busan-milmyeon-history/index.html)
- [zh-tw/guides/food-etiquette/index.html](https://go2busan.com/zh-tw/guides/food-etiquette/index.html)
- [zh-tw/guides/geumjeongsanseong-makgeolli/index.html](https://go2busan.com/zh-tw/guides/geumjeongsanseong-makgeolli/index.html)
- [zh-tw/guides/geumjeongsanseong-village-food/index.html](https://go2busan.com/zh-tw/guides/geumjeongsanseong-village-food/index.html)
- [zh-tw/guides/gwangalli-parking-guide/index.html](https://go2busan.com/zh-tw/guides/gwangalli-parking-guide/index.html)
- [zh-tw/guides/haedong-yonggungsa/index.html](https://go2busan.com/zh-tw/guides/haedong-yonggungsa/index.html)
- [zh-tw/guides/ochoryang/index.html](https://go2busan.com/zh-tw/guides/ochoryang/index.html)
- [zh-tw/guides/taejongdae/index.html](https://go2busan.com/zh-tw/guides/taejongdae/index.html)
- [zh-tw/guides/taiwan-travelers-busan/index.html](https://go2busan.com/zh-tw/guides/taiwan-travelers-busan/index.html)
- [zh-tw/guides/travel-mistakes/index.html](https://go2busan.com/zh-tw/guides/travel-mistakes/index.html)
- [zh-tw/guides/where-to-stay-busan/index.html](https://go2busan.com/zh-tw/guides/where-to-stay-busan/index.html)
- [zh-tw/guides/where-to-stay-songjeong-gijang/index.html](https://go2busan.com/zh-tw/guides/where-to-stay-songjeong-gijang/index.html)
- [zh-tw/privacy.html](https://go2busan.com/zh-tw/privacy.html)

## P1 — SVG social previews (3 pages)

These three language pages use `/assets/busan-local-culture-illustration.svg` for both OG and Twitter images. Social platforms may not render SVG previews reliably; the illustration is also not a literal Busan Station photograph.

- [guides/busan-station-local-walk/index.html](https://go2busan.com/guides/busan-station-local-walk/index.html) — replace with a licensed Busan Station image or a PNG/WebP export of a topic-matched visual; add localized `og:image:alt`.
- [ja/guides/busan-station-local-walk/index.html](https://go2busan.com/ja/guides/busan-station-local-walk/index.html) — replace with a licensed Busan Station image or a PNG/WebP export of a topic-matched visual; add localized `og:image:alt`.
- [zh-tw/guides/busan-station-local-walk/index.html](https://go2busan.com/zh-tw/guides/busan-station-local-walk/index.html) — replace with a licensed Busan Station image or a PNG/WebP export of a topic-matched visual; add localized `og:image:alt`.

## P2 — Missing OG image alt (3 URLs)

- [ja/guides/index.html](https://go2busan.com/ja/guides/index.html)
- [zh-tw/guides/busan-newspaper-food-picks/index.html](https://go2busan.com/zh-tw/guides/busan-newspaper-food-picks/index.html)
- [zh-tw/guides/index.html](https://go2busan.com/zh-tw/guides/index.html)

## P2 — English title truncation candidates

| URL | Current title length |
|---|---:|
| [guides/busan-city-tour-bus-guide/index.html](https://go2busan.com/guides/busan-city-tour-bus-guide/index.html) | 70 |
| [guides/busan-luggage-storage/index.html](https://go2busan.com/guides/busan-luggage-storage/index.html) | 66 |
| [guides/busan-station-local-walk/index.html](https://go2busan.com/guides/busan-station-local-walk/index.html) | 69 |
| [guides/gwangalli-parking-guide/index.html](https://go2busan.com/guides/gwangalli-parking-guide/index.html) | 71 |
| [guides/nampo-neighborhood-guide/index.html](https://go2busan.com/guides/nampo-neighborhood-guide/index.html) | 68 |

Shorten these titles to approximately 50–60 characters while retaining the main search intent. The current audit threshold is 65 characters.

## Image coverage, rights and performance

- Merged batches #383 and #385 add 20 build-time cover entries across 20 pages, using 10 unique Wikimedia files. All 10 files are `verified` in `assets/data/image-credits.json`; all 20 entries have localized alt text and captions.
- Cover rendering uses responsive 640/1000/1600 `srcset`, intrinsic dimensions, `fetchpriority="high"`, and no lazy loading for first-screen article covers. The built-page audit reports 0 first-screen-lazy errors.
- The cover PRs document viewport checks for the selected batches. The Haeundae crop at 358×230 still emphasizes sea with one tower; acceptable in the prior review, but `object-position` could improve the subject framing.
- The SEO audit reports 12 reused image URLs. The most notable reuse includes the Gimhae airport departure-hall photo on 6 pages and the Haeundae beach photo on 4 pages. Reuse is not automatically wrong; confirm each page's subject match before replacing.
- `Bukmun_of_Dongnae_eupseong_in_2018.jpg` is marked `needs_review` and appears on the EN/JA/zh-TW Dongnae half-day pages plus the homepage (4 files). Its registry note says the attribution license is not compatible with South Korean newspaper and Facebook licensing terms. Keep its use limited to the current Go2Busan website pages; do not reuse it in newspaper or Facebook material without photographer clearance.
- `image-credit-audit --strict` reports 0 errors, but the `needs_review` warning remains non-blocking.

## Not verified in this run

- External image URL HTTP status / redirects (the repository audits inspect markup and registry; they do not fetch every external image URL).
- Actual image byte sizes, over-size payloads, and real-device LCP / Core Web Vitals.
- Visual crop of every image across all 177 pages. Only the merged cover batches have documented viewport checks.

## Recommended safe sequence

1. Fix the three Busan Station SVG share previews first; use a licensed, subject-matched raster image and localized OG alt.
2. Add missing OG/Twitter metadata to the 72 listed URLs, starting with high-traffic Taiwan and Japanese guides.
3. Add the three missing OG alt values and shorten the five English titles.
4. Keep the Dongnae north-gate image website-only until reuse rights are cleared.
5. Extend CI with a bounded HTTP HEAD/GET check for external image URLs, byte-size thresholds, and an explicit assertion that first-screen covers have `fetchpriority="high"` and are not lazy-loaded.
6. Add a real-browser viewport/crop and LCP check for a representative EN/JA/zh-TW sample before declaring image operations fully verified.

**No production changes are included in this PR.**

## P1 — Instagram carousel QA failure (approved post)

A separate image QA check on the `instagram-state` branch found one approved Japanese carousel that still fails layout QA:

- Post: `ig-fresh15-1125-jp`
- Account / locale: Japan / `ja`
- Scheduled: **2026-11-25 12:00 JST** (2026-11-25 03:00 UTC)
- QA file: `cards/ig-fresh15-1125-jp/qa.json`
- Result: `ok: false`
- Finding: `ig-fresh15-1125-jp card 5: .body text overflows horizontally`
- The post remains `approved` and `verification.status=verified` in the active Instagram schedule.

The current renderer writes the failed `qa.json` but exits with code 0 while keeping the preview. The publisher does not read or require `qa.json.ok === true`; the workflow proceeds from rendering to publishing. Therefore a layout-failed card set is not programmatically blocked from external publication.

The first-day cards for 2026-11-13 (JP/TW/US) and the checked 2026-11-14 JP/TW sets currently report `ok: true`.

**Safe remediation:** shorten the Japanese card-5 body or adjust the text container, rerender the set, and require a successful `qa.json` result in the publish preflight. If QA is false or missing, skip publication and record a blocked state. No copy, renderer, schedule, or publisher change is included in this report-only PR.

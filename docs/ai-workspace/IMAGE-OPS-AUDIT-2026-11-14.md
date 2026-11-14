# Image operations audit — 2026-11-14

**Scope:** repository main merge commit `070a6634b75c55bff807677286fc8c775bde24cd` (PRs #409, #408 and #407 merged at 2026-11-14 00:10–00:12 UTC). The newest available full technical-SEO job is run #1309 on PR #408 head `c1341477dcf7432bc0faf276d9d1e8ea121a681c`, completed 2026-11-14 00:11 UTC, immediately before the merge. This is a pre-merge build audit, not a fresh crawl of the final deployed main or a real-device screenshot.

## Current build checks

| Check | Result | Interpretation |
|---|---:|---|
| HTML pages scanned | 179 | Build output in the PR #408 audit |
| Sitemap entries / hreflang links | 178 / 596 | 0 canonical pages missing from sitemap |
| Post-build social metadata | 0 gaps | `enhance-social-meta.mjs --check` passed |
| Cover registry | 20 entries | `enhance-images.mjs --check` passed |
| Homepage food cards | 10 distinct image URLs | Topic-card image audit passed |
| Image credits | 36 images in use / 43 registered | 8 warnings, 0 errors |

The source-level SEO audit still emits missing OG/Twitter metadata warnings on source HTML (including some pages with missing OG alt). These are not equivalent to deployed-output gaps: the post-build social metadata check reports **0 gaps** after `enhance-social-meta.mjs` runs. Do not reopen the old 72-page OG gap as a production defect without checking the built output.

## P2 — Image licence restriction: Dongnae Eupseong gate photograph

**Asset:** `Bukmun_of_Dongnae_eupseong_in_2018.jpg`

**Affected pages / languages:**
- EN homepage: `/`
- EN guide: `/guides/dongnae-hot-spring-half-day/`
- JA guide: `/ja/guides/dongnae-hot-spring-half-day/`
- zh-TW guide: `/zh-tw/guides/dongnae-hot-spring-half-day/`

**Evidence:** the latest image-credit audit reports this image in four files and marks it `needs_review`. The registry note says the Commons file permits commercial use with attribution but its licence is incompatible with South Korean newspaper and Facebook licensing terms. Current use is limited to Go2Busan website pages; it must not be reused in newspaper or Facebook content without contacting the photographer.

**Safe proposal:** keep the existing website use unchanged for now; block reuse in newspaper/Facebook/social assets. For broader reuse, replace the image in all four affected pages with an independently verified, topic-matched image whose licence permits the intended channels, then update the credit registry, alt text, visible credit and OG image together. Do not replace it with an AI image presented as a documentary photograph.

## New images checked in PR #408

- **Huinnyeoul Culture Village:** Choi2451, CC0 1.0. The Commons file page identifies the subject as Huinnyeoul Culture Village in Busan and confirms CC0. No attribution is required.
- **Gwangalli at night:** Carey Ciuro, CC BY 2.0. The Commons file page identifies the image as Gwangalli Beach at night and requires attribution. The repository registry records a visible credit on the EN, JA and zh-TW homepages.

These two source pages were checked:
- https://commons.wikimedia.org/wiki/File:Huinnyeoul_culture_village,_Busan_on_October_25th,_2019.jpg
- https://commons.wikimedia.org/wiki/File:Busan_Gwangalli_Night.jpg

The Commons file pages and previews were accessible. The exact `Special:FilePath` URLs used by the site and the live Go2Busan pages could not be fetched in this run, so their current HTTP response and cache behavior are **not verified**.

## Loading, alt and visual checks

- The build enhancer sets the first content image to eager/high-priority (not lazy) and applies async decoding plus lazy loading to later content images when no loading attribute is already set.
- The cover-image check validates the 20 registered cover entries. The post-build social metadata check reports no OG/Twitter metadata gaps.
- The latest automated log reports expected image reuse on several multilingual pages and 8 credit-registry warnings, but 0 image-credit errors. Logo reuse and the same locale-specific homepage image across translated homepages are not automatically defects.
- No live-device crop inspection or fresh 360/390 px screenshot was available in this run. Do not describe mobile crops or live LCP as verified. The exact external image URL responses and real-world crop focal points remain follow-up checks.

## Stale image audit

PR #392 was created against main SHA `2353c70827c5f365e57dbb5895d03e7d0ba59709` and remains a Draft. Its headline finding of 72 missing OG/Twitter image pages predates PR #396, which added the post-build metadata completion; the latest available audit now reports 0 built-output social metadata gaps. PR #392 should be refreshed against current main or superseded after review, not merged unchanged.

## Safe next actions

1. Keep the Dongnae Eupseong image site-only; add a clear reuse restriction to the asset review checklist.
2. Source a replacement only if newspaper/Facebook reuse or a broader cross-channel campaign is required.
3. Re-run the built-output image URL check and capture 360/390 px screenshots after the latest editorial redesign is deployed.
4. Verify the actual production version before treating the post-merge #407–#409 changes as live.

No site files, image assets, schedules, external accounts, tokens, secrets or production deployments were changed by this audit.

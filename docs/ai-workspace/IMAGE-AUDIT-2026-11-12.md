# Image audit — 2026-11-12 (Claude, applies docs/IMAGE_QUALITY_STANDARD.md)

Scope: built site at main `a77d781` (175 indexable pages). zh-TW first, then en and ja.

## Findings by language

| | zh-TW | en | ja |
|---|---|---|---|
| Guides | 49 | 67 | 47 |
| Guides with **no photo in the page body** | 40 | 33 | 39 |
| Body images are only SVG illustrations | 0 | 6 | 0 |
| Share image = generic Busan skyline fallback | 18 | 23 | 18 |
| Cover photo loaded lazily (LCP delay) | 0 | 5 | 0 |

Most re-used photos: Gimhae departure hall (6 pages), Haeundae District and Beach (5), Bukmun of Dongnae-eupseong (4, `needs_review`), Gwangan Bridge (4).

## Place/photo mismatches

| Page | Problem | Action |
|---|---|---|
| Seomyeon hub (en/ja/zh-TW) | Share image is **Busanhang Bridge from Yeongdo** — not Seomyeon | Fixed in this PR: `Seomyeon_Street.jpg` (Minseong Kim, CC BY-SA 4.0, Commons API checked 2026-11-12) as cover + og/twitter image |
| busan-station-local-walk (en/ja/zh-TW) | SVG share image (fixed in #374 with skyline fallback) | Still needs a licensed Busan Station photo — candidate for ChatGPT/owner |
| first-trip, taiwan-travelers-busan (zh-TW/ja) | Share image `Busan_Yeongdo-gu.jpg` is generic for a first-trip overview | Not changed (no better verified photo); review later |
| Haeundae cover on mobile | 358×230 crop shows mostly sea and one tower | Acceptable; consider `object-position` tuning |

## Batch 1 (this PR): core zh-TW/ja landing pages without a body photo

Cover photos (all `verified` in `assets/data/image-credits.json`; the same photo each page already uses as its share image, except Seomyeon):

| Page (zh-TW + ja) | Photo | Fit |
|---|---|---|
| where-to-stay-busan | Haeundae District and Beach | One of the compared areas; caption says so |
| airport-to-haeundae | Gimhae airport international departure hall | Exact |
| three-days | Gamcheon Culture Village | On the itinerary |
| transit-card | Busan Metro Line 1 Dadaepo Beach station platform | Busan subway |
| jagalchi-market | Inside Jagalchi Fish Market | Exact |
| local-food-by-neighborhood | Busan milmyeon | Busan dish covered by the guide |
| seomyeon-neighborhood-guide (+ en) | Seomyeon Street | Exact (replaces mismatched share image) |

Each cover: `srcset` 640/1000/1600, `sizes`, intrinsic `width`/`height` from Commons, `fetchpriority="high"`, not lazy, localized `alt`, caption with author + license link. Mobile crop checked at 358×230 and desktop 1120×230+ for all 7 photos.

Also: every existing `figure.article-cover` image is made non-lazy with `fetchpriority="high"` (5 EN pages were lazy-loading their first-screen photo).

## Not measurable here
Image byte size and LCP on real devices: Wikimedia and the live site are blocked from the build sandbox and PageSpeed quota was exhausted; covers are served by Wikimedia thumbnails at the requested width.

## Next candidates (not changed)
1. ~~zh-TW/ja `first-trip`, `taiwan-travelers-busan`, `things-to-do-in-busan`: need a representative verified photo.~~ Batch 2 (2026-11-12): covers added from verified registry photos. first-trip = Suyeong Bay skyline (S h y numis, CC BY 4.0), zh-TW taiwan-travelers = Nampo-dong main street (Ken Eckert, CC BY-SA 4.0), things-to-do = Gwangalli Beach + Gwangan Bridge (Masterhatch, CC BY-SA 4.0). Dimensions checked via the Commons API. og:image left unchanged (first-trip already uses verified Busan_Yeongdo-gu.jpg; things-to-do keeps its own illustration OG).
2. EN pages with only SVG illustrations (dialect, local culture, Bukangi ×2, things-to-do): decide illustration vs photo per standard §2.
3. `Bukmun_of_Dongnae_eupseong_in_2018.jpg` is `needs_review` and used on 4 pages.
4. Reduce re-use of the Gimhae and Haeundae photos across unrelated pages.

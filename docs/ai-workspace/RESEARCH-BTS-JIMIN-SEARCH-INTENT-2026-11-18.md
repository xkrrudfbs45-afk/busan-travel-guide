# BTS in Busan — search-intent update (2026-11-18)

## Search Console evidence
- Property: sc-domain:go2busan.com
- Window: 2026-10-20 to 2026-11-16 (Pacific Time, latest complete window returned)
- English page: https://go2busan.com/guides/bts-in-busan/
- Relevant query rows: "plan a busan travel itinerary centered around jimin's local landmarks" (14 impressions, average position 10); "plan a travel itinerary for visiting jimin's favorite spots in busan" (5 impressions, average position 10); "plan a travel itinerary for jimin's most iconic landmarks in busan" (2 impressions, average position 9.5). These are low-volume directional signals, not evidence of stable demand or ranking.
- Page-level report: 137 impressions, 0 clicks, average position 8.64.
- zh-TW page query "釜山bts景點": 6 impressions, 0 clicks, average position 9. The Taiwan page already has localized BTS destination wording; this change does not alter it.

## Change
- Updated only the English BTS guide's title, meta description, Open Graph / Twitter text, Article JSON-LD headline/description, and H1.
- Focused the snippet on Jimin and Jung Kook-related Busan landmarks, fan stops and practical day routes.
- Avoided unverified wording that presents locations as personal favourites or official BTS venues.
- No URLs, body itinerary claims, images, image credits, analytics, affiliate links, hreflang or sitemap entries changed.

## Validation / release boundary
- Run static build and Technical SEO workflow on the exact PR head.
- Review rendered title/snippet and page at mobile widths; browser screenshot QA is not available in this task environment.
- Keep Draft until checks and responsive visual review are complete. No merge or production deployment.

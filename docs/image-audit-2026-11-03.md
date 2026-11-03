# Image audit — 2026-11-03

## Scope and limits

This is a source-level first-pass audit of the repository's main branch, not a claim that every live image has been visually or legally verified. The main branch tree contains 124 HTML files and 11 local raster/vector image assets. Most editorial photographs are remote URLs in CSS or HTML, so a full approval decision requires opening each original file page and checking the actual image and license. The production site could not be independently rendered through the available web inspection path in this pass.

## Confirmed findings from source review

### 1. Current source policy conflicts with the owner's stricter requirement

The previous `IMAGE_STANDARDS.md` allowed stock images with commercial-use permission. The owner's current rule is narrower: third-party photos must come from KOGL Types 1–4 or Wikimedia Commons CC BY / CC BY-SA / Public Domain, with exact terms verified. The standards file has been updated in this branch to match the stricter rule.

### 2. Unsplash image URLs remain in CSS

The following selectors have Unsplash URLs in `assets/styles.css`. These are now **NEEDS REVIEW / DO NOT PUBLISH AS VERIFIED** until removed or replaced with a subject-matched, approved source. This list includes some repeated/legacy selectors; CSS cascade and actual use on each page must be checked before changing them.

- `.home-refresh .hero-art`
- `.home-refresh .feature-image` (appears in more than one rule)
- `.home-refresh .thumb-stay`
- `.home-refresh .thumb-transit`
- `.home-refresh .thumb-luggage`
- `.home-refresh .thumb-pass`
- `.home-refresh .trend-food` (earlier rule; later rule uses a Wikimedia pork-soup image)
- `.home-refresh .trend-market`
- `.home-refresh .trend-airport` (later rule points to Busan-Gimhae light rail; confirm final cascade)
- `.home-refresh .trend-stay` (generic hotel imagery; later rule remains generic Unsplash)
- `.home-refresh .trend-itinerary` (earlier rule; later rule uses Gamcheon Culture Village)
- `.home-refresh .trend-luggage`
- `.home-refresh .trend-hotel`
- `.home-refresh .trend-rainy`
- `.trend-dialect`
- `.home-refresh .trend-pnu-food`
- `.home-refresh .trend-nakgopsae`
- `.home-refresh .trend-makgeolli`
- `.home-refresh .trend-mountain-food`
- `.home-refresh .trend-temple-food`

Some of these selectors may be overridden or unused. Do not treat a CSS selector's presence alone as proof it is currently visible. Verify the final cascade and corresponding HTML card before editing.

### 3. Nakgopsae guide has no article cover in its current HTML

The source file `guides/beomil-dong-nakgopsae/index.html` has no `og:image`, `twitter:image`, or `article-cover` figure in the reviewed source. The Japanese and Traditional Chinese counterparts also showed no article-cover figure in the reviewed source. This avoids a misleading cover but leaves the page without a dedicated verified dish photo/social preview. Find a verified KOGL/Wikimedia image of actual nakgopsae or use an explicit vector/text alternative; do not use the current generic Unsplash homepage card image as a substitute.

### 4. Lodging guide has a beach image, not a hotel room image

`guides/where-to-stay-busan/index.html` uses `Haeundae_District_and_Beach.jpg` and credits Masterhatch / Wikimedia Commons / CC BY-SA 4.0. The visible caption describes the beach and skyline, which is appropriate for a neighborhood-level accommodation guide. It must not be reused or described as a specific hotel's ocean-view room.

### 5. Some CSS image choices need subject-level review

The CSS includes specific Wikimedia references for pork soup, Songdo Beach, Jagalchi Market, Songjeong Beach, Gamcheon Culture Village, Busan subway, KTX, Sky Capsule, Busan-Gimhae light rail, milmyeon, and eomuk. These are promising subject matches based on filenames/URLs, but each file page, actual photo content, attribution, and license still require verification before being marked VERIFIED. A filename alone is not sufficient.

## Recommended remediation order

1. Remove generic Unsplash imagery from live homepage cards and replace each with a verified, topic-matched KOGL/Wikimedia asset or an original vector/text design.
2. Prioritize `.trend-nakgopsae`, `.trend-pnu-food`, `.trend-makgeolli`, `.trend-mountain-food`, `.trend-temple-food`, `.trend-hotel`, `.trend-rainy`, and `.trend-dialect` because their current Unsplash URLs do not establish the exact editorial subject.
3. Add a real verified nakgopsae photo with accurate attribution to the English/Japanese/Traditional Chinese guides only if an exact dish photo is found. Otherwise add a clearly identified illustration or text-led cover.
4. Build a machine-readable image manifest with source URL, original file page, creator, license, commercial-use check, modification note, caption, and status.
5. Extend automated checks to flag unapproved image hosts, missing image alt text, mismatched Open Graph images, missing required attribution, and repeated image URLs across unrelated guides.
6. After changes, inspect the actual rendered homepage and representative pages on mobile and desktop. Do not claim live deployment until the deployment and live assets are verified.

## Status

- Strict image policy: documented in the branch.
- First-pass source findings: documented.
- All 124 HTML pages visually reviewed: **No**.
- All third-party image licenses verified: **No**.
- Production site changes deployed: **No**.

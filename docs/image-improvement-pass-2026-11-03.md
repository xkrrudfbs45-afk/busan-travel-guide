# Image improvement pass — 2026-11-03

## What changed in this branch

This change replaces generic stock-photo backgrounds on the shared homepage card system with original, locally stored SVG editorial illustrations. It also adds an illustrated nakgopsae cover to the English, Japanese, and Traditional Chinese guides.

### Image handling

- Removed all `images.unsplash.com` URLs from `assets/styles.css`.
- Removed all Wikimedia Commons and upload.wikimedia.org URLs from CSS background-image declarations. CSS backgrounds do not provide reliable per-image attribution in the card UI; the replacement artwork is original and local.
- Updated English, Japanese, and Traditional Chinese homepage social preview image metadata to use the original Busan coastline illustration.
- Updated the English homepage visual credit to identify the artwork as an original illustration, not a photo.
- Added a clearly captioned nakgopsae illustration to the three localized nakgopsae guides. Alt text and captions explicitly say it is an illustration, not a photograph.
- Added responsive styling for article illustration figures.

### Original illustration assets added

- Busan coastline and city skyline
- Nakgopsae ingredients/hot pot
- Accommodation and hotel-selection guide
- Transit/metro guide
- Rainy-day planning
- Local food overview
- Market overview
- Gimhae airport transfer
- Campus-neighborhood food guide
- Songdo Beach guide illustration
- Songjeong Beach guide illustration
- Jagalchi Market guide illustration
- Haeundae Sky Capsule guide illustration
- Winter in Busan guide illustration
- Milmyeon guide illustration
- Eomuk guide illustration
- Makgeolli guide illustration
- Korean temple food guide illustration
- Luggage/storage guide illustration
- Passes/attractions guide illustration
- Separate local-food overview illustration
- Geumjeongsanseong mountain-village food illustration
- KTX high-speed rail illustration

These are editorial illustrations, not documentary photographs of a specific business, room, meal, or current scene. The assets contain accessible SVG titles/descriptions, and their artwork is stored locally without third-party photo licensing dependencies.

## Validation performed

- Inspected the CSS after the change: zero Unsplash URLs remain.
- Inspected the CSS after the change: zero Wikimedia Commons or upload.wikimedia.org URLs remain in CSS image declarations.
- Checked all local SVG paths referenced by CSS against the repository tree: no missing local SVG references found.
- Reviewed the English, Japanese, and Traditional Chinese nakgopsae guide source files and inserted the illustration/caption.
- Updated social image metadata on English, Japanese, and Traditional Chinese homepages.
- Fixed the homepage food-image audit script so it inspects the exact matching card anchor instead of accidentally borrowing a later card's image class when the same URL appears in an earlier text-only section.
- Extended the repository image audit to flag direct image tags with missing alt text, external hosts requiring manual approval, and Wikimedia images without visible source/license attribution. These are review flags, not automatic legal or visual verification.

## Important remaining work

This is a visual-safety improvement for homepage card backgrounds and the three nakgopsae guide pages. It is **not** a claim that every image embedded directly in every HTML article has been visually inspected or that every third-party image license across all 124 HTML pages has been verified. Direct `<img>` tags, article figures, and other page-specific remote assets still require a page-by-page source, subject, license, and attribution audit before being marked VERIFIED.

Do not replace article photographs blindly: first verify whether they depict the exact place/food/hotel described. If an exact, permitted photo cannot be confirmed, use a topic-specific illustration or a text-led design. Avoid presenting these illustrations as photographs.

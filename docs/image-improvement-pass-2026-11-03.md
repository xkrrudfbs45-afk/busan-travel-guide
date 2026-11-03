# Go2Busan image audit and improvement pass

## Editorial rule

The goal is not to eliminate Unsplash, Wikimedia Commons, or other remote image hosts. The goal is to use an image that accurately represents the page/card topic, with a verified source, suitable reuse rights, and required attribution. A correctly licensed, topic-matched photograph is often preferable to a generic illustration.

## Changes in this branch

- Added original, locally stored SVG illustrations for subjects where a reliable, topic-matched photo was not retained in the implementation.
- Split Japanese and Traditional Chinese homepage food-card classes so unrelated guides no longer inherit the same pork-soup image.
- Added a dedicated pork-soup illustration for Japanese and Traditional Chinese pork-soup guide previews, with localized alt text that identifies it as an illustration.
- Fixed the homepage food-image audit script to inspect the exact matching card anchor.
- Extended the image audit to flag missing alt text, external image sources that need source/subject/license review, Wikimedia covers lacking visible creator/source/license attribution, photo credits attached to SVG illustrations, and known homepage class mismatches such as winter cards using rainy-day imagery or Visit Busan Pass cards using Sky Capsule imagery.
- Restored topic-matched Wikimedia photographs on English homepage cards for dwaeji-gukbap, Gimhae light rail, Busan subway, Haeundae Sky Capsule, Songdo Beach, Jagalchi Market, and Songjeong Beach. These cards already contain visible photo credits. These remote images are intentionally retained because the topic and credit match; remote hosting is not itself a defect.

## Editorial decisions

- Keep real photographs when the pictured dish, place, transport mode, or attraction matches the content and reuse terms are verified.
- Do not use a generic Busan skyline/beach image to imply a specific hotel room, restaurant dish, or named attraction.
- Avoid repeating one food photo across unrelated food guides. Localized food cards may use distinct topic-specific illustrations until an accurate, licensed photograph is verified.
- Do not use snow as the default visual for a typical Busan winter guide; snow is uncommon and can mislead visitors about usual conditions. Use a seasonally representative image or a clearly labeled illustration.
- Do not present illustrations as photographs. Keep descriptive alt text and visible “Original illustration” labels where appropriate.
- Preserve photographer names, source links, license labels, and share-alike obligations wherever required.

## Audit coverage and limitations

The source-level checks cover image tags and CSS background declarations across the repository when the audit script is run. They can identify missing alt text, repeated CSS URLs, mismatched cover/OG image URLs, and likely attribution gaps. They cannot determine visual subject accuracy from source code alone and do not automatically verify the current live crop or whether a remote URL still resolves.

This is an ongoing audit, not a claim that every image on all 124 HTML pages has already been visually verified. Remaining work is to review each page's actual rendered cover/card, check subject match and mobile crop, verify the original image page and license, and replace only the images that are misleading, irrelevant, duplicated without a good reason, broken, or inadequately credited.

## Verification note

The branch now intentionally contains both local illustrations and selected remote photographs. The presence of an Unsplash or Wikimedia URL is not considered a failure by itself. Each image must be judged against its specific content and attribution.


## Follow-up article-cover pass (2026-11-04)
- Added a dedicated, topic-matched article cover to the English, Japanese, and Traditional Chinese versions of seven food/history guides: dwaeji-gukbap, eomuk, Busan food stories, milmyeon, Geumjeongsanseong makgeolli, Geumjeongsanseong village food, and Pusan National University neighborhood food.
- Each new cover uses the relevant original Go2Busan illustration, descriptive localized alt text, intrinsic dimensions, lazy loading, and a visible caption identifying it as an illustration rather than a real restaurant/product photograph.
- Added matching `og:image`, `og:image:alt`, and `twitter:image` metadata for these 21 localized article pages so social shares point to the same topic-specific artwork.
- Remaining known limitation: these social images are SVG. Some social platforms do not reliably render SVG previews, and the existing audit will flag them for a future raster-export pass. Do not replace them with unrelated generic photography just to silence that warning; export topic-matched PNG/WebP versions or use a verified, properly licensed real photograph with accurate attribution.


## Follow-up illustration coverage (2026-11-04, continued)
- Added original, topic-specific SVG artwork for Dongnae pajeon, Gupo guksu, jaecheopguk, and the Busan Fireworks Festival (Gwangan Bridge and fireworks scene).
- Added localized article covers, descriptive alt text, visible illustration captions, and matching social image metadata to the English, Japanese, and Traditional Chinese versions of those four guides.
- Across both follow-up batches, 33 localized article pages now have topic-matched covers for 11 guide topics. These are explicitly labeled original illustrations, not photographs of specific restaurants or live events.
- Raster social-preview exports remain an explicit next step. The current SVG preview metadata keeps the subject accurate but can be unsupported by some social platforms; do not silently replace it with an unrelated image.

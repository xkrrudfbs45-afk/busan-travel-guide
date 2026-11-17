# Traditional Chinese food-history image refresh — 2026-11-17

## Scope
Add relevant, already-registered licensed photographs to three high-intent Traditional Chinese food-history guides and complete their social preview metadata:
- /zh-tw/guides/busan-eomuk-history/
- /zh-tw/guides/busan-dwaeji-gukbap-history/
- /zh-tw/guides/busan-milmyeon-history/

## Image sources and attribution
1. Eomuk / tteokbokki at Bupyeong Market
   - File: Korea-Busan-Pupyeong_Market-Eomuk_and_tteokbokgi-01.jpg
   - Author: Junho Jung
   - Taken: 2009-02-08
   - License: CC BY-SA 3.0
   - Source: https://commons.wikimedia.org/wiki/File:Korea-Busan-Pupyeong_Market-Eomuk_and_tteokbokgi-01.jpg
   - Caption explicitly notes the archival date and does not imply the current stall or vendor is unchanged.
2. Busan dwaeji-gukbap
   - File: Dwaeji_Gukbap_a0.jpg
   - Author: CYAN
   - Taken: 2018-12-01; Commons camera coordinates are in Busan.
   - License: CC BY-SA 4.0
   - Source: https://commons.wikimedia.org/wiki/File:Dwaeji_Gukbap_a0.jpg
3. Busan milmyeon
   - File: Busan_Milmyeon_20200522_001.jpg
   - Author: Mobius6
   - Taken: 2020-05-22
   - License: CC BY-SA 4.0
   - Source: https://commons.wikimedia.org/wiki/File:Busan_Milmyeon_20200522_001.jpg

All three images were already present in assets/data/image-credits.json with status=verified and commercial_use=true; no new registry entries or unverified photo sources were introduced.

## Implementation
- Added one relevant inline photo to each zh-TW guide with descriptive alt text, lazy loading and visible attribution/license caption.
- Added matching og:image, og:image:alt, twitter:image, twitter:image:alt and summary_large_image metadata.
- No article claims were changed; the dwaeji-gukbap caption identifies the photo as Busan-based, supported by Commons camera coordinates. Eomuk caption labels the 2009 archival image and avoids implying current vendor continuity.

## QA
- Build / technical SEO / image-credit strict audit pending for the PR exact head.
- Responsive image and caption review at 360 / 390 / 768 / 1280 pending.
- No merge or deployment.

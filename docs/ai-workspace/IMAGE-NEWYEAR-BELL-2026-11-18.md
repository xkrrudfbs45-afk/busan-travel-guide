# New Year guide image — Citizens' Bell at Yongdusan Park

Checked: 2026-11-18  
Target pages: EN / JA / zh-TW existing `busan-new-year-countdown-2027` guides  
No new URL is created.

## Image and rights verification

- Wikimedia Commons file: https://commons.wikimedia.org/wiki/File:Bell_of_the_Citizens.jpg
- Subject: the Citizens' Bell at Yongdusan Park, Busan.
- Photographer / author: Bernard Gagnon.
- Photograph date: 2022-10-02.
- File dimensions shown on Commons: 3,701 × 2,237 px (original JPEG 4.8 MB).
- License: CC0 1.0 Universal Public Domain Dedication; commercial reuse permitted. Attribution is not required, but the visible caption credits the photographer and links the source and license.
- Commons marks the file as a Quality image.
- Visual inspection: the image clearly shows the actual bell and pavilion at Yongdusan Park. It is a daytime photograph of the bell, not the 2026–27 ceremony or a New Year's Eve crowd scene.

## Implementation

- Registered the file in `assets/data/image-credits.json` as `verified`.
- Added the three existing EN / JA / zh-TW New Year guide pages to `content/images/cover-photos.json`.
- The existing `enhance-images.mjs` build step will generate a responsive 640 / 1000 / 1600 px `srcset`, intrinsic dimensions, localized alt text, visible credit caption, and high-priority first-screen loading.
- Added localized Open Graph image / alt and Twitter image metadata; the build step replaces the image URL from the verified registry.
- The caption explicitly says the photograph is from 2 October 2022 and is not a photo of the 2026–27 event.

## Market / editorial check

The current public search sample did not surface a recent direct Dcard, PTT, 4travel, Yahoo!知恵袋 or Reddit question specifically asking for a photo of the bell. The image is justified by the guide's confirmed destination and by its value in helping readers recognize the exact venue; it is not presented as a demand signal or current event photo.

## QA and limitations

- Commons source, subject, author, date, dimensions, license and image appearance verified on 2026-11-18.
- JSON registry and cover configuration parsed before commit.
- Exact-head build / image-credit / cover-image audit and responsive 360 / 390 / 768 / 1280 browser crop QA remain pending.
- No main merge, Render deployment, analytics, partner link, or SNS change.

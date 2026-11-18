# Homepage visual review — 2026-11-18

## Scope
Reviewed current `main` homepage markup and the two homepage visual stylesheets. This is a source review, not a browser screenshot or live-site inspection.

## Findings
1. The hero uses a broad Busan skyline photograph (Gwangan Bridge, Marine City and LCT). It communicates the city, but does not immediately sell a specific travel experience. Keep it as the city-wide brand image if its attribution remains correct; use the first visual picks to show distinct, recognizable experiences.
2. Hero styling is defined in both `assets/homepage-editorial.css` and `assets/homepage-showcase.css`. The latter loads after the former and overrides key hero properties, including the 510px height with a 680px hero, palette, typography and backdrop. Edit against the final cascade, not the earlier declaration alone.
3. The homepage already has a clear hierarchy: a six-item quickbar and a four-card bento visual-picks area. Improve image relevance and quality before adding more sections or decorative elements.
4. Image loading needs preservation. The homepage preloads desktop and mobile hero variants and lazily reveals lower trend/event background images with IntersectionObserver. A refresh must retain one correct LCP hero preload, avoid duplicate eager loading and provide a useful fallback when IntersectionObserver is unavailable.
5. Mobile crop and legibility remain unverified. Source inspection cannot establish that the 360/390px hero, menu controls, quickbar, bento-card text or image focal points render correctly. Browser screenshots are required before visual changes are considered ready.

## Recommended implementation batch
- Keep a strong real Busan establishing photograph in the hero, but consider a more immersive coastal/night-view crop only after verifying the exact photo, source, license and mobile focal point.
- Curate four distinct visual picks around recognizable travel intent: coastal walk/ocean view, local food market, cafe or neighborhood streetscape, and night view/illuminated bridge.
- Use actual place-matched photographs. Retain author/source/license records and visible credits where required. Do not use generated imagery to misrepresent a real Busan location.
- Apply a consistent treatment: natural color, restrained contrast, readable bottom gradient and no artificial HDR look.
- Check source, author, license, caption, alt text, OG/Twitter reuse rights and focal crop for EN / JA / zh-TW before updating shared assets.
- Run strict image-credit audit and responsive visual QA at 360, 390, 768 and 1280px. Check hero LCP/preload, dimensions, lazy loading, card text contrast, navigation and language controls.

## Audience guardrail
The visual direction is for independent international visitors, with young travellers and 20–40s users an important creative focus. Do not make the homepage senior-first. Keep accessibility and lower-strain details in relevant practical guides as useful information for all ages.

## Not done
No images were downloaded, changed or added. No homepage HTML/CSS was changed. No browser screenshot, Lighthouse run, GA4/GSC query, merge or deployment was performed.

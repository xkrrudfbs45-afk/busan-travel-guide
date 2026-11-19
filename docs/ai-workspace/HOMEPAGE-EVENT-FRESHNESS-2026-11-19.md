# Homepage seasonal-event freshness and image-credit review — 2026-11-19

## Live-page finding
Reviewed the live Render preview for the EN, JA and zh-TW homepages on 2026-11-19. All three showed the Gwangalli Beach Book Fair as an upcoming event dated November 13–18, although the current date was November 19. The seasonal block also still carried a November 17 update label.

The event card was replaced with the still-upcoming final programme of the Gwangbok-ro Balcony Music Show:
- Official event period: 2026-11-14 to 2026-11-28.
- Remaining programme as of 2026-11-19: JAZZ IN BUSAN on Saturday, 2026-11-28, 19:00–21:00.
- Location: Gwangbok-ro, Jung-gu, Busan.
- Official source: https://www.visitbusan.net/schedule/view.do?boardId=BBS_0000009&dataSid=6437&menuCd=DOM_000000204012000000
- Official calendar cross-check: https://www.visitbusan.net/schedule/list.do?boardId=BBS_0000009&menuCd=DOM_000000204012000000&month=0&year=2026

The event card now links directly to the official Visit Busan programme. It does not imply that the event runs every day; it names only the remaining November 28 programme. The seasonal block update date is now November 19 in all three languages.

## Image and licensing review
The old event card used a Gwangalli Beach photo for a book fair that had ended. The replacement uses a verified Nampo-dong street photograph as nearby-area atmosphere, not as an image of the performance:
- Nampo-dong Busy Street.JPG — Ken Eckert, 3,456 × 2,592, photographed 2010-05-09, CC BY-SA 4.0. Commons file page checked 2026-11-19: https://commons.wikimedia.org/wiki/File:Nampo-dong_Busy_Street.JPG
- The alt text and visible credit explicitly state that it is an illustrative 2010 street photo, not an event photo.
- CSS uses the Wikimedia thumbnail endpoint at width=1000; no image bytes were copied or edited.

The shared seasonal-event credit line now visibly credits all four images used in the card group:
- Haeundae Light Festival image — Lee Jeong-il (selected entry) / Busan Metropolitan City, KOGL Type 1. The official Visit Busan Archive record identifies the image as a 2020 production, so the visible alt text and credit now call it a 2020 archive photo, not the 2026 installation design: https://visitbusan.net/archive/dataSearch/view.nm?dataSid=METADATA003506
- Nampo-dong street — Ken Eckert, CC BY-SA 4.0.
- Gwangalli Beach — Masterhatch, CC BY-SA 4.0.
- BEXCO — M.M.Minderhoud, CC BY-SA 3.0.

The image registry entries for Nampo-dong Busy Street.JPG and haeundae-light-festival-800.jpg now record their homepage use, source, license and 2026-11-19 review. The Haeundae image is a verified KOGL Type 1 archive image from 2020; it is not presented as a current 2026 photograph. No unverified image was introduced.

## Localisation
- EN: Gwangbok-ro Balcony Music Show; final JAZZ IN BUSAN programme, Nov 28, 19:00–21:00.
- JA: 光復路バルコニー・ミュージックショー; final programme date/time and location stated naturally.
- zh-TW: 光復路陽台音樂秀; final programme date/time and location stated naturally.
- The official event title and schedule are translated for clarity, not copied mechanically.

## SEO and UX scope
- Existing homepage URLs, canonical, hreflang, title/meta, OG/Twitter and JSON-LD are unchanged.
- No new page or URL, no internal redirect, no GA4/GSC or analytics event change, no affiliate CTA change, and no SNS post or scheduled content change.
- The event card now gives a concrete date, time and location and links to the official programme. It replaces a stale event without adding another generic seasonal card.

## Validation and release boundary
- Updated EN / JA / zh-TW homepage HTML, shared CSS, image registry and this research note.
- Live Render preview was inspected in text mode before changes; current deployed main SHA at review was f036e199967c395736538e3fea385cfbe24b74e8. The custom domain and browser-rendered screenshots were not independently inspected in this pass.
- Responsive screenshot QA at 360 / 390 / 1280 remains required. Do not claim visual completion until actual browser screenshots are reviewed.
- This change is a Draft PR only. No merge, Render deployment, DNS or production configuration change was made.

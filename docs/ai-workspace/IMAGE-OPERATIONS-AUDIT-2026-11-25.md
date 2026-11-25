# Go2Busan Image Operations Audit — 2026-11-25

- Baseline: `main` at `5eeb3c94f335274ef401e67d0b967bf8f4eecf74`
- Static production audit: [Technical SEO audit #45400692459](https://github.com/xkrrudfbs45-afk/busan-travel-guide/actions/runs/45400692459)
- Related social-content audit: [Draft PR #670](https://github.com/xkrrudfbs45-afk/busan-travel-guide/pull/670)
- Scope: production build metadata/credit checks plus the 45-card visual review recorded in PR #670.
- Safety: this PR adds documentation only. It does not change image files, HTML, approved social content, schedules, publish logs, deployment settings, external posts, tokens, or secrets.

## 1. Production website image checks

The 2026-11-24 main audit reported:

| Check | Result | Interpretation |
|---|---:|---|
| Pages missing `og:image` or `twitter:image` | 0 | Static metadata check passed |
| Images missing alt text | 0 | Static HTML check passed |
| Canonical pages missing from sitemap | 0 | Static sitemap/hreflang audit passed |
| Sitemap URL entries | 273 | Deployment smoke test checked 273 URLs with HTTP 200 |
| Images in use / registered | 99 / 107 | 8 unused registry entries are warnings, not broken assets |
| Strict image-credit audit | 0 errors | No unregistered/incomplete license entry found |
| Image URL reuse notices | 118 | Informational; reuse is not automatically a defect |

The audit also recorded 3 English meta descriptions over the 170-character guideline:
- `/guides/busan-winter-lights-christmas-2026/` — 183 characters
- `/guides/gwangalli-drone-show-viewing-tips/` — 179 characters
- `/guides/taejongdae-danubi-train-tips/` — 181 characters

### Website image verification limits

This run inspected generated HTML, metadata, source references, image-credit registry, and CI output. It did **not** independently download every third-party image from a browser, inspect rendered crops at 360/390/1280 px, or measure real-user/Lighthouse LCP and CLS. Those items remain unverified; static success must not be described as full visual/performance validation.

## 2. Instagram visual relevance findings

The visual review in PR #670 opened all 45 cards in nine five-card sets. All 45 were 4:5, showed the AI-illustration label, and had no observed text clipping or key-copy loss from cropping. No external-photo licensing issue was found in these sets.

Mechanical QA is not sufficient for semantic place/subject matching: the QA hashes and card counts can pass while an illustration depicts the wrong Busan district or an outdated transport mode.

### P1 — Taejongdae: train imagery can imply current service

**Affected scheduled sets**
- `ig-fresh15-1126-us` — en, local 12:00, 2026-11-26
- `ig-fresh15-1126-jp` — ja, local 12:00, 2026-11-26
- `ig-fresh15-1126-tw` — zh-TW, local 12:00, 2026-11-26

**Related guide URLs**
- EN: https://go2busan.com/guides/taejongdae-danubi-train-tips/
- JA: https://go2busan.com/ja/guides/taejongdae/
- zh-TW: https://go2busan.com/zh-tw/guides/taejongdae/

**Evidence**
- The 15-card visual set includes a train-like vehicle on card 2 and unrelated coastal high-rise/bridge scenery.
- The current guide accurately dates the latest specific notice it found to 2026-07-10: Danubi service was suspended pending an emergency safety inspection and a temporary free shuttle was listed.
- A later report refers to a September BISCO notice with different shuttle operating days; that primary BISCO notice was not obtained in this review. Do not imply the train or a specific shuttle timetable is currently operating.

**Correction**
- Remove the train/rail-vehicle implication from all three language sets.
- Use Taejongdae-specific cliffs, pine forest, lighthouse, park paths, and viewpoint scenes.
- Do not depict a shuttle as currently operating unless its current operation is verified from a dated operator notice.
- Keep any archival train photograph explicitly labeled as an archival image, not a current service photograph.

### P2 — Food etiquette: coastal skyline backgrounds do not match the subject

**Affected scheduled sets**
- `ig-fresh15-1125-us` — en, local 12:00, 2026-11-25
- `ig-fresh15-1125-jp` — ja, local 12:00, 2026-11-25
- `ig-fresh15-1125-tw` — zh-TW, local 12:00, 2026-11-25

**Related guide URLs**
- EN: https://go2busan.com/guides/busan-local-food-etiquette-tips/
- JA: https://go2busan.com/ja/guides/food-etiquette/
- zh-TW: https://go2busan.com/zh-tw/guides/food-etiquette/

**Evidence**
- Across the 15 cards, soup/seafood-market etiquette scenes repeatedly use Gwangan Bridge, open sea, and coastal high-rise backgrounds.
- The images are technically well-formed but the setting does not explain restaurant, table, market, pricing, or ordering etiquette.

**Correction**
- Replace unrelated coastal scenery with a restaurant table, pork-soup condiments, seafood-market stall, menu/price check, and solo-dining scene.
- Keep AI-illustration labels. Do not substitute third-party restaurant photos without item-specific commercial-use and attribution checks.

### P2 — Gwangbok-ro Balcony Music Show: wrong district in backgrounds

**Affected scheduled sets — currently Draft / needs_check**
- `ig-fresh15-1128-us` — en, local 12:00, 2026-11-28
- `ig-fresh15-1128-jp` — ja, local 12:00, 2026-11-28
- `ig-fresh15-1128-tw` — zh-TW, local 12:00, 2026-11-28

**Official event reference**
- Visit Busan: https://www.visitbusan.net/schedule/view.do?boardId=BBS_0000010&dataSid=6438&menuCd=DOM_000000304010000000

**Evidence**
- The 15-card visual set uses Gwangan Bridge/Marine City/coastal high-rise backgrounds.
- The event is a downtown Gwangbok-ro balcony performance around Nampo-dong, not a waterfront show.

**Correction**
- Use Nampo-dong's low-rise shopfronts, pedestrian street, balcony stage, and evening street lighting.
- Remove Gwangan Bridge, Marine City, and beach scenery.
- Keep all three sets Draft until the images and event details are checked again.

## 3. Acceptance criteria for future image changes

1. Every card has a topic- and location-matched visual; no generic coastal skyline is used as a substitute for a named district.
2. Current operating conditions are not implied by archival transport imagery.
3. AI illustrations remain labeled; third-party photos require item-specific license, commercial-use, author, and attribution verification.
4. Card QA checks both technical properties (4:5, file/hash/card count, text overflow) and semantic properties (place, activity, current-status implication).
5. Website image URLs, MIME/HTTP response, rendered crops at 360/390/1280 px, and LCP/CLS are verified in browser-based checks before calling the image system fully healthy.

## 4. No production changes

This audit does not edit or approve any Instagram card, change a scheduled post, update `schedule.json`, alter either publish-log branch, publish externally, merge, deploy, or change credentials/secrets.

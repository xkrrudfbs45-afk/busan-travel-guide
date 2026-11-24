# Social image QA — 24 November 2026

Audit baseline: `main` at `f54b134e9543f44c65aae18d2c9dc0fe391cb238`.
Evidence source: current-main 15-day audit in PR #660, including rendered carousel/card review and the active Instagram schedule. This report records image findings only; it does not modify any schedule, publish log, asset, account, or credential.

## P1 — Gwangbok-ro Balcony Music Show artwork does not match the venue or time

Affected scheduled content:
- `ig-fresh15-1128-us` — EN
- `ig-fresh15-1128-jp` — JA
- `ig-fresh15-1128-tw` — zh-TW

Affected destination: `/guides/nampo-neighborhood-guide/` and its `/ja/`, `/zh-tw/` equivalents.

Evidence:
- All 15 rendered cards across the three language sets use coastal skyline / Gwangan Bridge / Marine City imagery rather than the Jung-gu Gwangbok-ro pedestrian street and balcony-performance setting.
- Card 1 is a bright daytime scene, while the listed show is 19:00–21:00 on 28 November 2026.
- The prompts themselves request a bright daytime palette on every card, including the night-stage card.
- Visit Busan's official event listing gives 28 November 2026, 19:00–21:00, with Sunny Moon Jazz Band 19:30–20:00 and Modern Sounds Jazz Big Band 20:00–20:30: https://www.visitbusan.net/schedule/view.do?boardId=BBS_0000009&dataSid=6437&menuCd=DOM_000000204012000000

Safe correction:
- Keep all three posts in Draft.
- Re-render five cards per language around a low-rise Nampo/Gwangbok-ro pedestrian street, an upper-floor balcony jazz stage, warm night lighting and realistic urban context.
- Do not depict Gwangalli, Marine City or Gwangan Bridge as the event venue.
- Retain the AI-illustration credit and re-run the current visual QA/spec-hash gate before approval.

## P1 — Japanese carousel card overflows horizontally

Affected content: `ig-fresh15-1125-jp` — JA, card 5/5.

Evidence:
- Current rendered card 5 has text extending beyond the intended horizontal text area.
- The card is not safe to publish until the line is shortened and the five-card set is re-rendered and checked at the target 4:5 size.

Safe correction:
- Shorten the card-5 sentence without changing its meaning.
- Re-render the full set, verify card count and current `spec_hash`, and inspect the 4:5 output before approval.

## P1 — Taejongdae card set has stale rendered artwork / legacy QA metadata

Affected content: 11/26 Taejongdae Instagram set — EN, JA and zh-TW.

Evidence:
- The replacement art set `ig-fresh15-15-locality-v3` exists in the Instagram state branch, but the 15 rendered cards still use the older image set.
- Four of the twelve audited sets have legacy QA metadata; `qa.ok=true` alone does not establish that the current specification was rendered.
- Current audit requires both `spec_hash` and `card_count=5`; the publisher freshness gate blocks stale sets.

Safe correction:
- Keep the affected posts Draft / not approved.
- Render from the current approved art set only after copy and official operating details are verified.
- Confirm five cards per language, current `spec_hash`, image-topic match and 4:5 crop.

## P2 — Repeated coastal backgrounds reduce topic relevance

Affected set: 11/24–11/25 general travel-preparation and food-etiquette cards across EN/JA/zh-TW.

Evidence:
- The rendered cards repeatedly use coastal skyline, lighthouse and waterfront scenery for topics such as food-market etiquette and general travel preparation.
- The audit identifies this as a relevance/variety issue, not a confirmed rights or broken-file error.

Safe correction:
- Use market, restaurant, transit-card, luggage or street-level imagery that directly represents each card's topic.
- Avoid replacing images in bulk solely because a URL is reused; verify the subject and page context first.

## Scope and limitations

- The current main static SEO audit reports 0 missing image alt attributes and 0 pages missing social-image metadata.
- The image-credit registry reports 99 images in use, 107 registered, 8 unused-entry warnings and 0 license errors.
- The audit reports 118 cross-page image URL reuse occurrences; reuse is a review signal, not proof of an incorrect image.
- This run did not download every external image URL or perform a real-browser mobile crop test.
- The weekly Lighthouse workflow is scheduled for Mondays at 09:30 KST, but no corresponding run was found in the latest 100 Actions runs for 23 November 2026. Therefore mobile crop, LCP candidate priority, CLS and real-device loading remain unverified.

No active queue, publish-log, external post, token, secret or production asset was changed.

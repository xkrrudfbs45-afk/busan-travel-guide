# Go2Busan Content Depth Audit — 2026-11-11

## Purpose

Improve the usefulness and trustworthiness of existing Go2Busan pages before creating more URLs. Taiwan Traditional Chinese remains the first growth market. This audit is based on the current `main` source snapshot, the open content PRs #311 and #312, and the repository's existing content rules. It is not a claim that draft PR content is live or deployed.

## Executive finding

The project has moved beyond a thin-content problem on several priority topics: pages increasingly explain how to choose, how to get there, what can change, and what to verify. The next quality gap is **evidence at the individual place / claim level**. A general article review date is not enough to tell a traveler whether a restaurant's branch, address, hours, menu, price, queue process, or booking instructions were actually checked.

The immediate goal should be to make each decision-critical claim auditable, distinguish first-hand knowledge from research and unverified leads, and ensure the localized homepage does not link to pages that exist only in unmerged PRs.

## Evidence reviewed

- `CONTENT_GUIDELINES.md`: requires authoritative sources for volatile facts, no invented prices/hours/firsthand claims, and mobile / SEO checks.
- `docs/ai-workspace/STRATEGY.md`: calls for firsthand status, access, nearby itinerary, verified prices/hours, last-checked date, source, and original photography where available.
- `guides/pusan-national-university-food-guide/index.html` on `main`: five restaurant picks; article-level review date (5 Nov 2026); clear caveat that prices and hours are not confirmed; explicit statement that the page does not imply every restaurant was personally visited.
- `zh-tw/index.html` on `main`: localized homepage cards and directory links include Taiwan content paths that are introduced or updated by open PRs.
- PR #311: proposes strengthening Seomyeon, Gaya Park / Dong-eui University and Pusan National University food guides; expands PNU shortlist from five to seven and adds business details. Its description says some hours differ between listings and that build / SEO / viewport checks were still pending at the time recorded.
- PR #312: proposes 22 Taiwan guides and the multilingual Busan Map, bringing the Taiwan guide set to 67 in that PR branch. Its description reports strong source-level and CI checks, but also states it is draft-only and not merged or deployed.

## Findings and required action

### P0 — Reconcile homepage links with merged content

The current `main` Taiwan homepage links to a number of localized pages whose corresponding files are supplied by open PRs #311 and #312. A source-level 404 from the repository's default branch is not by itself proof of a live-site 404, but it is a release-integrity warning: homepage links, search-index entries, sitemap entries, and actual page files must land in the same release.

**Action**
1. Before merging #311 or #312, run the complete internal-link audit against the exact proposed merge head.
2. Confirm every localized homepage / directory card resolves to a built page.
3. Confirm every linked page appears in the localized search index and sitemap, with canonical and reciprocal hreflang pairs.
4. After merge, verify the production `version.txt` and sample live URLs. Do not describe draft content as published.

### P0 — Give each restaurant its own verification record

The PNU guide already handles uncertainty responsibly: it warns that prices and hours are not confirmed and avoids claiming that every venue was personally visited. However, the traveler still has to open a map search and independently determine which branch, address, hours, and ordering process apply.

**Required fields for every named venue**
- Korean business name and romanized / Taiwan Traditional Chinese display name.
- Exact branch identity; do not conflate similarly named businesses.
- Full address and a direct map pin or exact Google Maps place search.
- Official website / official social account / authoritative tourism listing, where available.
- Menu items described, with price only when a dated source confirms it.
- Opening hours and closure information only when a current source confirms them.
- Queue, booking, minimum-order, payment, and accessibility notes only when verified.
- Verification status: `officially verified`, `cross-checked listing`, `editor-provided local tip`, or `unverified lead`.
- First-hand status: `visited by editor`, `visited by contributor`, `not personally visited`, or `not yet confirmed`.
- Last checked date per volatile fact, not only one article-level review date.

**Editorial guardrail:** an editor-provided recommendation is not automatically a first-hand visit. Do not upgrade a venue to “visited” without explicit confirmation from the contributor.

### P1 — Make Taiwan localization native and decision-led

The Taiwan landing page already prioritizes Taiwan travelers' arrival, transport payment and three-day planning. The next step is to test each guide against Taiwan-specific questions, not just whether it has Traditional Chinese text.

Review priority:
1. Taiwan departure and arrival: Taoyuan / Kaohsiung airport context, Gimhae arrival, late-night transfer, baggage.
2. Payment and transport: which payment methods work for which service, where a physical transport card is needed, and what should not be assumed.
3. Food ordering: spice level, portion / minimum order, seafood billing components, card payment, useful Korean phrases.
4. Shopping and markets: tax refund process, luggage, operating-day caveats, payment and price confirmation.
5. Trip design: realistic 2–4 day routes with transfer time, meal timing, rest, weather alternatives and map links.

Taiwan-language QA should check Taiwan vocabulary, natural sentence rhythm, local search phrasing, and whether Korean place names remain searchable in map apps. Do not use Simplified Chinese phrasing or literal English-to-Chinese constructions.

### P1 — Replace generic recommendation copy with useful decision criteria

For every food / cafe / shopping recommendation, answer:
- Who is this place best for?
- What is the specific reason to choose it?
- What should the visitor order, see or do?
- What could make the visit inconvenient?
- What nearby stop can be paired without an unrealistic detour?
- What should be checked on the day?

Avoid empty adjectives such as “famous”, “authentic”, “must-visit”, or “locals' favourite” unless supported by evidence. A practical limitation or caveat is more useful than another promotional sentence.

### P1 — Separate source facts, editorial judgment and lived experience

Use a consistent visible convention:
- **Verified detail:** factual claim supported by a current primary or authoritative source.
- **Local editorial tip:** a recommendation or interpretation by the Go2Busan editorial team.
- **First-hand note:** a contributor's own visit, with the contributor / visit date recorded internally.
- **Check before visiting:** a volatile detail that cannot currently be confirmed.

Never make an editorial opinion look like an official fact. Never use an article's general “reviewed” date as proof that every business fact was rechecked on that date.

### P1 — Improve photo evidence and visual usefulness

For food, cafes and markets:
- Prefer original photos from the actual venue and dish, with contributor and date recorded.
- If using a licensed third-party image, retain exact source and license / attribution.
- Do not use generated images as if they depict a real restaurant, menu or location.
- Add useful alt text describing the actual image, not keyword stuffing.
- Use a representative image for the specific guide subject; avoid a generic Busan food image where it could mislead.
- Optimize mobile dimensions and file size without removing credit.

## Content QA scorecard to apply before release

| Dimension | Pass condition |
|---|---|
| Intent | Page answers a specific traveler decision, not just a broad topic |
| Place identity | Korean name, exact branch and map destination are unambiguous |
| Accuracy | Volatile facts have source + checked date, or are explicitly unverified |
| Experience | First-hand status is explicit and never inferred |
| Usefulness | Reader gets choice criteria, practical caveats and next step |
| Taiwan localization | Natural Taiwan Traditional Chinese, native search terms and localized metadata |
| Route logic | Nearby recommendations are geographically realistic |
| Images | Actual subject matches the page; credits / license / alt text are present |
| Discovery | Directory, search index, sitemap and hreflang are consistent |
| Mobile | No horizontal overflow at 360px / 390px and readable on small screens |

## First execution batch

1. Treat PR #311 and #312 as one release-integrity review: verify all linked Taiwan pages exist on the same merge head and all audits pass.
2. Use PNU food guide as the pilot for venue-level verification fields; do not invent prices, hours, addresses or personal visits.
3. Apply the same verification model to Seomyeon, Nampo / Kkangtong, Haeundae and Gwangalli food pages.
4. Review the Taiwan landing page and the top 10 Taiwan search-intent pages for local-language naturalness and decision usefulness.
5. Add a concise editorial / verification legend to the site only after the wording and status labels are consistent across the pilot pages.

## Release boundary

This audit is documentation only. It does not merge PRs, deploy production, publish social posts, change schedules, or claim that draft content is live. Any page-level implementation should be a separate, testable PR with the checks in `CONTENT_GUIDELINES.md`.

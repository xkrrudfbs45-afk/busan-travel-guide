# Go2Busan Growth Backlog

_Last updated: 2026-11-10_

This is a prioritized portfolio, not authorization to implement everything at once. Before starting an item, inspect the current codebase and open PRs to determine whether it is already complete or partially implemented.

## Priority definitions

- **P0:** blocks discoverability, reliability, or measurement; address first.
- **P1:** high-impact audience/content/revenue foundation.
- **P2:** product capabilities and repeat-use improvements.
- **P3:** later monetization and expansion after traffic and trust develop.

## P0 — First 30 days

| ID | Task | Expected outcome | Acceptance evidence |
|---|---|---|---|
| G2B-001 | Verify current open PRs and production state | Avoid conflicting or duplicated work | PR/deployment status report |
| G2B-002 | Mobile and desktop visual QA | Reliable core experience | 360px, 390px, desktop evidence |
| G2B-003 | Sitemap and indexability audit | Search engines can discover priority pages | URL-level audit and fixes |
| G2B-004 | Canonical, hreflang, robots, noindex audit | Correct multilingual indexing | Automated checks and sample URL validation |
| G2B-005 | Broken links, redirects, orphan-page audit | Strong crawl paths and no dead ends | Audit output and resolved critical issues |
| G2B-006 | Affiliate link and analytics audit | Reliable click measurement | Partner/link inventory and event test |
| G2B-007 | Taiwan Traditional Chinese landing page | Clear entry point for Taiwan visitors | Localized page, metadata, internal links |
| G2B-008 | Taiwan-focused food, shopping, stay, itinerary content plan | Market-fit editorial roadmap | Keyword/intent map and content briefs |
| G2B-009 | Haeundae, Seomyeon, Nampo-dong, Gwangalli hub audit/build | Neighborhood-led discovery | Four useful hubs or documented existing equivalents |
| G2B-010 | Strengthen editorial/local trust signals | Credible local expertise | About/editorial standards/firsthand labels |

## P0 — Current release and trust fixes

| ID | Task | Expected outcome | Acceptance evidence |
|---|---|---|---|
| G2B-021 | Reconcile social schedule against publish logs | Prevent expired slots from posting late | Pipeline reconciliation complete in PR #305; manual account-history check still required before reuse |
| G2B-022 | Separate first-hand visits, local tips and directory facts | Transparent local editorial trust | In progress in #309 and #311; keep provenance labels and source links consistent across new pages |
| G2B-023 | Verify volatile restaurant details | Reduce wasted trips from stale hours/phones/prices | Updated in #309 and #311; continue day-of caveats where listings conflict |
| G2B-024 | Original restaurant photography and rights | Stronger food discovery without copyright risk | Still outstanding; use owner-supplied or licensed finished-dish images with attribution and responsive sizes |
| G2B-025 | SNS approval and LIVE release gate | Prevent accidental account posting on merge | #305 remains draft; owner review and LIVE-state confirmation required before merge |
| G2B-026 | Mobile QA for updated food pages | Ensure restaurant cards, maps and text work on small screens | 360px, 390px and desktop checks on #309 and #311 before merge |

## P1 — Days 31–90

| ID | Task | Expected outcome | Acceptance evidence |
|---|---|---|---|
| G2B-011 | Local food database structure | Reusable local food content | Fields, editorial status, map and source data |
| G2B-012 | Food discovery by neighborhood and cuisine | Better food discovery | Searchable/listed food hubs |
| G2B-013 | Original photography workflow | Distinctive visual assets | Image checklist, credits, responsive variants |
| G2B-014 | Interactive Busan map | Location-led trip planning | Accessible map and useful place data |
| G2B-015 | Save places and share trip list | Repeat use and sharing | Save/share flow with privacy-safe storage |
| G2B-016 | Itinerary builder | Personalized trip planning | Inputs, realistic route output, save/share |
| G2B-017 | Accommodation area comparison | Improve hotel decision-making | Neighborhood comparison and relevant partner links |
| G2B-018 | Agoda tracking and hotel CTA optimization | Improve accommodation conversions | Verified attribution and event reporting |
| G2B-019 | Activity affiliate coverage | Monetize activity intent | Relevant product links and click reporting |
| G2B-020 | Current-month Busan guide | Timely search and return visits | Dated update process and official sources |
| G2B-021 | Budget calculator | Practical trip planning | Clear assumptions and editable costs |
| G2B-022 | Visit Busan Pass value calculator | Help pass purchase decision | Official current prices/terms and transparent calculation |
| G2B-023 | Nearby day-trip guides | Expand search demand | Practical transport and itinerary guides |
| G2B-024 | Q&A intake and public FAQ workflow | Discover user needs and answer questions | Moderation and privacy-aware publication flow |

## P2 — Days 91–180

| ID | Task | Expected outcome | Acceptance evidence |
|---|---|---|---|
| G2B-025 | Pre-trip email sequence | Repeat visits and trip-preparation value | Consent, unsubscribe, scheduled content |
| G2B-026 | Multilingual social distribution workflow | Social-to-site acquisition | Editorial calendar and tracked links |
| G2B-027 | Visitor contribution and recommendation workflow | More useful local knowledge | Moderation, attribution, anti-spam controls |
| G2B-028 | Expand Japanese and Simplified Chinese intent-led content | Broader market coverage | Localized content briefs and QA |
| G2B-029 | Own downloadable Busan guide | Direct product experiment | Product, delivery, pricing test |
| G2B-030 | Local advertiser media kit and packages | Direct commercial revenue | Audience evidence, disclosure policy, rate-card proposal |

## First execution batch

1. G2B-001: inspect repository, open PRs, and deployment state.
2. G2B-002: complete visual QA for current work.
3. G2B-003 through G2B-005: diagnose and fix technical SEO issues.
4. G2B-006: verify affiliate tracking and analytics.
5. G2B-007 through G2B-010: prepare Taiwan and neighborhood foundations.

## Definition of done

Every backlog item must have:
- a named problem and target user;
- a clear acceptance criterion;
- source/verification requirements for factual content;
- mobile and accessibility considerations;
- analytics/measurement plan where appropriate;
- a PR or documented reason no code change is needed;
- updated status and handoff notes.

Do not claim Google indexation, partner bookings, revenue, or production deployment based only on code changes.

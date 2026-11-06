# Go2Busan Growth Backlog

_Last updated: 2026-11-06 — reconciled after deployment `197b438`_

This is a prioritized portfolio, not authorization to implement everything at once. Inspect current main and open PRs before starting any item.

## Priority definitions

- **P0:** blocks discoverability, reliability, measurement, or completion of already-built core work.
- **P1:** high-impact audience, content and revenue foundations.
- **P2:** product capabilities and repeat-use improvements.
- **P3:** later monetization and expansion after traffic and trust develop.

## P0 — Close current delivery loop

| ID | Task | Expected outcome | Acceptance evidence | Status |
|---|---|---|---|---|
| G2B-001 | Verify production, main and open PRs | One accurate project baseline | Production version + main SHA + PR inventory | Done — main `197b438` |
| G2B-002 | Mobile and desktop visual QA | Reliable core experience | 360px, 390px, desktop evidence | Done for 169 built pages per 2026-11-06 report |
| G2B-003 | Sitemap and indexability audit | Search engines discover priority pages | URL-level audit and fixes | Done technically; indexation in progress |
| G2B-004 | Canonical, hreflang, robots, noindex audit | Correct multilingual indexing | Automated checks and sample URL validation | Done — 11 audits pass |
| G2B-005 | Broken links, redirects, orphan-page audit | Strong crawl paths and no dead ends | Audit output and resolved critical issues | Done for current audit scope |
| G2B-006 | Affiliate link and analytics audit | Reliable click measurement | Partner/link inventory and event test | In progress — code audited; GA4 live check blocked |
| G2B-007 | Taiwan Traditional Chinese landing page | Clear entry point for Taiwan visitors | Localized page, metadata, internal links | In progress — inspect existing zh-TW homepage before expanding |
| G2B-008 | Taiwan-focused food, shopping, stay, itinerary plan | Market-fit editorial roadmap | Keyword/intent map and content briefs | Not started |
| G2B-009 | Four neighborhood hubs in EN/JA/TW | Neighborhood-led discovery across 3 languages | 4 hubs × 3 languages; reciprocal hreflang, sitemap and navigation | In progress — EN all live; JA/TW Nampo + Gwangalli await #282 |
| G2B-010 | Editorial/local trust signals | Credible local expertise | About/editorial standards/firsthand labels | In progress — preserve firsthand vs recommended-by-others distinctions |

## P1 — Audience, map and revenue foundations

| ID | Task | Expected outcome | Acceptance evidence | Status |
|---|---|---|---|---|
| G2B-011 | Local food database structure | Reusable local food content | Fields, editorial status, map and source data | Planned |
| G2B-012 | Food discovery by neighborhood and cuisine | Better food discovery | Searchable/listed food hubs | In progress — salvage #263/#266 unique content |
| G2B-013 | Original photography workflow | Distinctive visual assets | Image checklist, credits, responsive variants | Planned |
| G2B-014 | Interactive Busan map | Location-led trip planning | Accessible map and useful place data | Done — English MVP live in fallback mode; embed key pending |
| G2B-015 | Save places and share trip list | Repeat use and sharing | Save/share flow with privacy-safe storage | Planned — assess #263 shortlist before rebuilding |
| G2B-016 | Itinerary builder | Personalized trip planning | Inputs, realistic route output, save/share | Planned |
| G2B-017 | Accommodation area comparison | Improve hotel decision-making | Neighborhood comparison and relevant partner links | In progress — existing neighborhood hubs are foundation |
| G2B-018 | Agoda tracking and hotel CTA optimization | Improve accommodation conversions | Verified attribution and event reporting | Blocked — Agoda approval + GA4 Viewer access |
| G2B-019 | Activity affiliate coverage | Monetize activity intent | Relevant product links and click reporting | Planned |
| G2B-020 | Current-month Busan guide | Timely search and return visits | Dated update process and official sources | Planned |
| G2B-021 | Budget calculator | Practical trip planning | Clear assumptions and editable costs | Planned |
| G2B-022 | Visit Busan Pass value calculator | Help pass purchase decision | Official current prices/terms and transparent calculation | Planned |
| G2B-023 | Nearby day-trip guides | Expand search demand | Practical transport and itinerary guides | Planned |
| G2B-024 | Q&A intake and public FAQ workflow | Discover user needs and answer questions | Moderation and privacy-aware publication flow | Planned |
| G2B-031 | Japanese + Traditional Chinese Busan map | Let JA/TW visitors filter and navigate local places | Localized UI/content/metadata; hreflang, sitemap, search index, 360/390/1280 QA; no duplicated place dataset | Next |

## P2 — Retention and market expansion

| ID | Task | Expected outcome | Acceptance evidence |
|---|---|---|---|
| G2B-025 | Pre-trip email sequence | Repeat visits and trip-preparation value | Consent, unsubscribe, scheduled content |
| G2B-026 | Multilingual social distribution workflow | Social-to-site acquisition | Editorial calendar and tracked links |
| G2B-027 | Visitor contribution and recommendation workflow | More useful local knowledge | Moderation, attribution, anti-spam controls |
| G2B-028 | Expand Japanese and Simplified Chinese intent-led content | Broader market coverage | Localized content briefs and QA |
| G2B-029 | Own downloadable Busan guide | Direct product experiment | Product, delivery, pricing test |
| G2B-030 | Local advertiser media kit and packages | Direct commercial revenue | Audience evidence, disclosure policy, rate-card proposal |

## Immediate execution order

1. Owner decisions: merge #282; decide #275/#277. Clean the duplicate handoff section in #275 before or immediately after its merge.
2. Claude: build JA/TW versions of the existing map (G2B-031), reusing the 28-place dataset and map behavior.
3. Claude: salvage unique content from #263/#266/#269 into focused PRs on current main. Do not merge conflicted branches as-is; avoid duplicate Busan Station late-arrival intent.
4. Owner: complete Maps Embed key, GA4 Viewer access, Claude App/secret/branch protection and Agoda approval when ready.
5. Owner/Claude: finish Search Console requests after quota resets; track request submission and confirmed indexation separately.
6. Claude: add context-sensitive accommodation/activity CTAs to hubs, with disclosure and existing analytics event contracts preserved.

## Definition of done

Every item must have a named user problem, acceptance criteria, source/verification requirements, mobile/accessibility considerations, measurement plan where appropriate, and a PR or documented reason no code change is needed. Do not claim indexation, bookings, revenue, analytics collection, or production deployment based only on code changes.

## Safety and approval

- No merge or deployment without explicit owner approval.
- No paid API usage or external spend without explicit owner approval.
- Never present unvisited/recommended-by-others venues as firsthand visits.

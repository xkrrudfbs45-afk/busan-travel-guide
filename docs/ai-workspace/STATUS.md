# Go2Busan Project Status

_Last updated: 2026-11-12 — Claude (Taiwan plan #359, Phase 0)_

This file is an operational snapshot, not a substitute for checking GitHub and production at the start of each task.

## Known project context

- Repository: `xkrrudfbs45-afk/busan-travel-guide`
- Production site: https://go2busan.com/
- Default branch: `main`
- Site type: multilingual static Busan travel guide.
- Existing languages include English, Japanese, and Traditional Chinese.
- Deployment platform documented in repository README: Render.

## Verified state (2026-11-12, Claude — Taiwan plan Phase 0)

- **main = production:** `19e8150` (go2busan.com/version.txt matches). Baseline, PR triage and measurement findings: `docs/ai-workspace/BASELINE-TAIWAN-2026-11-12.md`.
- **Open Claude PRs:** #362 (KTX integration EN/JA/zh-TW + zh-TW transport facts extracted from #354–#356, CI pending at write time), #364 (zh-TW punctuation and Chinese-first dish names), and this docs PR.
- **Threads:** publisher LIVE; 28 published / 20 missed (Nov 4–10) in `threads-state`; live schedule 180 approved, 75 using the 15-day copy (#350); no duplicate slots.
- **Instagram:** 45 fifteen-day drafts in `schedule.json` (#353) awaiting first render (12:00 UTC run); nothing approved.
- **GA4:** not readable by Claude; connected in OpenSEO by the owner on 11-12; #358 to be re-run by ChatGPT. Analytics is opt-in (consent banner), so GA4 undercounts.
- **Affiliate:** `affiliate_click` verified in a local test (EN, JA). zh-TW has affiliate links on only 3 of 48 guides.
- **Search Console:** 7 days to 11-09: 2 clicks / 353 impressions / pos 17.7. Taiwan 32 of 249 impressions (28 days to 11-08).

## Verified state (2026-11-12, Claude — earlier)

- **Merged with owner approval (11-11/12):** #334 + #336 (Threads cron `7 0,11,12,13,22,23`, 12h stale-retry guard, post-event fireworks pages), #337 + #338 + #339 (skyline hero, zh-TW hero first), #340 (JA/TW travel-decision components), #342 (US Threads copy). #343 (15-day social drafts) merged by another agent.
- **Design refresh:** issue #344 (owner-approved spec + benchmark), PR #345 draft (homepage). Owner decisions: palette #0066FF / #0A192F / #FF4757; "Run by a Busan local" only (no name/job); EN header affiliate links (Agoda, Klook pass, transit) must stay.
- **15-day social drafts (nov12-26):** still draft/needs_check; this follow-up removes repeated Instagram carousels, adds captions' AI disclosure + hashtags, maps neighborhood/rainy/etiquette/coastal themes to dedicated guides, sets US evening Threads to 18:00 ET (20:00 ET = 01:00Z is outside the publisher cron), and adds `bio_link_url` with UTM. Activation still needs: owner replacement plan for the overlapping live 30-day schedule, rendered assets, fact checks.

## Verified state (2026-11-06, Claude)

- **main / production:** `197b438`. Merged with owner approval and deployed on 2026-11-06: #274, #278, #276, #280, #281. `go2busan.com/version.txt` = `197b438`. Live checks: map (28 places, link fallback until the Maps key is set; `?area=nampo` → 6), four EN neighborhood hubs, JA/TW Haeundae and Seomyeon hubs (lang + hreflang).
- **Open PRs by other agents:** #275 (ChatGPT docs) and #277 (Codex JA/TW nav) merge cleanly and pass all audits together, but Claude's merge attempt was blocked by the session safety layer because Claude did not author them; owner merges or approves them by number. #275 appends a second full copy of HANDOFF.md, so clean up after it merges.
- **Conflicting PRs:** #263 (search-index, neighborhood food guide), #266 draft (neighborhood food guide), #269 (search-index, where-to-stay EN/JA/TW; also the late-arrival duplicate entry). Need rebasing onto main.
- **Technical SEO:** sitemap lastmod on all URLs; robots OK; guides within 2 clicks; built-page overflow at 360/390 = 0. Gap is index coverage, not structure.
- **Search Console:** indexing requested 2026-11-06 for 7 core URLs, then the map, Haeundae, Seomyeon and Nampo hubs. Quota hit at the Gwangalli hub; remaining: Gwangalli hub and the JA/TW hubs.
- **Affiliate:** Klook CTAs with `affiliate_cta_view`; `affiliate_click` unchanged. Agoda pending. Clicks are not bookings.
- **GA4:** owner needs to add Viewer access for Claude's browser account.

## Open PRs from Claude (not merged)

- **zh-TW + JA Klook CTAs (build-time, 2026-11-12)** — `content/affiliate/{zh-tw,ja}-cta.json` + `scripts/inject-affiliate-cta.mjs` add 5 CTAs per language (Haeundae/Gwangalli/Seomyeon hubs, things-to-do, three-days) to the built site only; page HTML untouched. Destinations/aff_adid mirror the EN pages; zh-TW and ja Klook URLs checked 200 on klook.com. CI runs `--check`. Not merged.
- **JA/TW Nampo-dong and Gwangalli hubs** (this PR) — completes the four hubs in all three languages; audits pass; 360/390/1280 checked.

## Waiting on the owner

- Claude Code action (#276): GitHub App, `CLAUDE_CODE_OAUTH_TOKEN` (or `ANTHROPIC_API_KEY`), protect `main`.
- Live map (#278): Maps Embed API key restricted to go2busan.com → Render `GOOGLE_MAPS_EMBED_KEY` (owner will do this).
- Native review of JA/TW hub text.

## Status categories

Use one of:
- `Not started`
- `In progress`
- `Blocked`
- `Ready for review`
- `Done`
- `Deferred`

## Work tracking

| Workstream | Status | Owner | Evidence / next action |
|---|---|---|---|
| Shared AI workspace | Done | ChatGPT | #271 merged by owner |
| PR #269 validation | Ready for review | Owner | Mergeable, audits pass; update branch + resolve late-arrival duplicate first |
| Technical SEO audit | Done | Claude | No structural blockers; keep daily indexing requests |
| Taiwan content plan | Not started | ChatGPT + Claude | Inspect existing Traditional Chinese pages first |
| Four neighborhood hubs | In progress | Claude | EN ×4 live; JA/TW Haeundae + Seomyeon live (#281); JA/TW Nampo + Gwangalli in open PR |
| Claude GitHub automation | Blocked | Owner | #276 merged; Install Claude GitHub App, add secret, protect main |
| Busan map MVP (#273) | Done (link fallback) | Owner | #278 live; interactive map needs Maps Embed key in Render |
| Affiliate measurement | Blocked | Owner | Code done (#268/#270); GA4 Viewer access needed to verify live events |

Update this table after each meaningful work session. Include PR numbers, commit SHAs, test results, and blockers where known.


## Verified state (2026-11-13, ChatGPT — editorial design Phase 1)

- **PR #404:** [Establish premium Go2Busan editorial design system — Phase 1](https://github.com/xkrrudfbs45-afk/busan-travel-guide/pull/404), open Draft, base main, branch design/busan-editorial-system-phase1-20261113. Three commits ahead of main; zero commits behind at last comparison. Not merged or deployed.
- **Changed files:** assets/styles.css (shared non-homepage editorial styling), assets/editorial-design-system.css (reusable tokens/components for later template adoption), and docs/design/GO2BUSAN-EDITORIAL-DESIGN-SYSTEM.md.
- **CI evidence:** GitHub Actions run 43424881559, Technical SEO audit, completed successfully. Its public-site build and dependency-free audit steps both succeeded. This is not a substitute for visual QA.
- **Template coverage checked:** EN/JA/zh-TW guide index pages all load /assets/styles.css and contain the directory classes targeted by Phase 1. Homepage has a separate homepage-editorial.css system and remains intentionally outside the non-homepage selector scope.
- **Not yet verified:** screenshots or browser rendering at 360/390/768/1280; individual restaurant/neighborhood pages across all languages; keyboard/focus/contrast review; production deployment SHA/version. Do not describe the visual rollout as complete.
- **Next:** perform representative page/template QA, then build the food/place detail-page module as a separate reviewed phase. Owner approval is required before merge/deploy.


## Full-site editorial redesign — 2026-11-13 (ChatGPT)

- **Status:** In progress; Draft PR to be reviewed. This is a shared visual-system rollout, not a claim that every page has received bespoke layout work.
- **Branch:** `design/full-site-editorial-redesign-20261113`.
- **Implemented:** appended a unified non-homepage editorial layer to `assets/styles.css`, covering shared header/language controls, article hero/deck/meta, reading column and headings, cover imagery/credits, callouts, jump navigation, directory cards, sidebars, tables, footer, keyboard focus and reduced-motion behavior. Existing homepage EN/JA/zh-TW showcase styles remain isolated via `.home-refresh` and are not overridden by this layer.
- **Preserved by design:** page content, routes, canonical/hreflang, JSON-LD, analytics scripts, affiliate destinations and image attribution are not intentionally changed in this CSS-only rollout.
- **Not yet verified:** production screenshots, full 360/390/768/1280 visual QA across page templates and all three locales, build/SEO audits on the final PR head, and visual interaction checks. Do not merge or deploy until these pass and owner approves.
- **Next:** Claude verification-only review; expand page-specific layout and image modules after template inventory, without changing facts or inventing venue details.


### Full-site redesign progress — additional module pass (2026-11-13)
- Extended shared styles for guide-directory link rows, local-food scorecards, verification badges, local-tip panels, sidebar cards and FAQ accordions.
- Refreshed the Busan Map page's inline module styles: map panel, category filters, place cards, selected state, action controls, sticky desktop map and mobile filter scrolling. No map data, place claims, links or behavior changed.
- Static source sanity check: shared stylesheet brace counts balanced (1,264 opening / 1,264 closing); map HTML closes correctly and retains its script block. This is not a substitute for build/CI or browser QA.
- PR #406 remains Draft and unmerged. CI must be checked against the latest head after these commits.


## Claude functional QA and corrective pass — 2026-11-13

- Claude's browser QA of PRs #404/#405/#406: build and 13/13 CI audits passed on the inspected #406 head; canonical, hreflang, JSON-LD, analytics, consent and affiliate links unchanged. Chromium review covered 360/390/768/1280 across EN/JA/zh-TW home, guide index, food, area, transit and article templates.
- Verified defects reported: homepage mobile-menu contrast/visibility and Escape behavior; EN Dongnae card used a Nampo photo with Dongnae alt/credit; incorrect Gwangan Bridge credit; fake "Watch Busan in 1 Min" anchor; JA/zh-TW quick links misrouted; header control overlap; untranslated JA/zh-TW homepage labels; CJK heading breaks; incomplete reduced-motion rules. Inner-page mobile navigation remains a separate follow-up.
- ChatGPT corrective pass on this branch: corrected the Dongnae photo to the registered Bukmun image and restored its matching photographer credit; corrected Gwangan Bridge credit to Glabb / Public domain across EN/JA/zh-TW; replaced the fake video CTA with a real guide link; fixed JA/zh-TW airport and transit quick links; localized homepage section labels; added mobile nav contrast/visibility and Escape-key close behavior, CJK word-break safeguards and comprehensive reduced-motion overrides.
- Claude's image-crop check was blocked because Wikimedia images did not load in its sandbox. Real-device and Lighthouse/CWV checks were not performed. Do not claim these as passed.
- Current branch requires a fresh build and full CI run after the corrective commits. PR #406 remains Draft, unmerged and undeployed.
- SEO strategy correction: do not add FAQ/HowTo markup solely to chase Google rich results. Google removed FAQ rich results in May 2026 and deprecated HowTo rich results; retain visible useful Q&A content, accurate Article/BreadcrumbList and other page-relevant schema. Source: https://developers.google.com/search/updates.


## Full visual direction implementation — 2026-11-13 (homepage composition batch)

- Implemented one coordinated EN/JA/zh-TW homepage composition inspired by the approved BUSAN EDITORIAL mockup: panoramic Gwangan Bridge hero, six quick category tiles, asymmetric editorial bento picks, booking/experience cards, local photo-spot links, social share actions and a mobile sticky Busan Map / Busan Pass dock.
- Added localized conversion panels for Visit Busan Pass, accommodation discovery and a large Korean taxi show-card with copy action. Taxi text: `해운대 블루라인파크 청사포역으로 가주세요`.
- Repositioned conversion and sharing modules directly below Editor's Picks; preserved existing seasonal stories, neighborhood planner, content and analytics.
- Updated homepage stylesheet cache-busting query strings and refined desktop hero proportions, card grid and mobile responsive layouts.
- Corrected booking/map destinations to existing project routes where identified. Klook uses the project's existing Visit Busan Pass affiliate destination; Agoda uses the existing Busan city listing.
- The new homepage additions are localized for English, Japanese and Traditional Chinese. The wider shared editorial layer from the same PR continues to style article, directory, guide and map page families.
- No generated screenshot was substituted for live content photography. The homepage hero retains the existing Wikimedia Busan skyline/Gwangan Bridge image; editorial cards retain existing credited destination images. Generated design mockups were created as visual references only and must not be presented as documentary Busan photography.
- Static source checks: each localized homepage has balanced main tags; booking/share/taxi modules appear before seasonal content; mobile dock, taxi copy action and share action are present; no invalid pass-guide path remains. Browser, build and CI still need a fresh run on the latest head.
- PR #406 remains Draft, unmerged and undeployed.


## Multilingual guide directory and shared editorial batch — 2026-11-13

- Extended the shared non-homepage editorial layer for EN, JA and zh-TW guide/article templates: balanced multilingual headings, cover and figure sizing, image captions, article blockquotes/dividers, responsive callouts, directory navigation and reduced-motion behavior.
- Completed a dedicated visual polish pass on all three travel-guide directory pages: editorial card surfaces, accent rail, refined typography, separated link rows, clear hover states and horizontally scrollable mobile category navigation.
- Refreshed the shared stylesheet cache key on EN/JA/zh-TW guide directory pages to `20261113-directory-polish` so all three receive the current design.
- Static internal-link audit of the three guide directories: EN 74, JA 54 and zh-TW 57 unique internal destinations checked; no missing local targets found in the repository tree.
- This is source/static verification only. Latest-head build, 13 audits and browser QA at 360/390/768/1280 remain pending. PR #406 remains Draft, unmerged and undeployed.


## Homepage QA correction batch — 2026-11-13
- Fixed the mobile homepage navigation so all navigation links are available when the menu is opened, while the closed mobile header keeps the navigation out of the crowded header row.
- Added Japanese-specific natural line wrapping to avoid the reported 360/390px and desktop heading overflow.
- Standardized outbound booking-link rel attributes to sponsored nofollow noopener noreferrer across EN / JA / zh-TW.
- Added a concise, localized affiliate disclosure directly beneath the homepage booking cards in all three locales.
- Corrected the Korean taxi destination phrase to “해운대 블루라인파크 청사포정거장으로 가주세요” in the three localized homepages and their copy actions.
- Agoda homepage links still use the generic Busan landing URL without a verified account-specific cid; no tracking parameter was fabricated. Japanese and Traditional Chinese Klook links still point to the existing en-US activity destination and require verified locale-specific destinations before changing.
- Verification status: code updated; fresh build, audit and browser QA are pending on the latest branch head. PR remains Draft; no merge or deployment.


## Responsive and food/transport page batch — 2026-11-14
- Refined homepage header spacing at tablet/mobile widths to separate the search control and language pills; retained all locale links.
- Refined Japanese homepage hero title width and line treatment to keep punctuation away from the viewport edge.
- Added safe-area-aware footer clearance beneath the fixed mobile travel dock on localized homepages.
- Added tablet-specific no-wrap rules for language switchers on non-homepage guide pages, including Traditional Chinese.
- Updated stylesheet cache keys on the homepage, guide directories and selected food/transport pages in EN / JA / zh-TW where the files were successfully updated. A final pass is still needed for the two localized transit-card pages whose cache key was not updated in this batch.
- Reviewed food guide content structure: neighborhood-led choices, dish context, practical cautions, scorecard caveat and image source/license captions are present in sampled EN/JA/zh-TW pages. Reviewed transit-card pages: practical card/transfer guidance and locale-specific Article metadata are present; no speculative fare values or unverified route claims added.
- Verification is pending against the latest head. Claude should retest the prior 360/390/768/1280 findings and verify food/transport page templates. PR remains Draft; no merge/deploy.


## Follow-up batch — 2026-11-14 (ChatGPT)

Applied to the existing #406 Draft branch; no overlapping PR created.

- Tablet header (561–820px): moved non-homepage navigation to a dedicated second row, preserving utility/language controls and preventing nav labels from colliding with search/bookmark/language controls.
- Japanese homepage hero: constrained the heading width and enabled balanced, strict Japanese line breaking so punctuation no longer hugs the viewport edge at desktop widths.
- Mobile travel dock: increased footer bottom clearance on EN/JA/zh-TW homepages, including device safe-area inset, to keep the final footer links tappable and visible above the fixed dock.
- Homepage photography: refined the per-card focal positions for the four editorial picks; source images and verified credits remain unchanged.
- Bumped homepage stylesheet cache keys on all three locale homepages to `20261114-visual-batch2`.

Pending: build, full audit suite, and cross-locale browser QA at 360/390/768/1280. Keep Draft; do not merge or deploy until verified.

- Responsive hero preload: split preload hints by viewport in EN/JA/zh-TW. Desktop/tablet preloads the 1800 request (1920px delivery tier); phones preload the same 1000 request used by the mobile hero CSS, avoiding a desktop-sized LCP preload on small screens.

# Go2Busan Project Status

_Last updated: 2026-11-12 — ChatGPT growth run / Claude handoff_
_Last updated: 2026-11-14 — ChatGPT (practical local-experience batch)_

This file is an operational snapshot, not a substitute for checking GitHub and production at the start of each task.

## Verified state (2026-11-12, ChatGPT growth run)

- **GitHub main:** `60146784d5563ed4628afcb8c58eb272028ed536` (confirmed through the main branch API; commit time 2026-11-12 10:32:18 UTC). PR #383, “Image quality batch 1,” merged at that time. Its Technical SEO audit and Growth ops checks completed successfully.
- **Production deployment:** not verified in this run. The public `/version.txt` endpoint could not be read, and no Render workspace was selected. Do not treat the GitHub main SHA as a confirmed production SHA.
- **Search Console (2026-10-13–2026-11-09):** 353 impressions / 2 clicks overall. Taiwan 43 impressions, 0 clicks, average position 19.4; USA 28 / 0 / 26.2; Japan 20 / 0 / 8.5. These market samples are small.
- **GA4 (2026-10-15–2026-11-11, Asia/Seoul):** 40 sessions / 8 active users; direct 26, ChatGPT 9, (not set) 3, Google organic 1, Instagram referral 1. `affiliate_click` 5 key events / 3 users; transactions 0 and purchase revenue 0. The recorded country breakdown contains South Korea only; analytics is opt-in, so this is not proof that overseas visitors are absent.
- **Organic measurement:** one organic session in the period. GSC–GA4 opportunity matching is sparse (1 matched GSC page; 42 unmatched GSC pages), so opportunity scores must not be treated as conversion or revenue evidence.
- **Site audit:** 50-page crawl completed; 50 pages returned HTTP 200; zero missing-alt findings among crawled pages. The crawl stopped at its 50-page limit with 127 URLs not crawled. The audit found 17 long titles, 10 short meta descriptions, 7 long meta descriptions, one heading-order skip, and the page-limit warning. A second Lighthouse-enabled audit completed 20/20 Lighthouse runs with 0 failures, but the available result endpoints exposed only completion counts—not numeric Lighthouse/Core Web Vitals metrics. Performance scores therefore remain unverified. Neither crawl verifies image licensing, visual crop, or actual OG rendering.
- **Open PR portfolio:** 46 open PRs were visible. Confirmed file overlap: #320/#311 share the JA and zh-TW PNU food-guide HTML files; #314/#315 share the EN Haeundae food guide; #316/#321 overlap on 31 files. Consolidate and rebase before creating parallel content/metadata work.
- **Image quality:** PR #383 is merged in main. Its pre-merge audit baseline (175 indexable pages) found body-photo gaps on 40/49 zh-TW guides, 33/67 EN guides, and 39/47 JA guides; generic skyline share-image fallback on 18 zh-TW, 23 EN, and 18 JA pages; and five EN first-screen covers using lazy loading. #383 fixed the seven core zh-TW/JA guide covers, Seomyeon share images in all three languages, and EN cover loading priority. These counts are pre-#383 baseline, not current remaining counts. Next candidates: zh-TW/JA first-trip, taiwan-travelers-busan, things-to-do-in-busan; EN dialect/local-culture/Bukangi/things-to-do illustration-vs-photo decisions; Bukmun image marked needs_review; repeated Gimhae/Haeundae photos. PR #382 remains a Draft policy/document PR. PR #320 needs consolidation with #311 before JA/TW PNU image work is considered complete.

### Next actions
1. Rebase and consolidate overlapping PRs before new content creation.
2. Prioritize Taiwan landing-page discovery and existing stay/itinerary/transport guide connections, while maintaining English and Japanese coverage.
3. Re-audit image gaps after #383 using the pre-merge baseline in IMAGE-AUDIT-2026-11-12.md; prioritize first-trip, Taiwan traveler, things-to-do, EN illustration/photo choices, Bukmun needs_review, and image reuse.
4. Obtain numeric Lighthouse/Core Web Vitals metrics through a report view or separate test; manual visual/image-source checks remain open. Do not infer these from the 50-page crawl.
5. Keep bookings and revenue unverified until partner-side conversion data is available.

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

## PR #297 — PNU food guide, Gaya Park pork soup (Claude, 2026-11-06)

- **Fixed:** JA `<title>`/og:title/twitter:title/Article headline 5選→6選 (now match the H1); `search-index.json` JA and zh-TW titles/tags/summaries now say 6 and mention the Gaya Park pork soup; JA and zh-TW meta descriptions mention it too. zh-TW og/twitter/headline were already 6.
- **Checked by reading only:** no remaining "5選/5 選" in the JA/zh-TW pages. Gaya Park is a user recommendation; no hours, prices or visit claims added.
- **Not verified:** build and the 11 audits were not run in this session (Bash approval); rely on the PR's GitHub Actions results. 360px/390px overflow: **not verified**. EN/JA/zh-TW body text not native-reviewed. Not merged, not deployed.

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


## Homepage design batch 3 — 2026-11-14 (10 grouped improvements)
- Matched the mobile hero CSS background to the 1000px image preload; retained the desktop 1800 request.
- Normalized remaining oversized homepage neighborhood/editorial image requests (1200/1400) to 960 where those card dimensions are used.
- Improved editorial photo-credit chips, bento card crop/focus treatment and locale-safe title wrapping.
- Reworked the narrow-phone discovery shortcut bar into a thumb-friendly horizontal snap rail.
- Refined mobile bento hierarchy and neighborhood photo-card hover/focus behavior.
- Standardized seasonal-event card image framing, spacing and interaction states.
- Added a dedicated responsive editorial treatment to the Traditional Chinese Taiwan-traveler feature panel.
- Updated all three homepage stylesheet cache keys to `20261114-visual-batch3`.
- Preserved photo subjects, attribution text/links, routes, article copy, canonical/hreflang, metadata, JSON-LD, analytics and affiliate destinations.
- Verification is pending on this exact head: build, technical audits and Playwright screenshots at 360/390/768/1280. PR #406 remains Draft; no merge or deployment.


## Homepage design batch 4 — 2026-11-14 (10 coordinated refinements)
- Unified hero composition, copy width and headline wrapping across EN / JA / Traditional Chinese.
- Clarified hero primary/secondary actions and improved touch/keyboard states.
- Improved search field affordance, focus visibility and minimum touch target.
- Aligned desktop header logo, navigation and utility controls.
- Refined discovery shortcut icon/label alignment and focus states.
- Improved editorial bento card layering, title and photo-credit placement.
- Strengthened booking/planning card hierarchy, hover and focus treatment.
- Standardized destination photo caption behavior and image container sizing.
- Refined seasonal event and FAQ card typography, rhythm and interaction.
- Added responsive adjustments for narrow phones and CJK line wrapping; bumped all three homepage stylesheet cache keys to `20261114-visual-batch4`.

Preserved existing images, attribution records, page copy, routes, canonical/hreflang, metadata, JSON-LD, analytics and affiliate destinations. Verification on this exact head is pending; keep PR #406 Draft and do not merge/deploy before CI and visual QA.


## Busan Now winter refresh — 2026-11-14
- Replaced the English homepage's Bukangi-first Busan Now feature with a seasonal visitor-interest feature covering Millak Luce Festa, Busan Christmas Village and Haeundae Light Festival; added equivalent native Japanese and Traditional Chinese sections.
- Expanded the existing Things to Do in Busan guide in EN / JA / zh-TW with five useful experiences: three official winter events, ARTE MUSEUM Busan and Haewol Observatory.
- Added verified date windows, admission status, official information links and map links; avoided presenting generic Gwangalli photography as festival imagery.
- Added adjacent attribution for the Gwangalli Beach and Gwangan Bridge photo (Masterhatch, CC BY-SA 4.0), and refined the responsive Busan Now feature layout.
- Updated the shared search index tags and November acquisition playbook with verified facts and editorial guardrails.
- Previous homepage design batch 4 exact-head Technical SEO workflow `43525561647` passed. The Busan Now refresh is a later change and still requires its own CI and visual QA.
- These new commits are additional to merged PR #406 and need a separate PR against main; do not treat them as deployed.


## Evergreen Busan experiences — 2026-11-14
- Added a three-card editorial discovery row to EN / JA / Traditional Chinese homepages: Yeongdo coast, Busan night views and BTS public fan route.
- Expanded all three Things to Do in Busan guides with dedicated Yeongdo coastal walk, night-view and BTS route sections, localized for Japanese and Traditional Chinese readers.
- Added official tourism references, map links, residential-neighborhood etiquette, and explicit seasonal Saturday schedule for the Gwangalli M Drone Light Show.
- Added three verified Wikimedia Commons photos with visible author/license credits; responsive desktop grid becomes a swipeable snap rail on mobile.
- Expanded search-index keywords for Yeongdo, Hwangnyeongsan, Cheonghak Reservoir, Gwangalli drone show and BTS fan searches.
- This is a stacked follow-up to Draft PR #407; its base is the #407 branch so the two batches can merge in order without conflicting homepage edits. No merge or production deployment.
- Exact-head CI and screenshot QA pending.

- Added the Gwangalli M Drone Light Show to Busan Now in all three locales with the 2026 winter Saturday times (19:00 / 21:00), free admission note, official schedule link and weather-change caveat.
- Registered the Huinnyeoul (Choi2451 / CC0 1.0) and Gwangalli night (Carey Ciuro / CC BY 2.0) images in `assets/data/image-credits.json` after license verification; social metadata for the expanded guide now matches its new subject coverage.
- Initial exact-head build passed; strict audit identified two missing image registry records. Registry entries and Busan Now callouts have now been corrected; rerun CI before considering this batch verified.


## Visitor-question content batch — 2026-11-14 (ChatGPT)
- Updated the existing transit-card guides in EN / JA / zh-TW with the 2026 Busan city-bus ZeroPay QR option, its KRW 1,700 per-person fare and lack of transfer discount; clearly separated bus QR payment from metro transit-card use and avoided promising universal Apple Pay / Google Pay acceptance.
- Expanded the Jagalchi market guides in all three locales with the first-floor seafood purchase → second-floor chojangjib dining flow, variable table/preparation charges and questions to ask before ordering.
- Expanded rainy-day guides in EN / JA / zh-TW with official links for ARTE MUSEUM Busan, F1963 and Spa Land; hours, admission and last entry remain subject to venue confirmation.
- Source anchors: Busan City ZeroPay notice (2026-10-08) https://www.busan.go.kr/eng/bsnews01/1758410 ; Visit Busan transit guide https://www.visitbusan.net/en/index.do?menuCd=DOM_000000303012002000 ; Busan Metro transfer rules https://data.humetro.busan.kr/homepage/english/page/subLocation.do?menu_no=100601040202 ; Busan City Jagalchi guide https://www.busan.go.kr/bige/food/view?bbsNo=10&dataNo=70537&srchCl=Food .
- Draft branch remains PR #408, stacked on #407. No merge or production deployment. Exact-head CI must be rerun after this batch; visual browser QA remains separate.
- Next: verify the newly expanded sections in all three locales, then handle Geumjeongsanseong, Mipo access, Songdo weather, milmyeon ordering and BIFF Square cash/card caveats in a separate grouped pass.


## Owner-controlled execution and PR #297 follow-up — 2026-11-07 (ChatGPT)

- **Automation paused:** the recurring Go2Busan weekly review is disabled at the owner's request. No new Claude runs will be triggered unless the owner explicitly asks for Claude on a specific task.
- **Claude guardrail:** added a project-owner execution gate to `CLAUDE.md` on the PR #297 branch. It requires explicit task-specific invocation and immediate stop on owner instruction; no self-triggering or scheduled Claude work.
- **PR #297 metadata consistency:** EN/JA/zh-TW meta descriptions, Open Graph descriptions, Twitter descriptions where present, Article descriptions, and all three language search-index entries now identify Gaya Park pork soup as part of the six-place guide.
- **Verification:** Claude's latest report says `sh scripts/build-static.sh` passed. The Technical SEO audit workflow for commit `2d880ca` is `action_required` (no completed audit result available). 360px/390px overflow remains unverified. This follow-up text-only metadata change has not yet had a fresh build.
- **Release state:** PR #297 remains open and unmerged. Production deployment has not been requested or performed.


## PR #297 mobile navigation follow-up — 2026-11-07 (ChatGPT)

- Updated EN/JA/zh-TW Pusan National University food guide deck copy to describe all six food choices, including Gaya Park pork soup.
- Completed JA and zh-TW quick-jump navigation: added links to New Charcoal Tongdak and Hoho Chicken House; confirmed each quick-jump fragment points to an existing section ID. EN quick-jump already covered all six.
- Added a mobile-only horizontally scrollable quick-jump row (<=680px) with non-shrinking links and scroll snapping to avoid a tall wrapped navigation block.
- Latest PR head: `d981226a176dacb398ff162f1a58640133e918af`. Technical SEO audit passed on earlier head `8887e94`; no CI status checks or fresh workflow run are currently reported for the latest head. 360px/390px visual viewport testing and fresh build remain unverified.
- PR #297 remains open, unmerged and undeployed. No production change made.


## Search visibility check + Nampo food SEO update — 2026-11-07

### Visibility evidence
- The latest available Search Console figures previously shared by the owner (Nov 3) showed 0 impressions and 0 clicks for the last 28 days while data processing was still underway. No newer Search Console report is connected/available in this session; do not claim an upward trend.
- Public search queries for `site:go2busan.com` did not return a clear Go2Busan result in the sampled web search. This is a discovery spot-check, not a definitive Google index report.
- Render HTTP request metrics for Oct 8–Nov 7 returned no data points; they cannot be used as traffic evidence.
- Repository sitemap contains 167 URLs; all hreflang targets referenced in the sitemap resolve to a URL present in the same sitemap (0 broken targets). 26 URL entries have no hreflang alternates, generally single-language content or localized-only pages; review individually before changing.

### Nampo content changes on this PR branch
- Expanded EN/JA/zh-TW Nampo neighborhood guide food sections with three relevant local tips: Nampo Jjukkumi, the BIFF Square Nampo branch of 18beon Wandangjip, and Kkangtong Golmok Halmae Yubu Jeongol Main Store.
- Added Google Maps search links and translated long-tail search tags in `assets/data/search-index.json`.
- Avoids publishing opening hours/prices. The yubu-jeongol restaurant is described as a local tip with a reminder to check current service; no claim that the editor visited it.
- Validated the three page language attributes, presence of the three restaurant names in all versions, no broken in-page anchors, and JSON parsing of the 131-record search index.

### Release / validation
- PR #297 remains open and unmerged. Latest head at this note: `52969674e03a053c9c6fc6dfcdd898d0b4443104`; mergeable true at last check.
- No CI status checks are currently reported for the latest head. Earlier Technical SEO audit success applies only to the earlier commit `8887e94...`; it is not a fresh pass for these changes.
- No merge or production deployment performed.
- Next: finish technical title/meta/OG/JSON-LD/search-index alignment for the revised Geumjeongsanseong page, rerun exact-head CI and 360/390/1280 visual QA, then review remaining BIFF Square cash/card caveats. Do not duplicate the completed Mipo, Songdo or milmyeon work.


## Practical local-experience content batch — 2026-11-14 (ChatGPT)
- Expanded Busan milmyeon history guide in EN / JA / zh-TW with a practical first-time eating section: mul vs bibim, taste before seasoning, vinegar/mustard optional, gradual spice adjustment, scissors, Korean phrases and wheat / meat-stock dietary notes.
- Expanded Geumjeongsanseong village food guide in EN / JA / zh-TW using the official Visit Busan listing for Sanseongjip (black-goat charcoal grill, duck bulgogi, native chicken, acorn jelly and seasonal mountain greens) and the Busan City makgeolli page. Menu items are attributed to that specific restaurant, not generalized across the village. Official route pages differ on bus 203 / 90 stop names (Geopark Korean vs Geumjeong-gu English); the guide links both and tells readers to confirm the stop for their chosen trail.
- Expanded Things to Do in Busan in EN / JA / zh-TW with Mipo Station access: Jung-dong Station Exit 7, 15–20 minute walk allowance; listed local buses; no unsupported claim that the parking lot is always full.
- Expanded Songdo Beach guide with live cable-car status, seasonal hours, ticket cutoff and weather suspension caveats; no invented wind-speed threshold.
- Updated search-index metadata and tags for new practical queries across 10 page/index files.
- Added social draft pack at content/social/2026-11-14-practical-local-experience-drafts.md. Draft only; no scheduled posts or publisher settings changed.
- Official sources: Busan Geopark Korean route page https://www.busan.go.kr/geopark/geumjeongsan ; Busan Geopark English trail page https://www.busan.go.kr/geopark_en/geumjeongsan ; Geumjeong-gu English transport page https://www.geumjeong.go.kr/index.geumj?menuCd=DOM_000001302001001004 ; Visit Busan / Sanseongjip listing https://www.visitbusan.net/index.do?menuCd=DOM_000000201002001000&uc_seq=561 ; Busan City / Geumjeongsanseong Makgeolli https://www.busan.go.kr/depart/ahliquor ; Haeundae Blueline Park https://www.bluelinepark.com/eng/mapList.do ; Visit Busan / Mipo access https://www.visitbusan.net/en/index.do?lang_cd=en&menuCd=DOM_000000303011001000&uc_seq=1026 ; Busan Air Cruise live status https://en.busanaircruise.co.kr/info/use ; seasonal hours https://en.busanaircruise.co.kr/info/time ; Busan City milmyeon history https://www.busan.go.kr/bige/food/view?bbsNo=10&dataNo=69886&srchCl=Food .
- New PR based on main. Draft only; exact-head CI, link checks and browser QA required. No merge or deployment.


## Busan Now homepage readability and event image review (2026-11-14)
- Opened a focused draft branch to fix the Winter 2026 Busan Now block: replaced low-contrast dark teal styling with a warm off-white panel, dark body copy, high-contrast date rows and a dark CTA; mobile typography and poster fit are explicitly adjusted.
- Found the organizer's official Christmas Village Busan 2026 poster (Market Chango, event dates Nov 26–Dec 25) and used it as the seasonal visual rather than the unrelated Gwangalli skyline.
- Important rights gate: the organizer page does not state image reuse or commercial-use terms. The poster is registered as `needs_review`; it must not be merged/deployed until written permission or a properly licensed alternative is confirmed.
- Official event date references: Busan City calendar for Millak Luce Festa (Nov 14, 2026–Jan 10, 2027) and Haeundae Light Festival (Nov 28, 2026–Jan 10, 2027); organizer page for Christmas Village Busan 2026.
- Visual browser QA at 360/390/768/1280 remains outstanding.


## Additional winter-event image research (2026-11-14)
- Confirmed official Busan City event listings and date windows for the 3rd Millak Luce Festa (Nov 14, 2026–Jan 10, 2027) and 13th Haeundae Light Festival (Nov 28, 2026–Jan 10, 2027).
- Located event-specific visual candidates: Suyeong District Office illustration for the 2026 Millak Luce Festa (reported by Haps on Nov 12); official Busan City Haeundae 2026 event poster; Market Chango's Christmas Village Busan 2026 poster.
- Rights review: the Market Chango page does not state reuse terms; the Haps-hosted Suyeong District illustration and Busan City event poster also need explicit license confirmation before local hosting or commercial reuse. Do not copy images from the publishers' pages into production merely because they are publicly viewable.
- The previous Millak Luce Festa official photo-gallery item is marked KOGL Type 2 (non-commercial use only), so it is not a suitable default for a potentially commercial travel site.
- Kept the 2026 Christmas Village poster on the draft only, registered as `needs_review`; it remains a hard merge/deploy blocker pending permission or replacement with a verified commercially reusable image.
- Fixed invalid nested-anchor markup in the visual credit so the source link is independently clickable.
- Exact-head SEO audit passed; screenshot QA at 360/390/768/1280 remains outstanding.


### Busan Now winter contrast refresh — 2026-11-14
- Rebased the contrast-only follow-up on current `main` after PR #413 became stale against later homepage/content integrations.
- Restyled the winter panel to a warm off-white surface with dark body copy, stronger event-date emphasis, and a high-contrast CTA; retained the current main-branch Wikimedia Gwangalli night photograph and its existing credit rather than reintroducing the unlicensed Christmas Village poster.
- Mobile adjustments preserve the current photo crop and credit while increasing copy readability.
- PR #413 is superseded for the contrast change; do not merge it. Its poster remains rights-unverified.
- Validation still required on this new head: exact-head CI, mergeability, and screenshots at 360 / 390 / 768 / 1280. No merge or production deployment performed.

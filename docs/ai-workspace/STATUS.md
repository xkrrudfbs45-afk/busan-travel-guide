## Current verified production and PR state — 2026-11-17 14:15 KST (ChatGPT)

- Main SHA: `af35154405aecc6e520ce6a7d38877d829067f86` (PR #510).
- Main Technical SEO audit run #44003848364 completed successfully. Render deploy workflow run #44003912824 completed successfully on the same SHA.
- The deploy job triggered Render with HTTP 200, observed `version.txt` change from `ab6870dd289d44301d163211ae03385d2419ef49` to the main SHA, and confirmed live/main SHA equality. Directory cache checks passed for `/`, `/ja/`, `/zh-tw/`, and `/guides/`.
- Production smoke checks: 10 required endpoints returned HTTP 200; protected repository files returned the expected HTTP 404; all 244 sitemap URLs returned HTTP 200. IndexNow accepted 120 URLs updated since 2026-11-15 with HTTP 200. This is verified from GitHub Actions run #44003912824 logs.
- Merged into main: #498 (multilingual map generator), #501 (JA/zh-TW first-trip arrival checklist), #503 (taxi fares / 1330 visitor help / winter event accuracy), #504 (taxi-fare SVG illustrations), #505 (city-bus luggage limits and expired suitcase pilot), #507 (G-STAR 2026 localized guide and Gwangalli schedule integration), #508 (licensed Taiwan food-history photos and social previews), and #510 (Threads publisher backup runs).
- PR #506 was closed unmerged and superseded by #507. Do not report #506 as open or deployed.
- Open Draft PR #511: https://github.com/xkrrudfbs45-afk/busan-travel-guide/pull/511. It updates the existing Haeundae Blue Line Park sold-out guide and Visit Busan Pass guide in EN / JA / zh-TW, adds a subject-matched Sky Capsule photo with visible CC BY-SA 4.0 attribution, distinguishes the Beach Train benefit from the separately paid Sky Capsule, and records both the first-boarding-after-18:00-KST exception and the same-day / one-boarding-per-station limit. Exact-head Technical SEO run #1705 passed on `01cfeceec055ea6080dda87bd56adf8609c595f6`. PR base is `ab6870dd`, behind main by #510 but currently mergeable. No merge or deployment.
- Open Draft PR #512: https://github.com/xkrrudfbs45-afk/busan-travel-guide/pull/512. Adds a device-local, cross-language first-trip checklist with progress persistence and graceful handling when browser storage is blocked. Exact-head Technical SEO run #1695 passed on `c27564149a5c18000b76d05acfaed5cf9ee1893d`. No merge or deployment.
- Open Draft PR #513: https://github.com/xkrrudfbs45-afk/busan-travel-guide/pull/513. Documentation-only refresh of this verified production state and citywide luggage-storage research. Exact-head CI #1701 passed on the prior documentation head; this latest status/handoff follow-up will trigger another run. No site code or deployment changes.
- Responsive browser QA remains outstanding for #511 and #512 at 360 / 390 / 768 / 1280. For #512 also test keyboard navigation, storage blocked, reset, progress persistence and language switching. For #511 check the Sky Capsule photo crop, caption/credit and the evening ticket note in all three locales.
- Latest completed exact-head image / SEO audit on #511 run #1705: 245 canonical HTML pages, 6,984 local links checked / 0 broken, 244 sitemap URLs, 892 hreflang links, zero canonical pages missing from sitemap. Strict image-credit audit: 49 in use, 57 registered, 9 warnings, 0 errors. Homepage food-card audit: 10 cards / 10 distinct image URLs; cover enhancement entries: 24.
- Source-level crawl warnings include 87 pages without explicit `og:image` / `twitter:image` declarations (EN 43, JA 27, zh-TW 32, root/offline 4), 3 missing `og:image:alt` values, and 16 title/meta-length warnings. These are not 87 broken images: the production build enhancer fills social metadata and the final `social-meta check` reports 0 gaps. The remaining priority is page-specific image relevance and social-preview quality, especially zh-TW.
- Image-rights note: one Dongnae-eupseong photo remains restricted to Go2Busan website use only; eight registered assets are unused. Do not reuse the restricted image in external/SNS/paid creative. The Sky Capsule image in #511 is an existing Commons file by VN.NguyenDucDuy under CC BY-SA 4.0; the branch includes visible author/license attribution.
- No GA4/GSC query in this run (the separate daily operations automation owns those metrics). No Instagram/Threads content or schedule was changed. PR #510 changes publisher backup workflow logic only; it does not verify that any post was published.
- Outstanding public-facing visual verification: static checks and production smoke tests do not replace real-browser crop/viewport checks. Do not claim 360/390/768/1280 QA until screenshots and interaction tests exist.

## Winter lights guide accuracy and image refresh — 2026-11-17

- Updated the English-only winter-lights aggregation page and EN/JA/zh-TW winter guides against the official Gwangalli schedule: first/third weeks are drone x laser, second/fourth weeks regular drone shows. December 5 / 19 fall in laser weeks under that published rule, but exact themes remain subject to the monthly programme. Removed unsupported fixed 24-minute duration claims.
- Added a licensed 2020 Haeundae Light Festival archive photo with visible attribution and explicit archival/not-2026 caption and alt text; added OG/Twitter image metadata.
- Added direct official Gwangalli show link, analytics.js, updated search summary and sitemap lastmod.
- Homepage seasonal event data freshness labels updated to November 17 in EN/JA/zh-TW.
- Photo source: Busan Tourism Archive, Lee Jeong-il, Busan Metropolitan City, KOGL Type 1: https://visitbusan.net/archive/dataSearch/view.nm?dataSid=METADATA003506.

## G-STAR 2026 international visitor guide — 2026-11-17

- Added EN / JA / zh-TW dedicated visitor guides: /guides/gstar-2026-busan/, /ja/guides/gstar-2026-busan/, /zh-tw/guides/gstar-2026-busan/.
- Homepage seasonal G-STAR cards now link to the dedicated guide instead of a generic Haeundae page; card copy states BTC tickets are online-only with no onsite sales.
- Verified BTC ticket price, online-only rule, day-before 24:00 KST cutoff, booked-date-only validity, 2 tickets/person/day, wristband exchange, 17:00 verification cutoff and 17:30 last admission against G-STAR official English BTC page.
- Added BEXCO Hall 1 / Hall 2 station exit guidance from BEXCO's official subway directions; Busan Station transfer notes are provided without an unverified journey-time or fare claim.
- Existing verified BEXCO exterior image reused with visible CC BY-SA 3.0 attribution and explicit note that it is a venue photo, not an event photograph.
- Research note: docs/ai-workspace/RESEARCH-GSTAR-2026-11-17.md.
- PR #506 exact-head build / Technical SEO audit #1675 passed on commit 1775aadaef6a11cbd8e80865128d87e4dafa6960: 245 HTML pages, 6,979 local links, 0 broken links, 0 missing descriptions/canonicals, 892 hreflang links, 0 sitemap omissions, image-credit strict audit 49 in use / 57 registered / 9 warnings / 0 errors. Responsive browser QA and screenshots remain pending; PR stays Draft and is not deployed.

## Taxi fare and visitor-help expansion — 2026-11-17 (ChatGPT)

- PR #503 merged into main at 2026-11-17 00:30:21 UTC. Render deploy dep-dbtq0v6k1f9s739dp20g for commit fdfc0ebc7178b0d3a3816fb61d21b7cda3ed3071 reached live status at 00:32:43 UTC.
- Exact-head Technical SEO audit run #1616 passed: 242 HTML pages, 6,900 local links, 0 broken links, 0 missing descriptions/canonicals, 0 sitemap omissions, 880 hreflang links; image-credit strict audit 49 in use / 57 registered / 9 warnings / 0 errors. Existing social-image metadata warnings remain.
- Merged content: EN/zh-TW taxi-vs-subway fare / complaint blocks; EN/JA/zh-TW transit-card taxi fare summaries; EN/JA/zh-TW first-trip 1330 blocks; EN/JA/zh-TW winter drone-show correction. No new URL created.
- Follow-up PR #504 adds original inline SVG fare illustrations to EN and zh-TW taxi guides only. It remains Draft/open, not deployed; responsive browser QA pending.
- PR #503 merged into main and deployed to Render. Merge commit fdfc0ebc7178b0d3a3816fb61d21b7cda3ed3071; deploy dep-dbtq0v6k1f9s739dp20g reached live status.
- Exact-head technical SEO audit passed: 242 HTML pages, 6,900 local links, 0 broken local links, 0 missing descriptions/canonicals, 880 hreflang links, 0 sitemap omissions; image-credit audit 49 in use / 57 registered / 9 warnings / 0 errors.
- Merged scope: EN/zh-TW taxi-vs-subway fare and complaint blocks; EN/JA/zh-TW transit-card taxi summaries; EN/JA/zh-TW first-trip 1330 support; EN/JA/zh-TW winter drone-show corrections. No duplicate taxi URL.
- Follow-up PR #504 adds original inline SVG fare illustrations to EN and zh-TW taxi guides. It remains Draft / not deployed; exact-head technical audit passed, but responsive browser QA and screenshots remain pending.
- Research register: docs/ai-workspace/BUSAN-TAXI-RESEARCH-2026-11-17.md.

## Prior PR state correction — 2026-11-17

- PR #493 (localized licensed photos) and PR #494 (sitemap/hreflang cleanup) are merged into main. Earlier notes in this file that still describe them as Draft are superseded by this correction. Production deployment state must be checked independently before claiming those merges are live.

## Localized photo expansion — 2026-11-16 (ChatGPT, image quality batch)

- Added subject-matched Wikimedia Commons photos to the EN/JA/zh-TW Taejongdae Danubi, Busan City Tour Bus and Haedong Yonggungsa guides (9 localized pages). Danubi is a native-size portrait inline image; the City Tour Bus photo is explicitly labelled archival (13 Oct 2012), not current fleet; the temple photo is from 12 Oct 2017.
- Registered all three files in `assets/data/image-credits.json` with author, source, commercial-use status, license, attribution and restrictions. Visible captions link to the Commons file page and license. City Tour Bus and temple images also receive matching OG/Twitter image + localized alt metadata.
- Source verification: Wikimedia Commons file pages reviewed 2026-11-16. CC BY-SA 3.0 (Danubi), CC BY-SA 2.0 (City Tour Bus archival), CC BY-SA 4.0 (Haedong Yonggungsa).
- PR #493 is Draft; build and image-credit strict audit pending. No merge or production deploy.

## Discovery boost: under-linked guides + IndexNow — 2026-11-16 (Claude, owner-requested)

- Context: Search Console shows ~66 URLs as "Discovered - currently not indexed". Owner registered go2busan.com in Bing Webmaster Tools and submitted the sitemap on 2026-11-16. Google indexing was requested manually for 11 priority URLs on 2026-11-16 (daily quota hit at /guides/ktx-booking-guide/).
- `scripts/enhance-public-ux.mjs`: the "Keep exploring" block now gets a 4th link on the most similar pages for guides with fewer than 4 in-language inbound links (article body + related blocks). Each page gains at most one extra item. Built result: minimum in-body inbound links per guide rose from 1 to 4; 120 pages gained a 4th item. Deterministic.
- IndexNow: public key file `/a758829879725e06ae68f58149b9355b.txt` (copied by build-static.sh, smoke-tested in deploy.yml). After a successful deploy, deploy.yml posts sitemap URLs with lastmod in the last 2 days to api.indexnow.org (Bing, Naver, Yandex). `continue-on-error`, so it never fails a deploy. The key is public by design and is not a secret.
- Verification: build + every seo-audit.yml audit with SEO_AUDIT_STRICT=1, 0 failures; 375/1280 screenshot of the block, no horizontal overflow; IndexNow payload dry-run (no POST sent).

## Contrast remediation — 2026-11-15 (Claude, issue #462)

- Branch `claude/issue-462-20261115-1241`, Draft PR against main. CSS-only: `assets/homepage-showcase.css`, `assets/styles.css`. No copy, URL, metadata, analytics, consent, affiliate or SNS changes.
- Contrast (computed WCAG ratios): CTA white text `#e97861` 2.87 -> `#c4492f` 4.84; hover `#d96550` 3.54 -> `#a63a24` 6.46. Kicker on `#faf8f4`: `#b76552` 3.96 and `#d36552` 3.44 -> `#a8412c` 5.73 (both rules). Breadcrumb links keep `#52677a` (5.87 on white) and now have a persistent 1px underline, 3px offset, 2px on hover, plus a visible `:focus-visible` outline.
- `--show-coral` also feeds the search button and arrow hover fill; both get darker, which is intended.
- Verification: `sh scripts/build-static.sh` and every audit in seo-audit.yml run on this head, 0 errors (existing WARN/INFO unchanged).
- Not done: axe re-run, 360/390/1280 screenshots and keyboard/hover QA were not performed (no browser automation driver in this runner). Secondary CTA and mobile nav CSS were read but not changed. `.article-hero .breadcrumbs` (styles.css ~1328) sets non-link breadcrumb text to `#7a8798` (about 3.6:1, not 4.5:1); out of this issue's scope, left as a follow-up. No merge or deploy.

## Luggage-storage metadata and cover delivery — 2026-11-15 (Claude, issue #455)

- Branch `claude/issue-455-20261115-0447`, Draft PR against main. Based on main, not on PR #454; #454 untouched.
- Changed only head metadata in EN/JA/zh-TW luggage-storage pages: `<title>`, meta description, og/twitter title+description, og:image:alt (twitter:image:alt is derived at build), Article JSON-LD headline/description. Canonical, hreflang, nav, affiliate, consent and analytics untouched. Descriptions follow the issue's suggested EN/JA/zh-TW text; social descriptions and image alts state that the photo is Busan Central Bus Terminal, not KTX Busan Station.
- Cover delivery: the build already removes `loading="lazy"`, adds `fetchpriority="high"`, `decoding="async"` and a 640/1000/1600 srcset for article covers, and no `rel="preload"` is emitted, so no double preload. Checked in built EN output. The JA/zh-TW cover figures exist only on the #454 branch, so they were not edited here.
- Not done: intrinsic `width`/`height` on the cover (the Commons dimensions for `Busan_Central_Bus_Terminal_Locker.jpg` are not in `content/images/cover-photos.json` and could not be fetched here; not guessed). `.article-cover` already has a fixed CSS height, which limits CLS. WebP/AVIF not added: Special:FilePath does not offer it. No KTX locker photo used.
- Verification: `sh scripts/build-static.sh` and every audit in seo-audit.yml run on this head, 0 errors (existing hreflang/image-reuse WARN/INFO unchanged). No browser, screenshot, LCP/CLS or 360/390/1280 check was performed. No merge or deploy.

# Current task update — Agoda hotel affiliate integration (2026-11-14)

- **Work branch:** feat/agoda-stay-affiliate-ctas-20261114 (PR pending at time of update).
- **Owner-supplied tracking:** Agoda partner-search URLs use CID 1979955, Busan city ID 17172, and locale values en-us, ja-jp, zh-tw. The exact values are preserved in content/affiliate/agoda-placements.json.
- **Coverage:** 18 localized placements across the main accommodation comparison guide, Songjeong/Gijang stay guide, Haeundae, Seomyeon, Gwangalli and Nampo neighborhood guides (six pages × three languages). Gwangalli and Nampo now have their own localized area-specific hotel CTAs; airport and general itinerary pages remain intentionally free of generic hotel CTAs because booking intent is weaker.
- **Implementation:** Build-time CTA injection; responsive editorial-style CTA cards; sponsored/nofollow outbound links; localized affiliate disclosure beside every CTA and on EN/JA/zh-TW disclosure pages; GA4 click classification uses existing opt-in consent and affiliate_click with agoda_stay_search placement context.
- **Measurement boundary:** Link clicks are not Agoda bookings or revenue. Partner approval/site mapping and attributed bookings remain to be confirmed in Agoda Partner Center.
- **Verification pending:** PR exact-head Technical SEO workflow, build and affiliate anchor audit, mobile visual QA at 360/390px and desktop. No merge or Render deployment performed; owner approval remains required.

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


## Homepage image-led mobile design batch 5 — 2026-11-14 (ChatGPT)

Ten coordinated refinements applied to the shared homepage visual layer across English, Japanese and Traditional Chinese:
1. Improved hero-image overlay so the skyline remains visible while text stays readable.
2. Replaced a rigid hero height with viewport-aware sizing.
3. Balanced hero headline and intro measure for English and CJK wrapping.
4. Standardized hero CTA touch targets and keyboard focus.
5. Improved search input sizing and visible focus-within state.
6. Standardized discovery shortcut tap areas and focus treatment.
7. Added a restrained backing surface to photo credits and protected editorial card text/focal framing.
8. Standardized experience-card image proportions and mobile swipe-card width.
9. Reflowed booking/planning conversion cards for tablet and narrow mobile widths.
10. Refined winter-feature, image-credit and FAQ compact-width behavior.

- Updated homepage stylesheet cache keys to `20261114-visual-batch5` in EN / JA / Traditional Chinese.
- No image source, attribution, image license, article copy, routes, canonical/hreflang, metadata, JSON-LD, analytics or affiliate destination was changed.
- Image policy: keep existing verified source credits; no rights-uncleared event poster introduced.
- Verification: static review only at commit time. Exact-head build/SEO checks and browser screenshots at 360 / 390 / 768 / 1280 remain required. No merge or production deployment.


## Homepage image-rights correction — 2026-11-14

- Found the Market Chango Christmas Village 2026 poster had been carried into the English homepage during the earlier #411/#413 integration despite its `needs_review` rights status.
- Replaced that English homepage image with the same verified Wikimedia Commons Gwangalli night photograph already used by the Japanese and Traditional Chinese homepages: Carey Ciuro, CC BY 2.0, with visible author and license link.
- The photograph is an atmospheric Busan night image, not represented as a photograph of any of the three winter festivals.
- The organizer poster remains recorded as `needs_review` in the image registry and must not be reused until permission is documented.
- No change to event dates, article claims, page routes, structured data, analytics or affiliate links.
- Included in Draft PR #421; exact-head CI and browser screenshot QA remain pending. No merge/deployment.


## Homepage design batch 6 — 2026-11-14 (10 improvements)

Applied a second grouped pass on the existing homepage design branch:
1. Hero image fallback color and repeat/cover rendering.
2. Mobile primary shortcut grid reflow to 3 × 2.
3. Search suggestion chips become horizontally scrollable on phones.
4. Live search results receive a distinct high-contrast panel and focus treatment.
5. Editorial bento card labels gain more robust image contrast.
6. Signature Yeongdo / Gwangalli / Gamcheon photos receive intentional focal crops.
7. Seasonal event photo panels receive consistent aspect ratios and subtle lower contrast veil.
8. Busan Now night image and photo-credit legibility refined.
9. Trip shortlist/map controls receive thumb-sized targets and focus outlines.
10. Neighborhood photo cards and FAQ links are refined for narrow screens and keyboard use.

- Shared stylesheet affects EN / JA / Traditional Chinese homepages through the existing cache-busted stylesheet reference.
- No new image sources, licenses, claims, routes, metadata, structured data, analytics or affiliate destinations changed.
- Verification is static source review only. No browser screenshots claimed. Exact-head CI is pending after this commit.
- PR #421 remains Draft and unmerged; no production deploy.


## Growth + production audit — 2026-11-14 (ChatGPT run 8)

### Release state
- GitHub main: `840c332d79edac1c55ccbd763d1087945011c167`.
- Render service `busan-travel-guide` latest deploy: `dep-dbru5t6i0phs73bihth0`, status `live`, commit `840c332d79edac1c55ccbd763d1087945011c167`, finished 2026-11-14 04:26:39 UTC. Render auto-deploy is off.
- Direct HTTP reads of the public homepage and `/version.txt` were unavailable in this run. The Render deploy record confirms the live deploy commit; do not state that the public version endpoint was independently checked.
- PR #414 merged the 41-PR integration batch; its report records build success, 14 CI audits passed, and 576 Playwright checks across 144 changed pages at 360/390/768/1280 with zero reported issues. PR #416 integrated the practical local-experience batch (#411/#413); PR #418 integrated the winter-panel contrast fix. No open PRs were returned by the repository PR searches in this run.

### Search Console — final data, 2026-10-15 to 2026-11-11 (Pacific Time)
- Overall device rows: 453 impressions / 3 clicks / 0.66% CTR.
- Mobile: 319 impressions / 3 clicks / 0.94% CTR; desktop: 130 / 0; tablet: 4 / 0.
- Taiwan: 50 impressions / 0 clicks / average position 19.4. United States: 39 / 0 / 29.7. Japan: 26 / 0 / 8.0.
- Samples are small. Country aggregates and the returned page/query rows are not a complete page-level inventory; do not infer market growth or demand from these counts.

### GA4 — 2026-10-17 to 2026-11-13 (Asia/Seoul)
- 47 sessions / 8 active users / 68.1% engagement rate. Source/medium: direct 32, ChatGPT 9, (not set) 4, Google organic 1, Instagram referral 1.
- `affiliate_click`: 5 key events / 3 users. Transactions: 0. Purchase revenue: KRW 0. Affiliate clicks are not bookings or commissions.
- Web stream was created 2026-11-02 and analytics is opt-in/consent-based. Country breakdown returned South Korea only; this is not evidence that overseas visitors are absent. Four sessions (8.5%) have `(not set)` attribution. No custom dimensions are configured, so partner / placement / locale attribution is not currently available.
- GSC–GA4 opportunity join: 43 GSC candidates, 1 matched page, 42 unmatched; only one organic GA4 landing-page session. Source time zones differ (GSC Pacific, GA4 Asia/Seoul).

### Fresh site audit — 2026-11-14
- Audit `d1645faf-a25e-4510-b8ea-f27dabf72f31`: 50 pages crawled; 186 URLs remained beyond the 50-page budget. All 50 returned HTTP 200; zero missing-alt findings. EN / JA / zh-TW late-arrival pages returned 200, were indexable and in the sitemap, and each had one H1.
- Ten non-critical crawl findings: four long titles, two long meta descriptions, one short meta description, two heading-order skips (JA and zh-TW map pages), plus the page-limit warning. No broken-page or missing-alt issue was reported in the 50-page sample.
- Lighthouse completed 7/20 checks; 13 failed with `INSUFFICIENT_CREDITS`. EN homepage mobile: performance 79, LCP 5,347 ms, CLS 0.0155, TTFB 185 ms. Desktop: performance 92, LCP 1,677 ms, CLS 0.0008. Mobile homepage lab trace estimates 1.66 MB image-delivery savings, 9.87 MB total page weight, 630 ms render-blocking savings, and 16 KB unused CSS. Accessibility findings include contrast, touch-target size, accessible-name mismatch, and a generic “Learn more” link. These are lab findings, not field/CrUX metrics; JA homepage metrics were not available because of the credit failure.

### Official local-fact recheck — 2026-11-14
- Korea Airports Corporation Gimhae Airport page: Seomyeon/Bujeon limousine, Platform 3 on floor 1 at both terminals, KRW 6,000, credit-card only, first 07:20 / last 21:30, approx. 70-minute interval. Haeundae/Gijang limousine: KRW 9,500, credit-card only, Platform 3; Jangsan branch last departure 16:50, Gijang branch last departure 21:40. Do not describe 21:40 as the last bus serving every Haeundae stop. The airport warns that timetables/fares may change.
- Busan Port Authority: KTX Busan Station exit 10 → moving walkway → pedestrian deck → International Passenger Terminal, approx. 10–15 minutes. Subway Busan Station exit 6 to KTX station exit 10 and then the deck, approx. 20 minutes; Choryang Station exit 6 route, approx. 20 minutes. Current deck opening hours are not stated on the official directions page.
- Busan City taxi table: night surcharge 23:00–04:00 (30% from 00:00–02:00, 20% in the other hours); published base fare is KRW 4,800 for 2 km, effective 2023-06-01. Do not treat the base fare as an airport-route quote.
- Competitor benchmark: Tourism Busan's airport guide uses a destination-by-neighborhood comparison; AirportTransferPortal's late-night page uses an approximate ~23:30 rail claim and broad Kakao T wording without the same route-branch detail. Treat third-party last-service and app-availability claims as unverified until matched to a current operator source. Go2Busan's existing late-arrival guide distinguishes the Jangsan and Gijang branches and uses the airport's current published figures.

### Decision and next priority
- No new content PR was justified by the small country/query samples; the late-arrival and practical local-experience updates are already integrated in main and the latest Render deploy.
- Next technical priority: isolate the mobile homepage LCP / image payload / render-blocking CSS and accessibility findings, then rerun Lighthouse when sufficient audit credits are available. Do not replace images without checking location match and commercial-use rights.
- No SNS post, schedule, LIVE setting, affiliate agreement, GA4 consent setting, secret, merge, or deployment was changed by this run.


## Growth / content / image operations review — 2026-11-15 (ChatGPT)

### Main-branch integrations verified
- Latest main commit observed: `f64a1220ea3dea65c3dcdcd8393173ca7bf87de4` (PR #457).
- PR #449: 10-page airport-limousine / pork-soup ordering / Sky Capsule return guidance batch merged; exact-head Technical SEO audit #43656136316 passed.
- PR #451: local pork-soup taste context and Busan-specific licensed imagery merged; exact-head Technical SEO audit #43660218648 passed. Community evidence is anecdotal and the page explicitly avoids treating taste preference as a formal style taxonomy.
- PR #453: Instagram place-specific visual and Japanese card overflow remediation merged; Instagram content tests and Technical SEO audit both passed on exact head.
- PR #454: Busan Station luggage-locker guidance in three languages merged; exact-head Technical SEO audit #43678346150 passed.
- PR #456: luggage-guide SEO metadata in EN / JA / zh-TW merged; exact-head Technical SEO audit #43678435408 passed.
- PR #457: Spa Land English meta-description CTR test merged; exact-head Technical SEO audit #43678546685 passed.
- PR #458: Busan Station local-walk OG/Twitter photo and four homepage image-size fixes merged; exact-head Technical SEO audit #43680100440 passed.
- PR #452 was closed unmerged and superseded by the integrated #458. Do not treat #452 as an outstanding release.

### Image operations review (#450 / issue #444)
- Busan Station social-preview mismatch was addressed by #458 using a subject-matched station-sign photograph with visible CC BY-SA 4.0 credit.
- Haeundae panorama warning remains a rights/subject-match review, not a finding of infringement. A CC0 Haeundae beach candidate was checked and used only in PR #459's new Japanese family guide and the zh-TW Taiwan-traveller guide; do not bulk-replace other pages without page-by-page crop and subject review.
- Dongnae north-gate photo remains restricted to current website use pending rights clarification; do not reuse in newspaper/Facebook/Instagram/Threads or paid creative.
- Instagram visual review identified place/season mismatches and a Nov 25 Japanese card overflow. #453 remediation is merged, but future scheduled sets still require exact-art QA; do not publish or alter schedule state without owner approval.
- Static image audit is not a substitute for real-browser crop QA. The 11/15 audit's Lighthouse checks were blocked by credits; no numeric LCP result should be inferred.

### Open content / SEO work
- PR #459 remains Draft/open: adds the Japanese family-travel guide and updates the zh-TW Taiwan guide cover. Its code head passed Technical SEO audit #1456; the later docs-only head has not yet had a separate workflow. Browser QA at 360 / 390 / 1280 and Lighthouse remain unperformed.
- Growth scan issue #375 flagged non-reciprocal Kkangtong Market food-guide hreflang and sitemap omissions. PR #461 adds reciprocal EN / zh-TW / x-default signals, both localized sitemap URLs, and fixes the EN page's Traditional Chinese language-switch destination. Exact-head Technical SEO audit #1461 passed on head `9170ecdae71834f76f55a15b9f70834b1698932a`; language-switch audit checked 633 links with 0 findings. The Kkangtong-specific reciprocity issue is cleared. The wider audit still reports 14 other canonical URLs missing from sitemap and 6 non-reciprocal pairs on other page groups (Yeongdo, Haeundae food and Busan coffee), which need separate page-by-page repair.
- The broader site audit still reports sitemap / hreflang / social-image metadata gaps. Fix in measured batches; do not add a Japanese Kkangtong page solely to complete a hreflang set when no localized page exists.

### Next priorities
1. Re-run the exact-head audit for #461; inspect hreflang reciprocity and sitemap inclusion in the built output.
2. Complete the visual QA requested in #459 before merge consideration.
3. Continue the mobile image-delivery work from PR #448: obtain numeric Lighthouse evidence when credits are available and validate image loading / crops at 360 / 390 / 1280.
4. Continue page-by-page image-rights and subject-match review; preserve visible attribution and do not use AI artwork as documentary photography.
5. Reconcile the remaining sitemap / hreflang / OG metadata warnings against current main before opening further fixes.

### Release boundary
- No merge, Render deployment, SNS publishing/scheduling, analytics consent change, credential change, or affiliate-link parameter change performed by this review.


## Luggage-storage technical SEO re-check — issue #455 (Claude, 2026-11-15)

- The earlier metadata commit (`8319061` on `claude/issue-455-20261115-0447`) was cherry-picked onto main `f64a122`; it applied as an empty change because the EN/JA/zh-TW title, description, OG/Twitter text, image alt and Article JSON-LD already match it on main. No page files were changed in this PR.
- Built output (`sh scripts/build-static.sh`) for all three pages: cover `<img>` has `fetchpriority="high"`, no `loading="lazy"`, `decoding="async"`, and a 640/1000/1600 `srcset`. No `rel="preload"` for the cover, so nothing is preloaded twice. Social alt/description keep the "Busan Central Bus Terminal, not KTX" wording.
- Not done: intrinsic `width`/`height` (Commons dimensions for `Busan_Central_Bus_Terminal_Locker.jpg` are not recorded in `content/images/cover-photos.json` and could not be fetched; not guessed). WebP/AVIF (`Special:FilePath` does not offer them).
- Checks run on this head: build plus every audit in `seo-audit.yml` — 0 errors (existing hreflang WARN and image-reuse INFO lines unchanged). `public/` removed.
- No browser run: no 360/390/1280 screenshots, no LCP/CLS numbers. No merge or deploy.


## Winter-night events and foreign-taxi clarity — 2026-11-15 (ChatGPT content batch)

### Ten content pages updated
1. EN / JA / zh-TW winter travel guides: added Haeundae Light Festival hours and opening ceremony, Gwangalli winter drone-show schedule and laser-session distinction, Gwangbok-ro Street Festa date/time, and a caution against assuming a same-evening transfer is comfortable.
2. EN / JA / zh-TW late-arrival guides: clarified that k.ride's Google / Apple / email sign-up options do not guarantee every overseas phone number will pass verification without another step; advised testing registration and payment before travel. Clarified that the app documents automatic post-ride payment, not an assumed switch to direct driver payment.
3. EN / zh-TW Gwangalli drone-show guides updated; a new JA guide created to close the missing Japanese-language page.
4. EN winter lights guide updated with Haeundae 18:00–23:00 hours, 11/28 18:00 lighting ceremony, Gwangalli drone show, and Gwangbok-ro Street Festa 12/5 16:00–20:00.

### Official facts used (checked 2026-11-15)
- Busan City event listing and MCST: Haeundae Light Festival 2026-11-28 to 2027-01-10, 18:00–23:00, free; lighting ceremony 11/28 18:00.
- Busan City November drone programme: 11/21 laser session and 11/28 regular drone programme; winter Saturday sessions 19:00 and 21:00.
- Official drone-show organizer: first/third Saturday laser format, 24-minute sequence (6-minute opening laser, about 14-minute drone segment, 4-minute closing laser); regular drone show about 12 minutes. December 5 and 19 are described only as expected dates under the recurring rule pending the monthly programme.
- Visit Busan / Busan City: Gwangbok-ro Street Festa 12/5 16:00–20:00; separate Balcony Music Show listing includes 11/28 19:00–21:00.
- k.ride official service page and app listing: Google / Apple / email or social sign-up options, foreign-card / mobile payment support, and automatic payment after ride. Neither source guarantees no phone/device verification for every foreign number.

### Editorial safeguards
- Busan Jung-gu's 2026-09-08 re-notice specifies a planned Gwangbok-ro lighting period of 2026-12-04–2027-01-31, 17:30–22:30. This is a procurement / operations schedule, not the final visitor programme; performances, ceremony, admission and parking remain unconfirmed and the schedule may change. PR #487 was merged by the repository owner and deployed on 2026-11-16 (main/live SHA e3a0f1616c43d5dcb9589b7eb22b62f7ad4535d3).
- December laser dates are labelled expected, not confirmed, until the monthly programme is published.
- No fixed metro last-train time or Nampo-to-Gwangalli transfer duration was invented. Users are directed to check the route and last service for their destination.
- VisitKorea's separate Haeundae event page currently shows a conflicting date range; the article cites the newer Busan City and MCST listings for this edition and flags the conflict.
- No drone-show photo was copied from KOGL Type 2 / non-commercial sources. Existing verified imagery remains; replace only after confirming commercial-use rights and location accuracy.

### SEO and release
- Added Japanese drone-show page, reciprocal EN/JA/zh-TW hreflang links, sitemap entries, search-index entries, and Japanese guide-directory link.
- PR #487 was merged and deployed on 2026-11-16; Render run #43784672075 verified live SHA e3a0f1616c43d5dcb9589b7eb22b62f7ad4535d3 and 229 sitemap URLs returned HTTP 200. No SNS publishing or schedule changes were made.
- Browser screenshot QA at 360 / 390 / 768 / 1280 remains unperformed; the Gwangbok-ro lighting dates remain a planned procurement window, not the final visitor programme.


## GoodDay Unse contextual recommendation cards — 2026-11-15 (ChatGPT, issue #470)

- Draft PR #471: https://github.com/xkrrudfbs45-afk/busan-travel-guide/pull/471
- Added six contextual cards: EN local-culture + local-traits; zh-TW local-culture + local-traits; JA food-stories + food-etiquette (the proposed JA local-culture/dialect slugs do not exist in the current tree).
- Links are language-matched to GoodDay Unse tarot and Korean-name pages; zh-TW also links to K-Saju. Every destination carries the agreed source / medium / campaign / page-slug UTM values.
- No global header/footer/menu placement, homepage placement, affiliate claim, canonical/hreflang, sitemap, search-index, JSON-LD, consent, or existing affiliate-link changes.
- A compact warm-paper card style was added to the shared stylesheet; mobile actions stack vertically.
- Source-level review only. Build, required audits, outbound HTTP 200 checks, and 360/390/768/1280 browser QA remain pending. PR is Draft; no merge or deployment.


## GoodDay Unse card priority revision — 2026-11-15

- Updated Draft PR #471 per owner direction: lead with Korean Saju and 2027 New Year fortune, not tarot.
- Kept all six placements (two each EN / JA / zh-TW) and each card after its existing main article content.
- Link order is now 2027 New Year fortune first (visually emphasized), Saju / Saju-based Korean name second. Tarot links removed.
- EN destinations: `/en/2027/`, `/en/korean-name/`; JA: `/ja/2027/`, `/ja/korean-name/`; zh-TW: `/tw/2027/`, `/tw/k-saju/`.
- UTM content now differentiates destination type with `<page-slug>-2027` and `<page-slug>-saju`.
- Increased card eyebrow from 9px to 11px, body copy from 12px to 14px, and link text from 11px to 13px; emphasized the first 2027 link.
- PR remains Draft. Claude should recheck actual destination responses, exact-head CI/audits, and 360/390/768/1280 layout. No merge or production deploy.


## Haeundae local food expansion — 2026-11-16

- Draft PR adds bokguk and gukbap coverage to the existing EN / JA / zh-TW Haeundae food guide; no duplicate guide URLs created.
- Added Geumsubokguk and Park Okhee Halmaejip Original Bokguk using Visit Busan listing addresses; added Haeundae Wonjo Halmae Gukbap as a local recommendation at 33 Gunam-ro 21beon-gil. The similarly named listing at number 27 is explicitly distinguished.
- Added a licensed Wikimedia Commons Busan bokguk image (Junho Jung, CC BY-SA 3.0) with visible attribution; it is identified as illustrative, not a photo of a named restaurant.
- Updated search-index tags and the Busan map generator / generated map with two additional Haeundae restaurant pins. Existing Geumsubokguk pin now links to the Haeundae guide.
- Build, SEO audits, generated-map reproducibility, outbound link checks, and mobile screenshot QA remain pending on the PR head. Draft only; no merge or deployment without owner approval.


## Local research batch — taxi, hagfish and Beomeosa access (2026-11-16)

- Work branch: `content/busan-local-research-batch-20261116`, based on main after PR #487 merge (`e3a0f1616c43d5dcb9589b7eb22b62f7ad4535d3`).
- Updated EN and zh-TW taxi-vs-subway guides with practical k.ride details: 4 interface languages, 133-language destination/chat translation, overseas-card support, phone-number/verification caveat, automatic post-ride payment, and limited Busan DiDi context. Updated the JA late-arrival guide with the 133-language detail and official privacy / DiDi links.
- Expanded EN/JA/zh-TW Busan Food Stories hubs with the municipal account of post-Korean War Jagalchi hagfish grilling and the separately documented Gijang straw-roasted style. Added a Haeundae Market hagfish photo credited to Junho Jung, CC BY-SA 3.0; caption identifies the market and does not imply a named restaurant.
- Added EN/JA/zh-TW Beomeosa-area transport instructions: Metro Line 1 to Beomeosa Station, exits 5/7, about five minutes to bus terminal, bus 90; distinguished the separate bus 203 and Geumjeong Village Bus 1 routes for Geumjeongsanseong.
- Updated the localized search-index summaries and tags for the food-story hub to include kkomjangeo, grilled hagfish, Jagalchi and Gijang terms in EN/JA/zh-TW. No new URL, sitemap, canonical/hreflang, social schedule, analytics, affiliate or booking changes.
- Pending verification: static build, SEO/link/localization/image-credit audits on exact PR head; inspect 360/390/768/1280 layouts and confirm image loading. No browser QA, production deployment or merge is claimed.


## Production snapshot — 2026-11-16 10:12 KST

- Main and live version.txt: e3a0f1616c43d5dcb9589b7eb22b62f7ad4535d3.
- PR #485 (Jagalchi / Millak comparison) merged by owner; merge commit cbd7df752dd31a8e0735ac140a1c43ce15dab41a. EN / JA / zh-TW pages include store-specific fee cautions and a direct Suyeong-gu report link for the Millak Waterside Park alcohol-free designation.
- PR #487 (Gwangbok-ro planned winter-light schedule) merged by owner; merge commit e3a0f1616c43d5dcb9589b7eb22b62f7ad4535d3. Existing EN / JA / zh-TW winter pages and search index updated; no duplicate festival page created.
- Render deploy run #43784672075 succeeded. Live version matched main, cached entry pages matched, core endpoints returned HTTP 200, and all 229 sitemap URLs returned HTTP 200.
- Main Technical SEO audit #1538 passed with existing warnings: 12 zh-TW canonical pages missing from sitemap and 6 non-reciprocal hreflang relationships. Track in issue #365.
- Main branch endpoint still reports required status-check enforcement off and empty required-check contexts; detailed protection endpoint returns 403 to this integration. Track in issue #474; no protection settings changed.
- No open PRs at this snapshot. No GA4 / GSC data was queried in this run, and no SNS publishing or scheduling changes were made.
- No browser screenshot QA at 360 / 390 / 1280 was performed. Image audit: 45 in use, 53 registered, 9 warnings, 0 errors; no new event photo was added.


## Taiwan traveler practical guide — 2026-11-16 (ChatGPT, issue #490)

- Branch: `content/taiwan-traveler-practical-guide-20261116` (based on current main `81433148e5ef851c86ca3b000a81985f888584de`).
- Updated the existing Traditional Chinese Taiwan-traveler guide: clarified Busan city-bus-only ZeroPay scope, official app list (WeChat Pay, UnionPay, Alipay+, 全支付), per-passenger KRW 1,700 fare, no transfer discount, scan-and-show boarding flow, and app/account eligibility caveat.
- Added Taiwan-market note not to assume EasyCard/iPASS work in Busan; recommended Korea-compatible T-money/EZL for metro and transfers. Linked the taxi-vs-subway guide and the Chinese 1330 travel-help page.
- Added contextual links from the Traditional Chinese first-trip and transit-card guides; expanded the Taiwan page's localized search-index summary and tags. Existing URL, canonical, hreflang, sitemap and image pipeline preserved.
- Official sources: Busan City ZeroPay notice (2026-10-08) and KTO Chinese 1330 page. No claim that every payment account is eligible. Build, SEO/link audits, image-credit checks and responsive visual QA remain pending on exact PR head.
- Draft PR only. No merge, production deployment, SNS schedule or analytics change.


## Multilingual Busan map generator — 2026-11-17

- Draft PR #498: https://github.com/xkrrudfbs45-afk/busan-travel-guide/pull/498
- Main baseline: `0ad092ad30ab35cc87ef2534add21b3907c187ab`; Render deploy `dep-dbtbsb6k1f9s73betvo0` was independently verified as `live` on that exact commit (2026-11-16 08:26:32 UTC).
- Root cause: canonical `P` has 30 places, but JA/zh-TW description arrays had 28; localized guide lookup compared URLs including section fragments against path-only keys, so several available localized guides fell back to English. The Haeundae food mapping also pointed to the neighborhood guide.
- PR #498 makes the EN generator invoke the JA/zh-TW generator, adds the missing two localized descriptions, resolves localized guide paths before fragments, preserves valid section anchors, corrects the Haeundae food slug, updates JA/zh-TW visible counts and ItemList URLs, and adds deterministic generation / ID / JSON-LD checks to CI.
- Exact-head CI pending at documentation update. Real browser QA at 360 / 390 / 1280 and map interaction testing not performed. Draft only; no merge or production deployment.


### PR #498 follow-up — 2026-11-17

- Preserved the existing EN, JA and zh-TW map CSS independently; localized generator resolves each target page from an absolute repository-root path, so it does not overwrite JA/zh-TW styling with EN CSS.
- Added per-locale guide routing and verified section-anchor aliases: three-day sections map to localized section-2/section-3; Seomyeon/Nampo map to section-2/section-3; Dongnae guide now has stable Hurshimchung/history/food IDs; zh-TW Kkangtong market-favorites maps to the existing market anchor; zh-TW Songdo uses its dedicated guide.
- Localized map cards and CollectionPage URLs were aligned; Korean business queries for Geumsubokguk and Haeundae Wonjo Halmae Gukbap use the canonical Korean name/address from the shared P dataset.
- CI now checks target-file existence, fragment IDs, hreflang labels, visible-card IDs/counts, JSON-LD counts/URLs, and two-pass deterministic generation.
- Earlier CI attempts failed on stale template/style drift; those findings were corrected. Latest head CI is pending. No merge or production deployment.


### Localized map CSS ownership — 2026-11-17

- JA and zh-TW map pages share the same verified 2,532-character CSS block. The generator now stores that exact block in `STYLE_JA_TW`; EN retains its separate current CSS template. This prevents generator runs from replacing the localized visual system with EN styling.
- Latest code commit: `a65f5772e458363f19acc8f15264323a3066004c`. Exact-head CI has not yet appeared in the Actions API; previous run #1583 failed on the earlier dynamic-style implementation and is not the final result.


### EN generator formatting alignment — 2026-11-17

- The latest CI diff isolated remaining EN-only formatting drift: the script had two extra newlines around the copied CSS block and used one newline between cards, while the checked-in EN page uses the existing CSS block boundaries and three newline separators. The generator now matches those exact formatting invariants.
- Latest code commit before this doc update: `aa4deda46f901ade40b45f573d4e1772f748b5cd`. Exact-head CI had not yet started; earlier failures are not passing validation.


### EN card-spacing parity — 2026-11-17

- The checked-in EN map had mixed card separators (28 boundaries with one newline and one with three). The generator now uses three newlines consistently; the EN page was normalized to the same output. This is formatting-only and does not change map content.
- Latest code commit before this note: `b217f347bb9419747dc7d8d4f85d2fd63869b92b`. Exact-head CI is pending; run #1589 failed on the previous head because of this spacing drift.


### Exact code-head validation — 2026-11-17

- <PRIVATE_PERSON> PR #498 code head `b217f347bb9419747dc7d8d4f85d2fd63869b92b` passed Technical SEO CI run #1590. The deterministic generator step, 30-place ID parity, JSON-LD count/URL parity, local guide target and fragment checks, English-fallback hreflang checks, static build, and dependency-free audit all completed successfully.
- PR head subsequently advanced to `09d536e3ff6bacc502b618a7e389c273a82d64fc` only through STATUS/HANDOFF documentation updates; no map-generator or generated-page code changed after the passing run.
- Draft PR remains unmerged and undeployed. Browser viewport/interaction QA remains outstanding.


## Follow-up illustration status — 2026-11-17
- Draft PR #504 adds original inline SVG taxi-fare illustrations to the EN and zh-TW taxi-vs-subway pages; no third-party image asset or license dependency.
- Exact-head Technical SEO audit run #1622 passed on commit ac0cfff10a8bfcdfbd2dc88f119d116c517f87ad: 242 HTML pages, 6,900 local links, 0 broken local links, 0 missing descriptions/canonicals, 880 hreflang links, 0 sitemap omissions, 49 images in use / 57 registered / 9 warnings / 0 strict errors.
- PR #504 remains Draft and is not deployed. Responsive browser QA at 360 / 390 / 768 / 1280 and actual screenshots are still pending. Do not claim visual QA passed.

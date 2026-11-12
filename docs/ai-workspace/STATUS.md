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

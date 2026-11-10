# Go2Busan Project Status

_Last updated: 2026-11-10 — ChatGPT (Go2Busan content and publishing-safety review)_

This file is an operational snapshot, not a substitute for checking GitHub and production at the start of each task.

## Known project context

- Repository: `xkrrudfbs45-afk/busan-travel-guide`
- Production site: https://go2busan.com/
- Default branch: `main`
- Site type: multilingual static Busan travel guide.
- Existing languages include English, Japanese, and Traditional Chinese.
- Deployment platform documented in repository README: Render.

## Verified state (2026-11-10, ChatGPT)

- **main:** `5a705ead6f736bf648c583df14f968b76064a3bc` (the current base for new work; do not assume the older 197b438 production note is current).
- **Open PR #305 — multilingual SNS and airport/Haeundae content:** kept as draft after safety review. The Threads branch now has 148 approved, 20 cancelled and 12 draft posts. Eight upcoming JP/US posts for Days 8–9 were rewritten with practical airport and accommodation advice and returned to draft with approval metadata cleared; four localized first-reply guide links were added. Eighteen expired slots without matching publisher-log entries were cancelled to prevent late posting; this does not prove those posts were never published manually. Four posts containing unverifiable “the best” wording were returned to draft per the earlier owner decision. Two Taiwan posts were checked against official Busan transit and Haeundae Blueline Park sources. The 21 Instagram carousels remain approved; the latest review found no need to change their actionable copy. No LIVE variable, token, secret, workflow cadence or actual account post was changed. CI on the preceding revision passed Instagram content tests and technical SEO; the final calendar copy-sync commit still needs a fresh check.
- **Open PR #311 — Seomyeon, Gaya Park and PNU food guides:** draft. Updates EN/JA/Traditional Chinese food pages with official KTO Seomyeon restaurant details, Gaya Park soup options, two additional PNU eateries, and the official Bukmatgol food-alley context. Six-page structural checks pass; build/SEO/mobile CI pending.
- **Open PR #309 — Nampo food guide fact-check:** draft. Distinguishes unvisited local tips from first-hand recommendations; updates Yubu Jeongol, Nampo Jjukkumi and 18번완당집 menu/hours/source details. Technical SEO/build passed on the initial revision; a subsequent paragraph-closing markup fix needs a fresh check.
- **Superseded PRs #307 and #308:** closed in favor of consolidated #309.
- **Open PR #306 / #303 and other existing work:** retain owner review and conflict checks; do not merge based only on branch CI.

## Historical state (2026-11-06, Claude)

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

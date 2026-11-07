# Go2Busan Project Status

_Last updated: 2026-11-06 — Claude (after #280, #281)_

This file is an operational snapshot, not a substitute for checking GitHub and production at the start of each task.

## Known project context

- Repository: `xkrrudfbs45-afk/busan-travel-guide`
- Production site: https://go2busan.com/
- Default branch: `main`
- Site type: multilingual static Busan travel guide.
- Existing languages include English, Japanese, and Traditional Chinese.
- Deployment platform documented in repository README: Render.

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

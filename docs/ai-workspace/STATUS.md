# Go2Busan Project Status

_Last updated: 2026-11-06 — initial workspace baseline_

This file is an operational snapshot, not a substitute for checking GitHub and production at the start of each task.

## Known project context

- Repository: `xkrrudfbs45-afk/busan-travel-guide`
- Production site: https://go2busan.com/
- Default branch: `main`
- Site type: multilingual static Busan travel guide.
- Existing languages include English, Japanese, and Traditional Chinese.
- Deployment platform documented in repository README: Render.

## Existing work requiring live verification

- **PR #269:** previously reported as open and not merged, with CI passing at a recorded head. Recheck current state, head SHA, checks, mergeability, and deployment before relying on this status.
- **Production:** do not infer production state from a successful CI run or an open PR. Verify the live deployment and commit.
- **Search Console:** previously shared project notes reported very low clicks/impressions and a sitemap/index coverage gap. Recheck current Search Console data; this repository file cannot verify Google index status.
- **Affiliate partners:** Klook links exist in the site history; Agoda approval and tracking status require verification. Do not infer approval or revenue from link presence.
- **Analytics:** inspect consent behavior and current event implementation before changing tracking. Respect the privacy policy and consent requirements.

## Current workspace PR

- Branch: `docs/ai-collaboration-workspace`
- Purpose: introduce this shared project documentation.
- Merge state: not merged until project owner approves.

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
| Shared AI workspace | In progress | ChatGPT | Open PR with these docs; owner review |
| PR #269 validation | Not started | Claude | Recheck open PR, CI, mobile and desktop |
| Technical SEO audit | Not started | Claude | Audit sitemap, canonical, hreflang, robots, links |
| Taiwan content plan | Not started | ChatGPT + Claude | Inspect existing Traditional Chinese pages first |
| Four neighborhood hubs | Not started | ChatGPT + Claude | Audit current pages before creating anything |
| Affiliate measurement | Not started | Claude | Verify partner links, consent, GA4 events |

Update this table after each meaningful work session. Include PR numbers, commit SHAs, test results, and blockers where known.

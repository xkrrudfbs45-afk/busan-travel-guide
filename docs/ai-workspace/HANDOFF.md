# Go2Busan Contributor Handoff

_Updated: 2026-11-06 — reconciled to main `197b438`_

## Current production baseline

- Owner-approved deployment report: `go2busan.com/version.txt = 197b438`.
- GitHub `main` HEAD independently resolves to `197b43861bf4bdbd07e5c40fee8d28ab3b215486`.
- Deployed: #274, #276, #278, #280, #281.
- English neighborhood hubs: Haeundae, Seomyeon, Nampo-dong, Gwangalli.
- Japanese + Traditional Chinese: Haeundae and Seomyeon live; Nampo-dong and Gwangalli await #282 owner approval.
- English curated map: 28 places, area/type filters and Google Maps directions. It is currently in list/link fallback mode until the owner configures the Maps Embed key in Render.

## Open PRs / owner decisions

1. **#282 — merge approval required.** CI + 11 audits pass per Claude; completes all four hubs in EN/JA/TW. JA/TW native-speaker review is still outstanding.
2. **#275 — owner direct merge only.** Documentation PR is clean, but it appends an obsolete handoff block. Remove duplicate old handoff content after merge or fix the PR first.
3. **#277 — owner direct merge only.** JA/TW navigation PR is clean and audit-passing per report.
4. **#263 / #266 / #269 — do not merge as-is.** All conflict with current main. Rebuild only unique, still-useful material on current main. Avoid duplicate Nampo content and avoid a second Busan Station late-arrival page that overlaps the existing KTX guide section.

## Verification

- Claude reports build + all 11 repository audits passing.
- 169 built pages: zero horizontal overflow at 360px and 390px.
- New hubs checked at 360px, 390px and 1280px; internal links returned 200.
- Not verified yet: JA/TW native-speaker review; live Google Maps embed; GA4 live event collection.

## Search Console

- 2026-11-06 requests submitted for 7 priority guides, map, Haeundae, Seomyeon and Nampo.
- Daily quota reached. Queue Gwangalli and remaining JA/TW hub URLs for the next available quota.
- Most core pages remain "Discovered – currently not indexed". Continue measured requests and monitor actual status; do not equate request submission with indexation.

## Owner setup still required

- Claude Action: install Claude GitHub App, add `CLAUDE_CODE_OAUTH_TOKEN` or `ANTHROPIC_API_KEY`, protect `main`. Workflow must remain owner-invoked, create PRs from `claude/*` branches, and never merge or push to main.
- Maps Embed API key: restrict HTTP referrers to Go2Busan and configure Render `GOOGLE_MAPS_EMBED_KEY`.
- GA4 Viewer access for live event checks.
- Agoda partner approval.

## Next active work — Claude

1. Wait for owner decision on #282; do not merge.
2. Prepare a focused PR for JA/TW map pages using the existing 28-place dataset, translated filters/labels/metadata and reciprocal hreflang/sitemap/search-index entries.
3. Rebuild useful unique content from #263/#266/#269 on current main; keep #266's firsthand editorial distinctions; avoid duplicate Busan Station intent.
4. Improve neighborhood hub booking CTAs only where contextually relevant, with transparent affiliate disclosure and unchanged analytics event contracts.
5. Complete queued Search Console requests when quota resets; report submitted URLs separately from indexed URLs.

## Approval boundary

No merge, production deploy, paid API usage, partner application, or external spend without explicit owner approval.

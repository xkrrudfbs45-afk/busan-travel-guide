# Go2Busan Contributor Handoff

_Updated: 2026-11-10 — reconciled to main `5a705ead`_

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


## Current handoff — 2026-11-10

### Verified repository state
- `main` HEAD: `5a705ead6f736bf648c583df14f968b76064a3bc` (merged #302). Do not describe the Nov 6 `197b438` baseline as current production without a fresh production version check.
- Main EN and JA homepages still contain the expired Nov 7 fireworks campaign. The #306 branch has been updated to replace those panels with a Japanese winter-events summary and an English winter guide feature; the EN and JA social preview images no longer point to the old fireworks photo.
- Latest #306 branch commits from this work: `694ff1a82a240c9cb731f91368b1f619456051b2` and `8d4b39b8e889681c34317dfef39fd05b3a2793a8`. Static string checks pass for removal of old campaign/date/image and presence of the winter guide link. Automated Technical SEO workflow #832 passed on #306 and included the public-site build plus dependency-free audit. Manual browser/mobile QA at 360px, 390px and desktop remains outstanding. The latest #303 preview-image commit has no workflow run returned yet and needs fresh CI.

### Next execution order
1. Review #306 CI and full SEO/build checks after the latest commits; manually check EN/JA/TW homepages at 360px, 390px and desktop before asking for owner approval.
2. Reconcile #303 with #306: keep the EN homepage's current winter feature and preserve the Traditional Chinese autumn feature; avoid an older branch overwriting the newer seasonal homepage.
3. Reconcile #304/#305 social schedules and drafts, especially Nov 12–18 timing and publisher state. No live publisher settings or secrets changed.
4. Review #294 JA/TW map QA; then inspect #301/#300/#298/#297 for content correctness and duplication.
5. Only after the above, salvage older #263/#266/#269 content where it adds unique value.

### Owner approval required
- No merge or production deployment. No live social publishing, workflow cadence change, token/secret change, or paid API spend.


### Additional audit — localized previews and social approval states

- #303 branch now uses the evergreen Busanhang Bridge homepage image for both EN and zh-TW social previews (latest commits `0d9951b`, `5d276ed`); the autumn feature and localized guide content remain intact.
- Static checks on the updated #303/#306 branches confirm the expired fireworks image reference is absent from EN, JA and zh-TW homepages in the relevant branches. This is branch-level verification only; main remains unchanged until owner-approved merge/deploy.
- Social schedule comparison: main currently has 6 approved + 18 draft Instagram posts; 180 approved Threads posts. PR #304 branch has 6 approved + 18 draft Instagram and 138 approved + 42 draft Threads. PR #305 branch has 21 approved + 3 cancelled Instagram and 178 approved + 2 cancelled Threads. Because these PRs touch the same schedule files and #305 contains many approved posts, merging it could make content eligible for existing publisher workflows if LIVE variables are enabled. Treat #305 as a publication approval decision, not a routine content-only merge. No schedule, LIVE variable, workflow cadence, token or secret was changed in this work.


### Social release gate
- Compare #304 and #305 schedule JSON record-by-record before merge. Verify copy, language-specific destination URLs, scheduled times, verification status and approval provenance. Do not infer approval from a PR description. The existing publisher workflows and LIVE variables govern actual publication.


### Social publication log reconciliation — 2026-11-10

- Correction to the earlier review note: the dated US Threads post `d01-us-2` about the Nov 7 Busan Fireworks Festival was **published on Nov 4 at 12:28:35 UTC**, with its localized link reply recorded as done. It is not an unpublished scheduled item. Do not edit already-published copy; the publish log confirms success and no error.
- The Threads `threads-state` log contains 18 published records and no failed records at this check. The #305 branch has 144 future approved Threads entries; #304 changes 42 upcoming posts and resets them to draft. Compare the exact changed records before choosing which copy to keep.
- The Instagram `instagram-state` log contains 6 published records and no failures. On #305, 21 future posts are approved/verified and 2 superseded drafts are cancelled; the next series is scheduled Nov 12–18. This is branch data, not a claim that #305 has been merged or that all posts have already published.
- Keep #304/#305 separate until their content and schedule differences are reviewed. Do not merge either automatically: merge could affect the publisher's eligible queue when LIVE is enabled.


### Additional execution — 2026-11-10

- Opened draft PR #307: clarify Kkangtong Golmok Halmae Yubu Jeongol as an unvisited local tip rather than a first-hand review. One English guide paragraph changed; no URL, map, pricing, hours, image, analytics, affiliate or publisher changes. Technical SEO workflow #833 passed (public-site build + dependency-free audit). Manual 360px/390px/desktop review remains outstanding.
- #297 PNU six-pick branch includes the Jangjeon-dong Gaya Park Dwaeji Gukbap recommendation in EN/JA/zh-TW and explicitly identifies it as a local recommendation, not an author visit. Address matches the Jangjeon-oncheoncheon-ro 87 listing; no current menu or hours asserted. Do not claim this PR is merged.
- Social publisher logs checked: Threads 18 published, 0 failed; Instagram 6 published, 0 failed. The Nov 7 fireworks post `d01-us-2` was published Nov 4, not left pending. #305 future schedule shows 21 approved/verified Instagram posts and 144 future approved Threads posts; #304 resets 42 upcoming Threads posts to draft. Keep #304/#305 unreconciled until post-by-post diff and owner approval.

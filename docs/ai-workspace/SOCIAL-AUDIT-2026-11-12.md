# Go2Busan Social Campaign Audit — 2026-11-12

## Scope
- Instagram: `content/social/instagram/nov12-26-drafts.json` (45 posts, 15 days, EN/JA/zh-TW)
- Threads: `content/social/threads-15day/nov12-26-drafts.json` (90 posts, 15 days, EN/JA/zh-TW)
- Existing publisher schedules and state-branch publish logs checked.
- Priority market: Taiwan Traditional Chinese.

## New 15-day campaign checks
- Inventory: 45 Instagram posts (15 per market) and 90 Threads posts (30 per market).
- Dates: November 12–26, 2026; every day has 3 Instagram posts and 6 Threads posts.
- Duplicate exact captions/texts: none detected within each platform's 15-day set.
- Threads topics: 15 themes, each used on one day across three markets and two daily slots; no single theme dominates the full window.
- Localized destination paths: EN root, JA `/ja/`, TW `/zh-tw/`; no missing localized paths detected.
- UTM: all 45 Instagram profile-link destinations include Instagram source/medium/campaign/content tags; all 90 Threads link replies include Threads source/medium/campaign/content tags.
- Instagram cards: all 45 posts have five cards and five art prompts. The three markets use consistent visual direction per day; assets are not yet rendered or visually approved.
- Local-time schedule: Instagram slots resolve to the intended local calendar day; Threads' 08:00/20:00 local slots match their declared time zones. No timezone conversion mismatch detected.
- Expired event content: no past dated festival or expired event topic detected in the new 15-day campaign.
- Verification: all 135 posts remain `draft` / `needs_check`. No post was activated or published.

## Existing publisher state and safety cleanup
- Instagram state branch: 6 published, 0 missed, 0 failed. Six published links are recorded in `instagram-state/publish-log.json`.
- Threads state branch: 28 published, 20 missed, 0 failed. The 20 missed IDs are recorded in `threads-state/publish-log.json`; no permalink exists for missed posts.
- The 20 missed Threads entries were changed to `cancelled` in the legacy schedule. They must not be replayed as a backlog.
- Seventeen expired Instagram draft schedule entries (two one-off drafts plus 15 expired day-3-to-day-7 slots) were changed to `cancelled`. The six already-published Instagram posts remain unchanged.
- Publish logs were read only and were not rewritten.
- Publisher code confirms Threads posts more than 3 hours late are marked missed, never burst-posted; the publish log also prevents re-publishing missed or published IDs.
- Live account toggles could not be verified from the available repository metadata. No assumption is made about `THREADS_LIVE` or `INSTAGRAM_LIVE`.

## Activation blockers
1. The 15-day campaign files are separate draft inventories; they are not in the active publisher schedules. This is intentional until the owner approves a replacement/transition plan for the overlapping legacy 30-day Threads schedule.
2. All 135 new posts still need final fact checks. Volatile subjects include airport transfers, transit card rules, business hours, market practices and transport details.
3. Instagram cards have prompts but no rendered 1080x1350 image set has been visually inspected. Do not activate Instagram until the image artifact is reviewed.
4. Verify live account variables and account tokens in a controlled dry-run/owner-approved workflow before activation.

## KTX/SRT integration update
- English, Japanese and Traditional Chinese KTX guide pages were updated in the companion PR for the September 1, 2026 integration.
- First-day Nov 12 Instagram and Threads rail copy was corrected to describe former SRT routes as KTX services booked through Korail/Korail+; it no longer describes SRT as a separate current booking channel.
- The localized guide pages and booking process still require a production-page check after deployment.

## Change control
- Changes are in PR #354 on branch `fix/social-campaign-rail-integration-nov12-26`.
- CI status must be checked against the latest PR head before merge.
- PR is intentionally left as draft. No merge, production deployment, schedule activation, or external social publication was performed.

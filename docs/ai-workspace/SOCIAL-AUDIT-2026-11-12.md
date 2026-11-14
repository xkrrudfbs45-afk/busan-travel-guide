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
- Two expired one-off Instagram draft schedule entries were changed to `cancelled`. The 15 expired v2 series entries remain `draft` to preserve the publisher's schema contract; their past slots and draft status prevent publication. The six already-published Instagram posts remain unchanged.
- Publish logs were read only and were not rewritten.
- Publisher code confirms Threads posts more than 3 hours late are marked missed, never burst-posted; the publish log also prevents re-publishing missed or published IDs.
- Live account toggles could not be verified from the available repository metadata. No assumption is made about `THREADS_LIVE` or `INSTAGRAM_LIVE`.

## Activation blockers
1. The 15-day campaign files are separate draft inventories; they are not in the active publisher schedules. This is intentional until the owner approves a replacement/transition plan for the overlapping legacy 30-day Threads schedule.
2. All 135 new posts still need final fact checks. Volatile subjects include airport transfers, transit card rules, business hours, market practices and transport details.
3. Instagram cards have prompts but no rendered 1080x1350 image set has been visually inspected. Do not activate Instagram until the image artifact is reviewed.
4. Verify live account variables and account tokens in a controlled dry-run/owner-approved workflow before activation.

## KTX/SRT integration update
- English, Japanese and Traditional Chinese KTX guide pages were updated for the September 1, 2026 integration.
- First-day Nov 12 Instagram and Threads rail copy was corrected to describe former SRT routes as KTX services booked primarily through Korail/Korail+; it no longer describes SRT as a separate current booking channel.
- The guide wording reflects the SR transition notice: legacy SRT app/site access may be limited to non-member general-ticket purchase for a transition period, rather than claiming every function stopped immediately.
- Taiwan posts on Gwangalli's Saturday drone show and Korea's 220V/two-round-pin outlets now carry official Visit Busan / VISITKOREA source URLs and explicit recheck requirements.
- The localized guide pages and booking process still require a production-page check after deployment.

## Change control
- Changes are in PR #354 on branch `fix/social-campaign-rail-integration-nov12-26`.
- CI status must be checked against the latest PR head before merge.
- PR is intentionally left as draft. No merge, production deployment, schedule activation, or external social publication was performed.


## Existing published URLs and missed IDs

### Instagram published (6)

| Post ID | Published at (UTC) | Permalink |
|---|---|---|
| ig-d01-fireworks-ja | 2026-11-05T04:28:41.727Z | https://www.instagram.com/p/DfWLMfZFfTK/ |
| ig-d01-fireworks-en | 2026-11-05T10:30:15.400Z | https://www.instagram.com/p/DfW0kkSlnkT/ |
| ig-d01-fireworks-zh-tw | 2026-11-05T12:41:11.888Z | https://www.instagram.com/p/DfXDjakEVWS/ |
| ig-d02-traffic-ja | 2026-11-06T03:34:25.151Z | https://www.instagram.com/p/DfYpx4xgHwm/ |
| ig-d02-traffic-en | 2026-11-06T10:30:24.547Z | https://www.instagram.com/p/DfZZYcwlkze/ |
| ig-d02-traffic-zh-tw | 2026-11-06T12:38:32.824Z | https://www.instagram.com/p/DfZoC44FYcx/ |

### Threads published (28)

| Post ID | Published at (UTC) | Permalink |
|---|---|---|
| d01-jp-1 | 2026-11-03T23:26:01.583Z | https://www.threads.com/@go2busan.jp/post/DfTDufVFPhx |
| d01-jp-2 | 2026-11-04T11:00:26.342Z | https://www.threads.com/@go2busan.jp/post/DfUTMgKkVNx |
| d02-jp-1 | 2026-11-04T12:28:35.024Z | https://www.threads.com/@go2busan.jp/post/DfUdSF0G3Zi |
| d01-us-2 | 2026-11-04T12:28:35.024Z | https://www.threads.com/@go2busan.us/post/DfUdfPzG3wP |
| d01-tw-1 | 2026-11-04T12:28:35.024Z | https://www.threads.com/@go2busan.tw/post/DfUdsdpm7iJ |
| d01-us-1 | 2026-11-04T14:10:20.578Z | https://www.threads.com/@go2busan.us/post/DfUo7eWDiyS |
| d02-jp-2 | 2026-11-05T11:49:38.481Z | https://www.threads.com/@go2busan.jp/post/DfW9nwAkXrL |
| d01-tw-2 | 2026-11-05T12:54:05.809Z | https://www.threads.com/@go2busan.tw/post/DfXE_1YEaXm |
| d02-us-1 | 2026-11-05T14:12:23.137Z | https://www.threads.com/@go2busan.us/post/DfXN9YSFqvb |
| d03-jp-1 | 2026-11-05T23:39:59.505Z | https://www.threads.com/@go2busan.jp/post/DfYO6ctDsms |
| d02-us-2 | 2026-11-05T23:39:59.505Z | https://www.threads.com/@go2busan.us/post/DfYPHdEjrkm |
| d02-tw-1 | 2026-11-06T00:21:37.788Z | https://www.threads.com/@go2busan.tw/post/DfYTrc9oxcP |
| d03-jp-2 | 2026-11-06T11:44:33.169Z | https://www.threads.com/@go2busan.jp/post/DfZh1fRoITM |
| d02-tw-2 | 2026-11-06T12:40:23.066Z | https://www.threads.com/@go2busan.tw/post/DfZoOQBEUfb |
| d03-us-1 | 2026-11-06T13:53:04.339Z | https://www.threads.com/@go2busan.us/post/DfZwiqIlhG0 |
| d04-jp-1 | 2026-11-06T23:22:07.582Z | https://www.threads.com/@go2busan.jp/post/DfaxqqCGcSj |
| d03-us-2 | 2026-11-06T23:22:07.582Z | https://www.threads.com/@go2busan.us/post/Dfax4BBEQ2d |
| d03-tw-1 | 2026-11-07T00:01:48.610Z | https://www.threads.com/@go2busan.tw/post/Dfa2NKglpO_ |
| d07-jp-2 | 2026-11-10T12:51:43.446Z | https://www.threads.com/@go2busan.jp/post/Dfj8s1pIHEf |
| d06-tw-2 | 2026-11-10T12:51:43.446Z | https://www.threads.com/@go2busan.tw/post/Dfj8xdNIC3r |
| d08-jp-1 | 2026-11-11T00:44:34.663Z | https://www.threads.com/@go2busan.jp/post/DflOR97mlug |
| d07-us-2 | 2026-11-11T00:44:34.663Z | https://www.threads.com/@go2busan.us/post/DflOWfSmqlV |
| d07-tw-1 | 2026-11-11T00:44:34.663Z | https://www.threads.com/@go2busan.tw/post/DflOa3SGoS7 |
| d08-jp-2 | 2026-11-11T12:53:36.629Z | https://www.threads.com/@go2busan.jp/post/DfmhtiLkYYs |
| d07-tw-2 | 2026-11-11T12:53:36.629Z | https://www.threads.com/@go2busan.tw/post/Dfmh6itEd7h |
| d09-jp-1 | 2026-11-11T23:47:48.928Z | https://www.threads.com/@go2busan.jp/post/DfnslJOozaN |
| d08-us-2 | 2026-11-11T23:47:48.928Z | https://www.threads.com/@go2busan.us/post/DfnsyUZo2XC |
| d08-tw-1 | 2026-11-12T01:06:03.399Z | https://www.threads.com/@go2busan.tw/post/Dfn1iMolvqb |

### Threads missed (20)

No permalink exists for these entries because the publish log records zero attempts and no published thread ID. The publisher marks posts missed when the scheduled slot is more than three hours late; it does not burst-publish the backlog.

| Post ID | Marked missed at (UTC) |
|---|---|
| d04-jp-2 | 2026-11-10T12:51:43.446Z |
| d05-jp-1 | 2026-11-10T12:51:43.446Z |
| d05-jp-2 | 2026-11-10T12:51:43.446Z |
| d06-jp-1 | 2026-11-10T12:51:43.446Z |
| d06-jp-2 | 2026-11-10T12:51:43.446Z |
| d07-jp-1 | 2026-11-10T12:51:43.446Z |
| d04-us-1 | 2026-11-10T12:51:43.446Z |
| d04-us-2 | 2026-11-10T12:51:43.446Z |
| d05-us-1 | 2026-11-10T12:51:43.446Z |
| d05-us-2 | 2026-11-10T12:51:43.446Z |
| d06-us-1 | 2026-11-10T12:51:43.446Z |
| d06-us-2 | 2026-11-10T12:51:43.446Z |
| d03-tw-2 | 2026-11-10T12:51:43.446Z |
| d04-tw-1 | 2026-11-10T12:51:43.446Z |
| d04-tw-2 | 2026-11-10T12:51:43.446Z |
| d05-tw-1 | 2026-11-10T12:51:43.446Z |
| d05-tw-2 | 2026-11-10T12:51:43.446Z |
| d06-tw-1 | 2026-11-10T12:51:43.446Z |
| d07-us-1 | 2026-11-11T00:44:34.663Z |
| d08-us-1 | 2026-11-11T22:50:28.297Z |

### Failed

- Instagram: 0 failed entries in the inspected state log.
- Threads: 0 failed entries in the inspected state log.

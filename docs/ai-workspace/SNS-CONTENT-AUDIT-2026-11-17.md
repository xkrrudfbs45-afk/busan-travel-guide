# Go2Busan SNS content audit — 2026-11-17

- Audit timestamp: 2026-11-17 08:14 KST
- Repository: `xkrrudfbs45-afk/busan-travel-guide`
- Platforms: Instagram and Threads
- Markets: zh-TW first, then JA and EN
- Window: 2026-11-17 through 2026-12-01, interpreted in each account's local timezone
- Safety: no external publishing, no approved-post edits, no schedule-time changes, no publish-log edits, no LIVE-setting inference

## Executive summary

1. Threads has all 90 posts for the 15-day window. Instagram has 33 of 45 expected market/day slots; 12 slots are empty.
2. All future Instagram links/UTMs and all Threads link replies pass the locale-path and UTM checks. Exact duplicates and high-similarity caption pairs were not found.
3. The main risk is Instagram creative readiness, not URL tracking: several Taiwan-first card sets still use generic coastal/bridge art for inland neighborhoods, and spring cherry blossoms appear in November cards.
4. Two already-approved Instagram posts contain copy that should be corrected, but were not changed: Nov 18 Gwangalli event names remain Korean in all three locales; Nov 24 plug-type claims exceed the official source.
5. Current Instagram publisher is fail-closed. Of 33 future card sets, 8 have current QA metadata and matching stored `.hash`; 24 still have legacy QA without `spec_hash`; one set (Nov 25 JA) has `qa.ok=false` for horizontal text overflow. The 24 legacy sets need fresh render/QA inside the 36-hour publish window.
6. Historical Threads misses are 20 posts with zero API attempts, not API failures. Three recent Threads slots are 14 minutes late but remain inside the 3-hour grace window; they are pending, not missed.

## 1. Instagram schedule and content

### 15-day coverage

| Market | Expected slots | Present | Approved/verified | Draft/needs_check | Missing |
|---|---:|---:|---:|---:|---:|
| zh-TW | 15 | 11 | 10 | 1 | 4 |
| JA | 15 | 11 | 10 | 1 | 4 |
| EN | 15 | 11 | 10 | 1 | 4 |
| **Total** | **45** | **33** | **30** | **3** | **12** |

- Present dates: Nov 17–26 and Nov 28.
- Empty dates: Nov 27, Nov 29, Nov 30 and Dec 1 (three market slots per date).
- The three Nov 28 posts remain `draft` / `needs_check`.
- All 33 present posts are scheduled for 12:00 in their account's local timezone.
- Every post has five cards, a final-card CTA, a same-language `guide_url`, and a same-language `bio_link_url` with `utm_source=instagram`, `utm_medium=social`, `utm_campaign` and `utm_content`.
- Locale path mismatches: 0. Missing guide/bio links: 0. Missing UTM fields: 0.
- Exact same-market caption duplicates: 0. High-similarity pairs at Jaccard >=0.65: 0.

### Editorial distribution and gap handling

The 11 present day-themes cover Jagalchi seafood, Gwangalli, Haeundae, Nampo, Seomyeon, local food, rainy-day planning, packing, food etiquette, Taejongdae and the Gwangbok-ro event. The Nov 18–22 run is neighborhood/food-heavy, but copy topics remain distinct. The repeated visual language is a bigger problem than text repetition.

Existing draft candidates cover:
- Nov 27: taxi-app preparation (three locales)
- Nov 29: Millak winter yellowtail / market checklist (three locales)
- Nov 30: Busan International Passenger Terminal arrival (three locales)

These nine candidates remain outside the active schedule. Dec 1 is deliberately left unfilled for now: another packing, transit or neighborhood post would duplicate nearby topics. Do not fill the date merely to reach 45/45.

### Fact-check findings requiring owner approval

**Nov 18 — Gwangalli drone show (approved; not edited)**

The approved TW and JA cards retain Korean-only show names; the EN card uses a generic “Saturday drone show” label and omits the official program titles. The official Visit Busan English notice provides:
- Nov 21: “Guardians of the Castle with laser show”
- Nov 28: “Avengers: Doomsday in Gwangalli”

The card 4 artwork is an abstract light ribbon rather than a recognizable drone formation. Proposed localized replacement copy is in `docs/ai-workspace/SNS-APPROVED-COPY-CORRECTIONS-2026-11-17.md`. Do not edit the approved schedule item without owner approval.

Official source: https://www.visitbusan.net/schedule/view.do?boardId=BBS_0000009&dataSid=6449&menuCd=DOM_000000204012000000

**Nov 24 — Korea plug/voltage (approved; not edited)**

The approved TW/JA/EN copy claims C/F, C/SE or C/F socket types. The official VisitKorea information checked for this audit states 220V, 60Hz and a socket with two round holes; it does not substantiate the exact C/F/SE labels used in the cards. Proposed safer wording is in the correction proposal file. Do not change the approved posts without owner approval.

Official source: https://japanese1.visitkorea.or.kr/jpn/AKR/AK_JPN_3_2.jsp

**Nov 25 — Japanese food-etiquette card**

`ig-fresh15-1125-jp` has `qa.ok=false`: card 5's Korean phrase plus Japanese gloss overflows horizontally. The schedule copy was shortened previously, but the state-branch image still fails. A fresh render must pass before the post can publish.

## 2. Instagram image and card review

### Taiwan-first visual review

All 55 Taiwan cards (11 five-card sets) were opened and visually reviewed. They are 4:5 vertical cards with high-contrast dark text, cream lower panels and an AI-illustration footer. No external stock-photo asset was used in these reviewed Taiwan sets. The AI-generated label is present and must remain; these are illustrations, not documentary photographs.

The typography and mobile crop are generally readable. The primary issue is subject/location mismatch and repeated Gwangan Bridge/Marine City scenery:

| Local date / theme | Visual finding | Required direction |
|---|---|---|
| Nov 17 · Jagalchi | Generic seafood-market/harbor illustration; relevant to market advice but not a recognizable Jagalchi view | Keep clearly illustrative; use market tanks/stalls and avoid implying a specific shop |
| Nov 18 · Gwangalli | Bridge is recognizable, but card 4 uses an abstract light ribbon; event titles are Korean in all locales | Use a clear drone formation over Gwangan Bridge and localized official show names |
| Nov 19 · Haeundae | Gamcheon-like hillside, cable-car scenery, lighthouse and cherry blossoms appear in the set | Use Haeundae Beach, LCT, Dongbaekseom and the actual Sky Capsule context; no hillside village or unrelated cable car |
| Nov 20 · Nampo | Generic train, Gwangan Bridge/Marine City and spring foliage recur; only some market imagery matches | Use Jagalchi, BIFF Square, Gwangbok-ro and Yongdusan; remove Gwangan Bridge/coastal skyline |
| Nov 21 · Seomyeon | Several cards show beach, bridge and coastal scenes for an inland shopping/transfer district | Use Seomyeon shopping streets, underground shopping/Line 1–2 transfer context; no sea |
| Nov 22 · Local food | Food/map concepts are relevant, but cherry blossoms and repeated coastal skyline imply spring/coast | Use late-autumn street-food/restaurant details without a coastal backdrop |
| Nov 23 · Rainy-day plan | Umbrella, indoor option and rainwear fit the theme; some backgrounds still repeat the same coast | Keep the indoor/rain concept; vary indoor scenes and avoid unnecessary bridge scenery |
| Nov 24 · Packing | Suitcase, shoes, adapter and address-save concepts fit; plug-type copy needs correction | Keep the simple travel-object illustration; remove unsupported socket-type labels |
| Nov 25 · Food etiquette | Food and market scenes fit the copy; one Japanese card fails text overflow QA | Re-render Japanese card 5 with shorter text and preserve the AI illustration label |
| Nov 26 · Taejongdae | Card 1's lighthouse/pine setting fits; later cards show city skyline, bridge, generic train/bus stop and spring blossoms | Use Taejongdae cliffs, pine forest, Yeongdo Lighthouse and the open-sided Danubi train |
| Nov 28 · Gwangbok-ro (draft) | Musicians are shown against Gwangan Bridge/Marine City, not the inland shopping street | Use Gwangbok-ro storefronts, balconies and a street-level jazz performance; no beach, bridge or coastal skyline |

Spring cherry-blossom trees recur in several November sets (especially Nov 19–22 and Nov 26). Replace with late-autumn foliage or neutral seasonal scenery.

### Publisher QA evidence

The current publisher `scripts/instagram/publish.mjs` is fail-closed. It requires:
- `qa.json` with `ok=true`
- `spec_hash` matching the current post
- matching `card_count`
- stored `.hash` matching the current spec
- exactly the expected numbered JPEG files

Across the 33 future posts:
- 8 have current `spec_hash` / `card_count` metadata; for these 8, stored `.hash` matches the QA hash.
- 24 have legacy QA without `spec_hash` and cannot certify the current schedule specification.
- 1 is explicitly failed: Nov 25 JA horizontal overflow.

The strict publisher will block a post if any required check is missing or stale. Re-render and verify the exact five JPEGs for each post in its 36-hour preparation window. Do not treat a legacy `qa.ok=true` as publish clearance.

## 3. Threads schedule and content

| Market | Posts | Local times | Link replies | Linkless |
|---|---:|---|---:|---:|
| zh-TW | 30 | 08:00 / 20:00 Asia/Taipei | 18 | 12 |
| JA | 30 | 08:00 / 20:00 Asia/Tokyo | 19 | 11 |
| EN | 30 | 08:00 / 18:00 America/New_York | 20 | 10 |
| **Total** | **90** |  | **57** | **33** |

- All 90 future posts are approved.
- Verification: 89 evergreen; one `needs_check` (`d28-us-1`). Its “the best plan” wording is subjective reflection, not a factual ranking; the stored note says the owner accepted it.
- All 57 link replies have the correct locale path and all four UTM fields.
- Of 33 linkless posts, 15 are question-led and 18 are declarative. Add a natural question or reply invitation to some of the 18 declarative posts when they are next edited; do not rewrite approved posts in this pass.
- 20 topic clusters; largest cluster has six posts. Same-market exact duplicates: 0. High-similarity pairs at Jaccard >=0.65: 0.
- No expired event or date-specific offer was found in the 15-day future window.

## 4. Publish-log reconciliation

### Instagram state branch

- `published=18`, `missed=0`, `failed=0`.
- All 18 published records have permalinks.
- Market totals: EN 8, zh-TW 6, JA 4.
- Latest recorded URLs:
  - EN: https://www.instagram.com/p/Dfz9cSYGKHe/
  - zh-TW: https://www.instagram.com/p/DfyexWEEVcZ/
  - JA: https://www.instagram.com/p/Dfyes1XkRxT/

The future Nov 17 posts are scheduled for 12:00 local and are not due at the audit timestamp.

### Threads state branch

- `published=55`, `missed=20`, `failed=0`.
- All 55 published records have permalinks.
- Published by market: JA 20, zh-TW 18, EN 17.
- Missed by market: JA 6, zh-TW 6, EN 8.
- All 20 missed records have `attempts=0`, no permalink and no API error. They were marked on Nov 10–11. The log establishes that no API attempt occurred; a workflow execution gap is more plausible than an API rejection, but the exact Actions/platform cause is not proven by `publish-log.json` alone.
- Do not retry or bulk-republish the 20 missed posts.
- Latest recorded URLs:
  - JA: https://www.threads.com/@go2busan.jp/post/DfzUQ8qG5DK
  - zh-TW: https://www.threads.com/@go2busan.tw/post/DfzUdpym6XN
  - EN: https://www.threads.com/@go2busan.us/post/DfzpCC8Fjwt

### Three pending records — not yet missed

At 08:14 KST, the following posts had no log entry and were only 14 minutes past their scheduled local time:
- `d13-us-2`: Nov 16, 18:00 America/New_York
- `d14-jp-1`: Nov 17, 08:00 Asia/Tokyo
- `d13-tw-1`: Nov 17, 08:00 Asia/Taipei

The scheduler's 3-hour grace period has not elapsed. Keep them pending; do not label them missed or reissue them yet.

Account-level LIVE configuration is not exposed by the schedule or publish-log files read for this audit. Historical published status is supported by log entries and URLs; future LIVE behavior is not inferred.

## 5. Local fact-check notes for draft candidates

- K.Ride: current official service information lists Google/Apple/email sign-up, overseas-issued cards and selected mobile payments, four interface languages, 133 languages for destination search/chat and estimated fares before booking. Public official information does not establish that a Korean number is required or guarantee every overseas number. The taxi draft was corrected to avoid either claim.
  - https://www.kakaomobility.com/k-ride
  - https://kride.kakaomobility.com/
  - https://apps.apple.com/kr/app/k-ride-taxi-cab-travel/id6474654222
- Millak Hoe Center: VisitKorea lists upper-level restaurants, fresh raw fish and year-round opening, but not current stall-level prices, daily hours, minimum orders or table charges. Do not reuse 2023 price/hour claims; confirm today's catch and every charge at the stall.
  - https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=84951
- Ferry arrival: Busan Port Authority confirms railway Busan Station building Exit 10 → moving walkway → pedestrian deck → terminal at about 10–15 minutes; Metro Busan Station Exit 6 and Choryang Station Exit 6 are about 20 minutes. The 5–7 minute figure is only a deck segment, not the whole station walk.
  - https://www.busanpa.com/index.bpa?menuCd=DOM_000000401008000000
- Gwangbok-ro: Visit Busan's English event listing confirms Nov 28, 19:00–21:00, with Sunny Moon Jazz Band (19:30–20:00) and Modern Sounds Jazz Big Band (20:00–20:30). The 2026-12-05 Street Festa is not included in this draft.
  - https://www.visitbusan.net/schedule/view.do?boardId=BBS_0000010&dataSid=6438&menuCd=DOM_000000304010000000

## 6. Changes in this Draft PR

- Corrected the Nov 27 taxi candidate's K.Ride facts: removed the unsupported inference from the general Kakao Mobility privacy policy, changed language support from 100+ to 133, and replaced meter claims with trip record/final fare/receipt evidence.
- Updated the three already-draft Nov 28 Gwangbok-ro posts to use the official English performer names in TW, JA and EN.
- Updated the Gwangbok-ro source register with the current official English event page and an explicit inland-street art direction.
- Added an approved-copy correction proposal for Nov 18 and Nov 24. Those already-approved schedule entries remain unchanged.
- Did not add any missing Instagram slots to the active schedule. The Nov 27, Nov 29 and Nov 30 candidates remain in draft files; Dec 1 remains empty to avoid topic duplication.
- No Threads schedule or state branch changed.
- No external account post, reservation, schedule-time change, publish-log edit, LIVE setting, merge or production deployment was performed.

## Next actions

1. Obtain owner approval before replacing the Nov 18 and Nov 24 approved Instagram copy.
2. Re-render locality-matched TW-first images for Nov 19, 20, 21, 26 and the Nov 28 draft; remove spring blossom and unrelated coastal backgrounds.
3. Re-render the Nov 25 JA card and ensure `qa.ok`, `spec_hash`, `card_count`, `.hash` and all five JPEGs pass.
4. Re-render each remaining legacy QA set in the 36-hour preparation window.
5. Reconcile the three pending Threads posts after the grace window; if they become missed, leave them missed and do not republish.
6. Keep the Nov 28 event draft in `needs_check` and recheck on Nov 27 and the morning of Nov 28.

# Go2Busan SNS content audit — 2026-11-15

- Audit timestamp: 2026-11-15 08:15 KST
- Repository: xkrrudfbs45-afk/busan-travel-guide
- Main SHA reviewed: 4f951234d835d7ebb3f5b92137e5018c4c0b1dc4
- Window: 2026-11-15 through 2026-11-29 inclusive
- Priority: zh-TW, then ja, then en
- Safety: no publish schedule, approved post, state branch, external account or production deployment changed

## Executive result

Threads has a complete 15-day schedule. Instagram does not: it has 13 dates, with six slots missing on Nov 27 and Nov 29. The largest quality risk is no longer translation or technical rendering; it is semantic image mismatch between the named Busan place and the generated illustration. The 11/24 electrical plug wording also needs a factual correction proposal.

## 1. Schedule and localization

### Instagram

- 39 posts in the 15-day window: 13 each for TW, JP and US/EN.
- Dates present: Nov 15–26 and Nov 28.
- 36 approved; the three Nov 28 Gwangbok-ro event posts remain draft.
- Missing dates: Nov 27 and Nov 29 (six market slots).
- All 39 use the account's local noon. Time-zone conversion was checked for Asia/Taipei, Asia/Tokyo and America/New_York.
- All 39 bio links use the expected Go2Busan language path and Instagram/social UTM structure.
- No exact duplicate captions inside the active 39-post window.
- No expired Nov 7/Nov 14 event references or old fireworks copy were found in this future window.

### Threads

- 90 posts: 30 each for TW, JP and US/EN, covering all 15 dates.
- All 90 are approved and marked evergreen.
- Every UTC timestamp converts to the stored local date/time and market timezone.
- 67 posts include a localized Go2Busan link reply with Threads/social UTM. The other 23 are intentionally linkless conversation-first posts: TW 9, JP 8, US 6.
- Of the 23 linkless posts, 11 use an explicit question. The remaining 12 are useful tips or statements without a clear reply prompt; add a light question or save prompt to the high-intent ones, but keep pure conversation posts linkless.
- 21 topic clusters are represented, with no single cluster exceeding six posts. No exact text duplicates were found inside the active 90 posts.

### Shadow draft collision

Do not activate either old 15-day draft file as a schedule:

- Instagram nov12-26-drafts.json has 36 records in the current window. All 36 occupy the same date/account slots as the active schedule; 33 are exact text duplicates and three are close variants.
- Threads nov12-26-drafts.json has 72 records in the current window. All 72 occupy slots already covered by the active 30-day schedule; 63 are exact text duplicates and nine are close variants.

These files are not read by the active publishers. This is not a current duplicate-publication event, but it is a migration hazard if either file is copied into an active schedule.

## 2. Publish-log reconciliation

### Instagram state branch

- 12 published, 0 missed, 0 failed.
- All 12 published records have a permalink: four each for JP, TW and EN.
- Latest recorded posts on Nov 14:
  - JP: https://www.instagram.com/p/DftSwTfFWGS/
  - TW: https://www.instagram.com/p/DftZicdEUXl/
  - EN: https://www.instagram.com/p/DfuxDh3lBHT/

### Threads state branch

- 43 published, 20 missed, 0 failed.
- All 43 published records have a permalink.
- Published by market: JP 16, TW 14, US 13.
- Missed by market: JP 6, TW 6, US 8.
- All 20 missed entries have attempts=0 and no permalink. They are not API failures.
- The missed entries were marked on Nov 10 and Nov 11 after the three-hour late window. The workflow declares six scheduled runs per day, but only three Threads publisher runs appear in the Nov 10–11 window. This points to missing scheduled workflow executions/run gaps, not an API rejection. The exact GitHub scheduling cause is not established.
- Latest recorded posts on Nov 14:
  - JP: https://www.threads.com/@go2busan.jp/post/DfuHg6SEQF3
  - TW: https://www.threads.com/@go2busan.tw/post/DfuPc-XG8NQ
  - EN: https://www.threads.com/@go2busan.us/post/DfuWpv8lZta

At 08:15 KST on Nov 15, Threads post d12-jp-1 (JP 08:00 local) had no publish-log entry and no 08:07 KST publisher run was visible. It is 15 minutes late, not yet missed: the publisher's three-hour grace window has not expired. Do not replay it manually.

The connected read route does not expose the current repository LIVE variable values. Historical published/missed status above is based on the state-branch publish-log and recorded permalinks only; no future LIVE state is inferred.

## 3. Instagram card and image review

39 sets × 5 cards = 195 rendered cards were present on the instagram-state branch. All cards are 4:5, 1080×1350, and carry an AI-generated illustration attribution. No unlicensed stock/photo asset was identified.

Automated QA:
- TW: 13/13 sets passed.
- JP: 12/13 passed; Nov 25 Japanese set failed the text-overflow QA gate.
- EN: 13/13 passed.
- Total: 38/39 passed.

Visual review:
- TW: all 65 cards reviewed.
- JP and EN: first and final cards reviewed across all 13 sets in each language, plus high-risk Japanese cards.
- Text remains legible at mobile size in the reviewed samples. The main defect is place/season mismatch, not typography or crop.

High-priority semantic mismatches:
- Nov 18 Gwangalli drone show: one card uses an abstract light ribbon instead of a recognizable drone formation.
- Nov 19 Haeundae: several cards resemble Songdo/Gamcheon-style hillside/coastal scenery rather than Haeundae Beach, LCT, Dongbaekseom or the Sky Capsule.
- Nov 20 Nampo: multiple cards use generic Gwangalli/Marine City or unrelated harbor scenery instead of Jagalchi, BIFF Square, Gwangbok-ro and Yongdusan.
- Nov 21 Seomyeon: some cards show Gwangalli/Haeundae coast instead of Seomyeon streets and the Line 1/2 transfer area.
- Nov 26 Taejongdae: cards 3–5 show city skyline, bridge or generic bus-stop scenery rather than Taejongdae cliffs, pine forest, lighthouse and Danubi train.
- Nov 28 Gwangbok-ro: some cards show Gwangan Bridge/Marine City rather than the Nampo shopping street and balcony-stage setting.
- Cherry-blossom imagery appears repeatedly in November posts. Replace with late-autumn/winter foliage or neutral seasonal scenery.

The Nov 25 JP card 5 looks readable in a manual sample, but the automated QA failure remains authoritative. Keep the set blocked until shortened copy is rendered and QA passes.

The Nov 28 event facts are confirmed by Visit Busan: 19:00–21:00 on Nov 28; Sunny Moon Jazz Band 19:30–20:00 and Modern Sounds Jazz Big Band 20:00–20:30. The event post remains draft because the image/location match needs work and artist names should not be transliterated without an official localized name.

Recommended art direction for a future, separately approved re-render:
- Gwangalli: distinct drone formations above the water, not a light ribbon or fireworks.
- Haeundae: Haeundae Beach, LCT, Dongbaekseom and Sky Capsule only.
- Nampo: Jagalchi market, BIFF Square street food, Gwangbok-ro and Yongdusan; no Gwangan Bridge.
- Seomyeon: dense urban shopping streets and a clearly non-coastal Line 1/2 transfer context.
- Taejongdae: cliffs, pine forest, lighthouse and an open-sided Danubi sightseeing train; no Marine City skyline.
- Gwangbok-ro: Nampo shopping street facades and a balcony performance, not a Gwangalli panorama.
- All prompts should explicitly exclude cherry blossoms and retain the AI-illustration label. No app logos or fake app UI.

## 4. Fact-check findings

### 11/24 electricity card

The scheduled copy labels plugs as C/F, and the Japanese card says C type/SE type. The Korea Tourism Organization's Japanese and Traditional Chinese pages state 220V, 60Hz and a two-round-hole plug. Replace the type labels with the official plain-language description in all three languages. The approved schedule was not changed.

### K.Ride / taxi card candidate

Kakao Mobility's current K.Ride page confirms Google, Apple or email sign-up, overseas-issued cards, selected mobile payments, English/Japanese/Chinese (traditional and simplified) interface support, 100+ language destination search/chat and pre-booking fare estimates. The current privacy collection policy lists a mobile phone number as required for email and social sign-up. The sources do not establish that every overseas country code is accepted. Do not claim that a Korean number is unnecessary; say that the country-code/verification result must be tested before travel.

A single Reddit account of an app trip ending or a meter changing is not evidence of a common scam. Keep it as an exception-only safety tip: check the trip record, meter/amount and receipt, move to a safe public place if needed, and use official in-app support. Do not imply that K.Ride features are also available in Kakao T.

### Millak Hoe Center / winter yellowtail

VisitKorea confirms fresh raw-fish sales and restaurants on the center's upper levels, and lists the center as open year-round. It does not provide current stall-level hours, prices, minimum orders or table charges. The exact first-floor purchase → second-floor dining sequence is user-provided but not independently confirmed by the official listing; use “fish stalls → upper-level restaurant” and confirm the exact floor on site. No 2023 prices or opening-hour claims are reused. For winter yellowtail, ask each stall about today's catch, fish type, weight, unit price, preparation fee, table/side-dish charge, stew and minimum order before preparation.

### Airport limousine and fish-price claims

No unverified Osiria/Jangsan/Seomyeon airport-limousine fare or timetable changes were inserted. No KNN fish-price figures were generalized to all Busan markets or all species.

## 5. Draft-only work in this PR

- Added a localized taxi-app checklist and Millak winter-yellowtail content candidate for TW, JP and EN.
- The requested seven information points are compressed into six Instagram cards because the current validator accepts five or six cards. No renderer/validator change was made.
- Threads versions are question/tip-led and are not copies of the Instagram captions.
- Existing localized guide URLs are reused; no new site URL is created.
- New content remains draft-only. Nothing was added to the active Instagram or Threads schedules.

## 6. No-touch boundaries

No approved caption or image was replaced. No schedule or publish-log branch was edited. No post was published, replayed or re-scheduled. No production deployment was triggered.

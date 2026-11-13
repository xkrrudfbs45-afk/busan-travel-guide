# Instagram localisation and visual corrections — 2026-11-14

## Scope and safety

This is a draft proposal only. No approved post has been changed on `main`, no external account was posted to, and no reservation/publishing schedule was activated. The changed `art.set` identifiers intentionally point to new background files so a later approved merge can generate fresh assets without overwriting the existing state-branch images. The publisher already fails closed when `qa.json` is missing or reports failure.

## Manual visual review

Taiwan Traditional Chinese was reviewed first across all 13 scheduled topic sets from 2026-11-14 through 2026-11-26 (five 4:5 cards per set). Japanese and English layouts were sampled on the high-risk transit, Haeundae and food-etiquette sets. AI-illustration credits are visible on the reviewed cards; the reviewed cards are stylised rather than documentary photographs.

Proposed corrections:
- **2026-11-15 transit-card set:** card 4 looked like a cable car, which could imply that a cable car is covered by a transit card. The new prompt explicitly shows a balance check beside bus/subway symbols and excludes cable cars.
- **2026-11-18 Gwangalli drone-show set:** card 4 used an abstract light ribbon rather than visible drones. The new prompt shows distinct drone points above a night beach and bridge. Copy is updated to the remaining official November dates (11/21 and 11/28), notes the 11/21 laser show, and retains the official weather/communications cancellation caveat. Exact show times are not claimed.
- **2026-11-19 Haeundae set:** cards 3–5 showed mixed coastal/hillside scenes resembling other Busan districts. New prompts anchor the art to Haeundae Beach, LCT, Dongbaekseom and the elevated Sky Capsule rail; cable-gondola and Gamcheon-style imagery are explicitly excluded.
- **2026-11-26 Taejongdae set:** card 2 looked like a generic locomotive. The new prompt asks for a low-speed, open-sided multi-car park shuttle.
- **2026-11-25 Japanese food-etiquette set:** the state-branch QA artifact still flags card 5 body width. Manual inspection shows the phrase is readable but long; this proposal shortens the Japanese gloss. A fresh render and passing QA are still required.

The existing state branch contains 42 five-card sets (210 rendered cards) for the current approved campaign. QA metadata reports 41 passing sets and one failure: `ig-fresh15-1125-jp`. The fail-closed publisher must continue blocking that post until a fresh QA pass is recorded.

## Verified event draft: 2026-11-28 Gwangbok-ro

Three localized Instagram drafts are added for 2026-11-28 at 12:00 account-local time:
- TW: 04:00 UTC
- JP: 03:00 UTC
- US (Eastern): 17:00 UTC

Visit Busan's current official listing states 2026-11-28 (Saturday), 19:00–21:00, Gwangbok-ro in Jung-gu, with 19:30–20:00 `써니문 재즈밴드` and 20:00–20:30 `모던사운즈 재즈빅밴드`. The posts remain `draft` / `needs_check`, and must be rechecked on 2026-11-27 and the morning of 2026-11-28. The separate 2026-12-05 Street Festa is not included. Artwork is AI-generated illustration, not an event photograph.

## Taxi-card candidate — not scheduled

The requested seven-card outline is kept as a proposal rather than inserted into the active schedule:
1. Can a visitor use a taxi without a Korean phone number? Kakao Mobility currently lists Google, Apple and email sign-up, but its public page does not guarantee that no Korean-number or device verification will ever be requested. Do not answer with an unconditional “yes”.
2. What k.ride currently documents: English/Japanese/Traditional Chinese app support; destination search and driver chat in 133 languages; estimated fare; credit/debit and mobile payment. Kakao Mobility's service page also lists overseas-issued cards and selected wallets.
3. Save the hotel address in Korean before travelling.
4. Compare bus/subway with taxi for the last mile; do not imply that a taxi is always necessary.
5. Treat an unexpected mid-trip end as an exception, not a scam pattern. Do not generalise from a single personal account.
6. Keep trip details, fare and receipt records; use the relevant app's official support. k.ride lists App Menu > Support and its weekday support hours; Kakao Mobility lists FAQ, chatbot and counselling chat. No official step-by-step for a mid-trip meter switch was found.
7. CTA to a relevant localized taxi guide. The existing English page `/guides/busan-taxi-vs-subway-motion-sickness/` exists, but Japanese and Traditional Chinese counterparts do not. The English page focuses on taxi-vs-subway comfort/motion sickness, not the full K.Ride onboarding or mid-trip exception flow. Before using this CTA, expand the existing guide and localize it into JA/TW; do not point TW/JA users to the English page or create a new URL before checking duplication.

The current Instagram v2 carousel validator permits 5–6 cards, not 7. The seven-card version therefore needs either a deliberate template change or a reviewed six-card compression. It is not scheduled in this PR.

## Other local research candidates held

- **민락어민활어직판장 / winter yellowtail:** no current official confirmation of floor-by-floor purchase/dining flow, hours, minimum order or table-setting fees was established. Do not reuse 2023 figures; keep pending.
- **KNN 2026-11-06 seafood-price report:** no price numbers are added to these posts. Any future use must attribute the exact species and figures to the original report and must not generalise to all Busan markets.
- **Gimhae Airport limousine:** no unverified stop, timetable or fare changes are added.
- **Gwangbok-ro 12/05 Street Festa and the 2026 tree festival:** not included; wait for a current official listing.
- **Past fireworks content:** no expired fireworks event is reintroduced.

## Validation expectation

- CI checks the text, schedule schema, locale guide paths, AI disclosure and source-register references.
- After merge only, the workflow may generate the new background sets and re-render cards.
- No post is publishable until the new card set has a passing `qa.json`; the publisher's fail-closed QA gate remains in force.

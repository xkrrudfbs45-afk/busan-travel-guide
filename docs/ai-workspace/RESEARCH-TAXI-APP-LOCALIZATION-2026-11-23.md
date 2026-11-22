# Community and local mobility research — 2026-11-23

## Decision

Improve discovery of existing Japanese taxi-app guidance by adding one internal link from the Japanese first-trip guide to the existing Japanese late-arrival guide. Do not create a Japanese taxi-guide URL in this run: owner direction in [issue #613](https://github.com/xkrrudfbs45-afk/busan-travel-guide/issues/613) pauses new guide URLs and prioritizes deepening existing pages.

## Community signals

| Market / source | Date and context | Signal | Reliability / limitation |
|---|---|---|---|
| Taiwan — [Dcard Korea Travel](https://www.dcard.tw/f/korea_travel/p/262359468) | Search-indexed during the 2026-11-23 review; title: “11月底釜山4天3夜行程健檢（主要交通計程車）” | A four-day / three-night itinerary relies mainly on taxis; the visible reply asks how many travellers and how much large luggage they have. | Direct page fetch returned 404 and the post date could not be independently confirmed. Treat as a weak qualitative signal, not demand volume. |
| Taiwan — [PTT Korea_Travel](https://www.ptt.cc/bbs/Korea_Travel/M.1784801459.A.532.html) | 2026-07-23; first Korea trip, Seoul + Busan, 8–9 days | The traveller asks whether to use subway or taxi with two 28-inch suitcases, and how to avoid repeatedly moving luggage between hotels. | One older planning thread; useful as a recurring problem example, not a current trend estimate. |
| English — [Reddit: “Kakao Taxi No Foreigners?”](https://www.reddit.com/r/koreatravel/comments/1vg72eq/kakao_taxi_no_foreigners/) | 2026-08-05; several replies | Visitors report confusion around Korean identity verification and ask whether to use K.Ride or Uber. Replies are mixed and include personal experiences. | Anecdotal user reports; not proof of a universal app restriction or fare advantage. |
| Japan — [Yahoo!知恵袋: Korean taxi apps](https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q14331328619) | 2026-09-13; 2 answers, 959 views shown on the page | A Japanese traveller asks which of Kakao T, Uber and K.Ride to prepare. The accepted answer recommends K.Ride as the easier foreign-visitor option and Kakao T as a backup. | Single Q&A; the recommendation is user-generated, not an official guarantee. |
| Japan — [4travel Busan solo-trip log](https://4travel.jp/travelogue/12074223) | 2026-05-31 to 2026-06-01; solo trip | The itinerary uses bus and subway between Seomyeon, Jeonpo and Gimhae Airport. | Useful counterexample: public transport remains viable for a light-luggage solo itinerary; not a taxi-app demand signal. |

No relevant, independently verifiable current post was surfaced in the accessible public results from Naver cafes/blogs, DCInside, Theqoo, Ppomppu, public Instagram/YouTube comments or local parenting forums in this pass. No login or access-control bypass was attempted.

## Official K.Ride fact check — checked 2026-11-23

- [K.Ride's current English service page](https://utility.kride.kakaomobility.com/?lang=en) lists English, Japanese, Simplified Chinese and Traditional Chinese UI; 133-language destination search and driver chat; estimated fares before booking; and credit/debit-card plus mobile payment. It currently describes service across 34 countries.
- [Kakao Mobility's K.Ride page](https://www.kakaomobility.com/k-ride) describes Google, Apple or email sign-up and overseas-issued cards. Its public wording differs on the translation count (“100+” rather than 133), so use the current K.Ride service page for the 133 figure.
- [K.Ride privacy policy](https://kride.kakaomobility.com/webview/terms/22?lang=en), effective 2025-04-15, lists a mobile phone number among collected information for email and social sign-up. It does not state whether a Korean number is required or which foreign country codes will pass verification.
- Editorial rule: never promise that a Korean number is unnecessary or that every foreign number will work. Advise visitors to test their own number and payment method before travel. Keep K.Ride features distinct from Kakao T features.

## Existing coverage and change

- EN and zh-TW already have the existing taxi-vs-subway guide. No JA equivalent exists, but the JA late-arrival guide already explains K.Ride registration, payment and phone-verification caveats.
- The JA first-trip guide previously linked only to the taxi-fare section of the JA transit-card guide. This change adds a short pre-trip reminder and a contextual link to the existing JA late-arrival section `#published-last-services`.
- No new URL, page metadata, image, affiliate CTA, analytics event, SNS copy or publishing schedule was changed.

## Korean local development watchlist — Busan sea taxi

- [Clien discussion](https://www.clien.net/service/board/park/19290927), posted 2026-11-11 22:34 KST, showed 2,222 views, 0 likes and 5 comments when checked. Local commenters discussed transfer access, weather, whether the short route saves time, and possible future extensions such as Busan Station connections. This is a small discussion, not representative public opinion.
- [Busan Metropolitan City notice](https://www.busan.go.kr/nbtnewsBU/1763204), dated 2026-11-11, confirms a 45-minute media-only test route from APEC Naru Park via Gwangalli and Haeundae. It states that infrastructure is targeted for completion in the second half of 2027; the notice does not publish a public timetable, fare or booking process.
- [Yonhap report](https://www.yna.co.kr/view/AKR20261111020700051), also dated 2026-11-11, says the operator plans to secure six vessels by January 2028 and begin service once infrastructure is ready. The reported dates differ in emphasis; do not publish a firm launch date.
- Decision: watchlist only. The media test is not a visitor service. Do not describe it as operating or create a new page until the city and operator publish public boarding, route, timetable, fare and booking details.
- The Busan City release marks its attachment Public Nuri Type 4 (attribution, non-commercial use, no modification). Do not reuse the city-supplied image on this commercial site.

## Competitor structure notes

- [Busan 101's Traditional Chinese guide directory](https://www.busan101.com/zh-tw/guides/) groups practical utilities around recommended routes, taxi destination cards, restaurant booking / queues, trip checklists, apps, Naver Map, events, payment and emergency help. Its quick offline phrase card is a useful utility pattern; do not copy its copy or design.
- [Klook Taiwan's Busan Pass guide](https://www.klook.com/zh-TW/blog/visit-busan-pass/) uses timed itineraries and explicit value comparisons. Borrow the decision-support structure only; avoid overpacked schedules and keep official price / eligibility checks current.

## PR scope and QA boundary

- Files changed: `ja/guides/first-trip/index.html` and this research note only.
- User-value hypothesis: Japanese first-time visitors who reach the 1330 / taxi-help section can discover the existing Japanese guide that explains app setup and phone/payment caveats, without creating a competing URL.
- No browser screenshot or visual test was performed. 360px / 390px / 1280px visual review, live link response, and exact-head CI remain to be verified after the Draft PR is opened.
- No GA4 / GSC query was made. No SNS content or schedule was inspected for changes or modified in this task.

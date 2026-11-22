# Community and local mobility research — 2026-11-23

## Decision

Improve discovery of existing Japanese taxi-app guidance by adding one internal link from the Japanese first-trip guide to the existing Japanese late-arrival guide. Do not create a Japanese taxi-guide URL in this run: owner direction in [issue #613](https://github.com/xkrrudfbs45-afk/busan-travel-guide/issues/613) pauses new guide URLs and prioritizes deepening existing pages.

## Community signals

| Market / source | Date and context | Signal | Reliability / limitation |
|---|---|---|---|
| Taiwan — [Dcard Korea Travel](https://www.dcard.tw/f/korea_travel/p/262359468) | Search-indexed during the 2026-11-23 review; title: “11月底釜山4天3夜行程健檢（主要交通計程車）” | A four-day / three-night itinerary relies mainly on taxis; the visible reply asks how many travellers and how much large luggage they have. | Direct page fetch returned 404 and the post date could not be independently confirmed. Treat as a weak qualitative signal, not demand volume. |
| Taiwan — [PTT Korea_Travel](https://www.ptt.cc/bbs/Korea_Travel/M.1788754903.A.0A6.html) | 2026-09-07; first Busan trip with children aged 12 and 15 | The traveller used Uber for most days, noted long cross-district journeys, and concluded that grouping one or two nearby areas per day makes planning easier. | One family-trip report, not a representative survey. It supports the route-planning / taxi-choice problem, not a universal preference for taxis. |
| English — [Reddit: “Kakao Taxi No Foreigners?”](https://www.reddit.com/r/koreatravel/comments/1vg72eq/kakao_taxi_no_foreigners/) | The page showed “3mo ago” on 2026-11-23; exact post date was not exposed. Several replies. | Visitors report confusion around Korean identity verification and ask whether to use K.Ride or Uber. Replies are mixed and include personal experiences. | Anecdotal user reports; not proof of a universal app restriction or fare advantage. |
| Japan — [Yahoo!知恵袋: Korean taxi apps](https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q14331328619) | 2026-09-13; 2 answers, 959 views shown on the page | A Japanese traveller asks which of Kakao T, Uber and K.Ride to prepare. The accepted answer recommends K.Ride as the easier foreign-visitor option and Kakao T as a backup. | Single Q&A; the recommendation is user-generated, not an official guarantee. |
| Japan — [4travel Busan solo-trip log](https://4travel.jp/travelogue/12074223) | 2026-05-31 to 2026-06-01; solo trip | The itinerary uses bus and subway between Seomyeon, Jeonpo and Gimhae Airport. | Useful counterexample: public transport remains viable for a light-luggage solo itinerary; not a taxi-app demand signal. |
| Japan — [4travel Busan solo-trip log (October)](https://4travel.jp/travelogue/12079605) | 2026-10-10 to 2026-10-12; solo trip; 22 likes and 755 page views displayed | The traveller could not identify the fixed Kakao Taxi pickup pin at Gimhae Airport, gave up and waited about 10 minutes at the official taxi rank. Later, the app worked from the hotel, but pickup was again difficult around congested Gamcheon. | One traveller's report, not evidence that app pickup generally fails. It supports a conditional official-rank fallback, not an anti-app claim. |
| Taiwan — [Dcard five-day Busan + Seoul itinerary](https://www.dcard.tw/f/korea_travel/p/261419325) | 2026 itinerary; post date not displayed; 70K+ views shown; trip dates 4/29–5/3 | The author reported an Uber airport-to-Songjeong card charge about NT$200–300 above the initial in-app estimate, then used Kakao T without the same issue. | One account without a receipt or fare breakdown; not evidence of overcharging. It reinforces explaining that an estimate is not a fixed fare and retaining the trip record / receipt. |

No relevant, independently verifiable current post was surfaced in the accessible public results from Naver cafes/blogs, DCInside, Theqoo, Ppomppu, public Instagram/YouTube comments or local parenting forums in this pass. No login or access-control bypass was attempted.

## Official K.Ride fact check — checked 2026-11-23

- [K.Ride's current English service page](https://utility.kride.kakaomobility.com/?lang=en) lists English, Japanese, Simplified Chinese and Traditional Chinese UI; 133-language destination search and driver chat; estimated fares before booking; and credit/debit-card plus mobile payment. It currently describes service across 34 countries.
- [VisitKorea / Korea Tourism Organization's international-visitor transportation guide](https://english.visitkorea.or.kr/public/contents/travel/KoreaTransportationGuide_enu.pdf), published 2026-05-18, lists k.ride as a taxi-hailing platform and marks foreign-issued credit cards as accepted.
- [Kakao Mobility's K.Ride page](https://www.kakaomobility.com/k-ride) uses “30+ countries” and “100+ languages”; the current [K.Ride service page](https://utility.kride.kakaomobility.com/?lang=en) uses 34 countries and 133 languages. Keep the counts tied to the exact page and its wording rather than mixing them.
- [K.Ride privacy policy](https://kride.kakaomobility.com/webview/terms/22?lang=en), effective 2025-04-15, lists a mobile phone number and nationality for email sign-up, and a mobile phone number, nationality and Google/Apple account for SNS sign-up. It does not state which foreign country codes will pass verification.
- Editorial rule: never promise that a Korean number is unnecessary or that every foreign number will work. Advise visitors to test their own number and payment method before travel. Keep K.Ride features distinct from Kakao T features.

## Existing coverage and change

- EN and zh-TW already have the existing taxi-vs-subway guide. No JA equivalent exists; new guide URLs remain paused.
- The EN, JA and zh-TW late-arrival pages previously named GrabPay as a supported k.ride payment option. The current k.ride service page displays an Alipay+ logo but does not explicitly list GrabPay; VisitKorea's 2026-05-18 guide independently marks foreign-issued credit cards accepted for k.ride. All three late-arrival pages now remove the unsupported GrabPay claim, link the official VisitKorea source and distinguish app payment options from phone-number verification. The privacy policy does not state which foreign country codes pass verification.
- The JA first-trip guide previously linked only to the taxi-fare section of the JA transit-card guide. This change adds a short pre-trip reminder and a contextual link to the existing JA late-arrival section `#taxi-app`.
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

- Files changed: `guides/late-arrival-gimhae-airport/index.html`, `ja/guides/late-arrival/index.html`, `zh-tw/guides/late-arrival/index.html`, `ja/guides/first-trip/index.html`, and this research note.
- User-value hypothesis: Japanese first-time visitors who reach the 1330 / taxi-help section can discover the existing Japanese guide that explains app setup and phone/payment caveats, without creating a competing URL.
- Exact-head GitHub CI passed: [run #45045880907](https://github.com/xkrrudfbs45-afk/busan-travel-guide/actions/runs/45045880907). The public static build and all dependency-free audit steps completed successfully.
- Existing warnings remain outside this PR's scope: 269 sitemap entries with the EN solo-dining canonical missing (plus four hreflang-target warnings); the source audit lists 83 pages without explicit `og:image` or `twitter:image` tags (26 EN, 24 JA, 29 zh-TW, 4 other), but the build enhancer injects defaults and the generated-output social-meta check passes with 0 gaps. These source metadata warnings do not prove that article photos are missing. Strict image-credit audit: 53 active / 61 registered / 8 unused-entry warnings / 0 errors. Homepage food cards pass at 10 / 10 distinct URLs; external target links missing safe `rel`: 0.
- No browser screenshot or visual test was performed. 360px / 390px / 1280px visual review and live link response remain unverified; do not treat CI as visual QA.
- No GA4 / GSC query was made. No SNS content or schedule was inspected for changes or modified in this task.

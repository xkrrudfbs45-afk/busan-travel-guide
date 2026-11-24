# Sky Capsule luggage guidance parity — 2026-11-22

## Decision

Deepen the existing Haeundae Sky Capsule sold-out guide in EN, JA and zh-TW. Do not create a new URL. The EN and zh-TW pages lacked the suitcase/locker decision already present in JA; all three pages now point to the existing luggage-storage guide.

## Community signal

- [Reddit r/busan: Is there suitcase storage near Sky Capsule?](https://www.reddit.com/r/busan/comments/1vgzd77/is_there_suitcase_standard_ones_storage_anywhere/) — a public traveler asks where to store suitcases during a Busan day trip. A reply points to lockers at Mipo, Cheongsapo and Songjeong. This is one question, not a demand-volume estimate.
- [Dcard: Busan free luggage-storage locations](https://www.dcard.tw/f/korea_travel/p/254905314), 2024-10-06 — an older Traditional Chinese roundup lists the Busan Travel Lounge and Gwangalli among reported free-storage options. It is historical discovery context only; no current prices, opening hours or availability are inferred from it.
- [PTT: 2026 Busan independent-trip itinerary](https://www.ptt.cc/bbs/Korea_Travel/M.1784120556.A.8B2.html), 2026-07-15 — a five-day itinerary links Seomyeon, Haeundae, Nampo/Jagalchi and Songdo. This supports the usefulness of area-specific luggage planning but is not a direct locker-demand signal.
- [4travel: Golden Week Busan trip](https://4travel.jp/travelogue/12056665), 2026-05-04 to 2026-05-06 — a short multi-area itinerary includes Haeundae Blue Line Park and Nampo. It is an individual trip report, not a demand survey.
- [Yahoo!知恵袋: first Busan trip itinerary question](https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q14329280114), 2026-06-27 — a three-person group asks how to connect several distant attractions over four nights. It is an itinerary-planning signal, not a locker question.

## Official verification — checked 2026-11-22

[Haeundae Blueline Park official FAQ](https://www.bluelinepark.com/eng/faqList.do):
- Suitcases are allowed on the Beach Train and Sky Capsule, but onboard space is limited; the operator recommends lockers at Mipo, Cheongsapo and Songjeong.
- Lockers are one-time use; an additional charge applies after midnight.
- Lockers are not powered from 00:00 to 06:00, so luggage cannot be retrieved in that window.
- The FAQ says only KRW 1,000 banknotes are accepted and warns that inserted bills are not returned.
- The FAQ does not publish a current base tariff; the guide tells readers to check the posted price and operating hours at the station.

[Visit Busan — Busan Travel Lounge](https://visitbusan.net/index.do?lang_cd=ko&menuCd=DOM_000000203016001000&uio_seq=9), checked 2026-11-22:
- Luggage storage window: 10:00–17:00.
- Lounge enquiry hours: 09:00–18:00; break 12:00–13:00; closed on Lunar New Year and Chuseok days.
- This remains in the existing citywide luggage guide; this PR does not duplicate the details.

## Changes

- EN: added a concise suitcase decision section before the Sky Capsule / Beach Train comparison.
- JA: expanded the existing suitcase section with the official locker payment and overnight retrieval constraints, and linked to the existing Japanese luggage guide.
- zh-TW: added a localized suitcase decision section before the pre-departure checklist and linked to the existing Traditional Chinese luggage guide.
- No ticket, fare, locker base price, availability or opening time is invented.
- No image, image credit, URL, canonical, hreflang, affiliate link, analytics, SNS schedule or new page was changed.

## SEO / user-value hypothesis

Visitors searching for Sky Capsule booking and sold-out alternatives often need to decide whether a suitcase can come along. A short answer plus the operator's three locker locations and the 00:00–06:00 retrieval restriction can prevent an avoidable trip disruption. Linking to the existing citywide luggage guide creates a relevant next step without competing with it for a new URL.

## QA / remaining risk

- Static HTML edits only; verify the exact current-main base SHA and run repository CI on the PR head.
- Confirm reciprocal internal links resolve to existing EN / JA / zh-TW luggage guides.
- Check heading IDs for duplicates and safe external-link rel attributes.
- Mobile 360 / 390 / 1280 visual review is pending until a real browser is used.
- No claim of a completed browser visual check or production deployment is made.

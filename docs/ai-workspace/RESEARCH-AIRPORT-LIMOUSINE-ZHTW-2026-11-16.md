# Taiwan Traditional Chinese: Gimhae Airport Limousine Accuracy Fix

Research and source check: 2026-11-16  
Target page: `zh-tw/guides/airport-to-haeundae/`  
Base commit: `ed3681a96ffab3d49e9e78e89fdbd1e0cb7cde03`

## Why this change

The Traditional Chinese page gave the combined 07:10–21:40 window without clearly explaining the two Airport Limousine 1 destinations, and described payment as credit-card-only. The official Busan City timetable separates the airport departures into Jangsan and Gijang patterns: 07:10 / 16:50 for Jangsan, and 10:10 / 21:40 for Gijang. Both patterns run through the Haeundae area, but the terminal destination differs; travellers continuing to the East Busan Tourism Complex or Gijang need the Gijang pattern. The official payment instructions allow Bustago QR reservations, airport kiosk tickets, and transit-card or credit-card boarding when seats remain. Cash is not accepted.

These details materially affect Taiwanese visitors choosing a late airport arrival, deciding whether they need the Jangsan or Gijang destination, and preparing a payment method.

## Community and travel-demand signals

- Taiwan Dcard, public airport-to-city guide: https://www.dcard.tw/f/korea_travel/p/262169005  
  Retrieved 2026-11-16; page showed 6K+ views and 15 likes, but no publication date was visible. The profile appears to be a business/promotional account, so it is not treated as an independent traveller review. It nevertheless illustrates the recurring choice visitors face between light rail + metro, airport limousine and taxi, and repeats the simplified 21:40 last-service claim. Use as an information-gap signal only, not as an authority for schedules.
- Taiwan Dcard, 2026 Busan 4-day/3-night trip: https://www.dcard.tw/f/korea_travel/p/262264413  
  Trip period: early October 2026; page showed 40K+ views. The author described using Uber for repeated cross-city journeys and noted crowding and confusing queues at attractions. This is a single group-trip account, not a population-level demand measure.
- Taiwan Dcard, 2026 Busan 6-day/5-night trip: https://www.dcard.tw/f/travel/p/262207137  
  Page retrieved 2026-11-16; the traveller used the Gimhae Light Rail and transferred at Sasang, and noted the elevator entrance at a Line 2 station. Supports the need to explain the transfer and luggage trade-off rather than presenting a bus-only answer.
- Taiwan PTT, 2026 independent itinerary: https://www.ptt.cc/bbs/Korea_Travel/M.1784120556.A.8B2.html  
  Posted 2026-07-15; a five-day/four-night itinerary includes Seomyeon, Haeundae and local transit. PTT returned search snippets but blocked direct page opening; the post is treated as a limited public signal.
- Taiwan PTT, Seoul + Busan transport-planning question: https://www.ptt.cc/bbs/Korea_Travel/M.1784801459.A.532.html  
  Posted 2026-07-23; asks about KTX vs. intercity bus, two 28-inch suitcases, and whether a three-day Busan stay is too rushed. Search result only; direct opening was blocked.
- Japan 4travel, solo Busan itinerary: https://4travel.jp/travelogue/12077145  
  Trip dates: 2026-09-26 to 2026-09-30; one traveller used the light rail and Line 2 from Gimhae Airport and used T-money. Page showed 7 likes and 128 views. This supports keeping the rail alternative clear for visitors who travel light.
- English Reddit, airport limousine uncertainty: https://www.reddit.com/r/koreatravel/comments/1jdc914/airport_limousine_gimhae_international_airport/  
  Thread started 2025-03-17; a comment dated 2026-03-14 said the Haeundae limousine was operating again and airport ticket machines were available. This is useful historical context for stale search results, not a current timetable source.
- Yahoo!知恵袋: no sufficiently relevant current public question was found in this pass. No login or access-control workaround was used.
- Korean public local information: Busan Global Center public channel notice (2026-01-14) on the Jan. 5 route revision: https://pf.kakao.com/_RnttC/112132211. It is a public local-government information channel, not a traveller review.

## Official fact check — 2026-11-16

1. Busan Metropolitan City, Gimhae Airport Limousine route and fare table (page last updated 2026-01-05): https://www.busan.go.kr/depart/khairportlm
   - Airport Limousine 1 has separate Gijang–Haeundae–Airport and Jangsan–Haeundae–Airport service patterns.
   - Airport-origin first/last times: Gijang pattern 10:10 / 21:40; Jangsan pattern 07:10 / 16:50.
   - The operator's airport-to-Haeundae/Gijang stop list includes the Haeundae-area stops; the branch destination differs after the shared Haeundae section. Visitors continuing to the East Busan Tourism Complex / Gijang need the Gijang pattern.
   - Adult / youth / child fares: KRW 9,500 / 7,600 / 4,800.
   - No free transfer; cash is not accepted.
   - Bustago app QR reservation, airport ticket kiosk at 1F Gate 4, or transit-card boarding if seats remain.
   - Up to two bags per passenger, combined weight below 30 kg.
   - One preschool child may travel free with a paying adult; a seat-occupying child requires a child ticket.
2. Busan City English announcement, route changes effective 2026-01-05: https://www.busan.go.kr/eng/bsnews01/1714674
3. Korea Airports Corporation, Gimhae Airport public transportation page: https://www.airport.co.kr/gimhaeeng/cms/frCon/index.do?CONTENTS_NO=3&MENU_ID=110
4. Bus operator stop list: https://newbusan.net/tmbi_airportbus/info_bus_stop.html

## Page change

Before:
- The combined time window did not explain the Jangsan and Gijang destination patterns clearly.
- Payment was described as credit-card-only, omitting Bustago QR, the airport kiosk and transit-card boarding when seats remain.
- No child-fare, baggage or transfer information was given in this route-specific block.

After:
- Clearly separates the Gijang and Jangsan airport-origin schedules and explains that both pass through the Haeundae area but have different terminal destinations.
- Explains that 21:40 is the Gijang-pattern last departure, while the Jangsan-pattern last departure is 16:50; visitors continuing to Gijang / East Busan need the Gijang pattern.
- Explains Bustago QR, Gate 4 kiosk, transit-card / credit-card boarding when seats remain, and no cash.
- Adds youth/child fares, preschool-child rule, luggage allowance and no free transfer.
- Adds Busan City's route-and-timetable page alongside the English notice and airport page.

## SEO and visitor-value hypothesis

This is an accuracy and task-completion improvement for Taiwan search intent such as:
- 金海機場到海雲台機場巴士
- 釜山機場利木津末班車
- 釜山機場巴士付款方式
- 釜山機場到海雲台行李

Expected value: fewer missed-service and payment surprises, better confidence choosing between the airport limousine and light rail + metro, and more useful onward navigation to the Traditional Chinese transit-card guide. No ranking or conversion uplift is claimed before measurement.

## Images, tests and remaining risks

- No images, image URLs, image credits, OG images or image metadata changed. No new image licence is required.
- The change is limited to the existing Traditional Chinese airport-to-Haeundae guide and this research note. EN and JA pages were checked and already distinguish the two service patterns.
- CI must run against the exact PR head. No local repository build was run in this environment.
- Actual browser checks at 360 px, 390 px and 1280 px remain pending; do not describe them as completed.
- Stop-level timetables and service patterns can change. The official city page was last updated 2026-01-05; visitors should verify their exact stop and destination on the travel date.
- Boarding-platform information is inconsistent across third-party Taiwan travel pages (one says 2, others say 3); the current edit therefore retains the terminal floor and Gate 4 ticket-kiosk location but tells readers to follow the airport's current terminal signage instead of hard-coding a platform number.
- No GA4/GSC query was run in this automation pass. No SNS posts or schedules were changed.

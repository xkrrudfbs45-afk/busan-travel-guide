# Metro locker source reconciliation — 2026-11-24

Checked: 2026-11-24 (KST)  
Scope: Existing EN / JA / zh-TW luggage-storage and KTX-booking guides. No new URL.

## Editorial decision

Use the current operating-company table from Busan Transportation Corporation for locker dimensions and first-three-hour base prices. Keep Busan City's separate luggage-storage directory for the locations and staffed-service listings it provides.

The two official pages do not publish identical summary figures. Showing both tables on the same Go2Busan guide without a clear source hierarchy can make a visitor choose the wrong locker size or expect the wrong base price. The dedicated luggage guide therefore keeps one operator-level price table and explains why the City summary table is not repeated. The KTX booking guides now use the same operator-level figures.

## Current operator data

Primary source: [Busan Transportation Corporation — locker sizes, three-hour base prices and station counts](https://work.humetro.busan.kr/homepage/default/facilities/list02.do?gubun=4&menu_no=1001010804), checked 2026-11-24.

- Line 1 extra-large: 37 × 87 × 55 cm; KRW 6,000.
- Line 2 extra-large: 42 × 90 × 55 cm; KRW 6,000 weekdays / KRW 6,600 weekends.
- Lines 3–4 extra-large: 42 × 90 × 55 cm; KRW 6,000.
- These are base prices for the first three hours. Hourly extension charges vary by line; the operator notes an additional fee from midnight on the day of use.
- Installed locker counts are not live vacancy data. The pages continue to warn that availability is not guaranteed and users should check the physical locker and kiosk.

## Why the City table is not used for price/fit

[Busan City luggage-storage directory](https://www.busan.go.kr/intobusan-BTS-BOF-en/checkroom), checked 2026-11-24, remains useful for listed staffed storage points and addresses. Its summary table differs from the operator page:

- Line 1 dimensions differ.
- Line 2 weekend small-locker base price is listed as KRW 2,750, while the operator page lists KRW 2,700.
- Lines 3–4 dimensions and large / extra-large base prices differ.

The pages do not claim that the City directory is invalid. They now make the source roles explicit: City directory for listed locations; operator page and on-site label/kiosk for locker dimensions and current base prices.

## Community signals and cross-checks

- Taiwan Dcard, [2026 Busan + Seoul five-day trip](https://www.dcard.tw/f/korea_travel/p/261419325): on Day 4, one traveller reports that Busan Station lockers were nearly full; one suitcase fit after another user collected theirs, while the companion used the staffed Zimcarry counter. The traveller reported 09:30–16:00 for ₩8,000 versus a ₩6,000 locker. The post showed 104 reactions and 10 comments when checked on 2026-11-24; its exact publication timestamp was not exposed. Treat the price and availability as one trip's experience, not a current universal rate or market-wide demand.
- Taiwan Dcard, [2026 Busan six-day / five-night trip](https://www.dcard.tw/f/travel/p/262207137): the page showed 20K+ views when checked; the traveller describes a 02:35 departure, 06:05 arrival and a 09:00 Spa Land visit, with luggage storage at the facility. This is one trip report and the view count is not a measure of total demand.
- Taiwan PTT, [five-day Busan family trip](https://www.ptt.cc/bbs/Korea_Travel/M.1788754903.A.0A6.html), 2026-09-07: family travel context, a Busan Station-area stay and heavy use of taxis. Useful for route and group-size context, not locker availability.
- Japan 4travel, [Zimcarry at Busan Station](https://4travel.jp/os_shisetsu_tips/15308080), review dated 2026-09-02 for an August 2026 visit: a traveller describes the staffed counter near Exit 5 and QR-based booking. One review only; confirm current operator terms.
- English Reddit, [Free luggage storage in Busan?](https://www.reddit.com/r/BusanTravelTips/comments/1vt6ati/free_luggage_storage_in_busan/), 2026-08-20: lists Busan Travel Lounge, Haeundae Platform and Gwangalli Tourist Information Center as free options. The post is one community thread and is treated as a lead, not proof of current terms.
- Official cross-check: [Yonhap, 2026-07-29](https://www.yna.co.kr/amp/view/AKR20260729118100051) says the Haeundae Platform free luggage service ran only from 2026-08-04 to 2026-08-30, excluding Mondays, 10:00–18:00. It was a temporary summer lounge service, so it is not presented as a year-round option.
- English Reddit, [luggage near the Sky Capsule](https://www.reddit.com/r/busan/comments/1vgzd77/is_there_suitcase_standard_ones_storage_anywhere/), 2026-08-06: a reply points to lockers at Mipo, Cheongsapo and Songjeong. The existing guide already links the operator's current locker FAQ; no duplicate content was added.
- Korean TheQoo, [large suitcase bus pilot discussion](https://theqoo.net/square/4137519570), 2026-03-24: historical public discussion only. It is not used to describe a current bus exception.
- Naver Blog search was blocked by robots.txt. Instagram showed a login wall. No access controls were bypassed. No directly relevant recent public posts surfaced in this pass from Clien, Ppomppu, DCInside or Yahoo!知恵袋.

## Competitor structure check

- [Stepless in Busan](https://stepless.kr/en/tips/exploration/luggage) lists Haeundae Platform among free luggage locations without making the temporary 2026-08-04–08-30 period clear in the visible summary. This can become stale travel advice.
- [Welcome Busan](https://welcome-busan.com/guide/travel-tips/busan-luggage-storage-guide/) gives a broad station-by-station locker overview, but its “rarely run out” language is not supported by live vacancy data. Go2Busan retains the distinction between installed counts and live availability and separates KTX-station lockers from Metro lockers.

## Changes in this branch

- Updated existing EN / JA / zh-TW luggage-storage pages: removed the duplicate City summary price table, kept the operator table, clarified source hierarchy and updated the page edit date.
- Updated existing EN / JA / zh-TW KTX booking pages: replaced the City summary table with the same current operator-level extra-large dimensions and first-three-hour prices.
- No URL, canonical, hreflang, sitemap, search-index, image, affiliate, analytics, or SNS changes.
- No venue is represented as personally visited.

## Verification status

- Source-level replacement checks: pending until the branch commit is created.
- Build and repository audits: pending CI.
- Browser checks at 360 / 390 / 1,280 px, image crop / HTTP / MIME, and LCP / CLS: not performed in this run.
- No merge, main change, or production deployment.

# Research note: winter layering and solo-dining navigation

**Checked:** 2026-11-17 (KST)  
**Repository baseline:** `main` at `0ad092ad30ab35cc87ef2534add21b3907c187ab`  
**Draft implementation:** PR #497, branch `content/winter-layering-localization-20261117`

## Decision

1. Strengthen the existing EN / JA / zh-TW Busan winter guide with one practical detail: indoor malls, cafés and metro cars may feel warmer than the street, so removable layers are more comfortable than one very heavy coat.
2. Update the existing packing FAQ to match the visible advice and keep the EN FAQPage answer synchronized.
3. Add a localized internal link from each winter guide to the already-existing food-etiquette guide for one-person portions, minimum orders and Korean phrases.
4. **Do not create a new solo-travel page.** The existing food-etiquette guide already covers solo-friendly meal categories, minimum-order/shared-table caveats, asking before joining a queue, booking-versus-walk-in uncertainty, and Korean phrases in all three locales. Search evidence supports better discovery of this existing content, not duplication.
5. Do not publish named “solo-friendly” restaurant recommendations from forum comments alone. Verify current one-person service, menu, minimum order and booking/walk-in rules with the business before naming a venue.

## Community evidence

### Taiwan

- **Dcard — “11月去釜山怎麼穿？發熱衣、羽絨衣要帶嗎？”**  
  https://www.dcard.tw/f/korea_travel/p/262410978  
  Surfaced as “today” in the 2026-11-17 crawl. The visible author is a clinic-branded/featured account (“The First 釜山大淵皮膚科”), not an independent traveler diary. The article raises practical questions about base layers, down jackets, Gwangalli night views and indoor heating; one reader comment says they plan to visit in late December and are worried about the cold. Treat it as a current topic/question signal, not proof of organic market-wide demand.
- **Dcard — “韓國釜山11月底自由行 #天氣穿搭”**  
  https://www.dcard.tw/f/korea_travel/p/257335115  
  Older user discussion around 2024-11-26 to 2024-11-28. Several replies report large day/night differences, windy seaside conditions and warmer shop/metro interiors. This is seasonal corroboration, not a current forecast.
- **PTT — “第一次到釜山旅遊”**  
  https://www.ptt.cc/bbs/Korea_Travel/M.1769864293.A.ABB.html  
  Posted 2026-01-31. Search result describes a group of 7 adults, 3 middle-school students and 1 elementary-school child planning a short Busan stay before a ferry to Fukuoka; questions include hotel base, a group meal and public transit versus charter. Direct page open returned 403, so use only the public search snippet and do not infer comment consensus.

### Japan

- **4travel — “慶州・釜山③4泊5日1人旅｜釜山で楽しく街歩きの旅”**  
  https://4travel.jp/travelogue/12074223  
  Trip dates 2026-05-31 to 2026-06-01; page showed 7 likes. The solo traveler describes Jeonpo café street, Seomyeon walking, local food and transit to Gimhae Airport. This is one detailed trip report, not a demand estimate.
- **Yahoo!知恵袋:** no sufficiently relevant current public Busan solo-travel or winter-clothing Q&A was verified in this pass.

### English-language communities

- **Reddit — “Solo Gejang in Busan”**  
  https://www.reddit.com/r/koreatravel/comments/1wxvdyf/solo_gejang_in_busan/  
  When opened on 2026-11-17, the page displayed “3d ago”. The traveler asks for a specific crab restaurant that accepts one diner because Naver/Google search and booking results are inconclusive. Comments contain venue suggestions, but those suggestions are user-generated and were not independently verified; none were copied into Go2Busan. The existing food-etiquette page is the safe next step until a business confirms current solo service.
- **Reddit — “Winter - itinerary help”**  
  https://www.reddit.com/r/koreatravel/comments/1xtbrwu/winter_itinerary_help/  
  Search result dated 2026-11-11 describes a family with two children trying to combine Haeundae, Nampo, Yeongdo and East Busan. Page open was unavailable in this pass; treat it as a search-result signal only. It supports area-based planning as a useful theme, not a verified itinerary.
  
### Korean public communities

- **TheQoo travel board — “공연 보러 내려간 김에 겨울 부산 혼여! 뭐할까?”**  
  https://theqoo.net/travel/4069678410  
  Posted 2026-01-22; page showed 447 views and 4 comments. A one-night solo traveler compares Haeundae/Mipo, Busan Station–Seomyeon/Nampo, and Gwangalli/drone-show options around a performance schedule. Useful evidence of a real planning question, but one thread only.
- **DCInside domestic travel gallery — “부산 혼자 1박2일 코스”**  
  https://gall.dcinside.com/board/view/?id=travel&no=75500&page=8  
  Posted 2026-06-02; 742 views and 0 comments. One proposed route runs Gimhae Airport → Haedong Yonggungsa → Haeundae → Gwangalli. Treat as a single itinerary example, not a repeated trend.
- **Other Korean community searches:** TheQoo and DCInside produced the relevant examples above. Clien and Ppomppu searches did not surface a useful current Busan travel discussion in this pass. Naver Blog access was blocked by robots; no login or access-control bypass was attempted. No useful public Instagram/YouTube comment thread was verified.

## Official facts and competitor check

- Busan Metropolitan City's official event listing confirms the 13th Haeundae Light Festival period as **2026-11-28 to 2027-01-10**, lighting hours **18:00–23:00**, free admission, with the lighting ceremony at 18:00 on 2026-11-28:  
  https://www.busan.go.kr/eng/bsevents/1762645
- The existing winter guide already uses these dates and hours, so no event-date copy was changed.
- Visit Busan's event/calendar surfaces are useful for event discovery, but the city’s edition-specific event listing is the source of record for the date and hours above. Do not substitute an undated or mismatched calendar snippet.
- No volatile weather average was added. The guide continues to tell visitors to check the forecast for their exact travel dates.

## Winter-events competitor benchmark and localization coverage

- The repository's English-only `guides/busan-winter-lights-christmas-2026/` is an aggregation page for Haeundae Light Festival, Gwangalli M Drone Light Show, Gwangbok-ro Street Festa / planned winter lights, and Christmas Village.
- The existing EN / JA / zh-TW winter-travel guides already localize the 13th Haeundae Light Festival dates and 18:00–23:00 hours. JA and zh-TW also link to their own localized Christmas Village 2026 pages; those pages contain the 21 operating days, time-slot rules, standard ticket prices, YES24 ticket link, and a caution that overseas booking/payment conditions must be checked through the organizer's “For International Visitors” route. Therefore no duplicate winter-event page or extra event block was added in this run.
- The competitor Busan.net's article published 2026-11-13 uses a useful “at a glance” event table, map pins with nearest subway stations, a one-evening Centum City → Haeundae route, ticket price table and FAQ: https://busan.net/en/guide/busan-winter-lights/
- Our EN hub has deeper caveats around confirmed vs planned schedules, especially Gwangbok-ro procurement dates and unconfirmed December drone-show dates. The competitor's page is more scannable, but its Seomyeon Light Festival dates (29 Oct 2026–14 Feb 2027) were not confirmed by an edition-specific official source in this pass. Busan City currently lists “2026 Seomyeon Light Festival” as an upcoming event without dates; the public Visit Busan page found in this pass describes the **2025** edition (13 Oct 2025–14 Feb 2026). Do not copy the competitor's 2026–27 Seomyeon dates until Busanjin-gu or the organizer publishes a current notice.
- Busan Metropolitan City's current Haeundae listing confirms 28 Nov 2026–10 Jan 2027 and 18:00–23:00, while the competitor article still says the nightly hours have not been announced. Our localized pages already use the current city information.
- Christmas Village's organizer page provides a separate “For International Visitors” route, and YES24's official notice confirms the standard prices and time slots. The existing localized guides correctly avoid assuming that Korean ticketing accounts or payment methods work for overseas visitors. Do not infer the international booking URL from a non-clickable button; keep the current organizer route and caution.

## Image review

- The winter guide hero remains the Busanhang Bridge viewed from Yeongdo, photographed in October 2019; credit: Choi2451 / Wikimedia Commons, CC0 1.0, recorded in `assets/data/image-credits.json`.
- The photo is a real Busan location and is rights-cleared, but it is not a winter-specific scene. A recent Haeundae night photo found on Commons is from 30 April 2026 and licensed CC BY-SA 4.0, not a winter scene; it was not substituted just to make the page look seasonal.
- No image was added, removed or cropped in PR #497. Browser crop checks at 360 / 390 / 1280px remain pending.
- Site-wide Technical SEO audit #1565 on PR #497's exact head: 49 images in use, 57 registered, 9 warnings and 0 errors (strict). The Dongnae-eupseong image warning restricts use to Go2Busan website pages, not newspaper/Facebook reuse; 8 unused registry entries remain. Fourteen repeated CSS background URL notices were informational. Homepage food-card audit passed with 10 distinct image URLs.

## Repository and operational status

- Current `main`: `0ad092ad30ab35cc87ef2534add21b3907c187ab`.
- PR #497: Draft, open, mergeable; three localized winter guide files plus this research note. No merge or deployment.
- GitHub Actions Technical SEO audit #1565 passed on PR head `f5b3d6e78afe70b11ffad8c179492401e3e91a39`. Build, dependency-free audit and local SEO crawl passed; 242 pages scanned; 0 external `target=_blank` safe-rel problems.
- Main sitemap in the repository contains 241 URLs (EN 87, JA 66, zh-TW 88). PR #494's earlier technical audit reported 880 hreflang links and no missing canonical pages; this was not rerun in this pass.
- The latest growth-scan comment available in issue #375 (2026-11-16 23:55 KST) recorded deployed version `0ad092a` in sync with main and 241/241 sitemap URLs returning 200. Direct live-origin verification was not obtained in this pass, so that remains the latest recorded operational snapshot, not a fresh live check.
- No GA4/GSC query was made, per the daily-only rule. No SNS publishing or schedule changes were made.

## Next verification

1. Review PR #497 and perform real browser checks at 360, 390 and 1280px before merge.
2. If solo-gejang content is expanded later, verify one-person portions, minimum orders, current hours, booking/walk-in policy and menu directly with each named business. Do not reuse Reddit price/hour/address claims without official confirmation.
3. Replace the winter guide hero only when an actual Busan winter scene with clear commercial reuse rights and useful mobile/desktop crops is available.
4. Keep the current Haeundae festival dates aligned with the edition-specific Busan City listing; recheck after any organizer update.

# Go2Busan food + culture verification wave 11 — 2026-11-28

Checked: 2026-11-28 KST. This is the 31–40 batch of the reconstructed 44-row archive, not the recovered original 43-item list. No restaurant cards were added. Public-page changes in this draft PR are limited to editorial transparency on the existing 37-card Traditional Chinese shortlist and a Dec 12 supplement to the existing weekly events pages.

## Ten work packages

### 1) Restore and keep the archive distinctions
- The exact original 43-candidate list remains unrecovered.
- The 44-row tracker is a reconstructed research list and must not be described as the original.
- Candidates 31–40 are documented in `food-verify-wave11-31-40-2026-11-28.csv`.
- The separate 12 incorporated additions remain distinct: 3 Go2Busan editorial additions (Kkangtong Golmok Halmae Yubu Jeongol Main Store, Nampo Jjukkumi, Halmae Jjukkumi Dangam-dong) + 9 media-featured additions (Jeongdaero Sulhansang, Unaju, Kurumi, Nam Thai Noodle, Myeonokhyangcheon, Jungang Momil, Moemiljip, Musubi, Jumunjin Gyohangri Makguksu). They are not 부산일보 official recommendations or a reporter's personal visit record.
- The current Traditional Chinese food page has 37 H3 cards. Neither the 12 additions nor the 44-row archive is a public-page count.

### 2) Candidate 31–40 evidence classification
- **Higher-confidence listing snapshots (not venue-confirmed):** Jinpum Mulhoe, Hapcheon Gukbapjip, Jaegi Dwaeji Gukbap, Songjeong 3dae Gukbap, Dongbang Milmyeon.
- **Possible identity match, not assumed:** Jame Gukbap may refer to Jamae Gukbap in Minrak; the archive spelling and branch are not resolved.
- **Historical administrative record only:** Subok Gamasot Dwaeji Gukbap (2014 record).
- **Address/branch conflicts:** Bubu Hanbang Milmyeon; Sujeong Milmyeon (at least two records with different districts and license dates).
- **Unresolved:** Daecheon Goga.
- No unrelated businesses were substituted. Current operation, venue-confirmed prices, and image rights are missing for the entire batch; none is cleared for public publication.

### 3) Source and price conflicts
- Jinpum Mulhoe: KTO/TourAPI-derived listing snapshots show address, phone, 09:00–21:00 and seafood/abalone menu categories; prices are missing.
- Hapcheon Gukbapjip: current MICHELIN Guide listing confirms address, phone and 09:30–14:00 / 14:30–20:00 hours; 12,000/14,000 KRW menu prices are secondary snapshots only.
- Jaegi Dwaeji Gukbap: secondary snapshot lists address, phone, 10,000 KRW pork/sundae bowls and a Monday closure; venue confirmation remains outstanding.
- Songjeong 3dae Gukbap: KTO-derived snapshot plus secondary prices; the listing says 24-hour operation, but venue confirmation is outstanding.
- Dongbang Milmyeon: current secondary snapshot lists 7,000/7,500 KRW bowls and 10:30–15:00 hours, while another listing shows a later closing time. Hold until reconciled.
- Bubu Hanbang and Sujeong Milmyeon: conflicting identity/location/administrative records. Hold.
- Subok Gamasot: 2014 administrative record only; current operation unknown.
- Daecheon Goga: no exact identity match found in this search pass.

### 4) Conditional Traditional Chinese restaurant copy — not for publication
**SEO title (draft):** 釜山美食候選：海鮮物會、豬肉湯飯與影島冷麵  
**Meta (draft):** 整理釜山海鮮物會、清湯豬肉湯飯、影島市場湯飯與冷麵候選，附韓文店名、街區和來源快照。非排名、親訪評論或新聞社推薦；營業、價格與照片權利仍待確認。

**Candidate snippets (all held):**
- 진품물회：기장 연화리海鮮物會候選；公開資料快照顯示地址與營業時間，但價格及店家確認尚缺。
- 합천국밥집：MICHELIN Guide有地址、電話與營業時間；價格快照不是店家確認。
- 재기돼지국밥：影島市場周邊湯飯候選；價格/時間來自公開列表快照。
- 송정3대국밥：西面湯飯候選；KTO資料與價格快照仍需店家確認。
- 동방밀면：影島麵食候選；營業時間資料衝突，先不刊登。

### 5) EN / JA localization drafts — not for publication
**EN title:** Busan Food Candidates: Seafood Mulhoe, Pork Soup & Yeongdo Noodles  
**EN meta:** An editorial research shortlist—not a ranking, firsthand review or newspaper endorsement. Current operation, menu prices and photo rights remain unverified.

**JA title:** 釜山グルメ候補：ムルフェ、テジクッパ、影島の冷麺  
**JA meta:** 編集調査の候補リストで、ランキング、訪問記、新聞社の推薦ではありません。営業状況、価格、写真利用権は未確認です。

All localized candidate copy remains conditional and is not posted to the public food page.

### 6) Existing 37-card page transparency fix
- The existing `/zh-tw/guides/busan-newspaper-food-picks/` title/deck/meta now use neutral editorial-selection language instead of an unsupported claim that all 37 are frequently visited by locals.
- The visible note states that the page is not a ranking, firsthand review or Busan Ilbo recommendation; media references are discovery sources, not endorsement.
- The 37-card page's original information check date (2026-11-11) is preserved; this PR only adds a transparency update dated 2026-11-28.
- No restaurant details or photos were added/changed.

### 7) SEO and internal-link strategy
- No new URL. Keep the existing food and weekly-event pages.
- Food links remain on the existing Traditional Chinese food guide, local-food-picks, neighborhood guides, Yeongdo/Kijang/Nampo pages and map where a verified match exists.
- Event links remain on the EN/JA/zh-TW `this-week-in-busan` pages and the existing winter-lights guide.
- SEO metadata now reflects the Dec 12 supplement. The date range is Nov 28–Dec 12, 2026.
- Do not create a new restaurant page until exact identity, current operation, menu/price, image license and a distinct travel-search intent are confirmed.

### 8) Image brief and rights gate
- No restaurant photo used or reused. KTO/TourAPI, Naver Place, social and MICHELIN images are not automatically commercially reusable.
- Before a restaurant image is cleared, record exact asset URL, photographer, license, commercial-use permission and attribution.
- Generic food illustration must be labeled as illustration and not presented as the actual dish/restaurant. No AI image was generated or added.
- Existing weekly-page social-preview image remains a general Gwangalli nightscape with visible attribution (CC BY 2.0), not an event photograph.

### 9) Weekly culture/performance supplement: 2026-12-12
The existing weekly guide already covers Nov 28–Dec 11, including the Dec 3–6 BICBF, Dec 5 Gwangbok-ro Street Festa, Dec 6 marathon travel impact, winter lights, exhibitions and Dec 11 MoCA reopening/concert. The same page now includes a Dec 12 supplement, not a new URL:
- Balcony Music Show: Gwangbok-ro, 18:00–21:00, free (Visit Busan).
- Gwangalli M Drone Light Show: 19:00/21:00, about 12 minutes, free; second-Saturday drone-only format expected; theme unconfirmed; weather/technical cancellations possible.
- Cho Yong-pil & Great Birth: Dec 12 18:00 / Dec 13 17:00, BEXCO Exhibition Center 1, KRW 110,000–176,000, ages 7+, 130 min; YES24 notice.
- Dynamic Duo: Dec 12 18:00, KBS Busan Hall, KRW 143,000, ages 7+; NOL World.
- Baek Ji-young: Dec 12 18:00, Busan Citizens Hall Grand Theater, KRW 121,000–165,000, ages 8+, 120 min; NOL World.
- Kim Na-young: Dec 12 18:00, Sohyang Theater Woori Bank Hall, KRW 132,000–154,000, ages 7+, 120 min; YES24 notice.
- ON STAGE: Dec 12 18:00, Geumsarak, KRW 10,000, all ages, 90 min; NOL listing.
Ticket inventory, foreign-card/ID requirements, delivery/pickup and cancellation fees are not confirmed; the supplement explicitly tells readers to check each seller. Ticket prices are snapshots, not availability claims.

### 10) Community research, competitor insight and QA
- **Taiwan Dcard:** 2024 public posts ask for Busan food recommendations; useful as a historical question pattern, not a current demand estimate. A recent indexed winter-trip post was not clearly date/author-context matched, so it was not used as current demand proof.
- **PTT Korea_Travel:** Jan 2026 group-trip question (7 adults + students/child) asks about group dining reservations, accommodation and transit; Sep 2026 travel report describes taxi/Uber and Busan Station lodging. These show planning questions, not candidate-restaurant demand.
- **Japan 4travel:** Nov 13–16, 2026 trip report is a food-walk/B-grade food trip around Nampo and Yeonsan; another Sep 28–30 report notes seafood, missed milmyeon/pork soup and food itinerary. Neither validates this candidate batch.
- **Yahoo!知恵袋, Reddit, Naver, TheQoo, Clien and DCInside:** no fresh candidate-specific indexed source with enough context to corroborate these names in this pass. This is a search limitation, not proof of no demand. Earlier Reddit public threads from wave 9 remain separately recorded.
- **Competitor benchmark:** Busan.net's current monthly event page combines event dates, exhibition listings and a transport-impact guide. The Go2Busan weekly page keeps route-by-area planning, ticket prices, foreign-access caveats and official links; wording/content was not copied.
- **QA:** source URLs and status snapshots are recorded; no image rights were cleared. The static edits are in a Draft PR. Local build, browser QA at 360/390/1280, visual image/LCP/CLS checks and custom-domain verification were not performed. CI status will be checked after PR creation.

## Source links
- KTO-derived Jinpum listing: https://festival.ttpk.co.kr/places/2844643
- MICHELIN Hapcheon: https://guide.michelin.com/us/en/busan-region/busan_1025838/restaurant/hapcheon-gukbapjip
- Jaegi Dwaeji Gukbap listing: https://eatrank.co.kr/매장/재기돼지국밥
- Songjeong 3dae Gukbap: https://festival.ttpk.co.kr/places/3432951 ; https://eatrank.co.kr/매장/송정3대국밥
- Dongbang Milmyeon: https://eatrank.co.kr/매장/동방밀면 ; https://www.tabling.co.kr/place/677cc8e366de5f069877d58d
- Bubu Hanbang: https://114.it.kr/region/26260/industry/I20106 ; https://www.koobig.com/362431
- Sujeong records: https://opengo.kr/5601fb4f0e887edf2ce71334 ; https://opengo.kr/5601fb520e887edf2ce79c62
- Subok record: https://opengo.kr/5601fb690e887edf2ced79e1
- BICBF visitor guide: https://bicbf.or.kr/en/page/61 ; program: https://bicbf.or.kr/en/page/33
- Balcony Music Show: https://www.visitbusan.net/schedule/view.do?boardId=BBS_0000010&dataSid=6483&menuCd=DOM_000000304010000000
- Gwangalli drone show: https://www.busan.go.kr/eng/bsevents/1713160
- Cho Yong-pil: https://m.ticket.yes24.com/Notice/18493?order=1&type=1
- Dynamic Duo: https://world.nol.com/en/ticket/products/26013663
- Baek Ji-young: https://world.nol.com/en/ticket/products/26014662
- Kim Na-young: https://m.ticket.yes24.com/Notice/18726?order=1&type=1
- ON STAGE: https://nol.yanolja.com/ticket/products/26016860
- Busan.net December benchmark: https://busan.net/en/month/2026-12/

## Release gate
- No public restaurant card added.
- No ticket inventory or booking availability claim.
- No images used for restaurant candidates.
- No PR merge, deployment, external SNS post or schedule change, affiliate/analytics/privacy changes.
- Browser QA and custom-domain verification remain outstanding.

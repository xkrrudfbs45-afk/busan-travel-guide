# Go2Busan food + culture verification wave — 2026-11-28

확인 기준일: 2026-11-28 KST. 공개 게시·예약·SNS 변경·병합·배포는 하지 않았다.

## 10개 작업 묶음

### 1) 맛집 아카이브 복원 상태
- 정확한 과거 원본 43개 후보 목록은 아직 복구되지 않았다. PR #725의 44행은 2016년 책과 공개 자료로 재구성한 검증대기 목록이며 원본 43개와 동일하다고 주장하지 않는다.
- PR #735의 7개 보충 후보는 별도 보충 목록으로 유지한다. 이번 Wave 8은 44행 재구성 목록에서 10개를 선정해 검증 상태를 추가 기록한다.
- 기존 12개 추가 기록은 별도 집계: Go2Busan 자체 편집 3개(깡통골목할매 유부전골 본점, 남포쭈꾸미, 할매쭈꾸미 당감동) + 지역 언론 기사에 등장한 9개(제대로 술한상, 우나쥬, 쿠루미 과자점, 남타이 누들, 면옥향천, 중앙모밀, 뫼밀집, 무스비, 주문진교항리막국수).
- 현재 main의 zh-TW 음식 페이지는 37개 H3 카드다. 12개 추가와 37개 카드 수를 혼동하지 않는다. 3개 자체 편집 추가를 부산일보 기사 추천으로 표시하지 않는다.

### 2) Wave 8 — 10개 후보의 현재 정보 점검
CSV에 주소·전화·메뉴·가격/시간 스냅샷·출처·사진 권리·다음 확인을 분리했다.
- 현재 공개 목록에서 주소/메뉴/시간이 일부 확인된 5개: 미포끝집, 예이제, 국제밀면, 원조개금밀면, 달타이.
- 나머지 5개: 죽림소반, 해운대 옥탑(음식점 범위 재확인), 서고집 안동갈비, 달맞이포차, 미타키. 현재 지점/운영/가격/메뉴가 충분히 확인되지 않아 보류.
- 이번 10개 모두 공개 게시 승인 대상이 아니다. 가격/영업/메뉴의 직접 확인과 사진 상업적 이용권이 부족한 항목은 계속 보류한다. 텍스트-only 게시도 이 검증 기준을 충족한 뒤 결정한다.

### 3) 편집 분리
공개 페이지는 Go2Busan의 독립 편집 목록임을 명시한다. 언론 보도는 발견 경로/출처일 뿐, 부산일보 공식 추천·박종호 기자의 방문·개인 추천·순위로 오인하지 않게 한다. 직접 방문 사실이 확인되지 않은 장소는 방문기처럼 쓰지 않는다.

### 4) 음식 콘텐츠 — 게시 전 원고
**zh-TW 제목:** 釜山美食候選清單：冷麵、韓定食與市場小吃  
**zh-TW 설명:** 本頁是 Go2Busan 編輯整理的候選資料，不是排名、親訪評論或《釜山日報》官方推薦。店家現況、菜單、價格和照片權利逐項核對中；未完成者不發布。可先複製韓文店名到地圖，出發前確認當日營業。

**EN title:** Busan Food Shortlist: Noodles, Korean Meals & Market Snacks  
**EN description:** An editorial shortlist—not a ranking, firsthand review or newspaper endorsement. We publish venue details only after current operation, menu/prices and image rights are checked.

**JA title:** 釜山グルメ候補リスト｜冷麺・韓定食・市場の軽食  
**JA description:** 編集部の候補リストで、ランキング、訪問記、新聞社の推薦ではありません。営業状況、メニュー・価格、写真利用権を確認できた情報だけ掲載します。

### 5) 음식 SEO와 내부링크
- 기존 /zh-tw/guides/busan-newspaper-food-picks/와 /guides/busan-local-food-picks/가 있는 경우 기존 페이지를 보강한다. 신규 URL을 만들지 않는다.
- 연결 후보: /guides/local-food-by-neighborhood/, /guides/busan-milmyeon-history/, /guides/nampo-neighborhood-guide/, /guides/haeundae-neighborhood-guide/, /guides/busan-map/.
- 후보 업소는 지역/음식 분류가 맞을 때만 내부 링크를 붙인다. 언론 기사 원문과 Go2Busan 자체 편집을 분리한다.

### 6) 이미지 브리프
- 음식 대표 이미지: 실제 업소 사진이 권리 확인되지 않으면 사용하지 않는다. 일반 음식 삽화는 해당 업소의 실제 사진으로 오인하지 않도록 illustration/AI illustration 표기를 붙인다.
- 촬영 사진, 원본 URL, 제작자, license, 상업적 이용 조건, 귀속 문구를 파일별 기록. 사진 권리 불명확한 이미지는 교체하지 않는다.
- 모바일 크롭 360/390, 1280, 해상도, WebP/AVIF, 파일 용량, alt, caption, OG, LCP/CLS를 검수한다. 이번 run에서 이미지 교체·브라우저 검수는 하지 않았다.

### 7) 커뮤니티 리서치 — 공개 검색만
- Taiwan Dcard/PTT: 이번 pass에서 날짜·원문·반응을 함께 확인할 수 있는 새 결과는 확보하지 못했다. 이전 기록의 PTT 단체 식사/예약 질문(2026-01-31)과 Dcard 다일정 음식 일정은 단일 사례·날짜 불명 검색 결과로만 유지하고 수요 일반화에 사용하지 않는다.
- Japan 4travel: 2026-03-06~09 식도락 여행기(蟹、河豚、サムギョプサル、海鮮市場 등) 1건이 검색됐다. 여행기 1건이며 현재 영업 증거가 아니다. https://4travel.jp/travelogue/12046557
- Yahoo!知恵袋: 이번 pass에서 관련 공개 검색 결과가 확보되지 않았다.
- English Reddit: 2025-11-02 budget eats 질문과 2026-10-30 Busan 출신 여행자의 식도락/동행 게시물 등 개별 사례만 검색됐다. 표본으로 취급한다.
- 한국 공개 커뮤니티: 이번 pass에서 최근 Naver Cafe/Blog, DCInside, TheQoo, Clien, Ppomppu, 공개 Instagram에서 독립적으로 확인 가능한 다수 후기/댓글 묶음을 확보하지 못했다. 접근 통제를 우회하지 않았다. 이전 Clien 2026-11-27 관광 동선 글도 단일 사례.
- 커뮤니티 신호는 메뉴·영업·가격·예약의 공식 사실로 사용하지 않는다.

### 8) 문화·공연·축제 — 2026-12-05~12-12
다음 7~14일 범위의 12개 상시/기획 항목과 12/12 공연 후보 5개를 CSV로 정리했다. 날짜·장소·가격·예매/접근성·취소 유의사항을 출처별로 구분했다.
- 12/5 광복로 Street Festa, BICBF, 광복로 겨울빛 설치, 해운대 빛축제, 크리스마스 빌리지, 밀락 루체 페스타, 서면 빛축제, 조선의 정원 전시(12/13 종료), F1963 오토니엘, 12/11 부산MoCA 재개관/3개 전시, 12/11 파리 목십자가 소년합창단, 12/12 광복로 Balcony Music Show.
- 12/5·12/12 광안리 드론쇼는 겨울 19:00/21:00, 약 12분, 무료, 기상·기술 취소 가능. 주제는 12/5 “Secrets of the Deep”, 12/12 “Frozen Kingdom: The Lost Sun”로 공식 프로그램 스냅샷을 기록했다.
- 12/12 공연 후보(조용필, 다이나믹 듀오, 백지영, 김나영, ON STAGE)는 공식 예매 공지/상품 페이지의 스냅샷이다. 잔여 좌석을 확인하거나 보장하지 않는다.
- Street Festa 종료 시각: 최신 Visit Busan schedule은 16:00–22:00, 별도 영문 행사 listing에는 20:00 종료가 남아 있다. 최신 일정에 22:00를 사용하되, 게시 시 conflict note와 당일 주최자 확인을 유지한다.
- Gwangbok-ro Winter Light Tree Festival 12/4–1/31, 17:30–22:30은 Jung-gu 재공고의 계획된 조명 설치 일정이다. 전체 방문 프로그램/입장/주차를 보장하는 행사표로 확대 해석하지 않는다.

### 9) 문화 콘텐츠 현지화 / SEO / 내부링크
**zh-TW title:** 釜山 12 月 5–12 日活動｜光復路街頭節、童書展與冬季燈光  
**zh-TW meta:** 整理 12/5–12/12 釜山官方活動：光復路街頭節、BICBF、冬季燈光、展覽與演出。門票、時段與外國人預約條件各異，出發前以主辦/票務頁確認。

**EN title:** Busan Events, Dec 5–12, 2026 | Street Festa, Exhibitions & Winter Lights  
**EN meta:** Plan a week in Busan with Gwangbok-ro’s Street Festa, BICBF, winter light displays, museum reopening and concerts. Ticket terms, age limits and foreign booking access vary; check each official page.

**JA title:** 釜山イベント 12月5〜12日｜街頭フェスタ・展示・冬のライトアップ  
**JA meta:** 光復路のStreet Festa、BICBF、冬のイルミネーション、展覧会と公演を日付別に整理。年齢・料金・発券・予約条件は公式主催/販売ページで確認してください。

**SNS (not scheduled)**
- zh-TW: 「12/5–12 釜山冬季活動：光復路 Street Festa、BICBF、海雲台與西面燈光、博物館新展。免費活動也可能有時段或現場規則，先看官方公告。」
- EN: “Busan, Dec 5–12: Gwangbok-ro’s Street Festa, BICBF, winter lights, museum exhibitions and concerts. Check official ticket, age and access details before you go.”
- JA: 「12/5〜12の釜山：光復路Street Festa、BICBF、冬のライト、博物館新展と公演。無料でも現場ルールや予約条件を公式ページで確認。」

### 10) 운영 / 경쟁 / QA / 다음
- 경쟁 정보 구조: Busan.net 계열 페이지는 날짜·시간·요금·FAQ·이미지의 illustrative 구분을 한 화면에 묶는다. Go2Busan은 3개 언어의 실제 검색 표현, 공식 출처 링크, 구역별 이동, 가격/예약 조건, 확인일을 차별점으로 유지한다. 문구·사진 복사는 하지 않는다.
- 기존 주간 문화 페이지 PR #725와 다음 회차 연구 PR #735가 겹치므로 이번 run에서 public page code를 중복 수정하지 않았다. 새 연구는 docs-only PR로 기록한다.
- Build, browser QA 360/390/1280, live image, LCP/CLS, custom-domain/배포 SHA 확인은 수행하지 않았다. PR 생성·CI·병합·배포·게시를 구분한다.
- no merge, no deployment, no SNS post/schedule change, no affiliate/analytics/price/privacy change.

## Sources
- Visit Busan Street Festa: https://www.visitbusan.net/schedule/view.do?boardId=BBS_0000010&dataSid=6483&menuCd=DOM_000000304010000000
- BICBF Visitor Guide: https://bicbf.or.kr/en/page/61 ; Program: https://bicbf.or.kr/en/page/33
- Haeundae Light Festival: https://www.busan.go.kr/eng/bsevents/1762645
- Gwangbok-ro planned lights (Jung-gu notice): https://eminwon.bsjunggu.go.kr/emwp/gov/mogaha/ntis/web/ofr/action/OfrAction.do?context=NTIS&homepage_pbs_yn=Y&jndinm=OfrNotAncmtEJB&method=selectOfrNotAncmt&methodnm=selectOfrNotAncmtRegst&not_ancmt_mgt_no=30073&subCheck=Y
- Christmas Village: https://www.busan.go.kr/eng/bsevents/1762667 ; YES24: https://m.ticket.yes24.com/Perf/Detail/PerfEtcInfo.aspx?IdPerf=60679&IdSubGenre=15476
- Millak Luce Festa: https://www.busan.go.kr/eng/bsevents/1762643
- Seomyeon Light Festival: https://www.busan.go.kr/eng/bsevents/1762644
- Gardens of Joseon: https://www.busan.go.kr/eng/bsevents/1758965
- F1963 Othoniel: https://www.busan.go.kr/eng/bsevents/1750485
- Busan MoCA reopening: https://www.busan.go.kr/eng/bsnews01/1761775 ; new media exhibition: https://www.busan.go.kr/moca_en/exhibition02/1714141
- Little Singers of Paris: https://classicbusan.busan.go.kr/product/performance/253351
- Gwangalli Drone programme: https://www.gwangallimdrone.co.kr/notice-en/gwangalli-m-drone-light-show-september-performance-program-announcement-2-copy-2
- Cho Yong Pil: https://m.ticket.yes24.com/Notice/18493?order=1&type=1
- Dynamic Duo: https://nol.yanolja.com/ticket/products/26013663
- Baek Ji-young: https://facility.ticketlink.co.kr/help/notice/66176
- Kim Na-young: https://m.ticket.yes24.com/Notice/18726?order=1&type=1
- ON STAGE: https://nol.yanolja.com/ticket/products/26016860
- Food sources are listed row-by-row in the CSV. No image license was confirmed.

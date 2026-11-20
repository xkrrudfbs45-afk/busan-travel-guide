# Go2Busan SNS 전수 점검 — 2026-11-21 (current main)

- 점검 시각: 2026-11-21 08:40 KST
- 기준 main SHA: 41e7468434750a8b22b0568028dafec360249e0f
- 대상: 2026-11-21~2026-12-05, 각 계정 현지 날짜 기준 15일
- 시장 우선순위: zh-TW → ja → en
- 확인 파일: `content/social/instagram/schedule.json`, `content/social/threads-30day/schedule.json`, `instagram-state/publish-log.json`, `threads-state/publish-log.json`
- 보호: 승인 게시물·예약 시각·활성 schedule·이미지·publish-log·state branch·LIVE 설정·외부 계정 변경 없음

## 1. 15일 편성 및 현지화

| 항목 | Instagram | Threads |
|---|---:|---:|
| 기대 슬롯 | 45 | 90 |
| 활성 schedule 등록 | 21 | 80 |
| 시장별 등록 | TW 7 / JP 7 / US 7 | TW 28 / JP 26 / US 26 |
| approved | 18 | 80 |
| draft | 3 | 0 |
| 빈 슬롯 | 24 | 10 |

### Instagram

- 11/21~11/26: TW·JP·US 각 1개씩 매일, 총 18개 approved.
- 11/28: TW·JP·US 각 1개, 총 3개 draft / needs_check.
- 빈 날짜: 11/27, 11/29, 11/30, 12/01, 12/02, 12/03, 12/04, 12/05. 날짜마다 3개 시장이 모두 비어 총 24개 슬롯.
- 21/21 현지 정오(12:00) UTC 변환 일치.
- 21/21 가이드 URL의 국가별 언어 경로와 bio-link URL의 `utm_source=instagram`, `utm_medium=social`, `utm_campaign`, `utm_content` 정상.
- 21/21 카드 정의 5장, 마지막 카드 CTA 보유. 정확한 캡션 중복 0건.
- 11/28 광복로 공연 3개는 draft / needs_check. 행사 일정은 부산시 공식 페이지에서 확인했지만 렌더된 이미지가 없어 시각 QA 전 승인하지 않는다.

### Threads

- 80개 등록, 모두 status=approved. 시장별 TW 28 / JP 26 / US 26.
- 12/04는 TW 2개만 있고 JP·US 각 2개가 비어 총 4개 누락. 12/05는 세 시장 모두 비어 총 6개 누락.
- 현지 시각과 `publish_at_utc` 변환 80/80 일치.
- 링크 답글 33개, 링크 없는 본문 47개. 링크 답글 33/33의 국가별 경로와 `utm_source=threads`, `utm_medium=social`, 캠페인·콘텐츠 UTM 정상.
- 링크 없는 본문 중 25개는 물음표를 사용한 질문형, 22개는 명시적인 질문형이 아니다. 다음 캠페인에서는 경험을 묻는 CTA를 보강한다.
- 정확한 본문 중복 0건. 다만 같은 날 2개 게시물 40쌍 중 34쌍(85%)이 같은 주제군이다. 11/21 서면, 11/22 부산 음식, 11/25 시장 에티켓, 11/26 해안 산책은 두 게시물의 관점이 반복된다.
- 17개 주제군 중 서면·부산 음식·우천 일정·시장 에티켓·해안 산책 등 부산 현장형 주제는 25/80(31%). 나머지 55개는 예산·언어·준비·여행 예절·일정 관리 등 일반 조언 비중이 높다.
- `d28-us-1`은 12/01 미국 08:00, status=approved이나 verification=needs_check. “The best plan...”의 주관적 최상급 플래그가 남아 있어 상태 메타데이터 불일치가 있다. 승인 문안은 변경하지 않았다.
- 15일 편성에서 종료된 행사나 과거 축제 재홍보 문안은 발견하지 못했다.

### 11/21 당일 Threads 진행 상태

- `d18-jp-1`: 일본 08:00 슬롯. 점검 시각 기준 40분 경과했지만 3시간 late window 안이며 publish-log에는 아직 항목이 없다. Missed로 분류하지 않는다.
- `d17-tw-1`: 대만 08:00 슬롯. 한국시간 09:00 예정으로 점검 시각에는 아직 도래하지 않았다.
- 미국 08:00 슬롯은 미국 현지 오전에 도래한다. 세 시장의 당일 발행 여부를 미리 추정하지 않는다.

## 2. 실제 발행 상태 — state branch publish-log

### Instagram

- **28 published / 2 missed / 0 failed**. Published 28개 모두 permalink가 기록돼 있다.
- 최신 시장별 게시물:
  - TW: https://www.instagram.com/p/Df9IUf0ETp3/
  - JP: https://www.instagram.com/p/Df9IQfYEaXb/
  - US: https://www.instagram.com/p/Df-h7_cgQuy/
- Missed:
  - `ig-fresh15-1118-us`: 1회 시도, HTTP 403 `Application request limit reached`, permalink 없음.
  - `ig-fresh15-1119-us`: 1회 시도, HTTP 403 `Application request limit reached`, permalink 없음.
- 두 건은 API 요청 제한 응답이다. 실행 자체가 없었던 Threads 누락과 원인을 구분한다. 재발행·수동 retry하지 않았다.

### Threads

- **68 published / 31 missed / 0 failed**. Published 68개 모두 permalink가 기록돼 있다.
- 최신 시장별 게시물:
  - JP: https://www.threads.com/@go2busan.jp/post/Df9m0bmlqwC
  - TW: https://www.threads.com/@go2busan.tw/post/Df9nA99lsrR
  - US: https://www.threads.com/@go2busan.us/post/Df9y87illcJ
- Missed 31개:
  - 11/10 18개
  - 11/11 2개
  - 11/17 6개
  - 11/18 3개
  - 11/19 2개
- 31개 모두 attempts=0, permalink 없음, API 오류 없음. publisher가 허용 시간 안에 API 게시 시도를 하지 못한 실행 공백이다. publish-log만으로 특정 GitHub Actions run의 생략·지연 원인을 단정할 수 없다. 재발행·몰아올리기는 하지 않았다.
- 11/21 당일 슬롯은 아직 Missed 기록이 없다.

계정별 LIVE 설정·토큰은 읽거나 변경하지 않았다. 과거 게시 여부는 publish-log와 permalink로만 판단했다.

## 3. 사실 확인 및 게시 차단

### P0 — 11/26 태종대 다누비열차

현재 승인된 카드 2:
- EN: “Check the Danubi train”
- JA: 「ダヌビ列車を確認」
- TW: 「先確認觀光小火車」

세 언어의 카드 문안과 현재 렌더 이미지가 다누비열차를 이용할 수 있는 것처럼 보이게 한다. 부산광역시관광협회 2026-07-10 공지는 다누비열차가 2026-07-03부터 긴급 안전점검 종료 시까지 운행 중단이고, 2026-07-04부터 무료 순환버스가 대체 운행한다고 안내한다. 공지에는 무료 순환버스 화~일 09:30~17:30, 회차별 무료 승차권 선착순 발권이 적혀 있다.

다만 현재 Go2Busan의 EN/JA/TW 태종대 가이드 페이지는 수~일 운영, 09:10 승차권 배부 시작으로 표기돼 있어 BTA 공지와 운영일이 충돌한다. 이번 점검에서는 부산관광공사(BTO) 운영 페이지를 직접 재확인할 수 없어 어느 운영일이 최신인지 독립적으로 해소하지 못했다. 따라서 SNS에는 요일·승차권 배부 시작 시각을 넣지 말고, “다누비열차 운행 중단 공지와 무료 순환버스 대체 안내를 확인한 뒤 방문 당일 운영사 공지를 확인”하는 문구만 사용한다.

- BTA 공지: https://bta.or.kr/noticeDetail?no=1637&page=1
- Go2Busan EN guide: https://go2busan.com/guides/taejongdae-danubi-train-tips/

### P1 — 11/24 전압·플러그

현재 카드:
- EN: 220V, Type C/F
- JA: 220V, C type (SE type)
- TW: 220V, C/F형

한국관광공사 공식 안내는 220V·60Hz와 둥근 구멍 2개를 설명한다. 카드 3개 언어 모두 60Hz가 빠졌거나 플러그 타입 표현이 서로 다르다. 세 언어를 같은 사실로 통일한다.

- JA: https://japanese.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=140048
- TW: https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=140059

### P1 — 11/25 일본어 음식 에티켓 카드 5

`ig-fresh15-1125-jp` QA는 `qa.ok=false`, 본문 가로 넘침이다. 제안 문구는 「辛さ控えめでお願いします」다. 재렌더·QA 통과 전 발행하지 않는다.

### 11/28 광복로 발코니 뮤직쇼 / 12/05 스트리트 페스타

부산시 공식 일정:
- 발코니 뮤직쇼: 11/28(토) 19:00~21:00, 광복로 일대
- 스트리트 페스타: 12/05(토) 16:00~20:00, 광복로 일대

공식 페이지: https://www.busan.go.kr/eng/bsevents/1762987

11/28 Instagram 3개는 draft / needs_check 유지. 12/05 스트리트 페스타는 현재 Threads·Instagram 공백 슬롯을 채울 수 있는 공식 일정 기반 후보이나, 게시 직전 주최 측 공지를 재확인한다.

### K.Ride 후보 콘텐츠

Kakao Mobility 공식 사이트와 앱스토어 등록 정보에서 확인한 기능:
- 앱 UI 4개 언어: 영어·일본어·중국어 간체·번체
- 목적지 검색·기사 채팅 번역 133개 언어
- 신용·체크카드 및 모바일 결제 지원

공식 사이트: https://utility.kride.kakaomobility.com/
공식 앱 등록: https://apps.apple.com/kr/app/k-ride-taxi-cab-travel/id6474654222

한국 전화번호 없이 모든 이용자가 가입할 수 있다는 보장은 공식 자료에서 확인하지 못했다. 해당 표현은 사용하지 않는다.

## 4. 이미지·카드 시각검수

- 승인된 18개 게시물, 5장씩 **90개 JPEG 전부**를 직접 개봉해 확인했다: TW 30장, JA 30장, EN 30장.
- 90장 모두 4:5 세로형 AI 삽화이고, 각 언어의 AI 생성 크레딧이 표시돼 있다. 확인 범위에서 출처·라이선스가 불명확한 외부 사진은 사용되지 않았다.
- 제목·본문 대비와 모바일 세로 크롭은 대체로 양호하다. 단, 11/25 일본어 카드 5는 자동 QA에서 가로 넘침으로 실패한다.
- 시각적 문제는 여러 주제에 광안대교·마린시티·바다 배경이 반복된다는 점이다.

| 날짜·주제 | 실제 카드에서 확인한 문제 | 권고 |
|---|---|---|
| 11/21 서면 | 5장 중 마지막 카드에 해안 음식·바다 배경. 서면 내륙 상권과 불일치 | 서면 골목·지하철·식당 실내 장면 |
| 11/22 부산 음식 | 가짜 지도처럼 보이는 도식, 음식과 무관한 시계, 11월과 맞지 않는 벚꽃·해안 배경 | 음식·시장 진열·주문 장면 중심. 지도형 도식은 실제 지도처럼 보이지 않게 명시 |
| 11/23 우천 일정 | 실내 수족관·아케이드 장면 외에 해변·야외 시장·해안 우비 장면 반복 | 박물관·수족관·백화점·실내 통로 비중 확대 |
| 11/24 여행 준비 | 여행 정물은 적합하지만 5장 모두 해안·광안대교 배경 반복. 어댑터 카드의 60Hz 누락 및 타입 표기 불일치 | 캐리어·교통카드·주소 저장·어댑터 정물, 도심 교통 장면 |
| 11/25 음식 에티켓 | 음식·시장·혼밥 장면은 있으나 5장 모두 해안 스카이라인 배경. 일본어 카드 5 넘침 | 식당 테이블·반찬·시장 주문 장면, 일본어 카드 5 축약 |
| 11/26 태종대 | 5장 모두 광안대교·마린시티·벚꽃·일반 버스정류장 등 다른 장소 단서. 카드 2는 운행 중단된 다누비열차 | 절벽·소나무 숲·영도등대 중심의 새 art-set, 교통 장면은 운영사 확인된 무료 순환버스만 |

### QA gate

18개 승인 게시물의 manifest:
- 5개: `qa.ok=true`, `spec_hash`, `card_count=5` 보유, `.hash`와 일치
- 12개: `qa.ok=true`이나 `spec_hash` 또는 `card_count`가 없는 legacy QA
- 1개: `ig-fresh15-1125-jp`, `qa.ok=false`

따라서 현재 publisher 기준으로 13/18은 현재 spec 검증을 통과하지 못해 재렌더·QA 전 발행 차단 대상이다. legacy QA를 통과로 간주하지 않는다. 11/28 draft 3개는 아직 렌더된 이미지가 없어 시각검수 대상이 아니다.

## 5. 수정 우선순위

1. **P0:** 11/26 태종대 문안과 이미지 교정. 운영일·티켓 시각은 BTO 최신 공지 확인 전 사용하지 않는다.
2. **P1:** 11/24 전압 문구를 220V·60Hz·둥근 구멍 2개로 통일.
3. **P1:** 11/25 일본어 카드 5 축약·재렌더·QA 통과.
4. **P1:** 12개 legacy + 1개 failed QA를 current spec hash로 재렌더하고 .hash·JPEG 5개 검증.
5. **P2:** 24개 Instagram 공백 슬롯은 TW 우선으로 8개 주제 초안을 만들고 JA/EN을 병행 현지화한다.
6. **P2:** Threads 10개 공백 슬롯은 12/04 JP·US 4개, 12/05 TW·JP·US 6개다. 12/05 Street Festa를 후보로 검토한다.
7. **P2:** Threads 34/40 same-theme pairs를 다음 캠페인에서 분산한다. 두 게시물 중 하나는 질문·현장 팁·경험 공유로 전환한다.
8. **P2:** 부산 현장형 콘텐츠 비중을 늘린다. 후보: K.Ride 기능·가입 한계, 민락어민활어직판장 겨울 방어 구매 절차, 1001번 혼잡 대안, 부산 음식 메뉴 해설, 국제여객터미널 접근, 광복로 행사. 가격·운영시간·교통편은 게시 직전 공식 자료로 확인한다.

## 6. 변경·CI·배포 경계

- 이번 PR은 감사·교정·이미지 방향 문서만 변경한다.
- 활성 schedule, 예약 시각, 승인 캡션·이미지, publish-log, state branch, LIVE 설정은 변경하지 않는다.
- 외부 게시·예약 변경·Missed 재발행·workflow dispatch·수동 retry 없음.
- PR은 Draft 상태를 유지한다. CI는 PR head commit에 연결된 실행을 별도로 확인하며, CI 통과와 Production 배포를 구분한다.

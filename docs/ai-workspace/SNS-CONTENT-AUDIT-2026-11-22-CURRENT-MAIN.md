# Go2Busan SNS 전수 점검 — 2026-11-22 (current main)

- 점검 시각: 2026-11-22 08:22 KST
- 기준 main SHA: 2fda035673815077525d366c136e1174097f8427
- 대상 기간: 2026-11-22~2026-12-06, 각 계정 현지 날짜 기준 15일
- 시장 우선순위: zh-TW → ja → en
- 확인 파일: Instagram/Threads 활성 schedule, instagram-state/threads-state publish-log, publisher workflow 및 렌더 QA 파일
- 보호: 승인 문안·예약 시각·활성 schedule·이미지·publish-log·state branch·LIVE 설정·외부 계정 변경 없음

## 1. 핵심 결과

| 항목 | Instagram | Threads |
|---|---:|---:|
| 15일 기대 슬롯 | 45 | 90 |
| 활성 schedule 등록 | 18 | 74 |
| 시장별 등록 | TW 6 / JP 6 / US 6 | TW 26 / JP 24 / US 24 |
| approved | 15 | 74 |
| draft | 3 | 0 |
| 미편성 슬롯 | 27 | 16 |
| 현지 시각→UTC 검증 | 18/18 정오 | 74/74 일치 |
| 국가별 링크·UTM | 18/18 | 27/27 링크 답글 정상 |

미편성 슬롯은 publisher가 놓친 게시물과 구분한다. schedule에 게시물이 없는 슬롯이며 publish-log의 missed가 아니다.

## 2. Instagram — 15일 편성

### 편성·링크·CTA
- 11/22~11/26은 TW·JP·US 각 1개씩 매일 등록, 총 15개 approved.
- 11/28은 TW·JP·US 각 1개, 총 3개 draft / needs_check.
- 빈 날짜는 11/27, 11/29~12/06이다. 9일 × 3개 시장 중 11/28은 별도 draft로 존재하므로 실제 빈 날짜 9일, 총 27개 슬롯.
- 18개 모두 카드 5장, 마지막 카드 저장·프로필 가이드 CTA가 있다. 정확한 캡션 중복은 0건.
- 18/18 가이드 URL의 국가별 언어 경로와 bio URL의 utm_source=instagram, utm_medium=social, utm_campaign, utm_content가 정상이다.
- AI 생성 일러스트 표기가 18개 세트 모두 들어 있다. 확인한 이미지에서 외부 사진 소재는 발견하지 못했다.

### 카드 QA
현재 instagram-state/cards의 QA 파일을 다시 확인했다.
- 8개 세트: spec_hash와 card_count=5가 있고 .hash가 QA spec_hash와 일치.
- 9개 세트: legacy QA로 spec_hash가 없다. 현재 schedule 사양을 통과한 것으로 간주하지 않는다.
- 1개 세트: ig-fresh15-1125-jp, qa.ok=false. 카드 5 본문 가로 넘침.
- 11/28 세트 3개는 current QA와 .hash가 일치하고 5장 JPEG가 존재하지만, 시각적 장소 일치 검수는 실패했다.

### 현지화·사실 확인 우선 수정
1. **P0 — 11/26 태종대 다누비열차**
   - EN “Check the Danubi train”, JA 「ダヌビ列車を確認」, TW 「先確認觀光小火車」는 열차를 현재 탈 수 있는 것처럼 보이게 한다.
   - 부산광역시관광협회 2026-07-10 공지는 다누비열차가 2026-07-03부터 긴급 안전점검 종료 시까지 운행 중단이고, 무료 순환버스가 대체 운행한다고 안내한다. 뉴시스 2026-08-18 보도도 운행 중단과 무료 셔틀 운행을 확인한다.
   - 협회 공지와 운영사 페이지의 셔틀 운행 요일 표기가 일치하지 않는 자료가 있어, 이번 문안에서는 요일·시간을 확정하지 않는다. “다누비열차 운행 중단 / 무료 순환버스 대체 운행 / 방문 전 운영사 최신 공지 확인”으로 교정한다.
   - 현재 카드 2는 열차를 확인하라는 문구와 기관차형 차량 삽화, 카드 5는 해안도로·일반 버스정류장·벚꽃을 보여준다. 실제 대체 셔틀과 태종대 절벽·소나무 숲·영도등대 중심의 새 art-set이 필요하다.
   - 공식 자료: https://bta.or.kr/noticeDetail?no=1637&page=1
   - 보도: https://www.newsis.com/view/NISX20260818_0003752817

2. **P1 — 11/25 대만 번체 음식 표현**
   - 한국어 “덜 맵게 해 주세요”를 TW 카드에서 “請做小辣一點”으로 옮겼다. 이는 ‘조금 맵게’라는 뜻으로 원문의 ‘덜 맵게’와 반대 방향이다.
   - 권고: “請做得不要太辣” 또는 “可以做得不要太辣嗎？”로 수정한다.
   - JP 「辛さ控えめで」는 의미가 맞지만 카드 5의 자동 QA가 가로 넘침으로 실패했다. 문구 축약·재렌더·QA가 필요하다.

3. **P1 — 11/24 전압·플러그**
   - EN 220V Type C/F, JA 220V C type (SE type), TW 220V C/F로 서로 다르고 60Hz가 빠져 있다.
   - 한국관광공사 공식 안내는 220V·60Hz, 둥근 구멍 2개라고 설명한다. 세 언어 모두 이 사실로 통일하고, 근거가 확인되지 않은 C/F·SE 유형 표기는 제거한다.
   - EN: Korea uses 220V at 60Hz, with two round holes in the outlet.
   - JA: 韓国の標準電圧は220V・60Hzで、コンセントは丸穴が2つです。
   - TW: 韓國標準電壓為220V、60Hz，插座是兩個圓孔。
   - 공식 자료: https://japanese.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=140048
   - 번체 안내: https://english.visitkorea.or.kr/svc/contents/infoHtmlView.do?vcontsId=140059

4. **P1 — 11/28 광복로 발코니 뮤직쇼 이미지**
   - 게시일·전체 공연시간(11/28 19:00~21:00), 19:30~20:00 Sunny Moon Jazz Band, 20:00~20:30 Modern Sounds Jazz Big Band, 장소 광복로는 Visit Busan 공식 행사 페이지와 일치한다.
   - 그러나 세 언어 15장 모두 광안대교·마린시티·해안 스카이라인을 배경으로 사용한다. 광복로·남포동의 도심 발코니 공연과 장소가 다르다.
   - 3개 게시물은 draft 유지. 광복로 상가·발코니 무대·거리 관객을 중심으로 새 이미지를 만들고, 광안대교·마린시티는 제외한다.
   - 공식 행사 페이지: https://visitbusan.net/schedule/view.do?boardId=BBS_0000010&dataSid=6438&menuCd=DOM_000000304010000000

5. **P2 — 11/22~11/25 시각적 장소 일치**
   - 11/22 음식 가이드 첫 카드는 실제 지도가 아닌 음식 핀을 얹은 가상 지도처럼 보여 실제 동선 지도로 오인될 수 있다. 해안·광안대교 배경도 남포·서면 음식 주제와 맞지 않는다.
   - 11/23 우천 일정은 수족관 삽화는 적합하지만 해안 스카이라인 비중이 높다. 실내 시설·실내 이동 장면 중심으로 조정한다.
   - 11/24 플러그 카드는 어댑터 자체는 주제에 맞지만 해안 도시 배경이 불필요하다. 전원 콘센트·어댑터 정물 중심으로 바꾼다.
   - 11/25 음식 에티켓 카드 5는 해안 배경 대신 식당 테이블·시장 주문 장면을 사용한다.
   - 4:5 세로 비율과 AI 삽화 표기는 유지한다. 모바일 가독성은 대체로 양호하지만 11/25 일본어 카드 5는 별도 QA 실패 상태다.

## 3. Threads — 15일 편성

- 74개 등록, 모두 status=approved. 시장별 TW 26 / JP 24 / US 24.
- 12/04는 TW 2개만 있고 JP·US 각 2개가 비어 총 4개 미편성. 12/05와 12/06은 세 시장 모두 2개씩 비어 각각 6개, 총 12개 미편성. 합계 16개.
- 현재 캘린더 시작일은 JP/US 11/04, TW 11/05다. 현재 캠페인 종료일이 JP/US 12/03, TW 12/04여서 15일 전체를 덮지 않는다.
- local_date/local_time/tz와 publish_at_utc 변환은 74/74 일치.
- 링크 답글 27개 중 27/27이 국가별 경로와 utm_source=threads, utm_medium=social, utm_campaign, utm_content를 갖췄다.
- 링크 없는 본문 47개 중 28개는 질문형, 6개는 저장·공유 등 행동 유도형, 13개는 명시적 CTA가 없다.
- 정확한 본문 중복 0건. 다만 같은 날짜·시장 내 2개 게시물 37쌍 중 31쌍(84%)이 같은 주제군이다. 아침·저녁 게시물의 주제 관점이 반복되는 편이다.
- 16개 주제군 중 Busan food, rainy-day plan, market etiquette, coastal photo walk 등 명확히 부산 현장에 연결된 게시물은 19/74(26%). 나머지는 예산·여행 예절·짐·언어 준비·일정 정리 등 일반 조언 비중이 높다.
- 자동 언어 검증 오류는 0건. TW 번체 검사에서 간체 전용 글자·일본어 문자 오류는 발견하지 못했다.
- 종료된 행사·과거 축제를 다시 홍보하는 문안은 이번 15일 Threads schedule에서 발견하지 못했다.

### 게시 전 차단 — d28-us-1
- 2026-12-01 미국 08:00, status=approved이나 verification.status=needs_check.
- “The best plan…”의 주관적 최상급 표현이 검증 플래그에 남아 있다. Threads publisher는 verified 또는 evergreen만 허용하므로 이 게시물은 발행 차단 대상이다.
- 작성 문안과 승인 상태는 변경하지 않았다. 표현 수정 또는 검증 메타데이터 정리는 별도 승인 후 처리한다.

## 4. publish-log 대조 — 실제 발행 상태

### Instagram state branch
- **31 published / 2 missed / 0 failed**.
- 최근 실제 게시 URL:
  - TW: https://www.instagram.com/p/Df_snSpFtfY/
  - JP: https://www.instagram.com/p/Df_sjsoljRA/
  - US: https://www.instagram.com/p/DgA_pdNDyly/
- Missed:
  - ig-fresh15-1118-us: 1회 시도, HTTP 403 “Application request limit reached”, URL 없음.
  - ig-fresh15-1119-us: 1회 시도, HTTP 403 “Application request limit reached”, URL 없음.
- 두 건은 API 요청 제한 응답이다. 재발행·수동 retry하지 않았다.
- 로그: https://github.com/xkrrudfbs45-afk/busan-travel-guide/blob/instagram-state/publish-log.json

### Threads state branch
- **73 published / 32 missed / 0 failed**.
- 최근 실제 게시 URL:
  - JP: https://www.threads.com/@go2busan.jp/post/DgASHSuEQOo
  - TW: https://www.threads.com/@go2busan.tw/post/DgASUFYEcRy
  - US: https://www.threads.com/@go2busan.us/post/Df-6pmyIRsn
- Missed 32개는 모두 attempts=0, permalink 없음, API 오류 없음.
  - 11/10 18개, 11/11 2개, 11/17 6개, 11/18 3개, 11/19 2개, 11/21 1개.
  - 최신 누락 d18-us-1은 11/21 미국 08:00 슬롯으로, missed_at 20:09:34Z에 기록됐다. 3시간 late window를 넘긴 뒤 기록됐으며 API 게시 시도는 0회다.
- publish-log만으로 특정 GitHub Actions run이 생략·지연된 원인을 단정할 수 없다. workflow 주석에는 기존 targeted run이 건너뛰거나 지연된 사례가 기록돼 있고 현재 cron은 UTC 매시간 23분으로 강화돼 있다. 새 cron이 누락을 완전히 해결했는지는 이후 로그로 확인해야 한다.
- 로그: https://github.com/xkrrudfbs45-afk/busan-travel-guide/blob/threads-state/publish-log.json

### 점검 시각의 당일 슬롯
- Threads JP 11/22 08:00은 점검 시각 08:22 KST에 22분 경과했지만 3시간 late window 안이고 log 항목은 아직 없다. Missed로 분류하지 않는다.
- Threads TW 08:00은 대만 현지 07:22 기준 38분 뒤 예정, US 08:00은 미국 현지 11/21 18:22 기준 다음 날까지 13시간 이상 남아 있다.
- Instagram 12:00 현지 슬롯도 점검 시각에는 아직 도래하지 않았다.
- 계정별 INSTAGRAM_LIVE / THREADS_LIVE 변수와 토큰 값은 읽거나 변경하지 않았다. 현재 LIVE 설정을 추정하지 않는다.

## 5. 개선 제안 — 활성 schedule 변경 없음

1. 11/26 태종대: 다누비열차 운행 중단과 무료 순환버스 대체 안내로 문안·이미지 교정. 운영 요일·시간은 최신 운영사 공지 충돌을 해소하기 전 카드에 넣지 않는다.
2. 11/24 전압: 세 언어를 220V·60Hz·둥근 구멍 2개로 통일한다.
3. 11/25 음식 에티켓: TW의 “덜 맵게” 번역 수정, JA 카드 5 축약·재렌더·QA 통과.
4. 11/28 광복로: 텍스트는 공식 일정과 맞지만 이미지 15장 전부 장소 불일치. 새 art-set으로 교체하고 draft 유지.
5. 11/22~25: 음식·우천·전압·시장 에티켓의 해안 배경과 가상 지도 이미지를 주제에 맞는 도심·실내·음식 장면으로 교체.
6. 빈 슬롯 43개(IG 27 + Threads 16)는 기존 승인 문안 복제 대신 TW 우선 신규 초안으로 보강한다. 우선 후보는 외국인 택시(K.Ride 공식 기능만), 민락어민활어직판장 겨울 방어(현재 가격·상차림비 숫자 금지), 부산역 수하물, KTX/SRT 예매 실전 팁, 교통카드·QR 결제다.
7. Threads는 하루 2개를 같은 주제로 반복하지 않도록 현장 팁과 질문·경험 공유형으로 분리한다.

## 6. 변경·배포 상태

- 이 PR은 점검 결과와 수정 제안만 기록하는 문서 전용 변경이다.
- 활성 schedule, 승인된 게시물·이미지, publish-log, state branch, workflow, credentials, LIVE 설정 변경 없음.
- 외부 Instagram/Threads 게시, 예약 변경, missed 재발행 없음.
- CI는 PR 생성 후 확인한다. PR 병합 전이며 Production 배포는 없다.

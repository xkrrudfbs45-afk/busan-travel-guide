# Go2Busan SNS 전수 점검 — 2026-11-19

- 점검 시각: 2026-11-19 08:16 KST
- 대상 기간: 2026-11-19~2026-12-03 (각 계정 현지 날짜)
- 우선순위: zh-TW → ja → en
- 확인: Instagram/Threads 활성 schedule, 상태 브랜치 publish-log, publisher workflow, 카드 이미지·QA 파일, 현지 공식 자료
- 보호: 승인 게시물·활성 게시 일정·publish-log·LIVE 설정·외부 계정은 변경하지 않음

## 1. 15일 편성 현황

| 항목 | Instagram | Threads |
|---|---:|---:|
| 기대 슬롯 | 45 | 90 |
| 활성 schedule 등록 | 27 | 90 |
| TW / JP / EN | 9 / 9 / 9 | 30 / 30 / 30 |
| 승인 | 24 | 90 |
| Draft / 검증 보류 | 3 | 1개 검증 차단 |
| 빈 슬롯 | 18 (6일) | 0 |

### Instagram

활성 schedule은 11/19~11/26 24개 승인 게시물과 11/28 광복로 공연 Draft 3개뿐이다. 빈 날짜는 **11/27, 11/29, 11/30, 12/01, 12/02, 12/03**이며 날짜마다 TW·JP·EN 3개, 총 18개 슬롯이 비어 있다.

- 24개 승인 게시물은 모두 `verification=verified`.
- 11/28 3개는 `draft / needs_check`; 최종 행사 재확인 전 발행 금지.
- 27개 모두 계정 현지 정오(12:00)에 맞는 UTC 시각.
- 27개 모두 5장 카드, 마지막 장 CTA, 현지 언어 가이드 경로, Instagram bio-link UTM을 갖춤.
- bio-link UTM 27/27 확인: `utm_source=instagram`, `utm_medium=social`, 캠페인·날짜 콘텐츠 값 존재. 11/28은 별도 `nov14_28_*` 캠페인.
- 동일 시장의 활성 캡션 정확 중복 없음.

**중요한 정정:** PR #522 브랜치의 현재 `schedule.json`에도 15일 공백을 채우는 새 게시물이 들어가 있지 않다. 이전 점검 문서의 “15개 초안”은 활성 예약으로 간주하면 안 된다. 실제 schedule에는 이 기간 27개만 있고 18개 슬롯은 여전히 비어 있다. 기존 45개 legacy draft 파일도 활성 schedule과 중복이 있으므로 통째로 편입하지 않는다.

### Threads

- 90개 승인, 시장별 30개. 날짜·현지 시각·UTC 변환 **90/90 일치**.
- 주제 19개, 가장 큰 주제군 6개. 시장 내 정확 중복 0, 텍스트 유사도 0.65 이상 쌍 0.
- 45개는 국가별 링크 답글, 45개는 링크 없는 본문. 링크 45/45에서 현지 경로와 UTM 필드 확인. 기존 `threads30_*` 캠페인과 `nov12_26_*` 캠페인은 각각 유지.
- 링크 없는 45개 중 23개는 질문형. 나머지 22개 중 1개는 댓글로 다음 주제를 알려 달라는 CTA가 있고, **21개는 직접적인 참여 유도 문구가 없는 설명형**이다. 향후 새 초안에서는 질문·경험 공유형 마무리를 보강한다.
- `d28-us-1`(12/01 미국 08:00)은 `status=approved`지만 `verification=needs_check`. “The best plan…”의 주관적 최상급 플래그로 publisher 검증 게이트가 차단한다. 승인 문구는 수정하지 않았고, 향후 제안 문구는 “A practical plan groups nearby stops, leaves room for meals, and includes a buffer.”이다.

## 2. 실제 발행 로그

### Instagram — 상태 브랜치

- **23 published / 0 missed / 0 failed / 1 retry_pending**
- Published 23개는 모두 permalink 보유.
- 최근 Published:
  - TW: https://www.instagram.com/p/Df4AY6PlcBt/
  - JP: https://www.instagram.com/p/Df4AVnqle2k/
  - EN 최근 Published: https://www.instagram.com/p/Df23QvkIyz4/
- `ig-fresh15-1118-us`는 1회 시도 후 `retry_pending`, permalink 없음.
- 마지막 오류: `IG POST /media_publish 403: Application request limit reached` (2026-11-18 20:45:49 UTC).
- 해당 게시물은 2026-11-18 17:00 UTC 예정(미 동부 12:00 EST)이며 6시간 late window는 23:00 UTC에 끝났다. 점검 시각 08:16 KST에는 이미 grace window가 지났고, 다음 09:23 KST 실행은 예정 시각 기준 7시간 23분 뒤다. **현재 로그상 아직 retry_pending이지만 다음 실행에서는 missed로 전환될 가능성이 높다.** 재시도·재발행을 수동으로 트리거하지 않는다.

### Threads — 상태 브랜치

- **58 published / 29 missed / 0 failed**
- Published 58개 모두 permalink 보유. 시장별 JP 21, TW 19, US 18.
- 최근 Published:
  - JP: https://www.threads.com/@go2busan.jp/post/Df3SOOnGAiQ
  - TW: https://www.threads.com/@go2busan.tw/post/Df3SoIJmIjC
  - US: https://www.threads.com/@go2busan.us/post/Df3SbOJmO5h
- Missed 29개 시장별 JP 9, TW 9, US 11. 20개는 11/10~11/11의 과거 누락, 최근 9개는 아래와 같다.
  - 11/17 19:55 UTC: `d14-jp-1`, `d14-jp-2`, `d13-us-2`, `d14-us-1`, `d13-tw-1`, `d13-tw-2`
  - 11/18 19:26 UTC: `d15-jp-2`, `d15-us-1`, `d14-tw-2`
- 최근 9개 모두 `attempts=0`, permalink 없음, API 오류 기록 없음. 따라서 API 거절이 아니라 publisher 실행이 허용 구간 안에 게시 시도를 하지 못한 누락이다. 정확히 어떤 Actions run이 생략·지연됐는지는 publish-log만으로 특정할 수 없다. **29개 모두 재발행하지 않는다.**
- 점검 시각에는 11/19 일본 08:00 슬롯이 16분 지났지만 아직 3시간 late window 안이며, 08:23 KST 예정 실행 전이다. 대만 08:00 슬롯은 09:00 KST 예정.

계정별 현재 LIVE 변수는 확인하지 않았다. 과거 발행은 로그와 permalink로만 확인했으며 향후 발행 여부를 추정하지 않는다.

## 3. 이미지·카드 시각 검수

TW를 먼저 확인하고 같은 아트 세트를 공유하는 JP·EN 렌더를 교차 확인했다. 4:5, 아이보리 텍스트 패널, 대비, CTA, AI 삽화 크레딧은 대체로 일관된다. 확인한 카드에는 외부 사진이 없고 AI 삽화 표기가 있다.

| 게시일·주제 | 실제 카드 확인 | 판정 |
|---|---|---|
| 11/19 해운대 | 고층 타워 중심, 해변·블루라인파크 맥락 약함 | 보완 권고 |
| 11/20 남포동 | 자갈치·BIFF·용두산/부산타워 중심의 5장 구성이 대체로 주제와 일치 | 유지 가능 |
| 11/21 서면 | 5장 중 다수에 광안대교·해안·해변 풍경. 서면의 내륙 상권·지하철 환승 콘텐츠와 불일치 | 재작업 우선 |
| 11/22 부산 음식 | 지도처럼 보이는 도식은 실제 지도 아님. 마지막 장에 봄 벚꽃과 해안 스카이라인 | 재작업 |
| 11/23 우천 일정 | 실내 일정 안내인데 우산·비옷 배경에 해변·광안대교가 반복 | 재작업 |
| 11/24 여행 준비 | 캐리어·우비·준비물은 주제와 맞지만 해안 배경 반복 | 낮은 우선순위 |
| 11/25 일본어 음식 에티켓 | 카드 5의 일본어 본문이 QA에서 가로 넘침으로 판정 | 발행 차단 유지 |
| 11/26 태종대 | 카드 1 외 다수에 장난감 증기기관차, 광안대교·마린시티·일반 버스정류장 | 재작업 우선 |
| 11/28 광복로 공연 | PR #522에서 새 도심 발코니 재즈 아트 세트 제안. 이미지 생성·렌더는 아직 안 됨 | Draft 유지 |

이미지 예시:
- 서면 카드 1: https://github.com/xkrrudfbs45-afk/busan-travel-guide/blob/instagram-state/cards/ig-fresh15-1121-tw/01.jpg
- 부산 음식 카드 5: https://github.com/xkrrudfbs45-afk/busan-travel-guide/blob/instagram-state/cards/ig-fresh15-1122-tw/05.jpg
- 우천 카드 1: https://github.com/xkrrudfbs45-afk/busan-travel-guide/blob/instagram-state/cards/ig-fresh15-1123-tw/01.jpg
- 태종대 카드 2: https://github.com/xkrrudfbs45-afk/busan-travel-guide/blob/instagram-state/cards/ig-fresh15-1126-tw/02.jpg
- 일본어 카드 5: https://github.com/xkrrudfbs45-afk/busan-travel-guide/blob/instagram-state/cards/ig-fresh15-1125-jp/05.jpg

### 카드 QA

27개 게시물 중 8개는 현재 schedule spec hash·5장 수와 일치한다. 18개는 구형 QA로 `spec_hash/card_count`가 없어 현재 publisher가 stale/legacy로 차단하고 재렌더를 요구한다. 1개(`ig-fresh15-1125-jp`)는 `qa.ok=false`, 사유는 card 5 body horizontal overflow다. 11/28 Draft 3개는 현재 기존 아트의 QA만 통과한 상태이며, PR #522의 새 아트로 교체한 뒤 새 QA가 필요하다.

## 4. 사실 확인

- **11/19 해운대 블루라인파크:** 공식 예약 안내는 현장 티켓이 소량이고 조기 매진될 수 있다고 안내한다. “인기 시간대는 매진될 수 있으니 사전 확인”은 타당하다. https://www.bluelinepark.com/eng/booking.do
- **11/24 전압:** 현재 카드의 C/F 플러그 타입 표기는 공식 근거가 확인되지 않는다. 한국관광공사는 220V·60Hz와 둥근 구멍 2개로 안내한다. 세 언어 모두 “220V, 60Hz; two round holes”로 통일하고 C/F 표기는 제거할 것을 제안한다. 승인 문구는 변경하지 않았다. https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=140059
- **11/26 태종대:** Visit Busan은 다누비열차를 공원 순환 관광열차로 소개하고, 매주 월요일 휴무 및 우천·악천후 운행 중단, 10~5월 운행 09:20~17:30을 안내한다. 현재 카피는 계절·날씨 확인을 권하므로 방향은 맞지만, 이미지는 실제 다누비 셔틀과 다르다. https://www.visitbusan.net/en/index.do?lang_cd=en&menuCd=DOM_000000302008001000&uc_seq=542
- **11/28 광복로 발코니 뮤직쇼:** Visit Busan 공식 목록은 11/28(토) 19:00~21:00, Sunny Moon Jazz Band 19:30~20:00, Modern Sounds Jazz Big Band 20:00~20:30으로 확인한다. 세 언어 Draft는 11/27과 행사 당일 오전 재확인 후에만 승인 후보로 전환한다. https://www.visitbusan.net/schedule/view.do?boardId=BBS_0000010&dataSid=6438&menuCd=DOM_000000304010000000
- K.Ride 해외 카드·인증·번역 기능, 민락어민활어직판장 가격·상차림비, 김해공항 리무진 변경은 현재 활성 15일 콘텐츠에 새로 넣지 않았다. 공식·사업자 확인 전까지 후보로 보류한다.
- 종료된 행사·과거 불꽃축제·11/13 지역 리서치의 오래된 가격·운행 정보는 재발행하지 않았다.

## 5. 구체적인 개선안

1. 빈 Instagram 18개 슬롯은 새 주제와 현지화 검증을 거친 초안으로 채우되, 활성 schedule에는 승인 전 추가하지 않는다. 우선 후보: 외국인 택시 앱 준비(공식 기능 범위만), 부산항 국제여객터미널 이동, 겨울철 야간 산책·빛축제. 12/5 Street Festa·트리축제는 최신 공식 일정 확인 전 제외.
2. 서면·태종대·부산 음식·우천 카드에 장면 유형을 구분하는 `art.scene`(inland / market-food / indoor / coastal-nature 등) 지원을 제안한다. 현재 `STYLE_PLACE`와 `STYLE_PLACE_BRIGHT`가 모든 장면에 “sea-facing port city; show the sea/coast/harbour wherever it fits”를 강제해, 서면·실내·음식 카드에도 해안 배경이 생성되는 구조다. 장소별 장면 스타일을 분리하고 새 아트 세트 ID로 렌더링해야 한다.
3. 11/25 일본어 카드 5는 더 짧은 표현으로 재렌더 후 `qa.ok=true`, 현재 spec hash, 5장 파일을 모두 확인한다.
4. Threads의 21개 설명형·링크 없는 문안은 승인 상태를 그대로 두고, 다음 캠페인 초안부터 각 시장별 짧은 질문·경험 공유 CTA를 추가한다.
5. publisher workflow에는 late window 안에 세 번째 실행 기회를 주는 백업 시간을 Draft PR로 제안한다. 게시 슬롯·예약 시각은 변경하지 않는다.

## 6. 이번 점검에서 변경하지 않은 것

- 활성 Instagram/Threads schedule, 게시 날짜·현지 시각, 승인 문안, 이미지 파일, publish-log, state 브랜치, LIVE 설정은 변경하지 않음.
- 외부 계정 게시, Missed 재발행, 수동 retry, 이미지 교체, PR 병합, Production 배포 없음.
- PR #522는 Open/Draft, PR #519 기반의 stacked PR이다. 이번 점검 문서만 추가하며 11/28 Draft 이외의 승인 게시물 변경은 제안만 기록한다.

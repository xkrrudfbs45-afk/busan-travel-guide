# Go2Busan SNS 전수 점검 — 2026-11-19 (current main)

- 점검 시각: 2026-11-19 08:44 KST
- 대상: 2026-11-19~2026-12-03, 각 계정 현지 날짜 기준
- 시장 우선순위: zh-TW → ja → en
- 기준: current `main`의 활성 schedule, `instagram-state` / `threads-state`의 publish-log, publisher workflow, 기존 카드 QA 및 시각검수 기록
- 안전: 승인 게시물·활성 예약·상태 브랜치·LIVE 설정·외부 계정은 변경하지 않음

## 1. 15일 편성

| 항목 | Instagram | Threads |
|---|---:|---:|
| 기대 슬롯 | 45 | 90 |
| 활성 schedule 등록 | 27 | 90 |
| 시장별 등록 | TW 9 / JP 9 / EN 9 | TW 30 / JP 30 / EN 30 |
| approved | 24 | 90 |
| draft / 검증 보류 | 3 | 1개 검증 게이트 차단 |
| 빈 슬롯 | 18 (6일) | 0 |

### Instagram

- 11/19~11/26: 매일 TW·JP·EN 각 1개, 총 24개 approved.
- 11/28: TW·JP·EN 각 1개, 총 3개 draft / needs_check.
- 빈 날짜: **11/27, 11/29, 11/30, 12/01, 12/02, 12/03**. 날짜마다 3개 시장이 모두 비어 있어 18개 슬롯.
- 27개 모두 각 계정 현지 정오(12:00)이며 UTC 변환이 일치한다.
- 27/27에 국가별 가이드 URL과 bio-link URL이 있다. UTM은 모두 `utm_source=instagram`, `utm_medium=social`, 캠페인·콘텐츠 날짜 값이 포함된다.
- 27/27에 5장 카드와 마지막 카드 CTA가 있다. 활성 캡션 정확 중복은 0건.
- 11/28 공연 게시물 3개는 행사 출처를 기록했지만 이미지 교체·새 렌더·최종 행사 재확인이 끝나지 않아 draft / needs_check를 유지한다.
- 이전 audit branch의 15개 gap-draft 문서는 활성 schedule이 아니다. 11/19~12/03 기준 실제 공백은 5일이 아니라 6일, 18개 슬롯이다.

### Threads

- 90개 모두 approved, 시장별 30개. 현지 날짜·시각·IANA timezone에서 UTC로 변환한 결과 90/90 일치.
- 검증 상태: 89 evergreen, 1 needs_check.
- `d28-us-1`은 12/01 미국 08:00, status=approved이나 verification=needs_check. “The best plan…”이라는 주관적 최상급 플래그가 남아 있어 publisher가 발행을 차단한다. 승인 상태·문안은 변경하지 않았다.
- 45개는 링크 답글, 45개는 링크 없는 본문이다. 링크 답글 45/45에서 국가별 경로와 `utm_source=threads`, `utm_medium=social`을 확인했다. 잘못된 언어 경로 0건.
- 링크 없는 45개 가운데 23개는 질문형, 1개는 약한 다음 주제 유도, 21개는 직접적인 답글 유도 문구가 없는 설명형이다.
- 19개 주제군. Haeundae·Nampo·Seomyeon·Busan food의 지역 특화 콘텐츠가 24/90이고, 이후에는 예산·언어 준비·여행 예절·일정 정리 등 일반 조언 비중이 높다. 다음 초안은 부산 음식·교통·시장 이용 등 현장성이 있는 주제를 늘린다.
- 시장 내 정확한 텍스트 중복 0건. 과거 행사나 종료된 축제의 재홍보 문안은 15일 schedule에서 확인되지 않았다.

## 2. 실제 발행 상태 — state branch publish-log

### Instagram

- **23 published / 1 missed / 0 failed**.
- Published 23개 모두 permalink가 있다. 구성: TW 8, JP 6, EN 5, legacy 4.
- 최근 링크:
  - TW: https://www.instagram.com/p/Df4AY6PlcBt/
  - JP: https://www.instagram.com/p/Df4AVnqle2k/
  - EN: https://www.instagram.com/p/Df23QvkIyz4/
- Missed: `ig-fresh15-1118-us`. 1회 API 시도 후 HTTP 403 `Application request limit reached`, permalink 없음. 마지막 시도 2026-11-18 20:45:49 UTC. 6시간 late window가 지난 뒤 missed로 기록됐다. API rate-limit 응답이므로 Threads의 실행 누락과 원인을 구분한다. 재발행·수동 retry하지 않았다.

### Threads

- **60 published / 29 missed / 0 failed**.
- Published 시장별 JP 22, TW 19, US 19. 60개 모두 permalink가 있다.
- 최근 링크:
  - JP: https://www.threads.com/@go2busan.jp/post/Df5sN1ijnkT
  - TW: https://www.threads.com/@go2busan.tw/post/Df3SoIJmIjC
  - US: https://www.threads.com/@go2busan.us/post/Df5sac8jhXh
- Missed 시장별 JP 9, TW 9, US 11. 29개 모두 attempts=0, permalink 없음, API error 없음.
  - 20개: 11/10~11/11의 과거 슬롯.
  - 최근 9개: `d14-jp-1`, `d14-jp-2`, `d13-us-2`, `d14-us-1`, `d13-tw-1`, `d13-tw-2`, `d15-jp-2`, `d15-us-1`, `d14-tw-2`.
- 최근 9개는 publisher 실행이 허용 구간 안에 게시 시도를 하지 못한 누락이다. publish-log만으로 특정 Actions run이 왜 생략·지연됐는지까지 단정할 수 없다. 재발행·몰아올리기는 하지 않았다.

계정별 현재 LIVE 설정은 읽거나 변경하지 않았다. 과거 게시 여부는 publish-log와 permalink만으로 판단했으며 향후 발행 여부는 추정하지 않는다.

## 3. 이미지·카드 QA

- 카드 형식은 4:5, AI 삽화 크레딧을 사용하는 구성이다. 수동 확인 범위에서 라이선스·귀속이 확인되지 않은 외부 사진은 발견하지 못했다.
- 27개 schedule 항목 중 8개는 현재 spec hash와 5장 card_count가 맞는다.
- 18개는 legacy QA로 spec_hash/card_count가 없어 현재 publisher가 stale QA로 차단하고 재렌더를 요구한다. legacy QA를 통과로 간주하지 않는다.
- 1개(`ig-fresh15-1125-jp`)는 카드 5의 가로 텍스트 넘침으로 qa.ok=false. 수정·재렌더·QA 통과 전 발행 불가.
- 수동 시각검수: TW 11/19~11/26 8개 주제 세트의 5장 전체, JP/EN의 서면·태종대 세트와 JP 음식 에티켓을 교차 확인했다. 나머지 JP/EN 모든 프레임을 전부 수동 개봉한 것은 아니며 QA 메타데이터·파일 수 확인과 구분한다.

| 날짜·주제 | 발견 | 개선 |
|---|---|---|
| 11/19 해운대 | 고층 타워 비중이 높고 해변·블루라인파크 장소성이 약함 | 해운대 해변·실제 고가 스카이캡슐 선로·동백섬 장면 분리 |
| 11/20 남포동 | 자갈치·BIFF·광복로·용두산 흐름과 대체로 일치 | 큰 재작업 없이 가짜 간판·점포 로고 금지 유지 |
| 11/21 서면 | 바다·광안대교·해안 스카이라인이 내륙 상권 콘텐츠와 불일치 | 지하철 1·2호선 환승, 도심 상가·음식점 골목 중심 |
| 11/22 부산 음식 | 지도처럼 보이는 부정확한 도식, 봄꽃·해안 스카이라인 | 음식·시장·메뉴 카테고리 중심 |
| 11/23 우천 일정 | 실내 대안 카드에 해변·광안대교가 반복 | 박물관·수족관·백화점·실내 통로 중심 |
| 11/24 여행 준비 | 정물은 적합하지만 플러그 사실이 언어별로 다름 | 220V·60Hz·둥근 구멍 2개로 문구 통일 |
| 11/25 음식 에티켓 | JP 카드 5 가로 넘침 | 짧은 일본어로 재렌더 |
| 11/26 태종대 | 다누비열차처럼 보이는 기존 그림, 도시 스카이라인·일반 버스정류장 | 절벽·소나무·영도등대·무료 순환버스 중심 |
| 11/28 광복로 | current main schedule은 기존 광안리/해안 이미지 세트 | 도심 발코니 재즈 공연용 새 아트 세트 필요. 생성·렌더·QA 전까지 draft 유지 |

현재 `main`의 11/28 아트 세트는 `ig-fresh15-1128-gwangbokro`다. 이전 11/18 audit branch의 새 발코니 아트 제안은 current main에 반영되지 않았다. 해당 branch는 main 대비 12 commits ahead / 253 behind로 크게 뒤처져 있어 그대로 PR 대상으로 사용하지 않는다.

## 4. 사실 확인 및 발행 차단 권고

### 11/24 — 전압·플러그

- EN: “Type C/F sockets”
- JA: “Cタイプ（SEタイプ）”
- TW: “C/F型（雙圓孔）”

세 언어가 서로 다르고, 한국관광공사 안내는 220V·60Hz와 둥근 구멍 2개를 명시한다. 플러그 타입 표기를 제거하고 세 언어를 같은 사실 기준으로 고치는 별도 제안서를 작성했다. 승인 게시물은 수정하지 않았다.

공식 출처: https://english.visitkorea.or.kr/svc/contents/infoBscView.do?vcontsId=140041

### 11/26 — 태종대 다누비열차

- 부산관광공사 운영 안내: 다누비열차는 안전점검으로 현재 운행 중단. 무료 순환버스가 대체 운행.
- 운영 안내: 수~일 09:30~17:30, 무료 승차권 배부 09:10~17:30, 월·화 휴무. 회차별 승차권은 선착순이며 우천·태풍 등 악천후 시 운행 중단.
- 운영사 안내: https://bto.or.kr/kor/CMS/Contents/Contents.do?mCode=MN030
- 2026-10-08 현장 정보도 같은 운행 중단·무료 순환버스 안내를 확인한다: https://thetravel.kr/busan-yeongdo-walk/
- Visit Busan의 일반 관광 페이지에는 과거 다누비열차 시간표가 여전히 남아 있어 운영사 최신 공지와 충돌할 수 있다. 운영사 안내를 우선한다.

현재 승인된 11/26 EN/JA/TW 카드 2는 각각 “Check the Danubi train”, “ダヌビ列車を確認”, “先確認觀光小火車”라고 돼 있다. 열차가 현재 운행하지 않는다는 점을 알리지 않아 방문객이 열차를 이용할 수 있다고 오해할 수 있다. **11/26 게시 전 교정이 필요한 고위험 항목**이다. 현 schedule은 변경하지 않았으며, 대체 무료 순환버스 안내 문구와 이미지 방향을 별도 제안서에 기록했다. 11/25 및 11/26 오전 운영사 공지를 재확인해야 한다.

### 11/28 — 광복로 발코니 뮤직쇼

Visit Busan 공식 일정: 11/28(토) 19:00~21:00, Sunny Moon Jazz Band 19:30~20:00, Modern Sounds Jazz Big Band 20:00~20:30.
- 공식 일정: https://www.visitbusan.net/schedule/view.do?boardId=BBS_0000010&dataSid=6438&menuCd=DOM_000000304010000000
- 세 언어 초안은 현재 draft / needs_check 유지. 11/27 및 행사 당일 오전에 최종 확인 후 승인 여부 판단.

## 5. 개선 우선순위

1. **P0 — 11/26 태종대:** 승인된 카드 문구가 현재 운행 상태를 반영하지 못한다. 무료 순환버스 안내로 바꾸는 교정안을 작성했으나 schedule/status는 변경하지 않았다. 소유자 승인과 게시 전 재확인이 필요하다.
2. **P1 — 11/24 전압:** EN/JA/TW 표기를 220V·60Hz·둥근 구멍 2개로 통일.
3. **P1 — 카드 QA:** 18개 legacy QA 재렌더, 11/25 JP card 5 overflow 해결. QA가 통과하지 않은 카드는 발행하지 않는다.
4. **P1 — 이미지 장면 분리:** coast / inland / market-food / indoor / coastal-nature / travel-still-life를 구분하는 scene-aware art prompt 구조 제안.
5. **P2 — Instagram 18개 빈 슬롯:** 11/27 겨울 빛 산책, 11/29 크리스마스 빌리지 운영일·티켓, 11/30 국제여객터미널 도보 접근, 12/01 K.Ride 기능·인증 주의, 12/02 부산 음식 메뉴 해설, 12/03 영도·태종대 순환버스 등 후보. 모두 TW/JA/EN 초안으로 만들되 현 schedule에는 넣지 않고, 가격·운영·예약 사실은 게시 직전 재검증.
6. **P2 — Threads:** 21개 설명형·링크 없는 문안은 기존 승인 게시물을 바꾸지 않는다. 다음 캠페인부터 TW/JA/EN 각 시장의 질문·경험 공유 CTA를 추가한다.
7. **P2 — publisher:** PR #553이 late window 내 세 번째 실행 기회를 추가하는 runner-only 수정안을 제안 중이다. Instagram 403 rate limit 자체를 해결하는 수정은 아니며, Threads의 attempts=0 누락과도 원인을 구분해야 한다.

## 6. 변경 경계 및 검증

- 이번 PR은 점검·교정·이미지 제안 문서만 추가한다.
- 활성 schedule, 예약 날짜·현지 시각·상태, 승인 캡션·이미지, publish-log, state branch, LIVE 설정은 변경하지 않는다.
- Missed 게시물 재발행, 외부 게시, workflow dispatch, 수동 retry, production deploy 없음.
- PR #553: https://github.com/xkrrudfbs45-afk/busan-travel-guide/pull/553 — open / Draft, runner-only cron 개선. Instagram content tests, Threads scheduler validation, Technical SEO audit 모두 success. 미병합·미배포.
- 문서 PR CI 결과는 별도 확인하며, CI 통과를 Production 배포로 표현하지 않는다.

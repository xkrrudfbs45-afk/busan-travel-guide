# Go2Busan SNS 전수 점검 — 2026-11-18

- 점검 시각: 2026-11-18 08:43 KST
- 대상 기간: 2026-11-18~2026-12-02 (각 계정 현지 날짜)
- 우선순위: zh-TW → ja → en
- 확인 파일: `content/social/instagram/schedule.json`, `content/social/threads-30day/schedule.json`, `instagram-state/publish-log.json`, `threads-state/publish-log.json`, 양 플랫폼 publisher workflow 및 카드 QA 파일
- 보호 원칙: 승인 게시물·활성 예약·상태 브랜치·외부 계정은 변경하지 않음. 이번 브랜치에서 수정한 것은 11/28 미승인 Draft 3개의 이미지 프롬프트뿐.

## 1. 15일 편성 현황

| 항목 | Instagram | Threads |
|---|---:|---:|
| 15일 슬롯 | 45 | 90 |
| 등록 | 30 | 90 |
| 국가별 등록 | TW 10 / JP 10 / EN 10 | TW 30 / JP 30 / EN 30 |
| 승인 | 27 | 90 |
| Draft / needs_check | 3 | 1개 검증 차단 |
| 빈 슬롯 | 15 (5일) | 0 |

### Instagram

- 등록일: 11/18~11/26 각 3개, 11/28 3개 Draft.
- 빈 날짜: **11/27, 11/29, 11/30, 12/01, 12/02** — 날짜별 TW·JP·EN 3개씩, 총 15개 슬롯.
- 27개 승인 게시물은 `verified`, 11/28 3개는 `draft / needs_check`.
- 30개 모두 현지 정오 게시 시각과 UTC 변환 일치, 국가별 가이드 경로와 Instagram UTM 존재, 5장 카드와 마지막 카드 CTA 존재.
- 활성 스케줄 안의 동일 시장 캡션 중복 없음.
- 구형 `nov12-26-drafts.json` 45개는 전부 Draft이고, 활성 스케줄과 **정확한 캡션 중복 24개(시장별 8개)**. 과거 날짜가 포함된 파일이므로 통째로 활성화하지 말 것.

### Threads

- 90개 모두 승인 상태이며 현지 날짜·시각·UTC 변환 90/90 일치.
- 검증 상태는 89 evergreen, 1 needs_check.
- 51개 링크 답글은 국가별 경로와 `utm_source=threads` 정상. 39개는 링크 없는 참여형 문안.
- 링크 없는 39개 중 18개는 명시적인 질문·답글 유도 CTA가 없음. 대상:
  - JP: `d20-jp-1`, `d25-jp-1`, `d26-jp-1`, `d26-jp-2`, `d27-jp-1`, `d27-jp-2`, `d28-jp-1`
  - EN: `d20-us-1`, `d26-us-1`, `d26-us-2`, `d27-us-1`, `d28-us-1`
  - TW: `d20-tw-1`, `d25-tw-1`, `d26-tw-1`, `d26-tw-2`, `d27-tw-2`, `d28-tw-1`
- 활성 15일분 20개 주제군, 주제별 최대 6개. 동일 시장 정확·근접 중복 탐지 0건. 게시 문안에 지난 행사 날짜를 다시 홍보하는 표현 없음.
- `d28-us-1` (12/01 미국 08:00)은 `verification.status=needs_check`인데 `status=approved`로 남아 있음. “The best plan…”의 주관적 최상급 표현이 사유. Publisher 코드는 `verified` 또는 `evergreen`만 통과시키므로 실제 발행 전 차단됨. 제안 문구: “A realistic plan groups nearby stops, leaves room for meals, and includes a buffer.” 승인 게시물 변경은 하지 않음.

## 2. 실제 발행 로그

### Instagram

- 상태 브랜치 기록: **21 published / 0 missed / 0 failed**.
- Published 21개 모두 permalink 존재. 이 중 현재 캠페인 ID는 TW 7, JP 5, EN 5, 이전 캠페인 legacy 4.
- 최근 게시물:
  - TW: https://www.instagram.com/p/Df1dHMbFZ6i/
  - JP: https://www.instagram.com/p/Df1dDivlbOV/
  - EN: https://www.instagram.com/p/Df23QvkIyz4/
- 11/17 최근 3개는 목표 시각보다 약 4~5시간 늦게 게시됐지만 6시간 late window 안에 기록됨. 최근 발행 지연은 운영 안정성 점검 대상.
- 최신 예약 실행 #102는 2026-11-17 21:08 UTC에 성공. 다음 게시물은 각 계정 현지 정오이므로 아직 게시 예정 시각 전.

### Threads

- 상태 브랜치 기록: **55 published / 26 missed / 0 failed**.
- Published 55개 모두 permalink 존재: JP 20, TW 18, EN 17.
- Missed 26개는 모두 `attempts=0`, permalink 없음, API 실패 기록 없음.
  - 기존 누락 20개: 11/10~11/11 예약분.
  - 최근 누락 6개: `d13-tw-1`, `d13-tw-2`, `d14-jp-1`, `d14-jp-2`, `d13-us-2`, `d14-us-1`. 11/18 04:55 KST 실행에서 3시간 late window 초과로 missed 기록. API 요청 실패가 아니라 실행 공백/지연에 따른 미시도 건.
- 최근 publisher run #127은 11/18 04:55 KST 성공. 08:23 KST 예정 실행은 08:43 KST 점검 시점까지 새 run이 확인되지 않음.
- 아직 missed로 확정되지 않은 due backlog:
  - `d14-us-2`: 11/17 18:00 America/New_York, 08:00 KST 예정, 43분 지연.
  - `d15-jp-1`: 11/18 08:00 Asia/Tokyo, 43분 지연.
  - `d15-tw-1`: 11/18 08:00 Asia/Taipei, 09:00 KST 예정 — 점검 시점에는 아직 due 전.
- 두 overdue 건은 3시간 허용 구간 안. 다음 예정 publisher 실행은 09:23 KST. 재발행·몰아올리기 금지.

현재 계정별 LIVE 설정은 별도로 확인하지 않았음. 과거 발행은 상태 로그와 실제 permalink로만 판단했고, 향후 발행 여부는 추정하지 않음.

## 3. 카드·이미지 시각 검수

- 10개 공통 아트 세트의 카드 프레임 50장을 검토. 동일 아트 세트가 EN·JA·TW에 공유되므로 아래 시각 이슈는 세 시장에 공통 적용.
- 검수한 아트는 AI 생성 삽화이며 EN·JA·TW 크레딧이 각각 현지화돼 있음. 확인한 범위에서 출처·라이선스 미상 외부 사진은 없음.
- 모바일 4:5 구도는 유지되지만, 장소·계절의 반복 이미지가 현지화 품질을 떨어뜨림.

| 게시일·주제 | 시각 검수 결과 | 조치 |
|---|---|---|
| 11/18 광안리 드론쇼 | 드론·해안 배경은 주제와 대체로 일치. EN·JA 카드에 공식 영문 행사명이 아니라 한국어 행사명이 남음 | 승인 게시물은 수정하지 않고 현지화 교정안 제시 |
| 11/19 해운대 | 일반 고층 도심·철도 이미지 비중이 높고 해변·해안열차 맥락이 약함 | 교체 프롬프트 제안 |
| 11/20 남포동 | 여러 카드에 광안대교·해안 스카이라인이 반복돼 자갈치·BIFF광장·광복로와 불일치 | 교체 프롬프트 제안 |
| 11/21 서면 | 카드 2~5에 바다·해안·광안대교가 섞여 도심 상권 콘텐츠와 불일치 | 교체 프롬프트 제안 |
| 11/22 부산 음식 | 음식·시장 소재는 적합하나 해안 스카이라인과 봄꽃이 반복 | 음식 중심 배경으로 보완 제안 |
| 11/23 우천 일정 | 실내 수족관·시장 장면은 적합하나 일부 카드가 해안 풍경에 의존 | 실내 장소 중심으로 보완 제안 |
| 11/24 첫 여행 준비 | 주소·플러그·준비물 일러스트는 주제와 대체로 일치 | 카피 사실 확인 필요 |
| 11/25 음식 에티켓 | 음식 장면은 적합하나 일본어 카드 5 QA 실패 | 재렌더·짧은 문구 제안 |
| 11/26 태종대 | 다누비열차가 증기기관차처럼 보이고 봄꽃·일반 버스정류장이 섞임 | 개방형 관광 셔틀·절벽·소나무·등대 중심으로 보완 제안 |
| 11/28 광복로 공연 | 현재 세트는 광안대교·해안 스카이라인이 나타나 남포동 도심 발코니 공연과 불일치 | 미승인 Draft 3개에 한해 새 프롬프트로 변경 |

### QA 게이트

- TW 10개 세트 중 3개(11/18, 11/19, 11/28)는 현재 `spec_hash`와 `card_count=5`가 있음.
- 나머지 7개는 구형 `qa.json`이라 현재 `spec_hash/card_count`가 없음. Publisher는 현재 사양 해시·렌더 해시·5장 존재 여부를 확인하고, 준비 구간에서 재렌더링되지 않으면 발행을 차단함.
- 11/25 JP 카드 5는 `qa.ok=false`, 이유: `body text overflows horizontally`. 현재 문구 `덜 맵게 해 주세요（辛さ控えめで）`를 줄바꿈·짧은 일본어 번역으로 수정 제안.
- 11/28 세트는 QA 메타데이터는 통과했지만 실제 장소 맥락이 틀림. 이번 브랜치에서 해당 Draft 3개의 art set을 `ig-fresh15-1128-downtown-balcony-v2`로 바꾸고, 바다·다리·해안 스카이라인·고층 타워·벚꽃을 제외한 도심 발코니 공연 프롬프트로 수정. **새 이미지 생성·렌더링은 아직 하지 않음.**

## 4. 사실·현지화 교정 제안

1. **11/18 광안리 드론쇼**: EN·JA 카드에 한국어 행사명 `성의 수호자`, `어벤져스: 둠스데이 in 광안리`가 그대로 남아 있음. Visit Busan 공식 영문 행사명은 “Guardians of the Castle with laser show”, “Avengers: Doomsday in Gwangalli”. 공식 이름을 유지하거나 각 언어로 짧은 설명을 병기.
2. **11/24 전압·플러그**: EN·TW는 C/F, JP는 C/SE로 서로 다름. 공식 관광 안내 기준으로 220V·60Hz·둥근 구멍 2개로 통일하고 타입 표기는 빼는 편이 안전.
3. **11/25 JP 음식 에티켓**: 카드 5 줄바꿈·축약 제안. 승인 게시물이라 실제 변경은 하지 않음.
4. **11/28 광복로 발코니 뮤직쇼**: Visit Busan 공식 행사 목록에서 11/28 19:00–21:00, 두 밴드 공연시간 확인. 이 행사는 광복로 공연이며, 2026–27 광복로 겨울빛 트리축제와 별개. 트리축제 날짜는 공식 발표 확인 전 게시 금지.
5. **K.Ride**: 공식 페이지는 해외 발행 카드, 사전 예상요금, 4개 앱 언어, 133개 언어의 목적지 검색·기사 채팅, 앱 내 Support 운영시간을 안내. 개인정보 안내에 휴대전화번호가 포함되지만, 한국 번호가 반드시 필요한지·모든 해외 번호가 인증되는지는 보장하지 않으므로 단정 금지.
6. **부산 시내버스 대형 캐리어**: 85·307번 30인치 시범은 2026-09-30 종료. 현재 일반 규정은 기내 반입 크기(20인치 이하)로 안내. 30인치 허용을 현재 전 노선 규칙처럼 재사용하지 말 것.

## 5. 이번 제안 브랜치 작업

- 브랜치: `audit/sns-2026-11-18-15day-content-visual`
- 베이스: PR #519 브랜치 `content/seomyeon-winter-event-radar-20261118` (미병합).
- 수정: 11/28 Draft 3개 art set/prompt, art-gate 허용 목록 추가.
- 추가 예정: 15개 Instagram 공백 슬롯을 위한 EN·JA·TW 초안과 점검 보고서.
- 활성 예약의 날짜·시각·상태, 기존 승인 게시물, publish-log, Threads 스케줄은 변경하지 않음.
- 새 이미지 생성, 외부 계정 게시, 예약 변경, PR 병합, Production 배포 없음.
- 겨울 이벤트 초안은 PR #519의 현지화 가이드 업데이트가 먼저 main에 반영되고 링크 대상 페이지가 검증된 뒤에만 승인 후보로 전환.

## 6. 공식 확인 출처 (2026-11-18 점검)

- Haeundae Light Festival, Busan Metropolitan City: https://www.busan.go.kr/eng/bsevents/1762645
- Millak Luce Festa, Busan Metropolitan City: https://www.busan.go.kr/eng/bsevents/1762643
- Seomyeon Light Festival, Busanjin-gu announcement reported by Newsis: https://files.newsis.com/view/NISX20261030_0003848584
- Christmas Village Busan 2026, YES24 official ticket notice: https://m.ticket.yes24.com/Notice/Detail.aspx?bid=18701
- Busan International Passenger Terminal directions, Busan Port Authority: https://www.busanpa.com/bpt/index.bpa?menuCd=DOM_000000401008000000
- K.Ride official service: https://www.kakaomobility.com/k-ride and https://utility.kride.kakaomobility.com/
- K.Ride privacy/terms information: https://utility.kride.kakaomobility.com/webview/terms/28?lang=en
- Busan City 30-inch luggage pilot end date (Traditional Chinese): https://www.busan.go.kr/zht/bsnews01/1739076
- Busan City 30-inch luggage pilot end date (Japanese): https://www.busan.go.kr/jpn/bsnews01/1739149
- Busan City carry-on size guidance: https://www.busan.go.kr/eng/ai-translated-press-releases/1724003
- Gwangalli November drone-show official English titles: https://www.visitbusan.net/schedule/view.do?boardId=BBS_0000010&dataSid=6450&menuCd=DOM_000000304010000000
- Visit Busan transit-pass exclusions (next-campaign candidate): https://www.visitbusan.net/en/index.do?menuCd=DOM_000000303012002000

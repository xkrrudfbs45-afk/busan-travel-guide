# Go2Busan SNS 전수 점검 — 2026-11-20 (current main)

- 점검 시각: 2026-11-20 08:22 KST
- 기준 main SHA: 13c1182cb60065673a9ea1bd6ccd4f7fab2888b6
- 대상: 2026-11-20~2026-12-04, 각 계정 현지 날짜 기준
- 시장 우선순위: zh-TW → ja → en
- 기준 자료: main의 Instagram/Threads schedule, instagram-state / threads-state의 publish-log, publisher 코드와 QA manifest
- 보호: 승인 게시물·활성 예약·상태 브랜치·LIVE 설정·외부 계정은 변경하지 않음

## 1. 15일 편성

| 항목 | Instagram | Threads |
|---|---:|---:|
| 기대 슬롯 | 45 | 90 |
| 활성 schedule 등록 | 24 | 86 |
| 시장별 등록 | TW 8 / JP 8 / EN 8 | TW 30 / JP 28 / EN 28 |
| approved | 21 | 86 |
| draft / 검증 보류 | 3 | 1개 verification 차단 |
| 빈 슬롯 | 21 (7일) | 4 |

### Instagram

- 11/20~11/26: 매일 TW·JP·EN 각 1개, 총 21개 approved.
- 11/28: TW·JP·EN 각 1개, 총 3개 draft / needs_check.
- 빈 날짜: 11/27, 11/29, 11/30, 12/01, 12/02, 12/03, 12/04. 날짜마다 3개 시장이 모두 비어 21개 슬롯.
- 24/24의 현지 정오(12:00) UTC 변환 일치.
- 24/24 국가별 guide URL과 bio-link URL의 언어 경로 및 Instagram UTM 정상.
- 24/24 5장 카드와 마지막 카드 CTA 보유. 24/24 AI 삽화 크레딧 기록.
- 정확한 캡션 중복 0건.
- 11/28 광복로 공연 3개는 draft / needs_check. Visit Busan 공식 일정에서 11/28(토) 19:00~21:00, 두 공연 시간 확인. 이미지 최종 시각검수 전 승인하지 않는다.

### Threads

- 86개 등록, 모두 status=approved. 시장별 TW 30 / JP 28 / US 28.
- 11/20~12/03은 매일 6개씩 있다. 12/04는 TW 2개만 있고 JP·US 각 2개 슬롯이 비어 총 4개 누락.
- 현지 날짜·시각·IANA timezone에서 UTC 변환 86/86 일치.
- 18개 주제군, 정확한 본문 중복 0건.
- Nampo-dong·Seomyeon·Busan food·Coastal photo walk 등 지역 특화 주제 24/86. 나머지는 예산·언어·여행 예절·일정 관리 등 일반 조언 비중이 높다.
- 링크 답글 39개, 링크 없는 본문 47개. 링크 답글 39/39의 국가별 경로와 utm_source=threads / utm_medium=social 정상.
- 링크 없는 47개 중 28개는 질문·답글 유도 문구가 있고, 19개는 직접적인 답글 유도가 없다. 다음 캠페인에서 질문·경험 공유형 CTA를 보강한다.
- d28-us-1은 12/01 미국 08:00, status=approved이나 verification=needs_check. “The best plan...”의 검증 불가능한 최상급 표현 때문에 publisher가 차단한다. 승인 문안은 변경하지 않았다.
- 15일 Threads schedule에서 과거 행사·종료된 축제 재홍보 문구는 발견되지 않았다.

## 2. 실제 발행 상태 — state branch publish-log

### Instagram

- **25 published / 2 missed / 0 failed**. Published 25개 모두 permalink가 있다.
- 최근 시장별 URL:
  - TW: https://www.instagram.com/p/Df6kfHwFR5K/
  - JP: https://www.instagram.com/p/Df6kbkaFTWl/
  - EN: https://www.instagram.com/p/Df23QvkIyz4/
- Missed:
  - ig-fresh15-1118-us — 1회 시도, HTTP 403 Application request limit reached, permalink 없음.
  - ig-fresh15-1119-us — 1회 시도, HTTP 403 Application request limit reached, permalink 없음.
- 두 건 모두 API 요청 제한 응답이다. 단순 workflow 실행 누락과 구분한다. 재발행·수동 retry하지 않았다.

### Threads

- **62 published / 31 missed / 0 failed**. Published 62개 모두 permalink가 있다.
- 최근 시장별 URL:
  - JP: https://www.threads.com/@go2busan.jp/post/Df7AcvKEQp4
  - TW: https://www.threads.com/@go2busan.tw/post/Df5zG3LlgT9
  - US: https://www.threads.com/@go2busan.us/post/Df5sac8jhXh
- Missed 31개는 attempts=0, permalink 없음, API 오류 없음. 20개는 11/07~11/11의 과거 슬롯, 11개는 11/16~11/19 슬롯이다. 이는 API 거절이 아니라 publisher가 허용 시간 안에 게시 시도를 하지 못한 실행 공백이다. 정확한 Actions run 원인은 publish-log만으로 특정할 수 없다.
- 11/20 08:00 JP 슬롯은 점검 시각 기준 약 22분 경과해 3시간 late window 안에 있다. TW 08:00 슬롯은 한국시간 09:00에 도래하고, US 08:00 슬롯은 더 늦게 도래한다. 세 슬롯 모두 점검 시점에는 missed로 기록되지 않았으며 발행 여부를 추정하지 않는다.

계정별 LIVE 설정과 토큰은 읽거나 변경하지 않았다. 과거 발행 여부는 publish-log와 permalink로만 판단했다.

## 3. 이미지·카드 QA 및 사실 확인

- 24개 Instagram QA manifest를 모두 찾았다.
- 23개 qa.ok=true, 1개 qa.ok=false.
- 8개만 spec_hash와 card_count=5를 갖는다. 나머지 16개는 legacy QA로 현재 spec 검증에 필요한 필드가 없다.
- Instagram publisher는 qa.ok 외에도 현재 spec_hash 일치, card_count, .hash 일치, 정확히 5개의 JPEG 파일을 확인한다. 따라서 legacy 16개와 실패 1개는 재렌더·QA 전 발행 차단 대상이다. 8개도 최종 .hash/JPEG 일치 검증 전에는 완전한 게시 승인으로 간주하지 않는다.
- 11/25 일본어 음식 에티켓 카드 5: qa.ok=false, 본문 가로 넘침. 제안 문구 「辛さ控えめでお願いします」로 줄인 뒤 재렌더한다.
- 11/24 준비물 카드: EN Type C/F, JA C type (SE type), TW C/F형 표기가 서로 다르다. 한국관광공사 공식 안내는 220V·60Hz와 둥근 구멍 2개를 설명한다. 세 언어 모두 타입 분류를 제거하고 같은 사실로 통일한다.
- 11/26 태종대: 카드 문안과 art prompts가 다누비열차 이용을 암시한다. 부산광역시관광협회 2026-07-10 공지는 열차 운행 중단(7/3부터 긴급 안전점검 종료 시까지), 무료 순환버스(7/4부터), 화~일 09:30~17:30, 회차별 무료 승차권 선착순 발권으로 안내한다. 이전 11/19 문서의 수~일·월화 휴무·09:10 발권은 잘못된 세부사항이며 별도 문서에서 정정한다.
- 11/28 광복로 발코니 뮤직쇼: Visit Busan 공식 일정은 11/28(토) 19:00~21:00, Sunny Moon Jazz Band 19:30~20:00, Modern Sounds Jazz Big Band 20:00~20:30. 게시물은 draft / needs_check 유지.
- 24개 게시물의 art metadata는 AI 삽화와 언어별 크레딧을 기록한다. 이번 회차는 art prompts와 QA manifest를 확인했으나 GitHub connector가 JPEG 바이너리 원본을 제공하지 않아 120장 전체의 픽셀·모바일 크롭을 직접 검수하지 않았다. 실제 이미지의 장소·음식·계절·행사 일치 여부는 별도 이미지 개봉 검수 필요.

공식 참고:
- 태종대 운행 중단·무료 순환버스: https://bta.or.kr/noticeDetail?no=1637&page=1
- 한국 전압·콘센트(일본어): https://japanese.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=140048
- 한국 전압·콘센트(번체): https://english.visitkorea.or.kr/svc/contents/infoHtmlView.do?vcontsId=140059
- 광복로 11/28 공식 일정: https://www.visitbusan.net/schedule/view.do?boardId=BBS_0000009&dataSid=6437&menuCd=DOM_000000204012000000

## 4. PR·CI·배포

- PR #553 publisher retry-window 변경은 2026-11-19 main에 병합됐다. Instagram content tests, Threads scheduler validation, Technical SEO audit 3/3 success.
- PR #554와 #555도 문서 PR로 병합됐다. 다만 #554의 태종대 셔틀 운영일·승차권 배부 시각이 잘못 적혀 있어 이 PR에서 교정한다.
- 이 PR은 점검·교정 문서만 변경한다. 활성 schedule, 예약 시각, 승인 게시물, 카드 이미지, publish-log, state branch, LIVE 설정은 변경하지 않는다.
- 외부 게시·재발행·workflow dispatch 없음. PR 미병합·Production 미배포.

## 5. 다음 작업 우선순위

1. 소유자 승인 후 11/26 태종대 카드 3개 언어 문안과 새 무료 순환버스 아트 세트 제안.
2. 11/24 전압 문구 통일 제안.
3. 11/25 일본어 카드 5 재렌더·QA 통과.
4. Instagram 16개 stale/failed QA 재렌더 및 .hash/JPEG 검증.
5. 12/04 Threads JP·US 4개 슬롯의 현지화 초안 제안. 활성 schedule에는 승인 전 추가하지 않는다.
6. Instagram 11/27, 11/29~12/04의 21개 공백 슬롯은 TW 우선, JP·EN 병행 초안으로 채우되 기존 예약은 변경하지 않는다.
7. Threads 링크 없는 19개 설명형 문안은 다음 캠페인에서 직접 답글 유도형으로 개선한다.

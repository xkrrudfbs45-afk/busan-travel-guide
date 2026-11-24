# SNS 교정 제안 및 공백 편성안 — 2026-11-25

이 문서는 제안 초안이다. 현재 승인된 게시물, schedule.json, 이미지, 예약 시간, publish-log는 수정하지 않았다.

## A. 긴급 교정 후보

### 1. 11/25 대만 음식 에티켓 — 카드 5

현재:
- 請做小辣一點

권고:
- 請做得不要太辣
- 또는 더 부드러운 부탁형: 可以做得不要太辣嗎？

뜻이 반대로 읽힐 수 있으므로 가장 먼저 바로잡아야 한다. 현재 게시물은 approved/verified이고 카드 QA도 통과해 있어, 실제 LIVE 설정이 켜져 있다면 현지 정오에 발행될 수 있다. 이번 PR은 활성 파일을 변경하지 않는다.

### 2. 11/26 태종대 — 3개 언어 공통

현재 문구:
- EN: Check the Danubi train
- JA: ダヌビ列車を確認
- TW: 先確認觀光小火車

권고 문구:
- EN: A July 2026 notice suspended the Danubi train for a safety inspection and listed a temporary free shuttle. Check the latest park notice before visiting.
- JA: 2026年7月の公告では、安全点検のためダヌビ列車が運休となり、臨時無料循環バスが案内されました。訪問前に最新公告をご確認ください。
- TW: 2026年7月公告指出，Danubi 觀光列車因安全檢查停駛，並公告臨時免費接駁巴士。出發前請確認最新營運公告。

주의:
- 현재 셔틀의 운행 요일·시간은 BTA 7월 공지와 후속 보도 간 차이가 있다. BISCO의 최신 1차 공지를 확보하기 전에는 요일·시간을 쓰지 않는다.
- “현재 셔틀 운행 중”이라고 단정하지 않는다.
- 영어·일본어·번체 가이드의 운행중단 안내와 SNS 카드 문구를 일치시킨다.

카드 구성 제안:
1. Taejongdae is a large coastal nature park.
2. Check the latest park transport notice.
3. The July notice listed a temporary free shuttle; current days may change.
4. The park has slopes and walking stretches.
5. Confirm access and return options before visiting.

### 3. 11/25 음식 카드 이미지

현재 15장 모두 국밥·해산물 시장 장면 뒤로 광안대교·바다·해안 고층 건물이 반복된다.

교체 방향:
- 국밥 식탁과 양념 그릇
- 식당 내부의 주문·혼밥 장면
- 시장 판매대와 가격 확인 장면
- 조리비·상차림비를 묻는 상황
- 바다·광안대교·마린시티 배경 제거

AI 삽화 표기는 유지한다. 실제 점포 사진을 쓸 경우 출처·라이선스·귀속표시를 먼저 확인한다.

### 4. 11/28 광복로 발코니 뮤직쇼 이미지

공식 공연 일정은 Visit Busan의 11/28 19:00~21:00, Sunny Moon Jazz Band 19:30~20:00, Modern Sounds Jazz Big Band 20:00~20:30과 일치한다.

다만 현재 15장 배경은 광안대교·해안 고층 건물·마린시티처럼 보인다.

교체 방향:
- 남포동 광복로의 낮은 상가 건물
- 도심 보행자 거리와 야간 조명
- 발코니 공연 무대와 관객
- 해안·광안대교·마린시티 제거
- 실제 행사 현장 사진이 아닌 AI 삽화라면 삽화 표기 유지

세 게시물은 Draft/needs_check 상태를 유지한다. 11/27과 행사 당일 오전 공식 일정 재확인 후 승인 후보로 전환한다.

## B. Threads 13개 needs_check 교정

| 게시물군 | 건수 | 조치 |
|---|---:|---|
| Christmas Village | 3 | selected dates·유료·시간 지정 입장 표현 유지, 공식 티켓 링크 확인 |
| Haeundae Light Festival + drone | 3 | 11/28 일정·시간·무료·기상 취소 가능성 유지, 두 지역을 한 동선으로 과장하지 않음 |
| Haeundae access | 3 | 해운대역 3·5번 출구와 구남로 경로 유지, 막차는 목적지별 확인 유도 |
| Winter lights round-up | 3 | 광복로 트리 12/4 시작 주장 삭제 |
| US “best plan” | 1 | “A comfortable plan is one you can enjoy.” 등 검증 가능한 최상급 제거 |

Threads publisher는 verification.status가 verified 또는 evergreen일 때만 발행한다. 위 13개는 검증이 끝나기 전까지 needs_check를 유지한다.

### 시간대 현지화

미국 11/27 18:00 게시물은 본문이 “Tonight in Busan (Sat, Nov 28)”라고 표현한다. 부산 현지 행사일을 말하는 것이지만 미국 독자에게 날짜 혼동을 줄 수 있다.

권고:
- “On Saturday, Nov 28 in Busan, …”
- 날짜와 부산 현지 시각을 먼저 제시한다.

## C. 12/2 겨울 조명 요약 수정

유지 가능한 사실:
- Seomyeon Light Festival 2026: 2026-10-29~2027-02-14, 18:00~24:00.
- 3rd Millak Luce Festa: 2026-11-14~2027-01-10, 18:00~23:30, 무료.
- 13th Haeundae Light Festival: 2026-11-28~2027-01-10, 18:00~23:00, 무료.

삭제:
- “Gwangbok-ro’s tree lighting is planned from Dec 4.”
- “光復路のツリー点灯は12月4日からの予定です。”
- “光復路聖誕樹點燈預計 12/4 開始。”

2026 광복로 트리축제의 공식 개막 일정은 이번 점검에서 확인하지 못했다.

## D. 12/5 Gwangbok-ro Street Festa

현재 활성 15일 schedule에는 12/5 게시물이 없다.

Busan City의 11/23 최신 뉴스는 16:00~22:00, 행사 목록은 16:00~20:00로 서로 다르다. 날짜는 12/5로 확인되지만 종료시간은 주최 측 최종 확인 전까지 보류한다.

시간 확인 전 게시 후보:
- Nampo-dong winter evening walk
- Gwangbok-ro shopping street and BIFF Square
- Street Festa is scheduled for Dec 5; check the organizer's latest notice before going

## E. 미편성 슬롯 보강안

### Instagram — 36개 공백

대상 날짜: 11/27, 11/29~12/9 (12일 × 3개 시장).

| 날짜 | 주제 | 게시 기준 |
|---|---|---|
| 11/27 | 부산 겨울빛 산책 | 확인된 서면·민락·해운대만 소개 |
| 11/29 | 해운대 빛축제 접근 | 2호선 해운대역 3·5번 출구, 구남로 |
| 11/30 | 민락 루체 페스타 | 공식 기간·점등시간·무료 입장 |
| 12/1 | 부산 지하철 1회권 해외카드 결제 | 11/18 부산시 안내 기준, 제외 구간 명시, 게시 직전 재확인 |
| 12/2 | Christmas Village 날짜·티켓 | 선택일·유료·시간대별 입장 |
| 12/3 | 부산역 수하물 보관 대안 | 기존 페이지 우선 |
| 12/4 | KTX·SRT 예매 실전 팁 | 기존 페이지 우선, PR #669 미병합 신규 경로 사용 금지 |
| 12/5 | 남포동 겨울 저녁 산책 | Street Festa 종료시간 확정 전 행사 시간 단정 금지 |
| 12/6 | 광안리 드론쇼 | 토요일 19·21시, 기상·기술 취소 가능 |
| 12/7 | 태종대 이동 | 최신 운영사 공지 재확인 전 운행 요일·시간 미기재 |
| 12/8 | 부산 음식 메뉴 해설 | 돼지국밥·밀면·어묵, 가격은 점포별 확인 |
| 12/9 | 부산 일정 짜기 | 지역별 이동시간·휴식시간 중심 |

각 날짜를 대만 번체 우선으로 제작하고 일본어·영어를 현지화한다. 이 표는 제안일 뿐 활성 schedule에 추가하지 않는다.

### Threads — 34개 공백

- 12/4: 일본·영어 각 2개.
- 12/5~12/9: 매일 6개, 총 30개.

5일 주제 제안:
1. 12/5: 남포동 겨울 산책 — 아침은 실용 동선, 저녁은 방문자 경험 질문.
2. 12/6: 광안리 드론쇼 — 아침은 시간·취소 확인, 저녁은 관람 경험 질문.
3. 12/7: 해운대·민락 조명 — 아침은 두 축제 비교, 저녁은 선호 지역 질문.
4. 12/8: 지하철 해외카드 결제 — 아침은 지원·제외 구간, 저녁은 실제 결제 경험 질문.
5. 12/9: 부산 음식 주문 표현 — 아침은 짧은 현지 표현, 저녁은 가장 궁금한 메뉴 질문.

같은 날 아침·저녁의 주제를 복제하지 않는다. Threads는 Instagram 캡션 복사가 아니라 현장 팁·질문·경험 공유형으로 별도 작성한다.

## F. 게시 전 공통 게이트

- 시간·가격·운행·행사 정보는 게시일 직전 공식 출처와 확인일을 기록한다.
- 행사 종료 후 콘텐츠는 재발행하지 않는다.
- 외부 사진은 라이선스·귀속표시가 확인될 때만 사용한다.
- AI 생성 이미지는 실제 현장 사진처럼 보이지 않도록 삽화 표기를 유지한다.
- schedule status, publish-log, LIVE 변수, 예약 시간은 승인 없이 변경하지 않는다.
- missed 게시물은 자동 재발행하지 않는다.
- 이번 PR은 제안 문서만 추가한다. 실제 게시물·예약·이미지·상태 로그 변경은 없다.

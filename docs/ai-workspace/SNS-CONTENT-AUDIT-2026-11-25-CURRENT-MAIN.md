# Go2Busan SNS 전수 점검 — 2026-11-25

- 점검 시각: 2026-11-25 08:46 KST
- 대상: Instagram / Threads, 대만 번체 우선·일본어·영어
- 점검 기간: 2026-11-25 ~ 2026-12-09 (15일, 계정별 현지 날짜)
- 기준 main: 5eeb3c94f335274ef401e67d0b967bf8f4eecf74
- 원칙: 승인 게시물·예약·상태 브랜치·외부 계정은 변경하지 않음

## 핵심 결과

| 항목 | Instagram | Threads |
|---|---:|---:|
| 15일 기대 슬롯 | 45 | 90 |
| 등록 | 9 | 56 |
| 승인 | 6 | 56 |
| Draft | 3 | 0 |
| 미편성 | 36 | 34 |
| 현지 시각 변환 오류 | 0 | 0 |
| 링크·UTM 오류 | 0 | 0 |

- Instagram은 11/25, 11/26, 11/28에만 3개 시장 게시물이 등록돼 있다. 11/28 3개는 Draft다.
- Threads는 11/25~12/3에 매일 6개, 12/4에 대만 2개만 등록돼 있다. 12/5~12/9는 전부 비어 있다.
- 현재 15일 편성에서 과거 행사 재발행은 발견하지 못했다. 다만 12/2 겨울 조명 요약의 광복로 트리 점등 12/4 시작 주장은 공식 확인이 안 돼 보류해야 한다.

## 1. Instagram — 9/45 등록

등록 9개는 다음과 같다.

| 날짜 | 대만 | 일본 | 영어 | 상태 |
|---|---|---|---|---|
| 11/25 | 음식 에티켓 | 음식 에티켓 | 음식 에티켓 | 3개 승인 |
| 11/26 | 태종대 | 태종대 | 태종대 | 3개 승인 |
| 11/28 | 광복로 발코니 뮤직쇼 | 동일 | 동일 | 3개 Draft |

- 36개 미편성: 11/27, 11/29~12/9 (12일 × 3개).
- 9/9 게시 시각은 각 계정 현지 정오로 변환된다.
- 9/9 국가별 가이드 경로와 Instagram bio-link UTM이 정상이다. 대만은 /zh-tw/, 일본은 /ja/, 영어는 영문 경로를 사용한다.
- 9/9 모두 5장 카드와 마지막 카드 CTA를 갖췄다.
- 11/25 대만 카드 5의 “請做小辣一點”은 “덜 맵게”가 아니라 “조금 맵게”에 가까워 의미가 반대다. 현재 승인·verified 상태이고 QA도 통과해, LIVE가 켜져 있다면 현지 정오에 잘못된 표현이 나갈 수 있다. 현재 LIVE 값은 확인되지 않아 발행 여부는 예측하지 않는다.
- 11/25 일본어 verification.note에는 이전 수평 넘침이 남아 있으나 현재 카드 QA는 spec_hash·card_count를 갖춘 통과 상태다. 검수 메모가 최신 산출물과 불일치한다.
- 11/26 태종대 3개 게시물은 모두 approved/verified다. 카드 문구는 다누비열차를 확인하라고 하지만, 연결된 영문·일본어·번체 가이드는 안전점검에 따른 운행중단과 임시 무료 순환버스 안내를 설명한다. SNS 문구와 연결 페이지가 서로 모순된다.
- 11/26 영어 카드 QA는 qa.json에 spec_hash와 card_count가 없어 legacy 상태다. Instagram publisher의 renderBlockReason는 이를 재렌더 필요로 차단한다. 재렌더되더라도 현재 art set이 열차처럼 보이는 차량을 포함하므로 시각 오류는 자동 해결되지 않는다.
- 11/28 광복로 3개는 Draft/needs_check라 발행 대상이 아니다. 행사 시간은 공식 확인됐지만 이미지가 실제 장소와 맞지 않는다.

## 2. Threads — 56/90 등록

- 시장별 등록: 대만 20, 일본 18, 영어 18.
- 미편성 34: 12/4 일본·영어 각 2개, 12/5~12/9 30개.
- 56/56의 08:00 또는 20:00 현지 시각과 UTC 변환이 일치한다.
- 링크 답글 22/22의 국가별 경로와 UTM이 정상이다. 나머지 34개는 링크 없는 대화형 본문이다.
- 정확한 문장 중복은 0건이다. 같은 시장의 아침·저녁 28쌍 중 14쌍(50%)은 같은 주제군을 반복한다.
- 물음표가 있는 본문은 19개다. 링크 없는 본문 중 16개는 직접적인 질문이 없어 경험 공유형 CTA를 보강할 여지가 있다.
- 56개 중 13개는 schedule status가 approved여도 verification.status가 needs_check다. scripts/threads/publish.mjs는 verified 또는 evergreen만 허용하므로 이 13개는 발행 차단된다.
  - 11/26 Christmas Village: 3개
  - 11/27 Haeundae Light Festival + Gwangalli drone show: 3개
  - 11/29 Haeundae Light Festival 접근: 3개
  - 12/2 겨울 조명 요약: 3개
  - 12/1 미국 최상급 표현: 1개
- evergreen 43개 중 36개는 verified_by/verified_at가 비어 있어 감사 추적성을 높일 필요가 있다.
- 12/2 겨울 조명 요약은 서면·민락·해운대 일정은 공식 자료와 일치하지만, 광복로 트리 점등을 12/4 시작으로 단정할 근거는 확인하지 못했다.
- 미국 11/27 게시물의 “Tonight in Busan”은 미국 현지 저녁에 게시된다. 날짜를 함께 적고 있으나, 시간대 혼동을 줄이려면 “On Saturday, Nov 28 in Busan”으로 바꾸는 편이 낫다.

## 3. 사실 확인

### 태종대

부산광역시관광협회 2026-07-10 공지는 다누비열차가 2026-07-03부터 긴급 안전점검 종료 시까지 운행 중단이라고 명시한다. 같은 공지는 2026-07-04부터 임시 무료 순환버스를 안내하고, 화~일 09:30~17:30 및 회차별 무료권 선착순을 적고 있다.

다만 Go2Busan의 최신 영문 가이드는 후속 보도에서 BISCO의 9월 공지에 따라 순환버스 운행 요일이 달라졌다고 설명한다. BISCO의 1차 공지를 이번 점검에서 직접 확보하지 못했으므로 SNS에는 요일·시간을 확정해 쓰지 않는다. “다누비열차 운행중단 공지와 임시 무료 순환버스 안내가 있었으니 출발 전 최신 운영 공지를 확인”하는 문구가 안전하다.

### 11/26~12/2 행사

| 행사 | 확인된 공식 정보 | 게시 판단 |
|---|---|---|
| Christmas Village Busan | 11/26~12/25, 11/26~12/20 목~일, 12/21~25 매일, 평일 16~22시·주말 11~22시, 영화의전당, 유료 | “선택일 운영·유료·시간 지정 입장”은 적합 |
| 13th Haeundae Light Festival | 11/28~2027-01-10, 18~23시, 무료, 11/28 18시 점등식 | 날짜·시간·무료 표현 확인 |
| Gwangalli M Drone Light Show | 11/28 19시·21시, 각 약 12분, 무료, 기상·기술 문제로 취소·지연 가능 | 취소 가능성 표기 유지 |
| Haeundae Station 접근 | 해운대구 공식 접근 안내에 2호선 해운대역 3·5번 출구 표기 | 출구 안내 확인 |
| Seomyeon Light Festival 2026 | 10/29~2027-02-14, 18~24시 | 기간 확인 |
| 3rd Millak Luce Festa | 11/14~2027-01-10, 18~23:30, 무료 | 기간·점등시간 확인 |
| Gwangbok-ro Tree Festival 2026 | 12/4 시작을 확인할 2026 공식 일정 미확보 | 날짜 문구 삭제·보류 |
| Gwangbok-ro Street Festa 12/5 | Busan City 최신 뉴스는 16~22시, 행사 목록은 16~20시 | 주최 측 재확인 전 종료시간 보류 |

### 공식 출처

- Taejongdae / Busan Tourism Association (2026-07-10): https://bta.or.kr/noticeDetail?no=1637&page=1
- Go2Busan EN Taejongdae guide: https://go2busan.com/guides/taejongdae-danubi-train-tips/
- Go2Busan JA Taejongdae guide: https://go2busan.com/ja/guides/taejongdae/
- Go2Busan TW Taejongdae guide: https://go2busan.com/zh-tw/guides/taejongdae/
- Christmas Village / Busan City: https://www.busan.go.kr/eng/bsevents/1762667
- Christmas Village organizer: https://www.marketchango.com/CHRISTMAS_VILLAGE_BUSAN_2026
- Haeundae Light Festival: https://www.busan.go.kr/eng/bsevents/1762645
- Gwangalli drone show November schedule: https://www.busan.go.kr/eng/bsnews01/1763224
- Haeundae-gu access: https://www.haeundae.go.kr/tour/index.do?menuCd=DOM_000000309006004000
- Seomyeon Light Festival 2026: https://www.busan.go.kr/eng/bsevents/1762644
- 3rd Millak Luce Festa: https://www.busan.go.kr/eng/bsevents/1762643
- Gwangbok-ro Balcony Music Show / Visit Busan: https://www.visitbusan.net/schedule/view.do?boardId=BBS_0000010&dataSid=6438&menuCd=DOM_000000304010000000
- Busan City Media Hub (2026-11-23 Street Festa 16~22시): https://www.busan.go.kr/eng/media-hub
- Busan City event listing (Street Festa 16~20시): https://www.busan.go.kr/eng/bsevents/1762987

## 4. 이미지·카드 45장 시각검수

현재 Instagram 9개 게시물의 카드 45장(3개 언어 × 3개 주제 × 5장)을 직접 열어 확인했다.

- 45/45 세로 4:5, 텍스트 잘림·모바일 크롭으로 인한 핵심 문구 누락은 발견하지 못했다.
- 45/45 AI 생성 삽화 표기가 보인다. 외부 사진은 사용되지 않아 사진 라이선스·귀속 미확인 소재는 발견하지 못했다.
- 기술 QA와 장소 적합성은 별개다. QA 통과 카드에도 장소가 맞지 않는 AI 배경이 반복된다.

주제별 문제:
1. 11/25 음식 에티켓 15장: 국밥·해산물 시장 소재는 있으나 광안대교·해안 고층 건물·바다가 배경으로 반복된다. 음식·식당·시장 에티켓 콘텐츠와 장소 맥락이 맞지 않는다.
2. 11/26 태종대 15장: 카드 2의 열차형 차량은 운행중단 상태를 오인시킨다. 일부 카드에는 광안대교·해안 고층 도시가 섞인다. 절벽·소나무 숲·등대·실제 운행 여부가 확인된 일반 셔틀 중심으로 바꿔야 한다.
3. 11/28 광복로 15장: 발코니 공연 자체는 있지만 배경이 광안대교·마린시티·해안 고층 건물이다. 남포동 광복로의 낮은 상가 건물과 보행자 거리로 바꿔야 한다.

권고:
- 음식: 식탁·국밥·양념 그릇·시장 판매대·가격 확인 장면
- 태종대: 절벽·소나무 숲·영도등대·운행 여부가 확인된 일반 셔틀
- 광복로: 남포동 도심 보행거리·낮은 상가·발코니 무대·야간 조명
- 실제 장소 사진은 라이선스와 귀속표시가 확인될 때만 사용. AI 삽화는 계속 삽화임을 표시.

### 카드 QA 메타데이터

- 9개 카드 세트 중 8개는 qa.json에 spec_hash/card_count가 있고 .hash와 일치한다.
- 11/26 영어 세트는 qa.ok=true여도 spec_hash/card_count가 없어 legacy QA다. 현재 publisher는 재렌더 전 차단한다.
- 11/25 대만 세트는 QA 통과지만 번역 의미 오류를 탐지하지 못했다. 텍스트 QA에 번체 의미 검수를 추가해야 한다.

## 5. 실제 발행 로그

### Instagram

- 상태 브랜치: instagram-state
- 최신 커밋: 29781830d18092cb1cd623de1dee474f44f38852 (2026-11-24 17:54:49Z)
- 누적: published 40 / missed 2 / failed 0
- Missed 2건은 미국 11/18·11/19이며 각각 attempts=1, HTTP 403 “Application request limit reached”, 게시 URL 없음.
- 최신 시장별 게시 URL:
  - JP: https://www.instagram.com/p/DgG-yCeEYRi/
  - TW: https://www.instagram.com/p/DgHM_D3G-03/
  - US: https://www.instagram.com/p/DgIifmpIKXw/

### Threads

- 상태 브랜치: threads-state
- 최신 커밋: ed5e5d2274196a8c546549870362d3a22d0a5c91 (2026-11-24 23:04:40Z)
- 누적: published 93 / missed 32 / failed 0
- Missed 32건은 JP 9 / US 13 / TW 10, 전부 attempts=0, API 오류·게시 URL 없음. 11/10~11/21의 실행 공백이며, API가 거절한 사례와 구분한다.
- 최신 시장별 게시 URL:
  - JP: https://www.threads.com/@go2busan.jp/post/DgJFkdZmf3N
  - TW: https://www.threads.com/@go2busan.tw/post/DgH5_c2IANs
  - US: https://www.threads.com/@go2busan.us/post/DgJFxXRGQH8
- 본문은 Published지만 답글 실패 2건:
  - d18-tw-2: 400 Fatal, 본문 URL https://www.threads.com/@go2busan.tw/post/DgC1F_toGUV
  - d21-jp-2: 400 Fatal, 본문 URL https://www.threads.com/@go2busan.jp/post/DgHzIHOFowE

### 당일 진행 상태

- Threads d22-jp-1은 2026-11-25 08:01 JST에 실제 Published, URL은 https://www.threads.com/@go2busan.jp/post/DgJFkdZmf3N
- 11/25 대만 Threads 08:00 슬롯은 점검 시각 이후 14분 뒤 예정, 미국은 이후 예정.
- 11/25 Instagram은 세 시장 모두 현지 정오 예정.
- 최신 publisher workflow 실행은 Instagram 45502817082 success (22:38:28Z), Threads 45510533821 success (23:30:29Z). 워크플로 성공과 실제 게시 성공은 구분했다.
- workflow는 INSTAGRAM_LIVE/THREADS_LIVE가 정확히 "true"일 때만 live 경로를 사용한다. 현재 저장소 변수 값은 확인 가능한 권한 범위에 없어 미래 게시 여부를 추정하지 않는다.

## 6. 관련 PR·배포

- PR #660: 이전 11/24 SNS 감사, main에 병합됨.
- PR #668: 신년 해돋이 가이드, Draft / Open. Technical SEO audit 1/1 success on exact head. 미병합·미배포.
- PR #669: KTX/SRT 예약 안내 통합, Draft / Open. Technical SEO audit 1/1 success on exact head. 미병합·미배포.
- PR #669가 병합되기 전에는 새 경로를 SNS에 연결하지 않는다. 기존 가이드 URL을 우선한다.
- 이번 점검으로 schedule.json, 카드 이미지, publish-log, 계정 설정은 변경하지 않았다.
- Production version.txt SHA는 이번 회차에 독립 확인하지 못했다. 이번 감사 PR은 문서만 추가하며 병합·배포되지 않았다.

## 7. 다음 우선순위

1. 11/25 대만 음식 카드 5의 번체 문구 교정안 검토.
2. 11/26 태종대 세 언어 문구를 열차 운행중단·최신 셔틀 공지 확인 중심으로 교정.
3. 태종대·음식·광복로 카드 아트 재제작 및 QA.
4. Threads 12/2 광복로 트리 12/4 문구 제거.
5. 12/5 Street Festa 종료시간은 주최 측 확인 전 게시 보류.
6. Instagram 36개, Threads 34개 공백을 대만 우선으로 보강. 과거 날짜를 소급 발행하지 않는다.

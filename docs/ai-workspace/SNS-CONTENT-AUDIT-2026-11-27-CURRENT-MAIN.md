# Go2Busan SNS 전수 점검 — 2026-11-27 (current main)

- 점검 시각: 2026-11-27 08:34 KST
- 기준 main: `a11d92bfcde5515be4d73f493559608b3a11a2f1`
- 범위: 2026-11-27~2026-12-11, 계정 현지 날짜 기준 15일
- 시장 우선순위: zh-TW → ja → en
- 확인: main Instagram/Threads schedule, `instagram-state` / `threads-state` publish-log, 현재 11/28 IG 렌더 카드 15장, UTM/locale path, 공식 행사 출처
- 보호: main schedule, state branch, 게시물, 예약 시각, 외부 계정, LIVE 변수, 이미지 파일은 변경하지 않음

## 1. 핵심 결과

| 항목 | Instagram | Threads |
|---|---:|---:|
| 15일 기대 슬롯 | 45 | 90 |
| 등록 | 3 | 44 |
| 등록 날짜 | 11/28만 | 11/27~12/4 (12/4 TW만) |
| 미편성 | 42 | 46 |
| 현지 시각 오류 | 0 | 0 |
| UTM / locale path 오류 | 0 | 0 |
| exact duplicate | — | 0 |

- Instagram 3개는 11/28 TW/JP/US, 모두 `draft`. 11/27과 11/29~12/11은 42개 슬롯이 비어 있다.
- Threads 44개는 schedule status `approved`이나 15일 중 8일만 편성. TW 16, JP 14, US 14. 12/4 JP·US 4개 슬롯과 12/5~12/11 42개 슬롯이 비어 있다.
- Threads 44개 중 10개는 link-reply, 10/10 UTM 및 시장별 경로 정상. 나머지 34개는 link-reply가 없다.
- 34개 linkless post 중 18개는 명시적 질문/댓글 CTA, 16개는 정보형으로 직접적인 참여 CTA가 없다.
- 같은 시장에서 아침·저녁 두 게시물의 주제가 반복되는 날: TW 5일(11/28, 11/30, 12/1, 12/3, 12/4), JP/US 4일(11/28, 11/30, 12/1, 12/3). 문장 중복은 없지만 주제 반복이 체감될 수 있다.
- 11/26 audit의 baseline SHA `6fbc38d...`는 현재 main과 다르다. 현재 점검은 merge #687 이후 SHA를 기준으로 수행했다.

## 2. 게시 상태 — publish-log 대조

### 현재 15일 범위

- Threads: 현재 범위에서 확인된 Published 1건
  - `d24-jp-1`, 2026-11-27 08:00 JST
  - URL: https://www.threads.com/@go2busan.jp/post/DgOPHzykWqG
- 현재 범위의 missed/failed post: 0건. 아직 게시 시각이 지나지 않은 항목은 로그 부재만으로 누락 처리하지 않았다.
- Instagram: 11/28 draft 3건은 publish-log에 없음. 게시 전 상태이며 missed로 분류하지 않았다.

### 누적 state-branch 로그

- Instagram: 46 published, 2 missed. 2 missed는 11/18~11/19 US 슬롯, attempts=1, 과거 retry-window 기록에 HTTP 403 `Application request limit reached`로 명시됨. 현재 15일 범위 밖.
- Threads: 105 published, 32 missed. missed 32건은 attempts=0이며 API 호출 오류가 기록되지 않았다. 이전 retry-window 보고서에서도 skipped Actions run의 정확한 원인은 publish-log만으로 추론할 수 없다고 명시했다.
- Threads link-reply 실패 3건: `d18-tw-2`, `d21-jp-2`, `d23-jp-1`; 게시물 본문은 Published, reply_status만 `failed` / `400: Fatal`. 게시물 실패와 댓글/링크 reply 실패를 구분한다. `d23-jp-1`은 11/26, 현재 범위 밖.
- publisher workflow run history와 실제 계정 LIVE 변수는 이번 점검에서 확인되지 않았다. LIVE 설정을 추정하지 않는다. 현재 확인 가능한 publish-log URL/status만 게시 증거로 사용한다.

## 3. Instagram — 11/28 Gwangbok-ro 3 draft

- `ig-fresh15-1128-tw/jp/us`: 3/3 `draft`, `verified`, 5 cards.
- 각 post의 `bio_link_url`은 국가별 `/zh-tw/`, `/ja/`, 영문 경로와 `utm_source=instagram`, `utm_medium=social`, campaign, content 값을 갖는다. 3/3 정상.
- 15장 렌더 카드의 QA metadata: `ok=true`, 5 cards, spec_hash와 `.hash` 일치. 기술 QA는 통과했지만 시각/장소 적합성은 통과하지 못했다.

### 시각 검수 — 15/15

- 세 시장의 카드 1~5에 동일한 해안 고층 도시·광안대교 배경이 반복된다. 2~5번은 특히 광안리/마린시티처럼 보이는 해안 장면이고, 카드 1의 발코니도 해안 배경이다.
- 카피는 광복로·남포동의 발코니 공연을 안내하지만, 실제 렌더는 남포동의 낮은 상가와 보행자 거리 맥락에 맞지 않는다. 15장 모두 AI 삽화 표시는 확인.
- 4:5 구성과 전체 이미지에서 본 텍스트 가독성은 양호. 320/360/390px 실기기 crop 테스트는 수행하지 않았다.
- **게시 보류 제안:** 이미지 파일을 승인 없이 교체하지 않는다. 새 프롬프트에서 해안·광안대교·마린시티·바다·고층 skyline을 명시적으로 제외하고, 남포동의 낮은 상가·보행자 거리·발코니 무대를 그린 세 시장별 set을 별도 초안/PR에서 재생성하고 시각검수 후 승인.

## 4. Threads — 현지화·CTA·링크

- TW 16, JP 14, US 14. 본문은 각 언어로 현지화됐고, Threads 형식은 Instagram 문안 복제가 아니라 질문·팁·경험 공유형.
- exact text duplicate 0.
- 10 link-replies: 10/10 `utm_source=threads`, `utm_medium=social`, campaign/content 값 및 시장별 locale path 정상.
- 34 linkless: 18 직접 질문/댓글 CTA, 16 정보형 tip. 16개에는 `저장`, `어떤 팁?`, `댓글로 알려주세요` 등 짧은 참여 CTA를 추가하되 문장 반복을 피한다.
- 5일(TW) / 4일(JP·US) 동안 동일 시장의 두 슬롯이 같은 주제를 다룬다. 아침은 실용 tip, 저녁은 질문/커뮤니티 CTA로 역할을 분리하고 주제 중복을 줄인다.
- US 11/27 evening post `d24-us-2`의 “Tonight in Busan (Sat, Nov 28)”는 시간대 혼동을 줄이기 위해 “This Saturday evening in Busan”으로 제안. 게시 일정/본문은 변경하지 않았다.

## 5. 7 needs_check — 수정 제안

| IDs | 게시일 / 시장 | 문제 | 제안 |
|---|---|---|---|
| `d26-tw-2`, `d26-jp-2`, `d26-us-1` | 11/29, TW/JP/US | Haeundae 접근: Exit 3 or 5 | 공식 Visit Busan 경로는 Exit 5를 안내. Exit 5와 구남로 접근으로 단순화하고, 공식 안내의 8분 도보만 사용하거나 거리시간을 생략. 막차는 목적지별 확인 문구 유지. |
| `d28-us-1` | 12/1, US | “Revisit the plan” 일반 tip, factual claim 없음 | 문안 변경 없이 `evergreen`으로 분류 제안. |
| `d28-tw-2`, `d29-jp-2`, `d29-us-1` | 12/2, TW/JP/US | winter lights round-up의 “Gwangbok-ro tree lighting planned from Dec 4” | 2026 트리축제 공식 발표를 확인하지 못함. 해당 문장 삭제/보류. 나머지 세 행사 날짜·시간은 공식 페이지로 확인. |

### 공식 확인 — 2026-11-27

- Haeundae Light Festival: 11/28~2027/1/10, 18:00~23:00, 무료. 11/28 점등식 18:00. https://www.busan.go.kr/eng/bsevents/1762645
- Gwangalli M Drone Light Show: 11/28 19:00·21:00, 약 12분, 무료, 기상·기술 취소 가능. https://www.busan.go.kr/eng/bsnews01/1763224
- Seomyeon Light Festival: 10/29~2027/2/14, 18:00~24:00. https://www.busan.go.kr/eng/bsevents/1762644
- 3rd Millak Luce Festa: 11/14~2027/1/10, 18:00~23:30, 무료. https://www.busan.go.kr/eng/bsevents/1762643
- Haeundae festival access: Visit Busan 공식 경로 안내는 Haeundae Station Exit 5를 안내한다. https://visitbusan.net/en/index.do?lang_cd=en&menuCd=DOM_000000302002001000&uc_seq=1413
- 2026 Gwangbok-ro Balcony Music Show & Street Festa: 11/28 공연 19:00~21:00, 12/5 Street Festa 16:00~22:00. https://www.busan.go.kr/eng/bsevents/1762987
- Gwangbok-ro 2026 winter tree festival: 이번 점검에서 2026 공식 발표 확인 못함. 2025~2026 행사 페이지를 재사용하지 않는다.

## 6. 편성 공백 — Draft queue 제안, schedule 미변경

### Instagram 42 슬롯

- 11/27 3개와 11/29~12/11 39개가 비어 있다. Taiwan 우선으로 기존 가이드 보강형 carousel 주제를 제안:
  - 11/27: 겨울 여행 준비 체크리스트
  - 11/29: Haeundae Light Festival 접근/막차 유의
  - 11/30: T-money·교통카드와 환승
  - 12/1: Nampo-dong 걷기 동선
  - 12/2: 겨울빛 행사 일정 비교(공식 사실만)
  - 12/3: 부산 현지 음식 주문/가격 확인 팁(현장 가격 일반화 금지)
  - 12/4: 12/5 Gwangbok-ro Street Festa 사전 안내
  - 12/5: Street Festa 당일 안내/현장 업데이트
  - 12/6: Christmas Village Busan(공식 운영시간·입장료 확인)
  - 12/7: 외국인 transit card / single-ride ticket
  - 12/8: 공항→도심 last-mile 선택
  - 12/9: 겨울 실내 대안(박물관/전시)
  - 12/10: 겨울 packing/날씨 대응
  - 12/11: Nampo/Seomyeon 실용 일정
- 이 목록은 편성안이며, 활성 schedule이나 승인된 게시물을 변경하지 않았다.

### Threads 46 슬롯

- 12/4 JP·US 4개: 12/5 Street Festa를 사전 안내하는 2개의 시간대별 post와 지역 이동/여행 준비 tip.
- 12/5~12/11 42개: TW 우선으로 7일 × 6 posts, 매일 아침 practical tip / 저녁 질문·경험 공유. 같은 시장의 두 slot을 같은 주제로 반복하지 않는다.
- 12/5 Street Festa는 공식 listing에서 16:00~22:00 확인. 미국 시장의 현지 18:00 게시물은 Busan 행사 종료 후 도달할 수 있으므로 당일 행사 CTA 대신 recap/다음날 계획 tip으로 전환하는 편이 안전.

## 7. 병행 PR / CI / 배포

- PR #691은 Haeundae opening-night fireworks timetable을 기존 EN/JA/zh-TW 겨울빛 가이드에 반영하는 Draft PR이며, SNS schedule 변경은 포함하지 않는다. 미병합이므로 main 콘텐츠로 간주하지 않는다.
- 이 audit PR은 보고서 파일만 추가한다. schedule, state branch, rendered image, LIVE 변수, 외부 계정, 배포 설정을 변경하지 않는다.
- CI run status와 production deploy/version은 이번 점검에서 확인되지 않았다. CI pass 또는 배포 완료를 주장하지 않는다.

## 8. 우선 작업

1. 11/28 Gwangbok-ro IG: 15장 semantic image mismatch를 해결한 새 artwork set을 별도 초안/PR로 생성·검수. 현재 draft 유지.
2. 11/29 Haeundae access 3 posts: Exit 5-only wording and verified route.
3. 12/2 winter-light round-up 3 posts: Gwangbok-ro tree-lighting claim 삭제/보류.
4. 12/1 US itinerary post: evergreen classification.
5. 15일 queue gap: Taiwan 우선 42 IG slots / 46 Threads slots의 Draft plan.
6. 16 informational linkless Threads posts: direct CTA 보강.
7. LIVE flags와 publisher run history는 확인 가능해질 때 별도로 대조; 현재는 추정 금지.

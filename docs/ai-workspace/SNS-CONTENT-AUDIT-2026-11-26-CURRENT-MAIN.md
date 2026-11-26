# Go2Busan SNS 전수 점검 — 2026-11-26

- 점검 시각: 2026-11-26 08:15 KST
- 기준 main: `6fbc38d98d8d39fd7dbf59270c9c2d28d6a37bd5`
- 대상: 2026-11-26~2026-12-10 (15일, 계정 현지 날짜 기준)
- 우선순위: zh-TW → ja → en
- 확인: Instagram / Threads schedule, instagram-state / threads-state publish-log, 기존 카드 QA 및 공식 행사 출처
- 보호: 승인 게시물, LIVE 설정, 외부 계정, 예약 시각, 활성 schedule, state branch는 변경하지 않음

## 1. 핵심 결과

| 항목 | Instagram | Threads |
|---|---:|---:|
| 15일 기대 슬롯 | 45 | 90 |
| 등록 | 6 | 50 |
| 승인 | 3 | 50 (schedule status) |
| Draft | 3 | 0 |
| 미편성 슬롯 | 39 | 40 |
| verification needs_check | 3 | 13 |
| 현지 시각 변환 오류 | 0 | 0 |
| 국가별 경로 / UTM 오류 | 0 | 0 |

- Instagram: 11/26 Taejongdae 3개는 approved/verified, 현지 정오 예정. 11/28 Gwangbok-ro 공연 3개는 Draft/needs_check. 나머지 39 슬롯은 비어 있다.
- Threads: 11/26~12/3은 매일 6개씩 등록됐고 12/4는 대만 2개만 등록. 12/5~12/10은 모두 비어 있다.
- Threads 13개는 status가 approved여도 verification.status가 needs_check여서 publisher 검증 게이트에서 차단 대상.
- 15일 schedule 내 정확한 본문 중복은 0. 다만 같은 날/시장별 budget, responsible travel, itinerary-review, month-end 질문 주제의 반복은 있다.

## 2. Instagram — 6/45 등록

| 날짜 | 시장 | 상태 |
|---|---|---|
| 11/26 | TW / JA / EN | 3개 approved, verified |
| 11/28 | TW / JA / EN | 3개 Draft, needs_check |
| 11/27, 11/29~12/10 | 전체 | 39개 미편성 |

- 11/26 3개 모두 5-card, AI-generated credit, 국가별 가이드 경로 및 bio-link UTM이 확인된다.
- 11/28 3개 모두 5-card, AI-generated credit, 국가별 가이드 경로 및 bio-link UTM이 확인된다. 다만 Draft 상태 유지.
- 11/26 bio link: EN `/guides/taejongdae-danubi-train-tips/`, JA `/ja/guides/taejongdae/`, TW `/zh-tw/guides/taejongdae/`. 3/3 UTM 정상.
- 11/28 bio link: EN / JA / zh-TW의 `nampo-neighborhood-guide` 경로. 3/3 UTM 정상.

### 이미지 QA

- 11/26 Taejongdae: 현재 렌더 15장(5장 × 3개 시장)의 3~5번 카드에 도시 스카이라인·광안대교·일반 버스정류장 등 현장과 맞지 않는 소재가 남아 있다. 새 art set이 있어도 렌더 카드가 갱신되지 않은 상태다. 게시 전 재렌더와 현재 spec_hash / card_count 검증 필요.
- 11/28 Gwangbok-ro: 렌더 15장 배경이 광안대교·Marine City·해안 고층 건물 중심. 남포동 광복로의 낮은 상가, 보행자 거리, 발코니 공연 무대와 일치하지 않는다. Draft 유지.
- AI 삽화 표기 확인. 이번 6개 세트에서 미확인 외부 사진 라이선스 소재는 발견되지 않았다.

## 3. Threads — 50/90 등록

| 날짜 | TW | JA | EN | 합계 |
|---|---:|---:|---:|---:|
| 11/26~12/3 | 16 | 16 | 16 | 48 |
| 12/4 | 2 | 0 | 0 | 2 |
| 12/5~12/10 | 0 | 0 | 0 | 0 |
| 합계 | 18 | 16 | 16 | 50 |

- 미편성 40: 12/4 일본·영어 4개 슬롯, 12/5~12/10 36개 슬롯.
- 16/16 link-reply URL은 국가별 경로와 `utm_source=threads`, `utm_medium=social`, campaign, content 값이 정상.
- 시장별 경로: TW `/zh-tw/`, JA `/ja/`, EN 영문 경로. 16/16 일치.
- link-reply 없는 34개는 대화형 게시물. 18개는 명시적 질문, 나머지 16개는 저장·공유·댓글 등 CTA를 더 명확히 할 여지가 있다.
- 주제 분포: coastal photo walk, Christmas Village, itinerary shortlist, travel budget, Haeundae/drone, language prep, responsible travel, itinerary review, community story, winter lights 등 13개 그룹. 동일 주제의 아침·저녁 반복을 줄이고 대만 우선 실용 팁을 보강한다.

### 13개 needs_check — 발행 전 검증 필요

| 게시물군 | 건수 | 조치 |
|---|---:|---|
| Christmas Village (11/26) | 3 | 공식 운영일·티켓·시간 확인 후 verified 처리 제안 |
| Haeundae lights + drone (11/27) | 3 | 공식 일정·시간·무료·취소 가능성 확인 |
| Haeundae access (11/29) | 3 | 3/5번 출구·구남로 경로 확인, 막차는 목적지별 확인 유도 |
| US “best plan” (12/1) | 1 | 최상급/검증 불가능 표현 제거 |
| winter lights round-up (12/2) | 3 | 광복로 트리 시작일 단정 삭제 |

### 현지화 / CTA

- 미국 11/27 18:00 ET 게시물의 `Tonight in Busan (Sat, Nov 28)`는 독자 현지 시간과 부산 행사 날짜가 혼동될 수 있다. `On Saturday, Nov 28 in Busan`처럼 날짜·부산 현지 시간을 먼저 제시한다.
- 링크 없는 34개 중 16개는 직접적인 질문이 없어 engagement CTA를 보강한다.
- exact text duplicates: 0.

## 4. 공식 정보 재확인

- Christmas Village Busan: 부산시 공식 일정은 11/26~12/25, 11/26~12/20 목~일, 12/21~25 매일, Busan Cinema Center, 평일 16:00~22:00 / 주말 11:00~22:00를 확인. 유료·시간 지정 입장, 선택일 운영을 정확히 안내할 것. https://www.busan.go.kr/eng/bsevents/1762667
- Haeundae Light Festival: 11/28~2027/1/10, 18:00~23:00, 무료, 11/28 18:00 점등식. https://www.busan.go.kr/eng/bsevents/1762645
- Gwangalli drone show: 11/28 19:00·21:00, 약 12분, 무료, 날씨·기술 문제 취소 가능성. https://www.busan.go.kr/eng/bsnews01/1763224
- 11/28 Gwangbok-ro Balcony Music Show: Visit Busan은 19:00~21:00, Sunny Moon Jazz Band 19:30~20:00, Modern Sounds Jazz Big Band 20:00~20:30. Instagram 3개는 Draft 유지, 현장 일치 artwork 재작업. https://www.visitbusan.net/schedule/view.do?boardId=BBS_0000010&dataSid=6438&menuCd=DOM_000000304010000000
- 12/2 겨울빛 요약: 광복로 트리 조명 설치 예정 기간 자료와 방문자 프로그램 확정은 구분. 공식 방문자 행사 시작일이 확인되기 전 `12/4 시작` 단정은 삭제 제안.
- 12/5 Street Festa: Busan City English event listing 16:00~20:00, 다른 공식 뉴스에는 16:00~22:00로 표기된 이력이 있어 종료시간은 최종 확인 전 보류. 현재 15일 SNS schedule에는 게시물 없음.

## 5. 실제 publish-log 대조

### Instagram — `instagram-state`

- 최신 state SHA: `af261032cca5954addbbc7b293ab01377856c6f0`
- 누적 45건: published 43 / missed 2 / failed 0.
- missed: 11/18 US 및 11/19 US, 각각 attempts=1, HTTP 403 `Application request limit reached`, 게시 URL 없음. API 거절이며 재발행하지 않음.
- 최신 11/25 실제 게시:
  - JA: https://www.instagram.com/p/DgJpx_UlD1j/
  - TW: https://www.instagram.com/p/DgJp1AulMMT/
  - EN: https://www.instagram.com/p/DgLDdPPldTh/
- 11/26 정오 및 11/28 Draft 게시 여부는 추정하지 않음.

### Threads — `threads-state`

- 최신 state SHA: `4ebff290e39a8652cfba593326eff7454a3ee67f`
- 누적 131건: published 99 / missed 32 / failed 0 (본문 기준).
- missed 32건: JP 9 / US 13 / TW 10. 전부 attempts=0, API 오류·게시 URL 없음. 11/10~11/21 실행 공백으로 분류하며 API 거절 실패와 구분. 재발행하지 않음.
- 11/26 JP 08:00 게시:
  - 본문 URL: https://www.threads.com/@go2busan.jp/post/DgLqUsGjvbE
  - 본문 published, link-reply는 HTTP 400 Fatal.
- link-reply 400 Fatal 누적 3건:
  - d18-tw-2: https://www.threads.com/@go2busan.tw/post/DgC1F_toGUV
  - d21-jp-2: https://www.threads.com/@go2busan.jp/post/DgHzIHOFowE
  - d23-jp-1: https://www.threads.com/@go2busan.jp/post/DgLqUsGjvbE
- 11/26 TW 08:00, US 08:00 및 후속 슬롯은 해당 현지 게시시각 전/검증 게이트 대상이므로 발행 여부를 추정하지 않음.

## 6. 개선 우선순위

1. **P1** — 11/26 Taejongdae 15장 재렌더: 절벽·소나무·등대 중심, 현재 운행이 확인되지 않은 열차·버스 이미지는 제거. 현재 spec_hash / card_count / 4:5 크롭 QA.
2. **P1** — 11/28 Gwangbok-ro 15장 재제작: 남포동 도심·발코니 무대·야간 조명. 세 게시물 Draft 유지.
3. **P1** — Threads 13개 needs_check: Christmas Village, Haeundae/drone, Haeundae route는 공식 출처 재확인 후 verified; 12/2 광복로 트리 시작일 삭제; US itinerary copy의 unverifiable claim 교정.
4. **P1** — Instagram 39개, Threads 40개 공백 보강. 대만 번체 우선, 12/4 JP·EN 누락과 12/5~12/10을 먼저 채운다. 소급 발행하지 않는다.
5. **P2** — linkless Threads 16개에 질문형/댓글 CTA 보강, 아침·저녁 동일 주제 반복을 줄인다.
6. **P2** — link-reply 실패 3건은 게시물 본문 재발행 없이 별도 답글 복구 여부를 승인 검토. 자동 재발행 금지.

## 7. 상태와 제한

- 오늘 활성 schedule, publish-log, state branch, 계정 LIVE, 외부 계정은 변경하지 않았다.
- Actions workflow-run API를 이번 점검에서는 확인하지 못했다. 실제 발행은 publish-log의 permalink/status로 확인; workflow success와 published를 혼동하지 않음.
- 이번 문서는 감사 기록과 제안만 담는다. CI, merge, production deploy 없음.
- 기존 PR #681 (KTX guide)과 #680 (Bus 1001 breadcrumbs)은 Draft/Open이며 SNS schedule 변경이나 이 감사의 배포를 의미하지 않는다.

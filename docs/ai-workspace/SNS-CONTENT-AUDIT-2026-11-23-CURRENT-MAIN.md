# Go2Busan SNS 전수 점검 — 2026-11-23 (current main)

- 점검 시각: 2026-11-23 08:22 KST
- 대상 기간: 2026-11-23~2026-12-07, 각 계정 현지 날짜 기준 15일
- 우선순위: zh-TW → ja → en
- 대상: Instagram / Threads 활성 schedule, 각 state branch의 publish-log, publisher 코드, Instagram 카드 QA 및 렌더 자산
- 안전: 활성 schedule·승인 문안·이미지·publish-log·state branch·workflow·계정 LIVE 설정·외부 계정은 변경하지 않음. 게시·재발행·예약 변경 없음.

## 1. 요약

| 항목 | Instagram | Threads |
|---|---:|---:|
| 15일 기대 슬롯 | 45 | 90 |
| 활성 schedule 등록 | 15 | 68 |
| 시장별 등록 | TW 5 / JP 5 / US 5 | TW 24 / JP 22 / US 22 |
| approved | 12 | 68 |
| draft / needs_check | 3 | 0 |
| 미편성 슬롯 | 30 | 22 |
| 현지 시각→UTC 검증 | 15/15, 정오 | 68/68 일치 |
| 국가별 URL·UTM | 15/15 | 링크 답글 21/21 |
| 카드 CTA | 15/15 | 대화형 질문 25건 |
| 정확한 문안 중복 | 0 | 0 |

- 합계 135개 기대 슬롯 중 83개 등록, 52개 미편성.
- 미편성 슬롯은 publish-log의 missed와 별개다.
- 11/23 현재 Instagram 현지 정오 슬롯은 아직 도래하지 않았다.
- Threads JP 11/23 08:00 JST 슬롯은 08:22 KST 현재 log 항목이 없지만 3시간 late window 안이다. missed로 분류하지 않는다.
- 계정별 INSTAGRAM_LIVE / THREADS_LIVE 값은 확인하지 않았다. 현재 LIVE 여부나 당일 발행 여부를 추정하지 않는다.

## 2. Instagram — 15일 편성·현지화

### 편성
- 11/23~11/26: TW·JP·US 매일 각 1개, 12개 approved / verified.
- 11/28: TW·JP·US 각 1개, 3개 draft / needs_check.
- 빈 날짜: 11/27, 11/29~12/07. 10일 × 3개 시장 = 30개 미편성.
- 15개 모두 계정 현지 정오(12:00)로 UTC 변환이 맞다.
- 15/15 국가별 guide_url 및 bio_link_url 언어 경로가 맞고, bio_link_url의 utm_source=instagram, utm_medium=social, utm_campaign, utm_content가 모두 존재한다.
- 15/15 카드 5장, 마지막 카드 CTA, 캡션 AI 생성 삽화 표기가 있다.
- 정확한 캡션 중복은 없다.

### 현지화·사실 확인 — 수정 제안
1. **P1 — 11/24 전압·콘센트 정보**
   - EN: “220V and Type C/F sockets”
   - JA: “220V、Cタイプ（SEタイプ）”
   - TW: “220V、C/F型（雙圓孔）”
   - 세 문안 모두 60Hz가 빠져 있고 플러그 유형 표기가 서로 다르다. 한국관광공사 공식 안내는 표준 전압 220V·60Hz, 콘센트는 둥근 구멍 2개라고 설명한다.
   - 세 언어 모두 “220V·60Hz, two round holes / 丸穴が2つ / 兩個圓孔”로 통일하고 C/F·SE 유형 표기는 제거한다.
   - 공식 자료: https://japanese1.visitkorea.or.kr/jpn/AKR/AK_JPN_3_2.jsp (2026-11-23 확인)

2. **P1 — 11/25 대만 번체 매운맛 표현**
   - 카드 5: “덜 맵게 해 주세요 —「請做小辣一點」”
   - “請做小辣一點”은 ‘조금 맵게’에 가까워 원문의 ‘덜 맵게’와 의미가 반대다.
   - 제안: “請做得不要太辣” 또는 “可以做得不要太辣嗎？”
   - JP “辛さ控えめで”는 의미가 맞지만 카드 5 QA가 가로 넘침으로 실패했다.

3. **P1 — 11/25 JP 카드 5 렌더**
   - qa.json: ok=false, 문제: “.body text overflows horizontally”.
   - 문구 길이·줄바꿈을 조정한 뒤 재렌더하고 현재 spec_hash 기준 QA를 다시 통과시켜야 한다.

4. **P1 — 11/28 광복로 발코니 뮤직쇼**
   - Visit Busan 공식 페이지가 11/28(토) 19:00~21:00, 19:30~20:00 Sunny Moon Jazz Band, 20:00~20:30 Modern Sounds Jazz Big Band, 장소 Gwangbok-ro를 확인한다.
   - 공식 페이지: https://visitbusan.net/schedule/view.do?boardId=BBS_0000010&dataSid=6438&menuCd=DOM_000000304010000000 (2026-11-23 확인)
   - 세 언어 게시물은 draft / needs_check 유지. 현재 카드 1 이미지는 낮 시간대 발코니와 광안대교·해안 스카이라인이 보인다. 남포동 광복로의 저녁 거리 공연과 장소·시간대가 맞지 않는다.
   - 광복로 상가 발코니·거리 관객·야간 조명 중심의 별도 삽화로 교체 제안. 실제 사진처럼 보이지 않게 AI 삽화 표시 유지.

### 이미지·카드 시각 검수
- 15/15 첫 카드 표지 이미지를 확인했다. 모든 이미지가 AI 삽화 표기를 포함하고 외부 사진 출처·라이선스 누락 소재는 발견하지 못했다.
- 11/23 우천 가이드: 우산은 보이나 하늘과 도시가 밝고 맑아 비 오는 날 주제가 약하다. 젖은 보도·실내 대안 장면 비중을 높이는 개선 제안.
- 11/24 짐 꾸리기: 캐리어는 주제에 맞지만 광안대교처럼 보이는 해안 배경이 주제와 무관하게 시선을 끈다. 캐리어·신발·어댑터 중심의 단순한 정물 배경 제안.
- 11/25 음식 에티켓: 돼지국밥 그릇 뒤에 해안·교량 스카이라인이 크게 보여 음식점·시장 주제와 시각적으로 어긋난다. 실내 식당 테이블·시장 주문 장면으로 교체 제안.
- 11/26 태종대: 해안 절벽·등대 장면은 해안 산책 주제와 대체로 맞는다. 다만 실제 태종대 특정 시설 사진으로 오인하지 않도록 AI 삽화 표기를 유지한다.
- 11/28 광복로: 세 언어 모두 낮 시간대·광안리 배경이어서 장소와 야간 행사에 맞지 않는다. 게시 차단 상태 유지.
- 11/25 JP 카드 5도 직접 확인했다. 화면상 글자 밀도가 높고 QA가 가로 넘침을 보고하므로 수정 전 통과 처리하지 않는다.
- 카드 전체 75장의 모든 내부 컷을 개별 시각 판독한 것은 아니다. 15개 게시물 QA 메타데이터와 15개 표지, 문제 카드 1장을 확인했다. 내부 컷 전체 시각 검수는 잔여 작업으로 남긴다.

### 게시 가능 QA gate
- 15개 qa.json 중 14개는 qa.ok=true, 1개(11/25 JP)는 false.
- 현재 publisher는 qa.ok 외에도 spec_hash, card_count, .hash, 모든 JPEG 파일이 현재 schedule 사양과 일치해야 통과시킨다.
- 8개는 spec_hash와 .hash가 확인되는 현재 사양 QA: 11/23 세 언어, 11/24 JP·TW, 11/28 세 언어.
- 6개는 legacy QA로 spec_hash가 없어 재렌더 필요: 11/24 US, 11/25 US·TW, 11/26 세 언어.
- 1개(11/25 JP)는 qa.ok=false.
- 따라서 approved 게시물 중 현재 사양 QA까지 통과한 것은 5/12다. 11/28 3개는 QA는 통과했지만 draft / needs_check이므로 발행 대상이 아니다.

## 3. Threads — 편성·주제·CTA

- 68개 모두 approved / evergreen.
- 시장별 등록: TW 24, JP 22, US 22.
- 미편성: TW 6개(12/05~12/07), JP 8개(12/04~12/07), US 8개(12/04~12/07).
- local_date / local_time / timezone → publish_at_utc 변환 68/68 일치.
- 21개 링크 답글 모두 국가별 경로와 utm_source=threads, utm_medium=social, utm_campaign, utm_content가 정상.
- 링크가 없는 본문 47개 중 25개는 질문·응답 유도형이고, 22개는 질문이나 링크 CTA가 없는 단순 팁형이다.
- 34개 시장·날짜별 2개 게시물 쌍 중 28쌍(82%)이 같은 주제다. 정확한 본문 중복은 0건이지만 아침·저녁 관점이 반복된다.
- 대만 번체 검사에서 간체 전용 문자 후보 0건. 전체 본문 500자 제한 이내(최장 215자).
- 현재 15일 Threads 편성은 예절·짐 꾸리기·예산·일정 정리·커뮤니티 질문 등 일반 여행 조언 비중이 높다. 대만 시장을 위한 부산 현장형 정보가 부족하다.
- 과거 행사·만료 정보를 재홍보하는 게시물은 이번 기간에서 발견하지 못했다.

### 개선 제안
- 같은 날 두 게시물을 같은 주제로 묶기보다 아침은 구체적 현장 팁, 저녁은 경험 질문·선택형 질문으로 분리한다.
- 미편성 22개는 TW 6개부터 채운다. 후보: KTX/SRT 매진·취소표 확인 팁, 부산역 짐 보관 대안, 외국인 택시 앱의 현재 공식 지원 기능, 민락어민활어직판장 방어 구매→식사 구조, 교통카드·QR 결제 범위, 해운대·오시리아 마지막 구간 교통.
- 가격·영업시간·운행·결제 지원은 게시 직전 공식 자료로 재확인하고 확인일을 기록한다. K.Ride 해외카드·인증 기능, 민락 현장 가격·상차림비, 공항 리무진 배차·요금은 현재 공식 확인 전 확정 표현 금지.
- 22개 CTA 미흡 문안에는 억지 링크 대신 “어떤 상황이 가장 궁금한가요?”처럼 자연스러운 질문을 선택적으로 추가한다.

## 4. publish-log 대조 — 실제 발행·누락

### Instagram state branch
- 36개 로그: **34 published / 2 missed / 0 failed**.
- 최근 실제 게시:
  - TW: https://www.instagram.com/p/DgCPS6nFiMI/
  - JP: https://www.instagram.com/p/DgCPPICFvho/
  - US: https://www.instagram.com/p/DgDmjrJCYwt/
- missed:
  - ig-fresh15-1118-us — attempts=1, HTTP 403 “Application request limit reached”, permalink 없음.
  - ig-fresh15-1119-us — attempts=1, HTTP 403 “Application request limit reached”, permalink 없음.
- 두 ID는 main schedule에서 여전히 approved지만 state log에서는 missed다. Publisher는 log의 terminal status를 확인하므로 자동 재발행하지 않는다.

### Threads state branch
- 111개 로그: **79 published / 32 missed / 0 failed**.
- missed 32개 시장별: JP 9 / US 13 / TW 10.
- missed는 모두 attempts=0, permalink 없음, API 오류 없음. 3시간 late window가 지난 뒤 missed로 기록된 상태다. 로그만으로 특정 Actions run의 생략·지연 원인을 단정하지 않는다.
- 최신 누락: d18-us-1, US 현지 11/21 18:00 슬롯, missed_at 2026-11-21T20:09:34Z.
- 최근 실제 게시:
  - US: https://www.threads.com/@go2busan.us/post/DgC7TxFIbiW
  - JP: https://www.threads.com/@go2busan.jp/post/DgC05FRIPq9
  - TW: https://www.threads.com/@go2busan.tw/post/DgC1F_toGUV
- d18-tw-2 본문은 published이고 위 URL이 존재하지만 link reply는 400 Fatal로 실패했다. 게시물 발행 실패와 링크 답글 실패를 구분한다.
- missed 32개도 main schedule에는 모두 approved로 남아 있다. state log가 재발행을 차단하지만 schedule과 log의 상태 불일치가 계속된다.

### 당일 상태 — 2026-11-23 08:22 KST
- Threads JP d20-jp-1 (08:00 JST): log 항목 없음. 3시간 late window 안이므로 아직 missed가 아니다.
- Threads TW d19-tw-1 (08:00 Taipei)과 US d20-us-1 (08:00 ET)은 점검 시각 기준 아직 예정 시각 전이다.
- Instagram TW·JP·US 12:00 현지 슬롯은 모두 아직 도래하지 않았다.
- 계정 LIVE 설정을 확인할 수 없어 당일 실제 발행 여부는 미확정으로 둔다.

## 5. 변경 제안 및 보호 범위

1. 11/24 전압 문안 세 언어 수정안 작성.
2. 11/25 TW “덜 맵게” 번역 수정, 11/25 JP 카드 5 축약·재렌더.
3. 11/24 US, 11/25 US·TW, 11/26 세 언어의 legacy QA 재생성 및 현재 spec_hash / .hash / JPEG 일치 확인.
4. 11/25 음식, 11/28 광복로 행사 이미지 개선 시안 작성. 11/23 우천·11/24 짐 꾸리기 배경도 주제 중심으로 정리.
5. Instagram 30개, Threads 22개 미편성 슬롯은 대만 우선으로 새 초안을 만든 뒤 사실 검증·현지화·이미지 QA를 거쳐 별도 승인.
6. missed 34개는 재발행하지 않는다. schedule의 approved 상태를 cancelled/expired 등 terminal state로 정합화하는 변경은 별도 사용자 승인 후 제안하고, publish-log는 보존한다.

이번 변경은 이 감사 문서만 추가한다. 활성 schedule, 승인 게시물, 이미지 파일, publish-log, state branch, workflow, LIVE 변수, credentials, 외부 계정은 변경하지 않는다. PR CI 결과와 운영 배포 여부는 별도로 확인한다.

# Go2Busan SNS 15일 전수 점검 — 2026-11-24

- 저장소: xkrrudfbs45-afk/busan-travel-guide
- 점검 기준: 현재 main, commit f54b134e9543f44c65aae18d2c9dc0fe391cb238
- 대상 기간: 2026-11-24~2026-12-08 (15일, 계정 현지 날짜)
- 시장 우선순위: 대만 번체(zh-TW) → 일본어(ja) → 영어(en)
- 확인 시각: 2026-11-24 09:02 KST
- 안전 원칙: 승인 게시물·활성 schedule·상태 브랜치·외부 계정 발행은 변경하지 않음

## 1. 핵심 현황

| 항목 | Instagram | Threads |
|---|---:|---:|
| 15일 기대 슬롯 | 45 | 90 |
| 현재 등록 | 12 | 62 |
| 승인 | 9 | 62 |
| Draft | 3 | 0 |
| 미편성 | 33 | 28 |
| 시장별 등록 | US 4 / JP 4 / TW 4 | US 20 / JP 20 / TW 22 |
| 현지 시각 변환 오류 | 0/12 | 0/62 |
| 국가별 경로·UTM 오류 | 0/12 | 0/27 링크 답글 |
| 정확한 문안 중복 | 0 | 0 |

### Instagram

- 등록 12개는 11/24~11/26 승인 게시물 9개와 11/28 광복로 공연 Draft 3개.
- 11/27, 11/29~12/08에는 세 시장 모두 등록 게시물이 없어 33개 슬롯이 비어 있음.
- 12개 모두 현지 정오 게시 시각으로 변환됨. US는 America/New_York, JP는 Asia/Tokyo, TW는 Asia/Taipei 기준.
- 국가별 guide path와 bio-link UTM 12/12 정상. 5장 카드와 마지막 카드 CTA 12/12 구성.
- 11/28 공연 3개는 Draft 상태이며 승인 게시물로 간주하지 않음.
- 15일 활성 스케줄에서 과거 행사·만료 날짜의 재발행은 발견하지 못함.

### Threads

- 11/24~12/03은 하루 6개씩, 12/04는 대만 게시물 2개만 등록.
- 12/04 JP·US 4개와 12/05~12/08 전체 24개, 합계 28개 슬롯이 비어 있음.
- local_date/local_time/tz와 publish_at_utc 변환 62/62 일치.
- 27개 링크 답글의 국가별 path와 utm_source=threads, utm_medium=social, utm_content 확인. 35개 본문은 링크 없이 게시하도록 설계됨.
- 링크 답글 27개, 물음표가 있는 본문 19개, 링크와 물음표가 모두 없는 본문 17개. 후자는 명령형 CTA가 있을 수 있으므로 CTA 부재로 단정하지 않고 참여 유도 문구 보강 대상으로 분류.
- 날짜×시장별 아침·저녁 31쌍 중 16쌍(52%)이 같은 주제군. 같은 날 다른 관점으로 분리하는 개선 필요.
- 정확히 같은 본문은 0건.

## 2. 게시 전 사실 확인 및 현지화 교정

### P0 — 11/24 전압 카드

현재 EN·TW 카드는 220V와 C/F 플러그 유형을, JA 카드는 C/SE 유형을 표기하지만 60Hz가 빠져 있고 세 언어 표기가 서로 다름.

한국관광공사 공식 안내는 220V·60Hz, 둥근 구멍 2개를 설명함.
- EN 권고: “Korea uses 220 V at 60 Hz. The outlets have two round holes.”
- JA 권고: “韓国の標準電圧は220V・60Hzです。コンセントは丸い穴が2つです。”
- TW 권고: “韓國標準電壓為220V、60Hz，插座為兩個圓孔。”

11/24 세 게시물은 현지 정오 예약이며, 확인 시각 09:02 KST에는 아직 게시 예정 시각 전. 승인 게시물 문안과 일정은 변경하지 않음.
Source: https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=140059

### P1 — 11/25 대만 번체 음식 표현

카드 5의 “덜 맵게 해 주세요” 번역인 “請做小辣一點”은 조금 맵게 해 달라는 뜻으로 읽힐 수 있어 원문과 반대 의미.
- 권고: “請做得不要太辣” 또는 “可以做得不要太辣嗎？”
- 일본어 “辛さ控えめでお願いします”와 영어 “Please make it less spicy”는 의미가 맞음.

### P0 — 11/26 태종대 다누비열차·셔틀

현재 Instagram 카드 2는 세 언어 모두 다누비열차를 확인하라고 안내하고, 기존 렌더 이미지에는 증기기관차처럼 보이는 차량이 등장함. 카드 3~5에도 광안대교·마린시티·봄꽃·일반 버스정류장 등 태종대의 늦가을 현장과 맞지 않는 요소가 반복됨.

2026-07-10 부산광역시관광협회 공지는 다누비열차가 7/3부터 긴급 안전점검으로 운행 중단되고 7/4부터 무료 순환버스를 대체 운행한다고 안내함. 공지상 운행일은 화~일, 시간은 09:30~17:30, 무료권은 다누비열차 매표소에서 회차별 선착순 배부. 다만 이 공지보다 최신인 운영사 재개 공지는 이번 점검에서 확인하지 못했으므로 게시 직전 운영사 공지와 기상 상황을 재확인해야 함. 현재 운행을 보장하거나 과거 2023년 시간·요금을 재사용하지 말 것. 현재 Instagram schedule은 이 게시물을 approved/verified로 표시하지만, 카드와 연결 가이드에 운영정보 불일치가 확인됐으므로 기존 verified 플래그를 최신 사실 확인으로 간주하지 말 것. 소유자 승인 없이 상태를 변경하지 않음.
Source: https://bta.or.kr/noticeDetail?no=1637&page=1

- 카드 제목 권고: “Check today’s park shuttle update” / “園内シャトルの最新案内を確認” / “先確認園區接駁最新公告”
- 캡션은 열차 운행 중단 공지와 대체 이동수단 확인을 안내하되, 재개 여부·시간을 당일 확인 없이 단정하지 않음.
- 새 art set ig-fresh15-15-locality-v3의 배경 5장은 instagram-state/art에 이미 존재하며 등대·숲길·공원 셔틀 중심으로 개선됨. 다만 15개 카드 렌더는 여전히 구형 이미지이며 QA에 spec_hash/card_count가 없어 publisher freshness gate를 통과하지 못함. 문안 승인 후 5장 전체 재렌더 필요.
- 연결된 가이드 페이지도 수정 필요: EN JSON-LD FAQ는 월·화 셔틀 미운행이라고 쓰지만 본문은 화~일 운행으로 서로 충돌. TW meta description은 월·화 휴무라고 쓰지만 본문은 월요일 휴무만 안내. TW 요약에는 “採先到先得” 중복. JA 페이지는 월요일 휴무로 일관됨. 페이지 본문·메타·JSON-LD를 같은 공식 공지 기준으로 정렬할 것.
- 해당 가이드 페이지 파일은 이 PR에서 수정하지 않음.

### P1 — 11/28 광복로 발코니 뮤직쇼 이미지

Visit Busan 공식 일정은 11/28 19:00~21:00, Sunny Moon Jazz Band 19:30~20:00, Modern Sounds Jazz Big Band 20:00~20:30으로 안내함.
Source: https://www.visitbusan.net/schedule/view.do?boardId=BBS_0000009&dataSid=6437&menuCd=DOM_000000204012000000

그러나 세 언어 15장 모두 광안대교·마린시티·해안 고층 건물 중심으로, 중구 광복로의 도심 발코니 공연과 맞지 않음. 첫 카드는 낮 장면인데 공연은 야간. AI 삽화 표기는 보이지만 장소 적합성은 부족함.
- 새 프롬프트 방향: 남포동·광복로의 낮은 상가 건물, 보행자 거리, 실제 행사와 혼동되지 않는 발코니 재즈 무대, 따뜻한 야간 조명.
- 광안대교·해변·마린시티·고층 해안 스카이라인·가짜 행사 로고 금지.
- 일본어 카드 2의 두 팀 공연시간은 줄바꿈을 분리해 읽기 쉽게 할 것.
- 세 게시물은 기존 Draft 유지.

## 3. Threads의 13개 needs_check 항목

모두 schedule status는 approved지만 verification.status는 needs_check. scripts/threads/lib.mjs의 검증 게이트는 verified 또는 evergreen이 아닌 게시물을 차단하므로, 승인 상태만으로 발행 가능하다고 판단하지 않음.

- Christmas Village 3개: d23-jp-2, d23-us-2, d22-tw-2. 공식 YES24 안내는 11/26~12/25 기간 중 21일 운영, 선택일 운영, 유료·시간 지정 입장을 안내. 현재 본문은 selected days와 paid/timed entry를 밝혀 과장하지 않음. 소유자 검증 후 상태 승인 필요.
- Haeundae Light Festival + Gwangalli Drone Show 3개: d24-jp-2, d24-us-2, d23-tw-2. 해운대 빛축제는 11/28~2027-01-10, 18:00~23:00, 무료. 광안리 드론쇼는 11/28 19:00·21:00, 약 12분, 무료이며 기상·기술 문제로 취소·지연 가능. 18:00 해운대 개막행사 뒤 19:00 광안리 공연을 하나의 확정 동선처럼 쓰지 말고 두 선택지로 분리.
- Haeundae route 3개: d26-jp-2, d26-us-1, d25-tw-2. 현재 문안은 해운대역 3번 또는 5번 출구. Visit Busan 축제 안내는 5번 출구에서 도보 약 8분을 안내하므로 5번 출구로 통일. Source: Visit Busan “Busan with Twinkling Lights” — https://visitbusan.net/index.do?lang_cd=en&menuCd=DOM_000000302002001000
- Winter lights roundup 3개: d29-jp-2, d29-us-1, d28-tw-2. 해운대·민락 루체 페스타 일정·시간은 공식 행사 페이지와 일치. 서면은 행사 기간만 표기하고 일일 점등시간은 추가하지 않음. 광복로 겨울빛 트리축제의 12/4~2027-01-31, 17:30~22:30은 중구 재공고의 조명 설치 예정 기간이지 전체 방문객 프로그램 확정 일정이 아님. “planned lighting period”라고 구분하고 행사 프로그램·운영시간으로 일반화하지 말 것.
- Evergreen superlative 1개: d28-us-1. “The best plan”은 검증할 수 없는 최상급. “A comfortable plan groups nearby stops and leaves a travel buffer”처럼 실용적인 표현으로 바꾼 뒤 소유자 검증.

### 4. 행사 일정 교차 확인

- Haeundae Light Festival: https://www.busan.go.kr/eng/bsevents/1762645 — 11/28~2027-01-10, 18:00~23:00, 무료.
- Millak Luce Festa: https://www.busan.go.kr/eng/bsevents/1762643 — 11/14~2027-01-10, 18:00~23:30, 무료.
- Seomyeon Light Festival: https://www.busan.go.kr/eng/bsevents/ — 10/29~2027-02-14. 현재 소셜 문안은 운영시간을 추가하지 않음.
- Gwangalli M Drone Light Show: https://www.busan.go.kr/eng/bsnews01/1763224 — 11/28 19:00·21:00, 약 12분, 무료. 비·강풍·태풍·기술 문제로 취소·지연 가능.
- Christmas Village Busan: https://m.ticket.yes24.com/Notice/18701 — 11/26~12/25 중 21일 운영, 선택일·시간 지정·유료 입장. 현재 문안은 선택일 운영을 명시.
- Gwangbok-ro Street Festa 12/5: Visit Busan 페이지는 16:00~22:00, Busan City English 일정은 16:00~20:00으로 서로 다름. 현재 15일 소셜 스케줄에는 게시물이 없음. Visit Busan: https://www.visitbusan.net/v/7xYD ; Busan City English: https://www.busan.go.kr/eng/bsevents/1762987 . 주최 측 최종 확인 전 종료시간을 넣은 게시물은 보류.
- Gwangbok-ro Winter Light Tree Festival: 중구 재공고는 조명 설치 예정 기간을 12/4~2027-01-31, 17:30~22:30으로 안내. 이는 전체 행사 프로그램 확정과 구분.
  Official notice: https://eminwon.bsjunggu.go.kr/emwp/gov/mogaha/ntis/web/ofr/action/OfrAction.do?not_ancmt_mgt_no=30073&jndinm=OfrNotAncmtEJB&context=NTIS&subCheck=Y&initValue=Y&countYn=Y

## 5. 이미지·카드 검수

15일 구간에 등록된 Instagram 12개 × 5장 = 60개 렌더 카드를 세 언어 모두 시각 확인.

- 60/60은 4:5 세로형이며 본문·CTA가 읽힘. AI 생성 삽화 크레딧이 모두 표시되고 외부 사진은 확인되지 않음.
- 11/24 여행 준비: 15장 모두 광안대교·해안 스카이라인 배경 반복. 준비물 주제에는 크게 어긋나지 않지만 시각 다양성이 낮고, 우천 대비 카드가 맑은 해안 풍경이라 계절·날씨 맥락이 약함.
- 11/25 음식 에티켓: 국밥·시장·식당 장면은 주제와 대체로 맞지만 해안 스카이라인과 등대가 반복되어 음식·시장 중심성이 약함. TW 카드 5의 번체 표현은 위 교정 필요.
- 11/26 태종대: 기존 15장 모두 구형 열차·광안대교·마린시티·봄꽃·일반 버스정류장 등으로 현장과 불일치. 새 art set 5장은 더 적합하지만 렌더 카드 미갱신.
- 11/28 광복로: 15장 모두 해안·광안대교·고층 건물 중심. 야간 도심 공연과 불일치.
- 11/28 일본어 카드 2는 시간 두 줄의 간격이 좁지만 텍스트 잘림은 없음. 줄바꿈 개선 권고.

QA manifest:
- 현재 spec_hash와 card_count=5 확인: 8/12.
- legacy QA: 4/12 (11/25 US 1개, 11/26 3개). qa.ok=true만으로 현재 스펙 통과로 보지 말 것.
- 현재 스펙 기준 명시적 QA 실패: 0.
- 11/26 새 art 파일은 존재하지만 렌더 카드가 구형이므로 재렌더 전 발행 차단 대상.

## 6. K.Ride·민락어민활어직판장 후보 검증

### K.Ride 택시 카드 초안

현재 공식 Kakao Mobility 서비스 페이지는 Google·Apple·이메일 등록, 해외 발행 카드, Alipay·GrabPay 등을 안내. App Store 최신 listing v1.9.8은 영어·일본어·간체·번체 앱 언어, 목적지 검색·기사 채팅 133개 언어, 모바일 기기 인증 또는 소셜 계정 연결을 설명함. 한국 번호가 반드시 필요한지, 어떤 해외 국가번호가 인증되는지는 공식 자료에 명시되지 않음.
- Kakao Mobility: https://www.kakaomobility.com/k-ride
- K.Ride: https://utility.kride.kakaomobility.com/
- App Store: https://apps.apple.com/kr/app/k-ride-taxi-cab-travel/id6474654222
- 모바일 번호 요구·해외 국가번호 지원을 단정하지 않도록 기존 초안의 EN/JA/TW 카드·캡션·검증 문구를 이 PR에서 수정.
- 해외 카드·언어 기능은 Kakao T 기능과 혼동하지 않음. 가짜 앱 화면·로고 금지, AI 삽화 표기 유지.
- 일본어 CTA는 공항~서면 이동 가이드로 연결되므로 K.Ride 전용 튜토리얼이라고 부르지 않음.

### 민락어민활어직판장 겨울 방어 초안

한국관광공사 안내는 생선회·탕을 제공하는 상층 식당과 연중 운영을 설명하지만, 현재 점포별 영업시간·가격·상차림비·최소 주문량이나 정확한 1층 구매→2층 식사 동선을 확정하지 않음.
Source: https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=84951

- 1층 구매→2층/초장집 동선은 점포별 현장 확인 전 확정하지 않음.
- 2023년 영업시간·휴무·kg 가격·상차림비 재사용 금지.
- 가격·혼밥·최소 주문은 점포별 확인을 유도.
- KNN 2026-11-06 회값 보도의 어종·수치는 현재 소셜 스케줄과 초안에서 사용하지 않음.
- 두 후보 모두 활성 schedule에는 미등록.

## 7. 실제 발행 로그 대조

### Instagram state branch

- 누적 로그: 39건
- published 37 / missed 2 / failed 0
- Missed:
  - ig-fresh15-1118-us — HTTP 403 “Application request limit reached”, attempts 1, permalink 없음.
  - ig-fresh15-1119-us — HTTP 403 “Application request limit reached”, attempts 1, permalink 없음.
- 두 건 모두 API 요청은 시도했으나 요청 제한으로 거절됨. 재발행·재시도하지 않음.
- 최근 실제 게시물 URL:
  - TW: https://www.instagram.com/p/DgE5Tz4ljMA/
  - JP: https://www.instagram.com/p/DgE5QcKFlrQ/
  - US: https://www.instagram.com/p/DgGBNZaiZ6V/

### Threads state branch

- 누적 로그: 120건
- published 88 / missed 32 / failed 0 (본문 게시 기준)
- Missed by market: JP 9 / US 13 / TW 10.
- Missed ID:
  - JP: d04-jp-2, d05-jp-1, d05-jp-2, d06-jp-1, d06-jp-2, d07-jp-1, d14-jp-1, d14-jp-2, d17-jp-1.
  - US: d04-us-1, d04-us-2, d05-us-1, d05-us-2, d06-us-1, d06-us-2, d07-us-1, d08-us-1, d13-us-2, d14-us-1, d15-us-1, d16-us-1, d18-us-1.
  - TW: d03-tw-2, d04-tw-1, d04-tw-2, d05-tw-1, d05-tw-2, d06-tw-1, d13-tw-1, d13-tw-2, d14-tw-2, d15-tw-2.
- 32건 모두 attempts=0, API 오류 없음, permalink 없음. 3시간 late window 내 publisher가 요청을 시도하지 못한 실행 공백으로 분류. 정확히 어느 Actions 실행이 누락·지연됐는지는 publish-log만으로 특정할 수 없음. 재발행하지 않음.
- 최근 실제 게시물 URL:
  - JP: https://www.threads.com/@go2busan.jp/post/DgGguqVFGDx
  - US: https://www.threads.com/@go2busan.us/post/DgGg7bJlG9i
  - TW: https://www.threads.com/@go2busan.tw/post/DgGnl6Jmv71
- d18-tw-2는 본문 published URL https://www.threads.com/@go2busan.tw/post/DgC1F_toGUV 이지만 링크 답글은 HTTP 400 Fatal. 본문 실패가 아니라 후속 답글 실패로 분리.
- 확인 시각 09:02 KST 기준 11/24 JP 08:00 및 TW 08:00 게시물은 실제 URL로 published 확인. US 08:00 ET는 아직 예정 시각 전. Instagram 11/24 정오 게시물도 아직 예정 시각 전. 향후 발행 여부는 추정하지 않음.

계정별 LIVE secret은 읽거나 변경하지 않음. 과거 published는 status branch의 permalink로만 확인했고, 미래 발행을 추정하지 않음.

## 8. GitHub·CI·배포

- 현재 main: f54b134e9543f44c65aae18d2c9dc0fe391cb238 (PR #658 merge 이후).
- docs/ai-workspace/STATUS.md는 이전 SHA f1a0266을 계속 표시하므로 stale. 이번 PR에서는 STATUS.md를 수정하지 않음.
- 관련 PR #659는 Open / Draft, base f54b134, head cf2a924. Technical SEO audit 1/1 success. PR은 미병합이며 Production 배포 없음. 로컬 빌드 보고는 CI 결과와 구분.
- PR #660: https://github.com/xkrrudfbs45-afk/busan-travel-guide/pull/660 — Draft, 2개 파일(감사 보고서 + 미승인 K.Ride 초안 교정), base f54b134. 최신 GitHub PR snapshot에서 mergeable=true로 확인. 다만 CI run이 아직 없어 검증 대기 상태이며 병합하지 않음.
- PR #660 최신 head의 workflow run 및 combined status는 아직 없음. CI 통과로 표시하지 않음.
- 관련 PR #659는 Open / Draft, head cf2a924의 Technical SEO audit 1/1 success. 미병합·미배포.
- PR #660은 미병합이며 이 PR로 인한 Production 배포 없음. 기존 Production 배포 SHA는 이 점검에서 독립적으로 재확인하지 않음.
- PR #660은 감사 보고서 추가와 미승인 K.Ride 초안의 휴대전화 검증 표현 교정만 포함. 활성 Instagram/Threads schedule, publish-log, 승인 이미지, 예약 시간, 외부 계정에는 변경 없음.

## 9. 다음 수정 우선순위

1. 11/24 전압 카드 3개 문구 교정 승인 여부 확인.
2. 11/25 TW “請做小辣一點” 교정.
3. 11/26 태종대 카드 문구·이미지와 EN/TW 가이드 FAQ·meta·JSON-LD 일치.
4. 11/28 광복로 카드 15장 도심 야간 장면으로 재제작; Draft 유지.
5. Threads needs_check 13개를 공식 출처·최종 문안 기준으로 검증하고 소유자 승인 후에만 verification 상태 갱신.
6. Instagram 빈 슬롯 33개, Threads 빈 슬롯 28개는 대만 번체 우선으로 신규 초안 제안. 우선 후보: K.Ride 7장, 민락 겨울 방어, 부산역 짐 보관 대안, KTX/SRT 매진·취소표 팁, 버스 QR 결제 지원 범위, 부산 음식 메뉴 해설.
7. 12/5 광복로 Street Festa는 Visit Busan 16:00~22:00, Busan City English 16:00~20:00 상충. 주최 측 최종 확인 전 종료시간을 게시하지 않음.



## Correction — Taejongdae official source conflict (24 November 2026)

A follow-up source check found that the 10 July 2026 Busan Tourism Organization notice still states that the Danubi train was suspended from 3 July until an emergency safety inspection ends. It lists a temporary free shuttle Tuesday–Sunday, 09:30–17:30, with free per-departure tickets, but gives no restart date: https://bta.or.kr/noticeDetail?no=1637&page=1

Visit Busan's general Taejongdae listing displays a regular seasonal timetable and Monday closure, but does not explicitly confirm that the July suspension ended: https://www.visitbusan.net/index.do?lang_cd=ko&menuCd=DOM_000000201013001000&uc_seq=542

Therefore, do not describe the train as currently operating based only on the generic timetable. Treat the specific BTA suspension notice as the latest explicit status found, state that no restart date was located, and ask readers to verify the same-day notice. The dedicated EN/JA/zh-TW content and archival-image correction is tracked in Draft PR #661.


### Additional correction — temporary shuttle schedule is also inconsistent

The 10 July 2026 BTA notice lists the temporary shuttle Tuesday–Sunday, 09:30–17:30. Later secondary reporting cites a 9 September BISCO notice and describes a different operating-day pattern (Wednesday–Sunday). The primary BISCO notice could not be retrieved during this audit, so the current shuttle days and hours must not be presented as confirmed. Direct visitors to the BISCO notice and same-day confirmation (051-405-8745). Draft PR #661 now reflects this uncertainty in EN/JA/zh-TW.

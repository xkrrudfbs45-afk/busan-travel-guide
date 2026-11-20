# SNS 교정·공백 슬롯 제안 — 2026-11-21

> 제안 전용. 승인 게시물·예약 시각·활성 schedule·이미지·publish-log·외부 계정은 변경하지 않았다. 소유자 승인 전 게시하거나 예약에 추가하지 않는다.

## P0 — 11/26 태종대

### 현재 문제

EN “Check the Danubi train”, JA 「ダヌビ列車を確認」, TW 「先確認觀光小火車」는 운행 중단된 다누비열차를 현재 이용 가능한 것처럼 보이게 한다. 카드 이미지에도 열차가 등장한다.

부산관광공사(BTO) 운영사 페이지를 2026-11-21 직접 확인했다. 다누비열차는 안전점검으로 현재 운행하지 않고, 무료 순환버스가 대체 운행 중이다. 운영사 현재 안내는 수~일 09:30~17:30 운행, 매표 09:10~17:30, 월·화 정기휴무, 우천·태풍 등 악천후 시 중단, 회차별 무료 승차권 선착순 발권이다. BTA 2026-07-10 공지에는 화~일로 적혀 있으나 현재 운영사 페이지와 다르므로, 운영사 BTO 페이지를 우선한다.

- BTO 운영사 공식 안내: https://bto.or.kr/kor/CMS/Contents/Contents.do?mCode=MN030
- BTA 2026-07-10 과거 공지: https://bta.or.kr/noticeDetail?no=1637&page=1
- 현재 EN 가이드: https://go2busan.com/guides/taejongdae-danubi-train-tips/

### 제안 문구

- EN: “The Danubi Train is suspended for safety inspections. A free circular shuttle runs Wednesday–Sunday, 09:30–17:30. Pick up a free ticket for each ride at the Danubi ticket office (09:10–17:30). The shuttle is closed Monday and Tuesday and may stop in bad weather. Check the operator’s notice before visiting.”
- JA: 「ダヌビ列車は安全点検のため運休中です。代わりに無料の循環バスが水〜日曜の9:30〜17:30に運行します。乗車ごとの無料券はダヌビ乗車券売り場で9:10〜17:30に先着順で受け取ります。月・火曜は運休し、悪天候時も運行を中止する場合があります。訪問前に運営元のお知らせを確認してください。」
- TW: 「多努比觀光列車因安全檢查暫停營運。免費循環巴士改於週三至週日9:30–17:30行駛；請於多努比售票處9:10–17:30領取每趟免費乘車券，採先到先得。週一、週二停駛，天候不佳時也可能停駛。出發前請確認營運單位最新公告。」

운행일·운행시간·매표시간은 BTO 운영사 페이지를 게시 직전 다시 확인한 뒤 카드에 넣는다. 새 이미지에는 다누비열차가 아니라 실제 운행 여부가 확인된 무료 순환버스를 삽화로 표현한다. 절벽·소나무 숲·영도등대를 배경으로 하고 광안대교·마린시티·벚꽃·일반 버스정류장은 제외한다. 새 art-set ID를 사용한다.

## P1 — 11/24 전압·플러그

한국관광공사 공식 안내는 220V·60Hz, 둥근 구멍 2개를 설명한다. EN Type C/F, JA C/SE, TW C/F 표현을 제거하고 통일한다.

- EN: Korea uses 220V at 60Hz, with two round holes in the outlet. Check your device’s voltage range and bring a suitable adapter.
- JA: 韓国の電圧は220V・60Hzで、コンセントは丸穴が2つです。機器の対応電圧を確認し、適切な変換プラグを用意しましょう。
- TW: 韓國電壓為220V、60Hz，插座是兩個圓孔。請先確認電器的電壓支援範圍，並準備合適的轉接頭。

공식 자료:
- JA: https://japanese.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=140048
- TW: https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=140059

## P1 — 11/25 일본어 카드 5

현재 `ig-fresh15-1125-jp`는 QA에서 가로 넘침으로 실패했다. 제안 문구 「辛さ控えめでお願いします」로 줄이고 새 5장 세트의 current spec hash, card_count=5, .hash 및 JPEG 5개를 검증한다.

## P1 — 현재 이미지 QA 차단

18개 승인 게시물 중 5개만 current QA metadata와 .hash가 일치한다. 12개 legacy QA와 1개 failed QA는 재렌더·QA 전 발행하지 않는다. 기존 승인 이미지 덮어쓰기는 금지하고, 새 art-set ID로 교정안을 제시한다.

## P2 — Instagram 공백 24개

공백 날짜: 11/27, 11/29, 11/30, 12/01, 12/02, 12/03, 12/04, 12/05. 날짜마다 TW·JP·US 각 1개씩 총 24개.

제안 주제:
1. 11/27 — 외국인 택시 이용: K.Ride 공식 기능, 가입·결제 주의, 한국어 숙소 주소 저장.
2. 11/29 — 민락어민활어직판장 겨울 방어: 1층 구매→2층/초장집 식사 구조. 가격·영업시간·상차림비는 현재 점포 확인 전 숫자 금지.
3. 11/30 — 부산 국제여객터미널: 도착 후 이동·수하물·역 연결. 동선·운영 정보는 공식 자료 확인 후 작성.
4. 12/01 — 1001번 혼잡 대안: 부산역→해운대·센텀·송정 구간의 버스·도시철도 선택지를 비교. 노선·배차·소요시간은 최신 공식 자료로 검증.
5. 12/02 — 부산 음식 메뉴 해설: 돼지국밥·밀면·어묵의 주문 표현과 메뉴 차이.
6. 12/03 — 겨울 우천·실내 일정: 실제 운영일·휴관·입장 조건을 확인한 장소만 사용.
7. 12/04 — 부산 교통카드·QR 결제: 지원 결제수단과 제외 노선을 최신 공식 자료로 구분.
8. 12/05 — 광복로 Street Festa: 부산시 공식 일정은 16:00~20:00, 광복로 일대. 게시 직전 주최 측 공지 재확인.

## P2 — Threads 공백 10개

- 12/04: JP 2개, US 2개
- 12/05: TW 2개, JP 2개, US 2개

12/05 Street Festa를 대만 질문형 2개, 일본 경험 공유형 2개, 영어 현장 팁형 2개로 분리한다. Instagram 캡션을 그대로 복제하지 않는다.

## P2 — K.Ride 택시 카드 후보

공식 사이트와 앱스토어 자료에서 확인된 기능만 사용한다.
- 앱 UI 4개 언어: EN·JA·중국어 간체·번체
- 목적지 검색·기사 채팅 번역 133개 언어
- 신용·체크카드 및 모바일 결제

한국 전화번호 없이 모든 이용자가 가입할 수 있다는 표현은 공식 자료로 확인되지 않아 사용하지 않는다. Kakao T 중간 종료 사례는 단일 개인 경험담을 일반 사기 사례로 일반화하지 않고 예외 대응 팁으로만 다룬다. 가짜 앱 화면·로고를 재현하지 않는다.

공식 자료:
- https://utility.kride.kakaomobility.com/
- https://apps.apple.com/kr/app/k-ride-taxi-cab-travel/id6474654222

## 보호 범위

- 승인된 게시물·이미지·예약 시각·schedule·publish-log·state branch 변경 없음.
- Missed 게시물 재발행·수동 retry·외부 게시·workflow dispatch 없음.
- 모든 제안은 별도 draft이며, 소유자 승인과 게시 직전 사실 확인 후 반영한다.

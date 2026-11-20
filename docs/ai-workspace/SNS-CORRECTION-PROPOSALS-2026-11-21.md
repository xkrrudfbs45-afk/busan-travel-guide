# SNS 교정·공백 슬롯 제안 — 2026-11-21

> 제안 전용. 승인 게시물·예약 시각·활성 schedule·이미지·publish-log·외부 계정은 변경하지 않았다. 소유자 승인 전 게시하거나 예약에 추가하지 않는다.

## P0 — 11/26 태종대

### 현재 문제

EN “Check the Danubi train”, JA 「ダヌビ列車を確認」, TW 「先確認觀光小火車」는 운행 중단된 다누비열차를 현재 이용 가능한 것처럼 보이게 한다. 카드 이미지에도 열차가 등장한다.

부산광역시관광협회 2026-07-10 공지는 다누비열차가 2026-07-03부터 긴급 안전점검 종료 시까지 중단됐고, 2026-07-04부터 무료 순환버스가 대체 운영된다고 안내한다. BTA 공지는 화~일 09:30~17:30이라고 적지만, 현재 Go2Busan의 태종대 가이드 페이지는 수~일 및 09:10 승차권 배부로 표기한다. BTO 운영 페이지를 이번 회차에 직접 재확인할 수 없어 운영일·티켓 시작 시각을 확정하지 않는다.

- BTA: https://bta.or.kr/noticeDetail?no=1637&page=1
- 현재 EN 가이드: https://go2busan.com/guides/taejongdae-danubi-train-tips/

### 안전한 제안 문구

- EN: “The Danubi Train is suspended for safety inspections. A free circular shuttle has been announced as the replacement. Check the operator’s latest notice for service days, hours and ticket availability before visiting.”
- JA: 「ダヌビ列車は安全点検のため運休中です。代替の無料循環バスについて、運行日・時間・乗車券の最新情報を訪問前に運営元のお知らせで確認してください。」
- TW: 「多努比觀光列車目前因安全檢查暫停營運。免費循環巴士為替代交通方式；出發前請先確認營運單位公告中的運行日期、時間與乘車券資訊。」

요일·운행시간·승차권 배부 시작 시각은 BTO의 현재 공지를 직접 확인하기 전 카드에 넣지 않는다. 새 이미지에는 다누비열차가 아니라 실제 운행 여부가 확인된 무료 순환버스를 삽화로 표현한다. 절벽·소나무 숲·영도등대를 배경으로 하고 광안대교·마린시티·벚꽃·일반 버스정류장은 제외한다. 새 art-set ID를 사용한다.

## P1 — 11/24 전압·플러그

한국관광공사 공식 안내는 220V·60Hz, 둥근 구멍 2개를 설명한다. EN Type C/F, JA C/SE, TW C/F 표현을 제거하고 통일한다.

- EN: Korea uses 220V at 60Hz, with two round holes in the outlet. Check your device’s voltage range and bring a suitable adapter.
- JA: 韓国の電圧は220V・60Hzで、コンセントは丸穴が2つです。機器の対応電圧を確認し、適切な変換プラグを用意しましょう。
- TW: 韓國電壓為220V、60Hz，插座是兩個圓孔。請先確認電器的電壓支援範圍，並準備合適的轉接頭。

공식 자료:
- JA: https://japanese.visitkorea.or.kr/svc/contents/infoHtmlView.do?vcontsId=140048
- TW: https://japanese.visitkorea.or.kr/svc/contents/infoHtmlView.do?vcontsId=140059

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

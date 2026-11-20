> **운영일 정정 — 2026-11-21:** 아래의 화~일 운영일·09:30~17:30·회차별 무료권 문구는 BTA 2026-07-10 공지에 근거한 과거 제안이다. 현재 Go2Busan 태종대 가이드 페이지는 수~일 및 09:10 발권으로 표기해 운영일이 서로 충돌한다. BTO 운영 페이지를 직접 재확인하기 전 아래 제안의 요일·시간·티켓 시작 시각을 게시 문안으로 사용하지 않는다. 안전한 최신 제안은 `SNS-CORRECTION-PROPOSALS-2026-11-21.md`를 따른다.

# SNS 승인 게시물 교정 제안 — 2026-11-20

> 제안 전용 문서다. 승인된 게시물, 활성 schedule, 예약 시각, 이미지 파일, publish-log, 외부 계정은 변경하지 않았다. 실제 게시물 수정과 이미지 교체는 소유자 승인 뒤 별도 작업으로 진행한다.

## 정정 기록 — 11/26 태종대 운영 정보

2026-11-19 버전은 무료 순환버스 운영일을 수~일요일로, 휴무를 월·화요일로, 승차권 배부 시작을 09:10으로 적었다. 이 세부사항은 확인 가능한 공식 공지와 일치하지 않아 이 문서에서 정정한다.

부산광역시관광협회가 2026-07-10 게시한 공지의 내용:
- 다누비열차 운행 중단: 2026-07-03부터 긴급 안전점검 종료 시까지
- 무료 순환버스 운영: 2026-07-04부터
- 운행시간: 화요일~일요일 09:30~17:30
- 다누비열차 매표소에서 회차별 무료 탑승권 발권, 선착순
- 공지에는 별도 승차권 배부 시작 시각이나 무료 순환버스의 기상 중단 조건이 적혀 있지 않다.

공식 공지: https://bta.or.kr/noticeDetail?no=1637&page=1
확인일: 2026-11-20. 이 날짜까지 확인한 공개 공지 중 후속 운행 재개 공지는 찾지 못했다. 방문 당일 운영 상태는 다시 확인해야 한다.

Visit Busan의 태종대 일반 관광 페이지에는 기존 다누비열차의 비수기 운행시간이 남아 있다. 이는 평상시 관광 안내이며, 2026-07-10 운행 중단 공지를 대체하는 현재 운행 확인 자료로 사용하지 않는다.
참고: https://www.visitbusan.net/kr/index.do?lang_cd=ko&menuCd=DOM_000000201001001000

### 현재 승인 문안과 위험

- EN 카드 2: “Check the Danubi train”
- JA 카드 2: 「ダヌビ列車を確認」
- TW 카드 2: 「先確認觀光小火車」
- 세 언어의 아트 프롬프트도 다누비열차가 운행 중인 것처럼 보이는 차량을 묘사한다.

운행 중단 공지와 맞지 않아 방문객이 열차를 탈 수 있다고 오해할 수 있다. 11/26 게시 전에 소유자 승인을 받아 문안과 아트 세트를 함께 교정해야 한다. 기존 승인 이미지 파일은 덮어쓰지 않고 새 art-set ID를 사용한다.

### 제안 EN 문안

**Card 2 — Check the current shuttle**
The Danubi Train has been suspended since July 3 for emergency safety inspections. A free circular bus has been operating since July 4.

**Card 3 — Free circular bus**
Tuesday–Sunday · 09:30–17:30

**Card 4 — Before you go**
Free tickets are issued per trip at the Danubi Train ticket office, first come, first served. Check the latest notice before visiting.

### 제안 JA 문안

**カード2 — 現在の移動手段を確認**
ダヌビ列車は緊急安全点検のため、2026年7月3日から運休しています。7月4日から無料循環バスが運行しています。

**カード3 — 無料循環バス**
火〜日曜 · 09:30〜17:30

**カード4 — 出発前に確認**
無料乗車券はダヌビ列車の券売所で各便ごとに先着順で発券されます。訪問前に最新のお知らせを確認してください。

### 제안 TW 문안

**卡片2 — 先確認目前的接駁方式**
多努比觀光列車自2026年7月3日起因緊急安全檢查暫停營運。自7月4日起有免費循環巴士替代運行。

**卡片3 — 免費循環巴士**
星期二至星期日 · 09:30–17:30

**卡片4 — 出發前確認**
每班免費乘車券在多努比列車售票處發放，採先到先得。出發前請確認最新公告。

### 이미지 방향

- 다누비열차가 아니라 실제 운행 중인 무료 순환버스 형태의 차량을 표현한다.
- 태종대 절벽, 소나무 숲, 영도등대 등 현지 단서를 유지한다.
- 광안대교, 마린시티, 무관한 버스정류장과 다른 지역 랜드마크를 섞지 않는다.
- AI 삽화 크레딧은 EN/JA/TW 각 언어로 모든 카드에 표시한다.
- 새 5장 아트 세트의 이미지 QA와 실제 카드 시각검수 후 승인 요청한다.

## P1 — 11/24 전압·플러그 정보

현재 카드 문구는 EN의 Type C/F, JA의 C타입(SE타입), TW의 C/F형으로 서로 다르다. 한국관광공사 안내는 한국 표준 전압 220V·60Hz와 둥근 구멍 2개를 설명한다. C/F 또는 C/SE 분류를 단정하지 말고 세 언어 모두 같은 사실만 사용한다.

공식 자료:
- JA: https://japanese.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=140048
- TW: https://english.visitkorea.or.kr/svc/contents/infoHtmlView.do?vcontsId=140059

제안 문안:
- EN: Korea uses 220V at 60Hz, with two round holes in the outlet. Check your device's voltage range and bring a suitable adapter.
- JA: 韓国の電圧は220V・60Hzで、コンセントは丸穴が2つです。機器の対応電圧を確認し、適切な変換プラグを用意しましょう。
- TW: 韓國電壓為220V、60Hz，插座是兩個圓孔。請先確認電器的電壓支援範圍，並準備合適的轉接頭。

## P1 — 11/25 일본어 음식 에티켓 카드 5

현재 qa.json은 가로 텍스트 넘침으로 실패한다. 제안 문구는 「辛さ控えめでお願いします」다. 새 5장 렌더, 현재 spec_hash, card_count=5, 일치하는 .hash와 JPEG 5개를 확인하기 전에는 발행하지 않는다.

## P1 — 11/28 광복로 발코니 뮤직쇼

Visit Busan 공식 일정은 2026-11-28(토) 19:00~21:00, Sunny Moon Jazz Band 19:30~20:00, Modern Sounds Jazz Big Band 20:00~20:30으로 안내한다.

공식 일정: https://www.visitbusan.net/schedule/view.do?boardId=BBS_0000009&dataSid=6437&menuCd=DOM_000000204012000000

세 언어 게시물은 draft / needs_check 상태를 유지한다. 11/27과 11/28 오전에 행사 공지와 이미지 적합성을 다시 확인한 뒤 소유자 승인 여부를 판단한다.

## 변경 경계

- 이 문서는 교정 제안만 기록한다.
- 활성 schedule, 예약 시각, 승인 캡션·이미지, publish-log, state branch, LIVE 설정을 수정하지 않는다.
- Missed 게시물 재발행, 외부 게시, workflow dispatch, 수동 retry, Production 배포를 하지 않는다.

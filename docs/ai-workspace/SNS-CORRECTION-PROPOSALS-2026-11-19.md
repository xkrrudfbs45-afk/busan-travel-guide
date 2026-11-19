# SNS 승인 게시물 교정 제안 — 2026-11-19

> 이 문서는 제안 전용이다. 활성 schedule, 승인 상태, 게시 시각, 카드 이미지, publish-log를 수정하지 않았다. 실제 반영 전 소유자 승인이 필요하다.

## P0 — 2026-11-26 Taejongdae: Danubi train suspension

### Current approved copy

- EN card 2: “Check the Danubi train”
- JA card 2: 「ダヌビ列車を確認」
- TW card 2: 「先確認觀光小火車」
- Captions say service, tickets and waits change with season/weather.

### Why it needs correction

Busan Tourism Organization's current operator notice says the Danubi Train is suspended for safety inspection and a free circular shuttle bus is operating instead. Current operator guidance: Wed–Sun 09:30–17:30; free ticket distribution 09:10–17:30; Monday and Tuesday closed; limited tickets per round; weather-related suspension possible.

Official operator notice: https://bto.or.kr/kor/CMS/Contents/Contents.do?mCode=MN030

Recheck the operator notice on 2026-11-25 and the morning of 2026-11-26. Do not reuse old Visit Busan train-hour tables as current service status.

### Proposed EN copy

**Card 2 — Check the current shuttle**
The Danubi Train is suspended for safety inspection. A free circular shuttle bus is operating instead.

**Card 3 — Shuttle hours**
Wed–Sun · 09:30–17:30
Free ticket distribution: 09:10–17:30

**Card 4 — Before you go**
Monday and Tuesday closed. Free tickets are limited per round. Bad weather can stop service.

**Caption addition**
The Danubi Train is currently suspended for safety inspection. A free circular shuttle bus is operating instead. Check the operator's latest notice before travelling; free tickets are limited and bad weather may stop service.

### Proposed JA copy

**カード2 — 現在の循環バスを確認**
ダヌビ列車は安全点検のため運休中です。現在は無料循環バスが代替運行しています。

**カード3 — 循環バスの時間**
水〜日曜 09:30〜17:30
無料乗車券の配布 09:10〜17:30

**カード4 — 出発前に確認**
月・火曜は運休。無料乗車券は各便先着順で、悪天候時は運行中止の場合があります。

### Proposed TW copy

**卡片2 — 先確認目前的接駁方式**
多努比觀光列車目前因安全檢查暫停行駛，現由免費循環巴士替代。

**卡片3 — 免費循環巴士時間**
週三至週日 09:30–17:30
免費乘車券發放 09:10–17:30

**卡片4 — 出發前確認**
週一、週二停駛。每班免費票有限，天候不佳可能停駛。

### Image direction

- Show a normal open-sided shuttle bus, not a train, tram, trolley or rail vehicle.
- Use Taejongdae's coastal cliff, pine forest and Yeongdo Lighthouse as location cues.
- Do not show Gwangandaegyo, Marine City, a generic city skyline or unrelated bus stops.
- AI illustration credit must remain visible in each language.
- Generate a new art-set ID; never overwrite the currently approved image set. Five-card render and current-spec QA required.

## P1 — 2026-11-24 electricity / adapter fact

### Current conflict

- EN: Type C/F sockets.
- JA: C type (SE type).
- TW: C/F type.

VisitKorea's official guidance states 220V, 60Hz and two round holes. It does not require these inconsistent C/F or C/SE labels.

Official source: https://english.visitkorea.or.kr/svc/contents/infoBscView.do?vcontsId=140041

### Proposed consistent copy

- EN: “Korea uses 220V at 60Hz, with two round holes in the outlet. Check your device's voltage range and bring a suitable adapter.”
- JA: 「韓国の電圧は220V・60Hzで、コンセントは丸穴が2つです。機器の対応電圧を確認し、適切な変換プラグを用意しましょう。」
- TW: 「韓國電壓為220V、60Hz，插座是兩個圓孔。請先確認電器的電壓支援範圍，並準備合適的轉接頭。」

## P1 — 2026-11-25 Japanese food-etiquette card 5

Current QA: `qa.ok=false`, `body text overflows horizontally`.

Proposed shorter copy: 「辛さ控えめでお願いします」

Keep the post blocked until a new five-card render has `qa.ok=true`, current spec hash, current render hash and exactly five JPEGs.

## P1 — 2026-11-28 Gwangbok-ro Balcony Music Show

Official Visit Busan listing: Sat 2026-11-28, 19:00–21:00; Sunny Moon Jazz Band 19:30–20:00; Modern Sounds Jazz Big Band 20:00–20:30.

https://www.visitbusan.net/schedule/view.do?boardId=BBS_0000010&dataSid=6438&menuCd=DOM_000000304010000000

Keep all three market posts in draft / needs_check until a fresh check on Nov 27 and the morning of Nov 28. The current main schedule still points to the old `ig-fresh15-1128-gwangbokro` art set. A previous proposal branch with a new downtown-balcony prompt is 253 commits behind main and is not the active version. Generate a new set, visually check all five cards, then seek approval. Do not activate or schedule it from this proposal.

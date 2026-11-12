# Go2Busan SNS 콘텐츠 점검 — 2026-11-13

점검 기준 시각: 2026-11-13 08:06 KST  
저장소: `xkrrudfbs45-afk/busan-travel-guide`  
범위: 2026-11-13~2026-11-27, Instagram·Threads, EN/JA/zh-TW

## 1. 핵심 판정

- Threads는 활성 30일 스케줄 기준 향후 15일 게시물 90개가 준비돼 있다. 언어별 30개, 하루 6개이며 현지 시간·국가별 URL·UTM 검증에 이상이 없다.
- Instagram은 PR #389 브랜치에 42개가 승인 상태로 제안돼 있지만, 11월 13~26일 14일분이다. 11월 27일 게시물 3개가 빠져 있다. PR #389는 미병합 상태이므로 이 42개는 아직 main 스케줄에 반영되지 않았다.
- 이미지 QA는 42개 카드 세트 중 41개 통과, 1개 실패다. 11월 25일 일본어 카드 5의 본문 가로 넘침이 확인됐다.
- 대만 번체 태종대 카드 이미지는 태종대와 다른 광안대교·마린시티 풍경이 반복돼 장소 적합성이 낮다. 승인된 게시물의 이미지는 변경하지 않았다.
- Threads의 별도 15일 초안 파일은 활성 스케줄과 90개 중 75개 문안이 정확히 중복된다. 전부 draft 상태이고 게시 워크플로가 읽지 않으므로 활성화하면 안 된다.

## 2. Instagram

### 스케줄·발행 상태

- PR #389 브랜치: `ig-fresh15` 42개가 verified/approved 상태. EN 14개, JA 14개, zh-TW 14개.
- 날짜: 11월 13~26일, 하루 언어별 1개. 각 시장 현지 정오(12:00)에 맞춰 UTC 변환이 일치한다.
- 11월 27일 게시물은 없다. 현재 15일 기준으로 3개(EN/JA/zh-TW) 부족하다.
- 42개 모두 언어별 사이트 경로와 Instagram UTM이 설정돼 있고, 링크 대상 페이지도 main 브랜치에서 확인됐다.
- 카드 5장씩 총 210개 이미지 파일이 모두 존재한다.
- main의 현재 스케줄은 63 draft·6 approved다. 42개 승인 변경은 PR #389에만 있고 아직 main에 병합되지 않았다.
- 11월 12일분 3개는 지난 날짜의 draft로 남아 있다. 재발행하지 않는다.
- 별도 영어 초안 `ig-us-2026-11-13-eomuk`은 2장 카드, `needs_check`, guide_url/bio_link_url 누락 상태다. 일본어·번체 대응물도 없어 게시 후보에서 제외한다.

### 카드·이미지 QA

- 자동 QA: 42개 세트 중 41개 `ok=true`, 1개 실패.
- 실패: `cards/ig-fresh15-1125-jp/qa.json` — 11월 25일 일본어 카드 5의 `.body text overflows horizontally`.
- PR #389의 카드 템플릿 v2는 일본어 `word-break:auto-phrase`와 버전 기반 재렌더링을 추가한다. 다만 현재 상태 브랜치에 저장된 QA 결과는 여전히 실패다. 새 템플릿으로 실제 재렌더링한 뒤 QA 통과를 확인하기 전까지 카드 게시 준비 완료로 간주하지 않는다.
- 수동 표본 검수:
  - 11월 20일 번체 남포동 세트: 4:5 크롭과 글자 가독성은 양호하고 AI 삽화 표기도 있다. 다만 일부 카드의 철도·현대식 해안·대형 교량 이미지가 남포동의 자갈치시장·BIFF광장·구도심을 특정하지 못한다. 남포동 카드에는 자갈치시장, BIFF광장, 국제시장·광복로, 용두산공원 등 실제 지역 맥락을 더 분명히 반영할 필요가 있다.
  - 11월 26일 번체 태종대 세트: 카드 2~5에 광안대교·마린시티형 고층 해안 풍경이 반복된다. 태종대의 해안 절벽·소나무 숲·영도등대·다누비열차와 일치하지 않는다. 태종대 전용 삽화로 다시 제안하되, 기존 승인 이미지 교체는 별도 사용자 승인 전까지 보류한다.
- 표본 이미지 모두 AI 삽화 표시가 있어 실제 장소 사진으로 오인될 가능성은 낮다. 다만 AI 표기만으로 장소 불일치가 해소되지는 않는다.

### 사실·랜딩페이지

- `source-register.json`의 전체 `checked_on`은 2026-11-04다. 개별 게시물 검증 메모는 2026-11-13으로 갱신됐지만 출처 레지스터 날짜는 그대로다. 변동 가능한 정보의 공식 출처 확인일을 별도로 갱신해야 한다.
- 광안리 드론쇼: 공식 안내는 매월 1·3주 토요일 드론×레이저쇼, 2·4주 토요일 드론쇼로 구분하고, 동절기 공연 시각을 19:00·21:00으로 안내한다. 2026년 11월 프로그램은 11월 14일·21일·28일로 공지돼 있다. 현재 게시물은 토요일 정기 행사·계절별 시간·기상 취소 가능성만 언급해 오정보는 아니지만, 다음 콘텐츠에서는 공연 형식이 주차별로 다르다는 점을 반영할 수 있다.
- 태종대 번체 랜딩페이지 `zh-tw/guides/taejongdae/`에는 성인 다누비열차 순환권이 ₩4,000이라고 적혀 있다. 반면 Visit Busan의 태종대·다누비열차 안내 페이지는 성인 요금을 ₩3,000으로 표기한다. 다른 공식 안내 페이지는 공원 동절기 운영과 다누비열차 비수기 운영시간·월요일 휴무를 안내하지만 요금은 제시하지 않는다. 요금 근거가 일치하지 않으므로 운영기관 확인 전까지 정확한 금액 표기를 보류하는 편이 안전하다. Instagram 문안 자체에는 금액이 없다.

공식 확인 자료:
- 광안리 드론쇼 운영 방식·동절기 시간: https://www.gwangallimdrone.co.kr/en/overview
- Visit Busan 2026년 11월 공연 일정: https://www.visitbusan.net/schedule/view.do?boardId=BBS_0000010&dataSid=6450&menuCd=DOM_000000304010000000
- 부산시 2026년 9월 드론×레이저쇼 정례화 안내: https://www.busan.go.kr/eng/bsnews01/1755606
- Visit Busan 태종대·다누비열차 요금 및 운영정보(성인 ₩3,000 표기): https://www.visitbusan.net/index.do?lang_cd=en&menuCd=DOM_000000201001001000&uc_seq=802
- Visit Busan 태종대 공원·다누비열차 계절 운영정보: https://www.visitbusan.net/kr/index.do?menuCd=DOM_000000201001001000&uc_seq=258

## 3. Threads

### 활성 스케줄·현지화

- 활성 입력 파일은 `content/social/threads-30day/schedule.json`이다. 게시 워크플로도 이 파일을 읽는다.
- 향후 15일(11월 13~27일): 90개, JA 30·EN 30·zh-TW 30, 하루 6개.
- 90개 모두 approved/evergreen이며, 현지 날짜·시각과 `publish_at_utc`의 시간대 변환이 일치한다.
- 78개는 언어별 사이트 경로와 `utm_source=threads`, `utm_medium=social`, campaign/content 태그가 포함된 링크 답글을 갖는다. 78개 대상 페이지는 모두 main에 존재한다.
- 12개는 질문·여행 예절·참여 유도 중심의 무링크 게시물이다(JA 4, EN 3, zh-TW 5). 의도적인 참여형 문안으로 분류하며, 이미 approved이므로 사용자 승인 없이 링크를 추가하지 않는다.
- 활성 90개 안에서 같은 언어의 정확한 문안 중복은 발견되지 않았다. 번체 문안의 간체 전용 문자 검사도 0건이다.

### 발행 로그

- 실제 published 31개: JP 12, TW 10, EN 9. 31개 모두 permalink가 있고 답글 오류는 없다.
- missed 20개: 모두 attempts=0, 게시물 URL 없음, API 발행 실패가 아니다. 예약 시각보다 약 9.8~73.9시간 늦게 처리돼 게시 워크플로의 3시간 지연 허용 구간을 넘긴 게시물로 기록됐다. 자동 재발행이나 백로그 일괄 발행은 하지 않는다.
- failed 0개.
- 최신 Threads publisher run #43322776985는 성공했지만 22:45 UTC 실행으로 다음 23:07 UTC 슬롯 전이었다. 점검 시점에는 새 슬롯의 발행 로그가 아직 추가되지 않았다.

### 별도 15일 초안 파일

- `content/social/threads-15day/nov12-26-drafts.json`: 90개 전부 draft.
- 활성 30일 스케줄의 향후 게시물과 같은 언어 기준 정확히 75개 문안이 중복된다.
- 게시 워크플로 입력이 아니므로 현재 외부 발행 위험은 없다. 활성 스케줄로 교체·병합하지 말고, 중복 제거 전까지 draft 격리를 유지한다.

## 4. 발행·CI·배포 구분

- Instagram publish-log: 6 published, 0 missed, 0 failed. 6개 모두 permalink 존재.
- Threads publish-log: 31 published, 20 missed, 0 failed. 31개 모두 permalink 존재.
- Instagram publisher run #43312419925 성공. 해당 실행 로그의 `INSTAGRAM_LIVE=true`는 그 실행 시점의 스냅샷일 뿐이다. 새 게시물은 published 로그에 추가되지 않았다. 74개 이미지 생성, 이미지 1개 생성 실패(지난 11월 12일 초안 세트), 레이아웃 QA 1개 실패가 기록됐다.
- Threads publisher run #43322776985 성공. `THREADS_LIVE` 역시 해당 실행 로그의 스냅샷으로만 취급한다. 실제 발행 여부는 상태 브랜치 로그로 판정한다.
- PR #389: https://github.com/xkrrudfbs45-afk/busan-travel-guide/pull/389 — open, not merged. Instagram content tests와 technical SEO audit CI는 통과했다. PR 미병합이므로 42개 게시물은 main에 반영되지 않았고, 이 PR 자체의 production deploy도 없다.
- main의 최근 Deploy to Render run #43312434585는 성공했다. 이는 main의 기존 변경 배포이며 PR #389 배포를 뜻하지 않는다.

로그·스케줄:
- Instagram publish-log: https://github.com/xkrrudfbs45-afk/busan-travel-guide/blob/instagram-state/publish-log.json
- Threads publish-log: https://github.com/xkrrudfbs45-afk/busan-travel-guide/blob/threads-state/publish-log.json
- Threads 활성 스케줄: https://github.com/xkrrudfbs45-afk/busan-travel-guide/blob/main/content/social/threads-30day/schedule.json
- Threads 별도 초안: https://github.com/xkrrudfbs45-afk/busan-travel-guide/blob/main/content/social/threads-15day/nov12-26-drafts.json
- Instagram PR #389 스케줄: https://github.com/xkrrudfbs45-afk/busan-travel-guide/blob/xkrrudfbs45-afk-patch-65/content/social/instagram/schedule.json

## 5. 권고 작업

1. PR #389 병합 전 일본어 11월 25일 카드 5를 새 템플릿으로 재렌더링하고, 상태 브랜치 QA 파일까지 통과한 것을 확인한다.
2. 태종대·남포동의 번체 카드 이미지는 새 삽화 시안으로 별도 제안한다. 기존 승인 이미지와 예약 일정은 사용자 승인 전 변경하지 않는다.
3. Instagram 11월 27일분 EN/JA/zh-TW 초안 3개를 별도로 작성해 15일 커버리지를 완성한다. 아직 작성·예약하지 않았다.
4. 태종대 번체 랜딩페이지의 ₩4,000 표기는 운영기관 확인 전까지 보류하거나 근거를 갱신한다.
5. Threads 15일 초안 파일은 활성 스케줄과 75개 중복이 있으므로 격리 상태를 유지한다. 다음 스케줄 교체 전 두 파일 간 중복 검증을 CI에 추가한다.

## 6. 이번 점검에서 하지 않은 작업

- 승인된 Instagram/Threads 게시물의 문안·이미지·예약 시각을 수정하지 않았다.
- SNS 외부 계정에 게시하거나 예약 게시를 새로 만들지 않았다.
- publish-log의 missed 항목을 재시도·재발행하지 않았다.
- main 병합이나 production 배포를 실행하지 않았다.

이 문서는 점검 기록과 수정 제안만 담는다. 콘텐츠·이미지·스케줄 변경은 별도 사용자 승인 후 진행한다.

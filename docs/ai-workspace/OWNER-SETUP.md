# 소유자 직접 작업 가이드 (2가지)

Go2Busan 자동화에서 **소유자만 할 수 있는 작업은 아래 두 가지**다. 나머지는 Claude·ChatGPT·GitHub Actions가 처리한다.

> 보안 원칙: 키·토큰 값은 **GitHub 설정 화면의 입력칸에만** 붙여 넣는다. 채팅, 이슈, PR, 커밋, 스크린샷에 절대 올리지 않는다. Claude에게도 값을 보내지 말고 "등록했다"고만 알려준다.

---

## 작업 1. Search Console·GA4 데이터 연결 (약 15분, PC 권장)

결과: 4시간 점검 보고서(#375)에 국가별 노출·클릭·CTR·순위, 국가별 사용자·세션, `affiliate_click`·`affiliate_cta_view`가 자동 기록된다.

### 1-1. Google Cloud에서 서비스 계정 만들기
1. https://console.cloud.google.com 접속 → 상단 프로젝트 선택 → **새 프로젝트** → 이름 `go2busan-analytics` → 만들기.
2. 왼쪽 메뉴 **API 및 서비스 → 라이브러리**에서 아래 2개를 검색해 각각 **사용 설정**:
   - `Google Search Console API`
   - `Google Analytics Data API`
3. **IAM 및 관리자 → 서비스 계정 → 서비스 계정 만들기**
   - 이름: `go2busan-reader` → 만들고 계속하기 → 역할은 **비워 둔 채** 계속 → 완료.
   - 목록에 생긴 이메일(`go2busan-reader@…iam.gserviceaccount.com`)을 **복사해 둔다**. (이건 비밀값이 아님)
4. 그 서비스 계정 클릭 → **키** 탭 → **키 추가 → 새 키 만들기 → JSON** → 만들기. JSON 파일이 PC에 내려받아진다. **이 파일이 비밀키다.**

### 1-2. Search Console에 읽기 권한 주기
1. https://search.google.com/search-console → 속성 `go2busan.com` 선택.
2. **설정 → 사용자 및 권한 → 사용자 추가**
3. 이메일: 1-1에서 복사한 서비스 계정 이메일 / 권한: **제한됨** → 추가.

### 1-3. GA4에 읽기 권한 주기
1. https://analytics.google.com → 왼쪽 아래 **관리(톱니바퀴)**.
2. 속성 열에서 **속성 액세스 관리 → + → 사용자 추가**
3. 이메일: 서비스 계정 이메일 / 역할: **뷰어** → 추가. (이메일 알림 체크 해제)
4. 같은 관리 화면 **속성 세부정보**에서 **속성 ID**(숫자 9~10자리)를 확인한다. (비밀값 아님)

### 1-4. GitHub에 등록
1. https://github.com/xkrrudfbs45-afk/busan-travel-guide/settings/secrets/actions
2. **Secrets** 탭 → **New repository secret**
   - Name: `GSC_SERVICE_ACCOUNT_JSON`
   - Secret: 내려받은 JSON 파일을 메모장으로 열어 **전체 내용**을 붙여 넣기 → Add secret.
3. **Variables** 탭 → **New repository variable**
   - Name: `GA4_PROPERTY_ID` / Value: 1-3의 속성 ID 숫자 → Add variable.
4. (선택) Search Console 속성이 도메인 속성이 아니라 URL 접두어 속성이면 Variable `GSC_PROPERTY` = `https://go2busan.com/` 추가. 도메인 속성이면 생략.
5. 등록 후 PC에 받은 JSON 파일은 삭제하거나 안전한 곳에 보관.

### 확인 방법
Claude에게 "GSC 등록했어"라고만 말하면 Claude가 수동 실행으로 검증한다. 또는 Actions → **Growth ops (4-hourly scan)** → Run workflow → 결과의 `Search Console`·`GA4` 항목이 "No access" 대신 숫자로 나오면 성공.

---

## 작업 2. Threads 토큰 자동 갱신 켜기 (1회, 약 5분)

지금은 Threads 토큰을 **검사만 하고 교체하지 않는다**(`GH_SECRETS_PAT` 없음). 장기 토큰은 발급 후 **60일**이면 만료되고, 만료되면 Threads 자동 게시가 멈춘다. 아래를 한 번 해 두면 매주 월요일(03:17 UTC) 워크플로가 토큰을 새로 받아 **자동으로 교체**하므로, 이후 직접 갱신할 필요가 없다.

1. https://github.com/settings/personal-access-tokens/new (Fine-grained token)
2. Token name: `go2busan-secrets-writer` / Expiration: **1년** (최대치 선택)
3. Repository access: **Only select repositories** → `busan-travel-guide`
4. Permissions → Repository permissions → **Secrets: Read and write** (다른 권한은 건드리지 않음)
5. Generate token → 화면에 한 번만 보이는 값을 복사.
6. https://github.com/xkrrudfbs45-afk/busan-travel-guide/settings/secrets/actions → New repository secret
   - Name: `GH_SECRETS_PAT` / Secret: 방금 복사한 값 → Add secret.
7. 확인: Actions → **Threads token refresh** → Run workflow. 로그에 `Updated THREADS_JP_ACCESS_TOKEN`, `Updated THREADS_US_ACCESS_TOKEN`이 보이면 성공. (토큰 값은 로그에 나오지 않음)

### 이미 토큰이 만료됐다면
자동 갱신은 **살아 있는 토큰만** 연장할 수 있다. Threads 게시 실패 로그에 토큰 오류가 뜨면 Meta 개발자 화면에서 새 장기 토큰을 발급해 `THREADS_JP_ACCESS_TOKEN` / `THREADS_US_ACCESS_TOKEN` / `THREADS_TW_ACCESS_TOKEN` Secret을 **Update**로 교체한 뒤 위 7번을 실행한다.

---

## Claude가 하지 않는 일
키·토큰 생성과 입력, 병합, 운영 배포, SNS 실제 게시·예약 변경, 결제·광고는 소유자 승인 없이 하지 않는다.

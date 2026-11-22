# Go2Busan 이미지·SEO 운영 감사 — 2026-11-22

- 기준 main SHA: `2fda035673815077525d366c136e1174097f8427`
- 기준 빌드: [Technical SEO audit #44907580976](https://github.com/xkrrudfbs45-afk/busan-travel-guide/actions/runs/44907580976)
- 실제 운영 배포: [Render deploy #44907613711](https://github.com/xkrrudfbs45-afk/busan-travel-guide/actions/runs/44907613711), live SHA가 main과 일치한다고 배포 job이 확인
- 검사 범위: 정적 빌드 산출물의 SEO·이미지 메타데이터·이미지 크레딧 감사 로그
- 보호: 이 PR은 감사 문서만 추가한다. HTML, 이미지, 활성 SNS 예약·로그, 배포 설정, 외부 게시, 토큰·시크릿은 변경하지 않는다.

## 1. 핵심 결과

| 항목 | 결과 | 심각도 |
|---|---:|---|
| OG/Twitter 이미지 태그 누락 | 83개 페이지 (EN 30 · JA 24 · zh-TW 29) | P1 |
| 일반 이미지 alt 누락 경고 | 0건 | 정적 감사 기준 |
| 정적 이미지 감사에서 명시된 HTTP 이미지 실패 | 0건 | 정적 감사 범위 |
| 이미지 크레딧 | 53개 사용 / 61개 등록 / 미사용 등록 경고 8 / 오류 0 | 확인 |
| 주제별 이미지 재사용 알림 | 43건 | P2 검토 |
| `enhance-images --check` | cover 33개 통과 | 소스 검사 |
| Sitemap | 263개 URL 중 배포 smoke test 263개 200 | 확인 |
| Canonical / sitemap | `/guides/solo-dining-busan/` 1개 누락, 관련 JA·zh-TW hreflang 대상도 sitemap에 없음 | P1 |
| Breadcrumb schema | 1001번 버스 대안 가이드 EN/JA/zh-TW 3개 누락 | P2 |
| 제목 길이 | title-may-truncate 12건 | P2 |

## 2. OG/Twitter 이미지 태그 누락 — 영향 URL

정적 SEO 감사에서 `og:image` 또는 `twitter:image`가 누락된 페이지 목록이다. 누락 문구는 둘 중 하나 이상이 없다는 뜻이며, 두 태그 모두 누락됐다고 단정하지 않는다.

### EN (30)
- `https://go2busan.com/about.html`
- `https://go2busan.com/disclosure.html`
- `https://go2busan.com/guides/beomeosa-food-guide/index.html`
- `https://go2busan.com/guides/beomil-dong-nakgopsae/index.html`
- `https://go2busan.com/guides/busan-autumn-foliage/index.html`
- `https://go2busan.com/guides/busan-dongnae-pajeon-history/index.html`
- `https://go2busan.com/guides/busan-dwaeji-gukbap-history/index.html`
- `https://go2busan.com/guides/busan-eomuk-history/index.html`
- `https://go2busan.com/guides/busan-fireworks-festival-fair-price-stays/index.html`
- `https://go2busan.com/guides/busan-food-stories/index.html`
- `https://go2busan.com/guides/busan-jaecheopguk-history/index.html`
- `https://go2busan.com/guides/busan-milmyeon-history/index.html`
- `https://go2busan.com/guides/busan-night-views-local-tips/index.html`
- `https://go2busan.com/guides/busan-souvenirs/index.html`
- `https://go2busan.com/guides/busan-suyuk-baekban-guide/index.html`
- `https://go2busan.com/guides/busan-taxi-vs-subway-motion-sickness/index.html`
- `https://go2busan.com/guides/catchtable-global-busan-guide/index.html`
- `https://go2busan.com/guides/day-trips-from-busan-gyeongju-ulsan-tongyeong/index.html`
- `https://go2busan.com/guides/geumjeongsanseong-makgeolli/index.html`
- `https://go2busan.com/guides/geumjeongsanseong-village-food/index.html`
- `https://go2busan.com/guides/gijang-kkeutjip-abalone-porridge/index.html`
- `https://go2busan.com/guides/gwangalli-parking-guide/index.html`
- `https://go2busan.com/guides/homigot-sunrise-festival-2027/index.html`
- `https://go2busan.com/guides/jeonpo-cafe-street/index.html`
- `https://go2busan.com/guides/ochoryang-historic-house/index.html`
- `https://go2busan.com/guides/seoul-to-busan-transport-comparison/index.html`
- `https://go2busan.com/guides/yeongdo-half-day-coastal-route/index.html`
- `https://go2busan.com/guides/yeongdo-one-day/index.html`
- `https://go2busan.com/offline.html`
- `https://go2busan.com/privacy.html`

### JA (24)
- `https://go2busan.com/ja/about.html`
- `https://go2busan.com/ja/disclosure.html`
- `https://go2busan.com/ja/guides/beomeosa-food-guide/index.html`
- `https://go2busan.com/ja/guides/beomil-dong-nakgopsae/index.html`
- `https://go2busan.com/ja/guides/busan-coffee-guide/index.html`
- `https://go2busan.com/ja/guides/busan-dongnae-pajeon-history/index.html`
- `https://go2busan.com/ja/guides/busan-dwaeji-gukbap-history/index.html`
- `https://go2busan.com/ja/guides/busan-eomuk-history/index.html`
- `https://go2busan.com/ja/guides/busan-food-stories/index.html`
- `https://go2busan.com/ja/guides/busan-jaecheopguk-history/index.html`
- `https://go2busan.com/ja/guides/busan-milmyeon-history/index.html`
- `https://go2busan.com/ja/guides/busan-shopping-souvenirs/index.html`
- `https://go2busan.com/ja/guides/busan-suyuk-baekban-guide/index.html`
- `https://go2busan.com/ja/guides/catchtable-global-busan-guide/index.html`
- `https://go2busan.com/ja/guides/food-etiquette/index.html`
- `https://go2busan.com/ja/guides/geumjeongsanseong-makgeolli/index.html`
- `https://go2busan.com/ja/guides/geumjeongsanseong-village-food/index.html`
- `https://go2busan.com/ja/guides/gwangalli-parking-guide/index.html`
- `https://go2busan.com/ja/guides/ochoryang/index.html`
- `https://go2busan.com/ja/guides/travel-mistakes/index.html`
- `https://go2busan.com/ja/guides/where-to-stay-busan/index.html`
- `https://go2busan.com/ja/guides/where-to-stay-songjeong-gijang/index.html`
- `https://go2busan.com/ja/guides/yeongdo-half-day/index.html`
- `https://go2busan.com/ja/privacy.html`

### zh-TW (29)
- `https://go2busan.com/zh-tw/about.html`
- `https://go2busan.com/zh-tw/disclosure.html`
- `https://go2busan.com/zh-tw/guides/beomeosa-food-guide/index.html`
- `https://go2busan.com/zh-tw/guides/beomil-dong-nakgopsae/index.html`
- `https://go2busan.com/zh-tw/guides/bukangi-busan-north-port-shark/index.html`
- `https://go2busan.com/zh-tw/guides/busan-autumn-foliage/index.html`
- `https://go2busan.com/zh-tw/guides/busan-dongnae-pajeon-history/index.html`
- `https://go2busan.com/zh-tw/guides/busan-family-travel/index.html`
- `https://go2busan.com/zh-tw/guides/busan-food-stories/index.html`
- `https://go2busan.com/zh-tw/guides/busan-jaecheopguk-history/index.html`
- `https://go2busan.com/zh-tw/guides/busan-local-culture/index.html`
- `https://go2busan.com/zh-tw/guides/busan-local-traits-culture/index.html`
- `https://go2busan.com/zh-tw/guides/busan-shopping-souvenirs/index.html`
- `https://go2busan.com/zh-tw/guides/busan-souvenirs/index.html`
- `https://go2busan.com/zh-tw/guides/busan-street-dialect-guide/index.html`
- `https://go2busan.com/zh-tw/guides/busan-suyuk-baekban-guide/index.html`
- `https://go2busan.com/zh-tw/guides/catchtable-global-busan-guide/index.html`
- `https://go2busan.com/zh-tw/guides/food-etiquette/index.html`
- `https://go2busan.com/zh-tw/guides/geumjeongsanseong-makgeolli/index.html`
- `https://go2busan.com/zh-tw/guides/geumjeongsanseong-village-food/index.html`
- `https://go2busan.com/zh-tw/guides/gwangalli-parking-guide/index.html`
- `https://go2busan.com/zh-tw/guides/jeonpo-cafe-street/index.html`
- `https://go2busan.com/zh-tw/guides/ochoryang/index.html`
- `https://go2busan.com/zh-tw/guides/travel-mistakes/index.html`
- `https://go2busan.com/zh-tw/guides/where-to-stay-busan/index.html`
- `https://go2busan.com/zh-tw/guides/where-to-stay-songjeong-gijang/index.html`
- `https://go2busan.com/zh-tw/guides/yeongdo-half-day/index.html`
- `https://go2busan.com/zh-tw/guides/yeongdo-one-day/index.html`
- `https://go2busan.com/zh-tw/privacy.html`

### 권고
1. 각 페이지의 실제 대표 이미지 또는 권리 확인된 페이지별 일러스트를 우선 사용한다.
2. 이미지가 없는 페이지는 해당 페이지의 주제를 정확히 설명하는 원본 일러스트를 만들고 alt/caption에서 삽화임을 분명히 한다.
3. 전체 페이지에 로고나 동일한 광안대교 사진을 일괄 fallback으로 넣지 않는다.
4. `og:image:alt` 및 Twitter image alt 지원 여부도 함께 확인한다.
5. EN/JA/zh-TW의 메타데이터가 해당 언어 페이지의 주제와 일치하는지 확인한다.

## 3. 이미지 크레딧·재사용

- Strict image-credit audit: 53 images in use / 61 registered / 8 unused-entry warnings / 0 errors.
- 43건의 이미지 재사용 안내가 발생했다. 일부는 언어별 동일 페이지의 공통 이미지처럼 합리적일 수 있으므로 일괄 교체하지 않는다.
- 사이트 공통 로고의 광범위한 재사용은 본문 대표 이미지·OG 이미지 재사용과 구분해 평가한다.
- City Tour Bus 이슈 #591은 아직 open이지만, 대체 사진을 복원한 [PR #592](https://github.com/xkrrudfbs45-afk/busan-travel-guide/pull/592)는 이미 merge됐다. 현재 빌드 로그는 Wikimedia Commons의 archival bus photo를 3개 언어 페이지에서 사용한다고 기록한다. #591의 종료 여부와 visible attribution을 재확인해 추적 상태를 맞춘다.
- [Spa Land 대표 이미지](https://github.com/xkrrudfbs45-afk/busan-travel-guide/blob/main/guides/busan-spa-land-guide/index.html)는 `<img src="https://commons.wikimedia.org/wiki/Special:FilePath/Shinsegye_Dept_store_Centum_city.JPG?width=1600" width="1200" height="900" loading="lazy">`로 현재 main에 있다. 이미지 주제와 alt는 Spa Land가 있는 신세계 센텀시티 외관으로 일치한다. 본문 hero 텍스트 다음에 위치해 실제 LCP 후보인지는 브라우저 측정 전 단정하지 않는다. 360/390px 모바일과 데스크톱에서 LCP를 측정하고, LCP 후보로 확인되면 `loading="eager"` 및 적절한 `fetchpriority="high"` 적용을 검토한다. 이후 본문 이미지는 lazy loading을 유지한다. 기존 추적: [issue #598](https://github.com/xkrrudfbs45-afk/busan-travel-guide/issues/598).
- 기존 다국어 이미지 재감사 추적: [issue #384](https://github.com/xkrrudfbs45-afk/busan-travel-guide/issues/384).

## 4. 추가 SEO 정합성

- EN solo-dining canonical URL `https://go2busan.com/guides/solo-dining-busan/`가 sitemap에서 누락됐다.
- JA·zh-TW 페이지에서 위 EN canonical을 hreflang 대상으로 가리키지만 해당 URL이 sitemap에 없어 경고가 발생한다.
- 1001번 버스 혼잡 대안 가이드의 EN/JA/zh-TW 3개 페이지에 breadcrumb schema가 없다.
- 제목 길이 경고 12건은 별도 SEO 작업으로 분리한다. 이미지 PR에서 제목·본문을 임의 수정하지 않는다.

## 5. 검증 범위와 한계

- 현재 Technical SEO job은 정적 HTML 검사와 이미지 크레딧 등록부 검사를 통과했다.
- 이 로그에서 일반 이미지 alt 누락 및 HTTP 이미지 실패는 보고되지 않았다. 이는 모든 외부 이미지가 실제 브라우저·소셜 크롤러에서 다운로드된다는 보증이 아니다.
- 이번 실행에서 실제 모바일 브라우저의 360/390/1280px 크롭, 이미지 bytes, LCP 후보·lazy/eager 적용, CLS는 측정하지 않았다.
- 실제 모바일 크롭과 LCP 우선순위는 브라우저 QA 및 Lighthouse/현장 측정 후에만 PASS로 판정한다.
- 라이선스 등록부 통과는 사진의 실제 피사체가 페이지와 일치한다는 증거를 대신하지 않는다.

## 6. 안전한 후속 순서

1. 83개 OG/Twitter 누락을 언어별로 분류하고 상위 유입·공유 가능 페이지부터 보완한다.
2. OG 이미지별 실제 장소·메뉴 일치, 출처·상업적 이용 권리, visible credit, alt를 검수한다.
3. 360/390/1280px crop 및 social preview를 확인한다.
4. LCP 후보에만 적절한 eager/high-priority 설정을 적용하고 나머지 콘텐츠 이미지는 lazy loading을 유지한다.
5. solo-dining sitemap/hreflang과 1001번 breadcrumb 문제는 별도 SEO PR로 처리한다.

운영 배포·main 병합·SNS 게시 변경은 별도 승인 전 금지한다.

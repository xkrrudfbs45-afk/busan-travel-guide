# Generates guides/busan-map/index.html. Run from the repo root: python3 scripts/generate-busan-map.py
import json, html, os, urllib.parse, subprocess, sys
B = 'https://go2busan.com'
e = lambda s: html.escape(s, quote=True)
OG = 'https://commons.wikimedia.org/wiki/Special:FilePath/Busanhang_Bridge_taken_from_Yeongdo.jpg?width=1600'

AREAS = [
 ('haeundae', 'Haeundae'),
 ('seomyeon', 'Seomyeon'),
 ('nampo', 'Nampo & Jung-gu'),
 ('dongnae', 'Dongnae & Oncheonjang'),
 ('beomil', 'Beomil-dong'),
 ('pnu', 'Pusan National University'),
 ('west', 'Gamcheon, Songdo & Saha'),
 ('yeongdo', 'Yeongdo'),
]
CATS = [('food', 'Restaurants'), ('market', 'Markets'), ('cafe', 'Cafés'), ('sight', 'Sights'), ('spa', 'Hot springs')]

# q = the exact Google Maps search query already used in the linked guide.
# local=True only where the guide itself labels it a local recommendation.
P = [
 # Haeundae
 ('Haeundae Beach', '해운대해수욕장', 'haeundae', 'sight', 'Busan’s best-known beach and the base for an east-coast day.', '/guides/busan-three-days/#day-two', 'Haeundae Beach Busan', False),
 ('Haeundae Market', '해운대시장', 'haeundae', 'market', 'Casual market bites a short walk from the beach.', '/guides/haeundae-food-guide/#market', 'Haeundae Traditional Market Busan', False),
 ('Haeundae Food Stall Town', '해운대 포장마차촌', 'haeundae', 'food', 'Seafood by the shore in the evening. Check the menu and total price first.', '/guides/haeundae-food-guide/#seafood', 'Haeundae Food Stall Town Busan', False),
 ('Haeridan-gil', '해리단길', 'haeundae', 'cafe', 'Cafés and independent restaurants behind Haeundae Station.', '/guides/haeundae-food-guide/#haeridan', 'Haeridan-gil Busan', False),
 ('Palpal Yangdaechang', '팔팔양대창', 'haeundae', 'food', 'Grilled beef offal for a Korean barbecue dinner.', '/guides/haeundae-food-guide/#bbq', '팔팔양대창 해운대본점', False),
 ('Geumsubokguk', '금수복국', 'haeundae', 'food', 'A long-running Haeundae specialist for bokguk (Korean pufferfish soup).', '/guides/haeundae-food-guide/#bokguk', '금수복국 부산 해운대구 중동1로43번길 23', False),
 # Seomyeon
 ('Seomyeon food streets', '서면', 'seomyeon', 'food', 'A central base for pork soup and casual meals.', '/guides/busan-neighborhood-food-guide/#seomyeon', 'Seomyeon Busan', False),
 # Nampo
 ('Nampo-dong & BIFF Square', '남포동·BIFF광장', 'nampo', 'market', 'Street snacks such as ssiat hotteok while you browse.', '/guides/busan-neighborhood-food-guide/#nampo', 'Nampo-dong BIFF Square Busan', False),
 ('Jagalchi Market', '자갈치시장', 'nampo', 'market', 'Busan’s seafood market. Confirm weight, price and cooking fees before you order.', '/guides/jagalchi-market-no-surprise-bill/', 'Jagalchi Market Busan', False),
 ('Bupyeong Kkangtong Market', '부평깡통시장', 'nampo', 'market', 'Market lanes and a night market for local food.', '/guides/kkangtong-market-food-guide/', 'Bupyeong Kkangtong Market Busan', False),
 ('Kkang Dwaehu', '깡돼후', 'nampo', 'food', 'Busan-style fried pork galbi near Kkangtong Market.', '/guides/kkangtong-market-food-guide/#kkangdwaehu', '깡돼후 부산', False),
 ('Kkangtong Golmok Halmae Yubu Jeongol', '깡통골목할매유부전골', 'nampo', 'food', 'A warm bowl of yubu-jeongol (fried tofu pockets in broth).', '/guides/kkangtong-market-food-guide/#market-favorites', '깡통골목할매유부전골', False),
 ('Nampo Jjukkumi', '남포쭈꾸미', 'nampo', 'food', 'Seasoned small octopus with moderate, not overwhelming, heat.', '/guides/kkangtong-market-food-guide/#market-favorites', '남포쭈꾸미 부산', True),
 # Dongnae
 ('Hurshimchung', '허심청', 'dongnae', 'spa', 'A large traditional hot-spring bathing facility in Oncheonjang.', '/guides/dongnae-hot-spring-half-day/#hurshimchung', 'Hurshimchung Busan', False),
 ('Dongnae Eupseong', '동래읍성', 'dongnae', 'sight', 'A historic fortress site for a walk through local history.', '/guides/dongnae-hot-spring-half-day/#history', 'Dongnae Eupseong Busan', False),
 ('Dongnae Market', '동래시장', 'dongnae', 'market', 'Browse the stalls and pick a tteokbokki snack that looks good.', '/guides/busan-local-food-picks/#dongnae-market', 'Dongnae Market Busan', True),
 ('Mimiru', '미미루', 'dongnae', 'food', 'A popular Chinese restaurant known for jjajangmyeon and sweet-and-sour pork.', '/guides/dongnae-hot-spring-half-day/#food', 'Mimiru 91-1 Oncheonjang-ro Busan', False),
 ('MOMOS Coffee Oncheon Flagship', '모모스커피 온천장 본점', 'dongnae', 'cafe', 'The café where the MOMOS brand began, near Oncheonjang Station.', '/guides/busan-coffee-guide/', 'MOMOS COFFEE Oncheon Flagship Store Busan', False),
 # Beomil-dong
 ('Gaemi-jip (Beomil-dong)', '개미집 범일동', 'beomil', 'food', 'Nakgopsae: a spicy Busan hot pot of octopus, beef intestines and shrimp.', '/guides/busan-local-food-picks/#gaemijip', 'Gaemi-jip Beomil-dong Busan', False),
 ('60-Year-Old Traditional Halmae Gukbap', '60년전통할매국밥', 'beomil', 'food', 'An everyday bowl of pork soup with rice, where locals queue.', '/guides/busan-local-food-picks/#halmae-gukbap', '60년전통할매국밥 Busan Beomil-dong', False),
 # PNU
 ('Hoho Chicken House', '호호닭집', 'pnu', 'food', 'Curry-seasoned chicken near Pusan National University.', '/guides/pusan-national-university-food-guide/#hoho', 'Hoho Chicken House 68 Geumgang-ro 335beon-gil Busan', False),
 ('Tonshou', '톤쇼우', 'pnu', 'food', 'Japanese-style tonkatsu with long queues.', '/guides/pusan-national-university-food-guide/#tonshou', 'Tonshou Pusan National University Busan', False),
 ('Yamabento', '야마벤또', 'pnu', 'food', 'Japanese-style home cooking for a simple set meal.', '/guides/pusan-national-university-food-guide/#yamabento', 'Yamabento Pusan National University Busan', False),
 # West
 ('Gamcheon Culture Village', '감천문화마을', 'west', 'sight', 'Colorful hillside streets. Go earlier in the day and wear comfortable shoes.', '/guides/busan-three-days/#day-three', 'Gamcheon Culture Village Busan', False),
 ('Songdo Beach', '송도해수욕장', 'west', 'sight', 'The Songdo waterfront, with coastal attractions nearby.', '/guides/songdo-beach-local-breakfast/', 'Songdo Beach Busan', False),
 ('Soksihwonhae Daegutang (Songdo)', '속시원해대구탕 송도본점', 'west', 'food', 'Codfish soup for breakfast near Songdo Beach.', '/guides/songdo-beach-local-breakfast/#breakfast', '속시원해대구탕 송도본점', False),
 ('Dadaepo Beach', '다대포해수욕장', 'west', 'sight', 'A broad beach known for its sunset atmosphere.', '/guides/bts-in-busan/', 'Dadaepo Beach, Busan', False),
 # Yeongdo
 ('MOMOS Coffee Yeongdo Roastery', '모모스커피 영도 로스터리', 'yeongdo', 'cafe', 'Coffee with the atmosphere of Busan’s old harbor district.', '/guides/busan-coffee-guide/', 'MOMOS COFFEE Yeongdo Roastery Coffee Bar', False),
 ('Park Okhee Halmaejip Original Bokguk', '박옥희할매집원조복국', 'haeundae', 'food', 'A Haeundae bokguk specialist near Dalmaji-gil; confirm fish type and price before ordering.', '/guides/haeundae-food-guide/#bokguk', '박옥희할매집원조복국 부산 해운대구 달맞이길62번길 28', False),
 ('Haeundae Wonjo Halmae Gukbap', '해운대원조할매국밥', 'haeundae', 'food', 'A local-recommended stop for beef and seonji gukbap. Confirm the address at number 33.', '/guides/haeundae-food-guide/#gukbap', '해운대원조할매국밥 부산 해운대구 구남로21번길 33', True),
]

AREA = dict(AREAS); CAT = dict(CATS)
def q(s): return urllib.parse.quote_plus(s)

cards = []
items = []
for i, (name, ko, area, cat, why, guide, query, local) in enumerate(P, 1):
    pid = f'place-{i}'
    search = f'https://www.google.com/maps/search/?api=1&query={q(query)}'
    dirs = f'https://www.google.com/maps/dir/?api=1&destination={q(query)}'
    badge = '<span class="g2b-place-badge is-local">Local pick</span>' if local else '<span class="g2b-place-badge">In our guide</span>'
    cards.append(f'''<li class="g2b-place" id="{pid}" data-area="{area}" data-cat="{cat}" data-query="{e(query)}">
<div class="g2b-place-top"><span class="g2b-place-cat">{e(CAT[cat])}</span>{badge}</div>
<h3>{e(name)} <span lang="ko">{e(ko)}</span></h3>
<p class="g2b-place-area">{e(AREA[area])}</p>
<p>{e(why)}</p>
<div class="g2b-place-actions"><button type="button" class="g2b-place-show" data-map-show hidden>Show on map</button><a href="{e(search)}" target="_blank" rel="noopener noreferrer" data-map-open>Open in Google Maps</a><a href="{e(dirs)}" target="_blank" rel="noopener noreferrer" data-map-directions>Directions</a><a href="{e(guide)}">Read the guide</a></div>
</li>''')
    items.append({"@type": "ListItem", "position": i, "name": name, "url": B + guide})

area_chips = '<button type="button" class="is-active" data-filter-area="all" aria-pressed="true">All areas</button>' + ''.join(f'<button type="button" data-filter-area="{k}" aria-pressed="false">{e(v)}</button>' for k, v in AREAS)
cat_chips = '<button type="button" class="is-active" data-filter-cat="all" aria-pressed="true">All types</button>' + ''.join(f'<button type="button" data-filter-cat="{k}" aria-pressed="false">{e(v)}</button>' for k, v in CATS)

url = B + '/guides/busan-map/'
title = 'Busan Map: Local Food, Markets & Sights'
desc = 'A curated Busan map of the restaurants, markets, cafés and sights in Go2Busan guides, with area filters, Google Maps directions and a link to each guide.'
h1 = 'Busan Map: Local Food, Markets and Sights from Our Guides'
page_ld = {"@context": "https://schema.org", "@type": "CollectionPage", "@id": url + "#page", "name": h1, "description": desc, "url": url, "inLanguage": "en", "isPartOf": {"@type": "WebSite", "name": "Go2Busan", "url": B + "/"}, "mainEntity": {"@type": "ItemList", "numberOfItems": len(items), "itemListElement": items}}
bc = {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": B + "/"}, {"@type": "ListItem", "position": 2, "name": "Travel guides", "item": B + "/guides/"}, {"@type": "ListItem", "position": 3, "name": "Busan map", "item": url}]}

page = f'''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>{e(title)} | Go2Busan</title>
<meta name="description" content="{e(desc)}">
<link rel="canonical" href="{url}">
<link rel="alternate" hreflang="en" href="{url}"><link rel="alternate" hreflang="ja" href="{B}/ja/guides/busan-map/"><link rel="alternate" hreflang="zh-TW" href="{B}/zh-tw/guides/busan-map/"><link rel="alternate" hreflang="x-default" href="{url}">
<link rel="stylesheet" href="/assets/styles.css"><link rel="icon" href="/favicon.svg" type="image/svg+xml">
<meta name="g2b-maps-embed-key" content="">
<meta property="og:site_name" content="Go2Busan"><meta property="og:type" content="website">
<meta property="og:title" content="{e(title)}">
<meta property="og:description" content="{e(desc)}">
<meta property="og:url" content="{url}">
<meta property="og:image" content="{OG}">
<meta property="og:image:alt" content="Busanhang Bridge seen from Yeongdo, Busan">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="{e(title)}">
<meta name="twitter:description" content="{e(desc)}">
<meta name="twitter:image" content="{OG}">
<script type="application/ld+json">{json.dumps(page_ld, ensure_ascii=False, separators=(',', ':'))}</script>
<script type="application/ld+json">{json.dumps(bc, ensure_ascii=False)}</script>
<style>
.g2b-map-layout{{display:grid;gap:22px;padding-bottom:64px}}
.g2b-map-panel{{border:1px solid #dce5ef;border-radius:18px;overflow:hidden;background:#f1f5f9;box-shadow:0 14px 34px rgba(10,25,47,.08)}}
.g2b-map-frame{{display:block;width:100%;height:min(60vh,460px);border:0}}
.g2b-map-placeholder{{padding:clamp(22px,4vw,34px);display:grid;gap:13px;min-height:210px;align-content:center}}
.g2b-map-placeholder p{{margin:0}}
.g2b-map-load{{justify-self:start;min-height:46px;padding:11px 20px;border-radius:8px;border:0;background:#0a192f;color:#fff;font:inherit;font-weight:700;cursor:pointer}}
.g2b-map-load:hover{{background:#1769e0}}
.g2b-map-note{{font-size:.85rem;color:#526174;margin:0;padding:12px 16px;background:#fff;border-top:1px solid #e2e8f0}}
.g2b-filters{{display:grid;gap:11px;margin:18px 0}}
.g2b-filter-row{{display:flex;flex-wrap:wrap;gap:8px}}
.g2b-filter-row button{{min-height:40px;padding:7px 15px;border-radius:999px;border:1px solid #dce5ef;background:#fff;color:#344256;font:inherit;font-size:.86rem;font-weight:650;cursor:pointer}}
.g2b-filter-row button:hover{{border-color:#1769e0;color:#1769e0}}
.g2b-filter-row button.is-active{{background:#0a192f;border-color:#0a192f;color:#fff}}
.g2b-place-list{{list-style:none;margin:0;padding:0;display:grid;gap:13px}}
.g2b-place{{border:1px solid #e2e8f0;border-radius:14px;padding:17px 18px;background:#fff;transition:border-color .18s ease,box-shadow .18s ease}}
.g2b-place:hover{{border-color:#c6d5e8;box-shadow:0 8px 24px rgba(10,25,47,.06)}}
.g2b-place.is-selected{{border-color:#1769e0;box-shadow:0 0 0 2px rgba(23,105,224,.16)}}
.g2b-place h3{{margin:8px 0 3px;color:#0a192f;font-family:Georgia,"Times New Roman",serif;font-size:1.22rem;line-height:1.3;overflow-wrap:anywhere}}
.g2b-place h3 span{{font-family:inherit;font-weight:400;font-size:.88rem;color:#617084;word-break:keep-all;display:inline-block}}
.g2b-place p{{margin:5px 0;color:#43536a;font-size:.92rem;line-height:1.65}}
.g2b-place-area{{font-size:.82rem!important;color:#718096!important}}
.g2b-place-top{{display:flex;gap:7px;flex-wrap:wrap;font-size:.7rem;text-transform:uppercase;letter-spacing:.06em;font-weight:750}}
.g2b-place-badge{{padding:4px 9px;border-radius:999px;background:#eff4fa;color:#43536a}}
.g2b-place-badge.is-local{{background:#fff2e8;color:#96512e}}
.g2b-place-actions{{display:flex;flex-wrap:wrap;gap:8px 14px;margin-top:13px;align-items:center}}
.g2b-place-actions a,.g2b-place-actions button{{min-height:40px;display:inline-flex;align-items:center;font:inherit;font-size:.88rem;font-weight:650}}
.g2b-place-show{{padding:7px 14px;border-radius:8px;border:1px solid #1769e0;background:#fff;color:#145bc5;font-weight:700;cursor:pointer}}
.g2b-place-show:hover{{background:#f2f7ff}}
.g2b-map-count{{margin:0;font-size:.88rem;color:#617084}}
.g2b-map-layout [hidden]{{display:none!important}}
@media (max-width:899px){{.g2b-filter-row{{flex-wrap:nowrap;overflow-x:auto;-webkit-overflow-scrolling:touch;padding:3px 0 7px;scrollbar-width:thin}}.g2b-filter-row button{{flex:0 0 auto}}.g2b-map-sticky{{position:relative}}}}
@media (min-width:900px){{.g2b-map-layout{{grid-template-columns:minmax(0,1.02fr) minmax(0,.98fr);align-items:start;gap:28px}}.g2b-map-sticky{{position:sticky;top:94px}}.g2b-map-frame{{height:560px}}}}
@media(prefers-reduced-motion:reduce){{.g2b-place{{transition:none}}}}
</style>
</head>
<body><a class="skip-link" href="#main">Skip to content</a>
<header class="site-header"><div class="shell nav-wrap"><a class="brand" href="/"><span class="brand-mark brand-mark-image"><img src="/assets/go2busan-mark.svg" alt=""></span><span>Go2Busan</span></a><nav aria-label="Main navigation"><a href="/guides/">Travel guides</a><a href="/about.html">Our approach</a></nav><div style="display:flex;gap:8px;align-items:center"><a class="language-pill" href="/ja/guides/busan-map/" lang="ja">日本語</a><a class="language-pill" href="/zh-tw/guides/busan-map/" lang="zh-Hant-TW">繁體中文</a></div></div></header>
<main id="main">
<section class="article-hero shell"><div class="breadcrumbs"><a href="/">Home</a> / <a href="/guides/">Travel guides</a> / Busan map</div><p class="eyebrow">TRIP PLANNING · MAP</p><h1>{e(h1)}</h1><p class="article-deck">Every place on this map appears in a Go2Busan guide. Filter by area or type, open a place in Google Maps for directions, then read the guide before you go.</p><div class="article-meta"><span>{len(P)} PLACES</span><span>8 AREAS</span><span>CHECK HOURS BEFORE VISITING</span></div></section>
<section class="quick-summary shell" aria-label="How to use this map"><p class="quick-summary-title">How to use this map</p><ul><li>This is a short, curated list, not every venue in Busan. “Local pick” marks places our guides describe as a Busan-based contributor’s recommendation.</li><li>“Directions” opens Google Maps with the place as your destination, so you can choose subway, bus, taxi or walking.</li><li>Hours, prices and queues change. Check the place’s current listing before you travel.</li></ul></section>
<div class="shell g2b-map-layout">
<div class="g2b-map-sticky">
<div class="g2b-map-panel" data-map-panel>
<div class="g2b-map-placeholder" data-map-placeholder>
<p><strong>Interactive map</strong></p>
<p data-map-status>Loading the map shows Google Maps inside this page. Google may set its own cookies when it loads.</p>
<button type="button" class="g2b-map-load" data-map-load hidden>Show the interactive map</button>
<p><a href="https://www.google.com/maps/search/?api=1&amp;query=Busan" target="_blank" rel="noopener noreferrer">Open Busan in Google Maps</a></p>
</div>
<p class="g2b-map-note" data-map-note hidden>Showing: <span data-map-current>Busan</span>. Choose “Show on map” on any place to move the map.</p>
</div>
</div>
<div>
<h2 class="g2b-places-title" style="font-size:1.15rem;margin:0 0 10px">Places from our guides</h2>
<div class="g2b-filters" role="group" aria-label="Filter places">
<div class="g2b-filter-row" role="group" aria-label="Filter by area">{area_chips}</div>
<div class="g2b-filter-row" role="group" aria-label="Filter by type">{cat_chips}</div>
<p class="g2b-map-count" aria-live="polite" data-map-count>{len(P)} places</p>
</div>
<h2 id="all-places">Explore all {len(P)} places</h2>
<h2 class="section-title">Browse {len(P)} places in Busan</h2>
<ul class="g2b-place-list" data-place-list>
{(chr(10) * 3).join(cards)}
</ul>
<p data-map-empty hidden>No places match both filters. Try “All areas” or “All types”.</p>
</div>
</div>
<section class="shell" style="padding:0 0 48px"><h2>Plan by area</h2><ul><li><a href="/guides/haeundae-neighborhood-guide/">Haeundae neighborhood guide</a></li><li><a href="/guides/seomyeon-neighborhood-guide/">Seomyeon neighborhood guide</a></li><li><a href="/guides/nampo-neighborhood-guide/">Nampo-dong neighborhood guide</a></li><li><a href="/guides/gwangalli-neighborhood-guide/">Gwangalli neighborhood guide</a></li><li><a href="/guides/where-to-stay-busan/">Where to stay in Busan: compare Seomyeon, Haeundae and Gwangalli</a></li><li><a href="/guides/busan-neighborhood-food-guide/">Where to eat in Busan by neighborhood</a></li><li><a href="/guides/busan-three-days/">Three days in Busan, grouped by area</a></li><li><a href="/guides/busan-transit-card/">Busan transit cards and public transport</a></li></ul></section>
</main>
<footer class="site-footer"><div class="shell footer-inner"><a class="brand footer-brand" href="/"><span class="brand-mark brand-mark-image"><img src="/assets/go2busan-mark.svg" alt=""></span><span>Go2Busan</span></a><div class="footer-links"><a href="/about.html">About</a><a href="/disclosure.html">Disclosure</a><a href="/privacy.html">Privacy</a></div><p>Busan-based perspectives on local food, neighborhoods and independent travel.</p><p class="footer-disclosure"><strong>Affiliate disclosure:</strong> Some links on this site are affiliate links. We may earn a commission at no extra cost to you. <a href="/disclosure.html">Learn more</a>.</p></div></footer>
<script defer src="/assets/js/analytics.js"></script>
<script defer src="/assets/js/busan-map.js"></script>
</body></html>
'''
os.makedirs('guides/busan-map', exist_ok=True)
open('guides/busan-map/index.html', 'w').write(page)
print('places', len(P), 'title', len(title) + 10)
# Keep EN, JA and zh-TW maps generated from the same canonical P dataset.
subprocess.run([sys.executable, os.path.join(os.path.dirname(__file__), 'generate-busan-map-i18n.py')], check=True)

# Generates ja/guides/busan-map/index.html and zh-tw/guides/busan-map/index.html.
# Run from the repo root: python3 scripts/generate-busan-map-i18n.py
# Place data (names, areas, categories, Google Maps queries) comes from scripts/generate-busan-map.py,
# so the three language versions always list the same places.
import ast, json, html, os, re, urllib.parse
B = 'https://go2busan.com'
e = lambda s: html.escape(s, quote=True)
OG = 'https://commons.wikimedia.org/wiki/Special:FilePath/Busanhang_Bridge_taken_from_Yeongdo.jpg?width=1600'

src = open('scripts/generate-busan-map.py', encoding='utf-8').read()
def grab(name):
    for node in ast.parse(src).body:
        if isinstance(node, ast.Assign) and getattr(node.targets[0], 'id', None) == name:
            return ast.literal_eval(node.value)
AREAS, CATS, P = grab('AREAS'), grab('CATS'), grab('P')
q = lambda s: urllib.parse.quote_plus(s)

# Localized guide slug for places whose EN guide has a JA/TW counterpart (taken from sitemap.xml alternates).
# Anything not listed falls back to the English guide, labelled as English.
LOC = {
 '/guides/busan-three-days/': 'three-days',
 '/guides/haeundae-food-guide/': 'haeundae-neighborhood-guide',
 '/guides/busan-neighborhood-food-guide/': 'local-food-by-neighborhood',
 '/guides/jagalchi-market-no-surprise-bill/': 'jagalchi-market',
 '/guides/dongnae-hot-spring-half-day/': 'dongnae-hot-spring-half-day',
 '/guides/pusan-national-university-food-guide/': 'pusan-national-university-food-guide',
 '/guides/bts-in-busan/': 'bts-in-busan',
}
# Places whose EN guide differs from the best JA/TW page (checked against the localized pages).
PLACE_LOC = {'Gaemi-jip (Beomil-dong)': 'beomil-dong-nakgopsae', 'Soksihwonhae Daegutang (Songdo)': 'local-food-by-neighborhood'}

LANGS = {
 'ja': dict(
  dir='ja', htmllang='ja', locale='ja_JP', gmaps='ja', pill=[('/guides/busan-map/', 'EN', 'en'), ('/zh-tw/guides/busan-map/', '繁體中文', 'zh-Hant-TW')],
  areas=['海雲台', '西面', '南浦・中区', '東莱・温泉場', '凡一洞', '釜山大学', '甘川・松島・沙下', '影島'],
  cats=['レストラン', '市場', 'カフェ', '見どころ', '温泉'],
  badge_local='地元おすすめ', badge_guide='ガイド掲載',
  show='地図で表示', open='Googleマップで開く', dirs='ルート', read='ガイドを読む', read_en='英語ガイドを読む',
  why=[
   '釜山で最も知られたビーチ。東海岸の1日の拠点になります。',
   'ビーチから少し歩いた市場で、気軽につまめる屋台グルメ。',
   '夜の海辺で味わう海鮮。注文前にメニューと合計金額を確認しましょう。',
   '海雲台駅の裏手に広がるカフェと個人経営のレストラン。',
   '韓国焼肉の夕食に、牛ホルモンの炭火焼き。',
   '焼肉やチキン以外の選択肢として、フグのスープ（ポックク）。',
   '豚肉スープなど気軽な食事の拠点になる中心エリア。',
   '散策しながらつまむ、シアッホットクなどのストリートスナック。',
   '釜山の海鮮市場。注文前に重さ・価格・調理代を確認しましょう。',
   '地元グルメを楽しめる市場の路地とナイトマーケット。',
   'カントン市場近くの、釜山風の揚げ豚カルビ。',
   '油揚げの巾着（ユブ）が入った温かい鍋料理、ユブジョンゴル。',
   '辛さ控えめで食べやすい、味付けしたチュクミ（小ダコ）。',
   '温泉場（オンチョンジャン）にある大規模な伝統式の入浴施設。',
   '歴史ある城郭跡を歩いて、地域の歴史に触れられます。',
   '屋台をのぞきながら、気になったトッポッキをつまむ。',
   'ジャジャン麺と酢豚で知られる人気の中華料理店。',
   '温泉場駅の近くにある、MOMOSブランド発祥のカフェ。',
   'ナクコプセ。タコ、牛ホルモン、エビの入った釜山の辛い鍋。',
   '地元の人が並ぶ、豚スープご飯の日常の一杯。',
   '釜山大学近くの、カレー風味のチキン。',
   '行列のできる日本風トンカツ。',
   '日本風の家庭料理を、気軽な定食で。',
   'カラフルな丘の街並み。早めの時間に、歩きやすい靴で。',
   '近くに海辺の見どころが集まる松島の海岸沿い。',
   '松島ビーチ近くで、朝食にタラのスープ。',
   '夕日の雰囲気で知られる広いビーチ。',
   '港町の古い雰囲気が残る影島で味わうコーヒー。',
  ],
  title='釜山マップ：地元グルメ・市場・見どころ',
  desc='Go2Busanのガイドで紹介した釜山のレストラン・市場・カフェ・見どころをまとめた地図。エリアと種類で絞り込み、Googleマップのルート案内と各ガイドへのリンクつき。',
  h1='釜山マップ：ガイドで紹介した地元グルメ・市場・見どころ',
  deck='このマップの場所はすべてGo2Busanのガイドに登場します。エリアや種類で絞り込み、Googleマップで道順を確認して、行く前にガイドを読んでください。',
  eyebrow='旅の計画 · マップ', meta=['{n}か所', '8エリア', '訪問前に営業時間を確認'],
  bc=('ホーム', '旅行ガイド', '釜山マップ'), skip='本文へスキップ', nav=('旅行ガイド', 'Go2Busanについて', '旅行ガイド'),
  how='このマップの使い方',
  tips=['厳選した短いリストで、釜山のすべての店を網羅したものではありません。「地元おすすめ」は、ガイドで釜山在住の寄稿者のおすすめとして紹介している場所です。',
        '「ルート」を押すと、その場所を目的地にしたGoogleマップが開き、地下鉄・バス・タクシー・徒歩から選べます。',
        '営業時間・価格・行列は変わります。出発前に最新の情報を確認してください。'],
  interactive='インタラクティブマップ', status='マップを読み込むと、このページ内にGoogleマップが表示されます。読み込み時にGoogle独自のCookieが設定される場合があります。',
  loadbtn='インタラクティブマップを表示', openbusan='Googleマップで釜山を開く',
  note=('表示中：', '。各場所の「地図で表示」を押すと地図が移動します。'),
  filt_place='場所を絞り込む', filt_area='エリアで絞り込む', filt_cat='種類で絞り込む', all_areas='すべてのエリア', all_cats='すべての種類',
  count='{n}件', empty='両方の条件に合う場所はありません。「すべてのエリア」または「すべての種類」を試してください。',
  plan='エリア別に計画する',
  plan_links=[('haeundae-neighborhood-guide', '海雲台エリアガイド'), ('seomyeon-neighborhood-guide', '西面エリアガイド'), ('where-to-stay-busan', '釜山の宿の選び方：西面・海雲台・広安里を比較'), ('local-food-by-neighborhood', 'エリア別・釜山の食べ歩きガイド'), ('three-days', '釜山3日間モデルコース（エリア別）'), ('transit-card', '釜山の交通カードと公共交通')],
  alt_og='釜山港大橋（影島から望む）',
  footer_tag='Go2Busan — 釜山を地元目線で旅するためのガイド', about='Go2Busanについて', privacy='プライバシー', disc='提携リンクについて', lang_names=('English', '日本語', '繁體中文'),
 ),
 'zh-tw': dict(
  dir='zh-tw', htmllang='zh-Hant-TW', locale='zh_TW', gmaps='zh-TW', pill=[('/guides/busan-map/', 'EN', 'en'), ('/ja/guides/busan-map/', '日本語', 'ja')],
  areas=['海雲臺', '西面', '南浦洞・中區', '東萊・溫泉場', '凡一洞', '釜山大學', '甘川・松島・沙下', '影島'],
  cats=['餐廳', '市場', '咖啡館', '景點', '溫泉'],
  badge_local='在地推薦', badge_guide='指南收錄',
  show='在地圖上顯示', open='在 Google 地圖開啟', dirs='路線', read='閱讀指南', read_en='閱讀英文版指南',
  why=[
   '釜山最知名的海灘，也是遊玩東海岸一整天的據點。',
   '離海灘不遠的傳統市場，可以輕鬆吃小吃。',
   '夜晚在海邊吃海鮮。點餐前請先確認菜單與總價。',
   '海雲臺站後方的咖啡館與獨立餐廳。',
   '炭烤牛內臟，適合韓式燒烤晚餐。',
   '河豚湯（bokguk），是燒烤與炸雞之外的另一種選擇。',
   '以豬肉湯飯等輕鬆用餐為主的市區據點。',
   '邊逛邊吃街頭小吃，例如糖餅（ssiat hotteok）。',
   '釜山的海鮮市場。點餐前請先確認重量、價格與加工費。',
   '市場巷弄與夜市，可品嚐在地小吃。',
   '富平罐頭市場附近的釜山風炸豬排骨。',
   '熱呼呼的豆皮火鍋（yubu-jeongol），內有豆皮包與高湯。',
   '調味小章魚（jjukkumi），辣度適中、不會太嗆。',
   '溫泉場（Oncheonjang）的大型傳統溫泉浴場。',
   '歷史悠久的城郭遺跡，適合邊走邊認識在地歷史。',
   '逛逛攤位，挑一份看起來不錯的辣炒年糕。',
   '以炸醬麵和糖醋肉聞名的人氣中華餐廳。',
   'MOMOS 品牌的起點咖啡館，位於溫泉場站附近。',
   'nakgopsae：以章魚、牛腸與蝦子煮成的釜山辣味火鍋。',
   '當地人排隊的日常豬肉湯飯。',
   '釜山大學附近，咖哩風味的雞肉料理。',
   '常需排隊的日式炸豬排。',
   '日式家常料理，適合簡單的定食。',
   '彩色的山坡街巷。建議早點去，並穿舒適的鞋子。',
   '松島海岸，附近有各種海濱景點。',
   '松島海水浴場附近，早餐可以喝鱈魚湯。',
   '以夕陽氛圍聞名的寬闊海灘。',
   '在影島舊港區的氛圍中喝咖啡。',
  ],
  title='釜山地圖：在地美食、市場與景點',
  desc='整理 Go2Busan 指南中介紹的釜山餐廳、市場、咖啡館與景點，可依地區與類型篩選，附 Google 地圖路線與各篇指南連結。',
  h1='釜山地圖：指南中的在地美食、市場與景點',
  deck='這張地圖上的每個地點都出現在 Go2Busan 的指南中。可依地區或類型篩選，用 Google 地圖查看路線，出發前再閱讀指南。',
  eyebrow='行程規劃 · 地圖', meta=['{n} 個地點', '8 個地區', '出發前請確認營業時間'],
  bc=('首頁', '旅遊指南', '釜山地圖'), skip='跳到主要內容', nav=('旅遊指南', '關於 Go2Busan', '旅遊指南'),
  how='如何使用這張地圖',
  tips=['這是精選的簡短清單，並未涵蓋釜山所有店家。「在地推薦」是指南中標示為釜山在地作者推薦的地點。',
        '點選「路線」會開啟 Google 地圖並以該地點為目的地，可選擇地鐵、公車、計程車或步行。',
        '營業時間、價格與排隊情況會變動，出發前請查看最新資訊。'],
  interactive='互動地圖', status='載入地圖後，Google 地圖會顯示在此頁面內。載入時 Google 可能會設定自己的 Cookie。',
  loadbtn='顯示互動地圖', openbusan='在 Google 地圖開啟釜山',
  note=('目前顯示：', '。點選任一地點的「在地圖上顯示」即可移動地圖。'),
  filt_place='篩選地點', filt_area='依地區篩選', filt_cat='依類型篩選', all_areas='所有地區', all_cats='所有類型',
  count='{n} 個地點', empty='沒有同時符合兩個條件的地點，請試試「所有地區」或「所有類型」。',
  plan='依地區規劃行程',
  plan_links=[('haeundae-neighborhood-guide', '海雲臺地區指南'), ('seomyeon-neighborhood-guide', '西面地區指南'), ('where-to-stay-busan', '釜山住哪裡：西面、海雲臺與廣安里比較'), ('local-food-by-neighborhood', '釜山各區美食指南'), ('three-days', '釜山三天兩夜行程（依地區安排）'), ('transit-card', '釜山交通卡與大眾運輸')],
  alt_og='從影島望向釜山港大橋',
  footer_tag='Go2Busan — 用在地視角旅行釜山', about='關於 Go2Busan', privacy='隱私權', disc='聯盟連結說明', lang_names=('English', '日本語', '繁體中文'),
 ),
}

# Reuse the exact <style> block of the English page so all three versions look the same.
en_page = open('guides/busan-map/index.html', encoding='utf-8').read()
STYLE = re.search(r'<style>.*?</style>', en_page, re.S).group(0)

def build(code, L):
    assert len(L['why']) == len(P), f'{code}: {len(L["why"])} descriptions for {len(P)} places'
    url = f"{B}/{L['dir']}/guides/busan-map/"
    en_url, ja_url, tw_url = f'{B}/guides/busan-map/', f'{B}/ja/guides/busan-map/', f'{B}/zh-tw/guides/busan-map/'
    cards, items = [], []
    for i, (name, ko, area, cat, why, guide, query, local) in enumerate(P, 1):
        slug = PLACE_LOC.get(name) or LOC.get(guide)
        if slug:
            href, lang_attr, label = f"/{L['dir']}/guides/{slug}/", '', L['read']
        else:
            href, lang_attr, label = guide.split('#')[0], ' hreflang="en" lang="en"', L['read_en']
        badge = f'<span class="g2b-place-badge is-local">{e(L["badge_local"])}</span>' if local else f'<span class="g2b-place-badge">{e(L["badge_guide"])}</span>'
        ai = [k for k, _ in AREAS].index(area); ci = [k for k, _ in CATS].index(cat)
        search = f'https://www.google.com/maps/search/?api=1&query={q(query)}'
        dirs = f'https://www.google.com/maps/dir/?api=1&destination={q(query)}'
        cards.append(f'''<li class="g2b-place" id="place-{i}" data-area="{area}" data-cat="{cat}" data-query="{e(query)}">
<div class="g2b-place-top"><span class="g2b-place-cat">{e(L['cats'][ci])}</span>{badge}</div>
<h3>{e(name)} <span lang="ko">{e(ko)}</span></h3>
<p class="g2b-place-area">{e(L['areas'][ai])}</p>
<p>{e(L['why'][i-1])}</p>
<div class="g2b-place-actions"><button type="button" class="g2b-place-show" data-map-show hidden>{e(L['show'])}</button><a href="{e(search)}" target="_blank" rel="noopener noreferrer" data-map-open>{e(L['open'])}</a><a href="{e(dirs)}" target="_blank" rel="noopener noreferrer" data-map-directions>{e(L['dirs'])}</a><a href="{e(href)}"{lang_attr}>{e(label)}</a></div>
</li>''')
        items.append({"@type": "ListItem", "position": i, "name": name, "url": B + href})
    area_chips = f'<button type="button" class="is-active" data-filter-area="all" aria-pressed="true">{e(L["all_areas"])}</button>' + ''.join(f'<button type="button" data-filter-area="{k}" aria-pressed="false">{e(L["areas"][j])}</button>' for j, (k, _) in enumerate(AREAS))
    cat_chips = f'<button type="button" class="is-active" data-filter-cat="all" aria-pressed="true">{e(L["all_cats"])}</button>' + ''.join(f'<button type="button" data-filter-cat="{k}" aria-pressed="false">{e(L["cats"][j])}</button>' for j, (k, _) in enumerate(CATS))
    page_ld = {"@context": "https://schema.org", "@type": "CollectionPage", "@id": url + "#page", "name": L['h1'], "description": L['desc'], "url": url, "inLanguage": L['htmllang'], "isPartOf": {"@type": "WebSite", "name": "Go2Busan", "url": B + "/"}, "mainEntity": {"@type": "ItemList", "numberOfItems": len(items), "itemListElement": items}}
    bc = {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": L['bc'][0], "item": f"{B}/{L['dir']}/"}, {"@type": "ListItem", "position": 2, "name": L['bc'][1], "item": f"{B}/{L['dir']}/guides/"}, {"@type": "ListItem", "position": 3, "name": L['bc'][2], "item": url}]}
    pills = ''.join(f'<a class="language-pill" href="{h}" lang="{lg}">{t}</a>' for h, t, lg in L['pill'])
    meta = ''.join(f'<span>{e(m.format(n=len(P)))}</span>' for m in L['meta'])
    plan = ''.join(f'<li><a href="/{L["dir"]}/guides/{s}/">{e(t)}</a></li>' for s, t in L['plan_links'])
    tips = ''.join(f'<li>{e(t)}</li>' for t in L['tips'])
    en_n, ja_n, tw_n = L['lang_names']
    return f'''<!doctype html>
<html lang="{L['htmllang']}">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>{e(L['title'])} | Go2Busan</title>
<meta name="description" content="{e(L['desc'])}">
<link rel="canonical" href="{url}">
<link rel="alternate" hreflang="en" href="{en_url}"><link rel="alternate" hreflang="ja" href="{ja_url}"><link rel="alternate" hreflang="zh-TW" href="{tw_url}"><link rel="alternate" hreflang="x-default" href="{en_url}">
<link rel="stylesheet" href="/assets/styles.css"><link rel="icon" href="/favicon.svg" type="image/svg+xml">
<meta name="g2b-maps-embed-key" content="">
<meta property="og:site_name" content="Go2Busan"><meta property="og:type" content="website"><meta property="og:locale" content="{L['locale']}">
<meta property="og:title" content="{e(L['title'])}">
<meta property="og:description" content="{e(L['desc'])}">
<meta property="og:url" content="{url}">
<meta property="og:image" content="{OG}">
<meta property="og:image:alt" content="{e(L['alt_og'])}">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="{e(L['title'])}">
<meta name="twitter:description" content="{e(L['desc'])}">
<meta name="twitter:image" content="{OG}">
<script type="application/ld+json">{json.dumps(page_ld, ensure_ascii=False)}</script>
<script type="application/ld+json">{json.dumps(bc, ensure_ascii=False)}</script>
{STYLE}
</head>
<body><a class="skip-link" href="#main">{e(L['skip'])}</a>
<header class="site-header"><div class="shell nav-wrap"><a class="brand" href="/{L['dir']}/"><span class="brand-mark brand-mark-image"><img src="/assets/go2busan-mark.svg" alt=""></span><span>Go2Busan</span></a><nav aria-label="{e(L['nav'][2])}"><a href="/{L['dir']}/guides/">{e(L['nav'][0])}</a><a href="/about.html">{e(L['nav'][1])}</a></nav><div style="display:flex;gap:8px;align-items:center">{pills}</div></div></header>
<main id="main">
<section class="article-hero shell"><div class="breadcrumbs"><a href="/{L['dir']}/">{e(L['bc'][0])}</a> / <a href="/{L['dir']}/guides/">{e(L['bc'][1])}</a> / {e(L['bc'][2])}</div><p class="eyebrow">{e(L['eyebrow'])}</p><h1>{e(L['h1'])}</h1><p class="article-deck">{e(L['deck'])}</p><div class="article-meta">{meta}</div></section>
<section class="quick-summary shell" aria-label="{e(L['how'])}"><p class="quick-summary-title">{e(L['how'])}</p><ul>{tips}</ul></section>
<div class="shell g2b-map-layout">
<div class="g2b-map-sticky">
<div class="g2b-map-panel" data-map-panel>
<div class="g2b-map-placeholder" data-map-placeholder>
<p><strong>{e(L['interactive'])}</strong></p>
<p data-map-status>{e(L['status'])}</p>
<button type="button" class="g2b-map-load" data-map-load hidden>{e(L['loadbtn'])}</button>
<p><a href="https://www.google.com/maps/search/?api=1&amp;query=Busan" target="_blank" rel="noopener noreferrer">{e(L['openbusan'])}</a></p>
</div>
<p class="g2b-map-note" data-map-note hidden>{e(L['note'][0])}<span data-map-current>Busan</span>{e(L['note'][1])}</p>
</div>
</div>
<div>
<div class="g2b-filters" role="group" aria-label="{e(L['filt_place'])}">
<div class="g2b-filter-row" role="group" aria-label="{e(L['filt_area'])}">{area_chips}</div>
<div class="g2b-filter-row" role="group" aria-label="{e(L['filt_cat'])}">{cat_chips}</div>
<p class="g2b-map-count" aria-live="polite" data-map-count>{e(L['count'].format(n=len(P)))}</p>
</div>
<ul class="g2b-place-list" data-place-list>
{chr(10).join(cards)}
</ul>
<p data-map-empty hidden>{e(L['empty'])}</p>
</div>
</div>
<section class="shell" style="padding:0 0 48px"><h2>{e(L['plan'])}</h2><ul>{plan}</ul></section>
</main>
<footer class="site-footer"><div class="shell"><p>{e(L['footer_tag'])}</p><div class="footer-links"><a href="/guides/busan-map/">{en_n}</a><a href="/ja/guides/busan-map/">{ja_n}</a><a href="/zh-tw/guides/busan-map/">{tw_n}</a><a href="/about.html">{e(L['about'])}</a><a href="/privacy.html">{e(L['privacy'])}</a> <a href="/disclosure.html">{e(L['disc'])}</a></div></div></footer>
<script defer src="/assets/js/analytics.js"></script>
<script defer src="/assets/js/busan-map.js"></script>
</body></html>
'''

for code, L in LANGS.items():
    d = f"{L['dir']}/guides/busan-map"
    os.makedirs(d, exist_ok=True)
    open(f'{d}/index.html', 'w', encoding='utf-8').write(build(code, L))
    print(code, 'title chars', len(L['title']) + 10)

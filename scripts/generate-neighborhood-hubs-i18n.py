# Generates Japanese and Traditional Chinese versions of the Haeundae and Seomyeon hubs.
# Run from the repo root: python3 scripts/generate-neighborhood-hubs-i18n.py
import json, html, os
B = 'https://go2busan.com'
e = lambda s: html.escape(s, quote=True)
OG_SEOMYEON = 'https://commons.wikimedia.org/wiki/Special:FilePath/Busanhang_Bridge_taken_from_Yeongdo.jpg?width=1600'
HAEUNDAE_IMG = 'https://commons.wikimedia.org/wiki/Special:FilePath/Haeundae_District_and_Beach.jpg?width=1600'
LICENSE = '<a href="https://creativecommons.org/licenses/by-sa/4.0/" rel="license noopener" target="_blank">CC BY-SA 4.0</a>'

UI = {
 'ja': dict(lang='ja', og='ja_JP', skip='本文へ移動', home='ホーム', guides='旅行ガイド', about='Go2Busanについて', summary='まとめ',
            faq='よくある質問', related='関連ガイド', all='ガイド一覧 →', other=('zh-tw', '繁體中文', 'zh-Hant-TW'), privacy='プライバシー', disc='提携リンクについて',
            footer='Go2Busan — 釜山を地元目線で旅するためのガイド', nav='旅行ガイド', meta=['エリアガイド', '約5分', '出発前に最新の経路を確認']),
 'zh-tw': dict(lang='zh-Hant-TW', og='zh_TW', skip='跳到主要內容', home='首頁', guides='旅遊指南', about='關於 Go2Busan', summary='重點整理',
            faq='常見問題', related='相關指南', all='所有指南 →', other=('ja', '日本語', 'ja'), privacy='隱私權', disc='聯盟連結說明',
            footer='Go2Busan — 用在地視角旅行釜山', nav='旅遊指南', meta=['區域指南', '約 5 分鐘', '出發前確認最新路線']),
}

H = {}
H[('ja', 'haeundae')] = dict(
 crumb='海雲台', title='海雲台エリアガイド：ビーチ・グルメ・宿・交通',
 desc='釜山・海雲台を地元目線で整理。金海空港や釜山駅からの行き方、宿の選び方、食事、周辺スポット、冬のイベントまで、詳しいガイドへの入口をまとめました。',
 eyebrow='エリアガイド・釜山東部', h1='海雲台エリアガイド：ビーチ、グルメ、宿泊、行き方',
 deck='海雲台は釜山でいちばん知られたビーチエリアです。このページでエリア全体を把握し、各テーマの詳しいガイドへ進んでください。',
 img_alt='海雲台海水浴場と背後の高層ビル群', credit=f'写真：Masterhatch / Wikimedia Commons、{LICENSE}',
 summary=['ビーチ、海沿いの散歩、カフェ、のんびりした海辺ステイに向いています。', '海雲台駅は地下鉄2号線。釜山駅からは1号線で西面へ行き、2号線に乗り換えます。', '釜山の西側・中心部からは遠いので、日ごとにエリアをまとめて回るのがおすすめです。'],
 body='''<h2 id="who-is-it-for">海雲台を拠点にするべき？</h2>
<p>ビーチや海沿いの散歩、夜の海辺の時間を旅の中心にしたいなら海雲台が向いています。釜山の東側でリゾートのように過ごしたい人に合うエリアです。</p>
<p>南浦洞やチャガルチ、旧市街を中心に回るなら、より中心にある<a href="/ja/guides/seomyeon-neighborhood-guide/">西面</a>も比較してください。<a href="/ja/guides/where-to-stay-busan/#area-haeundae">宿泊エリアガイド</a>で両方を比べています。</p>
<h2 id="getting-there">行き方とエリア内の移動</h2>
<ul><li><strong>金海空港から：</strong>ライトレールと地下鉄2号線、タクシー、リムジンバスを<a href="/ja/guides/airport-to-haeundae/">金海空港から海雲台へ</a>で比較しています。空港公式サイトの情報は2026年11月5日に確認したものです。</li>
<li><strong>釜山駅（KTX）から：</strong>地下鉄1号線で西面へ行き、2号線（萇山方面）に乗り換えます。到着が遅い場合は先に<a href="/ja/guides/late-arrival/">深夜到着ガイド</a>を確認してください。</li>
<li><strong>エリア内の移動：</strong>交通カードで地下鉄とバスに乗れます。<a href="/ja/guides/transit-card/">交通カードガイド</a>をご覧ください。</li></ul>
<h2 id="where-to-stay">宿泊エリアの選び方</h2>
<p>ホテル名に「海雲台」と付いているかではなく、駅やビーチまでの徒歩距離で選びましょう。海雲台は東西に長く、萇山寄りのホテルとビーチ前のホテルでは過ごし方が変わります。</p>
<p>西面や広安里との比較は<a href="/ja/guides/where-to-stay-busan/">釜山の宿泊エリアガイド</a>へ。さらに東の静かな海辺に泊まるなら<a href="/ja/guides/where-to-stay-songjeong-gijang/">松亭・機張</a>も候補です。</p>
<h2 id="eat">食事</h2>
<ul><li>海雲台での食事の考え方は<a href="/ja/guides/local-food-by-neighborhood/#section-4">エリア別グルメガイドの海雲台</a>にまとめています。</li>
<li>テジクッパやミルミョンなど釜山の定番料理の背景は<a href="/ja/guides/busan-food-stories/">釜山グルメの物語</a>へ。</li>
<li>海鮮は注文前に、種類・重さ・価格・調理代を確認しましょう。考え方は<a href="/ja/guides/jagalchi-market/">チャガルチ市場ガイド</a>と同じです。</li></ul>
<h2 id="see-and-do">周辺の見どころ</h2>
<ul><li><a href="/ja/guides/busan-spa-land-guide/">新世界センタムシティのスパランド</a>：寒い日や雨の日の屋内スポット。</li>
<li><a href="/ja/guides/haedong-yonggungsa/">海東龍宮寺</a>：東海岸の海辺の寺。</li>
<li><a href="/ja/guides/busan-fireworks-festival/">釜山花火祭り</a>：広安里で開かれる秋の大型イベント。</li></ul>
<h2 id="seasonal">季節のイベント</h2>
<p>海雲台区の2026年行事カレンダーでは、第13回海雲台光の祭りが2026年11月28日から2027年1月10日まで、海雲台海水浴場と九南路一帯で予定されています。出典と過ごし方は<a href="/ja/guides/busan-winter-travel-guide/#december-lights">冬の釜山ガイドの12月の項目</a>をご覧ください。日程は変わることがあるため、出発前に公式発表を確認してください。</p>
<h2 id="half-day">海雲台で過ごす半日モデル</h2>
<ol><li>朝：ビーチと冬柏島周辺の海沿いの散歩道を歩く。</li>
<li>昼：ビーチ近くで食事。メニューと合計金額を先に確認。</li>
<li>夕方：海辺のカフェ、または土曜日なら広安里へ。</li></ol>
<p>移動時間を見込み、風や雨の日のために屋内の予備プランを1つ用意しておきましょう。</p>''',
 faq=[('初めての釜山なら海雲台と西面のどちらがいい？', 'ビーチ中心の旅なら海雲台、市内のあちこちを回るなら中心にある西面が便利です。片方に泊まり、もう片方へ日帰りで行く人も多くいます。'),
      ('釜山駅から海雲台へはどう行く？', '地下鉄1号線で西面へ行き、2号線（萇山方面）に乗り換え、ホテルに近い駅で降ります。')],
 related=[('/ja/guides/where-to-stay-busan/', '釜山の宿泊エリアガイド'), ('/ja/guides/three-days/', '釜山3日間モデルコース'), ('/ja/guides/seomyeon-neighborhood-guide/', '西面エリアガイド')])

H[('ja', 'seomyeon')] = dict(
 crumb='西面', title='西面エリアガイド：グルメ・宿・地下鉄での移動',
 desc='釜山の中心・西面を地元目線で整理。金海空港や釜山駅からの行き方、宿の選び方、食事、地下鉄1号線・2号線で行ける日帰りプランまで、詳しいガイドへの入口をまとめました。',
 eyebrow='エリアガイド・釜山中心部', h1='西面エリアガイド：グルメ、宿泊、地下鉄での移動',
 deck='西面は地下鉄1号線と2号線が交わる釜山の中心です。このページでエリア全体を把握し、各テーマの詳しいガイドへ進んでください。',
 img_alt=None, credit=None,
 summary=['飲食店や買い物、夜の街が近い、動きやすい拠点に向いています。', '西面駅は地下鉄1号線と2号線の乗換駅。南浦洞にも海雲台にも乗り換えなしで行けます。', 'その分、街は賑やかで都会的。海辺でのんびりする雰囲気ではありません。'],
 body='''<h2 id="who-is-it-for">西面を拠点にするべき？</h2>
<p>市内のあちこちを回る予定なら、またホテルの近くに飲食店や店がたくさん欲しいなら西面が向いています。地下鉄の便が良く、東西への移動が楽になります。</p>
<p>ビーチが旅の目的なら<a href="/ja/guides/haeundae-neighborhood-guide/">海雲台</a>も比較してください。<a href="/ja/guides/where-to-stay-busan/">宿泊エリアガイド</a>で両方を比べています。</p>
<h2 id="getting-there">行き方とエリア内の移動</h2>
<ul><li><strong>金海空港から：</strong>ライトレールで沙上へ行き、地下鉄2号線に乗り換えるのが一般的です。タクシーやリムジンバスとの比較は<a href="/ja/guides/airport-to-seomyeon/">金海空港から西面へ</a>で。空港公式サイトの情報は2026年11月5日に確認したものです。</li>
<li><strong>釜山駅（KTX）から：</strong>地下鉄1号線で西面まで乗り換えなしで行けます。</li>
<li><strong>エリア内の移動：</strong>1号線は南浦洞・東莱方面、2号線は海雲台方面へ。<a href="/ja/guides/transit-card/">交通カードガイド</a>もご覧ください。</li></ul>
<h2 id="where-to-stay">宿泊エリアの選び方</h2>
<p>西面は広い繁華街です。「西面」と書かれたホテルでも駅から遠かったり坂道があったりするので、駅の出口からの徒歩ルートを確認しましょう。</p>
<p>海雲台や広安里との比較は<a href="/ja/guides/where-to-stay-busan/">釜山の宿泊エリアガイド</a>へ。</p>
<h2 id="eat">食事</h2>
<ul><li>まずは<a href="/ja/guides/local-food-by-neighborhood/#section-1">エリア別グルメガイドの西面</a>から。</li>
<li>釜山の定番料理の背景：<a href="/ja/guides/busan-dwaeji-gukbap-history/">テジクッパ</a>と<a href="/ja/guides/busan-milmyeon-history/">ミルミョン</a>。</li>
<li>注文の前に<a href="/ja/guides/food-etiquette/">食事のマナー</a>も確認しておくと安心です。</li></ul>
<h2 id="day-plans">西面から行きやすい日帰りプラン</h2>
<ul><li><strong>1号線で南へ：</strong><a href="/ja/guides/jagalchi-market/">チャガルチ市場</a>と南浦洞、または<a href="/ja/guides/busan-station-local-walk/">釜山駅から南浦への散歩ルート</a>。</li>
<li><strong>1号線で北へ：</strong><a href="/ja/guides/dongnae-hot-spring-half-day/">東莱温泉の半日コース</a>や<a href="/ja/guides/beomeosa-food-guide/">梵魚寺周辺</a>。</li>
<li><strong>2号線で東へ：</strong><a href="/ja/guides/haeundae-neighborhood-guide/">海雲台</a>と広安里。</li></ul>
<p>帰りの経路と終電を確認しておきましょう。<a href="/ja/guides/three-days/">3日間モデルコース</a>ではエリアごとにまとめています。</p>''',
 faq=[('初めての釜山旅行で西面に泊まるのはいい？', '市内のあちこちを回るなら便利です。地下鉄1号線と2号線が交わるので、南浦洞にも海雲台にも乗り換えなしで行けます。'),
      ('金海空港から西面へはどう行く？', 'ライトレールで沙上へ行き、地下鉄2号線で西面へ向かうのが一般的です。荷物が多い場合や到着が遅い場合はタクシーやリムジンバスも比較しましょう。')],
 related=[('/ja/guides/where-to-stay-busan/', '釜山の宿泊エリアガイド'), ('/ja/guides/three-days/', '釜山3日間モデルコース'), ('/ja/guides/haeundae-neighborhood-guide/', '海雲台エリアガイド')])

H[('zh-tw', 'haeundae')] = dict(
 crumb='海雲台', title='海雲台區域指南：海灘、美食、住宿與交通',
 desc='用在地視角整理釜山海雲台：從金海機場與釜山站怎麼去、住宿怎麼選、吃什麼、周邊景點與冬季活動，並連到各主題的詳細指南。',
 eyebrow='區域指南・釜山東部', h1='海雲台區域指南：海灘、美食、住宿與交通',
 deck='海雲台是釜山最知名的海灘區。先用這一頁掌握整個區域，再依需求打開各主題的詳細指南。',
 img_alt='海雲台海水浴場與後方的高樓群', credit=f'照片：Masterhatch / Wikimedia Commons，{LICENSE}',
 summary=['適合以海灘、海岸散步、咖啡廳和悠閒海邊住宿為主的旅程。', '海雲台站在地鐵 2 號線；從釜山站搭 1 號線到西面，再轉 2 號線。', '缺點是離釜山西部與市中心較遠，建議每天集中走同一區。'],
 body='''<h2 id="who-is-it-for">適合住海雲台嗎？</h2>
<p>如果海灘、海岸步道和傍晚的海邊時光是旅程重點，海雲台很適合。想在釜山東邊輕鬆度假的人，可以把這裡當據點。</p>
<p>如果行程主要在南浦洞、札嘎其或老城區，也可以比較位置更居中的<a href="/zh-tw/guides/seomyeon-neighborhood-guide/">西面</a>。<a href="/zh-tw/guides/where-to-stay-busan/#area-haeundae">住宿區域指南</a>有兩區的比較。</p>
<h2 id="getting-there">交通方式與區內移動</h2>
<ul><li><strong>從金海機場：</strong>輕軌加地鐵 2 號線、計程車、機場巴士的比較，請看<a href="/zh-tw/guides/airport-to-haeundae/">金海機場到海雲台</a>。機場官網資訊於 2026 年 11 月 5 日確認。</li>
<li><strong>從釜山站（KTX）：</strong>搭地鐵 1 號線到西面，轉乘 2 號線（往萇山方向）。若晚上抵達，請先看<a href="/zh-tw/guides/late-arrival/">深夜抵達指南</a>。</li>
<li><strong>區內移動：</strong>交通卡可搭地鐵和公車，詳見<a href="/zh-tw/guides/transit-card/">交通卡指南</a>。</li></ul>
<h2 id="where-to-stay">住宿怎麼選</h2>
<p>不要只看飯店名稱有沒有「海雲台」，要看走到車站或海灘的距離。海雲台範圍很長，靠近萇山的飯店和海灘前的飯店，體驗差很多。</p>
<p>和西面、廣安里的比較請看<a href="/zh-tw/guides/where-to-stay-busan/">釜山住宿區域指南</a>；想住更東邊、更安靜的海岸，可以考慮<a href="/zh-tw/guides/where-to-stay-songjeong-gijang/">松亭與機張</a>。</p>
<h2 id="eat">吃什麼</h2>
<ul><li>海雲台用餐的思考方式，整理在<a href="/zh-tw/guides/local-food-by-neighborhood/#section-4">分區美食指南的海雲台段落</a>。</li>
<li>豬肉湯飯、小麥冷麵等釜山代表料理的故事，請看<a href="/zh-tw/guides/busan-food-stories/">釜山美食故事</a>。</li>
<li>點海鮮前先確認種類、重量、價格與料理費；原則和<a href="/zh-tw/guides/jagalchi-market/">札嘎其市場指南</a>相同。</li></ul>
<h2 id="see-and-do">周邊景點</h2>
<ul><li><a href="/zh-tw/guides/busan-spa-land-guide/">新世界百貨 Centum City 的 Spa Land</a>：冷天或雨天的室內選擇。</li>
<li><a href="/zh-tw/guides/haedong-yonggungsa/">海東龍宮寺</a>：東海岸的海邊寺廟。</li>
<li><a href="/zh-tw/guides/busan-fireworks-festival/">釜山煙火節</a>：在廣安里舉行的秋季大型活動。</li></ul>
<h2 id="seasonal">季節活動</h2>
<p>依海雲台區 2026 年活動行事曆，第 13 屆海雲台光之節預定於 2026 年 11 月 28 日至 2027 年 1 月 10 日，在海雲台海水浴場與九南路一帶舉行。資料來源與安排方式請看<a href="/zh-tw/guides/busan-winter-travel-guide/#december-lights">冬季釜山指南的 12 月段落</a>。日期可能變動，出發前請確認官方公告。</p>
<h2 id="half-day">海雲台半日行程</h2>
<ol><li>上午：走海灘與冬柏島周邊的海岸步道。</li>
<li>中午：在海灘附近用餐，先確認菜單與總金額。</li>
<li>傍晚：海邊咖啡廳；如果是星期六，也可以去廣安里。</li></ol>
<p>記得預留移動時間，並準備一個風雨天的室內備案。</p>''',
 faq=[('第一次去釜山，住海雲台還是西面好？', '以海灘為主選海雲台；行程分散在市區各處，則位置居中的西面比較方便。很多人住其中一區，再到另一區玩一天。'),
      ('從釜山站怎麼去海雲台？', '搭地鐵 1 號線到西面，轉乘 2 號線（往萇山方向），在離飯店最近的車站下車。')],
 related=[('/zh-tw/guides/where-to-stay-busan/', '釜山住宿區域指南'), ('/zh-tw/guides/three-days/', '釜山三天行程'), ('/zh-tw/guides/seomyeon-neighborhood-guide/', '西面區域指南')])

H[('zh-tw', 'seomyeon')] = dict(
 crumb='西面', title='西面區域指南：美食、住宿與地鐵交通',
 desc='用在地視角整理釜山市中心西面：從金海機場與釜山站怎麼去、住宿怎麼選、吃什麼，以及搭地鐵 1、2 號線的一日行程，並連到各主題的詳細指南。',
 eyebrow='區域指南・釜山市中心', h1='西面區域指南：美食、住宿與地鐵交通',
 deck='西面是地鐵 1 號線和 2 號線交會的釜山市中心。先用這一頁掌握整個區域，再依需求打開各主題的詳細指南。',
 img_alt=None, credit=None,
 summary=['適合當作行程彈性高的據點，餐廳、購物和夜生活都在附近。', '西面站是地鐵 1 號線與 2 號線的轉乘站，到南浦洞和海雲台都不用轉車。', '缺點是氣氛熱鬧、都市感強，不是悠閒的海邊住宿。'],
 body='''<h2 id="who-is-it-for">適合住西面嗎？</h2>
<p>如果行程分散在釜山各區，或希望飯店附近有很多餐廳和商店，西面很適合。地鐵方便，跨區移動輕鬆。</p>
<p>如果海灘是旅行重點，可以比較<a href="/zh-tw/guides/haeundae-neighborhood-guide/">海雲台</a>。<a href="/zh-tw/guides/where-to-stay-busan/">住宿區域指南</a>有兩區的比較。</p>
<h2 id="getting-there">交通方式與區內移動</h2>
<ul><li><strong>從金海機場：</strong>常見路線是搭輕軌到沙上，再轉地鐵 2 號線。和計程車、機場巴士的比較請看<a href="/zh-tw/guides/airport-to-seomyeon/">金海機場到西面</a>。機場官網資訊於 2026 年 11 月 5 日確認。</li>
<li><strong>從釜山站（KTX）：</strong>地鐵 1 號線直達西面，不用轉車。</li>
<li><strong>區內移動：</strong>1 號線往南浦洞、東萊，2 號線往海雲台。另請參考<a href="/zh-tw/guides/transit-card/">交通卡指南</a>。</li></ul>
<h2 id="where-to-stay">住宿怎麼選</h2>
<p>西面商圈很大。即使飯店寫著「西面」，也可能離車站較遠或要爬坡，請確認從車站出口走過去的路線。</p>
<p>和海雲台、廣安里的比較請看<a href="/zh-tw/guides/where-to-stay-busan/">釜山住宿區域指南</a>。</p>
<h2 id="eat">吃什麼</h2>
<ul><li>先從<a href="/zh-tw/guides/local-food-by-neighborhood/#section-1">分區美食指南的西面段落</a>開始。</li>
<li>釜山代表料理的故事：<a href="/zh-tw/guides/busan-dwaeji-gukbap-history/">豬肉湯飯</a>與<a href="/zh-tw/guides/busan-milmyeon-history/">小麥冷麵</a>。</li>
<li>點餐前可以先看<a href="/zh-tw/guides/food-etiquette/">用餐禮儀</a>。</li></ul>
<h2 id="day-plans">從西面出發的一日行程</h2>
<ul><li><strong>搭 1 號線往南：</strong><a href="/zh-tw/guides/jagalchi-market/">札嘎其市場</a>與南浦洞，或<a href="/zh-tw/guides/busan-station-local-walk/">釜山站到南浦的散步路線</a>。</li>
<li><strong>搭 1 號線往北：</strong><a href="/zh-tw/guides/dongnae-hot-spring-half-day/">東萊溫泉半日遊</a>或<a href="/zh-tw/guides/beomeosa-food-guide/">梵魚寺周邊</a>。</li>
<li><strong>搭 2 號線往東：</strong><a href="/zh-tw/guides/haeundae-neighborhood-guide/">海雲台</a>與廣安里。</li></ul>
<p>記得確認回程路線和末班車。<a href="/zh-tw/guides/three-days/">三天行程</a>依區域整理了這些地點。</p>''',
 faq=[('第一次去釜山住西面好嗎？', '如果行程分散在市區各處，西面很方便。它是地鐵 1 號線與 2 號線的交會點，到南浦洞和海雲台都不用轉車。'),
      ('從金海機場怎麼去西面？', '常見路線是搭輕軌到沙上，再轉地鐵 2 號線到西面。行李多或深夜抵達時，也可以比較計程車或機場巴士。')],
 related=[('/zh-tw/guides/where-to-stay-busan/', '釜山住宿區域指南'), ('/zh-tw/guides/three-days/', '釜山三天行程'), ('/zh-tw/guides/haeundae-neighborhood-guide/', '海雲台區域指南')])


def alt_links(slug):
    en = f'{B}/guides/{slug}/'
    return (f'<link rel="alternate" hreflang="en" href="{en}"><link rel="alternate" hreflang="ja" href="{B}/ja/guides/{slug}/">'
            f'<link rel="alternate" hreflang="zh-TW" href="{B}/zh-tw/guides/{slug}/"><link rel="alternate" hreflang="x-default" href="{en}">')

for (loc, area), h in H.items():
    u = UI[loc]
    slug = f'{area}-neighborhood-guide'
    url = f'{B}/{loc}/guides/{slug}/'
    img = HAEUNDAE_IMG if area == 'haeundae' else None
    og = img or OG_SEOMYEON
    ogalt = h['img_alt'] or ('影島から見た釜山港大橋' if loc == 'ja' else '從影島看釜山港大橋')
    art = {"@context": "https://schema.org", "@type": "Article", "@id": url + "#article", "headline": h['h1'], "description": h['desc'], "image": og,
           "mainEntityOfPage": {"@type": "WebPage", "@id": url}, "author": {"@type": "Organization", "@id": B + "/#organization", "name": "Go2Busan"},
           "publisher": {"@type": "Organization", "@id": B + "/#organization", "name": "Go2Busan", "url": B + "/"}, "inLanguage": u['lang']}
    bc = {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": u['home'], "item": f'{B}/{loc}/'},
        {"@type": "ListItem", "position": 2, "name": u['guides'], "item": f'{B}/{loc}/guides/'},
        {"@type": "ListItem", "position": 3, "name": h['crumb'], "item": url}]}
    cover = (f'<figure class="article-cover shell"><img src="{img}" alt="{e(h["img_alt"])}" width="1600" height="1067" fetchpriority="high" decoding="async">'
             f'<figcaption>{e(h["img_alt"])}。{h["credit"]}</figcaption></figure>') if img else ''
    faq = ''.join(f'<details><summary>{e(q)}</summary><p>{e(a)}</p></details>' for q, a in h['faq'])
    rel = ''.join(f'<li><a href="{x}">{e(t)}</a></li>' for x, t in h['related'])
    summ = ''.join(f'<li>{e(s)}</li>' for s in h['summary'])
    o_loc, o_name, o_lang = u['other']
    meta = ''.join(f'<span>{e(m)}</span>' for m in u['meta'])
    page = f'''<!doctype html>
<html lang="{u['lang']}">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>{e(h['title'])} | Go2Busan</title>
<meta name="description" content="{e(h['desc'])}">
<link rel="canonical" href="{url}">
{alt_links(slug)}
<link rel="stylesheet" href="/assets/styles.css"><link rel="icon" href="/favicon.svg" type="image/svg+xml">
<meta property="og:site_name" content="Go2Busan"><meta property="og:type" content="article"><meta property="og:locale" content="{u['og']}">
<meta property="og:title" content="{e(h['title'])}">
<meta property="og:description" content="{e(h['desc'])}">
<meta property="og:url" content="{url}">
<meta property="og:image" content="{og}">
<meta property="og:image:alt" content="{e(ogalt)}">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="{e(h['title'])}">
<meta name="twitter:description" content="{e(h['desc'])}">
<meta name="twitter:image" content="{og}">
<script type="application/ld+json">{json.dumps(art, ensure_ascii=False)}</script>
<script type="application/ld+json">{json.dumps(bc, ensure_ascii=False)}</script>
</head>
<body><a class="skip-link" href="#main">{u['skip']}</a>
<header class="site-header"><div class="shell nav-wrap"><a class="brand" href="/{loc}/"><span class="brand-mark brand-mark-image"><img src="/assets/go2busan-mark.svg" alt=""></span><span>Go2Busan</span></a><nav aria-label="{u['nav']}"><a href="/{loc}/guides/">{u['guides']}</a><a href="/about.html">{u['about']}</a></nav><div style="display:flex;gap:8px;align-items:center"><a class="language-pill" href="/guides/{slug}/" lang="en">EN</a><a class="language-pill" href="/{o_loc}/guides/{slug}/" lang="{o_lang}">{o_name}</a></div></div></header>
<main id="main">
<section class="article-hero shell"><div class="breadcrumbs"><a href="/{loc}/">{u['home']}</a> / <a href="/{loc}/guides/">{u['guides']}</a> / {e(h['crumb'])}</div><p class="eyebrow">{e(h['eyebrow'])}</p><h1>{e(h['h1'])}</h1><p class="article-deck">{e(h['deck'])}</p><div class="article-meta">{meta}</div></section>
<section class="quick-summary shell" aria-label="{u['summary']}"><p class="quick-summary-title">{u['summary']}</p><ul>{summ}</ul></section>
{cover}
<div class="shell article-layout"><article class="article-body">
{h['body']}
</article></div>
<section class="shell guide-faq" aria-labelledby="guide-faq-title"><h2 id="guide-faq-title">{u['faq']}</h2>{faq}</section>
<section class="shell" style="padding:0 0 48px"><h2>{u['related']}</h2><ul>{rel}</ul><p><a href="/{loc}/guides/">{u['all']}</a></p></section>
</main>
<footer class="site-footer"><div class="shell"><p>{u['footer']}</p><div class="footer-links"><a href="/guides/{slug}/">English</a><a href="/ja/guides/{slug}/">日本語</a><a href="/zh-tw/guides/{slug}/">繁體中文</a><a href="/about.html">{u['about']}</a><a href="/privacy.html">{u['privacy']}</a> <a href="/disclosure.html">{u['disc']}</a></div></div></footer>
<script defer src="/assets/js/analytics.js"></script>
</body></html>
'''
    os.makedirs(f'{loc}/guides/{slug}', exist_ok=True)
    open(f'{loc}/guides/{slug}/index.html', 'w').write(page)
    print('wrote', loc, slug, len(h['title']) + 10)

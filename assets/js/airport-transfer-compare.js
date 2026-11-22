(() => {
  "use strict";
  const root = document.querySelector(".airport-transfer-tool");
  if (!root) return;
  const app = root.querySelector(".airport-transfer-app");
  const locale = root.dataset.locale || "en";
  const destination = root.dataset.destination || "haeundae";
  const copy = {
    en:{eyebrow:"AIRPORT TRANSFER PLANNER",title:"Compare your airport options",intro:"Estimate the cost and check which options fit your arrival, group and luggage.",loading:"Loading current fare data…",noscript:"Enable JavaScript to use the comparison tool. The transport guidance on this page remains available below.",arrival:"Flight arrival time",buffer:"Immigration & baggage buffer",people:"Passengers",bags:"Large suitcases",terminal:"Arrival terminal",international:"International",domestic:"Domestic",minutes:"minutes",calculate:"Compare options",exit:"Estimated time you leave the terminal",transit:"Light rail + Metro",limo:"Airport limousine",taxi:"Standard taxi estimate",shuttle:"Shared airport shuttle",private:"Pre-booked vehicle",from:"from",perPerson:"per person",perVehicle:"per vehicle",available:"Listed service window",notAvailable:"No listed departure after your estimated exit time",checkLive:"Check the live timetable and the onward connection at Sasang; a fixed current last-train time could not be verified.",branch:"For Haeundae, check the Jangsan / Gijang branch and the stop for your hotel.",taxiNote:"Published airport estimate, not a quote. Meter, traffic, tolls and night surcharge can change the fare.",twoTaxis:"For 5–6 passengers, allow for two standard taxis.",luggageNote:"Confirm boot space before choosing a standard taxi, especially with several large cases.",shuttleRule:"Choose a shuttle slot at least 2 hours after your flight arrival. Eligible hotels only in Haeundae-gu / Suyeong-gu; one 26-inch case plus one small carry-on per passenger.",noShuttle:"No listed shuttle slot meets the 2-hour arrival rule. Check another date or use a different option.",terminalNote:"The shuttle meeting point is at the international terminal, 1st floor. If you arrive domestically, confirm the terminal transfer before booking.",privateNote:"Klook shows vehicle choices from 5 to 13 seats. Check a live quote, vehicle capacity and pickup conditions; availability is not guaranteed.",cheapest:"Lowest listed KRW fare",convenient:"Most direct / convenient option",unavailable:"Not available under the selected time",dataDate:"Fare data checked",sources:"Official fare and timetable sources",open:"Check availability on Klook ↗",live:"Check official timetable ↗",warning:"Planning estimate only. Recheck the live service and final price on your travel date."},
    ja:{eyebrow:"空港アクセス比較",title:"空港からの移動手段を比較",intro:"到着時刻、人数、荷物に合わせて料金と利用条件を確認できます。",loading:"運賃データを読み込んでいます…",noscript:"比較ツールにはJavaScriptが必要です。下の交通案内はそのままご利用いただけます。",arrival:"フライト到着時刻",buffer:"入国・手荷物の所要時間",people:"人数",bags:"大型スーツケース",terminal:"到着ターミナル",international:"国際線",domestic:"国内線",minutes:"分",calculate:"交通手段を比較",exit:"ターミナルを出る予想時刻",transit:"軽電鉄＋地下鉄",limo:"空港リムジンバス",taxi:"一般タクシーの目安",shuttle:"相乗り空港シャトル",private:"事前予約の送迎車",from:"目安",perPerson:"1人あたり",perVehicle:"車両1台あたり",available:"公表されている運行時間",notAvailable:"ターミナルを出る予想時刻以降の便はありません",checkLive:"空港駅の出発時刻と沙上駅での地下鉄接続を当日に確認してください。現在の最終電車時刻を固定値として確認できませんでした。",branch:"海雲台方面は長山行き／機張行きの系統とホテル最寄り停留所を確認してください。",taxiNote:"空港公表の概算で、確定料金ではありません。メーター、渋滞、通行料、深夜割増で変わります。",twoTaxis:"5〜6人の場合、一般タクシーは2台を想定してください。",luggageNote:"大型荷物が複数ある場合は、一般タクシーのトランク容量を事前に確認してください。",shuttleRule:"フライト到着から2時間以上後の便を選択してください。対象は海雲台区／水営区のホテルのみ。26インチのスーツケース1個と小型手荷物1個までです。",noShuttle:"到着から2時間後の条件を満たすシャトル便がありません。別の日程または他の交通手段をご確認ください。",terminalNote:"シャトルの集合場所は国際線ターミナル1階です。国内線到着の場合はターミナル間の移動方法を予約前に確認してください。",privateNote:"Klookでは5〜13人乗りの車両が表示されます。人数・荷物に合う車両、見積もり、集合条件を確認してください。利用可能とは限りません。",cheapest:"表示料金が最も安い選択肢",convenient:"乗り換えが少なく便利な選択肢",unavailable:"選択した時刻では利用できない便",dataDate:"運賃確認日",sources:"公式運賃・時刻表の出典",open:"Klookで空き状況を確認 ↗",live:"公式時刻表を確認 ↗",warning:"計画用の目安です。利用日当日の運行状況と最終料金を再確認してください。"},
    "zh-TW":{eyebrow:"機場交通比較",title:"比較從機場前往飯店的方式",intro:"依抵達時間、同行人數與行李，估算費用並確認搭乘條件。",loading:"正在載入最新票價資料…",noscript:"比較工具需要啟用 JavaScript。下方交通指南仍可正常閱讀。",arrival:"航班抵達時間",buffer:"入境與領取行李預留時間",people:"同行人數",bags:"大型行李箱",terminal:"抵達航廈",international:"國際線",domestic:"國內線",minutes:"分鐘",calculate:"比較交通方式",exit:"預計離開航廈時間",transit:"輕軌＋地鐵",limo:"機場利木津巴士",taxi:"一般計程車估價",shuttle:"機場共乘接駁",private:"預約接送車",from:"起",perPerson:"每人",perVehicle:"每輛車",available:"官方列出的服務時段",notAvailable:"預計離開航廈時間後已無列出的班次",checkLive:"請在搭乘當日確認機場站末班車，以及沙上站轉乘地鐵的時間；目前無法可靠確認固定末班車時間。",branch:"前往海雲台請確認長山／機張路線分支，以及飯店附近的停靠站。",taxiNote:"此為機場公布的估算金額，並非固定報價。實際費用會受跳表、路況、通行費與深夜加成影響。",twoTaxis:"5 至 6 人同行時，請預留搭乘兩輛一般計程車。",luggageNote:"大型行李較多時，請先確認一般計程車的後車廂空間。",shuttleRule:"請選擇航班抵達至少 2 小時後的接駁班次。僅適用英文地址列有海雲台區／水營區的飯店；每人限 1 件 26 吋行李箱及 1 件小型隨身行李。",noShuttle:"沒有符合抵達 2 小時後條件的接駁班次，請改選其他日期或交通方式。",terminalNote:"接駁集合地點在國際航廈 1 樓。若從國內線抵達，預訂前請先確認航廈間的移動方式。",privateNote:"Klook 顯示 5 至 13 人座車型。請依人數與行李確認車型、即時報價及集合方式；不保證所有時段都有車。",cheapest:"目前可比較的最低韓元票價",convenient:"轉乘較少、較方便的選擇",unavailable:"依所選時間無法搭乘的班次",dataDate:"票價確認日期",sources:"官方票價與時刻表來源",open:"在 Klook 查看可預約時段 ↗",live:"查看官方時刻表 ↗",warning:"僅供行前估算。請於搭乘日再次確認營運狀況與最終價格。"}
  };
  const t=copy[locale]||copy.en;
  const money=(n)=>"₩"+Math.round(n).toLocaleString(locale==="en"?"en-US":locale==="ja"?"ja-JP":"zh-TW");
  const esc=(s)=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
  const timeToMin=(s)=>{const [h,m]=s.split(":").map(Number);return h*60+m;};
  const minToTime=(n)=>{n=((n%1440)+1440)%1440;return String(Math.floor(n/60)).padStart(2,"0")+":"+String(n%60).padStart(2,"0");};
  const affiliate=(url,id)=>"https://affiliate.klook.com/redirect?aid=141680&amp;aff_adid=1546323&amp;k_site="+encodeURIComponent(url);
  fetch("/assets/data/airport-transfer-fares.json").then(r=>{if(!r.ok)throw new Error("fare data unavailable");return r.json();}).then(data=>{
    const d=data.destinations[destination];
    const lang=locale==="zh-TW"?"zh-TW":locale;
    const shuttle=data.shared_shuttle.url[lang];
    const privateUrl=data.private_transfer.url[lang];
    const fare=d.transit_card_fare_krw;
    const limo=d.limousine;
    const taxiBase=d.taxi_estimate_krw;
    const labels={arrival:t.arrival,buffer:t.buffer,people:t.people,bags:t.bags,terminal:t.terminal};
    app.innerHTML=`
      <div class="airport-transfer-fields">
        <label>${esc(labels.arrival)}<input id="at-arrival" type="time" value="18:00"></label>
        <label>${esc(labels.buffer)}<select id="at-buffer"><option value="20">20 ${t.minutes}</option><option value="40" selected>40 ${t.minutes}</option><option value="60">60 ${t.minutes}</option><option value="80">80 ${t.minutes}</option></select></label>
        <label>${esc(labels.people)}<select id="at-people">${[1,2,3,4,5,6].map(n=>`<option value="${n}" ${n===2?"selected":""}>${n}</option>`).join("")}</select></label>
        <label>${esc(labels.bags)}<select id="at-bags">${[0,1,2,3,4,5,6].map(n=>`<option value="${n}" ${n===2?"selected":""}>${n}</option>`).join("")}</select></label>
        <label>${esc(labels.terminal)}<select id="at-terminal"><option value="international">${t.international}</option><option value="domestic">${t.domestic}</option></select></label>
      </div>
      <div class="airport-transfer-actions"><button type="button" class="button" id="at-calculate">${t.calculate}</button><p class="microcopy">${t.warning}</p></div>
      <div id="at-results" class="airport-transfer-results" aria-live="polite"></div>
      <details class="airport-transfer-sources"><summary>${t.sources}</summary><ul>${data.sources.map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.name)}</a> · ${esc(s.checked_on)}</li>`).join("")}</ul><p>${t.dataDate}: ${esc(data.checked_on)}</p></details>`;
    const calculate=()=>{
      const arrival=document.getElementById("at-arrival").value||"18:00";
      const buffer=Number(document.getElementById("at-buffer").value);
      const people=Number(document.getElementById("at-people").value);
      const bags=Number(document.getElementById("at-bags").value);
      const terminal=document.getElementById("at-terminal").value;
      const exitMin=timeToMin(arrival)+buffer;
      const exitTime=minToTime(exitMin);
      const isLate=(timeToMin(exitTime)>=23*60||timeToMin(exitTime)<4*60);
      let surcharge=0;
      if(timeToMin(exitTime)>=23*60&&timeToMin(exitTime)<1440)surcharge=.2;
      else if(timeToMin(exitTime)>=0&&timeToMin(exitTime)<120)surcharge=.3;
      else if(timeToMin(exitTime)>=120&&timeToMin(exitTime)<240)surcharge=.2;
      const taxiCount=Math.ceil(people/data.taxi.standard_capacity_passengers);
      const taxiFare=taxiBase*(1+surcharge)*taxiCount;
      const exitClockMin=exitMin%1440;
      const limoOk=exitClockMin>=timeToMin(limo.first_departure)&&exitClockMin<=timeToMin(limo.last_departure);
      const slots=d.shuttle?d.shuttle.airport_slots.filter(s=>timeToMin(s)>=timeToMin(arrival)+d.shuttle.min_hours_after_flight*60):[];
      const slot=slots[0]||null;
      const transitFare=fare*people;
      const limoFare=limo.fare_krw*people;
      const results=[];
      results.push({name:t.transit,price:money(transitFare),sub:t.checkLive,note:bags>people?t.luggageNote:"",kind:"transit",rank:transitFare});
      results.push({name:t.limo,price:limoOk?money(limoFare):t.notAvailable,sub:limoOk?`${t.available}: ${limo.first_departure}–${limo.last_departure}`:t.branch,note:destination==="haeundae"?t.branch:"",kind:"limo",rank:limoOk?limoFare:null});
      results.push({name:t.taxi,price:`${money(taxiBase*(1+surcharge))} × ${taxiCount}`,sub:t.taxiNote,note:people>4?t.twoTaxis:"",extra:bags>=3?t.luggageNote:"",kind:"taxi",rank:taxiFare});
      if(d.shuttle) results.push({name:t.shuttle,price:slot?`from US$${d.shuttle.fare_from_usd.toFixed(2)} ${t.perPerson}`:t.noShuttle,sub:t.shuttleRule,note:terminal==="domestic"?t.terminalNote:"",kind:"shuttle",rank:null,slot});
      results.push({name:t.private,price:t.privateNote,sub:t.private_transfer_note||"",kind:"private",rank:null});
      const ranked=results.filter(x=>x.rank!==null).sort((a,b)=>a.rank-b.rank);
      const cheapest=ranked[0]?.kind;
      const cards=results.map(x=>`<article class="airport-transfer-option ${x.kind===cheapest?"is-cheapest":""}"><div class="airport-transfer-option-head"><h3>${esc(x.name)}</h3><strong>${esc(x.price)}</strong></div><p>${esc(x.sub||"")}</p>${x.note?`<p class="airport-transfer-note">${esc(x.note)}</p>`:""}${x.extra?`<p class="airport-transfer-note">${esc(x.extra)}</p>`:""}${x.slot?`<p class="airport-transfer-note">${esc(t.available)}: ${x.slot}</p>`:""}${x.kind==="transit"?`<a href="https://work.humetro.busan.kr/homepage/english/page/subLocation.do?menu_no=10060108" target="_blank" rel="noopener noreferrer">${t.live}</a>`:x.kind==="private"||x.kind==="shuttle"?`<a class="pass-cta-primary" data-cta-id="airport-compare-${x.kind}" data-affiliate-product="pickup" href="${affiliate(x.kind==="private"?privateUrl:shuttle)}" target="_blank" rel="sponsored nofollow noopener noreferrer">${t.open}</a>`:""}</article>`).join("");
      const unavailable=results.filter(x=>(x.kind==="limo"&&!limoOk)||(x.kind==="shuttle"&&!slot));
      const cheapestLabel=ranked.length?`${t.cheapest}: ${ranked[0].name} (${money(ranked[0].rank)})`:t.cheapest;
      const unavailableLabel=unavailable.length?`${t.unavailable}: ${unavailable.map(x=>x.name).join(", ")}`:"";
      document.getElementById("at-results").innerHTML=`<p class="airport-transfer-exit">${t.exit}: <strong>${exitTime}</strong></p><div class="airport-transfer-summary"><p><strong>${esc(cheapestLabel)}</strong></p><p><strong>${esc(t.convenient)}:</strong> ${esc(t.private)}</p>${unavailableLabel?`<p><strong>${esc(unavailableLabel)}</strong></p>`:""}</div><div class="airport-transfer-option-grid">${cards}</div><p class="airport-transfer-note">${t.warning}</p>`;
    };
    document.getElementById("at-calculate").addEventListener("click",calculate);
    ["at-arrival","at-buffer","at-people","at-bags","at-terminal"].forEach(id=>document.getElementById(id).addEventListener("change",calculate));
    calculate();
    root.querySelector("[data-i18n=eyebrow]").textContent=t.eyebrow;
    root.querySelector("[data-i18n=title]").textContent=t.title;
    root.querySelector("[data-i18n=intro]").textContent=t.intro;
    root.querySelector("noscript").textContent=t.noscript;
  }).catch(()=>{
    app.innerHTML='<p>Fare data could not be loaded. Please use the transport guidance below and check official sources.</p>';
  });
})();

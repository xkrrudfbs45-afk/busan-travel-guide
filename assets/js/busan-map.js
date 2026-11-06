/* Go2Busan curated map (/guides/busan-map/).
 * Uses the free Google Maps Embed API only, and only after the visitor asks to
 * load it. Without a configured key the page stays a filterable list with
 * Google Maps links, so nothing breaks.
 */
(function () {
  'use strict';
  var root = document.querySelector('[data-map-panel]');
  if (!root) return;

  var language = (document.documentElement.lang || 'en').toLowerCase();
  var mapCopy = language.indexOf('ja') === 0
    ? {
        frameTitle: '選択した釜山の場所のGoogleマップ',
        unavailable: '現在、インタラクティブマップを利用できません。各スポットのリンクからGoogleマップを開けます。',
        busan: '釜山',
        placeSuffix: 'か所'
      }
    : (language.indexOf('zh-tw') === 0 || language.indexOf('zh-hant') === 0
      ? {
          frameTitle: '所選釜山地點的 Google 地圖',
          unavailable: '互動地圖目前無法使用。您仍可透過下方各地點連結開啟 Google 地圖。',
          busan: '釜山',
          placeSuffix: ' 個地點'
        }
      : {
          frameTitle: 'Google Map of the selected Busan place',
          unavailable: 'The interactive map is not available right now. Every place below still opens in Google Maps.',
          busan: 'Busan',
          placeSuffix: ' places'
        });

  var meta = document.querySelector('meta[name="g2b-maps-embed-key"]');
  var key = meta ? (meta.getAttribute('content') || '').trim() : '';
  var hasKey = /^AIza[0-9A-Za-z_-]{35}$/.test(key);
  var placeholder = root.querySelector('[data-map-placeholder]');
  var status = root.querySelector('[data-map-status]');
  var loadBtn = root.querySelector('[data-map-load]');
  var note = root.querySelector('[data-map-note]');
  var current = root.querySelector('[data-map-current]');
  var places = Array.prototype.slice.call(document.querySelectorAll('.g2b-place'));
  var frame = null;
  var BUSAN = '35.1379,129.0756';

  function track(name, params) {
    try {
      if (typeof window.gtag === 'function') {
        window.gtag('event', name, Object.assign({ page_location: window.location.href }, params || {}));
      }
    } catch (e) { /* analytics is optional */ }
  }

  function embedUrl(query) {
    var base = 'https://www.google.com/maps/embed/v1/';
    if (!query) return base + 'view?key=' + encodeURIComponent(key) + '&center=' + BUSAN + '&zoom=11';
    return base + 'place?key=' + encodeURIComponent(key) + '&q=' + encodeURIComponent(query) +
      '&language=' + encodeURIComponent(language.indexOf('ja') === 0 ? 'ja' : (language.indexOf('zh-tw') === 0 || language.indexOf('zh-hant') === 0 ? 'zh-TW' : 'en')) +
      '&region=KR';
  }

  function loadMap(query, label) {
    if (!hasKey) return false;
    if (!frame) {
      frame = document.createElement('iframe');
      frame.className = 'g2b-map-frame';
      frame.title = mapCopy.frameTitle;
      frame.loading = 'lazy';
      frame.referrerPolicy = 'no-referrer-when-downgrade';
      frame.setAttribute('allowfullscreen', '');
      placeholder.replaceWith(frame);
      note.hidden = false;
      places.forEach(function (p) {
        var b = p.querySelector('[data-map-show]');
        if (b) b.hidden = false;
      });
    }
    frame.src = embedUrl(query);
    current.textContent = label || mapCopy.busan;
    return true;
  }

  if (hasKey) {
    loadBtn.hidden = false;
    loadBtn.addEventListener('click', function () {
      loadMap('', mapCopy.busan);
      track('map_load', { map_source: 'button' });
    });
  } else {
    status.textContent = mapCopy.unavailable;
  }

  places.forEach(function (p) {
    var show = p.querySelector('[data-map-show]');
    var heading = p.querySelector('h3');
    var name = heading ? heading.firstChild.textContent.trim() : '';
    if (show) {
      show.addEventListener('click', function () {
        if (!loadMap(p.getAttribute('data-query'), name)) return;
        places.forEach(function (o) { o.classList.toggle('is-selected', o === p); });
        track('map_place_select', { place_name: name, place_area: p.getAttribute('data-area') });
        if (window.matchMedia('(max-width: 899px)').matches) {
          root.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }
    var dir = p.querySelector('[data-map-directions]');
    if (dir) dir.addEventListener('click', function () {
      track('map_directions_click', { place_name: name, place_area: p.getAttribute('data-area') });
    });
  });

  /* Filters */
  var area = 'all';
  var cat = 'all';
  var count = document.querySelector('[data-map-count]');
  var empty = document.querySelector('[data-map-empty]');

  function apply() {
    var n = 0;
    places.forEach(function (p) {
      var ok = (area === 'all' || p.getAttribute('data-area') === area) &&
        (cat === 'all' || p.getAttribute('data-cat') === cat);
      p.hidden = !ok;
      if (ok) n++;
    });
    count.textContent = n + (language.indexOf('ja') === 0 ? mapCopy.placeSuffix :
      (language.indexOf('zh-tw') === 0 || language.indexOf('zh-hant') === 0
        ? mapCopy.placeSuffix
        : (n === 1 ? ' place' : mapCopy.placeSuffix)));
    empty.hidden = n !== 0;
  }

  function bind(attr, set) {
    var btns = Array.prototype.slice.call(document.querySelectorAll('[' + attr + ']'));
    btns.forEach(function (b) {
      b.addEventListener('click', function () {
        btns.forEach(function (o) {
          var on = o === b;
          o.classList.toggle('is-active', on);
          o.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
        set(b.getAttribute(attr));
        apply();
      });
    });
  }
  bind('data-filter-area', function (v) { area = v; });
  bind('data-filter-cat', function (v) { cat = v; });

  /* Deep links such as /guides/busan-map/?area=nampo from the neighborhood hubs */
  try {
    var qs = new URLSearchParams(window.location.search);
    ['area', 'cat'].forEach(function (k) {
      var v = qs.get(k);
      if (!v || !/^[a-z]+$/.test(v)) return;
      var b = document.querySelector('[data-filter-' + k + '="' + v + '"]');
      if (b) b.click();
    });
  } catch (e) { /* older browsers: show all places */ }
})();

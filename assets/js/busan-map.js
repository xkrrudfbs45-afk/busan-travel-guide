/* Go2Busan curated map (/guides/busan-map/).
 * Uses the free Google Maps Embed API only, and only after the visitor asks to
 * load it. Without a configured key the page stays a filterable list with
 * Google Maps links, so nothing breaks.
 */
(function () {
  'use strict';
  var root = document.querySelector('[data-map-panel]');
  if (!root) return;

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
  /* Visible strings and Google's map language follow the page language; English is the default. */
  var pageLang = (document.documentElement.getAttribute('lang') || 'en').toLowerCase();
  var T = { lang: 'en', unavailable: 'The interactive map is not available right now. Every place below still opens in Google Maps.', one: ' place', many: ' places' };
  if (pageLang.indexOf('ja') === 0) {
    T = { lang: 'ja', unavailable: 'インタラクティブマップは現在ご利用いただけません。下の各場所はGoogleマップで開けます。', one: '件', many: '件' };
  } else if (pageLang.indexOf('zh') === 0) {
    T = { lang: 'zh-TW', unavailable: '互動地圖目前無法使用，下方每個地點仍可在 Google 地圖開啟。', one: ' 個地點', many: ' 個地點' };
  }

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
    return base + 'place?key=' + encodeURIComponent(key) + '&q=' + encodeURIComponent(query) + '&language=' + T.lang + '&region=KR';
  }

  function loadMap(query, label) {
    if (!hasKey) return false;
    if (!frame) {
      frame = document.createElement('iframe');
      frame.className = 'g2b-map-frame';
      frame.title = 'Google Map of the selected Busan place';
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
    current.textContent = label || 'Busan';
    return true;
  }

  if (hasKey) {
    loadBtn.hidden = false;
    loadBtn.addEventListener('click', function () {
      loadMap('', 'Busan');
      track('map_load', { map_source: 'button' });
    });
  } else {
    status.textContent = T.unavailable;
  }

  places.forEach(function (p) {
    var show = p.querySelector('[data-map-show]');
    var name = p.querySelector('h3').firstChild.textContent.trim();
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
    count.textContent = n + (n === 1 ? T.one : T.many);
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

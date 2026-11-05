/* Go2Busan trip helpers: header search on every page, saved guides, mobile quick bar, table scroll hints.
   No tracking of its own beyond window.gtag (present only after analytics consent). Search text is never sent anywhere. */
(() => {
  'use strict';
  const doc = document;
  const lang = (doc.documentElement.lang || 'en').toLowerCase();
  const loc = lang.startsWith('ja') ? 'ja' : (lang.includes('zh') ? 'tw' : 'en');
  const PREFIX = { en: '', ja: '/ja', tw: '/zh-tw' }[loc];
  const T = {
    en: { search: 'Search', placeholder: 'Search guides, places, food…', close: 'Close', none: 'No matching guide yet. Try a place or dish name.', saved: 'Saved', save: 'Save guide', unsave: 'Saved ✓', savedTitle: 'Your saved guides', savedEmpty: 'Tap “Save guide” on any guide to keep it here for your trip. Saved on this device only.', remove: 'Remove', home: 'Home', guides: 'Guides', swipe: 'Swipe to see more →', savedToast: 'Saved to your trip list', removedToast: 'Removed from your trip list', recent: 'Recently viewed', popular: 'Start with these', copyList: 'Copy list to share', copied: 'List copied' },
    ja: { search: '検索', placeholder: 'ガイド・場所・料理を検索…', close: '閉じる', none: '該当するガイドがありません。地名や料理名で試してください。', saved: '保存済み', save: 'ガイドを保存', unsave: '保存済み ✓', savedTitle: '保存したガイド', savedEmpty: '各ガイドの「ガイドを保存」を押すと、ここに一覧表示されます（この端末のみに保存）。', remove: '削除', home: 'ホーム', guides: 'ガイド', swipe: '横にスクロールできます →', savedToast: '旅行リストに保存しました', removedToast: '旅行リストから削除しました', recent: '最近見たガイド', popular: 'まずはこちら', copyList: 'リストをコピーして共有', copied: 'リストをコピーしました' },
    tw: { search: '搜尋', placeholder: '搜尋指南、地點、美食…', close: '關閉', none: '找不到相符的指南，試試地名或料理名稱。', saved: '已收藏', save: '收藏指南', unsave: '已收藏 ✓', savedTitle: '我收藏的指南', savedEmpty: '在任何指南按「收藏指南」，就會出現在這裡（只儲存在這台裝置）。', remove: '移除', home: '首頁', guides: '指南', swipe: '可左右滑動查看 →', savedToast: '已加入旅行清單', removedToast: '已從旅行清單移除', recent: '最近瀏覽', popular: '先從這些開始', copyList: '複製清單分享', copied: '已複製清單' },
  }[loc];
  const send = (name, params) => { if (typeof window.gtag === 'function') window.gtag('event', name, Object.assign({ guide_locale: loc === 'tw' ? 'zh-TW' : loc }, params || {})); };
  const el = (tag, attrs, text) => { const n = doc.createElement(tag); Object.entries(attrs || {}).forEach(([k, v]) => n.setAttribute(k, v)); if (text) n.textContent = text; return n; };
  const path = location.pathname;
  const isGuide = /^\/(?:ja\/|zh-tw\/)?guides\/[^/]+\/?$/.test(path);
  const isHome = /^\/(?:ja\/|zh-tw\/)?$/.test(path);
  const KEY = 'g2b-saved-guides-v1';
  const store = {
    get() { try { const v = JSON.parse(window.localStorage.getItem(KEY) || '[]'); return Array.isArray(v) ? v : []; } catch (_) { return []; } },
    set(v) { try { window.localStorage.setItem(KEY, JSON.stringify(v.slice(0, 60))); } catch (_) { /* storage blocked */ } },
  };
  const RKEY = 'g2b-recent-guides-v1';
  const recent = {
    get() { try { const v = JSON.parse(window.localStorage.getItem(RKEY) || '[]'); return Array.isArray(v) ? v : []; } catch (_) { return []; } },
    push(g) { try { const v = recent.get().filter((x) => x.url !== g.url); v.unshift({ url: g.url, title: g.title }); window.localStorage.setItem(RKEY, JSON.stringify(v.slice(0, 8))); } catch (_) { /* blocked */ } },
  };
  let toastEl;
  const toast = (msg) => {
    if (!toastEl) { toastEl = el('div', { class: 'g2b-toast', role: 'status', 'aria-live': 'polite' }); doc.body.appendChild(toastEl); }
    toastEl.textContent = msg; toastEl.classList.add('is-on');
    clearTimeout(toast.t); toast.t = setTimeout(() => toastEl.classList.remove('is-on'), 2200);
  };

  // ---------- Search overlay ----------
  let indexPromise;
  const getIndex = () => indexPromise || (indexPromise = fetch('/assets/data/search-index.json', { credentials: 'same-origin' })
    .then((r) => (r.ok ? r.json() : [])).then((a) => (Array.isArray(a) ? a : [])).catch(() => []));
  const norm = (v) => String(v || '').normalize('NFKD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
  const inLocale = (u) => (loc === 'en' ? !/^\/(ja|zh-tw)\//.test(u) : u.startsWith(PREFIX + '/'));
  function search(items, q) {
    const query = norm(q); if (!query) return [];
    const terms = query.split(' ').filter(Boolean);
    return items.filter((it) => inLocale(it.url || '')).map((it) => {
      const title = norm(it.title), sum = norm(it.summary), tags = norm((it.tags || []).join(' ')), all = `${title} ${sum} ${tags}`;
      let s = title.includes(query) ? 30 : 0;
      for (const t of terms) { if (!all.includes(t)) return null; if (title.includes(t)) s += 10; if (tags.includes(t)) s += 5; if (sum.includes(t)) s += 2; }
      return { it, s };
    }).filter(Boolean).sort((a, b) => b.s - a.s).slice(0, 8).map((x) => x.it);
  }
  const POPULAR = {
    en: ['/guides/busan-first-time-guide/', '/guides/gimhae-airport-to-haeundae/', '/guides/where-to-stay-busan/', '/guides/busan-three-days/', '/guides/busan-transit-card/'],
    ja: ['/ja/guides/first-trip/', '/ja/guides/airport-to-haeundae/', '/ja/guides/where-to-stay-busan/', '/ja/guides/three-days/', '/ja/guides/transit-card/'],
    tw: ['/zh-tw/guides/first-trip/', '/zh-tw/guides/airport-to-haeundae/', '/zh-tw/guides/where-to-stay-busan/', '/zh-tw/guides/three-days/', '/zh-tw/guides/transit-card/'],
  };
  let dialog;
  function openSearch() {
    if (!dialog) {
      dialog = el('div', { class: 'g2b-search', role: 'dialog', 'aria-modal': 'true', 'aria-label': T.search, hidden: '' });
      const box = el('div', { class: 'g2b-search__box' });
      const form = el('form', { class: 'g2b-search__form', role: 'search' });
      const input = el('input', { type: 'search', class: 'g2b-search__input', placeholder: T.placeholder, 'aria-label': T.placeholder, autocomplete: 'off', enterkeyhint: 'search' });
      const close = el('button', { type: 'button', class: 'g2b-search__close', 'aria-label': T.close }, '×');
      const list = el('ul', { class: 'g2b-search__results', 'aria-live': 'polite' });
      form.append(input, close); box.append(form, list); dialog.appendChild(box); doc.body.appendChild(dialog);
      const render = async () => {
        const items = await getIndex(); const q = input.value; list.textContent = '';
        let found;
        if (!norm(q)) {
          const want = POPULAR[loc]; found = want.map((u) => items.find((it) => it.url === u)).filter(Boolean);
          if (!found.length) return;
          list.appendChild(el('li', { class: 'g2b-search__label' }, T.popular));
        } else found = search(items, q);
        if (!found.length) { list.appendChild(el('li', { class: 'g2b-search__none' }, T.none)); return; }
        for (const it of found) {
          const li = el('li'); const a = el('a', { href: it.url }); a.appendChild(el('strong', {}, it.title));
          if (it.summary) a.appendChild(el('span', {}, it.summary)); li.appendChild(a); list.appendChild(li);
        }
      };
      let t; input.addEventListener('input', () => { clearTimeout(t); t = setTimeout(render, 120); });
      form.addEventListener('submit', (e) => { e.preventDefault(); const a = list.querySelector('a'); if (a) location.href = a.href; });
      close.addEventListener('click', closeSearch);
      dialog.addEventListener('click', (e) => { if (e.target === dialog) closeSearch(); });
      doc.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !dialog.hidden) closeSearch(); });
    }
    dialog.hidden = false; doc.documentElement.classList.add('g2b-lock');
    const input = dialog.querySelector('input'); setTimeout(() => input.focus(), 30);
    getIndex(); input.dispatchEvent(new Event('input')); send('search_open');
  }
  function closeSearch() { if (!dialog) return; dialog.hidden = true; doc.documentElement.classList.remove('g2b-lock'); }

  function headerSearchButton() {
    const wrap = doc.querySelector('.site-header .nav-wrap');
    if (!wrap || isHome || wrap.querySelector('.g2b-search-btn')) return;
    const b = el('button', { type: 'button', class: 'g2b-search-btn', 'aria-label': T.search });
    b.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M15.5 15.5 21 21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
    b.addEventListener('click', openSearch);
    const sv = el('button', { type: 'button', class: 'g2b-search-btn g2b-saved-btn', 'aria-label': T.saved });
    sv.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M6 3h12v18l-6-4-6 4z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg><span class="g2b-bar__badge" hidden></span>';
    sv.addEventListener('click', openSaved);
    const pills = wrap.lastElementChild;
    if (pills && pills.tagName === 'DIV' && pills.querySelector('.language-pill')) { pills.insertBefore(sv, pills.firstChild); pills.insertBefore(b, pills.firstChild); } else { wrap.insertBefore(b, pills); wrap.insertBefore(sv, pills); }
  }

  // ---------- Saved guides ----------
  function currentGuide() {
    const h1 = doc.querySelector('h1'); return { url: path.endsWith('/') ? path : path + '/', title: (h1 ? h1.textContent : doc.title).trim().slice(0, 120) };
  }
  function saveButton() {
    if (!isGuide) return;
    const anchor = doc.querySelector('.g2b-share') || doc.querySelector('.page-updated') || doc.querySelector('.article-hero h1');
    if (!anchor || doc.querySelector('.g2b-save')) return;
    const g = currentGuide();
    const b = el('button', { type: 'button', class: 'g2b-btn g2b-save', 'aria-pressed': 'false' });
    const sync = () => { const on = store.get().some((x) => x.url === g.url); b.textContent = on ? T.unsave : T.save; b.setAttribute('aria-pressed', on ? 'true' : 'false'); updateBadge(); };
    b.addEventListener('click', () => {
      const list = store.get(); const i = list.findIndex((x) => x.url === g.url);
      if (i >= 0) { list.splice(i, 1); toast(T.removedToast); } else { list.unshift({ url: g.url, title: g.title, at: Date.now() }); toast(T.savedToast); send('guide_save', { guide_path: g.url }); }
      store.set(list); sync();
    });
    if (anchor.classList.contains('g2b-share')) anchor.appendChild(b); else anchor.insertAdjacentElement('afterend', b);
    sync();
  }
  let drawer;
  function openSaved() {
    if (!drawer) {
      drawer = el('div', { class: 'g2b-search g2b-saved', role: 'dialog', 'aria-modal': 'true', 'aria-label': T.savedTitle, hidden: '' });
      const box = el('div', { class: 'g2b-search__box' });
      const head = el('div', { class: 'g2b-saved__head' }); head.appendChild(el('h2', {}, T.savedTitle));
      const close = el('button', { type: 'button', class: 'g2b-search__close', 'aria-label': T.close }, '×'); head.appendChild(close);
      const list = el('ul', { class: 'g2b-search__results' }); box.append(head, list); drawer.appendChild(box); doc.body.appendChild(drawer);
      close.addEventListener('click', () => { drawer.hidden = true; doc.documentElement.classList.remove('g2b-lock'); });
      drawer.addEventListener('click', (e) => { if (e.target === drawer) close.click(); });
      doc.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !drawer.hidden) close.click(); });
    }
    const list = drawer.querySelector('ul'); list.textContent = '';
    const items = store.get().filter((x) => inLocale(x.url));
    if (!items.length) list.appendChild(el('li', { class: 'g2b-search__none' }, T.savedEmpty));
    for (const it of items) {
      const li = el('li', { class: 'g2b-saved__item' }); const a = el('a', { href: it.url }); a.appendChild(el('strong', {}, it.title)); li.appendChild(a);
      const rm = el('button', { type: 'button', class: 'g2b-saved__rm', 'aria-label': `${T.remove}: ${it.title}` }, '×');
      rm.addEventListener('click', () => { store.set(store.get().filter((x) => x.url !== it.url)); li.remove(); updateBadge(); if (!list.children.length) list.appendChild(el('li', { class: 'g2b-search__none' }, T.savedEmpty)); });
      li.appendChild(rm); list.appendChild(li);
    }
    if (items.length) {
      const li = el('li', { class: 'g2b-saved__actions' }); const cp = el('button', { type: 'button', class: 'g2b-btn' }, T.copyList);
      cp.addEventListener('click', async () => {
        const text = store.get().filter((x) => inLocale(x.url)).map((x) => `${x.title}\n${location.origin}${x.url}`).join('\n\n');
        try { await navigator.clipboard.writeText(text); toast(T.copied); } catch (_) { /* clipboard blocked */ }
      });
      li.appendChild(cp); list.appendChild(li);
    }
    const rec = recent.get().filter((x) => inLocale(x.url) && x.url !== currentGuide().url && !items.some((i) => i.url === x.url)).slice(0, 5);
    if (rec.length) {
      list.appendChild(el('li', { class: 'g2b-saved__sub' }, T.recent));
      for (const it of rec) { const li = el('li'); const a = el('a', { href: it.url }); a.appendChild(el('strong', {}, it.title)); li.appendChild(a); list.appendChild(li); }
    }
    drawer.hidden = false; doc.documentElement.classList.add('g2b-lock'); drawer.querySelector('button').focus();
  }
  function updateBadge() {
    const n = store.get().filter((x) => inLocale(x.url)).length;
    doc.querySelectorAll('.g2b-bar__badge').forEach((b) => { b.textContent = n ? String(n) : ''; b.hidden = !n; });
  }

  // ---------- Mobile quick bar ----------
  function quickBar() {
    if (doc.querySelector('.g2b-bar')) return;
    const bar = el('nav', { class: 'g2b-bar', 'aria-label': 'Quick links' });
    const icon = (d) => `<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">${d}</svg>`;
    const items = [
      ['a', { href: PREFIX + '/' }, T.home, icon('<path d="M4 11 12 4l8 7v9h-5v-6H9v6H4z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>')],
      ['a', { href: PREFIX + '/guides/' }, T.guides, icon('<path d="M5 4h10l4 4v12H5z M9 12h6 M9 16h6" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>')],
      ['button', { type: 'button', 'data-act': 'search' }, T.search, icon('<circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M15.5 15.5 21 21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>')],
      ['button', { type: 'button', 'data-act': 'saved' }, T.saved, icon('<path d="M6 3h12v18l-6-4-6 4z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>')],
    ];
    for (const [tag, attrs, label, svg] of items) {
      const n = el(tag, Object.assign({ class: 'g2b-bar__item' }, attrs)); n.innerHTML = svg; n.appendChild(el('span', {}, label));
      if (attrs['data-act'] === 'saved') { const badge = el('span', { class: 'g2b-bar__badge', hidden: '' }); n.appendChild(badge); }
      bar.appendChild(n);
    }
    bar.addEventListener('click', (e) => {
      const b = e.target.closest('button'); if (!b) return;
      if (b.dataset.act === 'search') { if (isHome && doc.getElementById('guide-query')) { const i = doc.getElementById('guide-query'); i.scrollIntoView({ block: 'center' }); i.focus(); } else openSearch(); }
      if (b.dataset.act === 'saved') openSaved();
    });
    doc.body.appendChild(bar); doc.documentElement.classList.add('g2b-has-bar'); updateBadge();
  }

  // ---------- Table scroll hints ----------
  function tableHints() {
    doc.querySelectorAll('.table-wrap').forEach((w) => {
      if (w.dataset.hint) return; w.dataset.hint = '1';
      const check = () => w.classList.toggle('is-scrollable', w.scrollWidth > w.clientWidth + 4);
      const hint = el('p', { class: 'g2b-table-hint', 'aria-hidden': 'true' }, T.swipe); w.insertAdjacentElement('beforebegin', hint);
      check(); window.addEventListener('resize', check, { passive: true });
      w.addEventListener('scroll', () => w.classList.toggle('is-scrolled', w.scrollLeft > 8), { passive: true });
    });
  }

  // ---------- Guide directory: jump chips ----------
  function directoryChips() {
    if (!/^\/guides\/?$/.test(path)) return;
    const secs = [...doc.querySelectorAll('section.guide-directory-section[id]')];
    const first = secs[0]; if (secs.length < 3 || doc.querySelector('.g2b-dir-chips')) return;
    const nav = el('nav', { class: 'g2b-dir-chips', 'aria-label': 'Guide categories' });
    for (const s of secs) { const h = s.querySelector('h2'); if (!h) continue; const n = s.querySelectorAll('li').length; const a = el('a', { href: '#' + s.id }, h.textContent.trim() + (n ? ` (${n})` : '')); nav.appendChild(a); }
    first.insertAdjacentElement('beforebegin', nav);
  }

  function shortcuts() {
    if (isHome) return;
    doc.addEventListener('keydown', (e) => {
      if (e.key !== '/' || e.ctrlKey || e.metaKey || e.altKey) return;
      const t = e.target; if (t && (/^(input|textarea|select)$/i.test(t.tagName) || t.isContentEditable)) return;
      e.preventDefault(); openSearch();
    });
  }
  const run = () => { if (isGuide) recent.push(currentGuide()); shortcuts(); headerSearchButton(); saveButton(); quickBar(); tableHints(); directoryChips(); };
  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', run, { once: true }); else run();
})();

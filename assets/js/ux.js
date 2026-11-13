/* Go2Busan reading helpers. No tracking of its own: events are sent through window.gtag, which exists only after a visitor opts in to analytics. */
(() => {
  'use strict';
  const doc = document;
  const lang = (doc.documentElement.lang || 'en').toLowerCase();
  const loc = lang.startsWith('ja') ? 'ja' : (lang.includes('zh') ? 'tw' : 'en');
  const L = {
    en: { share: 'Share', copy: 'Copy link', copied: 'Link copied', top: 'Back to top', section: 'Copy link to this section', jump: 'Jump to a section', suggest: 'This guide is also available in English.', suggestBtn: 'Read in English', close: 'Close', cont: 'Continue reading', search: 'Search guides', ko: 'Copy Korean', koDone: 'Korean copied', show: 'Show large', fbQ: 'Was this guide helpful?', fbYes: 'Yes', fbNo: 'Not really', fbThanks: 'Thanks — your feedback helps us improve this guide.' },
    ja: { share: '共有', copy: 'リンクをコピー', copied: 'リンクをコピーしました', top: 'ページの先頭へ', section: 'このセクションのリンクをコピー', jump: 'セクションへ移動', suggest: 'この記事は日本語でも読めます。', suggestBtn: '日本語で読む', close: '閉じる', cont: '続きを読む', search: 'ガイドを検索', ko: '韓国語をコピー', koDone: '韓国語をコピーしました', show: '大きく表示', fbQ: 'このガイドは役に立ちましたか？', fbYes: 'はい', fbNo: 'いまひとつ', fbThanks: 'ありがとうございます。ガイドの改善に役立てます。' },
    tw: { share: '分享', copy: '複製連結', copied: '已複製連結', top: '回到頁首', section: '複製此段落連結', jump: '跳到段落', suggest: '這篇文章也有繁體中文版。', suggestBtn: '閱讀繁體中文版', close: '關閉', cont: '繼續閱讀', search: '搜尋指南', ko: '複製韓文', koDone: '已複製韓文', show: '放大顯示', fbQ: '這篇指南對你有幫助嗎？', fbYes: '有幫助', fbNo: '還不夠', fbThanks: '謝謝你的回饋，我們會用來改善指南。' },
  }[loc];
  const send = (name, params) => {
    if (typeof window.gtag !== 'function') return;
    window.gtag('event', name, Object.assign({ page_location: window.location.href, guide_locale: loc === 'tw' ? 'zh-TW' : loc }, params));
  };
  const store = {
    get(k) { try { return window.localStorage.getItem(k); } catch (_) { return null; } },
    set(k, v) { try { window.localStorage.setItem(k, v); } catch (_) { /* storage may be blocked */ } },
  };
  const el = (tag, attrs, text) => {
    const n = doc.createElement(tag);
    Object.keys(attrs || {}).forEach((k) => n.setAttribute(k, attrs[k]));
    if (text) n.textContent = text;
    return n;
  };
  const isGuide = /^\/(?:ja\/|zh-tw\/)?guides\/[^/]+\/?$/.test(location.pathname);
  const isHome = /^\/(?:ja\/|zh-tw\/)?$/.test(location.pathname);
  const article = doc.querySelector('.article-body');

  // Toast (polite live region) shared by copy actions.
  let toast;
  function say(text) {
    if (!toast) {
      toast = el('div', { class: 'g2b-toast', role: 'status', 'aria-live': 'polite' });
      doc.body.appendChild(toast);
    }
    toast.textContent = text;
    toast.classList.add('is-on');
    window.clearTimeout(say.t);
    say.t = window.setTimeout(() => toast.classList.remove('is-on'), 2200);
  }
  async function copy(text) {
    try { await navigator.clipboard.writeText(text); return true; } catch (_) {
      const t = el('textarea', { 'aria-hidden': 'true', tabindex: '-1' });
      t.value = text; t.style.cssText = 'position:fixed;opacity:0;top:0;left:0';
      doc.body.appendChild(t); t.select();
      let ok = false;
      try { ok = doc.execCommand('copy'); } catch (_) { ok = false; }
      t.remove();
      return ok;
    }
  }

  // 1. Share bar under the "last updated" line.
  function shareBar() {
    if (!isGuide) return;
    const anchor = doc.querySelector('.page-updated') || doc.querySelector('.article-meta');
    if (!anchor || doc.querySelector('.g2b-share')) return;
    const bar = el('div', { class: 'g2b-share' });
    const url = location.origin + location.pathname;
    const title = (doc.querySelector('h1') || {}).textContent || doc.title;
    if (navigator.share) {
      const b = el('button', { type: 'button', class: 'g2b-btn' }, L.share);
      b.addEventListener('click', () => {
        send('share_click', { method: 'native' });
        navigator.share({ title: title.trim(), url }).catch(() => {});
      });
      bar.appendChild(b);
    }
    const c = el('button', { type: 'button', class: 'g2b-btn' }, L.copy);
    c.addEventListener('click', async () => {
      send('share_click', { method: 'copy' });
      if (await copy(url)) say(L.copied);
    });
    bar.appendChild(c);
    anchor.insertAdjacentElement('afterend', bar);
  }

  // 2. Reading progress bar and back-to-top button.
  function progressAndTop() {
    if (!isGuide || !article) return;
    const bar = el('div', { class: 'g2b-progress', 'aria-hidden': 'true' });
    const top = el('button', { type: 'button', class: 'g2b-top', 'aria-label': L.top, hidden: '' }, '↑');
    top.addEventListener('click', () => window.scrollTo({ top: 0 }));
    doc.body.append(bar, top);
    let ticking = false;
    const update = () => {
      ticking = false;
      const r = article.getBoundingClientRect();
      const total = r.height - window.innerHeight * 0.6;
      const done = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 0;
      bar.style.transform = 'scaleX(' + done.toFixed(3) + ')';
      top.hidden = window.scrollY < 1200;
    };
    window.addEventListener('scroll', () => { if (!ticking) { ticking = true; window.requestAnimationFrame(update); } }, { passive: true });
    update();
  }

  // 3. Copyable section links on h2 headings that already have an id.
  function headingAnchors() {
    if (!article) return;
    article.querySelectorAll('h2[id]').forEach((h) => {
      if (h.querySelector('.g2b-anchor')) return;
      const a = el('a', { class: 'g2b-anchor', href: '#' + h.id, 'aria-label': L.section }, '#');
      a.addEventListener('click', async (e) => {
        e.preventDefault();
        history.replaceState(null, '', '#' + h.id);
        send('heading_link_copy', { target_id: h.id.slice(0, 60) });
        if (await copy(location.origin + location.pathname + '#' + h.id)) say(L.copied);
      });
      h.appendChild(a);
    });
  }

  // 4. Mobile jump menu built from the existing "In this guide" links.
  function jumpMenu() {
    if (!article) return;
    const links = [...doc.querySelectorAll('.article-aside .aside-box a[href^="#"]')];
    if (links.length < 2 || doc.querySelector('.g2b-jump')) return;
    const d = el('details', { class: 'g2b-jump' });
    d.appendChild(el('summary', {}, L.jump));
    const list = el('div', { class: 'g2b-jump-list' });
    links.forEach((a) => list.appendChild(el('a', { href: a.getAttribute('href') }, a.textContent.trim())));
    d.appendChild(list);
    list.addEventListener('click', (e) => { if (e.target.closest('a')) d.open = false; });
    article.insertAdjacentElement('afterbegin', d);
  }

  // 5. Offer the matching Japanese / Traditional Chinese page to visitors whose browser prefers it. Never redirects.
  function languageSuggestion() {
    if (loc !== 'en' || store.get('g2b_lang_dismissed') === '1') return;
    const alts = {};
    doc.querySelectorAll('link[rel="alternate"][hreflang]').forEach((l) => { alts[l.getAttribute('hreflang').toLowerCase()] = l.href; });
    const prefs = (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || '']).map((s) => String(s).toLowerCase());
    let target = null;
    for (const p of prefs) {
      if (p.startsWith('en')) break;
      if (p.startsWith('ja') && alts.ja) { target = { key: 'ja', url: alts.ja }; break; }
      if (/^zh-(tw|hant|hk|mo)/.test(p) && alts['zh-tw']) { target = { key: 'tw', url: alts['zh-tw'] }; break; }
    }
    if (!target || new URL(target.url).pathname === location.pathname) return;
    const T = target.key === 'ja'
      ? { text: 'この記事は日本語でも読めます。', btn: '日本語で読む', close: '閉じる', lang: 'ja' }
      : { text: '這篇文章也有繁體中文版。', btn: '閱讀繁體中文版', close: '關閉', lang: 'zh-TW' };
    const box = el('div', { class: 'g2b-suggest', role: 'region', lang: T.lang, 'aria-label': T.text });
    box.appendChild(el('p', {}, T.text));
    const go = el('a', { class: 'g2b-btn g2b-btn-solid', href: target.url, hreflang: T.lang }, T.btn);
    go.addEventListener('click', () => send('lang_suggest_click', { target_locale: T.lang }));
    const x = el('button', { type: 'button', class: 'g2b-close', 'aria-label': T.close }, '×');
    x.addEventListener('click', () => { store.set('g2b_lang_dismissed', '1'); box.remove(); });
    box.append(go, x);
    doc.body.appendChild(box);
  }

  // 6. Remember the last guide, and offer it on the homepage.
  function continueReading() {
    const key = 'g2b_last_guide_' + loc;
    if (isGuide) {
      const h1 = doc.querySelector('h1');
      if (h1) store.set(key, JSON.stringify({ path: location.pathname, title: h1.textContent.trim().slice(0, 120) }));
      return;
    }
    if (!isHome) return;
    let last;
    try { last = JSON.parse(store.get(key) || 'null'); } catch (_) { last = null; }
    if (!last || !last.path || !/^\/[\w\-\/]+\/$/.test(last.path)) return;
    const host = doc.querySelector('.home-content') || doc.querySelector('main');
    if (!host) return;
    const box = el('section', { class: 'shell g2b-continue', 'aria-label': L.cont });
    const a = el('a', { href: last.path });
    a.append(el('span', { class: 'g2b-continue-label' }, L.cont), el('strong', {}, last.title));
    a.addEventListener('click', () => send('continue_reading_click', { target_path: last.path }));
    box.appendChild(a);
    host.insertAdjacentElement('beforebegin', box);
  }

  // 7. Outbound link and related-guide click events (partner links keep their own events).
  function clickEvents() {
    doc.addEventListener('click', (event) => {
      const a = event.target && event.target.closest ? event.target.closest('a[href]') : null;
      if (!a) return;
      if (a.closest('.keep-exploring')) { send('related_guide_click', { target_path: new URL(a.href, location.href).pathname }); return; }
      let u; try { u = new URL(a.href, location.href); } catch (_) { return; }
      if (!/^https?:$/.test(u.protocol) || u.hostname === location.hostname) return;
      const h = u.hostname.toLowerCase();
      if (/(^|\.)(klook|agoda)\.com$/.test(h) || h === 'affiliate.klook.com') return;
      send('outbound_click', { link_domain: h.replace(/^www\./, ''), link_url: u.origin + u.pathname });
    }, { capture: true });
  }

  // 8. "/" focuses the guide search on the homepage.
  function searchShortcut() {
    if (!isHome) return;
    doc.addEventListener('keydown', (e) => {
      if (e.key !== '/' || e.ctrlKey || e.metaKey || e.altKey) return;
      const t = e.target;
      if (t && (/^(input|textarea|select)$/i.test(t.tagName) || t.isContentEditable)) return;
      const input = doc.querySelector('#site-search input, input[type="search"], #site-search');
      if (!input || typeof input.focus !== 'function') return;
      e.preventDefault();
      input.focus();
    });
  }


  // 8. Korean phrase cards: copy / enlarge buttons next to Korean sentences that already sit in the page.
  function phraseCards() {
    if (!article) return;
    article.querySelectorAll('.callout > p, .phrase-card').forEach((p) => {
      const strong = p.querySelector(':scope > strong');
      if (!strong || p.querySelector('.g2b-phrase-actions')) return;
      const ko = strong.textContent.trim();
      if (!/[\uAC00-\uD7A3]/.test(ko) || ko.length > 80) return;
      const bar = el('span', { class: 'g2b-phrase-actions' });
      const c = el('button', { type: 'button', class: 'g2b-btn g2b-phrase-btn' }, L.ko);
      c.addEventListener('click', async () => { if (await copy(ko)) say(L.koDone); });
      const b = el('button', { type: 'button', class: 'g2b-btn g2b-phrase-btn' }, L.show);
      b.addEventListener('click', () => {
        const on = strong.classList.toggle('g2b-phrase-large');
        b.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      bar.append(c, b);
      p.appendChild(bar);
    });
  }

  // 9. "Was this guide helpful?" — one tap, stored on this device, sent only through gtag (after analytics consent).
  function feedback() {
    if (!isGuide || !article || doc.querySelector('.g2b-feedback')) return;
    const key = 'g2b-fb:' + location.pathname;
    const box = el('section', { class: 'shell g2b-feedback', 'aria-label': L.fbQ });
    const msg = el('p', { class: 'g2b-feedback__q' }, L.fbQ);
    const done = () => { box.textContent = ''; box.appendChild(el('p', { class: 'g2b-feedback__q', role: 'status' }, L.fbThanks)); };
    if (store.get(key)) return;
    const row = el('div', { class: 'g2b-feedback__row' });
    [['yes', L.fbYes], ['no', L.fbNo]].forEach(([v, label]) => {
      const b = el('button', { type: 'button', class: 'g2b-btn' }, label);
      b.addEventListener('click', () => { store.set(key, v); send('guide_feedback', { feedback_value: v, guide_path: location.pathname }); done(); });
      row.appendChild(b);
    });
    box.append(msg, row);
    const anchor = doc.querySelector('.help-card') || doc.querySelector('.keep-exploring') || doc.querySelector('.site-footer');
    if (anchor) anchor.insertAdjacentElement('beforebegin', box);
  }

  // 10. Highlight the current section in the "In this guide" list while reading.
  function tocSpy() {
    const links = [...doc.querySelectorAll('.guide-toc a[href^="#"], .article-aside .aside-box a[href^="#"]')];
    if (links.length < 2 || !('IntersectionObserver' in window)) return;
    const byId = new Map(links.map((a) => [decodeURIComponent(a.getAttribute('href').slice(1)), a]));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        links.forEach((a) => a.removeAttribute('aria-current'));
        const a = byId.get(e.target.id); if (a) a.setAttribute('aria-current', 'true');
      });
    }, { rootMargin: '0px 0px -70% 0px' });
    byId.forEach((_, id) => { const h = doc.getElementById(id); if (h) io.observe(h); });
  }

  // 11. Partner-link impressions: one event per page per partner block when it scrolls into view (CTR baseline per page).
  function partnerViews() {
    if (!('IntersectionObserver' in window)) return;
    // Only commission-attributable partner links count as affiliate CTA impressions (same rule as analytics.js:
    // Klook affiliate redirect with numeric aid + aff_adid, or Agoda with a numeric cid).
    const attributable = (a) => {
      let u; try { u = new URL(a.href, location.href); } catch (_) { return false; }
      const h = u.hostname.toLowerCase(), q = (k, re) => re.test(u.searchParams.get(k) || '');
      if (h === 'affiliate.klook.com') return q('aid', /^[0-9]{3,12}$/) && q('aff_adid', /^[0-9]{4,12}$/);
      if (h === 'klook.com' || h.endsWith('.klook.com')) return q('aid', /^[0-9]{3,12}$/);
      if (h === 'agoda.com' || h.endsWith('.agoda.com')) return q('cid', /^[0-9]{4,12}$/);
      return false;
    };
    const links = [...doc.querySelectorAll('a[href*="klook.com"], a[href*="agoda.com"]')].filter(attributable);
    if (!links.length) return;
    const seen = new Set();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const a = e.target; io.unobserve(a);
        const partner = /agoda/.test(a.href) ? 'agoda' : 'klook';
        const box = a.closest('section[aria-labelledby], .pass-conversion-cta, aside, .callout');
        const where = (box && (box.getAttribute('aria-labelledby') || box.className) || 'inline').toString().slice(0, 60);
        const key = partner + '|' + where; if (seen.has(key)) return; seen.add(key);
        send('affiliate_cta_view', { affiliate_partner: partner, cta_location: where });
      });
    }, { threshold: 0.6 });
    links.forEach((a) => io.observe(a));
  }

  const run = () => { phraseCards(); shareBar(); progressAndTop(); headingAnchors(); jumpMenu(); languageSuggestion(); continueReading(); clickEvents(); searchShortcut(); feedback(); tocSpy(); partnerViews(); };
  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', run, { once: true });
  else run();
})();

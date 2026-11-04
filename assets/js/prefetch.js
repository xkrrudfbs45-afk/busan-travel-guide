/* Go2Busan: warm up the next guide when a visitor hovers or touches an internal link. Respects Save-Data and slow networks. */
(() => {
  'use strict';
  const conn = navigator.connection || {};
  if (conn.saveData || /(^|-)2g$/.test(conn.effectiveType || '')) return;
  const seen = new Set();
  const MAX = 6;
  function warm(event) {
    const a = event.target && event.target.closest ? event.target.closest('a[href]') : null;
    if (!a || a.target === '_blank' || a.hasAttribute('download')) return;
    let u;
    try { u = new URL(a.href, location.href); } catch (_) { return; }
    if (u.origin !== location.origin || u.pathname === location.pathname) return;
    if (!/\/$|\.html$/.test(u.pathname)) return;
    if (seen.has(u.pathname) || seen.size >= MAX) return;
    seen.add(u.pathname);
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = u.pathname;
    link.as = 'document';
    document.head.appendChild(link);
  }
  document.addEventListener('pointerover', (e) => { if (e.pointerType === 'mouse') warm(e); }, { passive: true });
  document.addEventListener('touchstart', warm, { passive: true });
})();

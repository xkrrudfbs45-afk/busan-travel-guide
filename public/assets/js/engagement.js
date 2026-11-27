/* Go2Busan engagement events. Uses window.gtag, which exists and sends events only after a visitor opts in to analytics. */
(() => {
  'use strict';
  const send = (name, params) => {
    if (typeof window.gtag !== 'function') return;
    window.gtag('event', name, Object.assign({ page_location: window.location.href }, params));
  };
  const lang = (document.documentElement.lang || 'en').toLowerCase();
  const locale = lang.startsWith('ja') ? 'ja' : (lang.includes('zh') ? 'zh-TW' : 'en');

  // Scroll depth on guides: 50% and 90% of the article body, once each.
  const article = document.querySelector('.article-body');
  if (article) {
    const fired = new Set();
    const check = () => {
      const rect = article.getBoundingClientRect();
      const total = rect.height - window.innerHeight * 0.5;
      if (total <= 0) return;
      const pct = Math.min(100, Math.max(0, ((window.innerHeight * 0.5 - rect.top) / rect.height) * 100));
      [50, 90].forEach((step) => {
        if (pct >= step && !fired.has(step)) {
          fired.add(step);
          send('guide_scroll', { percent: step, guide_locale: locale });
        }
      });
      if (fired.size === 2) window.removeEventListener('scroll', onScroll);
    };
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => { ticking = false; check(); });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!target || !target.closest) return;
    const social = target.closest('.footer-social a[data-social]');
    if (social) {
      send('social_profile_click', { platform: social.getAttribute('data-social'), profile_url: social.href, guide_locale: locale });
      return;
    }
    const jump = target.closest('a[href^="#"]');
    if (jump && jump.getAttribute('href').length > 1 && !jump.classList.contains('skip-link') && !jump.hasAttribute('data-review-analytics-choices')) {
      send('in_page_nav_click', { target_id: jump.getAttribute('href').slice(1, 60), link_text: (jump.innerText || '').trim().slice(0, 60), guide_locale: locale });
    }
  }, { capture: true });
})();

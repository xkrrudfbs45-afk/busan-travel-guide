/**
 * Go2Busan analytics bootstrap.
 * GA4 is loaded only after an explicit visitor opt-in.
 */
(() => {
  'use strict';

  const GA4_MEASUREMENT_ID = 'G-JCYV49BXQZ';
  const CONSENT_KEY = 'go2busan_analytics_consent';
  const validMeasurementId = /^G-[A-Z0-9]{6,}$/i.test(GA4_MEASUREMENT_ID);
  let analyticsLoaded = false;

  const language = (document.documentElement.lang || 'en').toLowerCase();
  const copy = language.startsWith('ja')
    ? {
        title: 'プライバシー設定',
        body: 'サイトの改善に役立てるため、任意のアクセス解析を利用できます。許可しない場合もサイトは通常どおり利用できます。',
        accept: '解析を許可',
        reject: '許可しない',
        privacy: 'プライバシーポリシー',
        choices: '解析設定を変更'
      }
    : (language.includes('zh-tw') || language.includes('zh-hant')
      ? {
          title: '隱私設定',
          body: '您可以選擇允許網站使用分析，以協助改善本站。拒絕後仍可正常使用本站。',
          accept: '允許分析',
          reject: '拒絕',
          privacy: '隱私權政策',
          choices: '變更分析設定'
        }
      : {
          title: 'Your privacy choices',
          body: 'Optional analytics help us improve this travel guide. You can reject analytics and still use the site normally.',
          accept: 'Allow analytics',
          reject: 'Reject',
          privacy: 'Privacy policy',
          choices: 'Change analytics choices'
        });

  function saveChoice(value) {
    try {
      window.localStorage.setItem(CONSENT_KEY, value);
    } catch (_) {
      // The current-page choice still works if browser storage is unavailable.
    }
  }

  function loadAnalytics() {
    if (analyticsLoaded || !validMeasurementId) return;
    analyticsLoaded = true;

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = window.gtag || gtag;

    window.gtag('consent', 'default', {
      analytics_storage: 'granted',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    });

    const gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=' +
      encodeURIComponent(GA4_MEASUREMENT_ID);
    gaScript.onerror = () => { analyticsLoaded = false; };
    document.head.appendChild(gaScript);

    window.gtag('js', new Date());
    window.gtag('config', GA4_MEASUREMENT_ID, { anonymize_ip: true });

    const classifyAffiliate = (href) => {
      try {
        const host = new URL(href, window.location.href).hostname.toLowerCase();
        if (host === 'klook.com' || host.endsWith('.klook.com')) return 'klook';
        if (host === 'agoda.com' || host.endsWith('.agoda.com')) return 'agoda';
      } catch (_) {
        return null;
      }
      return null;
    };

    document.addEventListener('click', (event) => {
      const link = event.target && event.target.closest
        ? event.target.closest('a[href]')
        : null;
      if (!link) return;

      const affiliatePartner = classifyAffiliate(link.href);
      if (!affiliatePartner || typeof window.gtag !== 'function') return;

      window.gtag('event', 'affiliate_click', {
        affiliate_partner: affiliatePartner,
        link_url: link.href,
        link_text: (link.innerText || link.getAttribute('aria-label') || '').trim().slice(0, 100),
        page_location: window.location.href,
        transport_type: 'beacon'
      });
    }, { capture: true });
  }

  function showConsentBanner() {
    const existing = document.getElementById('analytics-consent-banner');
    if (existing) existing.remove();

    const banner = document.createElement('section');
    banner.id = 'analytics-consent-banner';
    banner.className = 'analytics-consent';
    banner.setAttribute('role', 'region');
    banner.setAttribute('aria-label', copy.title);

    const copyWrap = document.createElement('div');
    copyWrap.className = 'analytics-consent__copy';
    const title = document.createElement('strong');
    title.textContent = copy.title;
    const body = document.createElement('p');
    body.textContent = copy.body;
    const privacy = document.createElement('a');
    privacy.href = '/privacy.html';
    privacy.textContent = copy.privacy;
    copyWrap.append(title, body, privacy);

    const actions = document.createElement('div');
    actions.className = 'analytics-consent__actions';
    const reject = document.createElement('button');
    reject.type = 'button';
    reject.dataset.analyticsChoice = 'reject';
    reject.textContent = copy.reject;
    const accept = document.createElement('button');
    accept.type = 'button';
    accept.dataset.analyticsChoice = 'accept';
    accept.textContent = copy.accept;
    actions.append(reject, accept);
    banner.append(copyWrap, actions);

    banner.addEventListener('click', (event) => {
      const button = event.target.closest('button[data-analytics-choice]');
      if (!button) return;
      const choice = button.dataset.analyticsChoice;
      const value = choice === 'accept' ? 'granted' : 'denied';
      saveChoice(value);
      if (analyticsLoaded && window.gtag) {
        window.gtag('consent', 'update', {
          analytics_storage: value,
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied'
        });
      }
      banner.remove();
      if (choice === 'accept') loadAnalytics();
    });

    document.body.appendChild(banner);
    const firstButton = banner.querySelector('button');
    if (firstButton) firstButton.focus({ preventScroll: true });
  }

  document.addEventListener('click', (event) => {
    const link = event.target.closest && event.target.closest('[data-review-analytics-choices]');
    if (!link) return;
    event.preventDefault();
    showConsentBanner();
  });

  let savedChoice = null;
  try {
    savedChoice = window.localStorage.getItem(CONSENT_KEY);
  } catch (_) {
    savedChoice = null;
  }

  if (savedChoice === 'granted') {
    loadAnalytics();
  } else if (savedChoice !== 'denied') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', showConsentBanner, { once: true });
    } else {
      showConsentBanner();
    }
  }
})();

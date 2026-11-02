/**
 * Go2Busan analytics bootstrap
 *
 * GA4 is loaded only after a visitor explicitly opts in to analytics.
 * A visitor can reject analytics without affecting access to the site.
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
        privacy: 'プライバシーポリシー'
      }
    : (language.includes('zh-tw') || language.includes('zh-hant')
      ? {
          title: '隱私設定',
          body: '您可以選擇允許使用匿名化的網站使用分析，以協助改善網站。拒絕後仍可正常使用本站。',
          accept: '允許分析',
          reject: '拒絕',
          privacy: '隱私權政策'
        }
      : {
          title: 'Your privacy choices',
          body: 'Optional analytics help us improve this travel guide. You can reject analytics and still use the site normally.',
          accept: 'Allow analytics',
          reject: 'Reject',
          privacy: 'Privacy policy'
        });

  function saveChoice(value) {
    try {
      window.localStorage.setItem(CONSENT_KEY, value);
    } catch (_) {
      // Keep the current-page choice working when storage is unavailable.
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
    if (document.getElementById('analytics-consent-banner')) return;

    const banner = document.createElement('section');
    banner.id = 'analytics-consent-banner';
    banner.className = 'analytics-consent';
    banner.setAttribute('role', 'region');
    banner.setAttribute('aria-label', copy.title);
    banner.innerHTML =
      '<div class="analytics-consent__copy"><strong>' + copy.title + '</strong>' +
      '<p>' + copy.body + '</p><a href="/privacy.html">' + copy.privacy + '</a></div>' +
      '<div class="analytics-consent__actions">' +
      '<button type="button" data-analytics-choice="reject">' + copy.reject + '</button>' +
      '<button type="button" data-analytics-choice="accept">' + copy.accept + '</button></div>';

    banner.addEventListener('click', (event) => {
      const button = event.target.closest('button[data-analytics-choice]');
      if (!button) return;
      const choice = button.getAttribute('data-analytics-choice');
      saveChoice(choice === 'accept' ? 'granted' : 'denied');
      banner.remove();
      if (choice === 'accept') loadAnalytics();
    });

    document.body.appendChild(banner);
  }

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

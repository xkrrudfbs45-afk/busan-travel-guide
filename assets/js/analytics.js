/**
 * Go2Busan analytics bootstrap
 *
 * Setup: replace the empty GA4_MEASUREMENT_ID with the real Measurement ID
 * from the Go2Busan GA4 web data stream (format: G-XXXXXXXXXX).
 * Tracking stays disabled while the value is empty or still a placeholder.
 *
 * If consent is legally required for your audience, connect this bootstrap to
 * a consent-management flow before enabling GA4. Do not put secrets here.
 */
(() => {
  'use strict';

  const GA4_MEASUREMENT_ID = 'G-JCYV49BXQZ';
  const validMeasurementId = /^G-[A-Z0-9]{6,}$/i.test(GA4_MEASUREMENT_ID);

  if (!validMeasurementId) {
    // Deliberately fail closed: no GA request is made with a fake ID.
    return;
  }

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;

  const gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=' +
    encodeURIComponent(GA4_MEASUREMENT_ID);
  document.head.appendChild(gaScript);

  window.gtag('js', new Date());
  window.gtag('config', GA4_MEASUREMENT_ID);

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
})();

/**
 * Go2Busan privacy-first analytics.
 * Visitors in Europe (EU/EEA, UK, Switzerland; detected from the browser time zone) must opt in before GA4 loads.
 * Elsewhere GA4 loads by default with a visible notice and a one-click "turn off" choice that is remembered.
 * Advertising signals stay off everywhere. Owner/staff devices can mark themselves as internal with ?g2b_internal=1.
 */
(() => {
  'use strict';

  const GA4_MEASUREMENT_ID = 'G-JCYV49BXQZ';
  const CONSENT_KEY = 'go2busan_analytics_consent';
  const INTERNAL_KEY = 'go2busan_internal_traffic';
  const validMeasurementId = /^G-[A-Z0-9]{6,}$/i.test(GA4_MEASUREMENT_ID);
  if (!validMeasurementId) return;

  let analyticsLoaded = false;
  let analyticsEnabled = false;
  let trackingHandlersRegistered = false;

  const language = (document.documentElement.lang || 'en').toLowerCase();
  const isJapanese = language.startsWith('ja');
  const isTraditionalChinese = language.includes('zh-tw') || language.includes('zh-hant');
  const privacyPath = isJapanese ? '/ja/privacy.html' : (isTraditionalChinese ? '/zh-tw/privacy.html' : '/privacy.html');
  const disclosurePath = isJapanese ? '/ja/disclosure.html' : (isTraditionalChinese ? '/zh-tw/disclosure.html' : '/disclosure.html');
  const copy = language.startsWith('ja')
    ? {
        title: 'プライバシー設定',
        body: 'サイトの改善に役立てるため、任意のアクセス解析を利用できます。許可しない場合もサイトは通常どおり利用できます。',
        accept: '解析を許可',
        reject: '許可しない',
        privacy: 'プライバシーポリシー',
        choices: '解析設定を変更',
        disclosure: '提携リンクについて',
        noticeTitle: 'アクセス解析について',
        noticeBody: 'どのガイドが旅行者の役に立っているかを知るため、Google アナリティクスを利用しています。広告目的には使いません。いつでもオフにでき、オフにしてもサイトは通常どおり使えます。',
        noticeOk: 'OK',
        noticeOff: '解析をオフにする'
      }
    : (language.includes('zh-cn') || language.includes('zh-hans')
      ? {
          title: '隐私设置',
          body: '您可以选择允许网站分析，帮助我们改进本站。拒绝后仍可正常使用本站。',
          accept: '允许分析',
          reject: '拒绝',
          privacy: '隐私政策（英文）',
          choices: '更改分析设置',
          disclosure: '联盟链接说明（英文）',
          noticeTitle: '关于网站分析',
          noticeBody: '我们使用 Google Analytics 了解哪些指南对旅客有帮助，不用于广告。您可以随时关闭，关闭后仍可正常使用本站。',
          noticeOk: '好',
          noticeOff: '关闭分析'
        }
    : (language.includes('zh-tw') || language.includes('zh-hant')
      ? {
          title: '隱私設定',
          body: '您可以選擇允許網站使用分析，以協助改善本站。拒絕後仍可正常使用本站。',
          accept: '允許分析',
          reject: '拒絕',
          privacy: '隱私權政策',
          choices: '變更分析設定',
          disclosure: '聯盟行銷揭露',
          noticeTitle: '關於網站分析',
          noticeBody: '我們使用 Google Analytics 了解哪些指南對旅客有幫助，不用於廣告。您可以隨時關閉，關閉後仍可正常使用本站。',
          noticeOk: '好',
          noticeOff: '關閉分析'
        }
      : {
          title: 'Your privacy choices',
          body: 'Optional analytics help us improve this travel guide. You can reject analytics and still use the site normally.',
          accept: 'Allow analytics',
          reject: 'Reject',
          privacy: 'Privacy policy',
          choices: 'Change analytics choices',
          disclosure: 'Affiliate disclosure',
          noticeTitle: 'About analytics',
          noticeBody: 'We use Google Analytics to see which guides help travelers. It is not used for advertising. You can turn it off at any time and the site works the same.',
          noticeOk: 'OK',
          noticeOff: 'Turn off analytics'
        }));

  // Opt-in is required where the browser time zone is in Europe (EU/EEA, UK, Switzerland and neighbours).
  // If the time zone cannot be read, fall back to opt-in.
  function requiresOptIn() {
    let zone = '';
    try {
      zone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    } catch (_) {
      zone = '';
    }
    if (!zone) return true;
    return zone.startsWith('Europe/') || /^(Atlantic\/(Reykjavik|Canary|Madeira|Azores|Faroe)|Arctic\/Longyearbyen)$/.test(zone);
  }
  const optInRegion = requiresOptIn();

  // Owner/staff devices: visit any page once with ?g2b_internal=1 (or =0 to undo).
  // GA4 then tags this browser's hits as traffic_type=internal so the Internal Traffic filter can exclude them.
  let internalTraffic = false;
  try {
    const flag = new URLSearchParams(window.location.search).get('g2b_internal');
    if (flag === '1') window.localStorage.setItem(INTERNAL_KEY, '1');
    if (flag === '0') window.localStorage.removeItem(INTERNAL_KEY);
    internalTraffic = window.localStorage.getItem(INTERNAL_KEY) === '1';
  } catch (_) {
    internalTraffic = false;
  }

  function saveChoice(value) {
    try {
      window.localStorage.setItem(CONSENT_KEY, value);
    } catch (_) {
      // The choice still applies for this page if storage is unavailable.
    }
  }

  function clearAnalyticsCookies() {
    const names = document.cookie.split(';')
      .map((part) => part.trim().split('=')[0])
      .filter((name) => /^(_ga($|_)|_gid$|_gat($|_)|_gcl_au$)/.test(name));
    const domains = [null, window.location.hostname, 'go2busan.com', '.go2busan.com'];
    const uniqueDomains = domains.filter((domain, index) => domains.indexOf(domain) === index);
    names.forEach((name) => {
      uniqueDomains.forEach((domain) => {
        let cookie = name + '=; Max-Age=0; path=/; SameSite=Lax';
        if (domain) cookie += '; domain=' + domain;
        if (window.location.protocol === 'https:') cookie += '; Secure';
        document.cookie = cookie;
      });
    });
  }

  function gtagWrapper() {
    const command = arguments[0];
    if (command === 'event' && !analyticsEnabled) return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(arguments);
  }

  function updateConsent(granted) {
    analyticsEnabled = Boolean(granted);
    window['ga-disable-' + GA4_MEASUREMENT_ID] = !analyticsEnabled;
    if (analyticsLoaded && typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: analyticsEnabled ? 'granted' : 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied'
      });
    }
    if (!analyticsEnabled) clearAnalyticsCookies();
  }

  // Klook links are commission-attributable only through the affiliate redirect with numeric aid and aff_adid;
  // Agoda links only when they carry a numeric partner cid. Anything else on these domains is a plain outbound link.
  function classifyPartnerLink(url) {
    const host = url.hostname.toLowerCase();
    const numeric = (name, re) => re.test(url.searchParams.get(name) || '');
    if (host === 'klook.com' || host.endsWith('.klook.com')) {
      const attributable = host === 'affiliate.klook.com'
        ? numeric('aid', /^[0-9]{3,12}$/) && numeric('aff_adid', /^[0-9]{4,12}$/)
        : numeric('aid', /^[0-9]{3,12}$/);
      return { partner: 'klook', attributable };
    }
    if (host === 'agoda.com' || host.endsWith('.agoda.com')) {
      return { partner: 'agoda', attributable: numeric('cid', /^[0-9]{4,12}$/) };
    }
    return null;
  }

  function registerTrackingHandlers() {
    if (trackingHandlersRegistered) return;
    trackingHandlersRegistered = true;

    document.addEventListener('click', (event) => {
      if (!analyticsEnabled || typeof window.gtag !== 'function') return;
      const target = event.target;
      if (!target || !target.closest) return;

      const shortcut = target.closest('[data-search-query]');
      if (shortcut) {
        window.gtag('event', 'search_shortcut_click', {
          search_query: (shortcut.getAttribute('data-search-query') || '').slice(0, 80),
          page_location: window.location.href
        });
      }

      const link = target.closest('a[href]');
      if (!link) return;

      // Google Maps / Naver Map / Kakao Map opens: shows which places readers act on. Not a partner or booking click.
      let mapUrl = null;
      try { mapUrl = new URL(link.href, window.location.href); } catch (_) { mapUrl = null; }
      if (mapUrl) {
        const mapHost = mapUrl.hostname.replace(/^www\./, '');
        const mapProvider = (mapHost === 'google.com' && mapUrl.pathname.startsWith('/maps')) || mapHost === 'maps.google.com' || mapHost === 'maps.app.goo.gl'
          ? 'google'
          : (/(^|\.)map\.naver\.com$/.test(mapHost) || mapHost === 'naver.me' ? 'naver' : (/(^|\.)map\.kakao\.com$/.test(mapHost) ? 'kakao' : ''));
        if (mapProvider) {
          window.gtag('event', 'map_click', {
            map_provider: mapProvider,
            map_query: (mapUrl.searchParams.get('query') || '').slice(0, 100),
            map_placement: link.closest('[data-place-map]') ? 'place_map_button' : (link.classList.contains('place-map-link') ? 'place_map_link' : 'inline_content'),
            link_text: (link.innerText || link.getAttribute('aria-label') || '').trim().slice(0, 100),
            page_location: window.location.href,
            transport_type: 'beacon'
          });
          return;
        }
      }

      const guidePlacement = link.closest('[data-local-experience-card]')
        ? 'local_experience_card'
        : (link.closest('.trend-card')
          ? 'guide_card'
          : (link.closest('.category-tile') ? 'category_tile' : ''));
      const isGuidePath = /^\/(?:ja\/|zh-tw\/)?guides\//.test(new URL(link.href, window.location.href).pathname);
      if (guidePlacement && isGuidePath) {
        const guidePath = new URL(link.href, window.location.href).pathname;
        const guideLocale = guidePath.startsWith('/ja/')
          ? 'ja'
          : (guidePath.startsWith('/zh-tw/') ? 'zh-TW' : 'en');
        window.gtag('event', 'guide_navigation_click', {
          guide_url: link.href,
          guide_title: (link.querySelector('.trend-copy h3')?.innerText || link.innerText || '').trim().slice(0, 100),
          guide_locale: guideLocale,
          placement: guidePlacement,
          page_location: window.location.href
        });
      }

      let affiliateUrl;
      try {
        affiliateUrl = new URL(link.href, window.location.href);
      } catch (_) {
        return;
      }
      const partnerLink = classifyPartnerLink(affiliateUrl);
      if (!partnerLink) return;
      const affiliatePartner = partnerLink.partner;

      const affiliatePlacementContext = link.closest('.agoda-stay-cta')
        ? 'agoda_stay_search'
        : (link.closest('.pass-conversion-cta')
          ? 'visit_busan_pass_conversion_panel'
          : (link.closest('.partner-cta-grid')
            ? 'partner_cta_grid'
            : (link.closest('.callout')
              ? 'article_callout'
              : (link.closest('.article-end')
                ? 'article_end'
                : (link.closest('.article-aside')
                  ? 'article_sidebar'
                  : (link.closest('.article-hero')
                    ? 'article_hero'
                    : 'inline_content'))))));
      const eventParams = {
        affiliate_partner: affiliatePartner,
        affiliate_placement_context: affiliatePlacementContext,
        link_url: link.href,
        link_text: (link.innerText || link.getAttribute('aria-label') || '').trim().slice(0, 100),
        page_location: window.location.href
      };

      // Partner links without a commission-tracking ID (e.g. a plain agoda.com city page) cannot earn a referral.
      // They are reported separately so affiliate_click keeps meaning "commission-attributable click".
      if (!partnerLink.attributable) {
        window.gtag('event', 'partner_outbound_click', eventParams);
        return;
      }

      if (affiliatePartner === 'klook') {
        const placement = affiliateUrl.searchParams.get('aff_adid');
        if (placement && /^[0-9]{4,12}$/.test(placement)) eventParams.affiliate_placement = placement;
        const destination = affiliateUrl.searchParams.get('k_site');
        if (destination) {
          try {
            const locale = new URL(destination).pathname.split('/').filter(Boolean)[0];
            if (['en-US', 'ja', 'zh-TW'].includes(locale)) eventParams.affiliate_destination_locale = locale;
          } catch (_) { /* Ignore malformed destination URLs. */ }
        }
      } else if (affiliatePartner === 'agoda') {
        const placement = link.closest('.agoda-stay-cta')?.dataset.affiliatePlacement;
        if (placement) eventParams.affiliate_placement = placement;
        const destinationLocale = affiliateUrl.searchParams.get('hl');
        if (destinationLocale) eventParams.affiliate_destination_locale = destinationLocale;
      }

      window.gtag('event', 'affiliate_click', eventParams);
    }, { capture: true });
  }

  function loadAnalytics() {
    if (!validMeasurementId) return;
    if (analyticsLoaded) {
      updateConsent(true);
      return;
    }

    analyticsLoaded = true;
    updateConsent(true);
    window.dataLayer = window.dataLayer || [];
    window.gtag = gtagWrapper;
    window.gtag('consent', 'default', {
      analytics_storage: 'granted',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    });

    const gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA4_MEASUREMENT_ID);
    gaScript.onerror = () => {
      analyticsLoaded = false;
      analyticsEnabled = false;
      window['ga-disable-' + GA4_MEASUREMENT_ID] = true;
    };
    document.head.appendChild(gaScript);

    window.gtag('js', new Date());
    const config = {
      anonymize_ip: true,
      allow_google_signals: false,
      allow_ad_personalization_signals: false
    };
    if (internalTraffic) config.traffic_type = 'internal';
    window.gtag('config', GA4_MEASUREMENT_ID, config);
    registerTrackingHandlers();
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
    privacy.href = privacyPath;
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
      const target = event.target;
      const button = target && target.closest ? target.closest('button[data-analytics-choice]') : null;
      if (!button) return;
      const granted = button.dataset.analyticsChoice === 'accept';
      saveChoice(granted ? 'granted' : 'denied');
      if (granted) loadAnalytics();
      else updateConsent(false);
      banner.remove();
    });

    document.body.appendChild(banner);
  }

  // Outside opt-in regions: analytics is already on; show a one-time notice with a clear way to turn it off.
  function showAnalyticsNotice() {
    const existing = document.getElementById('analytics-consent-banner');
    if (existing) existing.remove();

    const banner = document.createElement('section');
    banner.id = 'analytics-consent-banner';
    banner.className = 'analytics-consent';
    banner.setAttribute('role', 'region');
    banner.setAttribute('aria-label', copy.noticeTitle);

    const copyWrap = document.createElement('div');
    copyWrap.className = 'analytics-consent__copy';
    const title = document.createElement('strong');
    title.textContent = copy.noticeTitle;
    const body = document.createElement('p');
    body.textContent = copy.noticeBody;
    const privacy = document.createElement('a');
    privacy.href = privacyPath;
    privacy.textContent = copy.privacy;
    copyWrap.append(title, body, privacy);

    const actions = document.createElement('div');
    actions.className = 'analytics-consent__actions';
    const off = document.createElement('button');
    off.type = 'button';
    off.dataset.analyticsChoice = 'reject';
    off.textContent = copy.noticeOff;
    const ok = document.createElement('button');
    ok.type = 'button';
    ok.dataset.analyticsChoice = 'accept';
    ok.textContent = copy.noticeOk;
    actions.append(off, ok);
    banner.append(copyWrap, actions);

    banner.addEventListener('click', (event) => {
      const target = event.target;
      const button = target && target.closest ? target.closest('button[data-analytics-choice]') : null;
      if (!button) return;
      const keepOn = button.dataset.analyticsChoice === 'accept';
      saveChoice(keepOn ? 'granted' : 'denied');
      if (keepOn) loadAnalytics();
      else updateConsent(false);
      banner.remove();
    });

    document.body.appendChild(banner);
  }

  function ensureFooterLinks() {
    const footer = document.querySelector('.site-footer');
    if (!footer) return;
    let links = footer.querySelector('.footer-links');

    if (!footer.querySelector('a[href="' + disclosurePath + '"]')) {
      const disclosure = document.createElement('a');
      disclosure.href = disclosurePath;
      disclosure.textContent = copy.disclosure;
      if (links) {
        links.appendChild(disclosure);
      } else {
        const paragraph = document.createElement('p');
        paragraph.className = 'analytics-settings-link';
        paragraph.appendChild(disclosure);
        footer.appendChild(paragraph);
      }
    }

    if (!footer.querySelector('[data-review-analytics-choices]')) {
      const choices = document.createElement('a');
      choices.href = '#analytics-settings';
      choices.dataset.reviewAnalyticsChoices = '';
      choices.textContent = copy.choices;
      links = footer.querySelector('.footer-links');
      if (links) {
        links.appendChild(choices);
      } else {
        let paragraph = footer.querySelector('.analytics-settings-link');
        if (!paragraph) {
          paragraph = document.createElement('p');
          paragraph.className = 'analytics-settings-link';
          footer.appendChild(paragraph);
        }
        if (paragraph.childNodes.length) paragraph.appendChild(document.createTextNode(' · '));
        paragraph.appendChild(choices);
      }
    }
  }

  document.addEventListener('click', (event) => {
    const target = event.target;
    const link = target && target.closest ? target.closest('[data-review-analytics-choices]') : null;
    if (!link) return;
    event.preventDefault();
    showConsentBanner();
  });

  ensureFooterLinks();

  let savedChoice = null;
  try {
    savedChoice = window.localStorage.getItem(CONSENT_KEY);
  } catch (_) {
    savedChoice = null;
  }

  const whenReady = (fn) => {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn, { once: true });
    else fn();
  };

  if (savedChoice === 'granted') {
    loadAnalytics();
  } else if (savedChoice === 'denied') {
    updateConsent(false);
  } else if (savedChoice === 'notice' && !optInRegion) {
    // Notice already shown and not turned off: keep the default.
    loadAnalytics();
  } else if (optInRegion) {
    whenReady(showConsentBanner);
  } else {
    // Default-on outside opt-in regions, with a one-time notice. Ignoring the notice keeps analytics on.
    loadAnalytics();
    saveChoice('notice');
    whenReady(showAnalyticsNotice);
  }
})();

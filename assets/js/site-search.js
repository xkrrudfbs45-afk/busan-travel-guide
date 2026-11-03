(() => {
  'use strict';
  const form = document.getElementById('site-search');
  const input = document.getElementById('guide-query');
  const results = document.getElementById('site-search-results');
  if (!form || !input || !results) return;

  let indexPromise;
  const getIndex = () => {
    if (!indexPromise) {
      indexPromise = fetch('/assets/data/search-index.json', { credentials: 'same-origin' })
        .then((response) => {
          if (!response.ok) throw new Error('Search index unavailable');
          return response.json();
        })
        .then((items) => Array.isArray(items) ? items : [])
        .catch(() => []);
    }
    return indexPromise;
  };

  const normalize = (value) => String(value || '')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .trim();

  function scoreItem(item, query, terms) {
    const title = normalize(item.title);
    const summary = normalize(item.summary);
    const tags = normalize((item.tags || []).join(' '));
    const all = title + ' ' + summary + ' ' + tags;
    let score = title === query ? 100 : (title.includes(query) ? 30 : 0);
    for (const term of terms) {
      if (title.includes(term)) score += 10;
      if (tags.includes(term)) score += 5;
      if (summary.includes(term)) score += 2;
      if (!all.includes(term)) return 0;
    }
    return score;
  }

  function render(items, query) {
    results.replaceChildren();
    results.hidden = false;
    const language = (document.documentElement.lang || 'en').toLowerCase();
    const japanese = language.startsWith('ja');
    const traditionalChinese = language.includes('zh-tw') || language.includes('zh-hant');
    const heading = document.createElement('h2');
    heading.className = 'site-search-results__heading';
    heading.textContent = items.length
      ? (japanese
        ? 'ガイド検索結果（' + items.length + '件）'
        : (traditionalChinese ? '指南搜尋結果（' + items.length + '）' : 'Guide results (' + items.length + ')'))
      : (japanese ? '一致するガイドが見つかりません' : (traditionalChinese ? '找不到符合的指南' : 'No exact matches'));
    results.appendChild(heading);

    if (!items.length) {
      const empty = document.createElement('p');
      empty.className = 'site-search-results__empty';
      empty.textContent = japanese
        ? '「観光」「空港」「ホテル」「グルメ」「交通カード」など、別のキーワードをお試しください。'
        : (traditionalChinese
          ? '試試「景點」「機場」「住宿」「美食」「交通卡」等其他關鍵字。'
          : 'Try a broader term such as “food”, “airport”, “hotel”, “beach”, “winter” or “transport”.');
      const suggestions = japanese
        ? [
            { label: '釜山の観光スポット', url: '/ja/guides/things-to-do-in-busan/' },
            { label: '釜山3日間モデルコース', url: '/ja/guides/three-days/' },
            { label: '初めての釜山旅行', url: '/ja/guides/first-trip/' },
            { label: '金海空港から海雲台へ', url: '/ja/guides/airport-to-haeundae/' },
            { label: '釜山の交通カード', url: '/ja/guides/transit-card/' },
            { label: 'エリア別釜山グルメ', url: '/ja/guides/local-food-by-neighborhood/' },
            { label: 'スパランドの利用ガイド', url: '/ja/guides/busan-spa-land-guide/' }
          ]
        : (traditionalChinese
          ? [
              { label: '釜山必去景點', url: '/zh-tw/guides/things-to-do-in-busan/' },
              { label: '釜山三日行程', url: '/zh-tw/guides/three-days/' },
              { label: '第一次到釜山旅遊', url: '/zh-tw/guides/first-trip/' },
              { label: '金海機場到海雲台', url: '/zh-tw/guides/airport-to-haeundae/' },
              { label: '釜山交通卡', url: '/zh-tw/guides/transit-card/' },
              { label: '釜山在地美食', url: '/zh-tw/guides/local-food-by-neighborhood/' },
              { label: 'Spa Land 使用指南', url: '/zh-tw/guides/busan-spa-land-guide/' }
            ]
          : [
              { label: 'Things to Do in Busan', url: '/guides/things-to-do-in-busan/' },
              { label: 'Three-Day Itinerary', url: '/guides/busan-three-days/' },
              { label: 'Where to Stay', url: '/guides/where-to-stay-busan/' },
              { label: 'Airport to Haeundae', url: '/guides/gimhae-airport-to-haeundae/' },
              { label: 'Local Food Guide', url: '/guides/busan-local-food-guide/' },
              { label: 'Pusan National University Food Guide', url: '/guides/pusan-national-university-food-guide/' },
              { label: 'Busan Spa Land Guide', url: '/guides/busan-spa-land-guide/' },
              { label: 'Public Transportation & Transit Cards', url: '/guides/busan-transit-card/' },
              { label: 'Visit Busan Pass Guide', url: '/guides/visit-busan-pass-guide/' }
            ]);
      const suggestionList = document.createElement('ul');
      suggestionList.className = 'site-search-results__list site-search-results__suggestions';
      suggestions.forEach((suggestion) => {
        const row = document.createElement('li');
        row.className = 'site-search-results__item';
        const link = document.createElement('a');
        link.className = 'site-search-results__link';
        link.href = suggestion.url;
        const title = document.createElement('span');
        title.className = 'site-search-results__title';
        title.textContent = suggestion.label;
        link.appendChild(title);
        row.appendChild(link);
        suggestionList.appendChild(row);
      });
      results.appendChild(empty);
      results.appendChild(suggestionList);
      return;
    }

    const list = document.createElement('ul');
    list.className = 'site-search-results__list';
    items.forEach((item) => {
      const row = document.createElement('li');
      row.className = 'site-search-results__item';
      const link = document.createElement('a');
      link.className = 'site-search-results__link';
      link.href = item.url;
      const title = document.createElement('span');
      title.className = 'site-search-results__title';
      title.textContent = item.title;
      const summary = document.createElement('span');
      summary.className = 'site-search-results__summary';
      summary.textContent = item.summary;
      link.append(title, summary);
      link.addEventListener('click', () => {
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'search_result_click', {
            result_title: item.title,
            result_url: item.url
          });
        }
      });
      row.appendChild(link);
      list.appendChild(row);
    });
    results.appendChild(list);
  }

  document.querySelectorAll('[data-search-query]').forEach((button) => {
    button.addEventListener('click', () => {
      input.value = button.getAttribute('data-search-query') || '';
      form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    });
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const query = normalize(input.value);
    if (!query) return;
    const terms = query.split(/\s+/).filter(Boolean);
    const index = await getIndex();
    const matches = index
      .map((item) => ({ item, score: scoreItem(item, query, terms) }))
      .filter((entry) => entry.score > 0)
      .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title))
      .slice(0, 8)
      .map((entry) => entry.item);
    render(matches, query);
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'search', {
        search_query_length: query.length,
        results_count: matches.length
      });
    }
    results.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  input.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      results.hidden = true;
      results.replaceChildren();
    }
  });
})();

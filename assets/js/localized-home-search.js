(() => {
  'use strict';

  const form = document.getElementById('site-search');
  const input = document.getElementById('guide-query');
  const results = document.getElementById('site-search-results');
  if (!form || !input || !results) return;

  const language = document.documentElement.lang || 'en';
  const isJapanese = language.toLowerCase().startsWith('ja');
  const copy = isJapanese
    ? {
        heading: (count) => '検索結果（' + count + '件）',
        emptyHeading: '一致するガイドが見つかりません',
        empty: '「グルメ」「交通」「ホテル」「釜山」など、別のキーワードをお試しください。'
      }
    : {
        heading: (count) => '搜尋結果（' + count + ' 篇）',
        emptyHeading: '找不到符合的指南',
        empty: '請改用「美食」、「交通」、「住宿」或「釜山」等關鍵字搜尋。'
      };

  const normalize = (value) => String(value || '')
    .normalize('NFKC')
    .toLocaleLowerCase()
    .replace(/\s+/g, ' ')
    .trim();

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

  const cards = Array.from(document.querySelectorAll('#guides .trend-card'))
    .map((anchor) => {
      const titleNode = anchor.querySelector('.trend-copy h3');
      const summaryNodes = Array.from(anchor.querySelectorAll('.trend-copy p'));
      const title = titleNode ? titleNode.textContent.trim() : '';
      const summary = summaryNodes.map((node) => node.textContent.trim()).join(' ');
      return {
        title,
        summary,
        text: normalize(title + ' ' + summary),
        url: anchor.getAttribute('href') || ''
      };
    })
    .filter((item) => item.title && item.url.startsWith('/'));

  function render(matches) {
    results.replaceChildren();
    results.hidden = false;

    const heading = document.createElement('h2');
    heading.className = 'site-search-results__heading';
    heading.textContent = matches.length ? copy.heading(matches.length) : copy.emptyHeading;
    results.appendChild(heading);

    if (!matches.length) {
      const empty = document.createElement('p');
      empty.className = 'site-search-results__empty';
      empty.textContent = copy.empty;
      results.appendChild(empty);

      const fallbackKeys = ['first-trip', 'transit-card', 'luggage-storage', 'three-days'];
      const fallback = fallbackKeys
        .map((key) => cards.find((item) => item.url.includes(key)))
        .filter(Boolean)
        .slice(0, 3);
      if (fallback.length) {
        const fallbackHeading = document.createElement('p');
        fallbackHeading.className = 'site-search-results__empty';
        fallbackHeading.textContent = isJapanese ? 'おすすめのガイド' : '推薦指南';
        const fallbackList = document.createElement('ul');
        fallbackList.className = 'site-search-results__list site-search-results__suggestions';
        fallback.forEach((item) => {
          const row = document.createElement('li');
          row.className = 'site-search-results__item';
          const link = document.createElement('a');
          link.className = 'site-search-results__link';
          link.href = item.url;
          const title = document.createElement('span');
          title.className = 'site-search-results__title';
          title.textContent = item.title;
          link.appendChild(title);
          row.appendChild(link);
          fallbackList.appendChild(row);
        });
        results.append(fallbackHeading, fallbackList);
      }
      return;
    }

    const list = document.createElement('ul');
    list.className = 'site-search-results__list';
    matches.forEach((item) => {
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
            result_url: item.url,
            search_language: language
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
    const allItems = await getIndex();
    const localePrefix = isJapanese ? '/ja/' : '/zh-tw/';
    const localizedItems = allItems.filter((item) => (item.url || '').startsWith(localePrefix));
    const sourceItems = localizedItems.length ? localizedItems : cards;
    const matches = sourceItems
      .map((item) => {
        const title = normalize(item.title);
        const summary = normalize(item.summary);
        const tags = normalize((item.tags || []).join(' '));
        const searchable = title + ' ' + summary + ' ' + tags;
        let score = title === query ? 100 : (title.includes(query) ? 30 : 0);
        for (const term of terms) {
          if (title.includes(term)) score += 10;
          if (tags.includes(term)) score += 5;
          if (summary.includes(term)) score += 2;
          if (!searchable.includes(term)) score = 0;
        }
        return { item, score };
      })
      .filter((entry) => entry.score > 0)
      .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title))
      .slice(0, 8)
      .map((entry) => entry.item);

    render(matches);
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'search', {
        search_query_length: query.length,
        results_count: matches.length,
        search_language: language
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

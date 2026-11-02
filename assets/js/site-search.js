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
    const heading = document.createElement('h2');
    heading.className = 'site-search-results__heading';
    heading.textContent = items.length
      ? 'Guide results (' + items.length + ')'
      : 'No exact matches';
    results.appendChild(heading);

    if (!items.length) {
      const empty = document.createElement('p');
      empty.className = 'site-search-results__empty';
      empty.textContent = 'Try a broader term such as “food”, “airport”, “hotel”, “beach” or “transport”.';
      results.appendChild(empty);
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
            search_term: query.slice(0, 100),
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
        search_term: query.slice(0, 100),
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

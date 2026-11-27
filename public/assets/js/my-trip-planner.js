(() => {
  'use strict';

  const root = document.querySelector('[data-my-trip-planner]');
  if (!root) return;

  const storageKey = 'go2busan_saved_neighborhoods_v1';
  const allowedStops = ['Seomyeon', 'Haeundae', 'Nampo-dong', 'Gwangalli'];
  const buttons = Array.from(document.querySelectorAll('[data-trip-stop]'));
  const list = root.querySelector('[data-trip-list]');
  const count = root.querySelector('[data-trip-count]');
  const mapLink = root.querySelector('[data-trip-map]');
  const clearButton = root.querySelector('[data-trip-clear]');
  const status = root.querySelector('[data-trip-status]');
  let stops = [];

  try {
    const saved = JSON.parse(window.localStorage.getItem(storageKey) || '[]');
    if (Array.isArray(saved)) stops = saved.filter((name, index) => allowedStops.includes(name) && saved.indexOf(name) === index);
  } catch (_) {
    stops = [];
  }

  function save() {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(stops));
      status.textContent = 'Your shortlist is saved on this device.';
    } catch (_) {
      status.textContent = 'Browser storage is unavailable. Your current shortlist will last until this page closes.';
    }
  }

  function render() {
    list.replaceChildren();
    count.textContent = '(' + stops.length + ')';
    clearButton.hidden = stops.length === 0;

    buttons.forEach((button) => {
      const selected = stops.includes(button.dataset.tripStop);
      button.setAttribute('aria-pressed', String(selected));
      button.textContent = selected ? '✓ Added to my trip' : '＋ Add to my trip';
    });

    if (!stops.length) {
      const empty = document.createElement('li');
      empty.className = 'my-trip-empty';
      empty.textContent = 'Your saved neighborhoods will appear here.';
      list.appendChild(empty);
      mapLink.textContent = 'Choose at least one area to build your map route';
      mapLink.href = '#my-trip-title';
      mapLink.setAttribute('aria-disabled', 'true');
      return;
    }

    stops.forEach((name, index) => {
      const item = document.createElement('li');
      item.className = 'my-trip-chip';
      const label = document.createElement('span');
      label.textContent = (index + 1) + '. ' + name;
      const remove = document.createElement('button');
      remove.type = 'button';
      remove.textContent = '×';
      remove.setAttribute('aria-label', 'Remove ' + name + ' from my trip');
      remove.addEventListener('click', () => {
        stops = stops.filter((stop) => stop !== name);
        save();
        render();
      });
      item.append(label, remove);
      list.appendChild(item);
    });

    if (stops.length === 1) {
      const params = new URLSearchParams({ api: '1', query: stops[0] + ', Busan, South Korea' });
      mapLink.href = 'https://www.google.com/maps/search/?' + params.toString();
      mapLink.textContent = 'Open this area in Google Maps ↗';
    } else {
      const params = new URLSearchParams({
        api: '1',
        origin: stops[0] + ', Busan, South Korea',
        destination: stops[stops.length - 1] + ', Busan, South Korea'
      });
      if (stops.length > 2) params.set('waypoints', stops.slice(1, -1).map((name) => name + ', Busan, South Korea').join('|'));
      mapLink.href = 'https://www.google.com/maps/dir/?' + params.toString();
      mapLink.textContent = 'Open my ' + stops.length + '-area route in Google Maps ↗';
    }
    mapLink.setAttribute('aria-disabled', 'false');
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const name = button.dataset.tripStop;
      if (!allowedStops.includes(name)) return;
      if (stops.includes(name)) stops = stops.filter((stop) => stop !== name);
      else stops.push(name);
      save();
      render();
    });
  });

  clearButton.addEventListener('click', () => {
    stops = [];
    save();
    render();
    status.textContent = 'Your shortlist has been cleared.';
  });

  render();
})();
(() => {
  'use strict';

  const root = document.querySelector('[data-first-trip-checklist]');
  if (!root) return;

  const items = Array.from(root.querySelectorAll('input[data-checklist-item]'));
  const status = root.querySelector('[data-checklist-status]');
  const progress = root.querySelector('[data-checklist-progress]');
  const progressUi = root.querySelector('[data-checklist-ui]');
  const reset = root.querySelector('[data-checklist-reset]');
  const storageKey = root.dataset.checklistStorageKey || 'go2busan_first_trip_checklist_v1';

  if (!items.length || !status || !progress || !progressUi || !reset) return;

  let storageAvailable = true;
  const allowedIds = new Set(items.map((item) => item.dataset.checklistItem));

  try {
    const raw = window.localStorage.getItem(storageKey);
    const saved = raw ? JSON.parse(raw) : {};
    if (saved && typeof saved === 'object' && !Array.isArray(saved)) {
      items.forEach((item) => {
        if (allowedIds.has(item.dataset.checklistItem)) {
          item.checked = saved[item.dataset.checklistItem] === true;
        }
      });
    }
  } catch (_) {
    storageAvailable = false;
  }

  function countCompleted() {
    return items.filter((item) => item.checked).length;
  }

  function render(message) {
    const completed = countCompleted();
    progress.max = items.length;
    progress.value = completed;
    reset.hidden = completed === 0;
    progressUi.hidden = false;

    const template = root.dataset.checklistStatusTemplate || '{done} / {total}';
    const countText = template.replace('{done}', String(completed)).replace('{total}', String(items.length));
    const storageText = storageAvailable
      ? (root.dataset.checklistSavedMessage || '')
      : (root.dataset.checklistStorageFallback || '');
    status.textContent = [message, countText, storageText].filter(Boolean).join(' ');
  }

  function persist() {
    const state = {};
    items.forEach((item) => {
      state[item.dataset.checklistItem] = item.checked;
    });
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(state));
      storageAvailable = true;
    } catch (_) {
      storageAvailable = false;
    }
  }

  items.forEach((item) => {
    item.addEventListener('change', () => {
      persist();
      render('');
    });
  });

  reset.addEventListener('click', () => {
    items.forEach((item) => {
      item.checked = false;
    });
    try {
      window.localStorage.removeItem(storageKey);
      storageAvailable = true;
    } catch (_) {
      storageAvailable = false;
    }
    render(root.dataset.checklistResetMessage || '');
  });

  render('');
})();

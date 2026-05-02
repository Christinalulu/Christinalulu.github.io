let current = 'about';

function show(pageId) {
  if (pageId === current) return;

  const outEl = document.getElementById(current);
  const inEl = document.getElementById(pageId);

  // Gammel side ut — matcher transition tiden (600ms)
  outEl.classList.add('exit-left');
  setTimeout(() => {
    outEl.classList.remove('active', 'exit-left');
  }, 600); // ← var 400, må matche transition

  // Ny side inn litt forsinket så animasjonen overlapper mykt
  setTimeout(() => {
    inEl.classList.add('active');

    if (pageId === 'projects') {
      const grid = inEl.querySelector('.proj-grid');
      grid.classList.remove('proj-stagger');
      void grid.offsetWidth;
      grid.classList.add('proj-stagger');
    }

    if (pageId === 'about') {
      const list = inEl.querySelector('.skill-list');
      list.classList.remove('stagger-in');
      void list.offsetWidth;
      list.classList.add('stagger-in');
    }
  }, 150); // ← vent litt før ny side kommer inn

  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('btn-' + pageId).classList.add('active');

  current = pageId;
}
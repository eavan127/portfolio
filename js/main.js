/* ============================================================
   Eavan Tan — Portfolio · behaviour
   ============================================================ */
(function () {
  'use strict';

  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  /* ---------- ICONS ---------- */
  const ICON_GH = '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.93c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.5 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z"/></svg>';
  const ICON_LIVE = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>';

  /* ---------- PROJECTS ---------- */
  function renderProjects() {
    const grid = $('#projectGrid');
    if (!grid) return;
    grid.innerHTML = PROJECTS.map(p => {
      const links = [];
      if (p.repo) links.push(`<a class="plink" href="${esc(p.repo)}" target="_blank" rel="noopener">${ICON_GH} Source</a>`);
      if (p.live) links.push(`<a class="plink live" href="${esc(p.live)}" target="_blank" rel="noopener">${ICON_LIVE} ${esc(p.liveLabel || 'Live')}</a>`);
      if (!p.repo) links.push('<span class="plink none">Repository private</span>');
      if (!p.live) links.push('<span class="plink none">No live deployment</span>');

      return `
      <article class="card proj reveal" data-cat="${p.cat.join(' ')}">
        <div class="proj-top">
          <div class="proj-meta">
            <span class="proj-cat">${esc(p.catLabel)}</span>
            <span class="proj-date">${esc(p.date)}</span>
          </div>
          <h3>${esc(p.title)}</h3>
          <p class="proj-sub">${esc(p.sub)}</p>
          ${p.award ? `<span class="proj-award">★ ${esc(p.award)}</span>` : ''}
        </div>
        <div class="proj-body">
          <p>${esc(p.desc)}</p>
          <ul class="impact">${p.impact.map(i => `<li>${i}</li>`).join('')}</ul>
          <div class="chips">${p.tech.map(t => `<span>${esc(t)}</span>`).join('')}</div>
        </div>
        <div class="proj-foot">${links.join('')}</div>
      </article>`;
    }).join('');
  }

  /* ---------- FILTERS ---------- */
  function initFilters() {
    const bar = $('#filters');
    if (!bar) return;
    bar.addEventListener('click', e => {
      const btn = e.target.closest('.filter');
      if (!btn) return;
      $$('.filter', bar).forEach(b => b.classList.toggle('active', b === btn));
      const f = btn.dataset.filter;
      $$('.proj').forEach(card => {
        const show = f === 'all' || card.dataset.cat.split(' ').includes(f);
        card.classList.toggle('hide', !show);
        if (show) { card.classList.remove('in'); requestAnimationFrame(() => card.classList.add('in')); }
      });
    });
  }

  /* ---------- EXPERIENCE ---------- */
  function renderExperience() {
    const tl = $('#timeline');
    if (!tl) return;
    tl.innerHTML = EXPERIENCE.map(x => `
      <div class="tl-item reveal${x.lead ? ' lead' : ''}">
        <div class="tl-head">
          <h3>${esc(x.role)}</h3>
          <span class="tl-when">${esc(x.when)}</span>
        </div>
        <p class="tl-org">${esc(x.org)}</p>
        <p>${esc(x.desc)}</p>
        <div class="soft-tags">${x.soft.map(s => `<span>${esc(s)}</span>`).join('')}</div>
      </div>`).join('');
  }

  /* ---------- AWARDS ---------- */
  function renderAwards() {
    const g = $('#awardGrid');
    if (!g) return;
    g.innerHTML = AWARDS.map(a => `
      <article class="card award reveal">
        <span class="medal">${a.medal}</span>
        <span class="award-rank">${esc(a.rank)}</span>
        <h3>${esc(a.title)}</h3>
        <p class="a-org">${esc(a.org)}</p>
        <p class="a-when">${esc(a.when)}</p>
        <p>${esc(a.desc)}</p>
      </article>`).join('');
  }

  /* ---------- CERTIFICATIONS ---------- */
  function renderCerts() {
    const g = $('#certGrid');
    if (!g) return;
    g.innerHTML = CERTS.map(c => `
      <article class="card cert reveal">
        <span class="cert-ico">${c.ico}</span>
        <div>
          <h3>${esc(c.name)}</h3>
          <p class="c-iss">${esc(c.issuer)}</p>
          <p class="c-note">${esc(c.note)}</p>
        </div>
      </article>`).join('');
  }

  /* ---------- PALETTE SWITCHER ---------- */
  const THEME_KEY = 'et-portfolio-theme';

  function renderPalettes() {
    const list = $('#ppList');
    if (!list) return;
    list.innerHTML = PALETTES.map(p => `
      <button class="pp-item" data-theme-id="${p.id}">
        <span class="pp-swatch">${p.sw.map(c => `<i style="background:${c}"></i>`).join('')}</span>
        <span><b>${esc(p.name)}</b><small>${esc(p.note)}</small></span>
      </button>`).join('');

    list.addEventListener('click', e => {
      const item = e.target.closest('.pp-item');
      if (item) applyTheme(item.dataset.themeId);
    });
  }

  function applyTheme(id) {
    const p = PALETTES.find(x => x.id === id) || PALETTES[0];
    document.body.setAttribute('data-theme', p.id);
    $$('.pp-item').forEach(b => b.classList.toggle('active', b.dataset.themeId === p.id));
    const cur = $('#ppCurrent');
    if (cur) cur.textContent = p.name;
    try { localStorage.setItem(THEME_KEY, p.id); } catch (_) {}
  }

  function initPalettePanel() {
    const panel = $('#palettePanel'), scrim = $('#scrim');
    const open = () => { panel.classList.add('open'); scrim.classList.add('on'); panel.setAttribute('aria-hidden', 'false'); };
    const close = () => { panel.classList.remove('open'); scrim.classList.remove('on'); panel.setAttribute('aria-hidden', 'true'); };
    $('#paletteBtn').addEventListener('click', open);
    $('#paletteClose').addEventListener('click', close);
    scrim.addEventListener('click', close);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  }

  /* ---------- NAV ---------- */
  function initNav() {
    const nav = $('#nav'), links = $('#navLinks');
    $('#menuBtn').addEventListener('click', () => links.classList.toggle('open'));
    links.addEventListener('click', e => { if (e.target.tagName === 'A') links.classList.remove('open'); });

    const sections = $$('section[id]');
    const anchors = $$('#navLinks a');
    const onScroll = () => {
      const y = window.scrollY;
      nav.classList.toggle('scrolled', y > 20);
      $('#toTop').classList.toggle('show', y > 600);
      let current = '';
      sections.forEach(s => { if (y >= s.offsetTop - 140) current = s.id; });
      anchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    $('#toTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ---------- REVEAL ---------- */
  function initReveal() {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        en.target.classList.add('in');
        obs.unobserve(en.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    $$('.reveal').forEach((el, i) => {
      el.style.transitionDelay = Math.min(i % 6, 5) * 60 + 'ms';
      io.observe(el);
    });
  }

  /* ---------- CONTACT FORM ---------- */
  function initForm() {
    const form = $('#contactForm');
    if (!form) return;
    form.addEventListener('submit', e => {
      e.preventDefault();
      const d = new FormData(form);
      const subject = `Portfolio enquiry from ${d.get('name')}`;
      const body = `${d.get('message')}\n\n—\n${d.get('name')}\n${d.get('email')}`;
      window.location.href =
        `mailto:evan17tan@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      $('#formNote').textContent = 'Your mail client should now be open with the message ready to send.';
    });
  }

  /* ---------- BOOT ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderExperience();
    renderAwards();
    renderCerts();
    renderPalettes();

    let saved = null;
    try { saved = localStorage.getItem(THEME_KEY); } catch (_) {}
    applyTheme(saved || 'emerald');

    initFilters();
    initPalettePanel();
    initNav();
    initForm();
    initReveal();

    $('#year').textContent = new Date().getFullYear();
  });
})();

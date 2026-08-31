/* ==========================================================================
   Eavan Tan — portfolio behaviour
   SPA section routing, renderers, theme + palette switching.
   ========================================================================== */

(function () {
    'use strict';

    const D = portfolioData;
    const $ = (s, r) => (r || document).querySelector(s);
    const $$ = (s, r) => Array.prototype.slice.call((r || document).querySelectorAll(s));

    /* Escape text that comes from data and is NOT meant to carry markup.
       Fields documented as rich text (bio, impact, bullets) are inserted raw. */
    const esc = s => String(s).replace(/[&<>"]/g, c =>
        ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

    /* ---------------------------------------------------------------------
       ICONS — inline so the page has no external script dependency
       --------------------------------------------------------------------- */
    const PATHS = {
        home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5"/>',
        folder: '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
        cpu: '<rect x="7" y="7" width="10" height="10" rx="1.5"/><path d="M10 3v2m4-2v2m-4 14v2m4-2v2M3 10h2m-2 4h2m14-4h2m-2 4h2"/>',
        briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 12h18"/>',
        award: '<circle cx="12" cy="9" r="5"/><path d="m8.5 13.5-1 7.5 4.5-2.5 4.5 2.5-1-7.5"/>',
        school: '<path d="m12 4 9 4.5-9 4.5-9-4.5z"/><path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5"/>',
        badge: '<circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
        mail: '<rect x="2.5" y="4.5" width="19" height="15" rx="2"/><path d="m3 6 9 6.5L21 6"/>',
        phone: '<path d="M6.5 3h3l1.5 4.5-2 1.5a12 12 0 0 0 6 6l1.5-2L21 14.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4 5.2 2 2 0 0 1 6.5 3z"/>',
        github: '<path d="M9 19c-4 1.5-4-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6 0C6.8 2.8 5.8 3.1 5.8 3.1a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>',
        linkedin: '<rect x="3" y="8" width="4" height="12"/><circle cx="5" cy="4.5" r="2"/><path d="M11 20V8h4v1.8c.7-1.2 2-2.1 4-2.1 3 0 4 2 4 5.3V20h-4v-6c0-1.6-.5-2.7-2-2.7-1.4 0-2 1-2 2.7v6z"/>',
        database: '<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
        camera: '<path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="13" r="3.5"/>',
        box: '<path d="M12 3 3 7.5v9L12 21l9-4.5v-9z"/><path d="M3 7.5 12 12l9-4.5M12 12v9"/>',
        layout: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M9 9v11"/>',
        code: '<path d="m8 8-4 4 4 4m8-8 4 4-4 4M14 5l-4 14"/>',
        grid: '<rect x="3.5" y="3.5" width="7" height="7" rx="1"/><rect x="13.5" y="3.5" width="7" height="7" rx="1"/><rect x="3.5" y="13.5" width="7" height="7" rx="1"/><rect x="13.5" y="13.5" width="7" height="7" rx="1"/>',
        search: '<circle cx="11" cy="11" r="7"/><path d="m16.5 16.5 4 4"/>',
        shield: '<path d="M12 3 5 6v6c0 4.2 2.9 7.6 7 9 4.1-1.4 7-4.8 7-9V6z"/><path d="m9 12 2 2 4-4"/>',
        users: '<circle cx="9" cy="8" r="3.5"/><path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5"/><path d="M16 5.2a3.5 3.5 0 0 1 0 6.6M18 20c0-2.2-.8-3.9-2-5"/>',
        layers: '<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5M3 17l9 5 9-5"/>',
        activity: '<path d="M3 12h4l3 8 4-16 3 8h4"/>',
        server: '<rect x="3" y="4" width="18" height="6" rx="2"/><rect x="3" y="14" width="18" height="6" rx="2"/><path d="M7 7h.01M7 17h.01"/>',
        'git-branch': '<circle cx="6" cy="5" r="2.5"/><circle cx="6" cy="19" r="2.5"/><circle cx="18" cy="9" r="2.5"/><path d="M6 7.5v9M18 11.5c0 3.5-3 4.5-6 4.5"/>',
        'check-circle': '<circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
        smartphone: '<rect x="6" y="2.5" width="12" height="19" rx="2.5"/><path d="M11 18.5h2"/>',
        external: '<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>'
    };

    function icon(name, cls) {
        const d = PATHS[name] || PATHS.grid;
        return '<svg class="' + (cls || 'ico') + '" viewBox="0 0 24 24" aria-hidden="true">' + d + '</svg>';
    }

    /* Larger decorative glyphs for card artwork */
    function glyph(name) {
        return '<svg viewBox="0 0 24 24" aria-hidden="true">' + (PATHS[name] || PATHS.grid) + '</svg>';
    }

    const KV_GLYPH = {
        neural: '<circle cx="5" cy="6" r="1.6"/><circle cx="5" cy="12" r="1.6"/><circle cx="5" cy="18" r="1.6"/><circle cx="12" cy="9" r="1.6"/><circle cx="12" cy="15" r="1.6"/><circle cx="19" cy="12" r="1.6"/><path d="M6.5 6.6 10.6 8.5M6.5 11.6l4.1-2M6.5 12.5l4.1 2M6.5 17.4l4.1-1.9M13.5 9.4l4 2M13.5 14.5l4-2"/>',
        vision: '<path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z"/><circle cx="12" cy="12" r="3.2"/><path d="M12 4V2M12 22v-2M4 6 2.5 4.5M20 6l1.5-1.5"/>',
        team: '<circle cx="12" cy="6" r="2.6"/><circle cx="5.5" cy="17" r="2.6"/><circle cx="18.5" cy="17" r="2.6"/><path d="M12 8.6v3.9M12 12.5 6.9 15.2M12 12.5l5.1 2.7"/>'
    };

    /* ---------------------------------------------------------------------
       HERO
       --------------------------------------------------------------------- */
    function renderHero() {
        $('#heroName').textContent = D.name;
        $('#heroRole').textContent = D.role;
        $('#heroMicroline').textContent = D.microline;
        $('#heroBio').innerHTML = D.bio.map(b => '<p>' + b + '</p>').join('');

        $('#heroBadges').innerHTML = D.heroBadges.map(b =>
            '<div class="hero-badge"><strong>' + esc(b.value) + '</strong><span>' + esc(b.label) + '</span></div>'
        ).join('');

        const s = D.socialLinks;
        $('#heroSocials').innerHTML =
            pill(s.linkedin, 'linkedin', 'LinkedIn') +
            pill(s.github, 'github', 'Github') +
            pill(s.email, 'email', 'Email');

        $('#footerSocials').innerHTML =
            fsocial(s.linkedin, 'linkedin', 'LinkedIn') +
            fsocial(s.github, 'github', 'GitHub') +
            fsocial(s.email, 'mail', 'Email');
    }

    function pill(href, kind, label) {
        const ic = kind === 'email' ? 'mail' : kind;
        return '<a class="social-pill" href="' + esc(href) + '" target="_blank" rel="noopener">' +
            '<span class="pill-ico pill-' + kind + '">' + icon(ic) + '</span>' + esc(label) + '</a>';
    }

    function fsocial(href, ic, label) {
        return '<a href="' + esc(href) + '" target="_blank" rel="noopener" aria-label="' + esc(label) + '">' +
            icon(ic) + '</a>';
    }

    /* ---------------------------------------------------------------------
       ABOUT / EXPERTISE
       --------------------------------------------------------------------- */
    function renderAbout() {
        $('#knowledgeContainer').innerHTML = D.about.domains.map(d =>
            '<div class="knowledge-row fade-up">' +
                '<div class="knowledge-visual">' +
                    '<svg class="kv-glyph" viewBox="0 0 24 24" aria-hidden="true">' +
                    (KV_GLYPH[d.glyph] || KV_GLYPH.neural) + '</svg>' +
                '</div>' +
                '<div class="knowledge-content">' +
                    '<h3>' + esc(d.title) + '</h3>' +
                    '<div class="knowledge-icons">' + d.icons.map(i => icon(i, '')).join('') + '</div>' +
                    '<ul class="knowledge-bullets">' +
                        d.bullets.map(b => '<li>' + b + '</li>').join('') +
                    '</ul>' +
                '</div>' +
            '</div>'
        ).join('');
    }

    /* ---------------------------------------------------------------------
       PROJECTS
       --------------------------------------------------------------------- */
    function renderProjects() {
        $('#projectSlicers').innerHTML = D.projectFilters.map((f, i) =>
            '<button class="slicer' + (i === 0 ? ' active' : '') + '" data-filter="' + esc(f.id) + '">' +
            icon(f.icon) + esc(f.label) + '</button>'
        ).join('');

        $('#projectsGrid').innerHTML = D.projects.map(p => {
            let actions = '';
            actions += p.repo
                ? '<a class="btn btn-outline btn-sm" href="' + esc(p.repo) + '" target="_blank" rel="noopener">' +
                  icon('github') + 'Repository</a>'
                : '<span class="link-disabled">Repository private</span>';
            actions += p.live
                ? '<a class="btn btn-primary btn-sm" href="' + esc(p.live) + '" target="_blank" rel="noopener">' +
                  icon('external') + esc(p.liveLabel || 'Live') + '</a>'
                : '<span class="link-disabled">No live deployment</span>';

            return '<article class="project-card fade-up" data-cats="' + esc(p.cats.join(' ')) + '">' +
                '<div class="project-thumb">' +
                    glyph(p.glyph) +
                    (p.award ? '<span class="project-award">★ ' + esc(p.award) + '</span>' : '') +
                    '<span class="project-date">' + esc(p.date) + '</span>' +
                '</div>' +
                '<div class="project-body">' +
                    '<h3>' + esc(p.title) + '</h3>' +
                    '<p class="project-sub">' + esc(p.sub) + '</p>' +
                    '<p class="project-desc">' + esc(p.desc) + '</p>' +
                    '<ul class="project-impact">' + p.impact.map(i => '<li>' + i + '</li>').join('') + '</ul>' +
                    '<div class="tag-list">' + p.tags.map(t => '<span class="tag">' + esc(t) + '</span>').join('') + '</div>' +
                '</div>' +
                '<div class="project-actions">' + actions + '</div>' +
            '</article>';
        }).join('');

        $('#projectSlicers').addEventListener('click', e => {
            const btn = e.target.closest('.slicer');
            if (!btn) return;
            $$('.slicer').forEach(b => b.classList.toggle('active', b === btn));
            const f = btn.dataset.filter;
            $$('.project-card').forEach(c => {
                const show = f === 'all' || c.dataset.cats.split(' ').indexOf(f) > -1;
                c.classList.toggle('hide', !show);
            });
        });
    }

    /* ---------------------------------------------------------------------
       SKILLS
       --------------------------------------------------------------------- */
    function renderSkills() {
        let html = D.skills.map(g =>
            '<div class="skill-group fade-up">' +
                '<div class="skill-group-label">' + esc(g.group) + '</div>' +
                '<div class="skill-chips">' +
                    g.items.map(i => '<span class="skill-chip"><span class="dot"></span>' + esc(i) + '</span>').join('') +
                '</div>' +
            '</div>'
        ).join('');

        html += '<div class="skill-group fade-up">' +
            '<div class="skill-group-label">Spoken Languages</div>' +
            '<div class="lang-bars">' +
                D.languages.map(l =>
                    '<div class="lang-bar"><b>' + esc(l.name) + '</b><span>' + esc(l.level) + '</span>' +
                    '<i style="--w:' + Number(l.pct) + '%"></i></div>'
                ).join('') +
            '</div></div>';

        $('#skillsContainer').innerHTML = html;
    }

    /* ---------------------------------------------------------------------
       EXPERIENCE
       --------------------------------------------------------------------- */
    function renderExperience() {
        $('#experienceTimeline').innerHTML = D.experience.map(x =>
            '<div class="timeline-item fade-up">' +
                '<div class="timeline-card">' +
                    '<div class="timeline-head">' +
                        '<div class="timeline-head-top">' +
                            '<h3>' + esc(x.role) + '</h3>' +
                            '<span class="timeline-type">' + esc(x.type) + '</span>' +
                        '</div>' +
                        '<div class="timeline-meta">' +
                            '<span class="timeline-org">' + esc(x.org) + '</span>' +
                            '<span class="timeline-when">' + esc(x.when) + '</span>' +
                        '</div>' +
                    '</div>' +
                    '<div class="timeline-body">' +
                        (x.metrics && x.metrics.length
                            ? '<div class="timeline-metrics">' +
                              x.metrics.map(m => '<span class="timeline-metric">' + esc(m) + '</span>').join('') +
                              '</div>'
                            : '') +
                        '<p>' + esc(x.desc) + '</p>' +
                        '<div class="tag-list">' +
                            x.soft.map(s => '<span class="tag">' + esc(s) + '</span>').join('') +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>'
        ).join('');
    }

    /* ---------------------------------------------------------------------
       AWARDS
       --------------------------------------------------------------------- */
    function renderAwards() {
        $('#awardsGrid').innerHTML = D.awards.map(a =>
            '<article class="award-card fade-up">' +
                '<div class="award-top">' +
                    '<span class="award-medal">' + a.medal + '</span>' +
                    '<span class="award-place">' + esc(a.place) + '</span>' +
                '</div>' +
                '<h3>' + esc(a.title) + '</h3>' +
                '<p class="award-org">' + esc(a.org) + '</p>' +
                '<p class="award-when">' + esc(a.when) + '</p>' +
                '<p>' + esc(a.desc) + '</p>' +
            '</article>'
        ).join('');
    }

    /* ---------------------------------------------------------------------
       EDUCATION
       --------------------------------------------------------------------- */
    function renderEducation() {
        $('#educationGrid').innerHTML = D.education.map(e =>
            '<article class="edu-card fade-up">' +
                '<span class="edu-badge">' + esc(e.badge) + '</span>' +
                '<div class="edu-main">' +
                    '<div class="edu-head"><h3>' + esc(e.degree) + '</h3>' +
                    '<span class="edu-years">' + esc(e.years) + '</span></div>' +
                    '<p class="edu-inst">' + esc(e.institution) + '</p>' +
                    '<div class="edu-chips">' +
                        e.chips.map(c => '<span class="edu-chip' + (c.alt ? ' alt' : '') + '">' +
                            esc(c.text) + '</span>').join('') +
                    '</div>' +
                '</div>' +
            '</article>'
        ).join('');
    }

    /* ---------------------------------------------------------------------
       CERTIFICATIONS
       --------------------------------------------------------------------- */
    function renderCerts() {
        $('#certGrid').innerHTML = D.certifications.map(c =>
            '<article class="cert-card fade-up">' +
                '<div class="cert-thumb"><span class="cert-emoji">' + c.emoji + '</span></div>' +
                '<div class="cert-body">' +
                    '<p class="cert-issuer">' + esc(c.issuer) + (c.date ? ' · ' + esc(c.date) : '') + '</p>' +
                    '<h3>' + esc(c.name) + '</h3>' +
                    '<p class="cert-note">' + esc(c.note) + '</p>' +
                '</div>' +
                (c.link
                    ? '<div class="cert-foot"><a class="btn btn-primary btn-sm" href="' + esc(c.link) +
                      '" target="_blank" rel="noopener">' + icon('badge') + 'Verify</a></div>'
                    : '') +
            '</article>'
        ).join('');
    }

    /* ---------------------------------------------------------------------
       CONTACT
       --------------------------------------------------------------------- */
    function renderContact() {
        $('#contactIntro').textContent = D.contactIntro;
        $('#contactLinks').innerHTML = D.contactLinks.map(l =>
            '<a class="contact-link" href="' + esc(l.href) + '"' +
            (l.href.indexOf('http') === 0 ? ' target="_blank" rel="noopener"' : '') + '>' +
                '<span class="cl-ico">' + icon(l.icon) + '</span>' +
                '<span><b>' + esc(l.label) + '</b><span>' + esc(l.value) + '</span></span>' +
            '</a>'
        ).join('');

        $('#contactForm').addEventListener('submit', e => {
            e.preventDefault();
            const f = new FormData(e.target);
            const subject = 'Portfolio enquiry from ' + f.get('name');
            const body = f.get('message') + '\n\n—\n' + f.get('name') + '\n' + f.get('email');
            window.location.href = 'mailto:' + D.email +
                '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
            $('#formNote').textContent = 'Your mail client should now be open with the message ready to send.';
        });
    }

    /* ---------------------------------------------------------------------
       NAVIGATION — SPA section switching
       --------------------------------------------------------------------- */
    const LANDING = ['home', 'about'];

    function navHTML() {
        return D.navItems.map(n =>
            '<a class="nav-link" href="#' + n.id + '" data-nav="' + n.id + '">' +
            icon(n.icon) + '<span>' + esc(n.label) + '</span></a>'
        ).join('');
    }

    function showSection(id) {
        if (!id || !document.getElementById(id)) id = 'home';

        const visible = id === 'home' ? LANDING : [id];
        $$('#mainContent > section').forEach(s =>
            s.classList.toggle('active-section', visible.indexOf(s.id) > -1));

        $$('.nav-link').forEach(a => a.classList.toggle('active', a.dataset.nav === id));

        window.scrollTo({ top: 0, behavior: 'auto' });
        runReveal();
        closeMobileNav();
    }

    function closeMobileNav() {
        $('#mobileNavMenu').classList.remove('open');
        $('#menuToggle').classList.remove('open');
        $('#navBackdrop').classList.remove('on');
    }

    function initNav() {
        $('#navLinks').innerHTML = navHTML();
        $('#mobileNavMenu').innerHTML = navHTML();

        document.addEventListener('click', e => {
            const link = e.target.closest('[data-nav]');
            if (!link) return;
            e.preventDefault();
            const id = link.dataset.nav;
            history.replaceState(null, '', '#' + id);
            showSection(id);
        });

        $('#menuToggle').addEventListener('click', () => {
            const open = $('#mobileNavMenu').classList.toggle('open');
            $('#menuToggle').classList.toggle('open', open);
            $('#navBackdrop').classList.toggle('on', open);
        });
        $('#navBackdrop').addEventListener('click', closeMobileNav);

        // Scroll cue and any in-page anchor that is not a nav target
        $('.scroll-cue').addEventListener('click', e => {
            e.preventDefault();
            const about = document.getElementById('about');
            window.scrollTo({ top: about.offsetTop - 60, behavior: 'smooth' });
        });

        window.addEventListener('hashchange', () =>
            showSection(location.hash.replace('#', '')));

        window.addEventListener('scroll', () =>
            $('#navbar').classList.toggle('scrolled', window.scrollY > 20), { passive: true });
    }

    /* ---------------------------------------------------------------------
       THEME + PALETTE
       --------------------------------------------------------------------- */
    function initTheme() {
        $('#themeToggle').addEventListener('click', () => {
            const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            try { localStorage.setItem('theme', next); } catch (_) {}
        });
    }

    function initPalette() {
        $('#paletteList').innerHTML = D.palettes.map(p =>
            '<button class="palette-option" data-palette="' + esc(p.id) + '">' +
                '<span class="palette-swatch">' +
                    p.sw.map(c => '<i style="background:' + esc(c) + '"></i>').join('') +
                '</span>' +
                '<span><b>' + esc(p.name) + '</b><small>' + esc(p.note) + '</small></span>' +
            '</button>'
        ).join('');

        function mark() {
            const cur = document.documentElement.getAttribute('data-palette');
            $$('.palette-option').forEach(b => b.classList.toggle('active', b.dataset.palette === cur));
        }
        mark();

        $('#paletteList').addEventListener('click', e => {
            const btn = e.target.closest('.palette-option');
            if (!btn) return;
            document.documentElement.setAttribute('data-palette', btn.dataset.palette);
            try { localStorage.setItem('palette', btn.dataset.palette); } catch (_) {}
            mark();
        });

        $('#paletteToggle').addEventListener('click', e => {
            e.stopPropagation();
            $('#palettePop').classList.toggle('open');
        });
        document.addEventListener('click', e => {
            if (!e.target.closest('#palettePop') && !e.target.closest('#paletteToggle')) {
                $('#palettePop').classList.remove('open');
            }
        });
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') { $('#palettePop').classList.remove('open'); closeMobileNav(); }
        });
    }

    /* ---------------------------------------------------------------------
       REVEAL
       --------------------------------------------------------------------- */
    let io;
    function runReveal() {
        if (io) io.disconnect();
        io = new IntersectionObserver((entries, obs) => {
            entries.forEach(en => {
                if (!en.isIntersecting) return;
                en.target.classList.add('in');
                obs.unobserve(en.target);
            });
        }, { threshold: 0.05, rootMargin: '0px 0px -30px 0px' });

        $$('.fade-up').forEach((el, i) => {
            if (el.closest('section') && !el.closest('section').classList.contains('active-section')) return;
            el.style.transitionDelay = Math.min(i % 6, 5) * 55 + 'ms';
            io.observe(el);
        });
    }

    /* ---------------------------------------------------------------------
       BOOT
       --------------------------------------------------------------------- */
    document.addEventListener('DOMContentLoaded', () => {
        renderHero();
        renderAbout();
        renderProjects();
        renderSkills();
        renderExperience();
        renderAwards();
        renderEducation();
        renderCerts();
        renderContact();

        initNav();
        initTheme();
        initPalette();

        $('#year').textContent = new Date().getFullYear();
        showSection(location.hash.replace('#', '') || 'home');
    });
})();

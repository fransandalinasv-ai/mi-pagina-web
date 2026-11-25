/* =========================================================
   AZDISSENY — Interactive Studio Engine
   Scroll-Reveal, Split-Letter Hover, Live Clock, Modals
   ========================================================= */

'use strict';

(function () {
  const CFG = window.AZ_CONFIG;
  let currentLang = localStorage.getItem('az_lang') || 'en';
  let activeServiceIdx = 0;
  let serviceTimer = null;
  let heroSlideIdx = 0;
  let heroTimer = null;
  let revealObserver = null;

  /* -------------------------------------------------------
     HELPERS
  ------------------------------------------------------- */
  function getByPath(obj, path) {
    return path.split('.').reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : ''), obj);
  }

  function makeSplitButtonContent(text) {
    const chars = Array.from(text).map((ch, idx) => {
      const safe = ch === ' ' ? '&nbsp;' : ch;
      const delay = `${idx * 18}ms`;
      return `<span class="char-swap" style="--d:${delay}"><span class="char-swap__top">${safe}</span><span class="char-swap__bot" aria-hidden="true">${safe}</span></span>`;
    }).join('');
    return `<span class="btn-animated__inner">${chars}</span>`;
  }

  function enhanceAnimatedButtons(root = document) {
    root.querySelectorAll('.btn-animated').forEach((btn) => {
      const raw = btn.getAttribute('data-raw-label') || btn.textContent.trim();
      btn.setAttribute('data-raw-label', raw);
      btn.innerHTML = makeSplitButtonContent(raw);
    });
  }

  /* -------------------------------------------------------
     LIVE BARCELONA CLOCK
  ------------------------------------------------------- */
  function startClock() {
    const el = document.getElementById('bcn-clock');
    if (!el) return;
    const fmt = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/Madrid',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
    const tick = () => { el.textContent = fmt.format(new Date()); };
    tick();
    setInterval(tick, 1000);
  }

  /* -------------------------------------------------------
     HERO CROSSFADE BACKDROP
  ------------------------------------------------------- */
  function initHero() {
    const backdrop = document.getElementById('hero-backdrop');
    const indicators = document.getElementById('hero-indicators');
    if (!backdrop || !indicators) return;

    backdrop.innerHTML = CFG.heroSlides.map((s, i) => `
      <div class="hero__slide ${i === 0 ? 'is-active' : ''}">
        <img src="${s.src}" alt="${s.alt}">
      </div>
    `).join('');

    indicators.innerHTML = CFG.heroSlides.map((_, i) => `
      <span class="hero__dot ${i === 0 ? 'is-active' : ''}"></span>
    `).join('');

    const slides = backdrop.querySelectorAll('.hero__slide');
    const dots = indicators.querySelectorAll('.hero__dot');

    if (heroTimer) clearInterval(heroTimer);
    heroTimer = setInterval(() => {
      slides[heroSlideIdx].classList.remove('is-active');
      dots[heroSlideIdx].classList.remove('is-active');
      heroSlideIdx = (heroSlideIdx + 1) % slides.length;
      slides[heroSlideIdx].classList.add('is-active');
      dots[heroSlideIdx].classList.add('is-active');
    }, 5200);
  }

  /* -------------------------------------------------------
     MARQUEE TICKER
  ------------------------------------------------------- */
  function initMarquee() {
    const track = document.getElementById('marquee-track');
    if (!track) return;
    const block = CFG.marqueeItems.map((item) => `<span>${item}</span><span class="marquee__dot">·</span>`).join('');
    track.innerHTML = block + block;
  }

  /* -------------------------------------------------------
     SERVICES INTERACTIVE STAGE
  ------------------------------------------------------- */
  function renderServices(dict) {
    const tabsEl = document.getElementById('services-tabs');
    const slidesEl = document.getElementById('services-slides');
    const progEl = document.getElementById('services-progress');
    if (!tabsEl || !slidesEl || !progEl) return;

    const pillars = dict.services.pillars;

    tabsEl.innerHTML = pillars.map((p, i) => `
      <button type="button" class="services-tab ${i === activeServiceIdx ? 'is-active' : ''}" data-service-idx="${i}" role="tab">
        <span>${p.tabLabel}</span>
        <span>→</span>
      </button>
    `).join('');

    slidesEl.innerHTML = pillars.map((p, i) => `
      <div class="stage-slide ${i === activeServiceIdx ? 'is-active' : ''}" data-stage-idx="${i}">
        <div class="stage-slide__glow" style="background:${p.glow}"></div>
        <div class="stage-slide__content">
          <div class="stage-slide__index">${p.index}</div>
          <h3 class="stage-slide__title">${p.title}</h3>
          <p class="stage-slide__desc">${p.desc}</p>
          <div class="stage-slide__chips">
            ${p.chips.map((c) => `<span class="chip">${c}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');

    progEl.innerHTML = pillars.map((_, i) => `
      <div class="progress-bar ${i === activeServiceIdx ? 'is-active' : ''}" data-service-idx="${i}">
        <div class="progress-bar__fill"></div>
      </div>
    `).join('');

    const setService = (idx) => {
      activeServiceIdx = idx;
      tabsEl.querySelectorAll('.services-tab').forEach((el, i) => el.classList.toggle('is-active', i === idx));
      slidesEl.querySelectorAll('.stage-slide').forEach((el, i) => el.classList.toggle('is-active', i === idx));
      progEl.querySelectorAll('.progress-bar').forEach((el, i) => {
        el.classList.remove('is-active');
        void el.offsetWidth;
        if (i === idx) el.classList.add('is-active');
      });
      restartServiceTimer();
    };

    tabsEl.querySelectorAll('[data-service-idx]').forEach((btn) => {
      btn.addEventListener('click', () => setService(Number(btn.dataset.serviceIdx)));
    });
    progEl.querySelectorAll('[data-service-idx]').forEach((bar) => {
      bar.addEventListener('click', () => setService(Number(bar.dataset.serviceIdx)));
    });

    function restartServiceTimer() {
      if (serviceTimer) clearInterval(serviceTimer);
      serviceTimer = setInterval(() => {
        setService((activeServiceIdx + 1) % pillars.length);
      }, 6000);
    }
    restartServiceTimer();
  }

  /* -------------------------------------------------------
     PROJECT GRIDS (Hardware + Software/AI)
  ------------------------------------------------------- */
  function projectCardHTML(p, delayIdx) {
    return `
      <button type="button" class="project-card reveal" style="transition-delay:${delayIdx * 70}ms" data-open-project="${p.id}">
        <img class="project-card__img" src="${p.cover}" alt="${p.title}" loading="lazy">
        <div class="project-card__scrim"></div>
        <div class="project-card__top">
          <div>
            <div class="project-card__title">${p.title}</div>
            <div class="project-card__meta">${p.meta}</div>
          </div>
          <span class="project-card__arrow" aria-hidden="true">↗</span>
        </div>
        <div class="project-card__bottom">
          <p class="project-card__summary">${p.summary}</p>
        </div>
      </button>
    `;
  }

  function renderGrids(dict) {
    const hwGrid = document.getElementById('hardware-grid');
    const swGrid = document.getElementById('software-grid');
    const procGrid = document.getElementById('process-grid');

    if (hwGrid) {
      hwGrid.innerHTML = dict.hardwareProjects.map((p, i) => projectCardHTML(p, i)).join('');
    }

    if (swGrid) {
      const cards = dict.softwareProjects.map((p, i) => projectCardHTML(p, i)).join('');
      const mystery = `
        <div class="project-card project-card--mystery reveal" style="transition-delay:${dict.softwareProjects.length * 70}ms">
          <img class="project-card__img" src="assets/images/slides/design-lamp.webp" alt="" aria-hidden="true">
          <div class="mystery__content">
            <h3 class="mystery__title">${dict.mystery.title}</h3>
            <p class="mystery__desc">${dict.mystery.desc}</p>
            <button type="button" class="btn btn--primary btn-animated" data-open-contact>${dict.mystery.cta}</button>
          </div>
        </div>
      `;
      swGrid.innerHTML = cards + mystery;
    }

    if (procGrid) {
      procGrid.innerHTML = dict.process.steps.map((s, i) => `
        <div class="process-step reveal" style="transition-delay:${i * 80}ms">
          <span class="process-step__num">${s.num}</span>
          <h3 class="process-step__title">${s.title}</h3>
          <p class="process-step__desc">${s.desc}</p>
        </div>
      `).join('');
    }
  }

  /* -------------------------------------------------------
     SCROLL REVEAL & FLOATING PILL
  ------------------------------------------------------- */
  function initScrollReveal() {
    if (revealObserver) revealObserver.disconnect();
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
  }

  function initFloatingPill() {
    const pill = document.getElementById('floating-pill');
    if (!pill) return;
    const onScroll = () => {
      const distToBottom = document.documentElement.scrollHeight - (window.scrollY + window.innerHeight);
      const show = window.scrollY > window.innerHeight * 0.55 && distToBottom > 280;
      pill.classList.toggle('is-visible', show);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* -------------------------------------------------------
     MODALS (Project, Contact, Legal)
  ------------------------------------------------------- */
  function openModal(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.remove('hidden');
    el.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  }

  function closeModal(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.add('hidden');
    el.setAttribute('aria-hidden', 'true');
    if (!document.querySelector('.modal:not(.hidden)')) {
      document.body.classList.remove('modal-open');
    }
  }

  function openProjectDetail(projectId) {
    const dict = CFG.i18n[currentLang];
    const all = [...dict.hardwareProjects, ...dict.softwareProjects];
    const proj = all.find((p) => p.id === projectId);
    if (!proj) return;

    const body = document.getElementById('project-modal-body');
    body.innerHTML = `
      <div class="proj-modal__header">
        <span class="eyebrow">${proj.meta}</span>
        <h2 class="proj-modal__title">${proj.title}</h2>
        <p class="proj-modal__desc">${proj.description}</p>
        <div class="proj-modal__tags">
          ${proj.tags.map((t) => `<span class="chip">${t}</span>`).join('')}
        </div>
      </div>

      <div class="proj-modal__gallery">
        ${proj.gallery.map((src) => `<img src="${src}" alt="${proj.title}" loading="lazy">`).join('')}
      </div>

      <div class="proj-modal__highlights">
        ${proj.highlights.map((h) => `
          <div class="highlight-box">
            <div class="highlight-box__title">${h.title}</div>
            <div class="highlight-box__text">${h.text}</div>
          </div>
        `).join('')}
      </div>

      <div class="proj-modal__footer">
        <span class="eyebrow" style="margin:0">${dict.modal.specsLabel}</span>
        <button type="button" class="btn btn--primary btn-animated" data-open-contact-from-project>${dict.modal.buildSimilar}</button>
      </div>
    `;
    enhanceAnimatedButtons(body);
    body.querySelector('[data-open-contact-from-project]').addEventListener('click', () => {
      closeModal('project-modal');
      openContactModal();
    });
    openModal('project-modal');
  }

  function openContactModal() {
    const m = CFG.i18n[currentLang].modal;
    const body = document.getElementById('contact-modal-body');
    body.innerHTML = `
      <span class="eyebrow">AZDISSENY · A-Z DISSENY, SL</span>
      <h2 class="proj-modal__title" style="font-size:26px">${m.contactTitle}</h2>
      <p class="proj-modal__desc" style="margin-bottom:0">${m.contactSub}</p>

      <form class="form-stack" id="az-contact-form">
        <div class="form-field">
          <label for="az-name">${m.name}</label>
          <input id="az-name" name="name" type="text" required placeholder="${m.namePh}">
        </div>
        <div class="form-field">
          <label for="az-email">${m.email}</label>
          <input id="az-email" name="email" type="email" required placeholder="${m.emailPh}">
        </div>
        <div class="form-field">
          <label for="az-area">${m.area}</label>
          <select id="az-area" name="area">
            ${m.areas.map((a) => `<option value="${a}">${a}</option>`).join('')}
          </select>
        </div>
        <div class="form-field">
          <label for="az-msg">${m.message}</label>
          <textarea id="az-msg" name="message" rows="4" required placeholder="${m.messagePh}"></textarea>
        </div>
        <label class="form-privacy">
          <input type="checkbox" required>
          <span>${m.privacyPrefix} <button type="button" data-open-legal="privacidad">${m.privacyLink}</button>.</span>
        </label>
        <p class="form-rgpd-note">${m.rgpdNote}</p>
        <div class="form-status" id="az-form-status"></div>
        <button type="submit" class="btn btn--primary btn-animated" id="az-form-submit">${m.submit}</button>
      </form>
    `;
    enhanceAnimatedButtons(body);

    const form = document.getElementById('az-contact-form');
    const status = document.getElementById('az-form-status');
    const submitBtn = document.getElementById('az-form-submit');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      submitBtn.disabled = true;
      submitBtn.textContent = m.sending;
      status.className = 'form-status';
      try {
        const res = await fetch(CFG.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(Object.fromEntries(new FormData(form)))
        });
        if (!res.ok) throw new Error('HTTP ' + res.status);
        status.textContent = m.success;
        status.classList.add('is-success');
        form.reset();
      } catch (err) {
        status.textContent = m.error;
        status.classList.add('is-error');
      } finally {
        submitBtn.disabled = false;
        submitBtn.setAttribute('data-raw-label', m.submit);
        submitBtn.innerHTML = makeSplitButtonContent(m.submit);
      }
    });

    openModal('contact-modal');
  }

  function openLegalModal(tabKey = 'aviso') {
    const body = document.getElementById('legal-modal-body');
    const keys = Object.keys(CFG.legal);

    const renderTab = (active) => {
      body.innerHTML = `
        <span class="eyebrow">A-Z DISSENY, SL · NIF B60369329</span>
        <div class="legal-tabs">
          ${keys.map((k) => `<button type="button" class="legal-tab ${k === active ? 'is-active' : ''}" data-legal-switch="${k}">${CFG.legal[k].label}</button>`).join('')}
        </div>
        <div class="legal-body">${CFG.legal[active].html}</div>
      `;
      body.querySelectorAll('[data-legal-switch]').forEach((btn) => {
        btn.addEventListener('click', () => renderTab(btn.dataset.legalSwitch));
      });
    };
    renderTab(keys.includes(tabKey) ? tabKey : 'aviso');
    openModal('legal-modal');
  }

  /* -------------------------------------------------------
     APPLY LANGUAGE & FULL RENDER
  ------------------------------------------------------- */
  function setLanguage(lang) {
    currentLang = lang === 'es' ? 'es' : 'en';
    localStorage.setItem('az_lang', currentLang);
    document.documentElement.lang = currentLang;

    const dict = CFG.i18n[currentLang];

    document.querySelectorAll('.lang-switch__btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const val = getByPath(dict, el.dataset.i18n);
      if (val) el.innerHTML = val;
    });

    document.querySelectorAll('[data-i18n-btn]').forEach((el) => {
      const val = getByPath(dict, el.dataset.i18nBtn);
      if (val) {
        el.setAttribute('data-raw-label', val);
        el.innerHTML = makeSplitButtonContent(val);
      }
    });

    renderServices(dict);
    renderGrids(dict);
    enhanceAnimatedButtons(document);
    initScrollReveal();
  }

  /* -------------------------------------------------------
     GLOBAL EVENT DELEGATION
  ------------------------------------------------------- */
  document.addEventListener('click', (e) => {
    const langBtn = e.target.closest('[data-lang]');
    if (langBtn) {
      setLanguage(langBtn.dataset.lang);
      return;
    }

    const projBtn = e.target.closest('[data-open-project]');
    if (projBtn) {
      openProjectDetail(projBtn.dataset.openProject);
      return;
    }

    if (e.target.closest('[data-open-contact]')) {
      openContactModal();
      return;
    }

    const legalBtn = e.target.closest('[data-open-legal]');
    if (legalBtn) {
      openLegalModal(legalBtn.dataset.openLegal);
      return;
    }

    const closeBtn = e.target.closest('[data-close-modal]');
    if (closeBtn) {
      closeModal(closeBtn.dataset.closeModal);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal:not(.hidden)').forEach((m) => closeModal(m.id));
    }
  });

  /* -------------------------------------------------------
     BOOT
  ------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', () => {
    startClock();
    initHero();
    initMarquee();
    initFloatingPill();
    setLanguage(currentLang);
  });
})();

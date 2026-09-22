'use strict';

/* ================================================
   SANDA — Motor de la Aplicación
   
   Arquitectura:
   ┌────────────┐
   │  config.js │  ← DATOS (lo que edita el usuario)
   └─────┬──────┘
         │ lee
   ┌─────▼──────┐
   │  main.js   │  ← LÓGICA + RENDERIZADO (no tocar)
   └─────┬──────┘
         │ genera
   ┌─────▼──────┐
   │ index.html │  ← SHELL (no tocar)
   └────────────┘
   
   Módulos internos:
   1. Renderer     — Genera todo el HTML desde CONFIG
   2. Slider       — Navegación horizontal
   3. Transitions  — Cambio SLIDER ↔ DETAIL
   4. LazyLoader   — Carga diferida de imágenes
   5. Lightbox     — Visor de imágenes fullscreen
   6. Animations   — Animaciones al hacer scroll
   7. Init         — Punto de entrada
   ================================================ */


/* ================================================
   1. RENDERER
   Genera el HTML de toda la página leyendo CONFIG.
   ================================================ */
const Renderer = {

  /**
   * Genera el fondo de un slide según su tipo.
   * @param {Object} bg - Objeto background de CONFIG
   * @returns {string} HTML del fondo
   */
  slideBackground(bg) {
    switch (bg.type) {
      case 'video':
        return `<video class="slide__bg slide__video-bg" autoplay muted loop playsinline preload="auto">
                  <source src="${bg.src}" type="video/mp4">
                </video>`;
      case 'product':
        return `<div class="slide__bg slide__bg--gradient" aria-hidden="true">
                  <img src="${bg.src}" alt="${bg.alt || ''}" class="slide__bg-product">
                </div>`;
      case 'image':
      default:
        return `<img src="${bg.src}" alt="${bg.alt || ''}" class="slide__bg">`;
    }
  },

  /**
   * Genera el HTML de un slide completo.
   */
  slide(data) {
    return `
      <section class="slide" data-section="${data.id}" aria-label="${data.category}">
        ${this.slideBackground(data.background)}
        <div class="slide__overlay">
          <span class="slide__category">${data.category}</span>
          <h2 class="slide__title">${data.title}</h2>
          <button class="slide__cta" data-target="${data.id}" aria-label="${data.ctaText}">
            ${data.ctaText}
            <span class="slide__cta-arrow" aria-hidden="true">→</span>
          </button>
        </div>
      </section>`;
  },

  /**
   * Genera el hero de una vista de detalle.
   */
  detailHero(hero) {
    let bgHtml;
    if (hero.type === 'video') {
      bgHtml = `<video class="detail__hero-img" autoplay muted loop playsinline preload="auto">
                  <source src="${hero.src}" type="video/mp4">
                </video>`;
    } else if (hero.type === 'product') {
      bgHtml = `<div class="slide__bg slide__bg--gradient">
                  <img src="${hero.src}" alt="${hero.alt || ''}" class="slide__bg-product">
                </div>`;
    } else {
      bgHtml = `<img src="${hero.src}" alt="${hero.alt || ''}" class="detail__hero-img">`;
    }

    return `
      <div class="detail__hero">
        ${bgHtml}
        <div class="detail__hero-overlay"></div>
        <div class="detail__hero-content">
          <span class="slide__category">${hero.category || ''}</span>
          <h1 class="detail__hero-title">${hero.title}</h1>
          <p class="detail__hero-subtitle">${hero.subtitle}</p>
        </div>
      </div>`;
  },

  /**
   * Genera la sección de DISEÑO.
   */
  designSection(data) {
    const cards = data.items.map(item => `
      <article class="design-card animate-on-scroll">
        <img data-src="${item.image}" alt="${item.alt}" class="lazy" loading="lazy" data-lightbox>
        <div class="design-card__info">
          <h3 class="design-card__name">${item.name}</h3>
          <p class="design-card__desc">${item.desc}</p>
        </div>
      </article>`).join('');

    let massProdHtml = '';
    if (data.massProduction) {
      const mp = data.massProduction;
      const mpImages = mp.images.map(img => `
        <article class="design-card animate-on-scroll">
          <img data-src="${img.src}" alt="${img.alt}" class="lazy" loading="lazy" data-lightbox>
          <div class="design-card__info">
            <p class="design-card__desc" style="color: var(--text-primary); font-weight: 500;">${img.alt}</p>
          </div>
        </article>`).join('');

      massProdHtml = `
        <div class="mass-production-section animate-on-scroll" style="margin-top: 5rem;">
          <div class="section-header">
            <span class="section-header__label">Ingeniería & Industria</span>
            <h2 class="section-header__title">${mp.title}</h2>
          </div>
          <p class="mass-production__desc">${mp.desc}</p>
          <div class="design-grid" style="margin-top: 2rem;">${mpImages}</div>
        </div>`;
    }

    return `
      <section id="detail-design" class="detail__section" aria-label="Diseño y Fabricación">
        ${this.detailHero({ ...data.hero, category: 'Diseño 3D & Fabricación' })}
        <div class="detail__content">
          <blockquote class="detail__quote">"${data.quote}"</blockquote>
          <div class="section-header">
            <span class="section-header__label">${data.sectionLabel}</span>
            <h2 class="section-header__title">${data.sectionTitle}</h2>
          </div>
          <div class="design-grid">${cards}</div>
          ${massProdHtml}
        </div>
      </section>`;
  },

  /**
   * Genera la sección de SOFTWARE.
   */
  softwareSection(data) {
    const screenshots = data.screenshots.map(s => `
      <div class="software-screenshots__item">
        <img data-src="${s.src}" alt="${s.alt}" class="lazy" loading="lazy">
      </div>`).join('');

    return `
      <section id="detail-software" class="detail__section" aria-label="Software">
        ${this.detailHero({ ...data.hero, category: 'Ingeniería de Software' })}
        <div class="detail__content">
          <div class="software-hero animate-on-scroll">
            <div class="software-hero__icon">
              <img src="${data.appIcon}" alt="Icono de ${data.appName}" loading="lazy">
            </div>
            <div class="software-hero__text">
              <h2>${data.appName}</h2>
              <p class="software-hero__tagline">${data.tagline}</p>
            </div>
          </div>
          <div class="software-problem-solution">
            <div class="software-problem animate-on-scroll">
              <h3>🔴 El Problema</h3>
              <p>${data.problem}</p>
            </div>
            <div class="software-solution animate-on-scroll">
              <h3>🟢 La Solución</h3>
              <p>${data.solution}</p>
            </div>
          </div>
          <div class="section-header animate-on-scroll">
            <span class="section-header__label">La App</span>
            <h2 class="section-header__title">Capturas de Pantalla</h2>
          </div>
          <div class="software-screenshots" role="region" aria-label="Capturas de pantalla">${screenshots}</div>
          <div class="software-cta-container animate-on-scroll">
            <a href="${data.playStoreUrl}" target="_blank" rel="noopener noreferrer" class="software-cta">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/></svg>
              ${data.playStoreText}
            </a>
          </div>
        </div>
      </section>`;
  },

  /**
   * Genera la sección de FILOSOFÍA.
   */
  philosophySection(data, brand) {
    // Vídeo principal embebido (si está configurado)
    const mainVideo = data.mainVideoEmbed
      ? `<div class="philosophy-video animate-on-scroll">
           <iframe src="${data.mainVideoEmbed}" title="Vídeo principal de SANDA"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             allowfullscreen loading="lazy"></iframe>
         </div>`
      : '';

    // Grid de vídeos
    const videoCards = data.videos.map(v => `
      <a href="${v.url}" target="_blank" rel="noopener noreferrer" class="philosophy-card animate-on-scroll">
        <div class="philosophy-card__thumb">
          <img data-src="${v.thumbnail}" alt="${v.alt}" class="lazy" loading="lazy">
          <div class="philosophy-card__play" aria-hidden="true">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
          </div>
        </div>
        <div class="philosophy-card__info">
          <h3 class="philosophy-card__title">${v.title}</h3>
          <p class="philosophy-card__channel">${v.channel}</p>
        </div>
      </a>`).join('');

    return `
      <section id="detail-philosophy" class="detail__section" aria-label="Filosofía">
        ${this.detailHero({ ...data.hero, category: 'Filosofía & Surf' })}
        <div class="detail__content">
          <div class="section-header animate-on-scroll">
            <span class="section-header__label">Canal de YouTube</span>
            <h2 class="section-header__title">${brand.youtubeHandle}</h2>
          </div>
          ${mainVideo}
          <blockquote class="detail__quote animate-on-scroll">"${data.quote}"</blockquote>
          <div class="section-header animate-on-scroll">
            <span class="section-header__label">Videoblog</span>
            <h2 class="section-header__title">Últimos Vídeos</h2>
          </div>
          <div class="philosophy-grid">${videoCards}</div>
          <div class="software-cta-container animate-on-scroll">
            <a href="${brand.youtubeUrl}" target="_blank" rel="noopener noreferrer" class="software-cta">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z"/></svg>
              Ver canal de YouTube
            </a>
          </div>
        </div>
      </section>`;
  },

  /**
   * Genera la sección de ARTE (galería masonry).
   */
  artSection(data) {
    const items = data.items.map(item => `
      <div class="art-masonry__item animate-on-scroll">
        <img data-src="${item.image}" alt="${item.alt}" class="lazy" loading="lazy" data-lightbox>
        <div class="art-masonry__caption"><span>${item.name}</span></div>
      </div>`).join('');

    return `
      <section id="detail-art" class="detail__section" aria-label="Galería de Arte">
        ${this.detailHero({ ...data.hero, category: 'Expresión Visual' })}
        <div class="detail__content">
          <blockquote class="detail__quote animate-on-scroll">"${data.quote}"</blockquote>
          <div class="section-header animate-on-scroll">
            <span class="section-header__label">${data.sectionLabel}</span>
            <h2 class="section-header__title">${data.sectionTitle}</h2>
          </div>
          <div class="art-masonry">${items}</div>
        </div>
      </section>`;
  },

  /**
   * Renderiza TODA la página desde CONFIG.
   * Se llama una sola vez al arrancar la app.
   */
  renderAll() {
    const c = CONFIG;

    // 1. Renderizar slides
    const slidesHtml = c.slides.map(s => this.slide(s)).join('');
    document.getElementById('slider-track').innerHTML = slidesHtml;

    // 2. Renderizar secciones de detalle
    const detailContainer = document.getElementById('detail-sections');
    detailContainer.innerHTML = [
      c.design   ? this.designSection(c.design)              : '',
      c.software ? this.softwareSection(c.software)           : '',
      c.philosophy ? this.philosophySection(c.philosophy, c.brand) : '',
      c.art      ? this.artSection(c.art)                     : '',
    ].join('');

    // 3. Renderizar logo
    const logoEl = document.getElementById('brand-name');
    if (logoEl) logoEl.textContent = c.brand.name;

    // 4. Renderizar footer
    const footerEl = document.getElementById('footer-content');
    if (footerEl) {
      footerEl.innerHTML = `
        <span class="site-footer__brand">${c.brand.name}</span>
        <span class="site-footer__separator">·</span>
        <span class="site-footer__text">${c.brand.author} © ${c.brand.year}</span>
        <span class="site-footer__separator">·</span>
        <a href="${c.brand.youtubeUrl}" target="_blank" rel="noopener noreferrer" class="site-footer__link">YouTube</a>`;
    }
  },
};


/* ================================================
   2. SLIDER CONTROLLER
   Navegación horizontal entre slides.
   ================================================ */
const Slider = {
  track: null,
  slides: null,
  dotsContainer: null,
  state: {
    current: 0,
    total: 0,
    autoplayTimer: null,
    touchStartX: 0,
  },

  init() {
    this.track = document.querySelector('.slider__track');
    this.slides = document.querySelectorAll('.slide');
    this.dotsContainer = document.querySelector('.slider__dots');
    this.state.total = this.slides.length;

    this.createDots();
    this.goTo(0);
    this.bindEvents();
    this.startAutoplay();
  },

  createDots() {
    if (!this.dotsContainer) return;
    this.dotsContainer.innerHTML = '';
    for (let i = 0; i < this.state.total; i++) {
      const dot = document.createElement('button');
      dot.classList.add('slider__dot');
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-label', `Ir al slide ${i + 1}`);
      dot.addEventListener('click', () => { this.goTo(i); this.stopAutoplay(); });
      this.dotsContainer.appendChild(dot);
    }
  },

  goTo(index) {
    if (Transitions.isLocked) return;
    // Wrapping circular
    if (index < 0) index = this.state.total - 1;
    if (index >= this.state.total) index = 0;

    this.state.current = index;
    if (this.track) {
      this.track.style.transform = `translateX(-${index * 100}vw)`;
    }
    this.updateDots();
    this.updateActiveSlide();
  },

  next() { this.goTo(this.state.current + 1); this.stopAutoplay(); },
  prev() { this.goTo(this.state.current - 1); this.stopAutoplay(); },

  updateDots() {
    if (!this.dotsContainer) return;
    this.dotsContainer.querySelectorAll('.slider__dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === this.state.current);
      dot.setAttribute('aria-selected', i === this.state.current ? 'true' : 'false');
    });
  },

  /** Marca el slide activo y gestiona play/pause de vídeos de fondo. */
  updateActiveSlide() {
    this.slides.forEach((slide, i) => {
      const isActive = i === this.state.current;
      slide.classList.toggle('active', isActive);
      const video = slide.querySelector('video');
      if (video) {
        isActive ? video.play().catch(() => {}) : video.pause();
      }
    });
  },

  startAutoplay() {
    this.stopAutoplay();
    const interval = CONFIG.settings.autoplayInterval;
    if (!interval) return;
    this.state.autoplayTimer = setInterval(() => {
      if (App.currentView === 'SLIDER' && !Transitions.isLocked) {
        this.goTo(this.state.current + 1);
      }
    }, interval);
  },

  stopAutoplay() {
    if (this.state.autoplayTimer) {
      clearInterval(this.state.autoplayTimer);
      this.state.autoplayTimer = null;
    }
  },

  bindEvents() {
    const prevBtn = document.querySelector('.slider__arrow--prev');
    const nextBtn = document.querySelector('.slider__arrow--next');
    if (prevBtn) prevBtn.addEventListener('click', () => this.prev());
    if (nextBtn) nextBtn.addEventListener('click', () => this.next());

    // Swipe táctil
    if (this.track) {
      this.track.addEventListener('touchstart', (e) => {
        this.state.touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      this.track.addEventListener('touchend', (e) => {
        const diff = this.state.touchStartX - e.changedTouches[0].screenX;
        if (Math.abs(diff) > CONFIG.settings.swipeThreshold) {
          diff > 0 ? this.next() : this.prev();
        }
      }, { passive: true });
    }
  },
};


/* ================================================
   3. TRANSITION MANAGER
   Controla el cambio entre SLIDER y DETAIL.
   ================================================ */
const Transitions = {
  isLocked: false,
  sliderEl: null,
  detailEl: null,
  backBtn: null,

  init() {
    this.sliderEl = document.getElementById('slider-container');
    this.detailEl = document.getElementById('detail-container');
    this.backBtn  = document.getElementById('back-btn');

    // Botones CTA del slider
    document.querySelectorAll('.slide__cta').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.target;
        if (target && !this.isLocked) this.openDetail(target);
      });
    });

    // Botón "Volver"
    if (this.backBtn) this.backBtn.addEventListener('click', () => this.closeDetail());

    // Botón atrás del navegador
    window.addEventListener('popstate', (e) => {
      if (e.state && e.state.section) {
        this.openDetail(e.state.section);
      } else if (App.currentView === 'DETAIL') {
        this.closeDetail();
      }
    });
  },

  openDetail(sectionId) {
    if (this.isLocked) return;
    this.isLocked = true;
    App.activeDetail = sectionId;
    Slider.stopAutoplay();

    // Fade out del slider
    if (this.sliderEl) this.sliderEl.classList.add('fade-out');

    setTimeout(() => {
      // Ocultar slider, mostrar detalle
      if (this.sliderEl) this.sliderEl.classList.add('hidden');
      if (this.sliderEl) this.sliderEl.classList.remove('fade-out', 'active');
      if (this.detailEl) this.detailEl.classList.remove('hidden');
      if (this.detailEl) this.detailEl.classList.add('fade-in');

      // Activar la sección correcta
      document.querySelectorAll('.detail__section').forEach(s => {
        s.classList.toggle('active', s.id === `detail-${sectionId}`);
      });

      document.body.classList.remove('no-scroll');
      window.scrollTo(0, 0);
      App.currentView = 'DETAIL';
      this.isLocked = false;
      history.pushState({ section: sectionId }, '', `#${sectionId}`);

      // Inicializar módulos dependientes
      LazyLoader.init();
      Animations.init();
      if (sectionId === 'art') Lightbox.init();

      // Reproducir vídeo hero si es filosofía
      if (sectionId === 'philosophy') {
        const v = document.querySelector('#detail-philosophy video');
        if (v) v.play().catch(() => {});
      }
    }, 500);
  },

  closeDetail() {
    if (this.isLocked) return;
    this.isLocked = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
      if (this.detailEl) this.detailEl.classList.add('hidden');
      if (this.detailEl) this.detailEl.classList.remove('fade-in');
      document.querySelectorAll('.detail__section').forEach(s => s.classList.remove('active'));

      // Pausar vídeos del detalle
      const v = document.querySelector('#detail-philosophy video');
      if (v) v.pause();

      if (this.sliderEl) this.sliderEl.classList.remove('hidden');
      if (this.sliderEl) this.sliderEl.classList.add('active');
      document.body.classList.add('no-scroll');

      Slider.goTo(Slider.state.current);
      App.currentView = 'SLIDER';
      App.activeDetail = null;
      this.isLocked = false;
      history.pushState({}, '', window.location.pathname);
      Slider.startAutoplay();
    }, 300);
  },
};


/* ================================================
   4. LAZY LOADER
   Carga imágenes/iframes solo cuando están cerca
   del viewport, usando IntersectionObserver.
   ================================================ */
const LazyLoader = {
  init() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('[data-src]').forEach(el => this.load(el));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.load(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: CONFIG.settings.lazyLoadMargin, threshold: 0.01 });

    document.querySelectorAll('[data-src]:not(.loaded)').forEach(el => observer.observe(el));
  },

  load(el) {
    const src = el.dataset.src;
    if (!src) return;
    if (el.tagName === 'IFRAME') {
      el.src = src;
    } else if (el.tagName === 'IMG') {
      el.src = src;
      el.addEventListener('load', () => el.classList.add('loaded'), { once: true });
      el.addEventListener('error', () => { el.style.backgroundColor = '#1a1a1a'; }, { once: true });
    }
  },
};


/* ================================================
   5. LIGHTBOX CONTROLLER
   Visor de imágenes fullscreen para la galería.
   ================================================ */
const Lightbox = {
  el: null,
  imgEl: null,
  images: [],
  index: 0,

  init() {
    this.el    = document.getElementById('lightbox');
    this.imgEl = document.getElementById('lightbox-img');
    this.images = [];
    this.index  = 0;

    document.querySelectorAll('[data-lightbox]').forEach((img, i) => {
      const src = img.src || img.dataset.src;
      if (src) this.images.push(src);
      img.addEventListener('click', (e) => { e.preventDefault(); this.open(i); });
    });

    // Botones
    const closeBtn = document.getElementById('lightbox-close');
    const prevBtn  = document.getElementById('lightbox-prev');
    const nextBtn  = document.getElementById('lightbox-next');
    if (closeBtn) closeBtn.addEventListener('click', () => this.close());
    if (prevBtn)  prevBtn.addEventListener('click',  () => this.prev());
    if (nextBtn)  nextBtn.addEventListener('click',  () => this.next());
    if (this.el)  this.el.addEventListener('click', (e) => { if (e.target === this.el) this.close(); });
  },

  open(index) {
    if (!this.el || !this.imgEl || !this.images.length) return;
    this.index = index;
    this.imgEl.src = this.images[index];
    this.el.classList.add('active');
    this.el.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  },

  close() {
    if (!this.el) return;
    this.el.classList.remove('active');
    this.el.setAttribute('aria-hidden', 'true');
    if (App.currentView === 'DETAIL') document.body.style.overflow = '';
  },

  next() {
    if (!this.images.length) return;
    this.index = (this.index + 1) % this.images.length;
    if (this.imgEl) this.imgEl.src = this.images[this.index];
  },

  prev() {
    if (!this.images.length) return;
    this.index = (this.index - 1 + this.images.length) % this.images.length;
    if (this.imgEl) this.imgEl.src = this.images[this.index];
  },

  get isOpen() {
    return this.el && this.el.classList.contains('active');
  },
};


/* ================================================
   6. SCROLL ANIMATIONS
   Anima elementos al entrar en el viewport.
   ================================================ */
const Animations = {
  init() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.animate-on-scroll').forEach(el => el.classList.add('animate-in'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll:not(.animate-in)').forEach(el => observer.observe(el));
  },
};


/* ================================================
   7. KEYBOARD HANDLER
   ================================================ */
function handleKeyboard(e) {
  if (Lightbox.isOpen) {
    if (e.key === 'Escape')    Lightbox.close();
    if (e.key === 'ArrowLeft') Lightbox.prev();
    if (e.key === 'ArrowRight') Lightbox.next();
    return;
  }
  if (App.currentView === 'SLIDER') {
    if (e.key === 'ArrowLeft')  Slider.prev();
    if (e.key === 'ArrowRight') Slider.next();
  }
  if (App.currentView === 'DETAIL' && e.key === 'Escape') {
    Transitions.closeDetail();
  }
}


/* ================================================
   8. APP — Punto de entrada principal
   ================================================ */
const App = {
  currentView: 'SLIDER',
  activeDetail: null,

  init() {
    // 1. Generar todo el HTML desde CONFIG
    Renderer.renderAll();

    // 2. Bloquear scroll vertical (estado slider)
    document.body.classList.add('no-scroll');

    // 3. Inicializar módulos
    Slider.init();
    Transitions.init();
    LazyLoader.init();

    // 4. Teclado global
    document.addEventListener('keydown', handleKeyboard);

    // 5. Deep linking: si hay un #hash en la URL, abrir esa sección
    const hash = window.location.hash.replace('#', '');
    const validSections = CONFIG.slides.map(s => s.id);
    if (hash && validSections.includes(hash)) {
      setTimeout(() => Transitions.openDetail(hash), 100);
    }

    console.log('🏄 SANDA Portfolio — Inicializado');
  },
};

// Arrancar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => App.init());

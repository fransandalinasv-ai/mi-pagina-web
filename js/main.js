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
    const cards = data.items.map(item => {
      const tagsHtml = (item.tags || []).map(t => `<span class="project-tag">${t}</span>`).join('');
      return `
        <article class="design-card animate-on-scroll">
          <img data-src="${item.image}" alt="${item.alt}" class="lazy" loading="lazy" data-lightbox>
          <div class="design-card__info">
            <h3 class="design-card__name">${item.name}</h3>
            <p class="design-card__desc">${item.desc}</p>
            ${tagsHtml ? `<div class="project-tags">${tagsHtml}</div>` : ''}
            ${item.buyUrl ? `
              <div class="design-card__buy-wrapper" onclick="event.stopPropagation();">
                <div class="design-card__buy-action">
                  ${item.price ? `<span class="design-card__price">${item.price}</span>` : ''}
                  <a href="${item.buyUrl}" target="_blank" rel="noopener noreferrer" class="btn--buy">
                    ${item.buyText || 'Comprar Ahora'}
                  </a>
                </div>
                <div class="design-card__buy-legal">
                  ${item.priceNote ? `<span class="design-card__price-note">${item.priceNote}</span>` : ''}
                  ${item.termsLinkText ? `<button type="button" class="design-card__terms-link" data-open-legal="condiciones">${item.termsLinkText}</button>` : ''}
                </div>
              </div>
            ` : ''}
          </div>
        </article>`;
    }).join('');

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

      let featuredHtml = '';
      if (mp.featured) {
        const feat = mp.featured;
        const tagsHtml = (feat.tags || []).map(t => `<span class="project-tag">${t}</span>`).join('');
        const highlightsHtml = (feat.highlights || []).map(h => `
          <div class="naval-highlight">
            <h4 class="naval-highlight__title">${h.title}</h4>
            <p class="naval-highlight__text">${h.text}</p>
          </div>`).join('');

        featuredHtml = `
          <div class="naval-showcase animate-on-scroll">
            <div class="naval-showcase__media">
              <img data-src="${feat.image}" alt="${feat.alt}" class="lazy" loading="lazy" data-lightbox>
              ${feat.badge ? `<span class="naval-showcase__badge">${feat.badge}</span>` : ''}
            </div>
            <div class="naval-showcase__body">
              <h3 class="naval-showcase__title">${feat.title}</h3>
              <p class="naval-showcase__desc">${feat.desc}</p>
              ${tagsHtml ? `<div class="project-tags" style="margin-bottom: 2rem;">${tagsHtml}</div>` : ''}
              <div class="naval-showcase__highlights">
                ${highlightsHtml}
              </div>
            </div>
          </div>`;
      }

      const subheadLabel = (typeof currentLang !== 'undefined' && currentLang === 'en')
        ? 'Components & Manufacturing Systems'
        : 'Sistemas de Fabricación & Componentes';

      massProdHtml = `
        <div class="mass-production-section animate-on-scroll" style="margin-top: 5rem;">
          <div class="section-header">
            <span class="section-header__label">${(typeof currentLang !== 'undefined' && currentLang === 'en') ? 'Engineering & Industry' : 'Ingeniería & Industria'}</span>
            <h2 class="section-header__title">${mp.title}</h2>
          </div>
          <p class="mass-production__desc">${mp.desc}</p>
          ${featuredHtml}
          <div class="mass-production__subhead" style="margin-top: 3.5rem; margin-bottom: 1.25rem;">
            <span class="section-header__label">${subheadLabel}</span>
          </div>
          <div class="design-grid">${mpImages}</div>
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
    let ecosystemHtml = '';
    if (data.ecosystem) {
      const eco = data.ecosystem;
      const c = eco.card;
      const tagsHtml = (c.tags || []).map(t => `<span class="ai-showcase__tag">${t}</span>`).join('');

      ecosystemHtml = `
        <div class="ai-ecosystem-section animate-on-scroll">
          <div class="section-header">
            <span class="section-header__label">${eco.sectionLabel}</span>
            <h2 class="section-header__title">${eco.sectionTitle}</h2>
          </div>
          <div class="ai-showcase animate-on-scroll">
            <div class="ai-showcase__media">
              <img data-src="${c.image}" alt="${c.alt}" class="lazy" loading="lazy" data-lightbox>
              ${c.badge ? `<span class="ai-showcase__badge">${c.badge}</span>` : ''}
            </div>
            <div class="ai-showcase__body">
              <span class="ai-showcase__subtitle">${c.subtitle}</span>
              <h3 class="ai-showcase__title">${c.title}</h3>
              <p class="ai-showcase__desc">${c.desc}</p>
              <div class="ai-showcase__tags">${tagsHtml}</div>
            </div>
          </div>
        </div>`;
    }

    const problemLabel = (typeof currentLang !== 'undefined' && currentLang === 'en') ? 'The Problem' : 'El Problema';
    const solutionLabel = (typeof currentLang !== 'undefined' && currentLang === 'en') ? 'The Solution' : 'La Solución';
    const screenshotsLabel = (typeof currentLang !== 'undefined' && currentLang === 'en') ? 'Screenshots' : 'Capturas de Pantalla';
    const defaultSubhead = (typeof currentLang !== 'undefined' && currentLang === 'en') ? 'Proprietary Software' : 'Software Propio';

    const apps = data.apps || [data];
    const appsHtml = apps.map((app, index) => {
      const screenshots = (app.screenshots || []).map(s => `
        <div class="software-screenshots__item">
          <img data-src="${s.src}" alt="${s.alt}" class="lazy" loading="lazy" data-lightbox>
        </div>`).join('');

      const separatorStyle = index > 0 
        ? 'margin-top: 6rem; padding-top: 5rem; border-top: 1px solid rgba(255, 255, 255, 0.08);' 
        : 'margin-top: 5rem;';

      return `
        <div class="producty-section animate-on-scroll" style="${separatorStyle}">
          <div class="section-header animate-on-scroll" style="margin-bottom: 2rem;">
            <span class="section-header__label">${app.subhead || defaultSubhead}</span>
            <h2 class="section-header__title">${app.appName}</h2>
          </div>
          <div class="software-hero animate-on-scroll">
            <div class="software-hero__icon">
              <img src="${app.appIcon}" alt="Icono de ${app.appName}" loading="lazy">
            </div>
            <div class="software-hero__text">
              <h2>${app.appName}</h2>
              <p class="software-hero__tagline">${app.tagline}</p>
              ${app.tags ? `<div class="project-tags" style="margin-top: 0.75rem;">${app.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}</div>` : ''}
            </div>
          </div>
          <div class="software-problem-solution">
            <div class="software-problem animate-on-scroll">
              <h3>🔴 ${problemLabel}</h3>
              <p>${app.problem}</p>
            </div>
            <div class="software-solution animate-on-scroll">
              <h3>🟢 ${solutionLabel}</h3>
              <p>${app.solution}</p>
            </div>
          </div>
          <div class="section-header animate-on-scroll">
            <span class="section-header__label">${app.appName}</span>
            <h2 class="section-header__title">${screenshotsLabel}</h2>
          </div>
          <div class="software-screenshots" role="region" aria-label="Capturas de ${app.appName}">${screenshots}</div>
          <div class="software-cta-container animate-on-scroll">
            ${app.betaBadge ? `
              <div class="software-beta-badge">
                <span class="software-beta-dot"></span>
                <span>${app.betaBadge}</span>
              </div>` : ''}
            <button class="software-cta" data-open-modal aria-label="${app.playStoreText}">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M10 2v7.31L4.76 18.2A2 2 0 0 0 6.5 21h11a2 2 0 0 0 1.74-2.8L14 9.31V2"/>
                <path d="M8.5 2h7"/>
                <path d="M7 16h10"/>
              </svg>
              <span>${app.playStoreText}</span>
            </button>
            ${app.betaSubtext ? `<p class="software-beta-subtext">${app.betaSubtext}</p>` : ''}
          </div>
        </div>`;
    }).join('');

    return `
      <section id="detail-software" class="detail__section" aria-label="Software">
        ${this.detailHero({ ...data.hero, category: (typeof currentLang !== 'undefined' && currentLang === 'en') ? 'Software & AI' : 'Software & IA' })}
        <div class="detail__content">
          ${ecosystemHtml}
          ${appsHtml}
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
   * Genera el cuestionario y tarjeta de contacto completo.
   */
  contactForm(prefix = 'banner') {
    const f = (typeof CONFIG !== 'undefined' && CONFIG.contactForm) ? CONFIG.contactForm : (DICTIONARY.es.contactForm || {});
    const email = (typeof CONFIG !== 'undefined' && CONFIG.contactEmail) ? CONFIG.contactEmail : 'azdisseny.sl@gmail.com';

    const areas = f.areas || [
      { id: "design", label: "⚙️ Diseño Industrial & CAD 3D", value: "Diseño Industrial & Fabricación (CAD 3D / CNC / Serie)" },
      { id: "software", label: "🤖 Software & Inteligencia Artificial", value: "Software & Inteligencia Artificial" },
      { id: "art", label: "🎨 Arte & Encargos Visuales", value: "Arte & Expresión Visual" },
      { id: "consulting", label: "💡 Consultoría Técnica / Otro Reto", value: "Consultoría Técnica / Otro Reto" }
    ];

    const areasHtml = areas.map((area, idx) => `
      <label class="form-chip ${idx === 0 ? 'active' : ''}">
        <input type="radio" name="project_area" value="${area.value}" ${idx === 0 ? 'checked' : ''}>
        <span>${area.label}</span>
      </label>
    `).join('');

    return `
      <div class="contact-card">
        <div class="contact-card__header">
          <span class="contact-card__badge">${f.badge}</span>
          <h2 class="contact-card__title">${f.title}</h2>
          <p class="contact-card__subtitle">${f.subtitle}</p>
        </div>

        <form class="contact-form" data-form-prefix="${prefix}">
          <div class="contact-form__row">
            <div class="contact-form__group">
              <label for="${prefix}-name" class="contact-form__label">${f.nameLabel} <span class="required-star">*</span></label>
              <input type="text" id="${prefix}-name" name="name" required class="contact-form__input" placeholder="${f.namePlaceholder}">
            </div>
            <div class="contact-form__group">
              <label for="${prefix}-email" class="contact-form__label">${f.emailLabel} <span class="required-star">*</span></label>
              <input type="email" id="${prefix}-email" name="email" required class="contact-form__input" placeholder="${f.emailPlaceholder}">
            </div>
          </div>

          <div class="contact-form__group">
            <label for="${prefix}-phone" class="contact-form__label">${f.phoneLabel}</label>
            <input type="tel" id="${prefix}-phone" name="phone" class="contact-form__input" placeholder="${f.phonePlaceholder}">
          </div>

          <div class="contact-form__group">
            <span class="contact-form__label">${f.areaLabel}</span>
            <div class="form-chips">
              ${areasHtml}
            </div>
          </div>

          <div class="contact-form__group">
            <label for="${prefix}-message" class="contact-form__label">${f.messageLabel} <span class="required-star">*</span></label>
            <textarea id="${prefix}-message" name="message" rows="4" required class="contact-form__textarea" placeholder="${f.messagePlaceholder}"></textarea>
          </div>

          <div class="contact-form__privacy">
            <label class="contact-form__checkbox-label" for="${prefix}-privacy">
              <input type="checkbox" id="${prefix}-privacy" name="privacy_accepted" required class="contact-form__checkbox">
              <span class="contact-form__checkbox-text">
                ${f.privacyPrefix || 'He leído y acepto la'}
                <button type="button" class="contact-form__legal-link" data-open-legal="privacidad">${f.privacyLinkText || 'Política de Privacidad'}</button>
                ${f.privacySuffix || ''}
                <span class="required-star">*</span>
              </span>
            </label>
          </div>

          <div class="contact-form__actions">
            <button type="submit" class="contact-form__submit-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
              <span class="btn-text">${f.submitBtn}</span>
            </button>
          </div>

          <div class="contact-form__status" role="status" aria-live="polite"></div>

          ${f.privacySummary ? `<div class="contact-form__privacy-summary">${f.privacySummary}</div>` : ''}

          <div class="contact-form__direct">
            <span>${f.directEmailNotice}</span>
            <a href="mailto:${email}?subject=Propuesta%20de%20Proyecto%20-%20AZ%20DISSENY" class="contact-form__email-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <span>${email}</span>
            </a>
            <button type="button" class="contact-form__copy-btn" data-copy-email="${email}" title="${f.copyEmailBtn}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
              <span class="copy-text">${f.copyEmailBtn}</span>
            </button>
          </div>
        </form>
      </div>
    `;
  },

  /**
   * Genera el contenido del modal legal con pestañas (Aviso Legal, Privacidad, Condiciones, Cookies).
   */
  legalModalContent(legal) {
    if (!legal || !legal.tabs) return '';
    const tabKeys = Object.keys(legal.tabs);

    const tabsNav = tabKeys.map((key, idx) => `
      <button type="button" class="legal-tab-btn ${idx === 0 ? 'active' : ''}" data-legal-tab="${key}" role="tab" aria-selected="${idx === 0 ? 'true' : 'false'}">
        ${legal.tabs[key].label}
      </button>
    `).join('');

    const tabsPanels = tabKeys.map((key, idx) => `
      <div class="legal-tab-panel ${idx === 0 ? 'active' : ''}" id="legal-panel-${key}" role="tabpanel">
        ${legal.tabs[key].content}
      </div>
    `).join('');

    return `
      <div class="legal-doc">
        <div class="legal-doc__header">
          <span class="contact-card__badge">${legal.badge || 'A-Z DISSENY, SL.'}</span>
          <h2 class="legal-doc__title">${legal.title || 'Información Legal'}</h2>
        </div>
        <div class="legal-tabs" role="tablist">
          ${tabsNav}
        </div>
        <div class="legal-panels">
          ${tabsPanels}
        </div>
      </div>
    `;
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
    
    // Inyectar cuestionario y banner de contacto en cada sección de detalle
    document.querySelectorAll('.detail__section').forEach(sec => {
       const bannerHtml = `
         <div class="detail__contact-cta animate-on-scroll">
           ${this.contactForm('detail-' + sec.id)}
         </div>`;
       sec.insertAdjacentHTML('beforeend', bannerHtml);
    });

    // Inyectar cuestionario en el modal de cabecera
    const modalFormEl = document.getElementById('modal-form-container');
    if (modalFormEl) {
      modalFormEl.innerHTML = this.contactForm('modal');
    }

    // Inyectar contenido en el modal legal
    const legalModalEl = document.getElementById('legal-modal-container');
    if (legalModalEl && c.legal) {
      legalModalEl.innerHTML = this.legalModalContent(c.legal);
    }
    
    const headerBtn = document.getElementById('header-contact-btn');
    if (headerBtn) headerBtn.textContent = c.contactBtn || 'Trabaja conmigo';


    // 3. Renderizar logo (Desactivado para preservar la estructura custom en HTML de AZ-DISSENY by SANDA)
    const logoEl = document.getElementById('brand-name');
    // if (logoEl) logoEl.textContent = c.brand.name;

    // 4. Renderizar barra legal sutil en el slider principal
    const sliderLegalEl = document.getElementById('slider-legal');
    if (sliderLegalEl && c.legal && c.legal.links) {
      const l = c.legal.links;
      sliderLegalEl.innerHTML = `
        <button type="button" class="slider__legal-link" data-open-legal="aviso">${l.aviso}</button>
        <span class="slider__legal-sep">·</span>
        <button type="button" class="slider__legal-link" data-open-legal="privacidad">${l.privacidad}</button>
        <span class="slider__legal-sep">·</span>
        <button type="button" class="slider__legal-link" data-open-legal="condiciones">${l.condiciones}</button>
        <span class="slider__legal-sep">·</span>
        <button type="button" class="slider__legal-link" data-open-legal="cookies">${l.cookies}</button>
      `;
    }

    // 5. Renderizar footer completo con enlaces legales
    const footerEl = document.getElementById('footer-content');
    if (footerEl) {
      const l = (c.legal && c.legal.links) ? c.legal.links : {
        aviso: 'Aviso Legal',
        privacidad: 'Política de Privacidad',
        condiciones: 'Condiciones de Venta',
        cookies: 'Política de Cookies'
      };
      const companyText = c.brand.company ? `${c.brand.company} · ` : '';
      footerEl.innerHTML = `
        <div class="site-footer__row">
          <span class="site-footer__brand">${c.brand.name}</span>
          <span class="site-footer__separator">·</span>
          <span class="site-footer__text">${companyText}${c.brand.author} © ${c.brand.year}</span>
          <span class="site-footer__separator">·</span>
          <a href="${c.brand.youtubeUrl}" target="_blank" rel="noopener noreferrer" class="site-footer__link">YouTube</a>
        </div>
        <div class="site-footer__legal">
          <button type="button" class="site-footer__legal-btn" data-open-legal="aviso">${l.aviso}</button>
          <span class="site-footer__separator">·</span>
          <button type="button" class="site-footer__legal-btn" data-open-legal="privacidad">${l.privacidad}</button>
          <span class="site-footer__separator">·</span>
          <button type="button" class="site-footer__legal-btn" data-open-legal="condiciones">${l.condiciones}</button>
          <span class="site-footer__separator">·</span>
          <button type="button" class="site-footer__legal-btn" data-open-legal="cookies">${l.cookies}</button>
        </div>`;
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
    Modal.init();
      Animations.init();
      if (sectionId === 'art' || sectionId === 'design' || sectionId === 'software') Lightbox.init();

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
  if (LegalModal.isOpen) {
    if (e.key === 'Escape') {
      LegalModal.close();
      return;
    }
  }
  if (Modal.isOpen) {
    if (e.key === 'Escape') {
      Modal.close();
      return;
    }
  }
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

/* ================================================
   X. MODAL DE CONTACTO
   ================================================ */
const Modal = {
  _bound: false,
  init() {
    this.modalEl = document.getElementById('contact-modal');
    this.closeBtn = document.getElementById('modal-close');
    this.overlay = document.getElementById('modal-overlay');
    this.headerBtn = document.getElementById('header-contact-btn');

    if (this._bound) return;
    this._bound = true;

    if (this.headerBtn) this.headerBtn.addEventListener('click', () => this.open());
    if (this.closeBtn) this.closeBtn.addEventListener('click', () => this.close());
    if (this.overlay) this.overlay.addEventListener('click', () => this.close());

    document.addEventListener('click', (e) => {
      if (e.target.closest('[data-open-modal]')) {
        this.open();
      }
    });
  },
  
  open() {
    if (!this.modalEl) return;
    this.modalEl.classList.remove('hidden');
    this.modalEl.setAttribute('aria-hidden', 'false');
  },
  
  close() {
    if (!this.modalEl) return;
    this.modalEl.classList.add('hidden');
    this.modalEl.setAttribute('aria-hidden', 'true');
  },

  get isOpen() {
    return this.modalEl && !this.modalEl.classList.contains('hidden');
  }
};


/* ================================================
   X2. MODAL LEGAL (Aviso Legal, Privacidad, Condiciones, Cookies)
   ================================================ */
const LegalModal = {
  _bound: false,
  init() {
    this.modalEl = document.getElementById('legal-modal');
    this.closeBtn = document.getElementById('legal-modal-close');
    this.overlay = document.getElementById('legal-modal-overlay');

    if (this._bound) return;
    this._bound = true;

    if (this.closeBtn) this.closeBtn.addEventListener('click', () => this.close());
    if (this.overlay) this.overlay.addEventListener('click', () => this.close());

    document.addEventListener('click', (e) => {
      const openTrigger = e.target.closest('[data-open-legal]');
      if (openTrigger) {
        e.preventDefault();
        const tabKey = openTrigger.dataset.openLegal || 'aviso';
        this.open(tabKey);
        return;
      }

      const tabBtn = e.target.closest('[data-legal-tab]');
      if (tabBtn) {
        e.preventDefault();
        this.switchTab(tabBtn.dataset.legalTab);
      }
    });
  },

  open(tabKey = 'aviso') {
    if (!this.modalEl) return;
    this.switchTab(tabKey);
    this.modalEl.classList.remove('hidden');
    this.modalEl.setAttribute('aria-hidden', 'false');
  },

  close() {
    if (!this.modalEl) return;
    this.modalEl.classList.add('hidden');
    this.modalEl.setAttribute('aria-hidden', 'true');
  },

  switchTab(tabKey) {
    if (!this.modalEl) return;
    this.modalEl.querySelectorAll('[data-legal-tab]').forEach(btn => {
      const isActive = btn.dataset.legalTab === tabKey;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
    this.modalEl.querySelectorAll('.legal-tab-panel').forEach(panel => {
      panel.classList.toggle('active', panel.id === `legal-panel-${tabKey}`);
    });
    const contentBox = this.modalEl.querySelector('.modal__content--legal');
    if (contentBox) contentBox.scrollTop = 0;
  },

  get isOpen() {
    return this.modalEl && !this.modalEl.classList.contains('hidden');
  }
};


/* ================================================
   Y. CONTACT FORM (FormSubmit AJAX & Chips & Copy)
   ================================================ */
const ContactForm = {
  init() {
    // 1. Selector interactivo de áreas (chips)
    document.addEventListener('change', (e) => {
      if (e.target.name === 'project_area') {
        const chipsContainer = e.target.closest('.form-chips');
        if (chipsContainer) {
          chipsContainer.querySelectorAll('.form-chip').forEach(c => c.classList.remove('active'));
          const activeChip = e.target.closest('.form-chip');
          if (activeChip) activeChip.classList.add('active');
        }
      }
    });

    // 2. Copiar correo al portapapeles con feedback
    document.addEventListener('click', (e) => {
      const copyBtn = e.target.closest('[data-copy-email]');
      if (!copyBtn) return;
      e.preventDefault();
      const email = copyBtn.dataset.copyEmail || 'azdisseny.sl@gmail.com';
      const label = copyBtn.querySelector('.copy-text');
      const isEn = typeof currentLang !== 'undefined' && currentLang === 'en';
      const copiedMsg = isEn ? 'Copied!' : '¡Copiado!';
      const origMsg = isEn ? 'Copy email' : 'Copiar correo';

      navigator.clipboard.writeText(email).then(() => {
        if (label) label.textContent = copiedMsg;
        copyBtn.classList.add('copied');
        setTimeout(() => {
          if (label) label.textContent = origMsg;
          copyBtn.classList.remove('copied');
        }, 2000);
      }).catch(() => {});
    });

    // 3. Envío de formulario vía FormSubmit AJAX
    document.addEventListener('submit', async (e) => {
      const form = e.target.closest('.contact-form');
      if (!form) return;
      e.preventDefault();

      const submitBtn = form.querySelector('.contact-form__submit-btn');
      const btnText = submitBtn ? submitBtn.querySelector('.btn-text') : null;
      const statusEl = form.querySelector('.contact-form__status');
      
      const isEn = typeof currentLang !== 'undefined' && currentLang === 'en';
      const fData = (typeof CONFIG !== 'undefined' && CONFIG.contactForm) ? CONFIG.contactForm : null;
      const origBtnText = btnText ? btnText.textContent : (isEn ? 'Send Proposal' : 'Enviar Propuesta');
      const submittingText = fData?.submittingText || (isEn ? 'Sending proposal...' : 'Enviando propuesta...');
      const successMsg = fData?.successMsg || (isEn ? '✓ Proposal sent successfully! I will reply to your email shortly.' : '✓ ¡Propuesta enviada con éxito! Te responderé en breve a tu correo.');
      const errorMsg = fData?.errorMsg || (isEn ? 'There was an error sending. Write to azdisseny.sl@gmail.com' : 'Hubo un error al enviar. Puedes escribirme a azdisseny.sl@gmail.com');

      const formData = new FormData(form);
      const name = formData.get('name') || '';
      const email = formData.get('email') || '';
      const phone = formData.get('phone') || (isEn ? 'Not specified' : 'No especificado');
      const area = formData.get('project_area') || (isEn ? 'General' : 'General');
      const message = formData.get('message') || '';

      const payload = {
        nombre: name,
        email: email,
        telefono: phone,
        area_colaboracion: area,
        mensaje: message,
        consentimiento_rgpd: isEn ? 'Accepted (Privacy Policy - A-Z DISSENY, SL.)' : 'Aceptado (Política de Privacidad - A-Z DISSENY, SL.)',
        _subject: `Nueva Propuesta [${area}] de ${name} - AZ DISSENY`,
        _template: 'table',
        _captcha: 'false'
      };

      if (submitBtn) submitBtn.disabled = true;
      if (btnText) btnText.textContent = submittingText;
      if (statusEl) {
        statusEl.className = 'contact-form__status pending';
        statusEl.textContent = submittingText;
        statusEl.style.display = 'block';
      }

      try {
        const response = await fetch('https://formsubmit.co/ajax/azdisseny.sl@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        if (response.ok) {
          if (statusEl) {
            statusEl.className = 'contact-form__status success';
            statusEl.textContent = successMsg;
          }
          form.reset();
          const chips = form.querySelectorAll('.form-chip');
          chips.forEach((c, idx) => c.classList.toggle('active', idx === 0));
          if (chips[0]) {
            const rad = chips[0].querySelector('input[type="radio"]');
            if (rad) rad.checked = true;
          }
          if (btnText) btnText.textContent = isEn ? '✓ Sent' : '✓ Enviado';
          setTimeout(() => {
            if (submitBtn) submitBtn.disabled = false;
            if (btnText) btnText.textContent = origBtnText;
          }, 4000);
        } else {
          throw new Error('FormSubmit response not ok');
        }
      } catch (err) {
        console.error('Contact Form submission error:', err);
        if (statusEl) {
          statusEl.className = 'contact-form__status error';
          statusEl.textContent = errorMsg;
        }
        if (submitBtn) submitBtn.disabled = false;
        if (btnText) btnText.textContent = origBtnText;
      }
    });
  }
};

const App = {
  currentView: 'SLIDER',
  activeDetail: null,

  init() {
    // 1. Generar todo el HTML desde CONFIG
    Renderer.renderAll();

    // 2. Bloquear scroll vertical (estado slider)
    document.body.classList.add('no-scroll');

    // 2.5 Activar el botón del idioma seleccionado
    const activeLangBtn = document.getElementById(`btn-lang-${typeof currentLang !== 'undefined' ? currentLang : 'es'}`);
    if (activeLangBtn) activeLangBtn.classList.add('active');

    // 3. Inicializar módulos
    Slider.init();
    Transitions.init();
    LazyLoader.init();
    Modal.init();
    LegalModal.init();
    ContactForm.init();

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

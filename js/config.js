/* ================================================
   SANDA — Configuración de Contenido (Multi-idioma)
   ================================================ */

'use strict';

const DICTIONARY = {
  es: {
    contactBtn: "Trabaja conmigo",
    contactCta: "¿Tienes un reto de ingeniería?",
    contactCtaBtn: "Iniciar Proyecto",
    contactBtn: "Work with me",
    contactCta: "Got an engineering challenge?",
    contactCtaBtn: "Start Project",
    brand: {
      name: 'SANDA',
      author: 'Francesc Sandalinas',
      year: 2025,
      youtubeUrl: 'https://www.youtube.com/@Sanda.projectAZ',
      youtubeHandle: '@Sanda.projectAZ',
      icon: 'assets/images/branding/sanda-icon.png',
    },
    slides: [
      {
        id: 'design',
        category: 'Diseño 3D & Fabricación',
        title: 'El diseño es ingeniería<br>con alma.',
        ctaText: 'Explora el Diseño y Fabricación',
        background: { type: 'image', src: 'assets/images/slides/design-lamp.webp', alt: 'Lámpara de diseño 3D orgánico creada por SANDA' },
      },
      {
        id: 'software',
        category: 'Ingeniería de Software',
        title: 'Producty — simplifica<br>tus objetivos.',
        ctaText: 'Explora Producty',
        background: { type: 'product', src: 'assets/images/software/producty-mockup-1.png', alt: 'Producty App - Mockup' },
      },
      {
        id: 'philosophy',
        category: 'Filosofía & Surf',
        title: 'La ingeniería<br>de la mente.',
        ctaText: 'Explora la Ingeniería de la Mente',
        background: { type: 'video', src: 'assets/video/surf-munich.mp4' },
      },
      {
        id: 'art',
        category: 'Expresión Visual',
        title: 'Cada cuadro es un<br>universo propio.',
        ctaText: 'Explora la Galería de Arte',
        background: { type: 'image', src: 'assets/images/art/ericeira-vibes.jpg', alt: 'Ericeira Vibes - Cuadro original de SANDA' },
      },
    ],
    design: {
      hero: { type: 'image', src: 'assets/images/slides/design-lamp.webp', alt: 'Lámpara de diseño orgánico SANDA', title: 'Diseño & Fabricación', subtitle: 'De la idea al objeto físico. Diseño industrial, impresión 3D y fabricación digital.' },
      quote: 'Si tu entorno lo haces más bonito, tu vida también lo será.',
      sectionLabel: 'Proyectos',
      sectionTitle: 'Ingeniería de producto',
      items: [
        { image: 'assets/images/design/bolet-lamp.jpg', alt: 'Bolet Lamp — Lámpara hecha con micelio', name: 'Bolet Lamp', desc: 'Lámpara hecha con micelio' },
        { image: 'assets/images/design/firestone.png', alt: 'Firestone Lamp — Impresión 3D', name: 'Firestone Lamp', desc: 'Producción personal impresa en 3D. Consultar precio.' },
      ],
      massProduction: {
        title: 'Producción en Masa y Mecánica Avanzada',
        desc: 'Dirección técnica y planificación estratégica para cadenas de montaje a gran escala. Experiencia demostrable liderando equipos de electromecánica en la producción en masa de 60 embarcaciones. Especializado en la integración de procesos de chapa, CNC e impresión 3D para resolver y optimizar ensamblajes de alta complejidad compuestos por más de 60 piezas.',
        images: [
          { src: 'assets/images/design/mass-prod-01.png', alt: 'Ensamblaje híbrido (Impresión 3D + Chapa CNC)' },
          { src: 'assets/images/design/mass-prod-02.png', alt: 'Cuadros de control electromecánicos en serie' },
          { src: 'assets/images/design/mass-prod-03.png', alt: 'Ensamblaje electromecánico de alta complejidad' },
          { src: 'assets/images/design/mass-prod-04.png', alt: 'Modelo 3D CAD de chapa metálica' },
        ],
      },
    },
    software: {
      hero: { type: 'product', src: 'assets/images/software/producty-mockup-1.png', alt: 'Producty App Mockup', title: 'Producty', subtitle: 'La app que simplifica tus objetivos complejos con inteligencia artificial.' },
      appIcon: 'assets/images/software/producty-icon.jpeg',
      appName: 'Producty',
      tagline: 'Simplifica. Ejecuta. Avanza.',
      problem: 'Tienes un objetivo grande — camperizar tu coche, lanzar un proyecto, aprender una skill nueva — pero no sabes por dónde empezar. La complejidad te paraliza.',
      solution: 'Producty usa inteligencia artificial para desglosar cualquier objetivo en pasos simples y ejecutables. Tú defines el destino, Producty traza el camino.',
      playStoreUrl: 'https://play.google.com/store',
      playStoreText: 'Descargar en Google Play',
      screenshots: [
        { src: 'assets/images/software/producty-shot-01.png', alt: 'Producty - Comprométete contigo mismo' },
        { src: 'assets/images/software/producty-shot-02.png', alt: 'Producty - Controla tu tiempo' },
        { src: 'assets/images/software/producty-shot-03.png', alt: 'Producty - Desglose inteligente' },
      ],
    },
    philosophy: {
      hero: { type: 'video', src: 'assets/video/surf-munich.mp4', title: 'La Ingeniería de la Mente', subtitle: 'Reflexiones sobre la vida, el surf y el camino del creador.' },
      quote: 'El surf te enseña que no controlas las olas, solo eliges cómo las surfeas.',
      mainVideoEmbed: null,
      videos: [
        { url: 'https://www.youtube.com/@Sanda.projectAZ', thumbnail: 'assets/images/art/ericeira-vibes.jpg', alt: 'Visita el canal de YouTube', title: 'Visita el canal de YouTube', channel: '@Sanda.projectAZ' },
        { url: 'https://www.youtube.com/@Sanda.projectAZ', thumbnail: 'assets/images/branding/sanda-icon.png', alt: 'Próximamente', title: 'Próximamente — Nuevos Episodios', channel: '@Sanda.projectAZ' },
      ],
    },
    art: {
      hero: { type: 'image', src: 'assets/images/art/ericeira-vibes.jpg', alt: 'Ericeira Vibes — Cuadro de SANDA', title: 'Galería de Arte', subtitle: 'Pintura, ilustración y expresión visual libre. Cada cuadro cuenta una historia.' },
      quote: 'El arte no se explica, se siente.',
      sectionLabel: 'Colección',
      sectionTitle: 'Obras Originales',
      items: [
        { image: 'assets/images/art/ericeira-vibes.jpg', alt: 'Ericeira Vibes', name: 'Ericeira Vibes' },
        { image: 'assets/images/art/nightsurfer-bcn.jpeg', alt: 'Night Surfer BCN', name: 'Night Surfer BCN' },
        { image: 'assets/images/art/sopelana-surf-trip.jpg', alt: 'Sopelana Surf Trip', name: 'Sopelana Surf Trip' },
        { image: 'assets/images/art/spartan-santjordi.jpeg', alt: 'Spartan Sant Jordi', name: 'Spartan Sant Jordi' },
        { image: 'assets/images/art/barna-surf.jpg', alt: 'Barna Surf', name: 'Barna Surf' },
        { image: 'assets/images/art/sardana-catalana.jpg', alt: 'Dancing in the Night', name: 'Dancing in the Night' },
        { image: 'assets/images/art/watercolor-waterfall.jpg', alt: 'Acuarela', name: 'Acuarela' },
        { image: 'assets/images/art/sueno-ornitorrinco.jpg', alt: 'Sueño Ornitorrinco', name: 'Sueño Ornitorrinco' },
      ],
    },
    settings: { autoplayInterval: 6000, swipeThreshold: 50, lazyLoadMargin: '200px' },
  },
  
  en: {
    contactBtn: "Work with me",
    contactCta: "Got an engineering challenge?",
    contactCtaBtn: "Start Project",
    brand: {
      name: 'SANDA',
      author: 'Francesc Sandalinas',
      year: 2025,
      youtubeUrl: 'https://www.youtube.com/@Sanda.projectAZ',
      youtubeHandle: '@Sanda.projectAZ',
      icon: 'assets/images/branding/sanda-icon.png',
    },
    slides: [
      {
        id: 'design',
        category: '3D Design & Manufacturing',
        title: 'Design is engineering<br>with a soul.',
        ctaText: 'Explore Design and Manufacturing',
        background: { type: 'image', src: 'assets/images/slides/design-lamp.webp', alt: 'Organic 3D design lamp created by SANDA' },
      },
      {
        id: 'software',
        category: 'Software Engineering',
        title: 'Producty — simplify<br>your goals.',
        ctaText: 'Explore Producty',
        background: { type: 'product', src: 'assets/images/software/producty-mockup-1.png', alt: 'Producty App - Mockup' },
      },
      {
        id: 'philosophy',
        category: 'Philosophy & Surfing',
        title: 'Engineering<br>of the mind.',
        ctaText: 'Explore Engineering of the Mind',
        background: { type: 'video', src: 'assets/video/surf-munich.mp4' },
      },
      {
        id: 'art',
        category: 'Visual Expression',
        title: 'Every painting is its<br>own universe.',
        ctaText: 'Explore the Art Gallery',
        background: { type: 'image', src: 'assets/images/art/ericeira-vibes.jpg', alt: 'Ericeira Vibes - Original painting by SANDA' },
      },
    ],
    design: {
      hero: { type: 'image', src: 'assets/images/slides/design-lamp.webp', alt: 'Organic design lamp by SANDA', title: 'Design & Manufacturing', subtitle: 'From idea to physical object. Industrial design, 3D printing and digital manufacturing.' },
      quote: 'If you make your surroundings more beautiful, your life will be too.',
      sectionLabel: 'Projects',
      sectionTitle: 'Product Engineering',
      items: [
        { image: 'assets/images/design/bolet-lamp.jpg', alt: 'Bolet Lamp — Mushroom mycelium lamp', name: 'Bolet Lamp', desc: 'Lamp made with mycelium' },
        { image: 'assets/images/design/firestone.png', alt: 'Firestone Lamp — 3D Printing', name: 'Firestone Lamp', desc: '3D printed lamp personal production. Ask for price.' },
      ],
      massProduction: {
        title: 'Mass Production & Advanced Mechanics',
        desc: 'Technical direction and strategic planning for large-scale assembly lines. Proven experience leading electromechanical teams in the mass production of 60 boats. Specialized in the integration of sheet metal, CNC and 3D printing processes to solve and optimize highly complex assemblies composed of more than 60 parts.',
        images: [
          { src: 'assets/images/design/mass-prod-01.png', alt: 'Hybrid assembly (3D Printing + CNC Sheet Metal)' },
          { src: 'assets/images/design/mass-prod-02.png', alt: 'Serial electromechanical control panels' },
          { src: 'assets/images/design/mass-prod-03.png', alt: 'Highly complex electromechanical assembly' },
          { src: 'assets/images/design/mass-prod-04.png', alt: '3D CAD sheet metal model' },
        ],
      },
    },
    software: {
      hero: { type: 'product', src: 'assets/images/software/producty-mockup-1.png', alt: 'Producty App Mockup', title: 'Producty', subtitle: 'The app that simplifies your complex goals with artificial intelligence.' },
      appIcon: 'assets/images/software/producty-icon.jpeg',
      appName: 'Producty',
      tagline: 'Simplify. Execute. Advance.',
      problem: 'You have a big goal — camperizing your car, launching a project, learning a new skill — but you do not know where to start. Complexity paralyzes you.',
      solution: 'Producty uses artificial intelligence to break down any goal into simple, actionable steps. You define the destination, Producty charts the path.',
      playStoreUrl: 'https://play.google.com/store',
      playStoreText: 'Download on Google Play',
      screenshots: [
        { src: 'assets/images/software/producty-shot-01.png', alt: 'Producty - Commit to yourself' },
        { src: 'assets/images/software/producty-shot-02.png', alt: 'Producty - Control your time' },
        { src: 'assets/images/software/producty-shot-03.png', alt: 'Producty - Smart breakdown' },
      ],
    },
    philosophy: {
      hero: { type: 'video', src: 'assets/video/surf-munich.mp4', title: 'Engineering of the Mind', subtitle: 'Reflections on life, surfing and the path of the creator.' },
      quote: 'Surfing teaches you that you do not control the waves, you only choose how to surf them.',
      mainVideoEmbed: null,
      videos: [
        { url: 'https://www.youtube.com/@Sanda.projectAZ', thumbnail: 'assets/images/art/ericeira-vibes.jpg', alt: 'Visit the YouTube channel', title: 'Visit the YouTube channel', channel: '@Sanda.projectAZ' },
        { url: 'https://www.youtube.com/@Sanda.projectAZ', thumbnail: 'assets/images/branding/sanda-icon.png', alt: 'Coming soon', title: 'Coming soon — New Episodes', channel: '@Sanda.projectAZ' },
      ],
    },
    art: {
      hero: { type: 'image', src: 'assets/images/art/ericeira-vibes.jpg', alt: 'Ericeira Vibes — Painting by SANDA', title: 'Art Gallery', subtitle: 'Painting, illustration and free visual expression. Every painting tells a story.' },
      quote: 'Art is not explained, it is felt.',
      sectionLabel: 'Collection',
      sectionTitle: 'Original Artworks',
      items: [
        { image: 'assets/images/art/ericeira-vibes.jpg', alt: 'Ericeira Vibes', name: 'Ericeira Vibes' },
        { image: 'assets/images/art/nightsurfer-bcn.jpeg', alt: 'Night Surfer BCN', name: 'Night Surfer BCN' },
        { image: 'assets/images/art/sopelana-surf-trip.jpg', alt: 'Sopelana Surf Trip', name: 'Sopelana Surf Trip' },
        { image: 'assets/images/art/spartan-santjordi.jpeg', alt: 'Spartan Sant Jordi', name: 'Spartan Sant Jordi' },
        { image: 'assets/images/art/barna-surf.jpg', alt: 'Barna Surf', name: 'Barna Surf' },
        { image: 'assets/images/art/sardana-catalana.jpg', alt: 'Dancing in the Night', name: 'Dancing in the Night' },
        { image: 'assets/images/art/watercolor-waterfall.jpg', alt: 'Watercolor', name: 'Watercolor' },
        { image: 'assets/images/art/sueno-ornitorrinco.jpg', alt: 'Sueño Ornitorrinco', name: 'Sueño Ornitorrinco' },
      ],
    },
    settings: { autoplayInterval: 6000, swipeThreshold: 50, lazyLoadMargin: '200px' },
  }
};

// --- Language Controller ---
let currentLang = localStorage.getItem('sanda_lang') || 'es';
let CONFIG = DICTIONARY[currentLang];

function setLanguage(lang) {
  if (DICTIONARY[lang]) {
    localStorage.setItem('sanda_lang', lang);
    window.location.reload();
  }
}

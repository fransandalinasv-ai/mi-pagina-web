/* ================================================
   SANDA — Configuración de Contenido (Multi-idioma)
   ================================================ */

'use strict';

const DICTIONARY = {
  es: {
    contactBtn: "Trabaja conmigo",
    contactCta: "¿Tienes un reto de ingeniería?",
    contactCtaSub: "Escríbeme directamente con los detalles de tu proyecto o consulta técnica.",
    contactCtaBtn: "Iniciar Proyecto",
    contactEmail: "azdisseny.sl@gmail.com",
    contactModal: {
      badge: "AZ DISSENY · Contacto Directo",
      title: "¿Tienes un reto de ingeniería?",
      subtitle: "Cuéntame sobre tu proyecto, consulta técnica o idea de colaboración y te responderé en breve.",
      copyBtn: "Copiar",
      copiedBtn: "¡Copiado!",
      actionBtn: "Abrir correo y escribir"
    },
    contactForm: {
      badge: "AZ DISSENY · Propuesta & Contacto Directo",
      title: "¿Tienes un reto o proyecto en mente?",
      subtitle: "Cuéntame los detalles de tu idea y cómo podemos colaborar. Se enviará automáticamente a mi correo personal de AZ DISSENY.",
      nameLabel: "Nombre o Empresa",
      namePlaceholder: "Tu nombre o empresa",
      emailLabel: "Correo Electrónico",
      emailPlaceholder: "tu@correo.com",
      phoneLabel: "Teléfono / WhatsApp",
      phonePlaceholder: "+34 600 000 000 (Opcional)",
      areaLabel: "¿En qué área deseas colaborar?",
      areas: [
        { id: "design", label: "⚙️ Diseño Industrial & CAD 3D", value: "Diseño Industrial & Fabricación (CAD 3D / CNC / Serie)" },
        { id: "software", label: "🤖 Software & Inteligencia Artificial", value: "Software & Inteligencia Artificial" },
        { id: "art", label: "🎨 Arte & Encargos Visuales", value: "Arte & Expresión Visual" },
        { id: "consulting", label: "💡 Consultoría Técnica / Otro Reto", value: "Consultoría Técnica / Otro Reto" }
      ],
      messageLabel: "Cuéntame sobre tu proyecto",
      messagePlaceholder: "Describe brevemente tu idea, requerimientos técnicos, objetivos o plazos estimados...",
      submitBtn: "Enviar Propuesta",
      submittingText: "Enviando propuesta...",
      successMsg: "✓ ¡Propuesta enviada con éxito! Te responderé en breve a tu correo.",
      errorMsg: "Hubo un error al enviar. Puedes escribirme directamente a azdisseny.sl@gmail.com",
      directEmailNotice: "O si prefieres escribir directamente:",
      copyEmailBtn: "Copiar correo"
    },
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
        category: 'Software & Inteligencia Artificial',
        title: 'Producty — simplifica<br>tus objetivos.',
        ctaText: 'Explora Software & IA',
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
        { image: 'assets/images/design/bolet-lamp.jpg', alt: 'Bolet Lamp — Lámpara hecha con micelio', name: 'Bolet Lamp', desc: 'Lámpara de micelio orgánico (Pieza de exposición e I+D)', tags: ['Biomateriales', 'Micelio', 'Diseño Orgánico'] },
        { 
          image: 'assets/images/design/firestone.png', 
          alt: 'Firestone Lamp — Impresión 3D', 
          name: 'Firestone Lamp', 
          desc: 'Producción artesanal impresa en 3D. Diseño orgánico de autor.', 
          tags: ['Impresión 3D FDM', 'Fabricación Digital', 'Paramétrico'],
          price: '90 €',
          buyUrl: 'https://buy.stripe.com/test_5kQbJ18Bw1P0fBd5YIcwg00',
          buyText: 'Comprar Lámpara — 90 €'
        },
      ],
      massProduction: {
        title: 'Producción en Masa y Mecánica Avanzada',
        desc: 'Dirección técnica y planificación estratégica para cadenas de montaje a gran escala. Experiencia demostrable liderando equipos de electromecánica en la producción en masa de 60 embarcaciones. Especializado en la integración de procesos de chapa, CNC e impresión 3D para resolver y optimizar ensamblajes de alta complejidad compuestos por más de 60 piezas.',
        featured: {
          image: 'assets/images/design/naval-interceptor.png',
          alt: 'Embarcaciones de alta velocidad — Ingeniería Electromecánica por Francesc Sandalinas',
          badge: 'Ingeniería Naval & Electromecánica',
          title: 'Arquitectura Electromecánica Naval',
          desc: 'Diseño integral y despliegue de los sistemas electromecánicos en embarcaciones de intercepción de alta velocidad. Desde la ergonomía de consolas de pilotaje hasta la infraestructura eléctrica crítica para navegación y seguridad en mar abierto.',
          tags: ['SolidWorks CAD', 'Chapa CNC', 'Impresión 3D', 'Ensamblaje en Serie', 'Tolerancias ISO'],
          highlights: [
            { title: 'Paneles y Consolas de Mando', text: 'Diseño 3D y cableado de cuadros de control estancos (IP67), botoneras ergonómicas e instrumentación centralizada.' },
            { title: 'Navegación & Telecomunicaciones', text: 'Integración completa de sistema AIS (Automatic Identification System), radio VHF marina, GPS y sensores náuticos.' },
            { title: 'Sistemas Auxiliares Críticos', text: 'Automatización redundante de bombas de achique con boyas de nivel, ventilación de sentinas e iluminación de navegación.' },
            { title: 'Gestión de Potencia & Baterías', text: 'Distribución de corriente marina (DC), conmutación inteligente de bancos de baterías y protección contra corrosión galvánica.' }
          ]
        },
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
      tags: ['Inteligencia Artificial', 'Desarrollo Mobile', 'Diseño UI/UX', 'Productividad'],
      problem: 'Tienes un objetivo grande — camperizar tu coche, lanzar un proyecto, aprender una skill nueva — pero no sabes por dónde empezar. La complejidad te paraliza.',
      solution: 'Producty usa inteligencia artificial para desglosar cualquier objetivo en pasos simples y ejecutables. Tú defines el destino, Producty traza el camino.',
      betaBadge: 'En fase de desarrollo · Beta privada',
      playStoreText: 'Solicitar acceso a la Beta',
      betaSubtext: 'Participa como tester temprano antes del lanzamiento oficial en Google Play.',
      screenshots: [
        { src: 'assets/images/software/producty-shot-01.png', alt: 'Producty - Comprométete contigo mismo' },
        { src: 'assets/images/software/producty-shot-02.png', alt: 'Producty - Controla tu tiempo' },
        { src: 'assets/images/software/producty-shot-03.png', alt: 'Producty - Desglose inteligente' },
        { src: 'assets/images/software/grup6.png', alt: 'Producty - Telemetría' },
      ],
      ecosystem: {
        sectionLabel: 'Ecosistema & Eventos Tech',
        sectionTitle: 'VisionarIA & Inteligencia Artificial',
        card: {
          image: 'assets/images/software/visionaria-potencial-digital.png',
          alt: 'Francesc Sandalinas e Isabel con VisionarIA',
          badge: 'Ecosistema & Alianzas B2B',
          title: 'Estrategia & Despliegue de Inteligencia Artificial',
          subtitle: 'Colaboración Estratégica con VisionarIA',
          desc: 'Participación activa en el ecosistema de inteligencia artificial aplicada junto a VisionarIA. Explorando la intersección entre ingeniería de software, comunicación estratégica y validación de betas B2B, facilitando la adopción temprana de soluciones de IA en entornos corporativos.',
          tags: ['Estrategia de IA', 'Comunicación Tech', 'Betas B2B', 'Adopción Tecnológica']
        }
      },
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
    contactCtaSub: "Write to me directly with your project details or technical inquiry.",
    contactCtaBtn: "Start Project",
    contactEmail: "azdisseny.sl@gmail.com",
    contactModal: {
      badge: "AZ DISSENY · Direct Contact",
      title: "Got an engineering challenge?",
      subtitle: "Tell me about your project, technical inquiry, or collaboration idea and I will reply shortly.",
      copyBtn: "Copy",
      copiedBtn: "Copied!",
      actionBtn: "Open email & write"
    },
    contactForm: {
      badge: "AZ DISSENY · Direct Proposal & Contact",
      title: "Got a challenge or project in mind?",
      subtitle: "Tell me the details of your idea and how we can collaborate. It will be delivered automatically to my AZ DISSENY email.",
      nameLabel: "Name or Company",
      namePlaceholder: "Your name or company",
      emailLabel: "Email Address",
      emailPlaceholder: "your@email.com",
      phoneLabel: "Phone / WhatsApp",
      phonePlaceholder: "+34 600 000 000 (Optional)",
      areaLabel: "Which area do you want to collaborate on?",
      areas: [
        { id: "design", label: "⚙️ Industrial Design & 3D CAD", value: "Industrial Design & Manufacturing (3D CAD / CNC / Serial)" },
        { id: "software", label: "🤖 Software & Artificial Intelligence", value: "Software & Artificial Intelligence" },
        { id: "art", label: "🎨 Art & Visual Commissions", value: "Art & Visual Expression" },
        { id: "consulting", label: "💡 Technical Consulting / Other", value: "Technical Consulting / Other Challenge" }
      ],
      messageLabel: "Tell me about your project",
      messagePlaceholder: "Describe your idea, technical requirements, objectives or estimated timeline...",
      submitBtn: "Send Proposal",
      submittingText: "Sending proposal...",
      successMsg: "✓ Proposal sent successfully! I will reply to your email shortly.",
      errorMsg: "There was an error sending. You can write directly to azdisseny.sl@gmail.com",
      directEmailNotice: "Or if you prefer to write directly:",
      copyEmailBtn: "Copy email"
    },
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
        category: 'Software & Artificial Intelligence',
        title: 'Producty — simplify<br>your goals.',
        ctaText: 'Explore Software & AI',
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
        { image: 'assets/images/design/bolet-lamp.jpg', alt: 'Bolet Lamp — Mushroom mycelium lamp', name: 'Bolet Lamp', desc: 'Organic mushroom mycelium lamp (Exhibition & R&D piece)', tags: ['Biomaterials', 'Mycelium', 'Organic Design'] },
        { 
          image: 'assets/images/design/firestone.png', 
          alt: 'Firestone Lamp — 3D Printing', 
          name: 'Firestone Lamp', 
          desc: 'Exclusive 3D printed lamp produced by A-Z Disseny SL.',
          tags: ['3D Printing FDM', 'Digital Fabrication', 'Parametric'],
          price: '90 €',
          buyUrl: 'https://buy.stripe.com/test_5kQbJ18Bw1P0fBd5YIcwg00',
          buyText: 'Buy Lamp — 90 €'
        },
      ],
      massProduction: {
        title: 'Mass Production & Advanced Mechanics',
        desc: 'Technical direction and strategic planning for large-scale assembly lines. Proven experience leading electromechanical teams in the mass production of 60 boats. Specialized in the integration of sheet metal, CNC and 3D printing processes to solve and optimize highly complex assemblies composed of more than 60 parts.',
        featured: {
          image: 'assets/images/design/naval-interceptor.png',
          alt: 'High-speed interceptor vessel — Electromechanical Engineering by Francesc Sandalinas',
          badge: 'Marine Engineering & Electromechanics',
          title: 'Naval Electromechanical Architecture',
          desc: 'Comprehensive design and implementation of electromechanical systems for high-speed interceptor craft. From ergonomic helm consoles to critical electrical infrastructure for offshore navigation and safety.',
          tags: ['SolidWorks CAD', 'CNC Sheet Metal', '3D Printing', 'Mass Production', 'ISO Tolerances'],
          highlights: [
            { title: 'Control Panels & Helm Consoles', text: '3D CAD design and wiring of waterproof switchboards (IP67), ergonomic controls and centralized instrumentation.' },
            { title: 'Navigation & Telecommunications', text: 'Full integration of AIS (Automatic Identification System), marine VHF radio, GPS, and navigational telemetry.' },
            { title: 'Critical Auxiliary Systems', text: 'Automated redundant bilge pump lines with float switches, engine bay ventilation, and marine navigation lighting.' },
            { title: 'Power Distribution & Batteries', text: 'Marine DC electrical distribution, battery bank management/switching, and galvanic corrosion protection.' }
          ]
        },
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
      tags: ['Artificial Intelligence', 'Mobile Development', 'UI/UX Design', 'Productivity'],
      problem: 'You have a big goal — camperizing your car, launching a project, learning a new skill — but you do not know where to start. Complexity paralyzes you.',
      solution: 'Producty uses artificial intelligence to break down any goal into simple, actionable steps. You define the destination, Producty charts the path.',
      betaBadge: 'In Development · Closed Beta',
      playStoreText: 'Request Beta Access',
      betaSubtext: 'Join as an early tester ahead of the official launch on Google Play.',
      screenshots: [
        { src: 'assets/images/software/producty-shot-01.png', alt: 'Producty - Commit to yourself' },
        { src: 'assets/images/software/producty-shot-02.png', alt: 'Producty - Control your time' },
        { src: 'assets/images/software/producty-shot-03.png', alt: 'Producty - Smart breakdown' },
        { src: 'assets/images/software/grup6.png', alt: 'Producty - Telemetry' },
      ],
      ecosystem: {
        sectionLabel: 'Tech Ecosystem & Events',
        sectionTitle: 'VisionarIA & Applied AI',
        card: {
          image: 'assets/images/software/visionaria-potencial-digital.png',
          alt: 'Francesc Sandalinas and Isabel with VisionarIA',
          badge: 'Ecosystem & B2B Alliances',
          title: 'Artificial Intelligence Strategy & Deployment',
          subtitle: 'Strategic Collaboration with VisionarIA',
          desc: 'Active participation in the applied artificial intelligence ecosystem alongside VisionarIA. Exploring the intersection between software engineering, strategic communication, and B2B beta validation, facilitating the early adoption of AI solutions in corporate environments.',
          tags: ['AI Strategy', 'Tech Communication', 'B2B Betas', 'Tech Adoption']
        }
      },
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

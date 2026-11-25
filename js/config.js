/* =========================================================
   AZDISSENY — Bilingual Studio Content (EN / ES)
   Verified real data only · Entity: A-Z DISSENY, SL
   ========================================================= */

'use strict';

window.AZ_CONFIG = {
  email: 'azdisseny.sl@gmail.com',
  formEndpoint: 'https://formsubmit.co/ajax/azdisseny.sl@gmail.com',

  heroSlides: [
    { src: 'assets/images/slides/design-lamp.webp', alt: 'AZdisseny Parametric Lighting Design' },
    { src: 'assets/images/design/naval-interceptor.png', alt: 'High-Speed Naval Electromechanical Architecture' },
    { src: 'assets/images/design/heater-exploded.png', alt: 'Smart Heater Exploded CAD Assembly' },
    { src: 'assets/images/software/prometeos-organigrama.png', alt: 'prometeOS Multi-Agent AI Architecture' }
  ],

  marqueeItems: [
    'INDUSTRIAL DESIGN',
    'SOLIDWORKS & RHINO 3D',
    'MASS PRODUCTION LEADERSHIP',
    'SUPPLIER & SUPPLY CHAIN MANAGEMENT',
    'DFM · SHEET METAL · CNC · 3D PRINTING',
    'MOBILE APPS (FLUTTER & SUPABASE)',
    'PYTHON AUTOMATION',
    'APPLIED AI SYSTEMS'
  ],

  i18n: {
    en: {
      nav: {
        services: 'Services',
        work: 'Work',
        lab: 'Software & AI',
        process: 'Process',
        contact: 'Contact'
      },
      hero: {
        eyebrow: 'PHYSICAL & DIGITAL PRODUCT STUDIO · BARCELONA',
        title: 'You bring the idea.<br>We make it real.',
        subtitle: 'End-to-end product engineering — from 3D CAD, prototyping and mass production with suppliers to mobile apps and applied AI.',
        ctaPrimary: 'Start a Project',
        ctaSecondary: 'Explore Work'
      },
      services: {
        eyebrow: '01 / CAPABILITIES',
        title: 'From raw concept to factory floor & app launch.',
        desc: 'Most studios stop at renders. We design, engineer, manage suppliers for mass production, and build the software around your product.',
        cta: 'Discuss Your Idea',
        note: 'Product Design · Mass Production · Software & AI',
        pillars: [
          {
            id: 'design',
            tabLabel: '01 · Product Design & CAD 3D',
            index: 'CAPABILITY 01 / 03',
            title: 'Industrial Design & Precision Mechanical CAD',
            desc: 'From organic Class-A surfacing to complex electromechanical assemblies ready for fabrication. Complete 3D models, weldment & part drawings, tolerances and BOM.',
            glow: 'radial-gradient(circle at 70% 35%, rgba(217, 119, 6, 0.42), rgba(15, 15, 18, 0.9) 70%)',
            chips: ['SolidWorks', 'Rhino 3D & Grasshopper', 'Siemens NX', 'AutoCAD', 'Class-A Surfacing', 'FEA / CFD', 'BOM & Drawings']
          },
          {
            id: 'production',
            tabLabel: '02 · Mass Production & Suppliers',
            index: 'CAPABILITY 02 / 03',
            title: 'Mass Production Leadership & Supply Chain',
            desc: 'Need to manufacture at scale? We handle DFM optimization, supplier sourcing and negotiation (CNC, laser cutting, sheet metal, molds, 3D printing), quality control and series delivery.',
            glow: 'radial-gradient(circle at 65% 40%, rgba(220, 38, 38, 0.36), rgba(15, 15, 18, 0.92) 70%)',
            chips: ['DFM Optimization', 'Supplier Negotiation', 'CNC & Laser Cut', 'Sheet Metal', 'Custom Molds', '3D Printing (FDM/SLA)', 'QC & Series Production']
          },
          {
            id: 'software',
            tabLabel: '03 · Software, Apps & Applied AI',
            index: 'CAPABILITY 03 / 03',
            title: 'Mobile Apps, Digital Products & Applied AI',
            desc: 'We design and build clean, high-performance mobile apps, web platforms, Python engineering automation and AI agent workflows tailored to real operations.',
            glow: 'radial-gradient(circle at 68% 35%, rgba(37, 99, 235, 0.42), rgba(15, 15, 18, 0.92) 70%)',
            chips: ['Flutter & Dart', 'iOS & Android', 'Supabase & SQL', 'UX / UI Figma', 'Python Automation', 'Applied AI Agents']
          }
        ]
      },
      work: {
        eyebrow: '02 / HARDWARE & MASS PRODUCTION',
        title: 'Physical Products & Production Engineering.',
        desc: 'Selected mechanical engineering, mass production leadership, biomaterial R&D and parametric lighting.'
      },
      lab: {
        eyebrow: '03 / SOFTWARE, APPS & APPLIED AI',
        title: 'Digital Products & AI Architecture.',
        desc: 'In-house apps and AI systems designed, engineered and shipped across iOS, Android and desktop.'
      },
      process: {
        eyebrow: '04 / HOW WE WORK',
        title: 'One studio. Four clear phases.',
        steps: [
          { num: '01', title: 'Discovery & Specs', desc: 'We translate your idea into concrete technical requirements, cost targets, feasibility and a clear roadmap.' },
          { num: '02', title: 'Design & Engineering', desc: '3D CAD assemblies, Class-A surfacing, FEA/CFD validation or UX/UI and full-stack software architecture.' },
          { num: '03', title: 'Prototyping & Suppliers', desc: 'Rapid 3D printing, functional prototypes, supplier sourcing, tooling quotes and DFM adjustments.' },
          { num: '04', title: 'Production & Launch', desc: 'Series manufacturing supervision, quality control with fabricators, or app store & cloud deployment.' }
        ]
      },
      mystery: {
        title: 'Your Next Product?',
        desc: 'Hardware, mass production or a digital app — bring the idea.',
        cta: 'Start a Project'
      },
      footer: {
        eyebrow: 'START SOMETHING REAL',
        headline: 'Have a product, production run or app in mind?',
        cta: 'Start a Project',
        contactLabel: 'DIRECT',
        socialLabel: 'STUDIO',
        legalLabel: 'LEGAL',
        legalNotice: 'Legal Notice',
        privacy: 'Privacy',
        cookies: 'Cookies'
      },
      floating: {
        cta: 'Start a Project'
      },
      modal: {
        buildSimilar: 'Build something similar',
        specsLabel: 'STACK & DISCIPLINES',
        contactTitle: 'Tell us about your project.',
        contactSub: 'Whether it is a physical product, a mass production run or a software app, share the basics and we will get back to you.',
        name: 'Name or Company',
        namePh: 'Your name or company',
        email: 'Email',
        emailPh: 'you@company.com',
        area: 'Project Area',
        areas: [
          'Product Design & 3D CAD',
          'Mass Production & Supplier Management',
          'Software, Mobile App & Applied AI',
          'Full End-to-End (Hardware + Software)'
        ],
        message: 'Project Details',
        messagePh: 'Describe your idea, technical goals, target timeline or manufacturing needs...',
        privacyPrefix: 'I have read and accept the',
        privacyLink: 'Privacy Policy',
        rgpdNote: 'Controller: A-Z DISSENY, SL (NIF B60369329). Purpose: respond to your project inquiry. Processed via FormSubmit.co and email. Exercise rights at azdisseny.sl@gmail.com.',
        submit: 'Send Inquiry',
        sending: 'Sending...',
        success: 'Inquiry sent. We will reply shortly to your email.',
        error: 'Could not send right now. Please email azdisseny.sl@gmail.com directly.'
      },
      hardwareProjects: [
        {
          id: 'naval',
          title: 'Naval Electromechanical Systems',
          meta: 'MASS PRODUCTION · +60 VESSELS',
          summary: 'End-to-end electromechanical design, supplier management and series production for 60+ high-speed vessels.',
          cover: 'assets/images/design/naval-interceptor.png',
          gallery: [
            'assets/images/design/naval-interceptor.png',
            'assets/images/design/mass-prod-02.png',
            'assets/images/design/mass-prod-03.png'
          ],
          description: 'Complete lifecycle leadership from 3D CAD and engineering change requests to supplier negotiation (5083 marine sheet metal, CNC machining, laser cutting) and shop-floor quality control across more than 60 high-speed patrol vessels and over 600 integrated components.',
          tags: ['SolidWorks', 'Siemens NX', 'Sheet Metal', 'CNC & Laser', 'Mass Production', 'Supplier Leadership'],
          highlights: [
            { title: 'Series Scale', text: 'Electromechanical systems engineered and produced for 60+ vessels and 600+ components.' },
            { title: 'Supply Chain', text: 'Direct negotiation and quality control with external CNC, laser cutting and sheet metal fabricators.' },
            { title: 'Engineering & Production', text: 'Technical drawing review, BOM & cost estimation, and shop-floor supervision.' }
          ]
        },
        {
          id: 'smart-heater',
          title: 'Smart Water Heater',
          meta: 'CAD · FEA / CFD · UX',
          summary: 'Thermal optimization, exploded mechanical CAD architecture and user-centered control unit.',
          cover: 'assets/images/design/heater-exploded.png',
          gallery: [
            'assets/images/design/heater-exploded.png',
            'assets/images/design/heater-control.png',
            'assets/images/design/heater-fea.png',
            'assets/images/design/heater-cfd.png'
          ],
          description: 'Intelligent water heating system combining mechanical assembly engineering, FEA/CFD thermal and structural analysis, and clean control unit industrial design.',
          tags: ['SolidWorks CAD', 'FEA / CFD', 'DFM', 'Thermal Design', 'Control UX'],
          highlights: [
            { title: 'Mechanical Architecture', text: 'Modular internal assembly designed for serviceability and manufacturing.' },
            { title: 'Simulation', text: 'Helical flow CFD and rotor FEA validation prior to prototyping.' }
          ]
        },
        {
          id: 'bolet-lamp',
          title: 'Bolet Lamp',
          meta: 'BIOMATERIAL R&D · NETHERLANDS',
          summary: 'Circular organic mycelium lamp with custom 3D-printed molds and snap-fit thermal decoupling.',
          cover: 'assets/images/design/bolet-lamp.jpg',
          gallery: [
            'assets/images/design/bolet-lamp.jpg'
          ],
          description: 'Functional biodegradable architectural lamp developed during an international R&D project in the Netherlands. Custom 3D-printed molds control mycelium density and light diffusion, paired with snap-fit mechanical joints and LED thermal decoupling.',
          tags: ['Biomaterials', '3D-Printed Molds', 'R&D Leadership', 'Snap-Fit DFM', 'Lighting'],
          highlights: [
            { title: 'Custom Tooling', text: '3D-printed molds engineered to shape organic growth density and light output.' },
            { title: 'End-to-End R&D', text: 'Functional prototype delivered in 6 months leading a multidisciplinary team.' }
          ]
        },
        {
          id: 'firestone-lamp',
          title: 'Firestone Lamp',
          meta: 'PARAMETRIC LIGHTING · 3D PRINT',
          summary: 'Class-A G2 continuous organic surfacing produced in-house via digital additive manufacturing.',
          cover: 'assets/images/design/firestone.png',
          gallery: [
            'assets/images/design/firestone.png',
            'assets/images/slides/design-lamp.webp'
          ],
          description: 'In-house parametric decorative lighting piece by A-Z DISSENY, SL. Engineered with Class-A continuous organic surfaces and produced directly with FDM additive manufacturing.',
          tags: ['Rhino 3D', 'Grasshopper', 'Class-A Surfacing', 'FDM 3D Printing', 'Lighting Design'],
          highlights: [
            { title: 'Parametric Surface', text: 'Organic geometry built with G2 continuity for smooth light gradients.' },
            { title: 'In-House Manufacturing', text: 'Direct digital fabrication without expensive injection tooling.' }
          ]
        }
      ],
      softwareProjects: [
        {
          id: 'prometeos',
          title: 'prometeOS',
          meta: 'APPLIED AI · AGENT HARNESS',
          summary: 'AI execution harness that structures multi-department workflows and reduces RAM footprint.',
          cover: 'assets/images/software/prometeos-organigrama.png',
          gallery: [
            'assets/images/software/prometeos-organigrama.png',
            'assets/images/software/prometeos-cadena.png',
            'assets/images/software/prometeos-panel.png'
          ],
          description: 'Custom AI operating harness designed to govern multi-agent workflows, enforce strict route/permission policies, and keep local project state lightweight and structured.',
          tags: ['Applied AI', 'Python', 'Multi-Agent Systems', 'Governance Harness', 'UI Dashboard'],
          highlights: [
            { title: 'Structured Execution', text: 'Clear separation between strategy, project state, and specialized agents.' },
            { title: 'Efficiency', text: 'Engineered to minimize context bloat and local resource overhead.' }
          ]
        },
        {
          id: 'medixi',
          title: 'Medixi',
          meta: 'MOBILE APP · COMMUNITY & MAP',
          summary: 'Location-based community app connecting remote workers across curated cafés and workspaces.',
          cover: 'assets/images/software/medixi-shot-01.png',
          gallery: [
            'assets/images/software/medixi-shot-01.png',
            'assets/images/software/medixi-shot-02.png',
            'assets/images/software/medixi-shot-03.png'
          ],
          description: 'Mobile application engineered with Flutter and Supabase featuring real-time maps, curated café/workspace discovery, check-ins and community chat.',
          tags: ['Flutter', 'Dart', 'Supabase', 'Maps & Geo', 'UX/UI Design'],
          highlights: [
            { title: 'Real-Time Backend', text: 'Supabase database with live place updates without app store re-releases.' },
            { title: 'Mobile Experience', text: 'Map-first interface designed for fast discovery and local networking.' }
          ]
        },
        {
          id: 'matinium',
          title: 'Matinium',
          meta: 'IOS & ANDROID · WELLNESS',
          summary: 'Circadian morning & evening ritual app with a guided 12-week program and local-first privacy.',
          cover: 'assets/images/software/matinium-shot-01.png',
          gallery: [
            'assets/images/software/matinium-shot-01.png',
            'assets/images/software/matinium-shot-02.png',
            'assets/images/software/matinium-shot-03.png',
            'assets/images/software/matinium-shot-04.png'
          ],
          description: 'Minimalist offline-first mobile app pairing an analog morning writing ritual with a live circadian interface and calm evening reflection — zero streaks or manipulative notifications.',
          tags: ['Flutter', 'iOS TestFlight', 'Android', 'Local-First', 'Product Design'],
          highlights: [
            { title: 'Calm UI', text: 'Pure OLED dark mode and intentional typography without dopamine traps.' },
            { title: 'Cross-Platform', text: 'Built and tested on both iOS and Android.' }
          ]
        },
        {
          id: 'friction',
          title: 'Friction',
          meta: 'IOS APP · FOCUS & DETOX',
          summary: 'Attention sovereignty app blocker that inserts intentional cognitive friction before opening distracting apps.',
          cover: 'assets/images/software/friction-shot-01.png',
          gallery: [
            'assets/images/software/friction-shot-01.png',
            'assets/images/software/friction-shot-02.png',
            'assets/images/software/friction-shot-03.png'
          ],
          description: 'Designed to break compulsive phone habits by requiring quick math challenges before unlocking selected apps, restoring conscious choice.',
          tags: ['iOS TestFlight', 'Behavioral Design', 'Mobile Engineering', 'Focus'],
          highlights: [
            { title: 'Intentional Friction', text: 'Interrupts automatic scrolling loops at the exact moment of impulse.' }
          ]
        },
        {
          id: 'producty',
          title: 'Producty',
          meta: 'FLUTTER & SUPABASE · EXECUTION',
          summary: '6-phase sequential execution pipeline app inspired by industrial assembly lines.',
          cover: 'assets/images/software/producty-mockup-1.png',
          gallery: [
            'assets/images/software/producty-mockup-1.png',
            'assets/images/software/producty-shot-01.png',
            'assets/images/software/producty-shot-02.png'
          ],
          description: 'Breaks complex goals into a structured 6-phase sequential pipeline, limiting work in progress and tracking real time invested per task.',
          tags: ['Flutter', 'Supabase RLS', 'Python Analytics', 'Google Play Testing'],
          highlights: [
            { title: 'Industrial Logic', text: 'Applies assembly-line sequencing to eliminate planning paralysis.' }
          ]
        }
      ]
    },

    es: {
      nav: {
        services: 'Servicios',
        work: 'Proyectos',
        lab: 'Software e IA',
        process: 'Proceso',
        contact: 'Contacto'
      },
      hero: {
        eyebrow: 'ESTUDIO DE PRODUCTO FÍSICO Y DIGITAL · BARCELONA',
        title: 'Traes la idea.<br>La hacemos realidad.',
        subtitle: 'Ingeniería de producto de principio a fin: del diseño CAD 3D y la producción en masa con proveedores hasta apps móviles e IA aplicada.',
        ctaPrimary: 'Iniciar Proyecto',
        ctaSecondary: 'Ver Proyectos'
      },
      services: {
        eyebrow: '01 / CAPACIDADES',
        title: 'Un solo estudio del concepto a fábrica y lanzamiento.',
        desc: 'La mayoría de estudios se quedan en renders. Aquí diseñamos, hacemos ingeniería, lideramos proveedores para producir en serie y desarrollamos el software de tu producto.',
        cta: 'Cuéntanos tu Idea',
        note: 'Diseño de Producto · Producción en Masa · Software e IA',
        pillars: [
          {
            id: 'design',
            tabLabel: '01 · Diseño de Producto y CAD 3D',
            index: 'CAPACIDAD 01 / 03',
            title: 'Diseño Industrial e Ingeniería Mecánica CAD',
            desc: 'Desde superficies orgánicas Clase A hasta ensamblajes electromecánicos complejos listos para fabricar. Modelos 3D, planos de despiece y soldadura, tolerancias y BOM.',
            glow: 'radial-gradient(circle at 70% 35%, rgba(217, 119, 6, 0.42), rgba(15, 15, 18, 0.9) 70%)',
            chips: ['SolidWorks', 'Rhino 3D y Grasshopper', 'Siemens NX', 'AutoCAD', 'Superficies Clase A', 'FEA / CFD', 'Planos y BOM']
          },
          {
            id: 'production',
            tabLabel: '02 · Producción en Masa y Proveedores',
            index: 'CAPACIDAD 02 / 03',
            title: 'Liderazgo de Producción en Serie y Proveedores',
            desc: '¿Necesitas fabricar a escala? Nos encargamos del DFM, búsqueda y negociación directa con proveedores (CNC, corte láser, chapa metálica, moldes, impresión 3D), control de calidad y entrega en serie.',
            glow: 'radial-gradient(circle at 65% 40%, rgba(220, 38, 38, 0.36), rgba(15, 15, 18, 0.92) 70%)',
            chips: ['Optimización DFM', 'Trato con Proveedores', 'CNC y Corte Láser', 'Chapa Metálica', 'Moldes a Medida', 'Impresión 3D', 'Control de Calidad']
          },
          {
            id: 'software',
            tabLabel: '03 · Software, Apps e IA Aplicada',
            index: 'CAPACIDAD 03 / 03',
            title: 'Apps Móviles, Producto Digital e IA Aplicada',
            desc: 'Diseñamos y programamos aplicaciones móviles de alto rendimiento, plataformas web, automatización en Python y sistemas de agentes de IA orientados a operaciones reales.',
            glow: 'radial-gradient(circle at 68% 35%, rgba(37, 99, 235, 0.42), rgba(15, 15, 18, 0.92) 70%)',
            chips: ['Flutter y Dart', 'iOS y Android', 'Supabase y SQL', 'UX / UI Figma', 'Automatización Python', 'Agentes de IA']
          }
        ]
      },
      work: {
        eyebrow: '02 / HARDWARE Y PRODUCCIÓN EN MASA',
        title: 'Producto Físico e Ingeniería de Producción.',
        desc: 'Ensamblajes mecánicos listos para fábrica, liderazgo de producción en serie, I+D en biomateriales e iluminación paramétrica.'
      },
      lab: {
        eyebrow: '03 / SOFTWARE, APPS E IA APLICADA',
        title: 'Productos Digitales y Arquitectura de IA.',
        desc: 'Aplicaciones móviles y sistemas de IA diseñados y desarrollados para iOS, Android y escritorio.'
      },
      process: {
        eyebrow: '04 / CÓMO TRABAJAMOS',
        title: 'Un estudio. Cuatro fases claras.',
        steps: [
          { num: '01', title: 'Definición y Requisitos', desc: 'Convertimos tu idea en especificaciones técnicas claras, estimación de costes, viabilidad y hoja de ruta.' },
          { num: '02', title: 'Diseño e Ingeniería', desc: 'Modelado CAD 3D, superficies Clase A, validación FEA/CFD o diseño UX/UI y arquitectura de software.' },
          { num: '03', title: 'Prototipado y Proveedores', desc: 'Impresión 3D rápida, prototipos funcionales, búsqueda de proveedores, presupuestos y ajustes DFM.' },
          { num: '04', title: 'Producción y Lanzamiento', desc: 'Dirección técnica en serie y control de calidad con talleres, o publicación en tiendas y nube.' }
        ]
      },
      mystery: {
        title: '¿Tu Próximo Producto?',
        desc: 'Producto físico, producción en masa o una app — trae la idea.',
        cta: 'Iniciar Proyecto'
      },
      footer: {
        eyebrow: 'EMPIEZA ALGO REAL',
        headline: '¿Tienes un producto, una fabricación o una app en mente?',
        cta: 'Iniciar Proyecto',
        contactLabel: 'DIRECTO',
        socialLabel: 'ESTUDIO',
        legalLabel: 'LEGAL',
        legalNotice: 'Aviso Legal',
        privacy: 'Privacidad',
        cookies: 'Cookies'
      },
      floating: {
        cta: 'Iniciar Proyecto'
      },
      modal: {
        buildSimilar: 'Crear algo similar',
        specsLabel: 'STACK Y DISCIPLINAS',
        contactTitle: 'Cuéntanos tu proyecto.',
        contactSub: 'Tanto si es un producto físico, una tirada de producción en masa o una app, cuéntanos la base y te respondemos en breve.',
        name: 'Nombre o Empresa',
        namePh: 'Tu nombre o empresa',
        email: 'Correo Electrónico',
        emailPh: 'tu@empresa.com',
        area: 'Área del Proyecto',
        areas: [
          'Diseño de Producto y CAD 3D',
          'Producción en Masa y Proveedores',
          'Software, App Móvil e IA Aplicada',
          'Proyecto Integral (Físico + Digital)'
        ],
        message: 'Detalles del Proyecto',
        messagePh: 'Describe tu idea, objetivos técnicos, plazo estimado o necesidades de fabricación...',
        privacyPrefix: 'He leído y acepto la',
        privacyLink: 'Política de Privacidad',
        rgpdNote: 'Responsable: A-Z DISSENY, SL (NIF B60369329). Finalidad: atender tu solicitud de contacto o presupuesto. Envío mediante FormSubmit.co y correo electrónico. Derechos en azdisseny.sl@gmail.com.',
        submit: 'Enviar Propuesta',
        sending: 'Enviando...',
        success: 'Propuesta enviada. Te responderemos en breve a tu correo.',
        error: 'Error al enviar. Puedes escribir directamente a azdisseny.sl@gmail.com.'
      },
      hardwareProjects: [
        {
          id: 'naval',
          title: 'Sistemas Electromecánicos Navales',
          meta: 'PRODUCCIÓN EN MASA · +60 BARCOS',
          summary: 'Diseño electromecánico integral, negociación con proveedores y producción en serie para más de 60 embarcaciones.',
          cover: 'assets/images/design/naval-interceptor.png',
          gallery: [
            'assets/images/design/naval-interceptor.png',
            'assets/images/design/mass-prod-02.png',
            'assets/images/design/mass-prod-03.png'
          ],
          description: 'Dirección del ciclo de vida completo desde el modelado CAD 3D y cambios de ingeniería hasta la negociación con proveedores (chapa naval 5083, mecanizado CNC, corte láser) y control de calidad en taller para más de 60 embarcaciones y más de 600 componentes.',
          tags: ['SolidWorks', 'Siemens NX', 'Chapa Metálica', 'CNC y Láser', 'Producción en Serie', 'Proveedores'],
          highlights: [
            { title: 'Escala en Serie', text: 'Sistemas electromecánicos diseñados y producidos para más de 60 barcos y más de 600 componentes.' },
            { title: 'Cadena de Suministro', text: 'Negociación directa y control de calidad con talleres externos de CNC, corte láser y chapa.' },
            { title: 'Ingeniería y Taller', text: 'Revisión de planos, estimación de costes y supervisión directa en producción.' }
          ]
        },
        {
          id: 'smart-heater',
          title: 'Smart Water Heater',
          meta: 'CAD · FEA / CFD · UX',
          summary: 'Optimización térmica, arquitectura mecánica explosionada en CAD y unidad de control centrada en el usuario.',
          cover: 'assets/images/design/heater-exploded.png',
          gallery: [
            'assets/images/design/heater-exploded.png',
            'assets/images/design/heater-control.png',
            'assets/images/design/heater-fea.png',
            'assets/images/design/heater-cfd.png'
          ],
          description: 'Sistema inteligente de calentamiento de agua que combina ingeniería de ensamblaje mecánico, validación térmica y estructural FEA/CFD y diseño industrial de unidad de control.',
          tags: ['SolidWorks CAD', 'FEA / CFD', 'DFM', 'Diseño Térmico', 'UX Control'],
          highlights: [
            { title: 'Arquitectura Mecánica', text: 'Ensamblaje interno modular pensado para mantenimiento y fabricabilidad.' },
            { title: 'Simulación', text: 'Validación CFD de flujo helicoidal y FEA del rotor antes de prototipar.' }
          ]
        },
        {
          id: 'bolet-lamp',
          title: 'Bolet Lamp',
          meta: 'I+D BIOMATERIALES · PAÍSES BAJOS',
          summary: 'Lámpara circular de micelio orgánico con moldes impresos en 3D y encastres snap-fit con desacoplo térmico.',
          cover: 'assets/images/design/bolet-lamp.jpg',
          gallery: [
            'assets/images/design/bolet-lamp.jpg'
          ],
          description: 'Lámpara funcional 100% biodegradable desarrollada en un proyecto internacional de I+D en Países Bajos. Moldes diseñados e impresos en 3D a medida para controlar la densidad del micelio y la difusión lumínica.',
          tags: ['Biomateriales', 'Moldes 3D', 'Liderazgo I+D', 'Snap-Fit DFM', 'Iluminación'],
          highlights: [
            { title: 'Utillaje Propio', text: 'Moldes impresos en 3D diseñados para regular crecimiento orgánico y luz.' },
            { title: 'I+D Completo', text: 'Prototipo funcional entregado en 6 meses coordinando un equipo multidisciplinar.' }
          ]
        },
        {
          id: 'firestone-lamp',
          title: 'Firestone Lamp',
          meta: 'ILUMINACIÓN PARAMÉTRICA · 3D',
          summary: 'Superficies orgánicas paramétricas Clase A (continuidad G2) fabricadas mediante impresión 3D digital.',
          cover: 'assets/images/design/firestone.png',
          gallery: [
            'assets/images/design/firestone.png',
            'assets/images/slides/design-lamp.webp'
          ],
          description: 'Lámpara decorativa paramétrica propia de A-Z DISSENY, SL. Geometría orgánica con continuidad de superficies Clase A fabricada directamente mediante manufactura aditiva FDM.',
          tags: ['Rhino 3D', 'Grasshopper', 'Superficies Clase A', 'Impresión 3D FDM', 'Iluminación'],
          highlights: [
            { title: 'Superficie Paramétrica', text: 'Geometría orgánica G2 diseñada para una difusión de luz continua.' },
            { title: 'Fabricación Propia', text: 'Producción digital directa sin necesidad de moldes de inyección costosos.' }
          ]
        }
      ],
      softwareProjects: [
        {
          id: 'prometeos',
          title: 'prometeOS',
          meta: 'IA APLICADA · ARQUITECTURA',
          summary: 'Arnés de ejecución con IA que estructura proyectos multi-departamento y reduce el consumo de RAM.',
          cover: 'assets/images/software/prometeos-organigrama.png',
          gallery: [
            'assets/images/software/prometeos-organigrama.png',
            'assets/images/software/prometeos-cadena.png',
            'assets/images/software/prometeos-panel.png'
          ],
          description: 'Sistema propio de orquestación y gobernanza de agentes de IA que aplica reglas de permisos y rutas, manteniendo el estado de cada proyecto ligero y trazable.',
          tags: ['IA Aplicada', 'Python', 'Sistemas Multi-Agente', 'Gobernanza', 'Interfaz Web'],
          highlights: [
            { title: 'Ejecución Estructurada', text: 'Separación clara entre estrategia, estado del proyecto y agentes especialistas.' },
            { title: 'Eficiencia', text: 'Diseñado para evitar saturación de contexto y reducir uso de recursos locales.' }
          ]
        },
        {
          id: 'medixi',
          title: 'Medixi',
          meta: 'APP MÓVIL · COMUNIDAD Y MAPA',
          summary: 'App geolocalizada que conecta a personas que trabajan en remoto desde cafeterías y espacios seleccionados.',
          cover: 'assets/images/software/medixi-shot-01.png',
          gallery: [
            'assets/images/software/medixi-shot-01.png',
            'assets/images/software/medixi-shot-02.png',
            'assets/images/software/medixi-shot-03.png'
          ],
          description: 'Aplicación móvil desarrollada en Flutter y Supabase con mapa en tiempo real, descubrimiento de locales, check-ins y chat comunitario.',
          tags: ['Flutter', 'Dart', 'Supabase', 'Mapas y Geo', 'Diseño UX/UI'],
          highlights: [
            { title: 'Backend en Tiempo Real', text: 'Base de datos en Supabase con gestión en caliente de locales sin republicar la app.' },
            { title: 'Experiencia Móvil', text: 'Interfaz centrada en mapa pensada para conectar rápido en tu zona.' }
          ]
        },
        {
          id: 'matinium',
          title: 'Matinium',
          meta: 'IOS Y ANDROID · BIENESTAR',
          summary: 'App de rituales circadianos de mañana y noche con programa guiado de 12 semanas y privacidad local-first.',
          cover: 'assets/images/software/matinium-shot-01.png',
          gallery: [
            'assets/images/software/matinium-shot-01.png',
            'assets/images/software/matinium-shot-02.png',
            'assets/images/software/matinium-shot-03.png',
            'assets/images/software/matinium-shot-04.png'
          ],
          description: 'App minimalista offline-first que combina escritura matutina analógica con una interfaz circadiana serena y cierre nocturno — sin rachas ni notificaciones invasivas.',
          tags: ['Flutter', 'iOS TestFlight', 'Android', 'Local-First', 'Diseño de Producto'],
          highlights: [
            { title: 'Interfaz Serena', text: 'Modo oscuro OLED puro y tipografía cuidada sin trampas de dopamina.' },
            { title: 'Multiplataforma', text: 'Desarrollada y probada en iOS y Android.' }
          ]
        },
        {
          id: 'friction',
          title: 'Friction',
          meta: 'APP IOS · ENFOQUE',
          summary: 'Bloqueador de apps que introduce fricción cognitiva intencionada antes de abrir aplicaciones adictivas.',
          cover: 'assets/images/software/friction-shot-01.png',
          gallery: [
            'assets/images/software/friction-shot-01.png',
            'assets/images/software/friction-shot-02.png',
            'assets/images/software/friction-shot-03.png'
          ],
          description: 'Diseñada para romper el uso compulsivo del móvil exigiendo pequeños retos matemáticos antes de abrir apps seleccionadas.',
          tags: ['iOS TestFlight', 'Diseño Conductual', 'Desarrollo Móvil', 'Enfoque'],
          highlights: [
            { title: 'Fricción Consciente', text: 'Interrumpe el bucle automático justo en el instante del impulso.' }
          ]
        },
        {
          id: 'producty',
          title: 'Producty',
          meta: 'FLUTTER Y SUPABASE · EJECUCIÓN',
          summary: 'App que desglosa objetivos en un pipeline secuencial de 6 fases inspirado en líneas de montaje industriales.',
          cover: 'assets/images/software/producty-mockup-1.png',
          gallery: [
            'assets/images/software/producty-mockup-1.png',
            'assets/images/software/producty-shot-01.png',
            'assets/images/software/producty-shot-02.png'
          ],
          description: 'Combate la parálisis por sobre-planificación limitando el trabajo en curso y registrando el tiempo real dedicado a cada fase.',
          tags: ['Flutter', 'Supabase RLS', 'Analítica Python', 'Google Play Testing'],
          highlights: [
            { title: 'Lógica Industrial', text: 'Aplica secuenciación de línea de montaje para ejecutar objetivos complejos.' }
          ]
        }
      ]
    }
  },

  legal: {
    aviso: {
      label: 'Aviso Legal / Legal Notice',
      html: `<h3>Titularidad del Sitio Web</h3>
        <p><strong>A-Z DISSENY, SL</strong> · NIF: <strong>B60369329</strong><br>
        Domicilio fiscal: Mas Beulovi s/n, 08589 Sobremunt (Barcelona), España.<br>
        Correo electrónico de contacto: <a href="mailto:azdisseny.sl@gmail.com">azdisseny.sl@gmail.com</a></p>
        <h3>Propiedad Intelectual</h3>
        <p>Todos los diseños, renders, modelos 3D, fotografías, código y textos mostrados en este sitio son titularidad de A-Z DISSENY, SL o se muestran con fines estrictamente demostrativos de proyectos realizados.</p>`
    },
    privacidad: {
      label: 'Privacidad / Privacy (RGPD)',
      html: `<h3>Protección de Datos Personales</h3>
        <p><strong>Responsable:</strong> A-Z DISSENY, SL (NIF B60369329).<br>
        <strong>Finalidad:</strong> Gestionar solicitudes de contacto, presupuestos y comunicaciones profesionales.<br>
        <strong>Legitimación:</strong> Consentimiento expreso del interesado (Art. 6.1.a RGPD) y medidas precontractuales (Art. 6.1.b RGPD).<br>
        <strong>Encargados técnicos:</strong> FormSubmit.co (envío de formularios) y proveedor de alojamiento web.<br>
        <strong>Derechos:</strong> Puede ejercer sus derechos de acceso, rectificación, supresión y oposición escribiendo a <a href="mailto:azdisseny.sl@gmail.com">azdisseny.sl@gmail.com</a>.</p>`
    },
    cookies: {
      label: 'Cookies',
      html: `<h3>Política de Cookies</h3>
        <p>Este sitio web utiliza únicamente almacenamiento local técnico mínimo (por ejemplo, recordar la preferencia de idioma EN/ES). No utiliza cookies publicitarias ni rastreadores invasivos de terceros.</p>`
    }
  }
};

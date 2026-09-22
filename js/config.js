/* ================================================
   SANDA — Configuración de Contenido
   ================================================
   
   ESTE ES EL ÚNICO ARCHIVO QUE NECESITAS EDITAR
   para cambiar textos, imágenes, vídeos y enlaces.
   
   INSTRUCCIONES:
   - Para cambiar una imagen: modifica la ruta 'src' o 'image'
   - Para cambiar un texto: modifica la cadena de texto entre comillas
   - Para añadir un elemento nuevo: copia un bloque { } y cambia los valores
   - Para eliminar un elemento: borra o comenta el bloque con //
   - Los <br> dentro de textos crean un salto de línea
   
   ================================================ */

'use strict';

const CONFIG = {

  /* ----------------------------------------
     MARCA / BRANDING
     Nombre, autor, redes sociales y logos.
     ---------------------------------------- */
  brand: {
    name: 'SANDA',
    author: 'Francesc Sandalinas',
    year: 2025,
    youtubeUrl: 'https://www.youtube.com/@Sanda.projectAZ',
    youtubeHandle: '@Sanda.projectAZ',
    icon: 'assets/images/branding/sanda-icon.png',
  },


  /* ----------------------------------------
     SLIDES DEL SLIDER PRINCIPAL
     
     Cada slide es una pantalla completa.
     Para AÑADIR un slide: copia un bloque { } y pégalo al final.
     Para QUITAR un slide: borra el bloque { } entero.
     Para REORDENAR: corta y pega el bloque en otra posición.
     
     Campos:
     - id:         Identificador único (sin espacios ni acentos)
     - category:   Texto pequeño encima del título
     - title:      Título grande (usa <br> para salto de línea)
     - ctaText:    Texto del botón "Explora..."
     - background: Fondo del slide (ver opciones abajo)
     
     Opciones de background.type:
     - 'image'   → imagen estática a pantalla completa
     - 'video'   → vídeo en bucle (autoplay, muted)
     - 'product' → imagen centrada sobre fondo gradiente oscuro
     ---------------------------------------- */
  slides: [
    {
      id: 'design',
      category: 'Diseño 3D & Fabricación',
      title: 'El diseño es ingeniería<br>con alma.',
      ctaText: 'Explora el Diseño y Fabricación',
      background: {
        type: 'image',
        src: 'assets/images/slides/design-lamp.png',
        alt: 'Lámpara de diseño 3D orgánico creada por SANDA',
      },
    },
    {
      id: 'software',
      category: 'Ingeniería de Software',
      title: 'Producty — simplifica<br>tus objetivos.',
      ctaText: 'Explora Producty',
      background: {
        type: 'product',
        src: 'assets/images/software/producty-mockup-1.png',
        alt: 'Producty App - Mockup',
      },
    },
    {
      id: 'philosophy',
      category: 'Filosofía & Surf',
      title: 'La ingeniería<br>de la mente.',
      ctaText: 'Explora la Ingeniería de la Mente',
      background: {
        type: 'video',
        src: 'assets/video/surf-munich.mp4',
      },
    },
    {
      id: 'art',
      category: 'Expresión Visual',
      title: 'Cada cuadro es un<br>universo propio.',
      ctaText: 'Explora la Galería de Arte',
      background: {
        type: 'image',
        src: 'assets/images/slides/art-nightsurfer.jpeg',
        alt: 'Night Surfer BCN - Cuadro original de SANDA',
      },
    },
  ],


  /* ----------------------------------------
     SECCIÓN DETALLE: DISEÑO
     
     Contenido que aparece al hacer clic en
     "Explora el Diseño y Fabricación".
     ---------------------------------------- */
  design: {
    hero: {
      type: 'image',
      src: 'assets/images/slides/design-lamp.png',
      alt: 'Lámpara de diseño orgánico SANDA',
      title: 'Diseño & Fabricación',
      subtitle: 'De la idea al objeto físico. Diseño industrial, impresión 3D y fabricación digital.',
    },
    quote: 'Si tu entorno lo haces más bonito, tu vida también lo será.',
    sectionLabel: 'Proyectos',
    sectionTitle: 'Ingeniería de producto',

    /* Lista de productos/proyectos de diseño.
       Para añadir uno nuevo, copia un bloque { } y cambia los valores. */
    items: [
      {
        image: 'assets/images/design/bolet-lamp.jpg',
        alt: 'Bolet Lamp — Lámpara hecha con micelio',
        name: 'Bolet Lamp',
        desc: 'Lámpara hecha con micelio',
      },
      {
        image: 'assets/images/design/firestone.png',
        alt: 'Firestone Lamp — Impresión 3D',
        name: 'Firestone Lamp',
        desc: '3D printed lamp personal production. Ask for price.',
      },
    ],

    /* Producción en masa y proyectos industriales */
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


  /* ----------------------------------------
     SECCIÓN DETALLE: SOFTWARE (PRODUCTY)
     ---------------------------------------- */
  software: {
    hero: {
      type: 'product',
      src: 'assets/images/software/producty-mockup-1.png',
      alt: 'Producty App Mockup',
      title: 'Producty',
      subtitle: 'La app que simplifica tus objetivos complejos con inteligencia artificial.',
    },
    appIcon: 'assets/images/software/producty-icon.jpeg',
    appName: 'Producty',
    tagline: 'Simplifica. Ejecuta. Avanza.',
    problem: 'Tienes un objetivo grande — camperizar tu coche, lanzar un proyecto, aprender una skill nueva — pero no sabes por dónde empezar. La complejidad te paraliza.',
    solution: 'Producty usa inteligencia artificial para desglosar cualquier objetivo en pasos simples y ejecutables. Tú defines el destino, Producty traza el camino.',
    playStoreUrl: 'https://play.google.com/store',
    playStoreText: 'Descargar en Google Play',

    /* Capturas de pantalla de la app.
       Para añadir más, añade rutas a este array. */
    screenshots: [
      { src: 'assets/images/software/producty-shot-01.png', alt: 'Producty - Comprométete contigo mismo' },
      { src: 'assets/images/software/producty-shot-02.png', alt: 'Producty - Controla tu tiempo' },
      { src: 'assets/images/software/producty-shot-03.png', alt: 'Producty - Desglose inteligente' },
    ],
  },


  /* ----------------------------------------
     SECCIÓN DETALLE: FILOSOFÍA / YOUTUBE
     ---------------------------------------- */
  philosophy: {
    hero: {
      type: 'video',
      src: 'assets/video/surf-munich.mp4',
      title: 'La Ingeniería de la Mente',
      subtitle: 'Reflexiones sobre la vida, el surf y el camino del creador.',
    },
    quote: 'El surf te enseña que no controlas las olas, solo eliges cómo las surfeas.',

    /* Vídeo principal embebido de YouTube.
       Cambia VIDEO_ID por el ID de tu vídeo (la parte después de v= en la URL). */
    mainVideoEmbed: null,  // Pon aquí la URL embed, ej: 'https://www.youtube.com/embed/VIDEO_ID'

    /* Grid de vídeos del videoblog.
       Para añadir vídeos, copia un bloque { } y cambia los valores. */
    videos: [
      {
        url: 'https://www.youtube.com/@Sanda.projectAZ',
        thumbnail: 'assets/images/slides/art-nightsurfer.jpeg',
        alt: 'Visita el canal de YouTube',
        title: 'Visita el canal de YouTube',
        channel: '@Sanda.projectAZ',
      },
      {
        url: 'https://www.youtube.com/@Sanda.projectAZ',
        thumbnail: 'assets/images/branding/sanda-icon.png',
        alt: 'Próximamente',
        title: 'Próximamente — Nuevos Episodios',
        channel: '@Sanda.projectAZ',
      },
    ],
  },


  /* ----------------------------------------
     SECCIÓN DETALLE: GALERÍA DE ARTE
     
     Para AÑADIR un cuadro:
     1. Coloca la imagen en assets/images/art/
     2. Añade un bloque { } a este array
     
     Para QUITAR un cuadro: borra el bloque { }
     Para REORDENAR: mueve los bloques de posición
     ---------------------------------------- */
  art: {
    hero: {
      type: 'image',
      src: 'assets/images/slides/art-nightsurfer.jpeg',
      alt: 'Night Surfer BCN — Cuadro de SANDA',
      title: 'Galería de Arte',
      subtitle: 'Pintura, ilustración y expresión visual libre. Cada cuadro cuenta una historia.',
    },
    quote: 'El arte no se explica, se siente.',
    sectionLabel: 'Colección',
    sectionTitle: 'Obras Originales',

    items: [
      { image: 'assets/images/art/nightsurfer-bcn.jpeg',     alt: 'Night Surfer BCN',      name: 'Night Surfer BCN' },
      { image: 'assets/images/art/spartan-santjordi.jpeg',    alt: 'Spartan Sant Jordi',    name: 'Spartan Sant Jordi' },
      { image: 'assets/images/art/sardana-catalana.jpg',      alt: 'Dancing in the Night',  name: 'Dancing in the Night' },
      { image: 'assets/images/art/sueno-ornitorrinco.jpg',    alt: 'Sueño Ornitorrinco',    name: 'Sueño Ornitorrinco' },
      { image: 'assets/images/art/ericeira-vibes.jpg',        alt: 'Ericeira Vibes',        name: 'Ericeira Vibes' },
      { image: 'assets/images/art/sopelana-surf-trip.jpg',    alt: 'Sopelana Surf Trip',    name: 'Sopelana Surf Trip' },
      { image: 'assets/images/art/barna-surf.jpg',            alt: 'Barna Surf',            name: 'Barna Surf' },
      { image: 'assets/images/art/watercolor-waterfall.jpg',  alt: 'Acuarela',              name: 'Acuarela' },
    ],
  },


  /* ----------------------------------------
     AJUSTES DE COMPORTAMIENTO
     Configuraciones técnicas del slider y la app.
     ---------------------------------------- */
  settings: {
    autoplayInterval: 6000,   // Milisegundos entre slides (0 = desactivado)
    swipeThreshold: 50,       // Píxeles mínimos para detectar swipe
    lazyLoadMargin: '200px',  // Margen de precarga de imágenes
  },
};

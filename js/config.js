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
      subtitle: "Cuéntame los detalles de tu idea y cómo podemos colaborar. Se enviará automáticamente al correo corporativo de A-Z DISSENY, SL.",
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
      privacyPrefix: "He leído y acepto la",
      privacyLinkText: "Política de Privacidad",
      privacySuffix: "y consiento el tratamiento de mis datos para atender mi solicitud.",
      privacySummary: "<strong>Información básica sobre Protección de Datos (RGPD):</strong> <strong>Responsable:</strong> A-Z DISSENY, SL. (NIF B60369329). <strong>Finalidad:</strong> Gestionar tu solicitud de contacto, presupuesto profesional o acceso a la Beta de Producty. <strong>Legitimación:</strong> Consentimiento del interesado (Art. 6.1.a RGPD) y medidas precontractuales (Art. 6.1.b RGPD). <strong>Destinatarios:</strong> No se cederán datos a terceros salvo obligación legal; intervienen como encargados técnicos FormSubmit.co (envío), Google LLC (correo) y Netlify Inc. (alojamiento). <strong>Derechos:</strong> Acceso, rectificación, supresión y demás derechos en <a href=\"mailto:azdisseny.sl@gmail.com\">azdisseny.sl@gmail.com</a>.",
      submitBtn: "Enviar Propuesta",
      submittingText: "Enviando propuesta...",
      successMsg: "✓ ¡Propuesta enviada con éxito! Te responderé en breve a tu correo.",
      errorMsg: "Hubo un error al enviar. Puedes escribirme directamente a azdisseny.sl@gmail.com",
      directEmailNotice: "O si prefieres escribir directamente:",
      copyEmailBtn: "Copiar correo"
    },
    brand: {
      name: 'SANDA',
      company: 'A-Z DISSENY, SL.',
      author: 'Francesc Sandalinas',
      year: 2026,
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
          desc: 'Producción artesanal impresa en 3D por A-Z DISSENY, SL. Diseño orgánico de autor.', 
          tags: ['Impresión 3D FDM', 'Fabricación Digital', 'Paramétrico'],
          price: '90 €',
          priceNote: 'IVA incl. · Envío detallado en el checkout',
          termsLinkText: 'Condiciones de venta y desistimiento (14 días)',
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
    legal: {
      badge: 'A-Z DISSENY, SL. · Marco Legal y Privacidad',
      title: 'Información Legal y Condiciones',
      links: {
        aviso: 'Aviso Legal',
        privacidad: 'Política de Privacidad',
        condiciones: 'Condiciones de Venta',
        cookies: 'Política de Cookies'
      },
      tabs: {
        aviso: {
          label: 'Aviso Legal',
          content: `
            <h3>1. Datos Identificativos del Titular (Art. 10 LSSI-CE)</h3>
            <p>En cumplimiento del deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se exponen a continuación los datos identificativos del titular de este sitio web:</p>
            <ul>
              <li><strong>Razón Social:</strong> A-Z DISSENY, SL.</li>
              <li><strong>NIF / CIF:</strong> B60369329</li>
              <li><strong>Domicilio Social y Fiscal:</strong> Mas Beulovi s/n, 08589, Sobremunt (Barcelona), España.</li>
              <li><strong>Representante Legal y Autor:</strong> Francesc Sandalinas Viladevall (marca comercial y artística <strong>SANDA</strong>).</li>
              <li><strong>Correo Electrónico de Contacto:</strong> <a href="mailto:azdisseny.sl@gmail.com">azdisseny.sl@gmail.com</a></li>
              <li><strong>Teléfono de Contacto:</strong> +34 626 497 263</li>
              <li><strong>Actividad Principal:</strong> Ingeniería de diseño industrial, desarrollo de producto, diseño CAD 3D, fabricación aditiva (impresión 3D), desarrollo de software e inteligencia artificial, y creación artística.</li>
            </ul>

            <h3>2. Objeto y Ámbito de Aplicación</h3>
            <p>El presente Aviso Legal regula el acceso, navegación y uso del sitio web, así como las responsabilidades derivadas de la utilización de sus contenidos (textos, diseños industriales, modelos 3D, fotografías, vídeos, código fuente y obras artísticas).</p>

            <h3>3. Propiedad Intelectual e Industrial</h3>
            <p>Todos los derechos de propiedad intelectual e industrial sobre el sitio web, la marca <strong>SANDA</strong>, la denominación <strong>AZ DISSENY</strong>, el software <strong>Producty</strong>, los diseños industriales y paramétricos (incluyendo <em>Firestone Lamp</em> y <em>Bolet Lamp</em>), planos CAD, renders, fotografías, vídeos y obras pictóricas pertenecen en exclusiva a <strong>A-Z DISSENY, SL.</strong> y a su autor <strong>Francesc Sandalinas Viladevall</strong>.</p>
            <p>Queda expresamente prohibida la reproducción, distribución, comunicación pública, transformación o ingeniería inversa de cualquier elemento de esta web con fines comerciales o industriales sin la autorización previa, expresa y por escrito de su titular.</p>

            <h3>4. Responsabilidad y Enlaces Externos</h3>
            <p>El titular no se hace responsable de los daños o perjuicios derivados de interferencias, interrupciones o desconexiones ajenas a su control técnico, ni de los contenidos o políticas de sitios externos enlazados (como YouTube o Stripe).</p>

            <h3>5. Legislación Aplicable y Jurisdicción</h3>
            <p>Las presentes condiciones se rigen por la legislación española. Para cualquier controversia que pudiera derivarse del acceso o uso de este sitio web, las partes se someten a los Juzgados y Tribunales de la provincia de Barcelona (España), salvo que el usuario tenga la condición legal de consumidor y usuario, en cuyo caso será aplicable el fuero correspondiente a su domicilio habitual.</p>
          `
        },
        privacidad: {
          label: 'Privacidad',
          content: `
            <h3>1. Responsable del Tratamiento</h3>
            <p>De conformidad con el Reglamento (UE) 2016/679 General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), los datos personales recabados a través de este sitio web serán tratados por:</p>
            <ul>
              <li><strong>Responsable:</strong> A-Z DISSENY, SL. (NIF: B60369329)</li>
              <li><strong>Dirección Postal:</strong> Mas Beulovi s/n, 08589, Sobremunt (Barcelona), España</li>
              <li><strong>Correo Electrónico:</strong> <a href="mailto:azdisseny.sl@gmail.com">azdisseny.sl@gmail.com</a></li>
              <li><strong>Teléfono:</strong> +34 626 497 263</li>
            </ul>

            <h3>2. Finalidades del Tratamiento</h3>
            <p>Tratamos los datos personales que nos facilitas únicamente para las siguientes finalidades:</p>
            <ul>
              <li><strong>Consultas y Proyectos Profesionales (B2B / B2C):</strong> Atender solicitudes de contacto, propuestas de ingeniería, diseño industrial, fabricación, arte o consultoría técnica enviadas mediante los formularios de la web o por correo electrónico.</li>
              <li><strong>Acceso a la Beta de Producty:</strong> Gestionar las solicitudes de inscripción como <em>beta tester</em> temprano de la aplicación móvil <em>Producty</em> y enviar comunicaciones estrictamente operativas sobre la prueba.</li>
              <li><strong>Compraventa y Facturación (E-Commerce):</strong> Gestionar el pago, fabricación, envío, facturación y garantía de los productos adquiridos (como la lámpara <em>Firestone Lamp</em>).</li>
            </ul>

            <h3>3. Base Jurídica (Legitimación)</h3>
            <ul>
              <li><strong>Consentimiento del interesado (Art. 6.1.a RGPD):</strong> Otorgado al marcar la casilla obligatoria de aceptación de la Política de Privacidad antes de enviar el formulario de contacto.</li>
              <li><strong>Ejecución de un contrato o medidas precontractuales (Art. 6.1.b RGPD):</strong> Para la elaboración de presupuestos solicitados o la tramitación de pedidos de compra.</li>
              <li><strong>Cumplimiento de obligaciones legales (Art. 6.1.c RGPD):</strong> Obligaciones fiscales, contables y mercantiles en caso de compra o facturación.</li>
            </ul>

            <h3>4. Plazo de Conservación</h3>
            <p>Los datos derivados de consultas se conservarán durante el tiempo necesario para atender la solicitud y, posteriormente, bloqueados durante los plazos de prescripción legal. En caso de compras o facturación, los datos fiscales se conservarán durante los plazos exigidos por la normativa tributaria (mínimo de 4 a 6 años).</p>

            <h3>5. Destinatarios y Encargados del Tratamiento</h3>
            <p>No se cederán ni venderán datos a terceros con fines comerciales. Para el funcionamiento técnico del servicio intervienen los siguientes prestadores bajo las garantías del RGPD:</p>
            <ul>
              <li><strong>FormSubmit.co:</strong> Servicio técnico de enrutamiento seguro de formularios web hacia el correo corporativo.</li>
              <li><strong>Google LLC (Gmail & Google Fonts):</strong> Gestión del correo electrónico corporativo y servicio de tipografías web.</li>
              <li><strong>Stripe Payments Europe, Ltd.:</strong> Pasarela de pago certificada PCI-DSS para el procesamiento seguro de compras (A-Z DISSENY, SL. nunca almacena los datos de tu tarjeta bancaria).</li>
              <li><strong>Netlify, Inc.:</strong> Proveedor de alojamiento web (hosting) y red de distribución de contenidos (CDN).</li>
            </ul>

            <h3>6. Derechos del Usuario</h3>
            <p>Puedes ejercer en cualquier momento tus derechos de <strong>acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad</strong>, así como retirar tu consentimiento, enviando una comunicación a <a href="mailto:azdisseny.sl@gmail.com">azdisseny.sl@gmail.com</a> indicando el derecho que deseas ejercitar. Asimismo, tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>).</p>
          `
        },
        condiciones: {
          label: 'Condiciones de Venta',
          content: `
            <h3>1. Información General de Contratación</h3>
            <p>Las presentes Condiciones Generales de Venta regulan la adquisición a distancia de los productos comercializados en este sitio web (incluyendo la lámpara <strong>Firestone Lamp</strong>) por parte de <strong>A-Z DISSENY, SL.</strong> (NIF B60369329, Mas Beulovi s/n, 08589, Sobremunt, Barcelona, España), en cumplimiento del Real Decreto Legislativo 1/2007 (TRLGDCU) y la Ley 34/2002 (LSSI-CE).</p>

            <h3>2. Características de los Productos</h3>
            <p>Los productos de diseño comercializados (como <em>Firestone Lamp</em>) son piezas de diseño de autor fabricadas mediante impresión 3D aditiva (FDM) y ensamblaje artesanal por A-Z DISSENY, SL. Debido a la naturaleza de la fabricación aditiva capa a capa, cada pieza posee una textura laminar propia que constituye su sello de autenticidad artesanal.</p>

            <h3>3. Precios, Impuestos y Gastos de Envío</h3>
            <ul>
              <li>Los precios se expresan en <strong>Euros (€)</strong> e <strong>incluyen el Impuesto sobre el Valor Añadido (IVA)</strong> legalmente aplicable en España.</li>
              <li>Antes de confirmar el pago en la pasarela segura de <strong>Stripe</strong>, el comprador visualizará el importe total desglosado, incluyendo los gastos de envío aplicables según la dirección de entrega.</li>
            </ul>

            <h3>4. Proceso de Compra y Medios de Pago</h3>
            <p>El pago se realiza de forma íntegra y segura a través de la pasarela externa <strong>Stripe</strong> (tarjeta de crédito/débito u otros métodos habilitados). Una vez completado el pago, el comprador recibirá la confirmación del pedido por correo electrónico y podrá solicitar factura completa escribiendo a <a href="mailto:azdisseny.sl@gmail.com">azdisseny.sl@gmail.com</a>.</p>

            <h3>5. Plazos de Fabricación y Entrega</h3>
            <p>Al tratarse de producción artesanal impresa en 3D, el plazo estimado de preparación y envío es de <strong>5 a 10 días laborables</strong> desde la confirmación del pedido, salvo indicación distinta durante la compra. Si existiera cualquier incidencia de stock o demora, se informará de inmediato al comprador.</p>

            <h3>6. Derecho de Desistimiento (Devoluciones en 14 Días)</h3>
            <p>Conforme a los artículos 102 y siguientes del TRLGDCU, el comprador que actúe como consumidor dispone de un plazo de <strong>14 días naturales</strong> desde la recepción del producto para ejercer su derecho de desistimiento sin necesidad de justificación:</p>
            <ul>
              <li>Para ejercerlo, basta con notificar la decisión antes de que venza el plazo enviando un correo a <a href="mailto:azdisseny.sl@gmail.com">azdisseny.sl@gmail.com</a> con el número o correo del pedido.</li>
              <li>El producto deberá devolverse en perfecto estado y en su embalaje original a la dirección fiscal de A-Z DISSENY, SL. Los costes directos de devolución correrán a cargo del comprador, salvo defecto de fabricación.</li>
              <li>Una vez recibido y verificado el producto, se reembolsará el importe abonado en un plazo máximo de 14 días naturales por el mismo medio de pago empleado.</li>
              <li><em>Excepción legal (Art. 103.c TRLGDCU):</em> El derecho de desistimiento no será aplicable a encargos confeccionados conforme a especificaciones personalizadas solicitadas expresamente por el cliente.</li>
            </ul>

            <h3>7. Garantía Legal de Conformidad</h3>
            <p>De acuerdo con la normativa española vigente (Real Decreto Legislativo 1/2007), todos los productos nuevos adquiridos por consumidores cuentan con una <strong>garantía legal de conformidad de tres (3) años</strong> desde la entrega frente a cualquier falta de conformidad o defecto de fabricación.</p>
          `
        },
        cookies: {
          label: 'Cookies',
          content: `
            <h3>1. Uso de Cookies y Almacenamiento Local (Art. 22.2 LSSI-CE)</h3>
            <p>Este sitio web ha sido diseñado bajo el principio de <strong>privacidad desde el diseño</strong> y minimización de datos. Te informamos de que <strong>NO utilizamos cookies publicitarias, de seguimiento comercial ni de elaboración de perfiles</strong>.</p>

            <h3>2. Almacenamiento Técnico Estrictamente Necesario</h3>
            <p>Únicamente empleamos el almacenamiento local del navegador (<code>localStorage</code>) con finalidad estrictamente técnica y de preferencia de interfaz elegida por el usuario (exenta de requerir banner de bloqueo conforme a la Guía sobre el uso de las cookies de la AEPD):</p>
            <ul>
              <li><strong>Nombre de la clave:</strong> <code>sanda_lang</code></li>
              <li><strong>Tipo y Titular:</strong> Almacenamiento local propio (<code>localStorage</code> — A-Z DISSENY, SL.).</li>
              <li><strong>Finalidad:</strong> Recordar el idioma de visualización seleccionado por el usuario (Español <code>es</code> o Inglés <code>en</code>).</li>
              <li><strong>Duración:</strong> Persistente en el navegador local hasta que el usuario borre los datos del sitio.</li>
            </ul>

            <h3>3. Servicios Externos Bajo Acción del Usuario</h3>
            <p>Cuando el usuario decide voluntariamente pulsar sobre un enlace externo de compra (<strong>Stripe</strong>) o de reproducción de vídeo en <strong>YouTube</strong>, abandonará o interactuará con plataformas externas regidas por sus propias políticas de cookies y privacidad, sin que este sitio web instale cookies de rastreo de terceros durante la navegación normal por el portfolio.</p>

            <h3>4. Cómo Eliminar o Bloquear el Almacenamiento Local</h3>
            <p>Puedes borrar en cualquier momento los datos almacenados o configurar tu navegador (Chrome, Firefox, Safari, Edge) desde las opciones de <em>Privacidad y Seguridad → Borrar datos de navegación / Cookies y datos de sitios</em>.</p>
          `
        }
      }
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
      subtitle: "Tell me the details of your idea and how we can collaborate. It will be delivered automatically to the corporate email of A-Z DISSENY, SL.",
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
      privacyPrefix: "I have read and accept the",
      privacyLinkText: "Privacy Policy",
      privacySuffix: "and consent to the processing of my data to handle my request.",
      privacySummary: "<strong>Basic Data Protection Information (GDPR):</strong> <strong>Controller:</strong> A-Z DISSENY, SL. (Tax ID B60369329). <strong>Purpose:</strong> Manage your contact inquiry, professional quote, or Producty Beta access request. <strong>Legal Basis:</strong> User consent (Art. 6.1.a GDPR) and pre-contractual measures (Art. 6.1.b GDPR). <strong>Recipients:</strong> Data will not be shared with third parties except by legal obligation; technical processors include FormSubmit.co (delivery), Google LLC (email), and Netlify Inc. (hosting). <strong>Rights:</strong> Access, rectification, erasure, and other GDPR rights via <a href=\"mailto:azdisseny.sl@gmail.com\">azdisseny.sl@gmail.com</a>.",
      submitBtn: "Send Proposal",
      submittingText: "Sending proposal...",
      successMsg: "✓ Proposal sent successfully! I will reply to your email shortly.",
      errorMsg: "There was an error sending. You can write directly to azdisseny.sl@gmail.com",
      directEmailNotice: "Or if you prefer to write directly:",
      copyEmailBtn: "Copy email"
    },
    brand: {
      name: 'SANDA',
      company: 'A-Z DISSENY, SL.',
      author: 'Francesc Sandalinas',
      year: 2026,
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
          desc: 'Exclusive 3D printed lamp produced by A-Z DISSENY, SL.',
          tags: ['3D Printing FDM', 'Digital Fabrication', 'Parametric'],
          price: '90 €',
          priceNote: 'VAT incl. · Shipping detailed at checkout',
          termsLinkText: 'Terms of sale & 14-day withdrawal policy',
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
    legal: {
      badge: 'A-Z DISSENY, SL. · Legal & Privacy Framework',
      title: 'Legal Information & Terms',
      links: {
        aviso: 'Legal Notice',
        privacidad: 'Privacy Policy',
        condiciones: 'Terms of Sale',
        cookies: 'Cookies Policy'
      },
      tabs: {
        aviso: {
          label: 'Legal Notice',
          content: `
            <h3>1. Company Identification (Spanish LSSI-CE Art. 10)</h3>
            <p>In compliance with Article 10 of Spanish Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE), the owner of this website is identified below:</p>
            <ul>
              <li><strong>Company Name:</strong> A-Z DISSENY, SL.</li>
              <li><strong>Tax ID (NIF / EU VAT):</strong> B60369329</li>
              <li><strong>Registered Address:</strong> Mas Beulovi s/n, 08589, Sobremunt (Barcelona), Spain.</li>
              <li><strong>Legal Representative & Author:</strong> Francesc Sandalinas Viladevall (commercial and artistic brand <strong>SANDA</strong>).</li>
              <li><strong>Contact Email:</strong> <a href="mailto:azdisseny.sl@gmail.com">azdisseny.sl@gmail.com</a></li>
              <li><strong>Contact Phone:</strong> +34 626 497 263</li>
              <li><strong>Core Activity:</strong> Industrial design engineering, product development, 3D CAD design, additive manufacturing (3D printing), software & AI development, and visual arts.</li>
            </ul>

            <h3>2. Purpose and Scope</h3>
            <p>This Legal Notice governs access to, browsing, and use of this website, as well as the responsibilities derived from using its contents (texts, industrial designs, 3D models, photographs, videos, source code, and original artworks).</p>

            <h3>3. Intellectual and Industrial Property</h3>
            <p>All intellectual and industrial property rights over this website, the <strong>SANDA</strong> brand, the <strong>AZ DISSENY</strong> trade name, the <strong>Producty</strong> software, industrial and parametric designs (including <em>Firestone Lamp</em> and <em>Bolet Lamp</em>), CAD blueprints, renders, photographs, videos, and paintings belong exclusively to <strong>A-Z DISSENY, SL.</strong> and its author <strong>Francesc Sandalinas Viladevall</strong>.</p>
            <p>Any reproduction, distribution, public communication, transformation, or reverse engineering of any element of this website for commercial or industrial purposes without prior written authorization from the owner is strictly prohibited.</p>

            <h3>4. Liability & External Links</h3>
            <p>The owner shall not be held liable for damages arising from technical interruptions beyond its control, nor for the content or privacy practices of external linked platforms (such as YouTube or Stripe).</p>

            <h3>5. Applicable Law and Jurisdiction</h3>
            <p>These terms are governed by Spanish law. Any dispute arising from the use of this website shall be submitted to the Courts and Tribunals of Barcelona (Spain), except where mandatory consumer protection regulations establish the jurisdiction of the consumer's place of residence.</p>
          `
        },
        privacidad: {
          label: 'Privacy Policy',
          content: `
            <h3>1. Data Controller</h3>
            <p>In accordance with Regulation (EU) 2016/679 (General Data Protection Regulation — GDPR) and Spanish Organic Law 3/2018 (LOPDGDD), personal data collected through this website is processed by:</p>
            <ul>
              <li><strong>Controller:</strong> A-Z DISSENY, SL. (Tax ID: B60369329)</li>
              <li><strong>Address:</strong> Mas Beulovi s/n, 08589, Sobremunt (Barcelona), Spain</li>
              <li><strong>Email:</strong> <a href="mailto:azdisseny.sl@gmail.com">azdisseny.sl@gmail.com</a></li>
              <li><strong>Phone:</strong> +34 626 497 263</li>
            </ul>

            <h3>2. Purposes of Processing</h3>
            <p>We process the personal data you provide exclusively for the following purposes:</p>
            <ul>
              <li><strong>Professional Inquiries & Projects (B2B / B2C):</strong> Responding to contact requests, engineering proposals, industrial design, manufacturing, art commissions, or technical consulting submitted via our web forms or email.</li>
              <li><strong>Producty Beta Access:</strong> Managing early tester sign-ups for the <em>Producty</em> mobile application and sending strictly operational communications related to the beta test.</li>
              <li><strong>E-Commerce Orders & Invoicing:</strong> Processing payments, manufacturing, shipping, invoicing, and warranty support for purchased products (such as the <em>Firestone Lamp</em>).</li>
            </ul>

            <h3>3. Legal Basis</h3>
            <ul>
              <li><strong>Consent of the data subject (Art. 6.1.a GDPR):</strong> Granted by checking the mandatory privacy acceptance box before submitting any contact form.</li>
              <li><strong>Performance of a contract or pre-contractual measures (Art. 6.1.b GDPR):</strong> When preparing requested quotes or fulfilling product orders.</li>
              <li><strong>Compliance with legal obligations (Art. 6.1.c GDPR):</strong> Tax, accounting, and commercial regulations applicable to sales and invoicing.</li>
            </ul>

            <h3>4. Data Retention</h3>
            <p>Data from inquiries will be retained for the time strictly necessary to handle your request and subsequently blocked during statutory limitation periods. In the event of purchases or invoicing, tax data will be kept for the legally required periods (4 to 6 years under Spanish tax law).</p>

            <h3>5. Recipients and Data Processors</h3>
            <p>We never sell or lease your personal data to third parties. The following technical service providers act as data processors under GDPR safeguards:</p>
            <ul>
              <li><strong>FormSubmit.co:</strong> Technical routing service for secure delivery of web form submissions to our corporate email.</li>
              <li><strong>Google LLC (Gmail & Google Fonts):</strong> Corporate email hosting and web font delivery.</li>
              <li><strong>Stripe Payments Europe, Ltd.:</strong> PCI-DSS certified payment gateway for secure checkout processing (A-Z DISSENY, SL. never stores your credit card details).</li>
              <li><strong>Netlify, Inc.:</strong> Web hosting and Content Delivery Network (CDN) infrastructure.</li>
            </ul>

            <h3>6. Your GDPR Rights</h3>
            <p>You may exercise your rights of <strong>access, rectification, erasure, objection, restriction of processing, and data portability</strong>, or withdraw your consent at any time, by emailing <a href="mailto:azdisseny.sl@gmail.com">azdisseny.sl@gmail.com</a>. You also have the right to lodge a complaint with the Spanish Data Protection Agency (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>) or your local EU supervisory authority.</p>
          `
        },
        condiciones: {
          label: 'Terms of Sale',
          content: `
            <h3>1. General Contracting Information</h3>
            <p>These General Terms of Sale govern distance purchases of products offered on this website (including the <strong>Firestone Lamp</strong>) sold by <strong>A-Z DISSENY, SL.</strong> (Tax ID B60369329, Mas Beulovi s/n, 08589, Sobremunt, Barcelona, Spain), in accordance with Royal Legislative Decree 1/2007 (Spanish Consumer Protection Act — TRLGDCU) and Law 34/2002 (LSSI-CE).</p>

            <h3>2. Product Characteristics</h3>
            <p>Our commercial design pieces (such as the <em>Firestone Lamp</em>) are original author designs manufactured via additive 3D printing (FDM) and handcrafted assembly by A-Z DISSENY, SL. Due to the layer-by-layer additive manufacturing process, each lamp features a unique laminar texture that certifies its artisanal nature.</p>

            <h3>3. Prices, Taxes, and Shipping Costs</h3>
            <ul>
              <li>All prices are displayed in <strong>Euros (€)</strong> and <strong>include Spanish Value Added Tax (VAT / IVA)</strong>.</li>
              <li>Before completing payment on the secure <strong>Stripe</strong> checkout page, the buyer will see the full price breakdown, including applicable shipping costs based on the delivery address.</li>
            </ul>

            <h3>4. Checkout Process and Payment Methods</h3>
            <p>Payments are processed securely through <strong>Stripe</strong> (credit/debit card and supported payment methods). Upon payment completion, the buyer will receive an order confirmation email and may request a full commercial invoice by writing to <a href="mailto:azdisseny.sl@gmail.com">azdisseny.sl@gmail.com</a>.</p>

            <h3>5. Production and Delivery Lead Times</h3>
            <p>As an artisanal 3D-printed product, the estimated production and dispatch time is <strong>5 to 10 business days</strong> from order confirmation, unless otherwise stated during checkout. Customers will be notified promptly of any unforeseen delay.</p>

            <h3>6. Right of Withdrawal (14-Day Return Policy)</h3>
            <p>In accordance with EU Directive 2011/83/EU and Articles 102 et seq. of the Spanish TRLGDCU, consumers have the right to withdraw from the purchase within <strong>14 calendar days</strong> of receiving the product without giving any reason:</p>
            <ul>
              <li>To exercise this right, simply notify us before the 14-day period expires by emailing <a href="mailto:azdisseny.sl@gmail.com">azdisseny.sl@gmail.com</a> with your order details.</li>
              <li>The product must be returned undamaged and in its original packaging to the registered address of A-Z DISSENY, SL. Direct return shipping costs are borne by the buyer, except in the case of manufacturing defects.</li>
              <li>Once the returned item is received and inspected, we will refund the payment within 14 calendar days using the original payment method.</li>
              <li><em>Statutory exception:</em> The right of withdrawal does not apply to custom-made goods manufactured according to bespoke specifications requested by the customer.</li>
            </ul>

            <h3>7. Legal Warranty of Conformity</h3>
            <p>Under Spanish and EU consumer law (Royal Legislative Decree 1/2007), all new consumer goods carry a <strong>three (3) year statutory warranty of conformity</strong> from the date of delivery against manufacturing defects.</p>
          `
        },
        cookies: {
          label: 'Cookies Policy',
          content: `
            <h3>1. Use of Cookies and Local Storage (Art. 22.2 LSSI-CE)</h3>
            <p>This website is built following <strong>privacy-by-design</strong> and data minimization principles. We inform you that <strong>we DO NOT use advertising, commercial tracking, or behavioral profiling cookies</strong>.</p>

            <h3>2. Strictly Necessary Technical Storage</h3>
            <p>We only use browser local storage (<code>localStorage</code>) for strictly technical user-interface preferences chosen by the user (exempt from consent banners under the Spanish Data Protection Agency — AEPD Cookie Guidelines):</p>
            <ul>
              <li><strong>Key Name:</strong> <code>sanda_lang</code></li>
              <li><strong>Type & Owner:</strong> First-party local storage (<code>localStorage</code> — A-Z DISSENY, SL.).</li>
              <li><strong>Purpose:</strong> Remembers the display language explicitly selected by the user (Spanish <code>es</code> or English <code>en</code>).</li>
              <li><strong>Duration:</strong> Persistent in local browser storage until site data is cleared by the user.</li>
            </ul>

            <h3>3. External Third-Party Links</h3>
            <p>When you voluntarily click on an external checkout link (<strong>Stripe</strong>) or an external video link (<strong>YouTube</strong>), you interact with external platforms governed by their own privacy and cookie policies. This portfolio website does not install third-party tracking cookies during normal browsing.</p>

            <h3>4. How to Clear or Block Local Storage</h3>
            <p>You can delete stored site data at any time through your browser settings (Chrome, Firefox, Safari, Edge) under <em>Privacy & Security → Clear browsing data / Cookies and site data</em>.</p>
          `
        }
      }
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

import { TranslationDictionary } from "./types";

export const es: TranslationDictionary = {
  header: {
    nav: {
      about: "Sobre Mí",
      projects: "Proyectos",
      services: "Servicios",
      contact: "Contacto",
    },
    cta: "Hablemos →",
    roleTag: "• Front-End",
    aria: {
      openMenu: "Abrir menú de navegación",
      closeMenu: "Cerrar menú de navegación",
      mainNav: "Navegación principal",
      skipLink: "Saltar al contenido principal",
      logoLabel: "Natan Rocha - Desarrollador Front-End, ir al inicio",
      switchLanguage: "Cambiar idioma",
    },
  },
  hero: {
    titlePrefix: "Desarrollo Front-End & ",
    titleHighlight: "interfaces de alto rendimiento",
    titleSuffix: " y conversión.",
    subtitle:
      "Transformo requisitos complejos de negocio en experiencias web rápidas, accesibles y escalables. Especialista en React, Next.js, VTEX IO y Drupal DX8, uniendo rigor de arquitectura con una experiencia de usuario impecable.",
    ctaContact: "Contactar Ahora",
    ctaProjects: "Explorar Proyectos & Trayectoria",
    ctaCv: "Descargar CV",
    cvFile: "./natan-rocha-front-end.pdf",
    cvDownloadName: "CV-Natan-Rocha-Front-End.pdf",
    stats: {
      stat1: { value: "+5 Años", label: "Experiencia Front-End" },
      stat2: { value: "9+", label: "Proyectos de Gran Escala" },
      stat3: { value: "100%", label: "Enfoque en Rendimiento & A11y" },
    },
  },
  brands: {
    title: "Casos & Marcas Atendidas",
    subtitle:
      "Grandes referentes de telecomunicaciones, retail de moda, cadenas multinacionales de supermercados e innovación digital.",
    filterLabel: "Filtrar por:",
    tabs: {
      all: "Todos los Proyectos",
      telecom: "Telecom & Corporativo",
      fashion: "Moda & Retail",
      retail: "Supermercados & B2B",
      saas: "Innovación & SaaS",
    },
  },
  about: {
    title: "Sobre Mí",
    subtitle:
      "Desarrollador front-end dedicado a transformar desafíos complejos en interfaces ligeras, intuitivas y sostenibles.",
    paragraphs: [
      "Desarrollador Front-End Semi-Senior con más de 5 años de experiencia creando interfaces dinámicas y escalables. Especializado en optimizar el rendimiento y la experiencia de usuario (UX) en aplicaciones web de alto tráfico. Mi base técnica comprende React, Next.js, TypeScript y Stencil.js.",
      "Mi foco principal está en el desarrollo de soluciones de E-commerce y Portales Corporativos. Cuento con una sólida trayectoria en el ecosistema VTEX IO y en proyectos basados en Drupal, integrando capas front-end modernas con arquitecturas backend complejas.",
      "Más allá del ecosistema React, construyo soluciones con Node.js y preprocesadores como Sass. Mi diferencial radica en el trabajo colaborativo con equipos multidisciplinarios (UX/UI, Back-End y Producto), garantizando las mejores prácticas de desarrollo y resultados medibles para el negocio.",
      "En constante búsqueda de proyectos desafiantes. Actualmente profundizo mis conocimientos en arquitectura web a través del Posgrado en Desarrollo Web (IFSP). ¡Conversemos sobre cómo puedo optimizar la experiencia de usuario de tu próximo proyecto!",
    ],
    skillsTitle: "Competencias Técnicas & Herramientas",
    highlightsTitle: "Diferenciales y Destacados",
    highlights: [
      {
        number: "01",
        title: "Arquitectura Escalable",
        description:
          "Web components reutilizables y componentización modular con TypeScript y Stencil.js.",
      },
      {
        number: "02",
        title: "Obsesión por el Rendimiento",
        description:
          "Optimización constante de Core Web Vitals (LCP, CLS, INP) con foco en velocidad real.",
      },
      {
        number: "03",
        title: "Accesibilidad Nativa (a11y)",
        description:
          "Conformidad rigurosa con normas WCAG 2.1 AA para construir interfaces verdaderamente inclusivas.",
      },
      {
        number: "04",
        title: "Evolución Continua",
        description:
          "Especialización de posgrado en Desarrollo Web (IFSP), consolidando fundamentos de ingeniería de software.",
      },
    ],
  },
  services: {
    title: "Servicios & Especialidades",
    subtitle:
      "Ingeniería de software con foco en entregas robustas, código limpio y valor tangible para el negocio.",
    items: [
      {
        title: "Desarrollo de Interfaces & Accesibilidad",
        description:
          "Construcción de interfaces responsivas y reactivas con estricto cumplimiento de las pautas WCAG 2.1 AA. Carga ultra rápida, fidelidad pixel-perfect y fluidez en cualquier dispositivo.",
        tags: ["Core Web Vitals", "Accesibilidad WCAG", "Mobile-First", "Design Systems"],
      },
      {
        title: "SEO Técnico & Optimización de Rendimiento",
        description:
          "Estructuración de datos semánticos, metadatos enriquecidos, reducción de Cumulative Layout Shift (CLS) y optimización de renderizado para maximizar el posicionamiento orgánico en Google.",
        tags: ["SEO Semántico", "OpenGraph", "Lighthouse 95+", "Performance Audit"],
      },
      {
        title: "Arquitectura Modular & Clean Code",
        description:
          "Aplicación rigurosa de principios SOLID, separación clara de responsabilidades y componentización atómica. Código mantenible y preparado para escalar sin generar deuda técnica.",
        tags: ["Clean Code", "Design Patterns", "TypeScript Strict", "Componentización"],
      },
      {
        title: "Integraciones de E-commerce & APIs",
        description:
          "Desarrollo y mantenimiento de tiendas digitales de alto volumen en VTEX IO y VTEX Legacy. Conexión resiliente mediante GraphQL y APIs REST, optimizando el checkout y la conversión.",
        tags: ["VTEX IO", "GraphQL", "APIs REST", "Checkout Optimizado"],
      },
      {
        title: "Design Systems & Prototipado Rápido",
        description:
          "Creación y documentación de librerías de componentes consistentes, traduciendo diseños de Figma a componentes funcionales en React y Stencil.js con tokens escalables.",
        tags: ["Figma to Code", "Design Tokens", "Stencil.js", "Storybook"],
      },
    ],
  },
  projects: {
    title: "Casos de Éxito & Trayectoria",
    subtitle:
      "Una selección de iniciativas corporativas, tiendas e-commerce de gran escala y herramientas propietarias desarrolladas con excelencia técnica.",
    viewDetails: "Ver Detalles del Caso",
    projectOf: "Proyecto {current} de {total}",
    prevLabel: "Proyecto anterior",
    nextLabel: "Próximo proyecto",
    items: [
      {
        id: 1,
        title: "Portal Digital & Ecosistema de Web Components",
        company: "TIM Brasil",
        role: "Front-End Specialist & Web Components Lead",
        period: "2023 — Presente",
        category: "Drupal DX8 & Web Components",
        summary:
          "Liderazgo en la evolución y arquitectura front-end del portal corporativo de TIM Brasil, diseñando Web Components modulares con Stencil.js y asegurando estricta accesibilidad (WCAG).",
        challenge:
          "Siendo uno de los mayores ecosistemas de telecomunicaciones de Latinoamérica, TIM requiere que decenas de flujos y productos operen con alta disponibilidad, tiempos de respuesta instantáneos y cumplimiento innegociable de accesibilidad para usuarios con discapacidades bajo estrictas regulaciones.",
        solution:
          "Diseñé e implementé una suite de Web Components encapsulados y reutilizables con Stencil.js, perfectamente orquestados en Drupal CMS con DX8. Establecí un flujo de trabajo basado en semántica HTML, tokens en SCSS, auditorías continuas con lectores de pantalla (NVDA/TalkBack) y optimización del camino crítico de renderizado.",
        results: [
          "Aceleración de más del 35% en el time-to-market de nuevas páginas y landing pages de campañas.",
          "Conformidad validada con el nivel AA de WCAG, haciendo la plataforma verdaderamente inclusiva.",
          "Mejoras continuas en métricas de Core Web Vitals (LCP y CLS), impactando positivamente en el ranking de Google.",
        ],
      },
      {
        id: 2,
        title: "Mantenimiento Crítico & Optimización de Conversión",
        company: "Carinhoso (Grupo Malwee)",
        role: "Front-End Developer (VTEX Legacy & IO)",
        period: "2022 — 2023",
        category: "VTEX IO & Moda Infantil",
        summary:
          "Ingeniería de soporte continuo, eliminación de deuda técnica crítica e implementación de funciones de alta conversión para la tienda online de Carinhoso.",
        challenge:
          "La tienda operaba sobre una base legacy con acumulación de scripts asíncronos, inconsistencias visuales en dispositivos móviles y lentitud en el cálculo de envíos, lo que aumentaba el abandono del carrito.",
        solution:
          "Realicé un diagnóstico técnico exhaustivo, refactorizando scripts obsoletos, integrando componentes reactivos en React y reescribiendo estilos con una arquitectura SCSS modular mobile-first. Implementé monitoreo de errores en tiempo real y preparé la migración a VTEX IO.",
        results: [
          "Resolución de más de 45 bugs críticos de interfaz e inconsistencias en el funnel de compra.",
          "Aumento medible en la tasa de conversión móvil tras refactorizar la usabilidad del checkout.",
          "100% de estabilidad operativa durante picos de ventas en Black Friday y fechas especiales.",
        ],
      },
      {
        id: 3,
        title: "Modernización y Migración Institucional a Gran Escala",
        company: "Grupo Malwee",
        role: "Front-End Developer (Migración Legacy → IO)",
        period: "2022 — 2023",
        category: "VTEX IO & Design System",
        summary:
          "Reconstrucción y migración de la presencia institucional de Malwee a la arquitectura VTEX IO, otorgando total autonomía editorial al equipo de marketing sin comprometer la velocidad.",
        challenge:
          "Desacoplar decenas de páginas institucionales ricas en diseño de las plantillas rígidas de VTEX Legacy, garantizando fidelidad visual pixel-perfect, preservando el SEO orgánico y entregando un editor intuitivo para perfiles no técnicos.",
        solution:
          "Desarrollé bloques y componentes modulares en React integrados al Site Editor de VTEX mediante JSON Schemas personalizados. Mapeé la totalidad de URLs para proteger el posicionamiento y optimicé la carga de fuentes e imágenes con WebP.",
        results: [
          "Autonomía total para que el equipo de marketing cree y actualice contenidos sin necesidad de deploys.",
          "Reducción del 45% en los tiempos promedio de carga en comparación con las plantillas legacy.",
          "Cero pérdidas de indexación en motores de búsqueda durante y después de la migración.",
        ],
      },
      {
        id: 4,
        title: "Reingeniería de Página de Producto (PDP) de Alto Rendimiento",
        company: "Bringeri",
        role: "Front-End Developer (Modernización de PDP)",
        period: "2022",
        category: "VTEX IO & Retail E-commerce",
        summary:
          "Reconstrucción integral de la página de producto (PDP) en VTEX IO, reduciendo drásticamente la latencia de carga y mejorando la experiencia de compra en electrodomésticos.",
        challenge:
          "La PDP anterior sufría de retrasos críticos al calcular complejas tablas de flete, bloqueos en la selección de variantes de SKU y malas métricas de Core Web Vitals, afectando la conversión del canal principal de ingresos.",
        solution:
          "Reconstruí la PDP combinando apps nativas de VTEX IO Store Framework con componentes React tipados en TypeScript. Optimicé las llamadas asíncronas de precios y stock, implementé skeleton screens y prioricé las imágenes principales.",
        results: [
          "Disminución de más del 50% en el Largest Contentful Paint (LCP) de las páginas de producto.",
          "Cambio instantáneo de modelos, voltajes y colores de productos sin recargar la página.",
          "Mejora sustancial en la experiencia del usuario bajo redes móviles 3G/4G.",
        ],
      },
      {
        id: 5,
        title: "E-commerce Enterprise para Supermercados Jumbo",
        company: "Cencosud Argentina",
        role: "Front-End Developer Internacional",
        period: "2022 — 2023",
        category: "VTEX IO & Global Scale",
        summary:
          "Integración en el equipo de ingeniería de Cencosud en Argentina, desarrollando soluciones y manteniendo la estabilidad de la plataforma digital de supermercados Jumbo.",
        challenge:
          "Una de las mayores operaciones de supermercados de Argentina, caracterizada por carritos con cientos de ítems simultáneos, reglas complejas de precios regionales y entregas ágiles en un equipo multicultural distribuido.",
        solution:
          "Colaboré en el desarrollo de funcionalidades front-end con React y TypeScript, creando consultas GraphQL eficientes para evitar sobrecarga de datos. Diagnostiqué y solucioné incidentes de alta prioridad en la navegación de categorías y turnos de entrega, comunicándome fluidamente en español e inglés.",
        results: [
          "Cumplimiento del 100% de los objetivos de sprint y lanzamientos de catálogo en fecha.",
          "Optimización del payload en consultas GraphQL, aliviando el consumo de red en el cliente.",
          "Reconocimiento por la rápida adaptación al ecosistema técnico y a los estándares internacionales del equipo.",
        ],
      },
      {
        id: 6,
        title: "Landing Page Dinámica & Motor de Alta Conversión",
        company: "ZenBox",
        role: "Front-End Developer & UI Specialist (Freelance)",
        period: "2022",
        category: "React & Alta Conversión",
        summary:
          "Diseño e implementación de una landing page optimizada para máxima conversión, con microinteracciones refinadas y formulario inteligente de captura de leads.",
        challenge:
          "Crear desde cero una interfaz de alto impacto visual, ligera y persuasiva para el lanzamiento de un producto digital, convirtiendo visitantes en leads con mínima fricción.",
        solution:
          "Desarrollé la interfaz en React con componentización modular, transiciones CSS modernas, validación instantánea de campos en el cliente y carga ultrarrápida de recursos.",
        results: [
          "Tasa de conversión de visitantes a registros notablemente superior al promedio del sector SaaS.",
          "Score 98 en Google PageSpeed Insights con carga total en solo 1.1s.",
          "Entrega ágil con código limpio y fácilmente escalable para futuras campañas.",
        ],
      },
      {
        id: 7,
        title: "Plataforma de Comercio Digital para la Cadena Easy",
        company: "Cencosud Argentina",
        role: "Front-End Developer Internacional",
        period: "2022 — 2023",
        category: "VTEX IO & Home Center",
        summary:
          "Más de 1 año de trabajo técnico continuo en la evolución de la mayor cadena de materiales de construcción y decoración de Argentina sobre VTEX IO.",
        challenge:
          "Mantener y escalar una aplicación de alta complejidad técnica, con catálogos segmentados por decenas de provincias argentinas, modalidades de envío personalizadas y reglas específicas del sector de construcción.",
        solution:
          "Desarrollé y refactoricé componentes front-end en React, aplicando tipado robusto con TypeScript para elevar la estabilidad del código. Optimicé los filtros facetados de búsqueda y el checkout, participando activamente en code reviews internacionales.",
        results: [
          "Estabilidad operativa impecable durante eventos de tráfico masivo (CyberMonday y Hot Sale).",
          "Reducción sustancial de errores en tiempo de ejecución tras la migración sistemática a TypeScript.",
          "Mayor coherencia visual y navegación intuitiva para el usuario.",
        ],
      },
      {
        id: 8,
        title: "App de Automatización para Clonación de Promociones",
        company: "Ecosistema VTEX",
        role: "Front-End Developer (VTEX App)",
        period: "2021 — 2022",
        category: "VTEX IO & Automatización",
        summary:
          "Aplicación administrativa personalizada integrada de forma nativa a VTEX IO Admin, permitiendo la sincronización y clonación masiva de promociones entre múltiples tiendas.",
        challenge:
          "Grandes grupos minoristas con múltiples tiendas en VTEX enfrentaban un proceso manual y propenso a errores: registrar individualmente decenas de promociones complejas en cada cuenta de la red.",
        solution:
          "Diseñé una aplicación front-end con tabla interactiva que consume las APIs REST de promociones de VTEX. El usuario selecciona las reglas de la tienda origen y, con un solo clic, la herramienta valida y replica las reglas a todas las tiendas de destino.",
        results: [
          "Ahorro de más del 80% del tiempo operativo en los equipos de marketing y e-commerce.",
          "Eliminación de discrepancias de precios y condiciones comerciales entre tiendas de la red.",
          "Demostración práctica de dominio avanzado sobre la arquitectura interna y APIs de VTEX.",
        ],
      },
      {
        id: 9,
        title: "Generador Dinámico de Formularios con Notion API",
        company: "Sobtic / Independiente",
        role: "Full-Stack Web Developer (Independiente)",
        period: "2021",
        category: "React & Notion API",
        summary:
          "Desarrollo de una solución dinámica que convierte bases de datos relacionales de Notion en formularios web públicos e interactivos en tiempo real, sin requerir deploys adicionales.",
        challenge:
          "Permitir que equipos de negocio creen formularios, incorporen diversos tipos de preguntas (textos, selectores, tags) y recopilen respuestas automáticamente, sin depender de desarrolladores para modificar el código.",
        solution:
          "Construí un cliente en React conectado a un middleware en Node.js/Express que interactúa con la API de Notion. El sistema analiza el esquema de la base de datos en tiempo real, renderiza los campos correspondientes dinámicamente y registra las respuestas en Notion de inmediato.",
        results: [
          "Autonomía total para equipos de operaciones al crear encuestas dinámicas sin programar código.",
          "Cero costos de infraestructura adicional ni ciclos de despliegue para nuevas preguntas.",
          "Proyecto personal clave que consolidó competencias en integración de APIs de terceros y visión de producto.",
        ],
      },
    ],
  },
  modal: {
    close: "Cerrar modal de detalles",
    challengeTitle: "Desafío Enfrentado",
    solutionTitle: "Arquitectura & Solución",
    resultsTitle: "Resultados & Impacto Técnico",
    techsTitle: "Tecnologías & Herramientas",
    companyLabel: "Empresa",
    periodLabel: "Período",
    roleLabel: "Rol / Desempeño",
  },
  opportunities: {
    title: "Construyamos algo extraordinario juntos.",
    roles: [
      "Front-End Developer (Semi-Sr / Senior)",
      "Especialista VTEX IO & E-commerce",
      "Especialista Drupal DX8 & Stencil.js",
      "Desarrollo React & Next.js",
      "Proyectos Freelance & Consultoría",
    ],
    cta: "Iniciar Conversación Ahora",
  },
  contact: {
    title: "¿Conversamos?",
    subtitle:
      "¿Tienes un proyecto desafiante, una vacante o deseas intercambiar ideas sobre arquitectura front-end? Envíame un mensaje.",
    labels: {
      name: "Nombre Completo",
      email: "Tu Mejor Correo Electrónico",
      message: "¿Cómo puedo ayudarte?",
    },
    placeholders: {
      name: "Ej: Carlos Gómez",
      email: "Ej: carlos@empresa.com",
      message: "Cuéntame sobre tu proyecto, plazos estimados y objetivos...",
    },
    errors: {
      nameRequired: "El nombre es obligatorio",
      nameMin: "El nombre debe tener al menos 3 caracteres",
      emailInvalid: "Ingresa un correo electrónico válido",
      messageEmpty: "El mensaje no puede estar vacío",
      messageMin: "El mensaje debe contener al menos 10 caracteres",
      genericError: "Ocurrió un error al enviar. Por favor intenta nuevamente.",
    },
    submitting: "Enviando mensaje...",
    submit: "Enviar Mensaje",
    successToast: "¡Mensaje enviado con éxito! Me pondré en contacto a la brevedad.",
    errorToast: "Error al enviar el mensaje. Por favor intenta de nuevo.",
  },
  footer: {
    roleDescription:
      "Desarrollador Front-End especializado en React, Next.js, VTEX IO y accesibilidad web.",
    status: "Disponible para nuevos proyectos",
    navigation: "Navegación",
    social: "Conexiones",
    backToTop: "Volver arriba",
    rights: "Todos los derechos reservados.",
  },
};

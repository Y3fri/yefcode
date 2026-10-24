/**
 * Textos del sitio en español (idioma por defecto).
 * Regla de oro: todo texto visible vive en src/data; nada dentro de
 * componentes, nada inventado. Lo pendiente se marca TODO(yeferson).
 *
 * Posicionamiento: "Tu página web, sin complicaciones ni presupuestos
 * de agencia." Tono cercano, profesional y honesto.
 */

export const es = {
  meta: {
    description:
      "Yeferson Guzmán, desarrollador full stack en Colombia. Páginas web para personas y negocios: hoja de vida, catálogo, portafolio y proyectos a la medida.",
  },

  skipLink: "Saltar al contenido",

  nav: {
    ariaLabel: "Navegación principal",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    labels: {
      home: "Inicio",
      templates: "Plantillas",
      pricing: "Precios",
      projects: "Proyectos",
      faq: "FAQ",
      contact: "Contacto",
    },
  },

  settings: {
    openLabel: "Abrir configuración",
    closeLabel: "Cerrar configuración",
    panelLabel: "Configuración",
    hint: "Tus preferencias se guardan solo en este navegador.",
    theme: { legend: "Tema", dark: "Oscuro", light: "Claro", system: "Sistema" },
    language: { legend: "Idioma", es: "Español", en: "English" },
    accent: {
      legend: "Color de acento",
      blue: "Azul",
      violet: "Violeta",
      green: "Verde",
      amber: "Ámbar",
    },
    motion: { legend: "Animaciones", full: "Activadas", reduced: "Reducidas" },
  },

  hero: {
    badge: "Cupos abiertos para este mes",
    title: "Tu idea, en línea y funcionando.",
    subtitle:
      "Creo páginas web para personas y negocios: desde una hoja de vida o una invitación, hasta sistemas con citas, productos y base de datos. Código limpio, entrega rápida y precio claro.",
    primaryCta: "Ver paquetes",
    secondaryCta: "Escríbeme por WhatsApp",
    terminal: [
      { prompt: "$", text: "hablamos --por-whatsapp" },
      { text: "→ me cuentas qué necesitas", tone: "muted" as const },
      { prompt: "$", text: "construyo --a-tu-medida" },
      { text: "→ ves avances antes de pagar todo", tone: "muted" as const },
      { prompt: "$", text: "publico --en-linea" },
      { text: "→ tu página lista y funcionando", tone: "ok" as const },
    ],
  },

  services: {
    command: "git log --services",
    title: "Qué puedo crear para ti",
    description: "Tu página web, sin complicaciones ni presupuestos de agencia.",
    items: [
      {
        id: "cv",
        title: "Hoja de vida web",
        text: "Tu perfil profesional en un enlace que puedes poner en tu CV o LinkedIn.",
      },
      {
        id: "business",
        title: "Página para tu negocio",
        text: "Catálogo, horarios, ubicación y botón de WhatsApp para que te encuentren y te escriban.",
      },
      {
        id: "portfolio",
        title: "Portafolio personal",
        text: "Para mostrar tu trabajo si eres diseñador, fotógrafo, estudiante o freelance.",
      },
      {
        id: "events",
        title: "Páginas para momentos especiales",
        text: "Cartas digitales, aniversarios, cumpleaños, invitaciones y sorpresas, con tu mensaje y tu estilo.",
      },
      {
        id: "custom",
        title: "Proyecto a la medida",
        text: "Si tu idea no encaja en las anteriores, la conversamos.",
      },
    ],
  },

  templates: {
    command: "git log --templates",
    title: "Plantillas",
    description:
      "Bases listas para personalizar: eliges una y la adapto a tu caso, con demo en vivo para verla antes de decidir.",
    viewAll: "Ver todas las plantillas",
    viewDemo: "Ver demo",
    cta: "Quiero esta plantilla",
    demoBadge: "Demo",
    demoNote:
      "Demo con datos de ejemplo: nombres, textos y fotos son ficticios, y los botones no hacen nada. En la plantilla real se reemplazan por los tuyos.",
    filterLabel: "Filtrar plantillas por categoría",
    all: "Todas",
    categories: {
      cv: "CV",
      negocio: "Negocio",
      portafolio: "Portafolio",
      momentos: "Momentos especiales",
    },
    bestForLabel: "Ideal para",
    includesLabel: "Incluye",
    countLabel: (n: number) => (n === 1 ? "1 plantilla" : `${n} plantillas`),
    emptyState: "No hay plantillas en esta categoría todavía.",
    previewAlt: (title: string) => `Vista previa de la plantilla ${title}`,
    backLink: "Volver a plantillas",
  },

  process: {
    command: "git log --process",
    title: "Cómo trabajamos",
    description: "Cuatro pasos, de la primera conversación a tu página en línea.",
    steps: [
      {
        id: "brief",
        title: "Conversamos",
        text: "Me cuentas qué necesitas por WhatsApp.",
      },
      {
        id: "proposal",
        title: "Propuesta",
        text: "Te muestro una propuesta o una plantilla base.",
      },
      {
        id: "adjust",
        title: "Personalizamos",
        text: "Ajustamos textos, colores y fotos contigo.",
      },
      {
        id: "launch",
        title: "Publicamos",
        text: "Publicamos tu página y te explico cómo mantenerla.",
      },
    ],
  },

  includes: {
    command: "git log --includes",
    title: "Qué incluye",
    description: "Lo que siempre va incluido en cada página.",
    items: [
      { id: "responsive", text: "Diseño que se ve bien en celular." },
      { id: "link", text: "Enlace propio para compartir." },
      { id: "contact", text: "Botón de contacto o WhatsApp." },
      { id: "seo", text: "Optimizado para cargar rápido y para aparecer en Google." },
    ],
    pendingTitle: "Dominio propio y hosting",
    pendingNote:
      "Lo definimos contigo antes de empezar: te dejo claras las opciones y quién cubre cada costo.",
    // TODO(yeferson): decide si el dominio y el hosting van incluidos en el
    // precio, los paga el cliente o son opcionales (mismo criterio que la
    // respuesta de la FAQ "¿Quién paga el dominio?").
  },

  pricing: {
    command: "git log --pricing",
    title: "Precios",
    description:
      "Tres formas de empezar, según lo que necesites. El valor final se define contigo según el alcance del proyecto.",
    quoteLabel: "Cotización por WhatsApp",
    cta: "Cotizar por WhatsApp",
  },

  faq: {
    command: "git log --faq",
    title: "Preguntas frecuentes",
    description: "Lo esencial antes de escribirme: plazos, cambios, pagos y dominio.",
    items: [
      {
        id: "time",
        question: "¿Cuánto tarda?",
        answer:
          "Depende del tipo de página y de qué tan rápido me pases los contenidos. Te doy un plazo junto con la propuesta, antes de comprometer nada.",
        // TODO(yeferson): define tiempos reales por tipo de página
        // (CV, negocio, portafolio, momentos especiales, a la medida).
      },
      {
        id: "tech",
        question: "¿Necesito saber de tecnología?",
        answer:
          "No. Yo me encargo de construir y publicar tu página; tú solo revisas y apruebas los contenidos. Si surge algo técnico, te lo explico en palabras simples.",
      },
      {
        id: "changes",
        question: "¿Puedo cambiar cosas después?",
        answer:
          "Sí. Los textos, colores y fotos se pueden actualizar después de publicar. Antes de cada cambio te confirmo si entra en lo acordado o si tiene costo adicional.",
        // TODO(yeferson): define la política de cambios posteriores
        // (cuántos cambios incluye la entrega y cuándo aplica costo).
      },
      {
        id: "payment",
        question: "¿Cómo se paga?",
        answer:
          "Lo definimos al confirmar el proyecto: te confirmo los medios de pago y el valor por WhatsApp antes de empezar, sin sorpresas.",
        // TODO(yeferson): define los medios de pago aceptados
        // (transferencia, Nequi, Daviplata u otro) y si hay anticipo.
      },
      {
        id: "domain",
        question: "¿Quién paga el dominio?",
        answer:
          "Es un detalle que acordamos antes de empezar. Te dejo claras las opciones y quién cubre cada costo antes de que pagues nada.",
        // TODO(yeferson): define la política de dominio y hosting
        // (incluido en el precio, lo paga el cliente u opcional).
      },
    ],
  },

  cta: {
    command: "$ ./start-project.sh",
    title: "¿Tienes una idea? Cuéntamela.",
    text: "Escríbeme por WhatsApp y te digo cómo se puede hacer, con alcance y precio claros.",
    button: "Escríbeme por WhatsApp",
  },

  about: {
    command: "git log --oneline --about",
    title: "Sobre mí",
    description: "Un vistazo a cómo trabajo y qué experiencia traigo.",
    paragraphs: [
      "Desarrollo aplicaciones web y APIs cubriendo todo el recorrido: interfaz, backend y base de datos. Antes de enfocarme en desarrollo trabajé en soporte técnico y en supervisión de equipos operativos, donde aprendí a resolver incidencias con método, cumplir procesos y pensar en cómo se usa el software en el día a día.",
      "Construyo proyectos propios (POS, PWAs y plataformas web) donde manejo el ciclo completo: diseño de interfaz, API, datos y despliegue. Me importa que el código sea claro, que la interfaz sea fácil de usar y que el sistema funcione bien en producción.",
    ],
    closing:
      "Trabajo desde Facatativá, Colombia y estoy disponible para trabajo remoto y proyectos freelance.",
    factsCommand: "$ cat profile.json",
    facts: {
      locationLabel: "Ubicación",
      focusLabel: "Enfoque",
      focusValue: "Full Stack",
      availabilityLabel: "Disponibilidad",
      availabilityValue: "Remoto / proyectos freelance",
    },
  },

  stack: {
    command: "git log --stack",
    title: "Stack",
    description: "Tecnologías que uso en mis proyectos, agrupadas por capa.",
    groups: {
      frontend: "Frontend",
      backend: "Backend",
      data: "Datos",
      others: "Otros",
    },
  },

  projects: {
    command: "git log --projects",
    title: "Proyectos que he construido",
    description:
      "Evidencia de lo que sé hacer: tiendas, PWAs, herramientas de escritorio y plataformas full stack.",
    status: { live: "En producción", development: "En desarrollo" },
    roleLabel: "Mi rol",
    technologiesLabel: (title: string) => `Tecnologías de ${title}`,
    videoNote: "demo en video",
    codeLabel: "Código",
  },

  experience: {
    command: "git log --experience",
    title: "Experiencia",
    description: "Trayectoria profesional: roles, periodos y logros.",
    achievementsTitle: "Logros",
    pending: {
      org: "TODO(yeferson): empresa o cliente",
      dates: "TODO(yeferson): fechas exactas",
      achievements: "TODO(yeferson): 2 logros concretos",
    },
  },

  contact: {
    command: "git remote add contact",
    title: "Trabajemos juntos",
    description:
      "¿Tienes una idea, un sistema que mejorar o un proyecto por construir? Cuéntame y te respondo lo antes posible.",
    channels: {
      email: "Correo",
      whatsapp: "WhatsApp",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    copyAria: (channel: string) => `Copiar ${channel}`,
    copy: "Copiar",
    copied: "Copiado",
    copyFailed: "No se pudo copiar",
    openAria: (channel: string) => `Abrir ${channel}`,
    locationCommand: "$ echo $LOCATION",
    statusLabel: "open to work",
  },

  footer: {
    description: "Portafolio de Yeferson Guzmán — Desarrollador Full Stack.",
    linksLabel: "Enlaces del pie de página",
  },

  newTab: "(abre en una pestaña nueva)",
};

export type Dictionary = typeof es;

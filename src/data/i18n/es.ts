/**
 * Textos del sitio en español (idioma por defecto).
 * Regla de oro: todo texto visible vive en src/data; nada dentro de
 * componentes, nada inventado. Lo pendiente se marca TODO(yeferson).
 */

export const es = {
  meta: {
    description:
      "Yeferson Guzmán, desarrollador full stack en Colombia. Construyo aplicaciones web y APIs con React, Python y bases de datos, de la interfaz al despliegue.",
  },

  skipLink: "Saltar al contenido",

  nav: {
    ariaLabel: "Navegación principal",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    labels: {
      home: "Inicio",
      about: "Sobre mí",
      services: "Qué hago",
      stack: "Stack",
      projects: "Proyectos",
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
    badge: "Disponible para nuevos proyectos",
    title: "Desarrollo software web que funciona, escala y se mantiene.",
    subtitle:
      "Soy Yeferson Guzmán, desarrollador full stack en Colombia. Diseño y construyo aplicaciones web y APIs con React, Python y bases de datos relacionales, de la interfaz al despliegue.",
    primaryCta: "Ver proyectos",
    secondaryCta: "Hablemos",
    terminal: [
      { prompt: "$", text: "whoami" },
      { text: "→ yeferson-guzman", tone: "ok" as const },
      { prompt: "$", text: "role" },
      { text: "→ full-stack developer", tone: "muted" as const },
      { prompt: "$", text: "stack" },
      { text: "→ react · python · fastapi · mysql", tone: "muted" as const },
      { prompt: "$", text: "location" },
      { text: "→ facatativa, colombia 🇨🇴", tone: "muted" as const },
      { prompt: "$", text: "status" },
      { text: "→ open to work", tone: "ok" as const },
    ],
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

  services: {
    command: "git log --services",
    title: "Qué hago",
    description: "Cuatro formas concretas de trabajar contigo.",
    items: [
      {
        id: "web",
        title: "Desarrollo web full stack",
        text: "Aplicaciones completas, del frontend a la base de datos.",
      },
      {
        id: "api",
        title: "APIs y backend",
        text: "Servicios REST con Python/FastAPI, autenticación y datos bien modelados.",
      },
      {
        id: "ui",
        title: "Interfaces y UX",
        text: "Diseños limpios, responsive y pensados para el usuario real.",
      },
      {
        id: "custom",
        title: "Sistemas a la medida",
        text: "Herramientas internas, puntos de venta y soluciones operativas para negocios.",
      },
    ],
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
    title: "Proyectos",
    description:
      "Una selección de trabajos recientes: tiendas, PWAs, herramientas de escritorio y plataformas full stack en desarrollo.",
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

import type { Dictionary } from "./es";
import type { ProjectCopy } from "@/lib/types";
import type { ProjectSlug } from "@/data/projects";

/**
 * Textos del sitio en inglés.
 * Debe cubrir exactamente la forma de `Dictionary` (es.ts): si añades
 * una clave en español, el compilador te obliga a traducirla aquí.
 */

export const en: Dictionary = {
  meta: {
    description:
      "Yeferson Guzmán, full stack developer in Colombia. I build web applications and APIs with React, Python and relational databases, from interface to deployment.",
  },

  skipLink: "Skip to content",

  nav: {
    ariaLabel: "Main navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    labels: {
      home: "Home",
      about: "About",
      services: "What I do",
      stack: "Stack",
      projects: "Projects",
      contact: "Contact",
    },
  },

  settings: {
    openLabel: "Open settings",
    closeLabel: "Close settings",
    panelLabel: "Settings",
    hint: "Your preferences are stored only in this browser.",
    theme: { legend: "Theme", dark: "Dark", light: "Light", system: "System" },
    language: { legend: "Language", es: "Español", en: "English" },
    accent: {
      legend: "Accent color",
      blue: "Blue",
      violet: "Violet",
      green: "Green",
      amber: "Amber",
    },
    motion: { legend: "Animations", full: "On", reduced: "Reduced" },
  },

  hero: {
    badge: "Available for new projects",
    title: "I build web software that works, scales and lasts.",
    subtitle:
      "I'm Yeferson Guzmán, a full stack developer in Colombia. I design and build web applications and APIs with React, Python and relational databases, from interface to deployment.",
    primaryCta: "View projects",
    secondaryCta: "Let's talk",
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
    title: "About me",
    description: "A quick look at how I work and the experience I bring.",
    paragraphs: [
      "I build web applications and APIs across the whole path: interface, backend and database. Before focusing on development I worked in technical support and operations team supervision, where I learned to solve incidents methodically, follow processes and think about how software is used day to day.",
      "I build my own projects (POS apps, PWAs and web platforms) where I handle the full cycle: interface design, API, data and deployment. I care about clear code, an interface that is easy to use and a system that holds up in production.",
    ],
    closing:
      "I'm based in Facatativá, Colombia and available for remote work and freelance projects.",
    factsCommand: "$ cat profile.json",
    facts: {
      locationLabel: "Location",
      focusLabel: "Focus",
      focusValue: "Full Stack",
      availabilityLabel: "Availability",
      availabilityValue: "Remote / freelance projects",
    },
  },

  services: {
    command: "git log --services",
    title: "What I do",
    description: "Four concrete ways I can work with you.",
    items: [
      {
        id: "web",
        title: "Full stack web development",
        text: "Complete applications, from frontend to database.",
      },
      {
        id: "api",
        title: "APIs and backend",
        text: "REST services with Python/FastAPI, authentication and well-modeled data.",
      },
      {
        id: "ui",
        title: "Interfaces and UX",
        text: "Clean, responsive designs built around the real user.",
      },
      {
        id: "custom",
        title: "Custom systems",
        text: "Internal tools, point-of-sale systems and operational solutions for businesses.",
      },
    ],
  },

  stack: {
    command: "git log --stack",
    title: "Stack",
    description: "Technologies I use in my projects, grouped by layer.",
    groups: {
      frontend: "Frontend",
      backend: "Backend",
      data: "Data",
      others: "Others",
    },
  },

  projects: {
    command: "git log --projects",
    title: "Projects",
    description:
      "A selection of recent work: online stores, PWAs, desktop tools and full stack platforms in development.",
    status: { live: "In production", development: "In development" },
    roleLabel: "My role",
    technologiesLabel: (title: string) => `Technologies used in ${title}`,
    videoNote: "video demo",
    codeLabel: "Code",
  },

  experience: {
    command: "git log --experience",
    title: "Experience",
    description: "Career path: roles, periods and achievements.",
    achievementsTitle: "Achievements",
    pending: {
      org: "TODO(yeferson): company or client",
      dates: "TODO(yeferson): exact dates",
      achievements: "TODO(yeferson): 2 concrete achievements",
    },
  },

  contact: {
    command: "git remote add contact",
    title: "Let's work together",
    description:
      "Have an idea, a system to improve or a project to build? Tell me about it and I'll get back to you as soon as I can.",
    channels: {
      email: "Email",
      whatsapp: "WhatsApp",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    copyAria: (channel: string) => `Copy ${channel}`,
    copy: "Copy",
    copied: "Copied",
    copyFailed: "Could not copy",
    openAria: (channel: string) => `Open ${channel}`,
    locationCommand: "$ echo $LOCATION",
    statusLabel: "open to work",
  },

  footer: {
    description: "Portfolio of Yeferson Guzmán — Full Stack Developer.",
    linksLabel: "Footer links",
  },

  newTab: "(opens in a new tab)",
};

/**
 * Copia en inglés de las tarjetas de proyecto.
 * La fuente en español (summary/role) vive en src/data/projects.ts;
 * este mapa debe cubrir TODOS los slugs, lo garantiza el tipado.
 */
export const projectCopyEn: Readonly<Record<ProjectSlug, ProjectCopy>> = {
  yedibox: {
    summary:
      "An online store with its own design and custom front-end work: clear navigation and a purchase experience considered from end to end.",
    role: "UI/UX design and front-end development",
  },
  "sistema-pos": {
    summary:
      "A desktop point-of-sale application with its own interface and a MySQL database for sales and inventory management.",
    role: "Interface design, development and data modeling",
  },
  "reclaje-pwa": {
    summary:
      "A progressive web app with an interactive Google Maps view and its own API, built for mobile lookups.",
    role: "Frontend, API and UX",
  },
  deylax: {
    summary:
      "A full stack web platform in development with a FastAPI backend, a React frontend and a 3D interface built with Three.js.",
  },
  yedicont: {
    summary:
      "A web application in development with a Python API and a React frontend, built to grow on a well-modeled database.",
  },
  "free-learning-english": {
    summary:
      "A web tool for practising English with in-browser speech recognition (Google Speech API) that evaluates pronunciation.",
  },
};

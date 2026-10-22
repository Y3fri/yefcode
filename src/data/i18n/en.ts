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
      "Yeferson Guzmán, full stack developer in Colombia. Websites for people and businesses: online resume, business page, portfolio and custom projects.",
  },

  skipLink: "Skip to content",

  nav: {
    ariaLabel: "Main navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    labels: {
      home: "Home",
      templates: "Templates",
      pricing: "Pricing",
      projects: "Projects",
      faq: "FAQ",
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
    title: "Your website, without complications.",
    subtitle:
      "Online resumes, pages for businesses and custom digital details. Built by hand, with clean code and at a fair price.",
    primaryCta: "View templates",
    secondaryCta: "Message me on WhatsApp",
    terminal: [
      { prompt: "$", text: "help" },
      { text: "→ people, businesses, ideas", tone: "muted" as const },
      { prompt: "$", text: "deliver" },
      { text: "→ a live site, ready to share", tone: "muted" as const },
      { prompt: "$", text: "status" },
      { text: "→ taking new projects", tone: "ok" as const },
    ],
  },

  services: {
    command: "git log --services",
    title: "What I can build for you",
    description: "Your website, without complications or agency budgets.",
    items: [
      {
        id: "cv",
        title: "Web resume",
        text: "Your professional profile in a link you can add to your CV or LinkedIn.",
      },
      {
        id: "business",
        title: "Website for your business",
        text: "Catalog, hours, location and a WhatsApp button so people can find you and message you.",
      },
      {
        id: "portfolio",
        title: "Personal portfolio",
        text: "To showcase your work if you're a designer, photographer, student or freelancer.",
      },
      {
        id: "events",
        title: "Pages for special moments",
        text: "Digital letters, anniversaries, birthdays, invitations and surprises, with your message and your style.",
      },
      {
        id: "custom",
        title: "Custom project",
        text: "If your idea doesn't fit the options above, let's talk it through.",
      },
    ],
  },

  templates: {
    command: "git log --templates",
    title: "Templates",
    description:
      "Ready-to-customize bases: pick one and I adapt it to your case, with a live demo to see it before deciding.",
    viewAll: "View all templates",
    viewDemo: "View demo",
    cta: "I want this template",
    demoBadge: "Demo",
    demoNote:
      "Demo with sample data: names, texts and photos are fictional. In the real template they're replaced with yours.",
    filterLabel: "Filter templates by category",
    all: "All",
    categories: {
      cv: "Resume",
      negocio: "Business",
      portafolio: "Portfolio",
      momentos: "Special moments",
    },
    bestForLabel: "Best for",
    includesLabel: "Includes",
    countLabel: (n: number) => (n === 1 ? "1 template" : `${n} templates`),
    emptyState: "No templates in this category yet.",
    previewAlt: (title: string) => `Preview of the ${title} template`,
    backLink: "Back to templates",
  },

  process: {
    command: "git log --process",
    title: "How we work",
    description: "Four steps, from first conversation to your site online.",
    steps: [
      {
        id: "brief",
        title: "We talk",
        text: "You tell me what you need on WhatsApp.",
      },
      {
        id: "proposal",
        title: "Proposal",
        text: "I show you a proposal or a base template.",
      },
      {
        id: "adjust",
        title: "We personalize",
        text: "We adjust texts, colors and photos together.",
      },
      {
        id: "launch",
        title: "We go live",
        text: "We publish your site and I explain how to maintain it.",
      },
    ],
  },

  includes: {
    command: "git log --includes",
    title: "What's included",
    description: "What's always part of every site.",
    items: [
      { id: "responsive", text: "A design that looks good on mobile." },
      { id: "link", text: "Your own link to share." },
      { id: "contact", text: "A contact or WhatsApp button." },
      { id: "seo", text: "Optimized to load fast and show up on Google." },
    ],
    pendingTitle: "Your own domain and hosting",
    pendingNote:
      "We settle it together before starting: I lay out the options and who covers each cost.",
    // TODO(yeferson): decide whether domain and hosting are included in the
    // price, paid by the client or optional (same decision as the FAQ
    // "Who pays for the domain?").
  },

  pricing: {
    command: "git log --pricing",
    title: "Pricing",
    description:
      "Three ways to start, depending on what you need. The final price is defined with you based on the project's scope.",
    quoteLabel: "Quote via WhatsApp",
    cta: "Get a quote on WhatsApp",
  },

  faq: {
    command: "git log --faq",
    title: "Frequently asked questions",
    description: "The essentials before you message me: timelines, changes, payments and domains.",
    items: [
      {
        id: "time",
        question: "How long does it take?",
        answer:
          "It depends on the type of page and how quickly you send me the content. You get a timeframe with the proposal, before committing to anything.",
        // TODO(yeferson): define real timelines per type of page
        // (resume, business, portfolio, special moments, custom).
      },
      {
        id: "tech",
        question: "Do I need to know about technology?",
        answer:
          "No. I take care of building and publishing your site; you only review and approve the content. If something technical comes up, I explain it in plain words.",
      },
      {
        id: "changes",
        question: "Can I change things afterwards?",
        answer:
          "Yes. Texts, colors and photos can be updated after launch. Before each change I confirm whether it's within the agreed scope or has an extra cost.",
        // TODO(yeferson): define the post-delivery changes policy
        // (how many changes are included and when an extra cost applies).
      },
      {
        id: "payment",
        question: "How do I pay?",
        answer:
          "We settle it when the project is confirmed: I confirm the payment methods and the price on WhatsApp before starting, no surprises.",
        // TODO(yeferson): define accepted payment methods
        // (bank transfer, Nequi, Daviplata or other) and whether a deposit applies.
      },
      {
        id: "domain",
        question: "Who pays for the domain?",
        answer:
          "It's a detail we agree on before starting. I lay out the options and who covers each cost before you pay anything.",
        // TODO(yeferson): define the domain and hosting policy
        // (included in the price, paid by the client or optional).
      },
    ],
  },

  cta: {
    command: "$ ./start-project.sh",
    title: "Have an idea? Tell me about it.",
    text: "Message me on WhatsApp and I'll tell you how it can be done, with clear scope and price.",
    button: "Message me on WhatsApp",
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
    title: "Projects I've built",
    description:
      "Evidence of what I can do: online stores, PWAs, desktop tools and full stack platforms.",
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

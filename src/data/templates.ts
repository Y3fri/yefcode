import type { LocalizedText } from "@/lib/types";
import { L } from "@/lib/utils";

/**
 * Catálogo de plantillas y contenido ficticio de sus demos.
 *
 * Regla de oro: todo el contenido de las demos es GENÉRICO y FICTICIO
 * ("Nombre Apellido", "Mi Negocio", textos de ejemplo). No aparece
 * ninguna persona, negocio, precio ni métrica real. Las demos se
 * etiquetan siempre como "Demo".
 *
 * Para agregar una plantilla nueva: añade su objeto aquí, su demo en
 * src/templates/<slug>/, su registro en src/templates/index.ts y su
 * imagen de vista previa en public/templates/ (ver CLAUDE.md).
 */

/** Categorías del filtro de la galería (etiquetas en src/data/i18n). */
export const templateCategories = ["cv", "negocio", "portafolio", "momentos"] as const;
export type TemplateCategory = (typeof templateCategories)[number];

/**
 * Tipo público de una plantilla del catálogo (lo que usan las tarjetas
 * y las páginas). El contenido de cada demo no se expone aquí: vive en
 * cada const y se consume desde su componente en src/templates/<slug>/.
 */
export type Template = {
  slug: string;
  title: LocalizedText;
  category: TemplateCategory;
  description: LocalizedText;
  bestFor: LocalizedText;
  /** Nota corta opcional que se muestra en la tarjeta. */
  note?: LocalizedText;
  features: readonly LocalizedText[];
  /** Ruta pública de la imagen de vista previa (SVG en /public/templates). */
  previewImage: string;
};

export const cvProfesionalTemplate = {
  slug: "cv-profesional",
  title: L("Hoja de vida web", "Web resume"),
  category: "cv",
  description: L(
    "Tu perfil profesional en un enlace: contacto, experiencia, estudios y habilidades en una página que se ve bien en el celular.",
    "Your professional profile in a link: contact, experience, education and skills on a page that looks good on mobile.",
  ),
  bestFor: L(
    "Para adjuntar en tu CV o compartir en LinkedIn.",
    "To attach to your CV or share on LinkedIn.",
  ),
  features: [
    L("Sección de contacto con botones", "Contact section with buttons"),
    L("Experiencia y estudios ordenados", "Experience and education, neatly ordered"),
    L("Habilidades en chips", "Skills shown as chips"),
    L("Botón para descargar el CV", "Button to download your CV"),
  ],
  previewImage: "/templates/cv-profesional.svg",
  demo: {
    name: L("Nombre Apellido", "First Last"),
    role: L("Tu título o profesión", "Your title or profession"),
    location: L("Ciudad, Colombia", "City, Colombia"),
    contact: {
      email: L("tu@correo.com", "you@email.com"),
      phone: L("+57 000 000 0000", "+57 000 000 0000"),
    },
    downloadCta: L("Descargar CV", "Download resume"),
    summaryTitle: L("Perfil", "Profile"),
    summary: L(
      "Escribe aquí un párrafo corto sobre ti: qué haces, qué te interesa y qué tipo de oportunidades buscas.",
      "Write a short paragraph about you: what you do, what you care about and what opportunities you're looking for.",
    ),
    experienceTitle: L("Experiencia", "Experience"),
    experience: [
      {
        id: "exp-1",
        role: L("Tu cargo más reciente", "Your most recent role"),
        org: L("Empresa o cliente", "Company or client"),
        period: L("2024 — Actualidad", "2024 — Present"),
        detail: L(
          "Una línea con qué hacías y qué resultó de eso.",
          "A line on what you did and what came of it.",
        ),
      },
      {
        id: "exp-2",
        role: L("Cargo anterior", "Previous role"),
        org: L("Empresa o cliente", "Company or client"),
        period: L("2022 — 2024", "2022 — 2024"),
        detail: L(
          "Otra línea con tus responsabilidades.",
          "Another line about your responsibilities.",
        ),
      },
    ],
    educationTitle: L("Estudios", "Education"),
    education: [
      {
        id: "edu-1",
        degree: L("Título o carrera", "Degree or program"),
        org: L("Institución", "Institution"),
        period: L("2018 — 2022", "2018 — 2022"),
      },
    ],
    skillsTitle: L("Habilidades", "Skills"),
    skills: [
      L("Comunicación", "Communication"),
      L("Organización", "Organization"),
      L("Análisis", "Analysis"),
      L("Trabajo en equipo", "Teamwork"),
      L("Atención al detalle", "Attention to detail"),
      L("Resolución de problemas", "Problem solving"),
    ],
    contactCta: L("Escríbeme", "Get in touch"),
  },
} as const;

export const negocioLocalTemplate = {
  slug: "negocio-local",
  title: L("Página para tu negocio", "Business page"),
  category: "negocio",
  description: L(
    "Hero con tu propuesta, productos o servicios, horarios, ubicación y botón de WhatsApp para que te encuentren.",
    "A hero with your offer, products or services, hours, location and a WhatsApp button so people can find you.",
  ),
  bestFor: L(
    "Negocios locales que quieren aparecer en internet y recibir mensajes.",
    "Local businesses that want to show up online and receive messages.",
  ),
  features: [
    L("Catálogo de productos o servicios", "Products or services catalog"),
    L("Horarios y ubicación claros", "Clear hours and location"),
    L("Botón de WhatsApp directo", "Direct WhatsApp button"),
    L("Pensada para el celular", "Built for mobile"),
  ],
  previewImage: "/templates/negocio-local.svg",
  demo: {
    name: L("Mi Negocio", "My Business"),
    tagline: L("Aquí va tu eslogan corto", "Here goes your short slogan"),
    heroTitle: L("Cerca de ti, cuando lo necesitas", "Close to you, when you need it"),
    heroText: L(
      "Escríbeme por WhatsApp y te respondo rápido. También puedes visitarnos en el local.",
      "Message me on WhatsApp and I'll reply quickly. You can also visit us in store.",
    ),
    whatsappCta: L("Escribir por WhatsApp", "Message on WhatsApp"),
    productsTitle: L("Productos y servicios", "Products and services"),
    products: [
      {
        id: "product-1",
        name: L("Producto o servicio 1", "Product or service 1"),
        text: L(
          "Describe en una línea qué ofreces y por qué lo elegirían.",
          "Describe in one line what you offer and why people would pick it.",
        ),
      },
      {
        id: "product-2",
        name: L("Producto o servicio 2", "Product or service 2"),
        text: L(
          "Menciona un detalle que lo haga especial (hecho a mano, entrega el mismo día…).",
          "Mention a detail that makes it special (handmade, same-day delivery…).",
        ),
      },
      {
        id: "product-3",
        name: L("Producto o servicio 3", "Product or service 3"),
        text: L(
          "Agrega aquí otro producto o servicio que quieras destacar.",
          "Add another product or service you want to highlight.",
        ),
      },
      {
        id: "product-4",
        name: L("Producto o servicio 4", "Product or service 4"),
        text: L(
          "Último espacio del catálogo: el que no puede faltar.",
          "The last slot of your catalog: the one that can't be missing.",
        ),
      },
    ],
    hoursTitle: L("Horarios", "Opening hours"),
    hours: [
      L(
        "Lunes a viernes: 8:00 a. m. – 6:00 p. m.",
        "Monday to Friday: 8:00 a.m. – 6:00 p.m.",
      ),
      L("Sábados: 9:00 a. m. – 1:00 p. m.", "Saturdays: 9:00 a.m. – 1:00 p.m."),
      L("Domingos: cerrado", "Sundays: closed"),
    ],
    locationTitle: L("Ubicación", "Location"),
    address: L(
      "Calle 00 # 00-00 · Ciudad, Colombia",
      "Calle 00 # 00-00 · City, Colombia",
    ),
  },
} as const;

export const portafolioCreativoTemplate = {
  slug: "portafolio-creativo",
  title: L("Portafolio creativo", "Creative portfolio"),
  category: "portafolio",
  description: L(
    "Galería de tus trabajos con filtros por categoría, para que vean lo que haces de un vistazo.",
    "A gallery of your work with category filters, so people see what you do at a glance.",
  ),
  bestFor: L(
    "Diseñadores, fotógrafos, estudiantes y freelancers.",
    "Designers, photographers, students and freelancers.",
  ),
  features: [
    L("Galería con filtros", "Gallery with filters"),
    L("Sección sobre ti", "About-you section"),
    L("Botón de contacto", "Contact button"),
    L("Tus trabajos al instante", "Your work up front"),
  ],
  previewImage: "/templates/portafolio-creativo.svg",
  demo: {
    name: L("Nombre Apellido", "First Last"),
    tagline: L("Diseño, fotografía y web", "Design, photography and web"),
    about: L(
      "Aquí va una línea sobre ti: qué haces, qué te gusta crear y con quién trabajas.",
      "A line about you: what you do, what you like to create and who you work with.",
    ),
    filterAria: L("Filtrar trabajos por categoría", "Filter work by category"),
    allFilter: L("Todos", "All"),
    filters: [
      { id: "design", label: L("Diseño", "Design") },
      { id: "photo", label: L("Fotografía", "Photography") },
      { id: "web", label: L("Web", "Web") },
    ],
    items: [
      { id: "work-1", title: L("Trabajo 1", "Work 1"), cat: "design" },
      { id: "work-2", title: L("Trabajo 2", "Work 2"), cat: "photo" },
      { id: "work-3", title: L("Trabajo 3", "Work 3"), cat: "web" },
      { id: "work-4", title: L("Trabajo 4", "Work 4"), cat: "design" },
      { id: "work-5", title: L("Trabajo 5", "Work 5"), cat: "photo" },
      { id: "work-6", title: L("Trabajo 6", "Work 6"), cat: "web" },
    ],
    contactTitle: L("¿Trabajamos juntos?", "Shall we work together?"),
    contactCta: L("Escríbeme", "Get in touch"),
  },
} as const;

export const cartaDigitalTemplate = {
  slug: "carta-digital",
  title: L("Carta digital", "Digital letter"),
  category: "momentos",
  description: L(
    "Un mensaje personal con animación suave, en su propia página, para regalar.",
    "A personal message with a soft animation, on its own page, to give away.",
  ),
  bestFor: L(
    "Aniversarios, cumpleaños, despedidas y agradecimientos.",
    "Anniversaries, birthdays, farewells and thank-yous.",
  ),
  note: L(
    "Se personaliza con tu mensaje y tus fotos.",
    "Personalized with your message and your photos.",
  ),
  features: [
    L("Tu texto con tipografía cuidada", "Your words with careful typography"),
    L("Animación suave de corazones", "Soft heart animation"),
    L("Fondo con tu estilo", "A background in your style"),
    L("Enlace para compartir", "A link to share"),
  ],
  previewImage: "/templates/carta-digital.svg",
  demo: {
    kicker: L("Para ti", "For you"),
    title: L("Una carta para ti", "A letter for you"),
    paragraphs: [
      L(
        "Hay cosas que se dicen mejor despacio: este es un pequeño espacio para decírtelas.",
        "Some things are better said slowly: this is a small space to tell you them.",
      ),
      L(
        "Gracias por estar, por acompañarme en los días sencillos y por hacer que los difíciles se sientan más livianos.",
        "Thank you for being here, for staying on the easy days and for making the hard ones feel lighter.",
      ),
      L(
        "Espero que, cuando leas esto, sonrías y sepas lo importante que eres para mí.",
        "I hope that, when you read this, you smile and know how important you are to me.",
      ),
    ],
    closing: L("Con cariño,", "With love,"),
    sender: L("Nombre Apellido", "First Last"),
  },
} as const;

export const invitacionEventoTemplate = {
  slug: "invitacion-evento",
  title: L("Invitación de evento", "Event invitation"),
  category: "momentos",
  description: L(
    "Fecha, lugar y cuenta regresiva en una invitación que se ve genial en el celular.",
    "Date, place and a countdown in an invitation that looks great on a phone.",
  ),
  bestFor: L(
    "Bodas, cumpleaños, aniversarios y fiestas.",
    "Weddings, birthdays, anniversaries and parties.",
  ),
  features: [
    L("Cuenta regresiva al día del evento", "Countdown to the event day"),
    L("Fecha, hora y lugar claros", "Clear date, time and place"),
    L("Botón para confirmar asistencia", "RSVP button"),
    L("Fácil de compartir por WhatsApp", "Easy to share on WhatsApp"),
  ],
  previewImage: "/templates/invitacion-evento.svg",
  demo: {
    kicker: L("Invitación", "Invitation"),
    names: L("Ana & Luis", "Ana & Luis"),
    line: L(
      "Nos casamos y queremos celebrarlo contigo.",
      "We're getting married and want to celebrate with you.",
    ),
    dateLabel: L("Fecha", "Date"),
    dateText: L(
      "Sábado 19 de junio de 2027 · 4:00 p. m.",
      "Saturday, June 19, 2027 · 4:00 p.m.",
    ),
    /** Fecha objetivo de la cuenta regresiva (ficticia, contenido de demo). */
    eventDateIso: "2027-06-19T16:00:00-05:00",
    countdownLabels: {
      days: L("días", "days"),
      hours: L("horas", "hours"),
      minutes: L("min", "min"),
      seconds: L("seg", "sec"),
    },
    pastMessage: L("¡Llegó el día!", "The day is here!"),
    venueLabel: L("Lugar", "Place"),
    venue: L(
      "Salón de eventos · Calle 00 # 00-00, Ciudad",
      "Event hall · Calle 00 # 00-00, City",
    ),
    rsvpCta: L("Confirmar asistencia", "RSVP"),
    footerNote: L("Tu presencia es el mejor regalo.", "Your presence is the best gift."),
  },
} as const;

export const restauranteCafeTemplate = {
  slug: "restaurante-cafe",
  title: L("Página para restaurante o café", "Restaurant or café page"),
  category: "negocio",
  description: L(
    "Menú digital con precios, horarios, ubicación y reserva de mesa: que el comensal vea la carta antes de llegar.",
    "A digital menu with prices, hours, location and table booking: let diners see the menu before they arrive.",
  ),
  bestFor: L(
    "Restaurantes, cafés, panaderías y pizzerías.",
    "Restaurants, cafés, bakeries and pizzerias.",
  ),
  features: [
    L("Menú por categorías con precios", "Menu by category with prices"),
    L("Reserva de mesa por WhatsApp", "Table booking via WhatsApp"),
    L("Horarios y ubicación claros", "Clear hours and location"),
    L("Galería del lugar", "Gallery of the place"),
  ],
  previewImage: "/templates/restaurante-cafe.svg",
  demo: {
    name: L("Café de Ejemplo", "Example Café"),
    tagline: L(
      "Cocina casera y café recién hecho",
      "Home-style cooking and freshly made coffee",
    ),
    heroTitle: L(
      "Cerca de ti, con sabor de casa",
      "Close to you, with a home-cooked taste",
    ),
    menuTitle: L("Menú", "Menu"),
    menuCategories: [
      {
        id: "drinks",
        name: L("Bebidas", "Drinks"),
        items: [
          {
            id: "drink-1",
            name: L("Café americano", "American coffee"),
            price: L("$ 4.000", "$ 4,000"),
          },
          {
            id: "drink-2",
            name: L("Café con leche", "Coffee with milk"),
            price: L("$ 5.000", "$ 5,000"),
          },
          {
            id: "drink-3",
            name: L("Jugo natural", "Fresh juice"),
            price: L("$ 6.000", "$ 6,000"),
          },
        ],
      },
      {
        id: "mains",
        name: L("Fuertes", "Mains"),
        items: [
          {
            id: "main-1",
            name: L("Sopa del día", "Soup of the day"),
            price: L("$ 12.000", "$ 12,000"),
          },
          {
            id: "main-2",
            name: L("Bandeja del día", "Daily platter"),
            price: L("$ 18.000", "$ 18,000"),
          },
          {
            id: "main-3",
            name: L("Trucha al ajillo", "Garlic trout"),
            price: L("$ 20.000", "$ 20,000"),
          },
        ],
      },
      {
        id: "desserts",
        name: L("Postres", "Desserts"),
        items: [
          {
            id: "dessert-1",
            name: L("Postre del día", "Dessert of the day"),
            price: L("$ 8.000", "$ 8,000"),
          },
          {
            id: "dessert-2",
            name: L("Brownie con helado", "Brownie with ice cream"),
            price: L("$ 10.000", "$ 10,000"),
          },
        ],
      },
    ],
    reserveCta: L("Reservar mesa", "Book a table"),
    galleryTitle: L("El lugar", "The place"),
    hoursTitle: L("Horarios", "Opening hours"),
    hours: [
      L(
        "Lunes a viernes: 7:00 a. m. – 8:00 p. m.",
        "Monday to Friday: 7:00 a.m. – 8:00 p.m.",
      ),
      L("Sábados: 8:00 a. m. – 9:00 p. m.", "Saturdays: 8:00 a.m. – 9:00 p.m."),
      L("Domingos: 8:00 a. m. – 3:00 p. m.", "Sundays: 8:00 a.m. – 3:00 p.m."),
    ],
    locationTitle: L("Ubicación", "Location"),
    address: L(
      "Calle 00 # 00-00 · Ciudad, Colombia",
      "Calle 00 # 00-00 · City, Colombia",
    ),
  },
} as const;

export const tiendaOnlineTemplate = {
  slug: "tienda-online",
  title: L("Tienda online", "Online store"),
  category: "negocio",
  description: L(
    "Catálogo de productos con precios y filtros por categoría; el pedido se cierra por WhatsApp, sin pasarela de pagos.",
    "A product catalog with prices and category filters; orders are closed over WhatsApp, no payment gateway needed.",
  ),
  bestFor: L(
    "Negocios que venden por catálogo y toman pedidos por mensaje.",
    "Businesses that sell from a catalog and take orders by message.",
  ),
  features: [
    L("Catálogo con precios", "Catalog with prices"),
    L("Filtros por categoría", "Category filters"),
    L("Pedido por WhatsApp", "Order via WhatsApp"),
    L("Sin pasarela de pagos", "No payment gateway needed"),
  ],
  previewImage: "/templates/tienda-online.svg",
  demo: {
    name: L("Tienda de Ejemplo", "Example Store"),
    tagline: L("Envíos a toda la ciudad", "Delivery across the city"),
    cartLabel: L("Carrito", "Cart"),
    cartEmpty: L("Tu carrito está vacío", "Your cart is empty"),
    filterAria: L("Filtrar productos por categoría", "Filter products by category"),
    allFilter: L("Todos", "All"),
    filters: [
      { id: "home", label: L("Hogar", "Home") },
      { id: "gifts", label: L("Regalos", "Gifts") },
      { id: "accessories", label: L("Accesorios", "Accessories") },
    ],
    products: [
      {
        id: "product-1",
        name: L("Lámpara de mesa", "Table lamp"),
        price: L("$ 39.900", "$ 39,900"),
        cat: "home",
      },
      {
        id: "product-2",
        name: L("Set de mantas", "Blanket set"),
        price: L("$ 49.900", "$ 49,900"),
        cat: "home",
      },
      {
        id: "product-3",
        name: L("Caja de regalo", "Gift box"),
        price: L("$ 29.900", "$ 29,900"),
        cat: "gifts",
      },
      {
        id: "product-4",
        name: L("Tarjeta personalizada", "Custom card"),
        price: L("$ 9.900", "$ 9,900"),
        cat: "gifts",
      },
      {
        id: "product-5",
        name: L("Estuche para celular", "Phone case"),
        price: L("$ 19.900", "$ 19,900"),
        cat: "accessories",
      },
      {
        id: "product-6",
        name: L("Llavero de cuero", "Leather keychain"),
        price: L("$ 14.900", "$ 14,900"),
        cat: "accessories",
      },
    ],
    addCta: L("Agregar al carrito", "Add to cart"),
    orderCta: L("Hacer pedido por WhatsApp", "Order via WhatsApp"),
    shippingNote: L(
      "Envío gratis en pedidos desde $ 100.000 (ejemplo).",
      "Free shipping on orders from $ 100,000 (example).",
    ),
  },
} as const;

export const clinicaCitasTemplate = {
  slug: "clinica-citas",
  title: L("Página para clínica o consultorio", "Clinic or practice page"),
  category: "negocio",
  description: L(
    "Servicios, perfiles del equipo y agenda de citas en una página tranquila y clara para tus pacientes.",
    "Services, team profiles and appointment scheduling in a calm, clear page for your patients.",
  ),
  bestFor: L(
    "Consultorios médicos, odontológicos, de psicología y terapias.",
    "Medical, dental, psychology and therapy practices.",
  ),
  features: [
    L("Servicios explicados con calma", "Services explained calmly"),
    L("Agenda de citas en línea", "Online appointment scheduling"),
    L("Perfil del profesional", "Professional profile"),
    L("Ubicación y contacto", "Location and contact"),
  ],
  previewImage: "/templates/clinica-citas.svg",
  demo: {
    name: L("Consultorio de Ejemplo", "Example Practice"),
    tagline: L("Atención personalizada", "Personalized care"),
    heroTitle: L("Tu salud, con tiempo y claridad", "Your health, with time and clarity"),
    heroText: L(
      "Agenda tu cita en línea y recibe la confirmación por WhatsApp. También puedes escribir antes si tienes dudas.",
      "Book your appointment online and get confirmation on WhatsApp. You can also write beforehand if you have questions.",
    ),
    servicesTitle: L("Servicios", "Services"),
    services: [
      {
        id: "service-1",
        name: L("Consulta inicial", "Initial consultation"),
        text: L(
          "Una primera cita para conocer tu caso y resolver tus dudas.",
          "A first appointment to understand your case and answer your questions.",
        ),
      },
      {
        id: "service-2",
        name: L("Seguimiento", "Follow-up"),
        text: L(
          "Citas periódicas para revisar tu avance y ajustar el plan.",
          "Periodic visits to review your progress and adjust the plan.",
        ),
      },
      {
        id: "service-3",
        name: L("Atención prioritaria", "Priority care"),
        text: L(
          "Huecos reservados para lo que no puede esperar.",
          "Reserved slots for things that can't wait.",
        ),
      },
      {
        id: "service-4",
        name: L("Asesoría en línea", "Online guidance"),
        text: L(
          "Resuelve dudas rápidas por mensaje entre citas.",
          "Quick questions answered by message between visits.",
        ),
      },
    ],
    stepsTitle: L("Cómo agendar", "How to book"),
    steps: [
      L(
        "Elige el servicio y el día que te acomode.",
        "Pick the service and a day that suits you.",
      ),
      L("Déjanos tus datos de contacto.", "Leave us your contact details."),
      L("Recibe la confirmación de tu cita.", "Get confirmation of your appointment."),
    ],
    scheduleTitle: L("Agenda", "Schedule"),
    scheduleDays: L("Lunes a viernes", "Monday to Friday"),
    scheduleHours: L("8:00 a. m. – 6:00 p. m.", "8:00 a.m. – 6:00 p.m."),
    timeSlotsAria: L("Horarios disponibles de ejemplo", "Example available times"),
    timeSlots: [
      { id: "slot-1", label: L("9:00 a. m.", "9:00 a.m.") },
      { id: "slot-2", label: L("11:00 a. m.", "11:00 a.m.") },
      { id: "slot-3", label: L("3:00 p. m.", "3:00 p.m.") },
      { id: "slot-4", label: L("5:00 p. m.", "5:00 p.m.") },
    ],
    professionalLabel: L("Quién te atiende", "Who assists you"),
    professional: L("Nombre Apellido", "First Last"),
    professionalRole: L("Tu especialidad profesional", "Your professional specialty"),
    bookingCta: L("Agendar cita", "Book an appointment"),
    address: L(
      "Calle 00 # 00-00 · Ciudad, Colombia",
      "Calle 00 # 00-00 · City, Colombia",
    ),
  },
} as const;

export const cursoClasesTemplate = {
  slug: "curso-clases",
  title: L("Página de curso o clases", "Course or classes page"),
  category: "negocio",
  description: L(
    "Presenta tu curso: qué incluye, temario, precio e inscripción, todo en una sola página.",
    "Present your course: what's included, syllabus, price and enrollment, all on one page.",
  ),
  bestFor: L(
    "Cursos, talleres, clases particulares y academias.",
    "Courses, workshops, private classes and academies.",
  ),
  features: [
    L("Temario por módulos", "Syllabus by module"),
    L("Precio e inscripción claros", "Clear price and enrollment"),
    L('Sección "para quién es"', '"Who it\'s for" section'),
    L("Botón de inscripción", "Enrollment button"),
  ],
  previewImage: "/templates/curso-clases.svg",
  demo: {
    name: L("Curso de Ejemplo", "Example Course"),
    instructor: L("Nombre Apellido", "First Last"),
    instructorRole: L("Tu profesión o especialidad", "Your profession or specialty"),
    heroTitle: L("Aprende [tu tema] paso a paso", "Learn [your topic] step by step"),
    heroText: L(
      "Cuenta en dos líneas qué aprenderán y cómo lo enseñas: en video, en vivo o con ejercicios.",
      "In two lines, say what people will learn and how you teach: on video, live or with exercises.",
    ),
    price: L("$ 00.000 COP", "$ 00,000 COP"),
    priceNote: L("Precio de ejemplo", "Example price"),
    enrollCta: L("Inscribirme", "Enroll"),
    includesTitle: L("Qué incluye", "What's included"),
    includes: [
      L("Clases grabadas a tu ritmo", "Recorded classes at your pace"),
      L("Ejercicios prácticos", "Practical exercises"),
      L("Certificado al terminar", "Certificate on completion"),
      L("Soporte por WhatsApp", "Support via WhatsApp"),
    ],
    syllabusTitle: L("Temario", "Syllabus"),
    modules: [
      {
        id: "module-1",
        number: L("Módulo 1", "Module 1"),
        title: L("Fundamentos", "Foundations"),
        detail: L(
          "Lo esencial para empezar con una base bien clara.",
          "The essentials to start with a clear foundation.",
        ),
      },
      {
        id: "module-2",
        number: L("Módulo 2", "Module 2"),
        title: L("Práctica guiada", "Guided practice"),
        detail: L(
          "Ejercicios paso a paso con ejemplos resueltos.",
          "Step-by-step exercises with worked examples.",
        ),
      },
      {
        id: "module-3",
        number: L("Módulo 3", "Module 3"),
        title: L("Proyecto final", "Final project"),
        detail: L(
          "Un proyecto que puedes mostrar en tu portafolio.",
          "A project you can show in your portfolio.",
        ),
      },
      {
        id: "module-4",
        number: L("Módulo 4", "Module 4"),
        title: L("Siguientes pasos", "Next steps"),
        detail: L(
          "Cómo seguir aprendiendo después de terminar el curso.",
          "How to keep learning after the course.",
        ),
      },
    ],
    forTitle: L("¿Para quién es?", "Who is it for?"),
    forText: L(
      "Describe el nivel y a quién va dirigido tu curso: principiantes, gente con base o profesionales que quieren actualizar.",
      "Describe the level and who your course is for: beginners, people with some base, or professionals who want to update.",
    ),
  },
} as const;

/** Tupla tipada de la que se derivan los slugs literales. */
const allTemplates = [
  cvProfesionalTemplate,
  negocioLocalTemplate,
  portafolioCreativoTemplate,
  cartaDigitalTemplate,
  invitacionEventoTemplate,
  restauranteCafeTemplate,
  tiendaOnlineTemplate,
  clinicaCitasTemplate,
  cursoClasesTemplate,
] as const;

/** Catálogo completo, en el orden de la galería. */
export const templates: readonly Template[] = allTemplates;

/** Slugs literales de las plantillas (derivados de los datos). */
export type TemplateSlug = (typeof allTemplates)[number]["slug"];

/** Busca una plantilla por slug (devuelve undefined si no existe). */
export function getTemplateBySlug(slug: string): Template | undefined {
  return templates.find((template) => template.slug === slug);
}

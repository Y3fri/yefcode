# Contenido — YefCode

Inventario de todos los textos del sitio y de los datos que faltan por completar.

## Regla de oro

> **Todo texto vive en `src/data`; no se inventan datos; los pendientes llevan `TODO(yeferson)`.**

- **Textos traducibles** (títulos, botones, párrafos, etiquetas):
  `src/data/i18n/es.ts` (fuente, español por defecto) y `src/data/i18n/en.ts`
  (inglés, tipado para cubrir todas las claves).
- **Datos personales**: `src/data/profile.ts` y `src/data/socials.ts`.
- **Proyectos**: `src/data/projects.ts` (`summary`/`role` en español; la
  traducción vive en `projectCopyEn`, `src/data/i18n/en.ts`).
- **Stack**: `src/data/stack.ts` (nombres de tecnologías: no se traducen).
- **Plantillas**: `src/data/templates.ts` (catálogo + contenido ficticio de
  las demos; todos los textos bilingües con `L("es", "en")`).
- **Precios**: `src/data/pricing.ts` (`priceCop: null` ⇒ "Cotización por
  WhatsApp"; jamás se inventa una cifra).
- **Nada** de esto se define dentro de un componente.

Los marcadores `TODO(yeferson)` se dejan **en el código**, nunca inventan datos
ni se cuelan en la interfaz pública (salvo la sección Experiencia, que está
oculta por `showExperience` hasta completarla).

Búscalos con: `rg "TODO\(yeferson\)" src/`

---

## 0. Posicionamiento y tono (decidido)

- **Mensaje central:** "Tu página web, sin complicaciones ni presupuestos de
  agencia."
- **Perfil:** se mantiene como desarrollador full stack; ahora comunica que
  está abierto a proyectos de todo tipo, especialmente para quienes empiezan
  y necesitan una presencia en internet clara y bien hecha.
- **Tono:** cercano, profesional y honesto. Sin promesas exageradas ("el
  mejor", "garantizado"), sin urgencia falsa, sin testimonios ni clientes
  inventados y **sin precios ni tiempos inventados**.
- **Oferta comunicada:** hojas de vida web, páginas para negocios,
  portafolios, momentos especiales y proyectos a la medida, con plantillas
  como punto de entrada y WhatsApp como canal de contacto.

---

## 1. Contenido pendiente (debes completarlo)

Decisiones del negocio (ninguna afecta el diseño; solo hay que elegir):

| #   | Qué falta                                | Archivo               | Detalle                                                                              |
| --- | ---------------------------------------- | --------------------- | ------------------------------------------------------------------------------------ |
| 1   | **Precio del paquete Básico**            | `src/data/pricing.ts` | `priceCop: null` ⇒ muestra "Cotización por WhatsApp". Pon el valor en COP.           |
| 2   | **Precio del paquete Negocio**           | `src/data/pricing.ts` | Ídem.                                                                                |
| 3   | **Precio del paquete A la medida**       | `src/data/pricing.ts` | Ídem.                                                                                |
| 4   | **Dominio y hosting: política**          | `src/data/i18n/es.ts` | ¿Van incluidos, los paga el cliente u opcionales? Afecta a "Qué incluye" y a la FAQ. |
| 5   | **FAQ: tiempos reales**                  | `src/data/i18n/es.ts` | Plazo por tipo de página (CV, negocio, portafolio, momentos, a la medida).           |
| 6   | **FAQ: política de cambios posteriores** | `src/data/i18n/es.ts` | Cuántos cambios incluye la entrega y cuándo aplica costo adicional.                  |
| 7   | **FAQ: medios de pago**                  | `src/data/i18n/es.ts` | Transferencia, Nequi, Daviplata u otro; si hay anticipo.                             |
| 8   | **FAQ: quién cubre el dominio**          | `src/data/i18n/es.ts` | Mismo criterio que #4 (la respuesta pública ya es honesta sin comprometer nada).     |

Datos por confirmar (de la versión anterior, siguen abiertos):

| #   | Qué falta                                                  | Archivo                | Detalle                                                                         |
| --- | ---------------------------------------------------------- | ---------------------- | ------------------------------------------------------------------------------- |
| 9   | **Foto personal**                                          | `src/data/profile.ts`  | El archivo `public/projects/photo.jpg` existe; `photoSrc` sigue en `undefined`. |
| 10  | **Experiencia — Full Stack (actualidad)**                  | `src/data/profile.ts`  | Falta empresa/cliente, fechas exactas y 2 logros concretos.                     |
| 11  | **Experiencia — Soporte técnico y supervisión (anterior)** | `src/data/profile.ts`  | Falta empresa, fechas exactas y 2 logros concretos.                             |
| 12  | **YEDIBOX: qué ofrece exactamente**                        | `src/data/projects.ts` | Precisa la descripción de la tienda (catálogo, pagos, envíos…).                 |
| 13  | **YEDIBOX: stack técnico**                                 | `src/data/projects.ts` | Ahora solo figuran etiquetas (Diseño web, Front-End, UI/UX).                    |
| 14  | **Reclaje PWA: objetivo real**                             | `src/data/projects.ts` | Confirma qué consulta el usuario y para qué.                                    |
| 15  | **Reclaje PWA: URL pública**                               | `src/data/projects.ts` | Hoy no tiene `url`.                                                             |
| 16  | **DEYLAX: qué hace la plataforma**                         | `src/data/projects.ts` | Describe sector, usuario y función principal.                                   |
| 17  | **DEYLAX: rol concreto**                                   | `src/data/projects.ts` | `role` ausente: la tarjeta no muestra "Mi rol" hasta que lo confirmes.          |
| 18  | **YediCont: qué hace la aplicación**                       | `src/data/projects.ts` | Describe qué problema resuelve y para quién.                                    |
| 19  | **YediCont: rol concreto**                                 | `src/data/projects.ts` | Igual que DEYLAX.                                                               |
| 20  | **Free Learning English: rol concreto**                    | `src/data/projects.ts` | Igual que DEYLAX.                                                               |
| 21  | **Enlace al código (GitHub) de los proyectos**             | `src/data/projects.ts` | Campo `repo` listo en los 9 proyectos; solo se muestra si lo añades (hoy AURA ya lo usa). |
| 22  | **Stack: tecnologías que falten**                          | `src/data/stack.ts`    | No se agregan sin tu confirmación.                                              |

### Cómo completar cada uno

1. **Precios (1–3):** pon el número en `priceCop` (COP, sin puntos ni
   símbolo: `350000`). La tarjeta deja de mostrar "Cotización por WhatsApp"
   automáticamente y el botón ya prellena el WhatsApp con el nombre del
   paquete.
2. **Dominio/hosting (4 y 8):** elige el criterio y ajusta las frases de
   `includes.pendingNote` y de la respuesta `domain` en `es.ts` (y sus
   gemelas en `en.ts`).
3. **FAQ (5–7):** reescribe las respuestas en `es.ts` y `en.ts` con tu
   política real; borra el `TODO(yeferson)` correspondiente.
4. **Foto (9):** pon `photoSrc: "/projects/photo.jpg"` en `profile.ts`.
5. **Experiencia (10–11):** rellena `org`, `period` y `achievements` y
   cambia `showExperience = true` en `profile.ts`.
6. **Proyectos (12–21) y stack (22):** actualiza los campos marcados.

---

## 2. Contenido fijado (fuente por sección)

| Sección                 | Fuente                                         | Textos principales                                                                                                                                           |
| ----------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| SEO / metadata          | `src/app/layout.tsx` + `i18n/es.ts` (`meta`)   | description orientada a "páginas web para personas y negocios en Colombia", OG, JSON-LD `Person` + `ProfessionalService` (areaServed Colombia, sin teléfono) |
| Sitemap                 | `src/app/sitemap.ts` + `templates.ts`          | Home, `/plantillas` y las 5 rutas de plantilla                                                                                                               |
| Navbar                  | `profile.ts` (`navigation`) + `i18n` (`nav`)   | Inicio, Plantillas, Precios, Proyectos, FAQ, Contacto (href `/#…`)                                                                                           |
| Ajustes                 | `i18n` (`settings`)                            | Tema, Idioma, Color de acento, Animaciones                                                                                                                   |
| Hero                    | `i18n` (`hero`)                                | "Tu página web, sin complicaciones.", botones Ver plantillas / WhatsApp, terminal `ayudo/entrega/estado`                                                     |
| Qué puedo crear para ti | `i18n` (`services`)                            | 5 tarjetas: hoja de vida web, negocio, portafolio, momentos especiales, a la medida                                                                          |
| Plantillas (home)       | `templates.ts` + `i18n` (`templates`)          | Tarjetas con demo badge, "Ideal para", chips y botón "Quiero esta plantilla"                                                                                 |
| Plantillas (galería)    | `templates.ts` + `i18n` (`templates`)          | Filtro por categoría, recuento en vivo, tarjetas (h2)                                                                                                        |
| Plantilla (demo)        | `templates.ts` (`demo`) + `i18n` (`templates`) | Demo con contenido ficticio, banner "Demo", CTA WhatsApp con nombre prellenado                                                                               |
| Cómo trabajamos         | `i18n` (`process`)                             | 4 pasos: Conversamos, Propuesta, Personalizamos, Publicamos                                                                                                  |
| Qué incluye             | `i18n` (`includes`)                            | 4 puntos incluidos + "Dominio propio y hosting" (política pendiente)                                                                                         |
| Precios                 | `pricing.ts` + `i18n` (`pricing`)              | Básico / Negocio / A la medida; precio `null` ⇒ "Cotización por WhatsApp"                                                                                    |
| Proyectos               | `projects.ts` + `i18n` (`projects`)            | "Proyectos que he construido", estado, `Mi rol`, chips, enlaces                                                                                              |
| Sobre mí                | `i18n` (`about`) + `profile.ts`                | 2 párrafos, cierre con ubicación y 3 datos rápidos                                                                                                           |
| Stack                   | `stack.ts` + `i18n` (`stack`)                  | Grupos Frontend / Backend / Datos / Otros                                                                                                                    |
| FAQ                     | `i18n` (`faq`)                                 | 5 preguntas con acordeón accesible (plazos, tecnología, cambios, pagos, dominio)                                                                             |
| Contacto                | `socials.ts` + `i18n` (`contact`)              | Tarjetas Correo / WhatsApp / LinkedIn / GitHub con copiar-abrir                                                                                              |
| CTA final               | `i18n` (`cta`) + `socials.ts`                  | "¿Tienes una idea? Cuéntamela." + WhatsApp con mensaje prellenado en español                                                                                 |
| Footer                  | `profile.ts` + `i18n` (`footer`)               | `© <año> Yeferson Guzmán · Facatativá, Colombia`, enlaces y `branch: main`                                                                                   |

### Datos de contacto (verificados, centralizados)

| Dato      | Valor                                             | Archivo      |
| --------- | ------------------------------------------------- | ------------ |
| Correo    | `yeferguzman11@gmail.com` (`mailto:`)             | `socials.ts` |
| WhatsApp  | `+57 322 389 0477` → `https://wa.me/573223890477` | `socials.ts` |
| LinkedIn  | `yeferson-andrey-guzman-silva-8a5aa9188`          | `socials.ts` |
| GitHub    | `Y3fri`                                           | `socials.ts` |
| Ubicación | `Facatativá, Cundinamarca, Colombia`              | `profile.ts` |

### Mensajes prellenados de WhatsApp (siempre en español)

Se construyen con `src/data/socials.ts`; el idioma del sitio no los cambia.

| Uso                           | Mensaje                                                                                       |
| ----------------------------- | --------------------------------------------------------------------------------------------- |
| Tarjeta de contacto           | "Hola Yeferson, vi tu portafolio y me gustaría hablar contigo sobre un proyecto."             |
| Hero y CTA final              | "Hola Yeferson, vi tu portafolio y me interesa una página web. Te cuento lo que necesito: "   |
| Botón "Quiero esta plantilla" | "Hola Yeferson, vi tu portafolio y me interesa la plantilla «…». Te cuento lo que necesito: " |
| Botón "Cotizar por WhatsApp"  | "Hola Yeferson, vi tu portafolio y me interesa el paquete «…». Te cuento lo que necesito: "   |

### Plantillas

Fuente: `src/data/templates.ts`. Demos: `src/templates/<slug>/`. Todas las
demos usan contenido ficticio genérico y se etiquetan "Demo".

| Slug                  | Categoría           | Nota                                                                                                   |
| --------------------- | ------------------- | ------------------------------------------------------------------------------------------------------ |
| `cv-profesional`      | CV                  | Descargar CV con `aria-disabled` (botón demo)                                                          |
| `negocio-local`       | Negocio             | Anclas internas funcionales; WhatsApp deshabilitado                                                    |
| `portafolio-creativo` | Portafolio          | El filtro de la galería **sí funciona**                                                                |
| `carta-digital`       | Momentos especiales | Corazones animados (respetan reduced-motion); tarjeta aclara que se personaliza con tu mensaje y fotos |
| `invitacion-evento`   | Momentos especiales | Cuenta regresiva real a una fecha ficticia (2027)                                                      |

### Proyectos

Fuente: `src/data/projects.ts`. Se ordenan por año descendente.

| Proyecto                | Año  | Estado        | Rama | Enlace                                  |
| ----------------------- | ---- | ------------- | ---- | --------------------------------------- |
| YEDIBOX                 | 2025 | en producción | web  | https://yedibox.com                     |
| Sistema POS             | 2024 | en producción | api  | demo en video (sin enlace)              |
| Reclaje PWA             | 2022 | en desarrollo | web  | sin enlace (pendiente)                  |
| DEYLAX                  | 2026 | en desarrollo | api  | https://deylax.com                      |
| YediCont                | 2026 | en desarrollo | web  | https://yedicont.netlify.app            |
| Free Learning English   | 2025 | en producción | web  | https://y3frienglish.netlify.app        |
| Tattoo Style            | 2026 | en producción | web  | https://tattoplantilla.netlify.app      |
| Invitación de San Valentín | 2026 | en producción | web | https://para-ticonamor.netlify.app    |
| AURA                    | 2026 | en producción | web  | código: https://github.com/Y3fri/AURA   |

### Medios

| Archivo                 | Uso                          | Tipo                       |
| ----------------------- | ---------------------------- | -------------------------- |
| `projects/yedi1.png`    | YEDIBOX                      | imagen                     |
| `projects/tienda23.mp4` | Sistema POS                  | video                      |
| `projects/pwa.png`      | Reclaje PWA                  | imagen                     |
| `projects/deylax.png`   | DEYLAX                       | imagen                     |
| `projects/yedicont.png` | YediCont                     | imagen                     |
| `projects/english.png`  | Free Learning English        | imagen                     |
| `projects/tatto.mp4`    | Tattoo Style                 | video                      |
| `projects/sanvalentin.png` | Invitación de San Valentín | imagen                   |
| `projects/aura.mp4`     | AURA                         | video                      |
| `projects/photo.jpg`    | retrato personal             | imagen (sin usar todavía)  |
| `templates/*.svg`       | vistas previas de plantillas | imagen (mockups genéricos) |

### Preferencias del usuario

- Clave `yefcode.settings` en `localStorage` (`src/lib/settings.ts`).
- Tema oscuro por defecto; claro y sistema opcionales (variables en
  `globals.css`).
- Idioma español por defecto; inglés opcional (diccionarios completos).
- Acento azul por defecto; violeta, verde y ámbar como alternativas.
- Animaciones: por defecto siguen `prefers-reduced-motion`.

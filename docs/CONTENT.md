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
- **Nada** de esto se define dentro de un componente.

Los marcadores `TODO(yeferson)` se dejan **en el código**, nunca inventan datos
ni se cuelan en la interfaz pública (salvo la sección Experiencia, que está
oculta por `showExperience` hasta completarla).

Búscalos con: `rg "TODO\(yeferson\)" src/`

---

## 1. Contenido pendiente (debes completarlo)

| #   | Qué falta                                                        | Archivo                | Detalle                                                                                     |
| --- | ---------------------------------------------------------------- | ----------------------- | ------------------------------------------------------------------------------------------- |
| 1   | **Foto personal**                                                | `src/data/profile.ts`   | El archivo `public/projects/photo.jpg` existe; `photoSrc` sigue en `undefined`. Confirma si quieres mostrarla en "Sobre mí". |
| 2   | **Experiencia — Full Stack (actualidad)**                        | `src/data/profile.ts`   | Falta empresa/cliente, fechas exactas y 2 logros concretos.                                 |
| 3   | **Experiencia — Soporte técnico y supervisión (anterior)**       | `src/data/profile.ts`   | Falta empresa, fechas exactas y 2 logros concretos.                                         |
| 4   | **YEDIBOX: qué ofrece exactamente**                              | `src/data/projects.ts`  | Precisa la descripción de la tienda (catálogo, pagos, envíos…).                             |
| 5   | **YEDIBOX: stack técnico**                                       | `src/data/projects.ts`  | Ahora solo figuran etiquetas (Diseño web, Front-End, UI/UX).                                |
| 6   | **Reclaje PWA: objetivo real**                                   | `src/data/projects.ts`  | Confirma qué consulta el usuario y para qué.                                                |
| 7   | **Reclaje PWA: URL pública**                                     | `src/data/projects.ts`  | Hoy no tiene `url`.                                                                         |
| 8   | **DEYLAX: qué hace la plataforma**                               | `src/data/projects.ts`  | Describe sector, usuario y función principal.                                               |
| 9   | **DEYLAX: rol concreto**                                         | `src/data/projects.ts`  | `role` ausente: la tarjeta no muestra "Mi rol" hasta que lo confirmes.                      |
| 10  | **YediCont: qué hace la aplicación**                             | `src/data/projects.ts`  | Describe qué problema resuelve y para quién.                                                |
| 11  | **YediCont: rol concreto**                                       | `src/data/projects.ts`  | Igual que DEYLAX.                                                                           |
| 12  | **Free Learning English: rol concreto**                           | `src/data/projects.ts`  | Igual que DEYLAX.                                                                           |
| 13  | **Enlace al código (GitHub) de los proyectos**                   | `src/data/projects.ts`  | Campo `repo` listo en los 6 proyectos; solo se muestra si lo añades.                        |
| 14  | **Stack: tecnologías que falten**                                | `src/data/stack.ts`     | No se agregan sin tu confirmación.                                                          |

### Cómo completar cada uno

1. **Foto:** pon `photoSrc: "/projects/photo.jpg"` en `profile.ts` y añade el
   bloque de imagen en `src/components/sections/About.tsx`. Si no la quieres,
   borra el comentario `TODO(yeferson)`.
2. **Experiencia:** rellena `org`, `period` y `achievements` en `profile.ts`.
   Cuando las dos entradas estén completas, cambia `showExperience = true` para
   que la sección se publique (se renderiza con los pendientes visibles si
   activas el flag antes de tiempo).
3. **Proyectos:** actualiza los campos marcados en `projects.ts` y, si añades
   `repo`, no olvides la entrada de `projectCopyEn` en `en.ts` (el resumen en
   inglés ya existe para los 6).
4. **Stack:** agrega el ítem al grupo correspondiente en `stack.ts`.

---

## 2. Contenido fijado (fuente por sección)

| Sección        | Fuente                                             | Textos principales                                                                    |
| -------------- | -------------------------------------------------- | -------------------------------------------------------------------------------------- |
| SEO / metadata | `src/app/layout.tsx` + `i18n/es.ts` (`meta`)       | title `Yeferson Guzmán — Desarrollador Full Stack`, description nueva, OG, JSON-LD     |
| Navbar         | `profile.ts` (`navigation`) + `i18n` (`nav`)       | Inicio, Sobre mí, Qué hago, Stack, Proyectos, Contacto                                 |
| Ajustes        | `i18n` (`settings`)                                | Tema, Idioma, Color de acento, Animaciones                                             |
| Hero           | `i18n` (`hero`)                                    | Badge de disponibilidad, titular, subtítulo, CTAs y líneas de terminal                  |
| Sobre mí       | `i18n` (`about`) + `profile.ts`                    | 2 párrafos, cierre con ubicación y 3 datos rápidos                                     |
| Qué hago       | `i18n` (`services`)                                | 4 tarjetas: desarrollo full stack, APIs, interfaces, sistemas a la medida               |
| Stack          | `stack.ts` + `i18n` (`stack`)                      | Grupos Frontend / Backend / Datos / Otros                                              |
| Proyectos      | `projects.ts` + `i18n` (`projects`)                | Estado `En producción` / `En desarrollo`, `Mi rol`, chips, enlaces                      |
| Experiencia    | `profile.ts` (`experience`, oculta por flag)       | Dos entradas reales + pendientes `TODO(yeferson)`                                       |
| Contacto       | `socials.ts` + `i18n` (`contact`)                  | Tarjetas Correo / WhatsApp / LinkedIn / GitHub con copiar-abrir                        |
| Footer         | `profile.ts` + `i18n` (`footer`)                   | `© <año> Yeferson Guzmán · Facatativá, Colombia`, enlaces y `branch: main`              |

### Datos de contacto (verificados, centralizados)

| Dato      | Valor                                              | Archivo                      |
| --------- | -------------------------------------------------- | ---------------------------- |
| Correo    | `yeferguzman11@gmail.com` (`mailto:`)              | `socials.ts`                 |
| WhatsApp  | `+57 322 389 0477` → `https://wa.me/573223890477`  | `socials.ts` (mensaje prellenado en español) |
| LinkedIn  | `yeferson-andrey-guzman-silva-8a5aa9188`           | `socials.ts`                 |
| GitHub    | `Y3fri`                                            | `socials.ts`                 |
| Ubicación | `Facatativá, Cundinamarca, Colombia`               | `profile.ts`                 |

### Proyectos

Fuente: `src/data/projects.ts`. Se ordenan por año descendente.

| Proyecto              | Año  | Estado        | Rama | Enlace                                 |
| --------------------- | ---- | ------------- | ---- | -------------------------------------- |
| YEDIBOX               | 2025 | en producción | web  | https://yedibox.shop                   |
| Sistema POS           | 2024 | en producción | api  | demo en video (sin enlace)             |
| Reclaje PWA           | 2022 | en producción | web  | sin enlace (pendiente)                 |
| DEYLAX                | 2026 | en desarrollo | api  | https://deylax.com                     |
| YediCont              | 2026 | en desarrollo | web  | https://yedicont-front-rkny.vercel.app |
| Free Learning English | 2025 | en producción | web  | https://y3frienglish.netlify.app       |

### Medios

| Archivo        | Proyecto              | Tipo   |
| -------------- | --------------------- | ------ |
| `yedi1.png`    | YEDIBOX               | imagen |
| `tienda23.mp4` | Sistema POS           | video  |
| `pwa.png`      | Reclaje PWA           | imagen |
| `deylax.png`   | DEYLAX                | imagen |
| `yedicont.png` | YediCont              | imagen |
| `english.png`  | Free Learning English | imagen |
| `photo.jpg`    | retrato personal      | imagen (sin usar todavía) |

### Preferencias del usuario

- Clave `yefcode.settings` en `localStorage` (`src/lib/settings.ts`).
- Tema oscuro por defecto; claro y sistema opcionales (variables en
  `globals.css`).
- Idioma español por defecto; inglés opcional (diccionarios completos).
- Acento azul por defecto; violeta, verde y ámbar como alternativas.
- Animaciones: por defecto siguen `prefers-reduced-motion`.

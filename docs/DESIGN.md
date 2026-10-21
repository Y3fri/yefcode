# Diseño — YefCode

Sistema de diseño del portafolio. Inspirado en la estética de **fazt.dev** y
**opencode.ai** (referencia visual únicamente: no se copió texto, logo, imagen
ni código de nadie).

Concepto: **metáfora de terminal y git**. El sitio se lee como una sesión de
consola: etiquetas `HEAD → main`, ramas `⎇ web` / `⎇ api`, secciones tituladas
como comandos y un hero con terminal animada.

---

## 1. Paleta

Fondo casi negro, texto claro, acentos azul → violeta con degradados sutiles
y glow suave.

| Token                     | Valor     | Uso                                   |
| ------------------------- | --------- | ------------------------------------- |
| `--color-background`      | `#05060a` | Fondo principal (casi negro)          |
| `--color-background-soft` | `#0a0c14` | Fondo alternado (footer, cajas)       |
| `--color-surface`         | `#0d1019` | Tarjetas, navbar, ventana de terminal |
| `--color-surface-2`       | `#121623` | Superficie elevada, hover             |
| `--color-border`          | `#1e2333` | Bordes por defecto                    |
| `--color-border-strong`   | `#2c3348` | Bordes más visibles                   |
| `--color-foreground`      | `#e8eaf2` | Texto principal                       |
| `--color-muted`           | `#9aa3b8` | Texto secundario                      |
| `--color-faint`           | `#6b7288` | Texto terciario / metadatos           |
| `--color-accent-blue`     | `#4f8cff` | Acento primario, enlaces, prompt      |
| `--color-accent-indigo`   | `#6d5efc` | Acento medio, hover de bordes         |
| `--color-accent-violet`   | `#a855f7` | Acento final del degradado            |
| `--color-ok`              | `#34d399` | Estado "en vivo", `$` del prompt      |
| `--color-warn`            | `#fbbf24` | Estado "en desarrollo", avisos TODO   |

### Degradado de acento

```
linear-gradient(100deg, #4f8cff → #a855f7)
```

Se usa en: texto del título 404, botón primario, iniciales del logo.
Aplicado con la utilidad `.text-gradient` o `bg-gradient-to-r`.

### Glow de fondo

Dos radios radiales muy tenues, fijas detrás del contenido:

- Azul en la esquina superior izquierda — `rgb(79 140 255 / 0.14)`
- Violeta en la esquina superior derecha — `rgb(168 85 247 / 0.12)`

Utilidad: `.bg-glow`. Ambas capas son `pointer-events-none fixed -z-10`.

### Rejilla técnica

Cuadrícula de 44 px al 2.5 % de opacidad con `mask-image` que se desvanece
hacia abajo. Utilidad: `.bg-grid`. Refuerza la estética dev sin distraer.

---

## 2. Tipografía

| Rol           | Familia          | Token         |
| ------------- | ---------------- | ------------- |
| Texto         | **Geist** (sans) | `--font-sans` |
| Monoespaciada | **Geist Mono**   | `--font-mono` |

Ambas cargadas con `next/font` (sin peticiones externas en producción).

### Escala

| Elemento       | Tamaño           | Peso |
| -------------- | ---------------- | ---- |
| `h1` (hero)    | `text-4xl → 6xl` | 600  |
| `h2` (sección) | `text-3xl → 4xl` | 600  |
| `h3` (tarjeta) | `text-lg`        | 600  |
| Cuerpo         | `text-base`      | 400  |
| Cuerpo pequeño | `text-sm`        | 400  |
| Detalle / mono | `text-xs → sm`   | 400  |

**Regla:** la monoespaciada se reserva para _detalles_ (comandos, años, chips,
etiquetas de rama, metadatos). El contenido para humanos va en sans.

---

## 3. Espaciado y layout

- **Base:** 8 px. Las utilities de Tailwind (`p-5`, `gap-6`, `mt-10`).
- **Contenedor:** `max-w-6xl` centrado, padding lateral `px-5` (móvil) → `sm:px-8`.
- **Secciones:** `py-20` (móvil) → `sm:py-24` de separación vertical.
- **Navbar fija:** altura `h-16` (64 px). Por eso `scroll-padding-top: 5.5rem`
  en `html`, para que los anclas no queden tapadas.

### Radios

| Elemento             | Radio          |
| -------------------- | -------------- |
| Tarjetas / cajas     | `rounded-2xl`  |
| Chips                | `rounded-full` |
| Botones              | `rounded-lg`   |
| Ventana de terminal  | `rounded-xl`   |
| Contenedor del icono | `rounded-full` |

---

## 4. Metáfora git/terminal

| Elemento                 | Ejemplo                       |
| ------------------------ | ----------------------------- |
| Navbar (derecha)         | `HEAD → main`                 |
| Cabecera de sección (h2) | `$ git log --projects`        |
| Etiqueta de rama         | `⎇ web`, `⎇ api`              |
| Título del hero          | `~/yefcode`                   |
| 404                      | `fatal: la ruta no existe...` |
| Footer                   | `branch: main`                |

Componentes que la implementan:

- **`GitLabel`** — etiqueta decorativa `⎇`. Recibe `gradient` para aplicar el
  degradado. Siempre `aria-hidden` porque es decorativa.
- **`SectionHeading`** — bloquea `$ <comando>` + `h2` + descripción opcional +
  `HEAD → main`.
- **`Terminal`** — ventana con semáforo de colores que _tipea_ sus líneas.

---

## 5. Componentes

### `Chip`

Etiqueta pequeña en mono. Variantes `default` (borde sutil) y `accent`
(índigo translúcido). Uso: stack tecnológico, datos destacados.

### `GitLabel`

Etiqueta `⎇` decorativa. `aria-hidden="true"`. Variante `gradient` para el
destacado del hero.

### `SectionHeading`

Cabecera de sección. Props: `command` (el comando), `title` (texto del `h2`),
`description` opcional. Garantiza la jerarquía semántica sin repetir código.

### `Terminal`

Ventana de terminal con `useEffect`. Tipea línea a línea con un cursor
parpadeante. **Respeta `prefers-reduced-motion`**: imprime todo sin animar.
Componente cliente por el estado interno.

### `ProjectCard`

Tarjeta minimalista: media (imagen o video) → overlay con estado y rama →
nombre + año → descripción → chips → enlace.

- **Hover:** el borde pasa a índigo, aparece un glow suave y la imagen hace
  `scale(1.04)` en 500 ms.
- **Estado:** pastilla `en vivo` (verde) o `en desarrollo` (ámbar).
- **Enlace:** mono azul con `↗`. Si no hay enlace, muestra `demo en video ↑`.

### `Navbar`

Fija, con `backdrop-blur-lg` y borde inferior translúcido.

- Escritorio: enlaces mono + pastilla `HEAD → main` con punto verde parpadeante.
- Móvil: botón hamburguesa con `aria-expanded` / `aria-controls`. El panel
  bloquea el scroll del body, cierra con **Escape** y al navegar.

### `Footer`

Dos columnas: identidad + ramas, y navegación de redes. Los enlaces placeholder
muestran un `(TODO)` ámbar.

---

## 6. Animaciones

| Clase                | Efecto                                    |
| -------------------- | ----------------------------------------- |
| `.animate-fade-up`   | Sube 16 px y aparece (600 ms, ease suave) |
| `.animate-blink`     | Cursor de terminal (1.1 s, paso abrupto)  |
| `.animate-spin-slow` | Rotación lenta (9 s) — reservado          |
| `.animate-delay`     | Retraso por índice vía `--delay` en style |

Curva: `cubic-bezier(0.16, 1, 0.3, 1)`.

### `prefers-reduced-motion`

Bloque global en `globals.css`: reduce a `0.001ms` toda duración y transición,
y desactiva `scroll-behavior: smooth`. El componente `Terminal` además detecta
la preferencia y renderiza el texto final sin tipear.

---

## 7. Accesibilidad

- **Contraste:** el texto principal (`#e8eaf2` sobre `#05060a`) supera AA con
  holgura. `--color-muted` sobre fondo también supera AA para texto normal.
- **Foco:** `:focus-visible` global con outline azul de 2 px y offset 3 px.
- **Skip link:** "Saltar al contenido", visible solo al enfocarlo con teclado.
- **Semántica:** `header / nav / main / footer`, `h1` único y `h2` por sección.
- **Imágenes:** todo `<Image>` y `<video>` lleva `alt` / `aria-label` real.
- **Enlaces externos:** aviso `(abre en una pestaña nueva)` con `.sr-only`.
- **Menú móvil:** controlado con ARIA y cerrable con Escape.

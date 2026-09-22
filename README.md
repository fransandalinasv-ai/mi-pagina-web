# SANDA — Ingeniero Artista | Portfolio One Page

> Portfolio web personal de **Francesc Sandalinas** (SANDA).  
> Dark mode · Minimalista · Tesla-inspired.

---

## 📁 Arquitectura

```
SANDAwebsite/
├── index.html                ← Shell HTML (NO tocar)
├── css/
│   └── style.css             ← Estilos y tema oscuro (NO tocar)
├── js/
│   ├── config.js             ← ★ EDITAR AQUÍ para cambiar contenido ★
│   └── main.js               ← Motor de la app (NO tocar)
├── assets/
│   ├── images/
│   │   ├── slides/           ← Imágenes hero del slider
│   │   ├── design/           ← Productos y diseño 3D
│   │   ├── software/         ← Screenshots de Producty
│   │   ├── art/              ← Cuadros de la galería
│   │   └── branding/         ← Logos e icono
│   ├── fonts/                ← Tipografía Sanda1
│   └── video/                ← Vídeos de fondo
└── README.md                 ← Este archivo
```

### Principio de diseño: separación de datos y lógica

```
┌─────────────┐
│  config.js  │  ← LO QUE EDITAS (textos, imágenes, vídeos)
└──────┬──────┘
       │ lee
┌──────▼──────┐
│   main.js   │  ← MOTOR (genera HTML, slider, transiciones)
└──────┬──────┘
       │ rellena
┌──────▼──────┐
│ index.html  │  ← SHELL (contenedores vacíos)
└─────────────┘
```

**Solo necesitas editar `js/config.js`** para cambiar cualquier contenido.

---

## ✏️ Cómo editar contenido

### Abrir `js/config.js` y buscar la sección que quieres cambiar:

### 🖼️ Cambiar una imagen
1. Coloca la nueva imagen en la carpeta `assets/images/` correspondiente
2. En `config.js`, busca el campo `image` o `src` y cambia la ruta:
```js
// Antes
image: 'assets/images/art/nightsurfer-bcn.jpeg',
// Después
image: 'assets/images/art/MI-NUEVA-IMAGEN.jpg',
```

### 🎥 Cambiar un vídeo de fondo
1. Coloca el vídeo en `assets/video/`
2. En `config.js`, en la sección `slides`, cambia el `src`:
```js
background: {
  type: 'video',
  src: 'assets/video/MI-NUEVO-VIDEO.mp4',
},
```

### 📝 Cambiar textos
Busca el campo de texto y modifica entre comillas:
```js
title: 'Mi nuevo título',
quote: 'Mi nueva frase inspiracional.',
```

### ➕ Añadir un cuadro a la galería
En `config.js`, busca `art.items` y añade un bloque al final:
```js
{ image: 'assets/images/art/nuevo-cuadro.jpg', alt: 'Descripción', name: 'Nombre del Cuadro' },
```

### ➕ Añadir un producto de diseño
En `config.js`, busca `design.items` y añade:
```js
{ image: 'assets/images/design/nuevo.png', alt: 'Descripción', name: 'Nombre', desc: 'Categoría · Técnica' },
```

### ➕ Añadir un vídeo de YouTube
En `config.js`, busca `philosophy.videos` y añade:
```js
{
  url: 'https://www.youtube.com/watch?v=VIDEO_ID',
  thumbnail: 'assets/images/alguna-miniatura.jpg',
  alt: 'Descripción',
  title: 'Título del vídeo',
  channel: '@Sanda.projectAZ',
},
```

### ➕ Añadir un nuevo slide
En `config.js`, busca `slides` y añade un bloque completo:
```js
{
  id: 'mi-seccion',          // ID único
  category: 'Mi Categoría',
  title: 'Mi título<br>grande.',
  ctaText: 'Explora esto',
  background: {
    type: 'image',            // 'image', 'video', o 'product'
    src: 'assets/images/slides/mi-imagen.jpg',
    alt: 'Descripción',
  },
},
```
> ⚠️ Si añades un slide, también necesitas añadir su sección de detalle correspondiente en `main.js` (contacta con tu desarrollador).

---

## 🚀 Cómo ver la web

### Opción A: Live Server (VS Code)
1. Abre la carpeta en VS Code
2. Clic derecho en `index.html` → "Open with Live Server"

### Opción B: Terminal
```bash
npx serve .
# o
python -m http.server 8080
```
Luego abre `http://localhost:3000` (o `8080`)

### Opción C: Doble clic
Simplemente haz doble clic en `index.html`

---

## 🎨 Cambiar colores

En `css/style.css`, modifica las variables al inicio:
```css
:root {
  --bg-primary: #000000;      /* Fondo principal */
  --bg-card: #1a1a1a;         /* Fondo de tarjetas */
  --text-primary: #ffffff;    /* Texto principal */
  --text-secondary: #999999;  /* Texto secundario */
}
```

---

## 📱 Responsive

4 breakpoints: Desktop · 1024px · 768px · 480px

---

## 📄 Licencia

Proyecto personal de Francesc Sandalinas. Todos los derechos reservados.

[@Sanda.projectAZ](https://www.youtube.com/@Sanda.projectAZ)

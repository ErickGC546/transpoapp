## TranspoApp

[![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![ESLint](https://img.shields.io/badge/ESLint-9.x-4B32C3?logo=eslint&logoColor=white)](https://eslint.org/)

Landing / UI web construida con **React + Vite**, orientada a presentar un servicio de transporte aplicativo desarrollado con **Flutter** con una experiencia moderna, animaciones suaves y estilos con **Tailwind CSS**.

> Objetivo: que cualquier dev pueda clonar el repo y correrlo en **< 5 min**.

---

## Tabla de contenidos

- [Tecnologías](#tecnologías)
- [Características](#características)
- [Pre-requisitos](#pre-requisitos)
- [Instalación y configuración](#instalación-y-configuración)
- [Uso](#uso)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Contribución](#contribución)
- [Licencia](#licencia)

---

## Tecnologías

- **React 19** (UI)
- **Vite** (dev server + build)
- **Tailwind CSS** (estilos utility-first)
- **Framer Motion** (animaciones)
- **ESLint** (calidad de código)

---

## Características

- UI en React con estructura simple (entrypoint en `src/main.jsx` y componente principal en `src/App.jsx`).
- Estilos con **Tailwind CSS**.
- Animaciones con **Framer Motion**.
- Soporte de temas (atributo `data-theme` en el `documentElement`).
- Tooling listo para desarrollo: `dev`, `build`, `preview` y `lint`.

---

## Pre-requisitos

- **Node.js** (recomendado: **18+** o **20+**)
- **npm** (incluido con Node.js)

> Si usas `nvm`, puedes cambiar fácilmente de versión de Node según tu entorno.

---

## Instalación y configuración

1) Clona el repositorio:

```bash
git clone https://github.com/ErickGC546/transpoapp.git
cd transpoapp
```

2) Instala dependencias:

```bash
npm install
```

3) (Opcional) Verifica lint:

```bash
npm run lint
```

---

## Uso

### Levantar el proyecto en local (modo desarrollo)

```bash
npm run dev
```

Vite imprimirá una URL local (normalmente `http://localhost:5173`).

### Build de producción

```bash
npm run build
```

Genera la salida en `dist/`.

### Previsualizar el build (como si fuera producción)

```bash
npm run preview
```

---

### Puntos clave

- `index.html`: contenedor principal (incluye el `#root`).
- `src/main.jsx`: **entrypoint** de React (monta `<App />`).
- `src/App.jsx`: componente principal de la UI (secciones, contenido y lógica de UI).
- `src/index.css` / `src/App.css`: estilos globales y del componente.
- `vite.config.js`: configuración de Vite.
- `eslint.config.js`: configuración de ESLint.

---

## Contribución

1) Haz un **Fork** del repositorio.
2) Crea una rama para tu cambio:

```bash
git checkout -b feat/mi-mejora
```

3) Instala dependencias y corre el proyecto:

```bash
npm install
npm run dev
```

4) Asegura calidad antes de commitear:

```bash
npm run lint
npm run build
```

5) Haz commit y push:

```bash
git add .
git commit -m "feat: describe tu cambio"
git push origin feat/mi-mejora
```

6) Abre un **Pull Request** hacia `main` describiendo:
- qué cambia,
- por qué,
- cómo probarlo.

# Mochamad Riza Syarif — Portfolio

A modern, responsive portfolio based on the 2026 CV of Mochamad Riza Syarif.

## Stack

- React 19
- Vite 8
- TypeScript
- Tailwind CSS 4
- MapLibre GL

## Run locally

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

## Tailwind CSS

This project uses Tailwind CSS v4 through the official PostCSS integration:

- `postcss.config.mjs` registers `@tailwindcss/postcss`.
- React components are styled with Tailwind utility classes.
- `src/index.css` only contains global base styles, animation keyframes, and
  MapLibre's third-party selectors.
- The custom `dark:` variant follows the application's `data-theme="dark"`
  switch.
- Tailwind scans the React and TypeScript source files automatically.

Tailwind v4 detects utility classes automatically, so a separate
`tailwind.config.js` file is not required.

The contact map uses OpenStreetMap, CARTO Light, and Esri World Imagery raster
tiles through MapLibre GL and needs an internet connection to display map tiles.

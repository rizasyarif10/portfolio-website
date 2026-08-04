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

## Profile visitor counter

The public profile counter uses a Vercel Function and Upstash Redis. A browser
is counted once within a rolling 24-hour period; common crawler user agents are
not counted.

1. Open the Vercel project and add the Upstash Redis integration from
   **Storage**.
2. Create the free database with **AWS Singapore (`ap-southeast-1`)** as its
   primary region, then connect it to this project. Vercel will provide
   either `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`, or
   `KV_REST_API_URL` and `KV_REST_API_TOKEN`, automatically. Both naming
   formats are supported.
3. Redeploy the project after the environment variables are available.

The repository configures Vercel Functions to run in Singapore (`sin1`) through
`vercel.json`, keeping the function close to the Redis primary region.

For local function testing, copy `.env.example` to `.env.local`, provide the
Upstash credentials, and run the project with `npx vercel dev`. The regular
`npm run dev` command serves only the Vite frontend, so the counter stays hidden
while its API is unavailable.

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

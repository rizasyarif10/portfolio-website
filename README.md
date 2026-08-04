<div align="center">
  <img src="./public/favicon.svg" width="76" alt="MR portfolio logo" />

  <h1>Mochamad Riza Syarif — Portfolio</h1>

  <p>
    A personal portfolio highlighting professional experience, technical
    expertise, and selected projects.
  </p>

  <p>
    <a href="https://rizasyarif.web.id/">
      <img src="https://img.shields.io/badge/Visit_Portfolio-2563EB?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Visit portfolio" />
    </a>
    <a href="https://www.linkedin.com/in/mochamad-riza-syarif/">
      <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn profile" />
    </a>
  </p>
</div>

---

## Overview

This portfolio presents my professional background, technical capabilities,
and selected work through a focused, responsive interface. It is designed to
provide recruiters, collaborators, and clients with a clear overview of my
experience and contributions.

## Highlights

- Responsive layouts for mobile, tablet, and desktop
- English and Indonesian language support
- Light and dark themes with persistent preferences
- Professional and independent project galleries
- Interactive MapLibre contact map with selectable base layers
- In-browser CV preview with standard and ATS-ready downloads
- Optimized profile and project imagery
- Component-based architecture with centralized portfolio data

## Tech Stack

<p>
  <img src="https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 19" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite 8" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4" />
  <img src="https://img.shields.io/badge/MapLibre_GL-396CB2?style=for-the-badge&logo=maplibre&logoColor=white" alt="MapLibre GL" />
</p>

## Project Structure

```text
portfolio-website/
├── api/                    # Vercel serverless functions
├── public/
│   ├── projects/           # Optimized project previews
│   ├── favicon.svg
│   └── profile-photo-*     # Responsive profile images
├── src/
│   ├── components/
│   │   ├── layout/         # Navigation and profile layout
│   │   ├── maps/           # MapLibre contact map
│   │   ├── projects/       # Project carousel and gallery
│   │   ├── sections/       # Main portfolio sections
│   │   └── ui/             # Reusable interface components
│   ├── constants/          # Centralized portfolio content
│   ├── contexts/           # Language state
│   ├── hooks/              # Reusable React hooks
│   ├── types/              # TypeScript definitions
│   └── utils/              # Localization and navigation helpers
├── vercel.json
└── vite.config.ts
```

## Getting Started

### Prerequisites

- Node.js 22 or later
- npm

### Installation

```bash
git clone https://github.com/rizasyarif10/portfolio-website.git
cd portfolio-website
npm install
npm run dev
```

The development server is available at the URL printed by Vite, usually
`http://localhost:5173`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check the application and create a production build |
| `npm run preview` | Preview the production build locally |

## Production Build

```bash
npm run build
npm run preview
```

The generated production files are written to `dist/`.

## Deployment

The website is deployed on Vercel and connected to the GitHub repository.
Updates pushed to the production branch are built and deployed automatically.

## Map Data

The contact map uses MapLibre GL with OpenStreetMap, CARTO Light, and Esri World
Imagery sources. An internet connection is required to load the map tiles.

---

<div align="center">
  <sub>Designed and developed by Mochamad Riza Syarif.</sub>
</div>

# Media Archive Portfolio

A React + Vite site built as a **media archive system**: records, rooms, shelves, and index views rather than a marketing-style portfolio.

## Concept Summary
The interface frames projects as archive records. Navigation behaves like entering rooms, opening files, and scanning a catalog. The visual system is brutalist and restrained: monochrome palette, thin rules, sharp panels, metadata-forward copy.

## Archive Modes
- **Shelf Mode** — primary bookshelf structure (rows = categories, spines = records).
- **Map Mode** — floorplan/diagram with room nodes, path lines, and a `YOU ARE HERE` marker.
- **List Mode** — dense finding-aid index with sortable-style tabular scanning.

## Tech Stack
- React 18
- Vite 5
- Vanilla CSS (custom brutalist design system)
- GitHub Actions + GitHub Pages deployment

## Setup
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy
This repo is configured for GitHub Pages project-site hosting.

- Repo name: `mysite`
- Vite base path: `/mysite/`
- Workflow: `.github/workflows/deploy.yml`
- Deployed URL shape: `https://<owner>.github.io/mysite/`

After merge to `main`:
1. Open **Settings → Pages**
2. Set **Source** to **GitHub Actions**
3. Wait for the workflow to publish `dist`

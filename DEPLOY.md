# Deployment Readiness (Vite + GitHub Pages)

## Local development
- Install deps: `npm install`
- Start dev server: `npm run dev`

## Production build
- Build: `npm run build`
- Optional local preview: `npm run preview`

## GitHub Pages notes
- This repo is configured as a **project site** with Vite base path: `/mysite/`.
- Workflow file: `.github/workflows/deploy.yml` (push to `main` triggers build + deploy).
- In GitHub Settings → Pages, set **Source** to **GitHub Actions**.

## Known caveats
- If `npm install` fails due registry/network policy (e.g., `403`), builds will fail locally until access to npm registry is available.
- If the repository name changes, update `base` in `vite.config.js` to match the new `/<repo-name>/` path.

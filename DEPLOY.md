# Deployment Guide (Vite + GitHub Pages)

## Run locally
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start dev server:
   ```bash
   npm run dev
   ```

## Build for production
```bash
npm run build
```
Build output is generated in `dist/`.

## Deploy flow
Deployment is handled by GitHub Actions in `.github/workflows/deploy.yml`.

- Trigger: push to `main` (or manual `workflow_dispatch`)
- Build job:
  - installs dependencies
  - runs `npm run build`
  - uploads `./dist` as the Pages artifact
- Deploy job:
  - publishes that artifact to GitHub Pages

## GitHub Pages base path
This repo is configured as a project site using:
- `base: '/mysite/'` in `vite.config.js`

If the repository name changes, update the base path to match `/<repo-name>/`.

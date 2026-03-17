# mysite

## Concept Summary
`mysite` is a static, archive-style web experience focused on browsing and discovering collection content through multiple navigation modes.

## Tech Stack
- Vite (build tool and dev server)
- Vanilla JavaScript, HTML, and CSS
- GitHub Actions + GitHub Pages (deployment)

## Archive Navigation Modes
- **Shelf mode**: browse items in a visual shelf-style layout for quick, spatial scanning.
- **Map mode**: explore archive entries by location/context using a map-oriented view.
- **List / Index mode**: review items in a structured, text-forward index for fast lookup.

## Local Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```

## Build Instructions
Build production assets:

```bash
npm run build
```

(Optional) Preview the production build locally:

```bash
npm run preview
```

## Deployment Notes (GitHub Pages)
This project is configured for GitHub Pages **project-site** deployment.

- **Inferred repository name:** `mysite`
- **Base path:** `/mysite/`
- **Site URL shape:** `https://<owner>.github.io/mysite/`

The Vite `base` option is set to `/mysite/` so built assets resolve correctly from the Pages subpath.

### Enable GitHub Pages after merge
1. Push/merge to `main` so the workflow runs.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Wait for the **Deploy Vite site to GitHub Pages** workflow to complete.
5. Open the deployed URL shown in the workflow summary.

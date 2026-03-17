# mysite

## GitHub Pages configuration

This project is configured for GitHub Pages **project-site** deployment.

- **Inferred repository name:** `mysite`
- **Base path:** `/mysite/`
- **Site URL shape:** `https://<owner>.github.io/mysite/`

The Vite `base` option is set to `/mysite/` so built assets are resolved correctly from the Pages subpath.

## Enable GitHub Pages after merge

1. Push/merge to `main` so the workflow runs.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Wait for the **Deploy Vite site to GitHub Pages** workflow to complete.
5. Open the deployed URL shown in the workflow summary.

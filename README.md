# makedon

Modern personal portfolio for **Havee Makedon** built with **Vite + React + TypeScript**.

## Features

- Premium redesign with modular React architecture
- Light/Dark theme toggle persisted in `localStorage`
- Sticky navbar with active section indicator
- Scroll-reveal section animations and subtle animated hero background
- Mobile-first responsive layout and accessible interactions
- Projects grid with tag filtering + search
- Contact section with copy-email button and toast feedback
- GitHub Pages-ready build/deploy configuration

## Project structure

- `src/components/` shared UI pieces (`Navbar`, `ThemeToggle`, `ProjectCard`, `RevealSection`)
- `src/sections/` page sections (`Hero`, `Projects`, `About`, `Skills`, `Experience`, `Contact`, `Footer`)
- `src/data/siteContent.ts` centralized content and links
- `src/hooks/` behavior hooks (`useTheme`, `useActiveSection`, `useReveal`)
- `src/styles/` design system tokens + global styles

## Run locally

```bash
npm install
npm run dev
```

Open the URL printed by Vite (commonly `http://localhost:5173/makedon/`).

## Build and preview

```bash
npm run build
npm run preview
```

Production files are output to `dist/`.

## Deploy to GitHub Pages

This repo includes `.github/workflows/deploy-pages.yml` for build + deploy on push to `main`.

One-time setup:

1. Open GitHub repository settings.
2. Go to **Pages**.
3. Set **Source** to **GitHub Actions**.

Deploy:

```bash
git add .
git commit -m "Overhaul portfolio UI/UX"
git push origin main
```

## Notes

- Vite base path is configured in `vite.config.ts` for GitHub Pages (`/makedon/`).
- SEO metadata and favicon live in `index.html` and `public/`.

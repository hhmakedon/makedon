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

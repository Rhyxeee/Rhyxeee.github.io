# Rhyxeee Portfolio — Mark Anthony Nene

A premium, dark/light analytics-style portfolio built with [Astro](https://astro.build).
Pages: Home, Projects (with detail pages), Proof, About, Contact, and a custom 404.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into /dist
npm run preview  # preview the production build
```

Deploy by pushing to `main` — GitHub Pages serves the built site from the repo.

## What was upgraded (v2.1)

**Cleanup / bug fixes**
- Removed a duplicated `src/components/components/...` tree and six unused section components that were dead weight.
- Wired up scroll-reveal + counter animations that previously existed but were never imported, so they never ran.
- Added a no-JS / reduced-motion safety net so content is never permanently hidden.
- Fixed the LinkedIn link (was pointing at the generic linkedin.com homepage).

**SEO & sharing**
- Full Open Graph + Twitter Card meta, canonical URLs, JSON-LD `Person` structured data.
- Complete favicon set + PWA manifest with icons.
- Auto-generated `sitemap-index.xml` (via `@astrojs/sitemap`) and a `robots.txt` that references it.

**UI / UX & interactivity**
- Light/dark theme toggle with system-preference default and persistence (no flash on load or navigation).
- Native Astro View Transitions (smooth page-to-page transitions) + viewport link prefetching.
- Scroll-reveal animations, animated stat counters, a scroll-progress bar, and a back-to-top button.
- Accessible mobile hamburger navigation (focus, ESC-to-close, aria state).
- Live category filtering on the Projects page; prev/next navigation on project detail pages.
- Copy-to-clipboard email button; skip-to-content link and visible focus styles.

## Action items for you

1. **LinkedIn URL** — update `linkedinUrl` and the LinkedIn entry in `socialLinks` inside `src/data/site.ts` with your real profile (currently a best-guess placeholder).
2. **Work-sample PDFs** — the project/experience links point to files under a `docs/` folder that is **not in the repo**, so they currently 404. Add your PDFs to a `docs/` directory (or update the URLs in `src/data/site.ts` and `src/data/portfolio.ts`).
3. **Social share image (optional)** — `ogImage` in `src/data/site.ts` reuses your profile photo. For best link previews, add a 1200×630 image to `public/images/` and point `ogImage` at it.

## Structure

```
src/
  components/   Header, Footer, HeroHome, ProjectCard, QuickPreviewCard, TechStackMarquee
  data/         site.ts (config, nav, stats, experience), portfolio.ts (projects)
  layouts/      BaseLayout.astro (SEO head, theme, transitions, global UI)
  pages/        index, about, proof, contact, 404, projects/index, projects/[slug]
  scripts/      enhancements.ts (all client interactivity)
  styles/       global.css (theme tokens + UI), animations.css (reveal/counter)
```

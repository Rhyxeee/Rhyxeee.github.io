# Portfolio Upgrade — Drop-in Guide

Complete premium animation upgrade for Mark Anthony Nene's portfolio.
Built for Astro + Tailwind CSS.

---

## Files included

| File | Purpose |
|------|---------|
| `src/components/Header.astro` | Glassmorphism nav, active section tracking, mobile menu |
| `src/components/Hero.astro` | Particle canvas, typewriter, animated stats counters |
| `src/components/ProjectCard.astro` | Premium card with hover lift, glow, accent colors |
| `src/components/ProjectsSection.astro` | Grid of ProjectCards replacing the old carousel |
| `src/styles/animations.css` | All keyframes, scroll utilities, skill tags, progress bars |
| `src/scripts/scrollAnimations.ts` | IntersectionObserver wiring for the whole page |
| `src/layouts/BaseLayout.astro` | Updated layout with DM Sans font + global tokens |

---

## Step-by-step drop-in

### 1. Copy the files

Copy each file into your project at the exact paths above, replacing
the existing files of the same name.

> **Note:** Your existing `Header.astro`, `Hero.astro`, and
> `BaseLayout.astro` live in the root or `src/` — check your project
> structure and place accordingly. The components reference each other
> with relative paths, so keep them in the same `src/components/` folder.

### 2. Import animations.css in your layout

In `BaseLayout.astro`, inside the `<head>`, add:

```astro
<link rel="stylesheet" href="/styles/animations.css" />
```

Or if you're using Astro's style imports, add at the top of BaseLayout.astro:

```astro
---
import '../styles/animations.css';
---
```

### 3. Wire scrollAnimations in BaseLayout

The updated `BaseLayout.astro` already has this at the bottom of `<body>`:

```astro
<script>
  import '../scripts/scrollAnimations.ts';
</script>
```

### 4. Update your page (index.astro) imports

Replace old component imports with the new ones:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Header from '../components/Header.astro';
import Hero from '../components/Hero.astro';
import ProjectsSection from '../components/ProjectsSection.astro';
// ... your About, Experience, Contact sections remain unchanged
---

<BaseLayout>
  <Header />
  <Hero />
  <AboutSection />
  <ExperienceSection />
  <ProjectsSection />
  <ContactSection />
</BaseLayout>
```

### 5. Keep your existing About, Experience, Contact sections

Add `data-animate="fade-up"` to any elements in those sections you
want to animate on scroll — scrollAnimations.ts will handle them
automatically. Example:

```astro
<h2 data-animate="fade-up">About me</h2>
<p  data-animate="fade-up" data-delay="80">...</p>
```

### 6. Stagger a list automatically

Add `data-stagger-parent` to a parent container — all direct children
with `[data-animate]` will receive auto-incremented delays:

```html
<ul data-stagger-parent="100">
  <li data-animate="fade-up">Item 1 — appears at 0ms</li>
  <li data-animate="fade-up">Item 2 — appears at 100ms</li>
  <li data-animate="fade-up">Item 3 — appears at 200ms</li>
</ul>
```

---

## Skill progress bars (optional)

To add animated skill bars anywhere, use this markup:

```html
<div data-fill="90" style="--progress-color: #38bdf8;">
  <span>Excel</span>
  <div class="progress-track">
    <div class="progress-fill"></div>
  </div>
</div>
```

`data-fill` = target width percentage (0–100).
The fill animates when scrolled into view.

---

## Stat counter cards (optional standalone use)

```html
<div class="stat-counter-card" style="--card-accent: #38bdf8;">
  <div class="count-num"
       data-count="4400"
       data-suffix="+">0+</div>
  <div class="count-label">Records cleaned</div>
</div>
```

---

## Color accent reference

| Accent | CSS color | Use for |
|--------|-----------|---------|
| `blue`   | `#38bdf8` | Data engineering, default |
| `amber`  | `#f59e0b` | Dashboards, sales |
| `green`  | `#22c55e` | SQL, analytics |
| `purple` | `#a855f7` | Statistical, research |
| `coral`  | `#fb7185` | Cleaning, medical data |

Pass `accent="amber"` as a prop to `<ProjectCard />` to change its theme.

---

## Fonts used

**DM Sans** (body) — loaded from Google Fonts in BaseLayout.astro.
Already included, nothing extra needed.

If you want to self-host for performance:
```
npm install @fontsource/dm-sans
```
Then in BaseLayout.astro:
```astro
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';
```

---

## Performance notes

- The particle canvas only renders while the hero section is visible
  (you can add an IntersectionObserver pause if needed).
- All animations respect `prefers-reduced-motion`.
- Images in ProjectCard use `loading="lazy"` except the hero profile
  which uses `loading="eager"`.

---
import { site, stats } from "../data/site";
---
<section id="top" class="relative overflow-hidden">
  <div class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_30%),radial-gradient(circle_at_right,_rgba(16,185,129,0.14),_transparent_25%)]"></div>
  <div class="container-shell section-space grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
    <div class="space-y-8">
      <span class="eyebrow">{site.role}</span>
      <div class="space-y-5">
        <h1 class="max-w-4xl text-5xl leading-tight font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
          <span class="text-gradient">{site.tagline}</span>
        </h1>
        <p class="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
          I clean, audit, and structure business data so reports, dashboards, and workflows become reliable enough for real decisions.
        </p>
      </div>

      <div class="flex flex-wrap gap-4">
        <a class="btn-primary" href="#projects">View Projects</a>
        <a class="btn-secondary" href={site.resumeUrl} target="_blank" rel="noreferrer">Download Resume</a>
      </div>

      <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <div class="panel p-5">
            <div class="text-2xl font-semibold text-white">{item.value}</div>
            <div class="mt-2 text-sm leading-6 text-slate-300">{item.label}</div>
          </div>
        ))}
      </div>
    </div>

    <div class="panel-soft relative overflow-hidden p-6 sm:p-8">
      <div class="absolute inset-x-0 top-0 h-28 bg-gradient-to-r from-sky-400/20 via-transparent to-emerald-300/20"></div>
      <div class="relative space-y-6">
        <div class="flex items-center gap-4">
          <div class="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70">
            <img src={site.profileImage} alt={site.name} class="h-24 w-24 object-cover" loading="eager" />
          </div>
          <div>
            <p class="text-xl font-semibold text-white">{site.name}</p>
            <p class="mt-1 text-sm text-slate-300">Data cleaning, analytics, reporting, and audit-focused workflow design.</p>
          </div>
        </div>

        <div class="grid gap-4 sm:grid-cols-2">
          <div class="rounded-2xl border border-white/8 bg-slate-950/70 p-5">
            <p class="text-sm font-medium text-sky-200">Primary focus</p>
            <p class="mt-3 text-sm leading-7 text-slate-300">Data cleaning, reporting systems, operational QA, portfolio-ready business analysis.</p>
          </div>
          <div class="rounded-2xl border border-white/8 bg-slate-950/70 p-5">
            <p class="text-sm font-medium text-emerald-200">Working style</p>
            <p class="mt-3 text-sm leading-7 text-slate-300">Accuracy first. Clear documentation. Repeatable systems. Practical outputs.</p>
          </div>
        </div>

        <div class="rounded-2xl border border-white/8 bg-white/5 p-5">
          <p class="text-sm font-medium text-white">What this site is built to show</p>
          <ul class="mt-4 space-y-3 text-sm leading-7 text-slate-300">
            <li>Structured business-facing portfolio presentation</li>
            <li>Clean case-study style project summaries</li>
            <li>Modern component-based Astro layout</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

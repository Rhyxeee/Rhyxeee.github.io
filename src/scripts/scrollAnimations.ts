/**
 * scrollAnimations.ts
 * ─────────────────────────────────────────────────────────────────
 * Import this in your BaseLayout.astro inside a <script> tag:
 *   <script>
 *     import '../scripts/scrollAnimations.ts';
 *   </script>
 *
 * Or just add:
 *   <script src="/scripts/scrollAnimations.js"></script>
 * after building.
 *
 * What it does:
 *   1. Observes all [data-animate] elements → adds .appeared on entry
 *   2. Reads data-delay attr for stagger timing
 *   3. Animates all [data-count] elements (counter roll-up)
 *   4. Fills all [data-fill] progress bars
 *   5. Marks stat cards with .counted (triggers CSS bar animation)
 * ─────────────────────────────────────────────────────────────────
 */

/* ─── Easing helper ─── */
function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

/* ─── Counter roll-up ─── */
function animateCounter(el: HTMLElement): void {
  const target  = parseFloat(el.dataset.count ?? '0');
  const prefix  = el.dataset.prefix ?? '';
  const suffix  = el.dataset.suffix ?? '';
  const dur     = 1600;
  const decimals = Number.isInteger(target) ? 0 : 1;
  const start   = performance.now();

  const tick = (now: number) => {
    const p = Math.min((now - start) / dur, 1);
    const v = easeOutQuart(p) * target;
    el.textContent = prefix + (decimals === 0 ? Math.round(v).toLocaleString() : v.toFixed(decimals)) + suffix;
    if (p < 1) requestAnimationFrame(tick);
    else {
      // Mark parent card as counted (triggers CSS top-bar animation)
      el.closest('.stat-counter-card')?.classList.add('counted');
    }
  };
  requestAnimationFrame(tick);
}

/* ─── Progress bar fill ─── */
function animateProgressBar(el: HTMLElement): void {
  const fill = el.querySelector<HTMLElement>('.progress-fill');
  if (!fill) return;
  const target = el.dataset.fill ?? '0';
  // Slight delay so transition is visible after element enters
  setTimeout(() => { fill.style.width = `${target}%`; }, 80);
}

/* ─── 1. Scroll entrance observer ─── */
const entranceObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el    = entry.target as HTMLElement;
      const delay = parseInt(el.dataset.delay ?? '0', 10);
      setTimeout(() => el.classList.add('appeared'), delay);
      entranceObserver.unobserve(el);
    });
  },
  {
    threshold:  0.12,
    rootMargin: '0px 0px -40px 0px',
  }
);

document.querySelectorAll<HTMLElement>('[data-animate]').forEach(el => {
  entranceObserver.observe(el);
});

/* ─── 2. Counter observer ─── */
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      animateCounter(entry.target as HTMLElement);
      counterObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll<HTMLElement>('[data-count]').forEach(el => {
  counterObserver.observe(el);
});

/* ─── 3. Progress bar observer ─── */
const progressObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      animateProgressBar(entry.target as HTMLElement);
      progressObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.4 }
);

document.querySelectorAll<HTMLElement>('[data-fill]').forEach(el => {
  progressObserver.observe(el);
});

/* ─── 4. Staggered children utility ─────────────────────────
   Add  data-stagger-parent  on a container.
   All direct children with [data-animate] will stagger
   automatically without needing individual data-delay values.
─────────────────────────────────────────────────────────── */
document.querySelectorAll<HTMLElement>('[data-stagger-parent]').forEach(parent => {
  const baseDelay = parseInt(parent.dataset.staggerParent ?? '80', 10);
  parent.querySelectorAll<HTMLElement>(':scope > [data-animate]').forEach((child, i) => {
    child.dataset.delay = String(i * baseDelay);
  });
});

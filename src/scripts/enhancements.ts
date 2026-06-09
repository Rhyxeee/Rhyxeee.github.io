/**
 * enhancements.ts
 * Progressive interactivity for the portfolio. Every initializer is
 * idempotent and re-bound on `astro:page-load`, so it works with Astro's
 * View Transitions (ClientRouter). Globals that should only bind once are
 * guarded with a flag on `window`.
 */

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── Scroll reveal ─────────────────────────────────────────── */
function initReveal(): void {
  const items = document.querySelectorAll<HTMLElement>('[data-animate]');
  if (!items.length) return;

  if (prefersReducedMotion()) {
    items.forEach((el) => el.classList.add('appeared'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        const delay = parseInt(el.dataset.delay ?? '0', 10);
        window.setTimeout(() => el.classList.add('appeared'), delay);
        obs.unobserve(el);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  // Auto-stagger direct children inside any [data-stagger-parent].
  document
    .querySelectorAll<HTMLElement>('[data-stagger-parent]')
    .forEach((parent) => {
      const base = parseInt(parent.dataset.staggerParent ?? '80', 10);
      parent
        .querySelectorAll<HTMLElement>(':scope > [data-animate]')
        .forEach((child, i) => {
          if (!child.dataset.delay) child.dataset.delay = String(i * base);
        });
    });

  items.forEach((el) => observer.observe(el));
}

/* ── Animated counters ─────────────────────────────────────── */
const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

function animateCounter(el: HTMLElement): void {
  const target = parseFloat(el.dataset.count ?? '0');
  const prefix = el.dataset.prefix ?? '';
  const suffix = el.dataset.suffix ?? '';
  const decimals = Number.isInteger(target) ? 0 : 1;

  if (prefersReducedMotion()) {
    el.textContent =
      prefix + (decimals === 0 ? Math.round(target).toLocaleString() : target.toFixed(decimals)) + suffix;
    return;
  }

  const duration = 1500;
  const start = performance.now();
  const tick = (now: number) => {
    const p = Math.min((now - start) / duration, 1);
    const v = easeOutQuart(p) * target;
    el.textContent =
      prefix + (decimals === 0 ? Math.round(v).toLocaleString() : v.toFixed(decimals)) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function initCounters(): void {
  const counters = document.querySelectorAll<HTMLElement>('[data-count]');
  if (!counters.length) return;
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target as HTMLElement);
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach((el) => observer.observe(el));
}

/* ── Mobile navigation ─────────────────────────────────────── */
function initMobileNav(): void {
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('primary-nav');
  if (!toggle || !nav) return;

  const close = () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-locked');
  };
  const open = () => {
    nav.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('nav-locked');
  };

  toggle.addEventListener('click', () => {
    nav.classList.contains('is-open') ? close() : open();
  });
  nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', close));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
}

/* ── Theme toggle ──────────────────────────────────────────── */
function syncThemeMeta(theme: string): void {
  const meta = document.getElementById('theme-color-meta');
  if (meta) meta.setAttribute('content', theme === 'light' ? '#f4f7fc' : '#060b16');
}

function initThemeToggle(): void {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  const current = document.documentElement.dataset.theme ?? 'dark';
  btn.setAttribute('aria-pressed', String(current === 'light'));
  syncThemeMeta(current);

  btn.addEventListener('click', () => {
    const next =
      document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = next;
    btn.setAttribute('aria-pressed', String(next === 'light'));
    try {
      localStorage.setItem('theme', next);
    } catch (e) {
      /* storage may be unavailable */
    }
    syncThemeMeta(next);
  });
}

/* ── Copy-to-clipboard buttons ─────────────────────────────── */
function initCopyButtons(): void {
  document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const value = btn.dataset.copy ?? '';
      const original = btn.dataset.label ?? btn.textContent ?? '';
      btn.dataset.label = original;
      try {
        await navigator.clipboard.writeText(value);
        btn.textContent = 'Copied ✓';
      } catch (e) {
        btn.textContent = 'Copy failed';
      }
      window.setTimeout(() => {
        btn.textContent = original;
      }, 1600);
    });
  });
}

/* ── Project filter chips ──────────────────────────────────── */
function initProjectFilter(): void {
  const root = document.querySelector<HTMLElement>('[data-filterable]');
  if (!root) return;
  const chips = root.querySelectorAll<HTMLButtonElement>('[data-filter]');
  const cards = root.querySelectorAll<HTMLElement>('[data-category]');

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const filter = chip.dataset.filter ?? 'all';
      chips.forEach((c) => c.classList.toggle('is-active', c === chip));
      cards.forEach((card) => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('is-hidden', !match);
      });
    });
  });
}

/* ── Per-page init (re-run on every navigation) ────────────── */
function initPage(): void {
  initReveal();
  initCounters();
  initMobileNav();
  initThemeToggle();
  initCopyButtons();
  initProjectFilter();
}

/* ── Global, bind-once listeners ───────────────────────────── */
function initGlobals(): void {
  const w = window as unknown as { __portfolioGlobals?: boolean };
  if (w.__portfolioGlobals) return;
  w.__portfolioGlobals = true;

  const onScroll = () => {
    const bar = document.getElementById('scroll-progress-bar');
    const back = document.getElementById('back-to-top');
    const scrollTop = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const pct = height > 0 ? (scrollTop / height) * 100 : 0;
    if (bar) bar.style.width = `${pct}%`;
    if (back) back.hidden = scrollTop < 480;
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);

  document.addEventListener('click', (e) => {
    const target = (e.target as Element)?.closest('#back-to-top');
    if (!target) return;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion() ? 'auto' : 'smooth'
    });
  });

  onScroll();
}

document.addEventListener('astro:page-load', () => {
  initPage();
  initGlobals();
});

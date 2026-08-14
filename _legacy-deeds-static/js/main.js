/* ==========================================================================
   Deeds Support Initiative International — Site scripts
   Vanilla JS, no dependencies.
   ========================================================================== */
(function () {
  'use strict';

  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* ----------------------------------------------------------------------
     0. Missing-photo fallback
        Image containers carry .mediabox, which paints a branded gradient.
        If a photo file isn't there yet, hide the broken <img> and let the
        gradient show instead of a broken-image icon. Capture phase is needed
        because 'error' on <img> does not bubble.
     ---------------------------------------------------------------------- */
  document.addEventListener(
    'error',
    (e) => {
      const el = e.target;
      if (el && el.tagName === 'IMG') el.style.display = 'none';
    },
    true
  );

  /* ----------------------------------------------------------------------
     1. Sticky header state
     ---------------------------------------------------------------------- */
  const header = $('.site-header');
  const toTop  = $('.to-top');

  function onScroll() {
    const y = window.scrollY;
    if (header) header.classList.toggle('is-stuck', y > 40);
    if (toTop)  toTop.classList.toggle('is-shown', y > 500);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (toTop) {
    toTop.addEventListener('click', () =>
      window.scrollTo({ top: 0, behavior: 'smooth' })
    );
  }

  /* ----------------------------------------------------------------------
     2. Mobile navigation
     ---------------------------------------------------------------------- */
  const burger    = $('.burger');
  const mobileNav = $('.mobile-nav');

  if (burger && mobileNav) {
    burger.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('is-open');
      burger.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });

    // Close when a link is tapped
    $$('a', mobileNav).forEach((a) =>
      a.addEventListener('click', () => {
        mobileNav.classList.remove('is-open');
        burger.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      })
    );

    // Close on resize back to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1060 && mobileNav.classList.contains('is-open')) {
        mobileNav.classList.remove('is-open');
        burger.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    });
  }

  /* ----------------------------------------------------------------------
     3. Mark the active nav link from the current filename
     ---------------------------------------------------------------------- */
  (function markActive() {
    let page = window.location.pathname.split('/').pop() || 'index.html';
    if (page === '') page = 'index.html';
    $$('.nav__link, .mobile-nav a[href]').forEach((link) => {
      const href = link.getAttribute('href');
      if (href === page) link.classList.add('is-active');
    });
  })();

  /* ----------------------------------------------------------------------
     4. Hero slider — autoplay, dots, arrows, keyboard, pause on hover
     ---------------------------------------------------------------------- */
  (function heroSlider() {
    const slidesWrap = $('.hero__slides');
    if (!slidesWrap) return;

    const slides = $$('.hero__slide', slidesWrap);
    if (slides.length < 2) {
      if (slides[0]) slides[0].classList.add('is-active');
      return;
    }

    const dotsWrap = $('.hero__dots');
    const INTERVAL = 6000;
    let index = 0;
    let timer = null;

    // Build dots
    if (dotsWrap) {
      dotsWrap.innerHTML = '';
      slides.forEach((_, i) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.setAttribute('aria-label', `Go to slide ${i + 1}`);
        b.addEventListener('click', () => go(i, true));
        dotsWrap.appendChild(b);
      });
    }
    const dots = dotsWrap ? $$('button', dotsWrap) : [];

    function go(i, restart) {
      index = (i + slides.length) % slides.length;
      slides.forEach((s, n) => s.classList.toggle('is-active', n === index));
      dots.forEach((d, n) => d.classList.toggle('is-active', n === index));
      if (restart) start();
    }

    const next = () => go(index + 1);
    const prev = () => go(index - 1);

    function start() {
      clearInterval(timer);
      timer = setInterval(next, INTERVAL);
    }
    const stop = () => clearInterval(timer);

    const nextBtn = $('.hero__arrow--next');
    const prevBtn = $('.hero__arrow--prev');
    if (nextBtn) nextBtn.addEventListener('click', () => go(index + 1, true));
    if (prevBtn) prevBtn.addEventListener('click', () => go(index - 1, true));

    // Keyboard
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') go(index + 1, true);
      if (e.key === 'ArrowLeft')  go(index - 1, true);
    });

    // Touch swipe
    let startX = null;
    const hero = $('.hero');
    hero.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
    hero.addEventListener('touchend', (e) => {
      if (startX === null) return;
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 55) (dx < 0 ? next : prev)();
      startX = null;
    }, { passive: true });

    hero.addEventListener('mouseenter', stop);
    hero.addEventListener('mouseleave', start);
    document.addEventListener('visibilitychange', () =>
      document.hidden ? stop() : start()
    );

    go(0);
    start();
  })();

  /* ----------------------------------------------------------------------
     5. Scroll reveal + animated counters + progress bars
     ---------------------------------------------------------------------- */
  const supportsIO = 'IntersectionObserver' in window;

  function countUp(el) {
    const target = parseFloat(el.dataset.count);
    if (isNaN(target)) return;
    const suffix   = el.dataset.suffix || '';
    const duration = 1600;
    const started  = performance.now();

    function frame(now) {
      const p = Math.min((now - started) / duration, 1);
      // easeOutExpo
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      const value = target * eased;
      el.textContent =
        (target % 1 === 0 ? Math.round(value) : value.toFixed(1)) + suffix;
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  if (supportsIO) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;

          if (el.hasAttribute('data-reveal')) el.classList.add('is-visible');
          if (el.hasAttribute('data-count'))  countUp(el);
          if (el.classList.contains('progress__bar')) {
            el.style.width = (el.dataset.value || 0) + '%';
          }
          io.unobserve(el);
        });
      },
      { threshold: 0.16, rootMargin: '0px 0px -40px 0px' }
    );

    $$('[data-reveal], [data-count], .progress__bar').forEach((el) => io.observe(el));
  } else {
    $$('[data-reveal]').forEach((el) => el.classList.add('is-visible'));
    $$('[data-count]').forEach((el) => {
      el.textContent = el.dataset.count + (el.dataset.suffix || '');
    });
    $$('.progress__bar').forEach((el) => { el.style.width = (el.dataset.value || 0) + '%'; });
  }

  /* ----------------------------------------------------------------------
     6. Gallery filtering + lightbox
     ---------------------------------------------------------------------- */
  (function gallery() {
    const filterBtns = $$('.filters button');
    const items      = $$('.gal__item');

    if (filterBtns.length) {
      filterBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          filterBtns.forEach((b) => b.classList.remove('is-active'));
          btn.classList.add('is-active');
          const cat = btn.dataset.filter;
          items.forEach((item) => {
            const show = cat === 'all' || item.dataset.cat === cat;
            item.style.display = show ? '' : 'none';
            if (show) {
              item.style.animation = 'none';
              // force reflow so the animation replays
              void item.offsetWidth;
              item.style.animation = 'dropIn .5s cubic-bezier(.22,1,.36,1)';
            }
          });
        });
      });
    }

    const lb = $('.lightbox');
    if (!lb || !items.length) return;

    const lbImg  = $('.lightbox img', lb);
    const lbPh   = $('.lightbox .ph', lb);
    const lbCap  = $('.lightbox figcaption', lb);
    const lbShut = $('.lightbox__close', lb);

    items.forEach((item) => {
      item.addEventListener('click', () => {
        const img = $('img', item);
        const cap = $('.gal__cap', item);
        // A photo that failed to load has naturalWidth 0 — show the gradient instead
        const loaded = img && img.complete && img.naturalWidth > 0;
        if (loaded && lbImg) {
          lbImg.src = img.currentSrc || img.src;
          lbImg.alt = img.alt || '';
          lbImg.style.display = '';
          if (lbPh) lbPh.style.display = 'none';
        } else {
          if (lbImg) lbImg.style.display = 'none';
          if (lbPh)  lbPh.style.display = '';
        }
        if (lbCap) lbCap.textContent = cap ? cap.innerText : '';
        lb.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      });
    });

    function close() {
      lb.classList.remove('is-open');
      document.body.style.overflow = '';
    }
    if (lbShut) lbShut.addEventListener('click', close);
    lb.addEventListener('click', (e) => { if (e.target === lb) close(); });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lb.classList.contains('is-open')) close();
    });
  })();

  /* ----------------------------------------------------------------------
     7. Donation panel — amount picker, frequency toggle, custom amount
     ---------------------------------------------------------------------- */
  (function donation() {
    const amounts = $$('.amount');
    const custom  = $('#custom-amount');
    const summary = $('#donate-summary');
    const freqBtns = $$('.toggle-group button');
    let freq = 'One-time';

    function updateSummary(value) {
      if (!summary) return;
      const amt = value || custom?.value || '0';
      summary.textContent = `${freq} gift of ₦${Number(amt).toLocaleString()}`;
    }

    amounts.forEach((btn) => {
      btn.addEventListener('click', () => {
        amounts.forEach((b) => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        if (custom) custom.value = btn.dataset.amount;
        updateSummary(btn.dataset.amount);
      });
    });

    if (custom) {
      custom.addEventListener('input', () => {
        amounts.forEach((b) => b.classList.remove('is-active'));
        updateSummary();
      });
    }

    freqBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        freqBtns.forEach((b) => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        freq = btn.textContent.trim();
        updateSummary();
      });
    });

    updateSummary();
  })();

  /* ----------------------------------------------------------------------
     8. Forms — front-end validation + confirmation message
        (No backend is wired up; swap the handler for your own endpoint.)
     ---------------------------------------------------------------------- */
  $$('form[data-form]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }

      const msg = $('.form-msg', form);
      const btn = $('button[type="submit"]', form);
      const original = btn ? btn.innerHTML : '';

      if (btn) { btn.disabled = true; btn.innerHTML = 'Sending…'; }

      // Simulated submit — replace with fetch() to your API / form service.
      setTimeout(() => {
        if (msg) msg.classList.add('is-shown');
        form.reset();
        if (btn) { btn.disabled = false; btn.innerHTML = original; }
        setTimeout(() => msg && msg.classList.remove('is-shown'), 6000);
      }, 900);
    });
  });

  /* ----------------------------------------------------------------------
     9. Current year in the footer
     ---------------------------------------------------------------------- */
  $$('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
})();

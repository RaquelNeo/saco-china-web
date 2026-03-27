/**
 * Saco Group — main.js
 * Handles: navigation behavior, scroll reveals, product tabs, carousels
 */

'use strict';

/* Hero video — half speed */
document.addEventListener('DOMContentLoaded', () => {
  const v = document.querySelector('.hero__video');
  if (v) v.playbackRate = 0.5;
});

/* ============================================================
   NAV — hide on scroll down, show on scroll up
   ============================================================ */
(function initNav() {
  const nav     = document.getElementById('nav');
  const toggle  = document.getElementById('navToggle');
  const overlay = document.getElementById('menuOverlay');
  const closeBtn = document.getElementById('menuClose');

  if (!nav) return;

  /* ---- Scroll: hide/show + background ---- */
  let lastScrollY = window.scrollY;
  let ticking = false;

  function updateNav() {
    const scrollY = window.scrollY;
    const scrolledDown = scrollY > lastScrollY;
    const isPastThreshold = scrollY > 100;

    nav.classList.toggle('nav--scrolled', scrollY > 60);

    lastScrollY = scrollY;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(updateNav); ticking = true; }
  }, { passive: true });

  /* ---- Full-screen overlay ---- */
  function openMenu() {
    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
    toggle.classList.add('is-active');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    nav.classList.remove('nav--hidden');
  }

  function closeMenu() {
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    toggle.classList.remove('is-active');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (toggle && overlay) {
    toggle.addEventListener('click', () => {
      overlay.classList.contains('is-open') ? closeMenu() : openMenu();
    });

    if (closeBtn) closeBtn.addEventListener('click', closeMenu);

    // Close on any nav link click (smooth scroll then close)
    overlay.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // ESC to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('is-open')) closeMenu();
    });
  }
})();

/* ============================================================
   SCROLL REVEAL — Intersection Observer
   ============================================================ */
(function initReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
})();

/* ============================================================
   PRODUCT TABS
   ============================================================ */
(function initProductTabs() {
  const tabs = document.querySelectorAll('.product-tab');
  const panels = document.querySelectorAll('.product-panel');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.target;

      // Update tabs
      tabs.forEach(t => t.classList.remove('product-tab--active'));
      tab.classList.add('product-tab--active');

      // Update panels
      panels.forEach(panel => {
        panel.classList.remove('product-panel--active');
        if (panel.id === `panel-${target}`) {
          panel.classList.add('product-panel--active');
        }
      });
    });
  });
})();

/* ============================================================
   CAROUSELS — generic, works for all product carousels
   ============================================================ */
(function initCarousels() {
  const carousels = document.querySelectorAll('.carousel');
  if (!carousels.length) return;

  carousels.forEach(carousel => {
    const track = carousel.querySelector('.carousel__track');
    const slides = carousel.querySelectorAll('.carousel__slide');
    const prevBtn = carousel.querySelector('.carousel__btn--prev');
    const nextBtn = carousel.querySelector('.carousel__btn--next');
    const dotsContainer = carousel.querySelector('.carousel__dots');

    if (!track || slides.length < 2) return;

    let current = 0;
    const total = slides.length;
    let autoplayTimer = null;
    let startX = 0;
    let isDragging = false;

    // Create dots
    const dots = [];
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = `carousel__dot${i === 0 ? ' carousel__dot--active' : ''}`;
      dot.setAttribute('aria-label', `Image ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      dotsContainer && dotsContainer.appendChild(dot);
      dots.push(dot);
    });

    function goTo(index) {
      current = (index + total) % total;
      track.style.transform = `translateX(-${current * 100}%)`;

      // Update dots
      dots.forEach((dot, i) => {
        dot.classList.toggle('carousel__dot--active', i === current);
      });
    }

    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }

    // Autoplay
    function startAutoplay() {
      autoplayTimer = setInterval(next, 5000);
    }
    function stopAutoplay() {
      clearInterval(autoplayTimer);
    }

    prevBtn && prevBtn.addEventListener('click', () => { stopAutoplay(); prev(); startAutoplay(); });
    nextBtn && nextBtn.addEventListener('click', () => { stopAutoplay(); next(); startAutoplay(); });

    // Touch/swipe support
    carousel.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
      stopAutoplay();
    }, { passive: true });

    carousel.addEventListener('touchend', (e) => {
      if (!isDragging) return;
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) {
        diff > 0 ? next() : prev();
      }
      isDragging = false;
      startAutoplay();
    }, { passive: true });

    // Mouse drag support
    carousel.addEventListener('mousedown', (e) => {
      startX = e.clientX;
      isDragging = true;
      stopAutoplay();
      e.preventDefault();
    });
    carousel.addEventListener('mouseup', (e) => {
      if (!isDragging) return;
      const diff = startX - e.clientX;
      if (Math.abs(diff) > 50) {
        diff > 0 ? next() : prev();
      }
      isDragging = false;
      startAutoplay();
    });
    carousel.addEventListener('mouseleave', () => {
      isDragging = false;
    });

    // Pause on hover
    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);

    // Keyboard navigation
    carousel.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') { stopAutoplay(); prev(); startAutoplay(); }
      if (e.key === 'ArrowRight') { stopAutoplay(); next(); startAutoplay(); }
    });

    // Start
    startAutoplay();
  });
})();

/* ============================================================
   SMOOTH ANCHOR SCROLL
   Override default if needed (already CSS scroll-behavior: smooth)
   But adds nav offset correction
   ============================================================ */
(function initSmoothScroll() {
  const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 72;

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const targetY = target.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({
        top: targetY,
        behavior: 'smooth'
      });
    });
  });
})();

/* ============================================================
   ACTIVE NAV LINK — highlight based on scroll position
   ============================================================ */
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link:not(.nav__link--cta)');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          link.style.color = href === `#${id}` ? 'rgba(255,255,255,1)' : '';
          link.style.fontWeight = href === `#${id}` ? '600' : '';
        });
      }
    });
  }, {
    threshold: 0.25,
    rootMargin: '-20% 0px -60% 0px'
  });

  sections.forEach(section => observer.observe(section));
})();

/* ============================================================
   RDS Legal Co — components.js
   Injects shared navbar and footer; handles scroll, mobile
   menu, active link, and page transitions.
   ============================================================ */

const LOGO_URL = 'https://cdn.prod.website-files.com/686d069ab2a9c4117334a53f/686d664c52e81818c95f0f4f_502c1d5db7c938c100cff685c4a16034_long-logo-w.svg';

const NAVBAR_HTML = `
<header class="navbar" role="banner">
  <div class="navbar__inner">
    <a href="index.html" class="navbar__logo" aria-label="RDS Legal Co — Home">
      <img src="${LOGO_URL}" alt="RDS Legal Co" width="126" height="36" />
    </a>
    <nav class="navbar__nav" aria-label="Main navigation">
      <a href="index.html" class="navbar__link">Home</a>
      <a href="about.html" class="navbar__link">About</a>
      <a href="services.html" class="navbar__link">Services</a>
      <a href="team.html" class="navbar__link">Team</a>
      <a href="contact.html" class="navbar__link navbar__link--contact">Contact Us</a>
    </nav>
    <button class="navbar__hamburger" aria-label="Toggle menu" aria-expanded="false" aria-controls="mobile-nav">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>
<nav class="navbar__mobile" id="mobile-nav" aria-label="Mobile navigation">
  <a href="index.html" class="navbar__link">Home</a>
  <a href="about.html" class="navbar__link">About</a>
  <a href="services.html" class="navbar__link">Services</a>
  <a href="team.html" class="navbar__link">Team</a>
  <a href="contact.html" class="navbar__link navbar__link--contact">Contact Us</a>
</nav>
<div class="navbar__overlay" aria-hidden="true"></div>
`.trim();

const FOOTER_HTML = `
<footer class="footer" role="contentinfo">
  <div class="container">
    <div class="footer__grid">

      <!-- Brand column -->
      <div class="footer__brand">
        <a href="index.html" class="footer__logo">
          <img src="${LOGO_URL}" alt="RDS Legal Co" height="28" width="auto" />
        </a>
        <p class="footer__tagline">Pune-based legal counsel with pan-India courtroom and tribunal practice, advising businesses and individuals with strategic precision.</p>
        <div class="footer__socials">
          <a href="https://www.linkedin.com/company/rds-legal-co/" class="footer__social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="https://x.com/rdslegalco" class="footer__social-link" aria-label="X / Twitter" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="https://www.instagram.com/rdslegalco/" class="footer__social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
        </div>
      </div>

      <!-- Practice Areas -->
      <div>
        <h3 class="footer__col-title">Practice Areas</h3>
        <nav class="footer__col-nav">
          <a href="services.html#arbitration">Arbitration &amp; Dispute Resolution</a>
          <a href="services.html#litigation">Civil Litigation</a>
          <a href="services.html#corporate">Corporate &amp; Commercial</a>
          <a href="services.html#real-estate">Real Estate Law</a>
          <a href="services.html#criminal">Criminal Defense</a>
          <a href="services.html#employment">Employment Law</a>
          <a href="services.html#ip">Intellectual Property</a>
          <a href="services.html#tech-privacy">Tech &amp; Data Privacy</a>
          <a href="services.html#taxation">Taxation</a>
          <a href="services.html#family">Family &amp; Matrimonial Law</a>
        </nav>
      </div>

      <!-- Company -->
      <div>
        <h3 class="footer__col-title">Company</h3>
        <nav class="footer__col-nav">
          <a href="about.html">About Us</a>
          <a href="team.html">Our Team</a>
          <a href="services.html">Services</a>
          <a href="contact.html">Contact</a>
        </nav>
      </div>

      <!-- Contact Us -->
      <div class="footer__contact">
        <h3 class="footer__col-title">Contact Us</h3>
        <address>
          <p><strong>Regd. Office:</strong><br>Ekta Apartment, Near BRTS,<br>Bombay - Pune Highway, Kasarwadi,<br>Pune - 411 034.</p>
          <p><strong>Branch Office:</strong><br>GMC Raj Palace, Flat No. B-2,<br>Koyananagar, Chinchwad,<br>Pune - 411 019.</p>
          <p><a href="tel:+918806099092">+91 8806099092</a> | <a href="tel:+919545478686">+91 9545478686</a></p>
          <p><a href="mailto:contact@rds.legal">contact@rds.legal</a><br><a href="mailto:swapnil@rds.legal">swapnil@rds.legal</a></p>
          <p>Mon &ndash; Fri, 9am &ndash; 6pm IST</p>
        </address>
      </div>

    </div>

    <div class="footer__bottom">
      <p class="footer__copy">&copy; ${new Date().getFullYear()} RDS Legal Co. All Rights Reserved.</p>
      <div class="footer__legal">
        <a href="privacy-policy.html">Privacy Policy</a>
        <a href="terms-of-service.html">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>
`.trim();

const CTA_DEFAULT_HEADING = "Speak with RDS Legal Co about your matter today.";

function buildCtaHtml(options = {}) {
  const href = options.href || 'contact.html';
  const label = options.label || 'Contact Us Today';
  const heading = options.heading || CTA_DEFAULT_HEADING;
  const extraClass = options.extraClass || '';
  const headingId = options.headingId || 'site-cta-heading';
  const className = ['cta-banner', extraClass].filter(Boolean).join(' ');

  return `
<section class="${className}" aria-labelledby="${headingId}">
  <div class="cta-banner__inner reveal">
    <h2 class="cta-banner__heading" id="${headingId}">${heading}</h2>
    <a href="${href}" class="btn btn--cream btn--lg">${label}</a>
  </div>
</section>
`.trim();
}

function buildInnerHeroHtml(options = {}) {
  const bgSrc = options.bgSrc || 'assets/images/obg.png';
  const maskSrc = options.maskSrc || 'assets/images/bg.jpg';
  const bgAlt = options.bgAlt || 'Legal office';
  const label = options.label || 'Legal';
  const heading = options.heading || 'RDS Legal Co';
  const sub = options.sub || '';

  return `
<section class="hero hero--inner">
  <img class="hero__bg" src="${bgSrc}" alt="${bgAlt}" loading="eager" fetchpriority="high" />
  <img class="hero__mask" src="${maskSrc}" alt="" aria-hidden="true" />
  <div class="hero__overlay"></div>
  <div class="hero__content">
    <div class="hero__label">${label}</div>
    <h1 class="hero__heading">${heading}</h1>
    <p class="hero__sub">${sub}</p>
  </div>
</section>
`.trim();
}

document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Inject page-transition overlay ──────────────────── */
  let pageTransition = null;
  if (!prefersReducedMotion) {
    const ptDiv = document.createElement('div');
    ptDiv.className = 'page-transition';
    ptDiv.id = 'page-transition';
    document.body.insertBefore(ptDiv, document.body.firstChild);
    pageTransition = ptDiv;
  }

  /* ── Inject Navbar ────────────────────────────────────── */
  const headerPlaceholder = document.getElementById('site-header');
  if (headerPlaceholder) {
    const tmp = document.createElement('div');
    tmp.innerHTML = NAVBAR_HTML;
    headerPlaceholder.outerHTML = tmp.innerHTML;
  }

  /* ── Inject shared inner hero ─────────────────────────── */
  const innerHeroPlaceholder = document.getElementById('site-inner-hero');
  if (innerHeroPlaceholder) {
    const innerHeroHtml = buildInnerHeroHtml({
      bgSrc: innerHeroPlaceholder.dataset.heroBgSrc,
      maskSrc: innerHeroPlaceholder.dataset.heroMaskSrc,
      bgAlt: innerHeroPlaceholder.dataset.heroAlt,
      label: innerHeroPlaceholder.dataset.heroLabel,
      heading: innerHeroPlaceholder.dataset.heroHeading,
      sub: innerHeroPlaceholder.dataset.heroSub
    });
    innerHeroPlaceholder.outerHTML = innerHeroHtml;
  }

  /* ── Inject Footer ────────────────────────────────────── */
  const footerPlaceholder = document.getElementById('site-footer');
  if (footerPlaceholder) {
    const tmp = document.createElement('div');
    tmp.innerHTML = FOOTER_HTML;
    footerPlaceholder.outerHTML = tmp.innerHTML;
  }

  /* ── Inject CTA banner ─────────────────────────────────── */
  const ctaPlaceholder = document.getElementById('site-cta');
  if (ctaPlaceholder) {
    const ctaHtml = buildCtaHtml({
      href: ctaPlaceholder.dataset.ctaHref,
      label: ctaPlaceholder.dataset.ctaLabel,
      heading: ctaPlaceholder.dataset.ctaHeading,
      extraClass: ctaPlaceholder.dataset.ctaClass,
      headingId: ctaPlaceholder.dataset.ctaHeadingId
    });
    ctaPlaceholder.outerHTML = ctaHtml;
  }

  /* ── Active nav link ──────────────────────────────────── */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar__link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    }
  });

  /* ── Navbar: scroll class ─────────────────────────────── */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const onScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Mobile menu ──────────────────────────────────────── */
  const hamburger = document.querySelector('.navbar__hamburger');
  const mobileNav = document.querySelector('.navbar__mobile');
  const overlay   = document.querySelector('.navbar__overlay');

  if (mobileNav) {
    mobileNav.setAttribute('aria-hidden', 'true');
  }

  function openMenu() {
    hamburger?.classList.add('open');
    hamburger?.setAttribute('aria-expanded', 'true');
    mobileNav?.classList.add('open');
    mobileNav?.setAttribute('aria-hidden', 'false');
    overlay?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    hamburger?.classList.remove('open');
    hamburger?.setAttribute('aria-expanded', 'false');
    mobileNav?.classList.remove('open');
    mobileNav?.setAttribute('aria-hidden', 'true');
    overlay?.classList.remove('open');
    document.body.style.overflow = '';
  }

  hamburger?.addEventListener('click', () => {
    hamburger.classList.contains('open') ? closeMenu() : openMenu();
  });

  overlay?.addEventListener('click', closeMenu);

  document.querySelectorAll('.navbar__mobile .navbar__link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });

  /* ── Page transitions ─────────────────────────────────── */
  // Fade in on arrival
  if (pageTransition) {
    pageTransition.style.opacity = '1';
    pageTransition.style.pointerEvents = 'none';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        pageTransition.style.transition = 'opacity 0.45s cubic-bezier(0.22,1,0.36,1)';
        pageTransition.style.opacity = '0';
      });
    });
  }

  // Fade out on internal link navigation
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel')) return;
    link.addEventListener('click', e => {
      if (prefersReducedMotion) return;
      if (link.target === '_blank' || link.hasAttribute('download')) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (!pageTransition) return;
      e.preventDefault();
      pageTransition.style.transition = 'opacity 0.35s cubic-bezier(0.22,1,0.36,1)';
      pageTransition.style.pointerEvents = 'auto';
      pageTransition.style.opacity = '1';
      setTimeout(() => { window.location.href = href; }, 370);
    });
  });

});


/* ============================================================
   RDS Legal Co — counter.js
   Animated stat counters triggered on scroll
   ============================================================ */

(function () {
  'use strict';

  function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
  }

  /**
   * Animate a number from 0 to target over duration ms
   * @param {HTMLElement} el  - The element to update
   * @param {number} target   - End value
   * @param {string} suffix   - e.g. '+', '%'
   * @param {number} duration - ms
   */
  function animateCounter(el, target, suffix, duration) {
    const start = performance.now();

    function tick(now) {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const easedProg = easeOutQuart(progress);
      const current  = Math.round(easedProg * target);
      el.textContent = current + suffix;

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = target + suffix;
      }
    }

    requestAnimationFrame(tick);
  }

  function initCounters() {
    const statNumbers = document.querySelectorAll('.stat-item__number[data-count]');
    if (!statNumbers.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el     = entry.target;
            const target = parseInt(el.dataset.count, 10);
            const suffix = el.dataset.suffix || '';
            const dur    = parseInt(el.dataset.duration, 10) || 1800;

            el.closest('.stat-item')?.classList.add('counting');
            animateCounter(el, target, suffix, dur);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    statNumbers.forEach(el => observer.observe(el));
  }

  document.addEventListener('DOMContentLoaded', initCounters);

})();


/* ============================================================
   RDS Legal Co — animations.js
   Intersection Observer scroll-reveal system
   ============================================================ */

(function () {
  'use strict';

  /* ── Utility ──────────────────────────────────────────── */
  function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  /* ── Core reveal observer ─────────────────────────────── */
  function initScrollReveal() {
    if (prefersReducedMotion()) return;

    const revealClasses = ['.reveal', '.reveal-left', '.reveal-right', '.reveal-scale'];
    const elements = document.querySelectorAll(revealClasses.join(', '));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    elements.forEach(el => observer.observe(el));
  }

  /* ── Stagger children ─────────────────────────────────── */
  function initStagger() {
    if (prefersReducedMotion()) return;

    document.querySelectorAll('.stagger').forEach(container => {
      const children = Array.from(container.children);
      children.forEach(child => {
        child.classList.add('reveal');
      });
    });
  }

  /* ── Section headings split animation ────────────────── */
  function initSectionLabels() {
    if (prefersReducedMotion()) return;

    const labels = document.querySelectorAll('.section-label');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    labels.forEach(label => {
      label.style.opacity = '0';
      label.style.transform = 'translateY(12px)';
      label.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(label);
    });
  }

  /* ── Navbar hide/show on scroll direction ─────────────── */
  function initNavbarHide() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    let lastY = 0;
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.scrollY;
          if (y > lastY && y > 120) {
            // Scrolling down — shrink navbar slightly
            navbar.style.transform = 'translateY(-8px)';
            navbar.style.opacity = '0.95';
          } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
            navbar.style.opacity = '1';
          }
          lastY = y;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /* ── Parallax effect on hero ──────────────────────────── */
  function initHeroParallax() {
    if (prefersReducedMotion()) return;
    const heroBg = document.querySelector('.hero__bg');
    if (!heroBg) return;

    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y < window.innerHeight) {
        heroBg.style.transform = `scale(1) translateY(${y * 0.25}px)`;
      }
    }, { passive: true });
  }

  /* ── Init all ─────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    initStagger();       // mark stagger children before observer
    initScrollReveal();  // attach observer
    initSectionLabels();
    initNavbarHide();
    initHeroParallax();
  });

})();


/* ============================================================
   RDS Legal Co — main.js
   Testimonials, accordion, blog filters, lazy images,
   smooth scroll, contact form.
   Navbar/footer/mobile-menu/page-transitions → components.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Hero media loaded ────────────────────────────────── */
  const heroSection = document.querySelector('.hero');
  const heroBgImage = heroSection?.querySelector('.hero__bg--image, .hero__bg');
  if (heroBgImage) {
    if (heroBgImage.complete) {
      heroSection.classList.add('loaded');
    } else {
      heroBgImage.addEventListener('load', () => heroSection.classList.add('loaded'));
    }
  }

  const heroBgVideo = heroSection?.querySelector('.hero__bg--video');
  if (heroBgVideo && heroSection) {
    const markVideoReady = () => heroSection.classList.add('video-ready');
    if (heroBgVideo.readyState >= 2) {
      markVideoReady();
    } else {
      heroBgVideo.addEventListener('loadeddata', markVideoReady, { once: true });
      heroBgVideo.addEventListener('canplay', markVideoReady, { once: true });
    }
  }

  /* ── Testimonials rotator ─────────────────────────────── */
  const testimonials = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.testimonial-dot');
  let currentTestimonial = 0;
  let testimonialTimer;

  function showTestimonial(idx) {
    if (!testimonials.length) return;

    const safeIdx = ((idx % testimonials.length) + testimonials.length) % testimonials.length;

    testimonials.forEach((t, i) => {
      const isActive = i === safeIdx;
      t.style.opacity  = isActive ? '1' : '0';
      t.style.position = isActive ? 'relative' : 'absolute';
      t.style.pointerEvents = isActive ? 'auto' : 'none';
      t.setAttribute('aria-hidden', isActive ? 'false' : 'true');
      t.hidden = !isActive;
    });

    dots.forEach((d, i) => {
      const isActive = i === safeIdx;
      d.classList.toggle('active', isActive);
      d.setAttribute('aria-selected', isActive ? 'true' : 'false');
      d.tabIndex = isActive ? 0 : -1;
    });

    currentTestimonial = safeIdx;
  }

  function nextTestimonial() {
    const next = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(next);
  }

  function stopTestimonialAutoplay() {
    if (testimonialTimer) {
      clearInterval(testimonialTimer);
      testimonialTimer = null;
    }
  }

  function startTestimonialAutoplay() {
    if (testimonials.length <= 1 || document.hidden) return;
    stopTestimonialAutoplay();
    testimonialTimer = setInterval(nextTestimonial, 5000);
  }

  if (testimonials.length > 0) {
    testimonials.forEach((panel, i) => {
      if (!panel.id) panel.id = `testimonial-panel-${i + 1}`;
      panel.setAttribute('role', 'tabpanel');
    });

    dots.forEach((dot, i) => {
      const panel = testimonials[i];
      if (!dot.id) dot.id = `testimonial-tab-${i + 1}`;
      dot.setAttribute('aria-controls', panel?.id || '');
      if (panel) {
        panel.setAttribute('aria-labelledby', dot.id);
      }
    });

    showTestimonial(0);
    startTestimonialAutoplay();

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        stopTestimonialAutoplay();
        showTestimonial(i);
        startTestimonialAutoplay();
      });

      dot.addEventListener('keydown', (e) => {
        if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) return;
        e.preventDefault();

        let nextIdx = currentTestimonial;
        if (e.key === 'ArrowRight') nextIdx = (currentTestimonial + 1) % testimonials.length;
        if (e.key === 'ArrowLeft') nextIdx = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        if (e.key === 'Home') nextIdx = 0;
        if (e.key === 'End') nextIdx = testimonials.length - 1;

        showTestimonial(nextIdx);
        dots[nextIdx]?.focus();
      });
    });

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        stopTestimonialAutoplay();
      } else {
        startTestimonialAutoplay();
      }
    });
  }

  /* ── FAQ Accordion ────────────────────────────────────── */
  document.querySelectorAll('.accordion-item').forEach((item, idx) => {
    const trigger = item.querySelector('.accordion-trigger');
    const body = item.querySelector('.accordion-body');
    if (!trigger || !body) return;

    const triggerId = trigger.id || `accordion-trigger-${idx + 1}`;
    const panelId = body.id || `accordion-panel-${idx + 1}`;

    trigger.id = triggerId;
    body.id = panelId;
    trigger.setAttribute('aria-controls', panelId);
    trigger.setAttribute('aria-expanded', item.classList.contains('open') ? 'true' : 'false');
    body.setAttribute('role', 'region');
    body.setAttribute('aria-labelledby', triggerId);

    if (!item.classList.contains('open')) {
      body.hidden = true;
    }

    trigger.addEventListener('click', () => {
      const currentItem = trigger.closest('.accordion-item');
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.accordion-item.open').forEach(openItem => {
        openItem.classList.remove('open');
        const openTrigger = openItem.querySelector('.accordion-trigger');
        const openBody = openItem.querySelector('.accordion-body');
        openTrigger?.setAttribute('aria-expanded', 'false');
        if (openBody) openBody.hidden = true;
      });

      // Toggle current
      if (!isOpen) {
        currentItem.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
        body.hidden = false;
      }
    });
  });

  /* ── Blog filter tabs ─────────────────────────────────── */
  const filterTabs = document.querySelectorAll('.filter-tab');
  const blogCards  = document.querySelectorAll('.blog-card[data-category]');

  function applyBlogFilter(cat) {
    filterTabs.forEach(t => {
      const isActive = t.dataset.category === cat;
      t.classList.toggle('active', isActive);
      t.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    blogCards.forEach(card => {
      const shouldShow = cat === 'all' || card.dataset.category === cat;
      card.hidden = !shouldShow;
      card.style.display = shouldShow ? '' : 'none';
    });
  }

  filterTabs.forEach(tab => {
    tab.setAttribute('aria-pressed', tab.classList.contains('active') ? 'true' : 'false');

    tab.addEventListener('click', () => {
      const cat = tab.dataset.category || 'all';
      applyBlogFilter(cat);
    });
  });

  const activeTab = document.querySelector('.filter-tab.active')?.dataset.category;
  if (activeTab && blogCards.length) {
    applyBlogFilter(activeTab);
  } else if (filterTabs.length && blogCards.length) {
    const firstCat = filterTabs[0].dataset.category || 'all';
    applyBlogFilter(firstCat);
  }

  /* ── Lazy image loading ───────────────────────────────── */
  document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', () => img.classList.add('loaded'));
    }
  });

  /* ── Smooth scroll for anchor links ──────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    const href = anchor.getAttribute('href');
    if (!href || href === '#') return;

    anchor.addEventListener('click', e => {
      const targetId = href.slice(1);
      if (!targetId) return;

      let target = null;
      try {
        target = document.getElementById(decodeURIComponent(targetId));
      } catch (_err) {
        target = document.getElementById(targetId);
      }

      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── Contact form submit + validation ─────────────────── */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    const btn = contactForm.querySelector('[type="submit"]');
    const statusEl = contactForm.querySelector('.form-status');

    function setStatus(message, state) {
      if (!statusEl) return;
      statusEl.textContent = message;
      statusEl.classList.remove('is-success', 'is-error');
      if (state === 'success') statusEl.classList.add('is-success');
      if (state === 'error') statusEl.classList.add('is-error');
    }

    function buildMailtoDraftUrl(formData) {
      const name = formData.get('name') || 'Website visitor';
      const subject = formData.get('subject') || 'Website enquiry';

      const bodyLines = [
        `Name: ${name}`,
        `Email: ${formData.get('email') || ''}`,
        `Phone: ${formData.get('phone') || ''}`,
        '',
        'Message:',
        formData.get('message') || ''
      ];

      return `mailto:?subject=${encodeURIComponent(`[Website] ${subject}`)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
    }

    function displayEmail(email) {
      return email.replace('@', ' [at] ');
    }

    async function copyRecipientToClipboard(recipient) {
      if (!navigator.clipboard?.writeText) return false;
      try {
        await navigator.clipboard.writeText(recipient);
        return true;
      } catch (_err) {
        return false;
      }
    }

    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      if (!btn) return;

      const originalText = btn.textContent;
      const formData = new FormData(contactForm);
      const endpoint = (contactForm.getAttribute('action') || '').trim();

      btn.textContent = 'Sending...';
      btn.disabled = true;
      setStatus('', null);

      try {
        if (endpoint && !endpoint.startsWith('mailto:')) {
          const method = (contactForm.getAttribute('method') || 'POST').toUpperCase();
          const response = await fetch(endpoint, {
            method,
            body: formData,
            headers: { 'Accept': 'application/json' }
          });

          if (!response.ok) {
            throw new Error(`Submission failed with status ${response.status}`);
          }

          setStatus('Thanks. Your message has been sent.', 'success');
          contactForm.reset();
        } else {
          const recipient = contactForm.dataset.recipient || 'contact@rds.legal';
          const copiedRecipient = await copyRecipientToClipboard(recipient);
          window.location.href = buildMailtoDraftUrl(formData);
          if (copiedRecipient) {
            setStatus(`Draft opened. Recipient copied to clipboard (${displayEmail(recipient)}).`, 'success');
          } else {
            setStatus(`Draft opened. Add recipient manually: ${displayEmail(recipient)}.`, 'success');
          }
        }
      } catch (_err) {
        setStatus('Could not send right now. Please email contact@rds.legal.', 'error');
      } finally {
        btn.textContent = originalText;
        btn.disabled = false;
      }
    });
  }

});

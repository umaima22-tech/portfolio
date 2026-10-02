/* =========================================================
   PORTFOLIO WEBSITE — script.js
   Handles: mobile menu, fade-in on scroll, skill bar animation,
            active nav link, scroll-to-top button
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* =======================================================
     1) MOBILE MENU — auto-close when a nav link is clicked
     ======================================================= */
  const menuToggle = document.getElementById('menu-toggle');
  const navLinksAll = document.querySelectorAll('.nav-links a');

  navLinksAll.forEach(link => {
    link.addEventListener('click', () => {
      if (menuToggle) menuToggle.checked = false;
    });
  });

/* =========================================================
   PORTFOLIO WEBSITE — script.js
   Handles: mobile menu, fade-in on scroll, active nav link,
            scroll-to-top button, form feedback, auto year
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* =======================================================
     1) MOBILE MENU — auto-close when a nav link is clicked
     ======================================================= */
  const menuToggle = document.getElementById('menu-toggle');
  const navLinksAll = document.querySelectorAll('.nav-links a');

  navLinksAll.forEach(link => {
    link.addEventListener('click', () => {
      if (menuToggle) menuToggle.checked = false;
    });
  });


  /* =======================================================
     2) FADE-IN ON SCROLL — sections appear smoothly
     ======================================================= */
  const sections = document.querySelectorAll('.section, .hero');

  sections.forEach(sec => {
    sec.style.opacity = '0';
    sec.style.transform = 'translateY(40px)';
    sec.style.transition = 'opacity 0.9s ease, transform 0.9s ease';
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -60px 0px'
  });

  sections.forEach(sec => revealObserver.observe(sec));


  /* =======================================================
     3) ACTIVE NAV LINK — highlight current section
     ======================================================= */
  const navLinks = document.querySelectorAll('.nav-links a');
  const allSections = document.querySelectorAll('section[id]');

  const activeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, {
    threshold: 0.5,
    rootMargin: '-80px 0px -40% 0px'
  });

  allSections.forEach(sec => activeObserver.observe(sec));


  /* =======================================================
     4) NAVBAR — add .scrolled class after scrolling down
     ======================================================= */
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (!navbar) return;
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });


  /* =======================================================
     5) SCROLL-TO-TOP BUTTON — appears after scrolling down
     ======================================================= */
  const topBtn = document.createElement('button');
  topBtn.className = 'scroll-top';
  topBtn.setAttribute('aria-label', 'Scroll to top');
  topBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
  document.body.appendChild(topBtn);

  topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      topBtn.classList.add('show');
    } else {
      topBtn.classList.remove('show');
    }
  });


  /* =======================================================
     6) CONTACT FORM — friendly submission feedback
     ======================================================= */
  const contactForm = document.querySelector('.contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;

      btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
      btn.disabled = true;

      setTimeout(() => {
        btn.innerHTML = '<i class="fa-solid fa-check"></i> Message Sent!';
        btn.style.background = 'linear-gradient(135deg, #00c9ff 0%, #92fe9d 100%)';

        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.style.background = '';
          btn.disabled = false;
          contactForm.reset();
        }, 1800);
      }, 900);
    });
  }


  /* =======================================================
     7) CURRENT YEAR IN FOOTER — auto-updates
     ======================================================= */
  const footerText = document.querySelector('.footer p');
  if (footerText) {
    const year = new Date().getFullYear();
    footerText.innerHTML = `© ${year} Your Name. Built with ❤️ using HTML &amp; CSS.`;
  }

}); // end DOMContentLoaded
  /* =======================================================
     2) FADE-IN ON SCROLL — sections appear smoothly
     ======================================================= */
  const sections = document.querySelectorAll('.section, .hero');

  // Set initial hidden state via inline styles (JS-driven)
  sections.forEach(sec => {
    sec.style.opacity = '0';
    sec.style.transform = 'translateY(40px)';
    sec.style.transition = 'opacity 0.9s ease, transform 0.9s ease';
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -60px 0px'
  });

  sections.forEach(sec => revealObserver.observe(sec));


  


  /* =======================================================
     4) ACTIVE NAV LINK — highlight current section
     ======================================================= */
  const navLinks = document.querySelectorAll('.nav-links a');
  const allSections = document.querySelectorAll('section[id]');

  const activeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, {
    threshold: 0.5,
    rootMargin: '-80px 0px -40% 0px'
  });

  allSections.forEach(sec => activeObserver.observe(sec));


  /* =======================================================
     5) NAVBAR — add .scrolled class after scrolling down
     ======================================================= */
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (!navbar) return;
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });


  /* =======================================================
     6) SCROLL-TO-TOP BUTTON — appears after scrolling down
     ======================================================= */
  // Create button dynamically (no need to edit HTML)
  const topBtn = document.createElement('button');
  topBtn.className = 'scroll-top';
  topBtn.setAttribute('aria-label', 'Scroll to top');
  topBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
  document.body.appendChild(topBtn);

  topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      topBtn.classList.add('show');
    } else {
      topBtn.classList.remove('show');
    }
  });


  /* =======================================================
     7) CONTACT FORM — friendly submission feedback
     ======================================================= */
  const contactForm = document.querySelector('.contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;

      btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
      btn.disabled = true;

      // Simulate a short "sending" delay for better UX
      setTimeout(() => {
        btn.innerHTML = '<i class="fa-solid fa-check"></i> Message Sent!';
        btn.style.background = 'linear-gradient(135deg, #00c9ff 0%, #92fe9d 100%)';

        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.style.background = '';
          btn.disabled = false;
          contactForm.reset();
        }, 1800);
      }, 900);
    });
  }


  /* =======================================================
     8) CURRENT YEAR IN FOOTER — auto-updates
     ======================================================= */
  const footerText = document.querySelector('.footer p');
  if (footerText) {
    const year = new Date().getFullYear();
    footerText.innerHTML = `© ${year} Umaima's Portfolio`;
  }

}); // end DOMContentLoaded
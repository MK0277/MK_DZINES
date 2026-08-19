document.addEventListener('DOMContentLoaded', () => {

  /* ===== HEADER SCROLL STATE ===== */
  const header = document.getElementById('siteHeader');
  const onScroll = () => {
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll);
  onScroll();

  /* ===== MOBILE MENU ===== */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
  }));

  /* ===== HERO CHIP PARALLAX ===== */
  const heroStage = document.getElementById('heroStage');
  if (window.matchMedia('(min-width: 1081px)').matches) {
    heroStage.addEventListener('mousemove', (e) => {
      const rect = heroStage.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      heroStage.querySelectorAll('.chip').forEach((chip, i) => {
        const depth = (i % 4 + 1) * 6;
        chip.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
      });
    });
    heroStage.addEventListener('mouseleave', () => {
      heroStage.querySelectorAll('.chip').forEach(chip => chip.style.transform = '');
    });
  }

  /* ===== PORTFOLIO DATA ===== */
  const projects = [
    {
      id: 'bun-theory', name: 'Bun Theory', industry: 'Restaurant / Food Branding',
      cats: ['branding', 'logo', 'packaging'], desc: 'Full identity system for a modern burger concept.',
      services: 'Brand Identity, Logo Design, Packaging, Social Media',
      challenge: 'Stand out in a saturated fast-casual market while feeling premium, not corporate.',
      direction: 'A playful wordmark built around a stacked-bun motif, paired with a bold warm palette.',
      applications: 'Applied across packaging, menu boards, delivery bags and Instagram templates.'
    },
    {
      id: 'vegcut', name: 'VegCut', industry: 'Fresh Food / Grocery Branding',
      cats: ['branding', 'logo', 'packaging'], desc: 'Clean, modern identity for a fresh-cut produce brand.',
      services: 'Brand Identity, Logo Design, Packaging',
      challenge: 'Communicate freshness and reliability at a glance, on-shelf and online.',
      direction: 'A crisp geometric mark with a green-forward palette and a modular labeling system.',
      applications: 'Rolled out across product labels, delivery packaging and social content.'
    },
    {
      id: 'cafe-brand', name: 'Café Brand', industry: 'Food & Beverage Branding',
      cats: ['branding', 'social', 'packaging'], desc: 'Warm, editorial identity for an independent café.',
      services: 'Brand Identity, Social Media Branding, Packaging',
      challenge: 'Build a visual identity that feels handmade and community-driven.',
      direction: 'An earthy palette with a hand-set display type and textured packaging.',
      applications: 'Extended into cup design, signage and a full Instagram content system.'
    },
    {
      id: 'fashion-brand', name: 'Fashion Brand', industry: 'Clothing & Lifestyle Branding',
      cats: ['branding', 'logo', 'social', 'posters'], desc: 'Bold streetwear identity built for social-first growth.',
      services: 'Brand Identity, Logo Design, Social Media Branding, Marketing Design',
      challenge: 'Create a distinct visual voice that could compete with established streetwear labels.',
      direction: 'A high-contrast monochrome system with an expressive type-driven logo.',
      applications: 'Applied to clothing tags, lookbook posters and a full campaign rollout.'
    }
  ];

  const portfolioGrid = document.getElementById('portfolioGrid');
  portfolioGrid.innerHTML = projects.map(p => `
    <div class="portfolio-card reveal" data-cats="${p.cats.join(' ')}" data-id="${p.id}">
      <div class="portfolio-visual"><span>${p.name}</span></div>
      <div class="portfolio-info">
        <p class="portfolio-cat">${p.industry}</p>
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <span class="portfolio-view">View Project →</span>
      </div>
    </div>
  `).join('');

  /* filtering */
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      document.querySelectorAll('.portfolio-card').forEach(card => {
        const cats = card.dataset.cats.split(' ');
        card.classList.toggle('hidden-card', f !== 'all' && !cats.includes(f));
      });
    });
  });

  /* modal case study */
  const overlay = document.getElementById('modalOverlay');
  const modalContent = document.getElementById('modalContent');
  document.getElementById('modalClose').addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  portfolioGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.portfolio-card');
    if (!card) return;
    const p = projects.find(pr => pr.id === card.dataset.id);
    if (!p) return;
    modalContent.innerHTML = `
      <p class="modal-eyebrow">Case Study</p>
      <h2>${p.name}</h2>
      <div class="modal-meta">
        <div><strong>Industry</strong>${p.industry}</div>
        <div><strong>Services</strong>${p.services}</div>
      </div>
      <div class="modal-stages">
        <div class="modal-stage"><span>Brand Challenge</span><p>${p.challenge}</p></div>
        <div class="modal-stage"><span>Creative Direction</span><p>${p.direction}</p></div>
        <div class="modal-stage"><span>Applications</span><p>${p.applications}</p></div>
      </div>
      <a href="#contact" class="btn btn-gold">Want a brand like this? <i class="fa-solid fa-arrow-right"></i></a>
    `;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    modalContent.querySelector('a').addEventListener('click', closeModal);
  });

  /* ===== INSTAGRAM GRID ===== */
  const igIcons = ['fa-solid fa-swatchbook','fa-solid fa-tag','fa-solid fa-mug-hot','fa-solid fa-shirt','fa-solid fa-box','fa-solid fa-pen-nib','fa-solid fa-id-card','fa-solid fa-shapes','fa-solid fa-bullhorn','fa-solid fa-store','fa-solid fa-palette','fa-solid fa-table-columns'];
  document.getElementById('igGrid').innerHTML = igIcons.map(icon => `<div class="ig-tile reveal"><i class="${icon}"></i></div>`).join('');

  /* ===== TESTIMONIAL SLIDER ===== */
  const track = document.getElementById('testimonialTrack');
  const cards = track.querySelectorAll('.testimonial-card');
  const dotsWrap = document.getElementById('sliderDots');
  let current = 0;
  cards.forEach((_, i) => {
    const dot = document.createElement('span');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  });
  const dots = dotsWrap.querySelectorAll('span');

  function goTo(i) {
    current = i;
    track.style.transform = `translateX(-${i * 100}%)`;
    dots.forEach((d, idx) => d.classList.toggle('active', idx === i));
  }
  setInterval(() => goTo((current + 1) % cards.length), 5500);

  /* ===== FAQ ACCORDION ===== */
  document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-q').addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });

  /* ===== MULTI-STEP INQUIRY FORM ===== */
  const form = document.getElementById('inquiryForm');
  const steps = form.querySelectorAll('.form-step');
  const dotsForm = form.querySelectorAll('.form-step-dot');
  let stepIndex = 0;

  function showStep(i) {
    steps.forEach((s, idx) => s.classList.toggle('active', idx === i));
    dotsForm.forEach((d, idx) => d.classList.toggle('active', idx <= i));
    stepIndex = i;
  }

  form.querySelectorAll('.form-next').forEach(btn => {
    btn.addEventListener('click', () => {
      const currentStep = steps[stepIndex];
      const required = currentStep.querySelectorAll('[required]');
      for (const field of required) {
        if (!field.value) { field.reportValidity(); return; }
      }
      if (stepIndex < steps.length - 1) showStep(stepIndex + 1);
    });
  });
  form.querySelectorAll('.form-back').forEach(btn => {
    btn.addEventListener('click', () => { if (stepIndex > 0) showStep(stepIndex - 1); });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.classList.add('submitted');
    document.getElementById('formSuccess').classList.add('active');
  });

  /* ===== SCROLL REVEAL ===== */
  const revealTargets = document.querySelectorAll('.service-card, .package-card, .why-item, .process-step, .industry-chip, .portfolio-card, .ig-tile, .faq-item');
  revealTargets.forEach(el => el.classList.add('reveal'));
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach(el => io.observe(el));

});

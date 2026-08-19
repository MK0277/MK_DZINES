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
  if (heroStage && window.matchMedia('(min-width: 1081px)').matches) {
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

  /* ===== SHARED PACKAGE DATA ===== */
  const packageData = {
    starter: { name: 'Starter Package', amount: '4,999', desc: 'Logo Design, Logo Variations, Color Palette, Typography and Basic Brand Assets.' },
    professional: { name: 'Professional Package', amount: '9,999', desc: 'Everything in Starter plus Brand Guidelines, Business Card, Social Media Templates, Profile Branding, a Packaging/Marketing Asset and Brand Mockups.' },
    premium: { name: 'Premium Package', amount: '17,999', desc: 'Complete Brand Identity, Logo System, Brand Guidelines, Social Media Branding, Packaging, Marketing Materials, Multiple Mockups and a full Brand Presentation.' }
  };

  /* ===== PROJECT INQUIRY MODAL (open/close, shared across pages) ===== */
  const projectOverlay = document.getElementById('projectOverlay');
  const projectClose = document.getElementById('projectClose');

  function openProjectModal(prefillPkg) {
    if (!projectOverlay) return;
    projectOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    const formEl = document.getElementById('inquiryForm');
    if (formEl && formEl.classList.contains('submitted')) {
      formEl.classList.remove('submitted');
      formEl.reset();
      formEl.querySelectorAll('.budget-card').forEach(c => c.classList.remove('selected'));
      document.getElementById('formSuccess').classList.remove('active');
      formEl.querySelectorAll('.form-step').forEach((s, idx) => s.classList.toggle('active', idx === 0));
      formEl.querySelectorAll('.form-step-dot').forEach((d, idx) => d.classList.toggle('active', idx === 0));
    }
    if (prefillPkg) {
      const radio = projectOverlay.querySelector(`input[name="budget"][value="${prefillPkg}"]`);
      if (radio) {
        radio.checked = true;
        radio.dispatchEvent(new Event('change'));
      }
    }
  }
  function closeProjectModal() {
    if (!projectOverlay) return;
    projectOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }
  document.querySelectorAll('.js-open-project').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      openProjectModal(el.dataset.pkg);
    });
  });
  if (projectClose) projectClose.addEventListener('click', closeProjectModal);
  if (projectOverlay) projectOverlay.addEventListener('click', (e) => { if (e.target === projectOverlay) closeProjectModal(); });

  /* ===== PORTFOLIO DATA (index page only) ===== */
  const portfolioGrid = document.getElementById('portfolioGrid');
  if (portfolioGrid) {
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
      <button type="button" class="btn btn-gold js-open-project">Want a brand like this? <i class="fa-solid fa-arrow-right"></i></button>
    `;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    modalContent.querySelector('button').addEventListener('click', () => {
      closeModal();
      openProjectModal();
    });
  });
  } // end portfolioGrid guard

  /* ===== INSTAGRAM GRID (index page only) ===== */
  const igGrid = document.getElementById('igGrid');
  if (igGrid) {
    const igIcons = ['fa-solid fa-swatchbook','fa-solid fa-tag','fa-solid fa-mug-hot','fa-solid fa-shirt','fa-solid fa-box','fa-solid fa-pen-nib','fa-solid fa-id-card','fa-solid fa-shapes','fa-solid fa-bullhorn','fa-solid fa-store','fa-solid fa-palette','fa-solid fa-table-columns'];
    igGrid.innerHTML = igIcons.map(icon => `<div class="ig-tile reveal"><i class="${icon}"></i></div>`).join('');
  }

  /* ===== TESTIMONIAL SLIDER (index page only) ===== */
  const track = document.getElementById('testimonialTrack');
  if (track) {
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
  }

  /* ===== FAQ ACCORDION (index page only) ===== */
  document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-q').addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });

  /* ===== MULTI-STEP INQUIRY FORM (project modal, all pages) ===== */
  const form = document.getElementById('inquiryForm');
  if (form) {
    const steps = form.querySelectorAll('.form-step');
    const dotsForm = form.querySelectorAll('.form-step-dot');
    const budgetError = document.getElementById('budgetError');
    let stepIndex = 0;

    function showStep(i) {
      steps.forEach((s, idx) => s.classList.toggle('active', idx === i));
      dotsForm.forEach((d, idx) => d.classList.toggle('active', idx <= i));
      stepIndex = i;
    }

    /* highlight selected plan card + clear error */
    form.querySelectorAll('input[name="budget"]').forEach(radio => {
      radio.addEventListener('change', () => {
        form.querySelectorAll('.budget-card').forEach(c => c.classList.remove('selected'));
        const card = radio.closest('.budget-card');
        if (card) card.classList.add('selected');
        if (budgetError) budgetError.classList.remove('show');
      });
    });

    form.querySelectorAll('.form-next').forEach(btn => {
      btn.addEventListener('click', () => {
        const currentStep = steps[stepIndex];
        const required = currentStep.querySelectorAll('[required]');
        for (const field of required) {
          if (field.type === 'radio') {
            const checked = currentStep.querySelector(`input[name="${field.name}"]:checked`);
            if (!checked) {
              if (budgetError) budgetError.classList.add('show');
              return;
            }
            continue;
          }
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
      const checkedBudget = form.querySelector('input[name="budget"]:checked');
      const pkgKey = checkedBudget ? checkedBudget.value : null;
      const successPlan = document.getElementById('formSuccessPlan');
      if (successPlan) {
        if (pkgKey && packageData[pkgKey]) {
          const pkg = packageData[pkgKey];
          successPlan.innerHTML = `
            <p class="plan-chosen">Selected plan: <strong>${pkg.name}</strong> — ₹${pkg.amount} <span>starting from</span></p>
            <button type="button" class="btn btn-gold" id="successPayBtn">Proceed to Payment <i class="fa-solid fa-arrow-right"></i></button>
          `;
          const payBtn = document.getElementById('successPayBtn');
          if (payBtn) payBtn.addEventListener('click', () => {
            closeProjectModal();
            openPayment(pkgKey);
          });
        } else {
          successPlan.innerHTML = `<p class="plan-chosen">We'll follow up to discuss the best plan for your budget.</p>`;
        }
      }
      form.classList.add('submitted');
      document.getElementById('formSuccess').classList.add('active');
    });
  }

  /* ===== PAYMENT MODAL ===== */
  const paymentOverlay = document.getElementById('paymentOverlay');
  const paymentPkgName = document.getElementById('paymentPkgName');
  const paymentAmount = document.getElementById('paymentAmount');
  const paymentDesc = document.getElementById('paymentDesc');
  const paymentQR = document.getElementById('paymentQR');
  const paymentConfirmBtn = document.getElementById('paymentConfirmBtn');

  function openPayment(pkgKey) {
    const pkg = packageData[pkgKey] || packageData.professional;
    paymentPkgName.textContent = pkg.name;
    paymentAmount.textContent = pkg.amount;
    paymentDesc.textContent = `Scan the QR code with any UPI app to pay, or use the bank details below. Includes: ${pkg.desc}`;

    const upiString = `upi://pay?pa=mkdzines@upi&pn=MK%20Dzines&am=${pkg.amount.replace(/,/g, '')}&cu=INR&tn=${encodeURIComponent(pkg.name)}`;
    paymentQR.src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(upiString)}`;

    const waMsg = encodeURIComponent(`Hi MK Dzines, I've made a payment for the ${pkg.name} (₹${pkg.amount}). Here's my confirmation.`);
    paymentConfirmBtn.href = `https://wa.me/0000000000?text=${waMsg}`;

    paymentOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closePayment() {
    paymentOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }
  document.querySelectorAll('.pkg-btn').forEach(btn => {
    btn.addEventListener('click', () => openPayment(btn.dataset.pkg));
  });
  const paymentCloseBtn = document.getElementById('paymentClose');
  if (paymentCloseBtn) paymentCloseBtn.addEventListener('click', closePayment);
  if (paymentOverlay) paymentOverlay.addEventListener('click', (e) => { if (e.target === paymentOverlay) closePayment(); });

  /* ===== FEEDBACK MODAL ===== */
  const feedbackOverlay = document.getElementById('feedbackOverlay');
  const feedbackFloatBtn = document.getElementById('feedbackFloatBtn');
  const feedbackClose = document.getElementById('feedbackClose');
  const feedbackForm = document.getElementById('feedbackForm');
  const feedbackFormWrap = document.getElementById('feedbackFormWrap');
  const feedbackSuccess = document.getElementById('feedbackSuccess');
  const starRating = document.getElementById('starRating');
  let selectedRating = 0;

  if (feedbackFloatBtn) {
    feedbackFloatBtn.addEventListener('click', () => {
      feedbackOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }
  function closeFeedback() {
    feedbackOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }
  if (feedbackClose) feedbackClose.addEventListener('click', closeFeedback);
  if (feedbackOverlay) feedbackOverlay.addEventListener('click', (e) => { if (e.target === feedbackOverlay) closeFeedback(); });

  if (starRating) {
    const stars = starRating.querySelectorAll('i');
    stars.forEach(star => {
      star.addEventListener('click', () => {
        selectedRating = parseInt(star.dataset.value, 10);
        stars.forEach(s => {
          const active = parseInt(s.dataset.value, 10) <= selectedRating;
          s.classList.toggle('active', active);
          s.classList.toggle('fa-solid', active);
          s.classList.toggle('fa-regular', !active);
        });
      });
    });
  }
  if (feedbackForm) {
    feedbackForm.addEventListener('submit', (e) => {
      e.preventDefault();
      feedbackFormWrap.classList.add('hidden');
      feedbackSuccess.classList.add('active');
      setTimeout(closeFeedback, 2200);
    });
  }

  /* ===== GALLERY PAGE ===== */
  const galleryGrid = document.getElementById('galleryGrid');
  if (galleryGrid) {
    /* Each brand: swap "website"/"instagram" for the real links, and give
       "images" real photo URLs when you have them — the carousel just
       loops through whatever is in that array. */
    const galleryProjects = [
      { id: 'bun-theory', name: 'Bun Theory', industry: 'Restaurant / Food Branding', status: 'completed', desc: 'Full identity system for a modern burger concept.', website: 'https://example.com/bun-theory', instagram: 'https://instagram.com/buntheory', images: [
        { label: 'Logo Mark', icon: 'fa-solid fa-swatchbook' },
        { label: 'Packaging', icon: 'fa-solid fa-box' },
        { label: 'Instagram Post', icon: 'fa-brands fa-instagram' },
        { label: 'Menu Board', icon: 'fa-solid fa-table-columns' }
      ] },
      { id: 'vegcut', name: 'VegCut', industry: 'Fresh Food / Grocery Branding', status: 'completed', desc: 'Clean, modern identity for a fresh-cut produce brand.', website: 'https://example.com/vegcut', instagram: 'https://instagram.com/vegcut', images: [
        { label: 'Logo Mark', icon: 'fa-solid fa-swatchbook' },
        { label: 'Product Label', icon: 'fa-solid fa-tag' },
        { label: 'Delivery Packaging', icon: 'fa-solid fa-box' }
      ] },
      { id: 'cafe-brand', name: 'Café Brand', industry: 'Food & Beverage Branding', status: 'completed', desc: 'Warm, editorial identity for an independent café.', website: 'https://example.com/cafe-brand', instagram: 'https://instagram.com/cafebrand', images: [
        { label: 'Logo Mark', icon: 'fa-solid fa-swatchbook' },
        { label: 'Café Cup', icon: 'fa-solid fa-mug-hot' },
        { label: 'Signage', icon: 'fa-solid fa-store' },
        { label: 'Instagram Grid', icon: 'fa-brands fa-instagram' }
      ] },
      { id: 'fashion-label', name: 'Fashion Label', industry: 'Clothing & Lifestyle Branding', status: 'ongoing', desc: 'Streetwear identity and campaign rollout, currently in design.', website: 'https://example.com/fashion-label', instagram: 'https://instagram.com/fashionlabel', images: [
        { label: 'Logo Mark', icon: 'fa-solid fa-swatchbook' },
        { label: 'Clothing Tag', icon: 'fa-solid fa-tag' },
        { label: 'Lookbook Poster', icon: 'fa-solid fa-table-columns' }
      ] },
      { id: 'glow-beauty', name: 'Glow Beauty Co.', industry: 'Beauty & Skincare Branding', status: 'ongoing', desc: 'Packaging and social identity in progress.', website: 'https://example.com/glow-beauty', instagram: 'https://instagram.com/glowbeautyco', images: [
        { label: 'Logo Mark', icon: 'fa-solid fa-swatchbook' },
        { label: 'Packaging', icon: 'fa-solid fa-box' }
      ] },
      { id: 'local-roast', name: 'Local Roast', industry: 'Coffee Brand', status: 'upcoming', desc: 'Full rebrand starting next month.', website: '', instagram: 'https://instagram.com/localroast', images: [
        { label: 'Concept Mark', icon: 'fa-solid fa-swatchbook' }
      ] },
      { id: 'studio-threads', name: 'Studio Threads', industry: 'Personal Brand', status: 'upcoming', desc: 'Visual identity for a content creator, kicking off soon.', website: '', instagram: 'https://instagram.com/studiothreads', images: [
        { label: 'Concept Mark', icon: 'fa-solid fa-swatchbook' }
      ] }
    ];

    const statusLabel = { completed: 'Completed', ongoing: 'Ongoing', upcoming: 'Upcoming' };

    galleryGrid.innerHTML = galleryProjects.map(p => `
      <div class="portfolio-card reveal" data-status="${p.status}" data-id="${p.id}">
        <span class="status-badge status-${p.status}">${statusLabel[p.status]}</span>
        <div class="portfolio-visual"><span>${p.name}</span></div>
        <div class="portfolio-info">
          <p class="portfolio-cat">${p.industry}</p>
          <h3>${p.name}</h3>
          <p>${p.desc}</p>
          <span class="portfolio-view">View Gallery &amp; Links →</span>
        </div>
      </div>
    `).join('');

    const galleryFilterBtns = document.querySelectorAll('.gallery-filter-btn');
    galleryFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        galleryFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const f = btn.dataset.filter;
        galleryGrid.querySelectorAll('.portfolio-card').forEach(card => {
          card.classList.toggle('hidden-card', f !== 'all' && card.dataset.status !== f);
        });
      });
    });

    galleryGrid.querySelectorAll('.portfolio-card').forEach(el => el.classList.add('reveal'));

    /* ===== BRAND DETAIL MODAL + CAROUSEL ===== */
    const brandOverlay = document.getElementById('brandOverlay');
    const brandModalContent = document.getElementById('brandModalContent');
    const brandClose = document.getElementById('brandClose');

    function closeBrandModal() {
      if (!brandOverlay) return;
      brandOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }
    if (brandClose) brandClose.addEventListener('click', closeBrandModal);
    if (brandOverlay) brandOverlay.addEventListener('click', (e) => { if (e.target === brandOverlay) closeBrandModal(); });

    function openBrandModal(p) {
      if (!brandOverlay || !brandModalContent) return;
      let slide = 0;

      const slidesHtml = p.images.map((img, i) => `
        <div class="carousel-slide${i === 0 ? ' active' : ''}">
          <i class="${img.icon}"></i>
          <span>${img.label}</span>
        </div>
      `).join('');
      const dotsHtml = p.images.map((_, i) => `<span class="carousel-dot${i === 0 ? ' active' : ''}" data-i="${i}"></span>`).join('');

      const websiteBtn = p.website ? `<a href="${p.website}" target="_blank" rel="noopener" class="btn btn-outline-gold"><i class="fa-solid fa-globe"></i> Visit Website</a>` : '';
      const igBtn = p.instagram ? `<a href="${p.instagram}" target="_blank" rel="noopener" class="btn btn-gold"><i class="fa-brands fa-instagram"></i> View on Instagram</a>` : '';

      brandModalContent.innerHTML = `
        <p class="modal-eyebrow">${statusLabel[p.status]} Project</p>
        <h2>${p.name}</h2>
        <div class="modal-meta">
          <div><strong>Industry</strong>${p.industry}</div>
        </div>
        <p style="color:var(--graphite); margin-bottom:1.4rem;">${p.desc}</p>

        <div class="brand-carousel">
          <div class="carousel-track">${slidesHtml}</div>
          ${p.images.length > 1 ? `
            <button type="button" class="carousel-arrow carousel-prev" aria-label="Previous image"><i class="fa-solid fa-chevron-left"></i></button>
            <button type="button" class="carousel-arrow carousel-next" aria-label="Next image"><i class="fa-solid fa-chevron-right"></i></button>
          ` : ''}
        </div>
        ${p.images.length > 1 ? `<div class="carousel-dots">${dotsHtml}</div>` : ''}

        <div class="brand-links">
          ${websiteBtn}
          ${igBtn}
          ${!p.website && !p.instagram ? '<p class="brand-links-empty">Links for this brand coming soon.</p>' : ''}
        </div>
      `;

      const slides = brandModalContent.querySelectorAll('.carousel-slide');
      const dots = brandModalContent.querySelectorAll('.carousel-dot');
      function goToSlide(i) {
        slide = (i + slides.length) % slides.length;
        slides.forEach((s, idx) => s.classList.toggle('active', idx === slide));
        dots.forEach((d, idx) => d.classList.toggle('active', idx === slide));
      }
      const prevBtn = brandModalContent.querySelector('.carousel-prev');
      const nextBtn = brandModalContent.querySelector('.carousel-next');
      if (prevBtn) prevBtn.addEventListener('click', () => goToSlide(slide - 1));
      if (nextBtn) nextBtn.addEventListener('click', () => goToSlide(slide + 1));
      dots.forEach(dot => dot.addEventListener('click', () => goToSlide(parseInt(dot.dataset.i, 10))));

      brandOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    galleryGrid.addEventListener('click', (e) => {
      const card = e.target.closest('.portfolio-card');
      if (!card) return;
      const p = galleryProjects.find(gp => gp.id === card.dataset.id);
      if (p) openBrandModal(p);
    });
  }

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

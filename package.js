document. write('
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Branding Packages | MK Dzines</title>

  <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: Arial, sans-serif;
      background: #0b0b0b;
      color: #fff;
      min-height: 100vh;
    }

    .packages-page {
      width: 100%;
      max-width: 1400px;
      margin: auto;
      padding: 80px 5%;
      overflow: hidden;
    }

    /* HEADER */

    .section-head {
      text-align: center;
      margin-bottom: 55px;
    }

    .eyebrow {
      color: #d4af37;
      font-size: 13px;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 12px;
    }

    .eyebrow-dot {
      display: inline-block;
      width: 7px;
      height: 7px;
      background: #d4af37;
      border-radius: 50%;
      margin-right: 7px;
    }

    .section-title {
      font-size: clamp(35px, 5vw, 60px);
      margin-bottom: 15px;
    }

    .section-subtitle {
      max-width: 650px;
      margin: auto;
      color: #aaa;
      line-height: 1.7;
      font-size: 16px;
    }


    /* SLIDER */

    .packages-slider {
      display: flex;
      gap: 25px;

      width: 100%;

      overflow-x: auto;
      overflow-y: hidden;

      scroll-snap-type: x mandatory;
      scroll-behavior: smooth;

      scrollbar-width: none;

      cursor: grab;

      padding: 10px 4px 30px;

      user-select: none;

      -webkit-overflow-scrolling: touch;
    }

    .packages-slider::-webkit-scrollbar {
      display: none;
    }

    .packages-slider:active {
      cursor: grabbing;
    }


    /* CARD */

    .package-slide {
      flex: 0 0 calc((100% - 50px) / 3);

      scroll-snap-align: start;

      min-width: 0;
    }

    .package-card {
      height: 100%;

      min-height: 570px;

      padding: 35px;

      background: #111;

      border: 1px solid rgba(212, 175, 55, 0.25);

      border-radius: 22px;

      display: flex;
      flex-direction: column;

      transition: transform 0.3s ease,
                  border-color 0.3s ease;
    }

    .package-card:hover {
      transform: translateY(-6px);
      border-color: rgba(212, 175, 55, 0.65);
    }


    /* FEATURED */

    .package-featured {
      border-color: #d4af37;

      box-shadow:
        0 0 40px rgba(212, 175, 55, 0.08);
    }

    .package-badge {
      display: inline-block;

      width: fit-content;

      padding: 7px 14px;

      margin-bottom: 20px;

      background: #d4af37;
      color: #111;

      border-radius: 50px;

      font-size: 11px;
      font-weight: 700;

      text-transform: uppercase;
      letter-spacing: 1px;
    }


    /* TEXT */

    .package-label {
      display: block;

      color: #888;

      font-size: 11px;

      letter-spacing: 1.5px;

      text-transform: uppercase;

      margin-bottom: 10px;
    }

    .package-card h3 {
      font-size: 32px;

      margin-bottom: 18px;
    }

    .package-price {
      margin-bottom: 18px;
    }

    .package-price span {
      display: block;

      color: #d4af37;

      font-size: 34px;

      font-weight: 700;
    }

    .package-price small {
      color: #777;

      font-size: 11px;
    }

    .package-desc {
      color: #aaa;

      font-size: 14px;

      line-height: 1.7;

      min-height: 70px;
    }


    /* DIVIDER */

    .package-divider {
      height: 1px;

      background: rgba(255,255,255,0.08);

      margin: 25px 0;
    }


    /* LIST */

    .package-card h4 {
      font-size: 14px;

      margin-bottom: 18px;

      color: #ddd;
    }

    .package-card ul {
      list-style: none;

      margin-bottom: 30px;

      flex: 1;
    }

    .package-card li {
      display: flex;
      align-items: flex-start;

      gap: 10px;

      color: #bbb;

      font-size: 14px;

      line-height: 1.5;

      margin-bottom: 13px;
    }

    .package-card li i {
      color: #d4af37;

      font-size: 12px;

      margin-top: 4px;
    }


    /* BUTTON */

    .pkg-btn {
      width: 100%;

      padding: 14px 20px;

      border-radius: 50px;

      font-size: 14px;

      font-weight: 600;

      cursor: pointer;

      transition: 0.3s ease;
    }

    .btn-outline-gold {
      background: transparent;

      border: 1px solid #d4af37;

      color: #d4af37;
    }

    .btn-outline-gold:hover {
      background: #d4af37;

      color: #111;
    }

    .btn-gold {
      background: #d4af37;

      border: 1px solid #d4af37;

      color: #111;
    }

    .btn-gold:hover {
      background: #e5c04a;
    }


    /* CUSTOM QUOTE */

    .custom-quote {
      text-align: center;

      margin-top: 40px;

      color: #999;

      font-size: 14px;
    }

    .custom-quote a {
      color: #d4af37;

      text-decoration: none;

      margin-left: 5px;
    }


    /* TABLET */

    @media (max-width: 1050px) {

      .package-slide {
        flex: 0 0 calc((100% - 25px) / 2);
      }

    }


    /* MOBILE */

    @media (max-width: 650px) {

      .packages-page {
        padding: 60px 20px;
      }

      .section-head {
        margin-bottom: 35px;
      }

      .section-title {
        font-size: 38px;
      }

      .section-subtitle {
        font-size: 14px;
      }

      .packages-slider {
        gap: 15px;

        padding-left: 0;
        padding-right: 0;

        scroll-snap-type: x mandatory;
      }

      .package-slide {
        flex: 0 0 100%;
      }

      .package-card {
        min-height: 540px;

        padding: 28px 24px;

        border-radius: 18px;
      }

      .package-card h3 {
        font-size: 28px;
      }

      .package-price span {
        font-size: 30px;
      }

    }
  </style>
</head>


<body>

  <main class="packages-page">

    <!-- HEADER -->

    <div class="section-head">

      <p class="eyebrow">
        <span class="eyebrow-dot"></span>
        Investment
      </p>

      <h1 class="section-title">
        Branding Packages
      </h1>

      <p class="section-subtitle">
        Choose the right branding solution for your business
        and build a visual identity that people remember.
      </p>

    </div>


    <!-- MANUAL SLIDER -->

    <div class="packages-slider" id="packagesSlider">


      <!-- STARTER -->

      <div class="package-slide">

        <div class="package-card">

          <span class="package-label">
            For New Brands
          </span>

          <h3>Starter</h3>

          <p class="package-price">
            <span>₹4,999</span>
            <small>Starting from</small>
          </p>

          <p class="package-desc">
            For new businesses that need a professional
            visual identity.
          </p>

          <div class="package-divider"></div>

          <h4>What's Included</h4>

          <ul>
            <li>
              <i class="fa-solid fa-check"></i>
              Logo Design
            </li>

            <li>
              <i class="fa-solid fa-check"></i>
              Logo Variations
            </li>

            <li>
              <i class="fa-solid fa-check"></i>
              Color Palette
            </li>

            <li>
              <i class="fa-solid fa-check"></i>
              Typography
            </li>

            <li>
              <i class="fa-solid fa-check"></i>
              Basic Brand Assets
            </li>

            <li>
              <i class="fa-solid fa-check"></i>
              Final Export Files
            </li>
          </ul>

          <button class="pkg-btn btn-outline-gold">
            Choose Starter
          </button>

        </div>

      </div>


      <!-- PROFESSIONAL -->

      <div class="package-slide">

        <div class="package-card package-featured">

          <span class="package-badge">
            Most Popular
          </span>

          <span class="package-label">
            For Growing Businesses
          </span>

          <h3>Professional</h3>

          <p class="package-price">
            <span>₹9,999</span>
            <small>Starting from</small>
          </p>

          <p class="package-desc">
            Build a complete and consistent visual identity
            across your digital and physical presence.
          </p>

          <div class="package-divider"></div>

          <h4>Everything in Starter, plus</h4>

          <ul>
            <li>
              <i class="fa-solid fa-check"></i>
              Brand Guidelines
            </li>

            <li>
              <i class="fa-solid fa-check"></i>
              Business Card
            </li>

            <li>
              <i class="fa-solid fa-check"></i>
              Social Media Templates
            </li>

            <li>
              <i class="fa-solid fa-check"></i>
              Profile Branding
            </li>

            <li>
              <i class="fa-solid fa-check"></i>
              Packaging / Marketing Asset
            </li>

            <li>
              <i class="fa-solid fa-check"></i>
              Professional Brand Mockups
            </li>

            <li>
              <i class="fa-solid fa-check"></i>
              Brand Presentation
            </li>
          </ul>

          <button class="pkg-btn btn-gold">
            Choose Professional
          </button>

        </div>

      </div>


      <!-- PREMIUM -->

      <div class="package-slide">

        <div class="package-card">

          <span class="package-label">
            Complete Brand Solution
          </span>

          <h3>Premium</h3>

          <p class="package-price">
            <span>₹17,999</span>
            <small>Starting from</small>
          </p>

          <p class="package-desc">
            Complete brand development for businesses
            looking for a strong premium market presence.
          </p>

          <div class="package-divider"></div>

          <h4>Complete Brand Development</h4>

          <ul>
            <li>
              <i class="fa-solid fa-check"></i>
              Complete Brand Identity
            </li>

            <li>
              <i class="fa-solid fa-check"></i>
              Advanced Logo System
            </li>

            <li>
              <i class="fa-solid fa-check"></i>
              Brand Guidelines
            </li>

            <li>
              <i class="fa-solid fa-check"></i>
              Social Media Branding
            </li>

            <li>
              <i class="fa-solid fa-check"></i>
              Packaging Design
            </li>

            <li>
              <i class="fa-solid fa-check"></i>
              Marketing Materials
            </li>

            <li>
              <i class="fa-solid fa-check"></i>
              Multiple Brand Mockups
            </li>

            <li>
              <i class="fa-solid fa-check"></i>
              Brand Presentation
            </li>
          </ul>

          <button class="pkg-btn btn-outline-gold">
            Build My Brand
            <i class="fa-solid fa-arrow-right"></i>
          </button>

        </div>

      </div>


    </div>


    <!-- CUSTOM QUOTE -->

    <p class="custom-quote">
      Need something custom?
      <a href="#">
        Request a Custom Quote →
      </a>
    </p>

  </main>


  <script>

    const slider = document.getElementById("packagesSlider");

    let isDown = false;
    let startX;
    let scrollLeft;


    /* DESKTOP MOUSE DRAG */

    slider.addEventListener("mousedown", (e) => {

      isDown = true;

      slider.style.scrollBehavior = "auto";

      startX = e.pageX - slider.offsetLeft;

      scrollLeft = slider.scrollLeft;

    });


    slider.addEventListener("mouseleave", () => {

      isDown = false;

      slider.style.scrollBehavior = "smooth";

    });


    slider.addEventListener("mouseup", () => {

      isDown = false;

      slider.style.scrollBehavior = "smooth";

    });


    slider.addEventListener("mousemove", (e) => {

      if (!isDown) return;

      e.preventDefault();

      const x = e.pageX - slider.offsetLeft;

      const walk = (x - startX) * 1.5;

      slider.scrollLeft = scrollLeft - walk;

    });


  </script>

</body>
</html>

');
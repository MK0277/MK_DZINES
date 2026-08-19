document. write('
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Branding Packages | MK Dzines</title>

    <!-- Font Awesome -->
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
    >

    <style>

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            background: #0b0b0b;
            color: #ffffff;
            font-family: Arial, Helvetica, sans-serif;
            overflow-x: hidden;
        }

        /* =========================
           PAGE
        ========================= */

        .packages-page {
            width: 100%;
            max-width: 1450px;
            margin: 0 auto;
            padding: 90px 5%;
        }


        /* =========================
           SECTION HEADER
        ========================= */

        .section-head {
            text-align: center;
            margin-bottom: 55px;
        }

        .eyebrow {
            color: #d4af37;
            font-size: 13px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 14px;
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
            font-size: clamp(36px, 5vw, 62px);
            line-height: 1.1;
            margin-bottom: 18px;
        }

        .section-subtitle {
            max-width: 680px;
            margin: auto;
            color: #999999;
            font-size: 16px;
            line-height: 1.7;
        }


        /* =========================
           MANUAL SLIDER
        ========================= */

        .packages-slider {
            display: flex;
            gap: 25px;

            width: 100%;

            overflow-x: auto;
            overflow-y: hidden;

            scroll-snap-type: x mandatory;
            scroll-behavior: smooth;

            scrollbar-width: none;
            -ms-overflow-style: none;

            padding: 10px 5px 30px;

            cursor: grab;

            user-select: none;
            -webkit-user-select: none;

            -webkit-overflow-scrolling: touch;
        }

        /* Hide scrollbar completely */

        .packages-slider::-webkit-scrollbar {
            display: none;
            width: 0;
            height: 0;
        }

        .packages-slider:active {
            cursor: grabbing;
        }


        /* =========================
           SLIDE
        ========================= */

        .package-slide {
            flex: 0 0 calc((100% - 50px) / 3);

            min-width: 0;

            scroll-snap-align: start;
        }


        /* =========================
           PACKAGE CARD
        ========================= */

        .package-card {
            position: relative;

            min-height: 570px;
            height: 100%;

            padding: 35px;

            background: #111111;

            border: 1px solid rgba(212, 175, 55, 0.25);

            border-radius: 22px;

            display: flex;
            flex-direction: column;

            transition:
                transform 0.3s ease,
                border-color 0.3s ease,
                box-shadow 0.3s ease;
        }

        .package-card:hover {
            transform: translateY(-6px);

            border-color: rgba(212, 175, 55, 0.65);

            box-shadow:
                0 15px 45px rgba(0, 0, 0, 0.35);
        }


        /* =========================
           FEATURED PACKAGE
        ========================= */

        .package-featured {
            border-color: #d4af37;

            box-shadow:
                0 0 45px rgba(212, 175, 55, 0.08);
        }


        /* =========================
           BADGE
        ========================= */

        .package-badge {
            display: inline-block;

            width: fit-content;

            padding: 7px 14px;

            margin-bottom: 20px;

            background: #d4af37;
            color: #111111;

            border-radius: 50px;

            font-size: 10px;
            font-weight: 700;

            text-transform: uppercase;
            letter-spacing: 1px;
        }


        /* =========================
           PACKAGE LABEL
        ========================= */

        .package-label {
            display: block;

            color: #777777;

            font-size: 11px;
            font-weight: 600;

            text-transform: uppercase;

            letter-spacing: 1.5px;

            margin-bottom: 10px;
        }


        /* =========================
           PACKAGE TITLE
        ========================= */

        .package-card h3 {
            font-size: 32px;

            line-height: 1.2;

            margin-bottom: 18px;
        }


        /* =========================
           PRICE
        ========================= */

        .package-price {
            margin-bottom: 18px;
        }

        .package-price span {
            display: block;

            color: #d4af37;

            font-size: 34px;
            font-weight: 700;

            line-height: 1.2;
        }

        .package-price small {
            display: block;

            margin-top: 5px;

            color: #777777;

            font-size: 11px;

            text-transform: uppercase;

            letter-spacing: 0.5px;
        }


        /* =========================
           DESCRIPTION
        ========================= */

        .package-desc {
            min-height: 70px;

            color: #aaaaaa;

            font-size: 14px;

            line-height: 1.7;
        }


        /* =========================
           DIVIDER
        ========================= */

        .package-divider {
            width: 100%;
            height: 1px;

            margin: 25px 0;

            background: rgba(255, 255, 255, 0.08);
        }


        /* =========================
           INCLUDED TITLE
        ========================= */

        .package-card h4 {
            color: #dddddd;

            font-size: 14px;

            margin-bottom: 18px;
        }


        /* =========================
           FEATURES
        ========================= */

        .package-card ul {
            list-style: none;

            flex: 1;

            margin-bottom: 30px;
        }

        .package-card li {
            display: flex;

            align-items: flex-start;

            gap: 10px;

            color: #bbbbbb;

            font-size: 14px;

            line-height: 1.5;

            margin-bottom: 13px;
        }

        .package-card li i {
            color: #d4af37;

            font-size: 11px;

            margin-top: 5px;

            flex-shrink: 0;
        }


        /* =========================
           BUTTON
        ========================= */

        .pkg-btn {
            width: 100%;

            min-height: 48px;

            padding: 13px 20px;

            border-radius: 50px;

            font-size: 14px;

            font-weight: 600;

            cursor: pointer;

            transition: all 0.3s ease;
        }

        .btn-outline-gold {
            background: transparent;

            border: 1px solid #d4af37;

            color: #d4af37;
        }

        .btn-outline-gold:hover {
            background: #d4af37;

            color: #111111;
        }

        .btn-gold {
            background: #d4af37;

            border: 1px solid #d4af37;

            color: #111111;
        }

        .btn-gold:hover {
            background: #e4c04a;

            border-color: #e4c04a;
        }


        /* =========================
           CUSTOM QUOTE
        ========================= */

        .custom-quote {
            text-align: center;

            margin-top: 35px;

            color: #888888;

            font-size: 14px;
        }

        .custom-quote a {
            color: #d4af37;

            text-decoration: none;

            margin-left: 5px;

            transition: opacity 0.3s ease;
        }

        .custom-quote a:hover {
            opacity: 0.75;
        }


        /* =========================
           TABLET
        ========================= */

        @media (max-width: 1050px) {

            .package-slide {
                flex: 0 0 calc((100% - 25px) / 2);
            }

        }


        /* =========================
           MOBILE
        ========================= */

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


        <!-- =========================
             HEADER
        ========================= -->

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



        <!-- =========================
             PACKAGES SLIDER
             
             NO ARROWS
             NO DOTS
             NO PAGINATION
             NO AUTO SLIDE
        ========================= -->

        <div
            class="packages-slider"
            id="packagesSlider"
        >


            <!-- =========================
                 STARTER
            ========================= -->

            <div class="package-slide">

                <div class="package-card">

                    <span class="package-label">
                        For New Brands
                    </span>

                    <h3>
                        Starter
                    </h3>

                    <p class="package-price">
                        <span>₹4,999</span>
                        <small>Starting from</small>
                    </p>

                    <p class="package-desc">
                        For new businesses that need a professional
                        visual identity.
                    </p>

                    <div class="package-divider"></div>

                    <h4>
                        What's Included
                    </h4>

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

                    <button
                        type="button"
                        class="pkg-btn btn-outline-gold"
                    >
                        Choose Starter
                    </button>

                </div>

            </div>



            <!-- =========================
                 PROFESSIONAL
            ========================= -->

            <div class="package-slide">

                <div class="package-card package-featured">

                    <span class="package-badge">
                        Most Popular
                    </span>

                    <span class="package-label">
                        For Growing Businesses
                    </span>

                    <h3>
                        Professional
                    </h3>

                    <p class="package-price">
                        <span>₹9,999</span>
                        <small>Starting from</small>
                    </p>

                    <p class="package-desc">
                        Build a complete and consistent visual identity
                        across your digital and physical presence.
                    </p>

                    <div class="package-divider"></div>

                    <h4>
                        Everything in Starter, plus
                    </h4>

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

                    <button
                        type="button"
                        class="pkg-btn btn-gold"
                    >
                        Choose Professional
                    </button>

                </div>

            </div>



            <!-- =========================
                 PREMIUM
            ========================= -->

            <div class="package-slide">

                <div class="package-card">

                    <span class="package-label">
                        Complete Brand Solution
                    </span>

                    <h3>
                        Premium
                    </h3>

                    <p class="package-price">
                        <span>₹17,999</span>
                        <small>Starting from</small>
                    </p>

                    <p class="package-desc">
                        Complete brand development for businesses
                        looking for a strong premium market presence.
                    </p>

                    <div class="package-divider"></div>

                    <h4>
                        Complete Brand Development
                    </h4>

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

                    <button
                        type="button"
                        class="pkg-btn btn-outline-gold"
                    >
                        Build My Brand
                        <i class="fa-solid fa-arrow-right"></i>
                    </button>

                </div>

            </div>


        </div>



        <!-- =========================
             CUSTOM QUOTE
        ========================= -->

        <p class="custom-quote">

            Need something custom?

            <a href="#">
                Request a Custom Quote →
            </a>

        </p>


    </main>



    <!-- =========================
         MANUAL DRAG / SWIPE ONLY
         
         NO AUTO SLIDE
         NO ARROWS
         NO PAGINATION
    ========================= -->

    <script>

        const slider =
            document.getElementById("packagesSlider");

        let isDown = false;

        let startX = 0;

        let scrollLeft = 0;


        /* =========================
           MOUSE DOWN
        ========================= */

        slider.addEventListener("mousedown", function (e) {

            isDown = true;

            slider.style.scrollBehavior = "auto";

            startX =
                e.pageX -
                slider.offsetLeft;

            scrollLeft =
                slider.scrollLeft;

        });


        /* =========================
           MOUSE UP
        ========================= */

        slider.addEventListener("mouseup", function () {

            isDown = false;

            slider.style.scrollBehavior = "smooth";

        });


        /* =========================
           MOUSE LEAVE
        ========================= */

        slider.addEventListener("mouseleave", function () {

            isDown = false;

            slider.style.scrollBehavior = "smooth";

        });


        /* =========================
           MOUSE MOVE
        ========================= */

        slider.addEventListener("mousemove", function (e) {

            if (!isDown) return;

            e.preventDefault();

            const x =
          
'):
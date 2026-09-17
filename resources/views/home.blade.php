<!DOCTYPE html>
<html lang="id">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Nopal | Full Stack Developer</title>

    <meta
        name="description"
        content="Portfolio Nopal - Full Stack Developer"
    >

    <link
        rel="stylesheet"
        href="{{ asset('css/style.css') }}"
    >

</head>


<body>

    <!-- =====================================================
         NAVBAR
    ====================================================== -->

    <header class="navbar">

        <div class="nav-container">

            <a href="#home" class="logo">
                NOPAL<span>.</span>
            </a>


            <nav class="nav-menu">

                <a
                    href="#home"
                    class="nav-link active"
                >
                    Home
                </a>

                <a
                    href="#about"
                    class="nav-link"
                >
                    About
                </a>

                <a
                    href="#skills"
                    class="nav-link"
                >
                    Skills
                </a>

                <a
                    href="#projects"
                    class="nav-link"
                >
                    Projects
                </a>

                <a
                    href="#contact"
                    class="nav-link"
                >
                    Contact
                </a>

            </nav>


            <button
                class="theme-button"
                id="themeButton"
                aria-label="Theme"
            >
                ◉
            </button>


            <button
                class="mobile-menu-button"
                id="mobileMenuButton"
                aria-label="Menu"
            >
                ☰
            </button>

        </div>

    </header>



    <main>

        <!-- =================================================
             HERO
        ================================================== -->

        <section
            class="hero"
            id="home"
        >

            <div class="hero-bg"></div>

            <div class="hero-grid"></div>

            <div class="hero-glow hero-glow-one"></div>

            <div class="hero-glow hero-glow-two"></div>


            <div class="hero-container">


                <!-- LEFT -->

                <div class="hero-content">

                    <div class="eyebrow">

                        <span></span>

                        HELLO, I'M

                        <i></i>

                    </div>


                    <h1>

                        NAUFAL

                        <strong>
                            FADHIL ASAD
                        </strong>

                    </h1>


                    <p class="hero-description">

                        Saya naufal lebih sering di panggil nopal, saya memulai belajar
                        di salah satu universitas di jogja pada tahun 2023, saya belajar
                        sebagai developer saya mendapat banyak pengalaman dan skill,
                        saya ingin membagikan pengalaman saya kepada orang lain.

                    </p>


                    <div class="hero-buttons">

                        <a
                            href="#projects"
                            class="button button-primary"
                        >
                            Lihat Project

                            <span>
                                →
                            </span>
                        </a>


                        <a
                            href="#contact"
                            class="button button-outline"
                        >
                            Hubungi Saya
                        </a>

                    </div>


                    <div class="social-links">

                        <a href="#" aria-label="Github">
                            GH
                        </a>

                        <a href="#" aria-label="LinkedIn">
                            in
                        </a>

                        <a href="#" aria-label="Instagram">
                            ◎
                        </a>

                        <a href="#" aria-label="Email">
                            ✉
                        </a>

                    </div>

                </div>



                <!-- RIGHT PHOTO -->

                <div
                    class="hero-visual"
                    id="heroVisual"
                >

                    <div class="hero-orb orb-one"></div>

                    <div class="hero-orb orb-two"></div>


                    <div class="hero-ring hero-ring-one"></div>

                    <div class="hero-ring hero-ring-two"></div>


                    <div class="photo-particles">

                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>

                    </div>


                    <div
                        class="photo-card"
                        id="photoCard"
                    >

                        <div class="photo-background"></div>


                        <img
                            src="{{ asset('images/profile.jpeg') }}"
                            alt="Foto Nopal"
                            class="profile-photo"
                            id="profilePhoto"
                        >


                        <div class="photo-blue-light"></div>

                        <div class="photo-fade"></div>


                        <div class="photo-border"></div>

                    </div>


                    <div class="photo-label label-one">

                        <span class="status-dot"></span>

                        AVAILABLE

                    </div>


                    <div class="photo-label label-two">

                        <span>
                            &lt;/&gt;
                        </span>

                        FULL STACK

                    </div>


                    <div class="photo-number">
                        01
                    </div>

                </div>

            </div>


            <div class="scroll-indicator">

                <span></span>

                SCROLL TO EXPLORE

            </div>

        </section>



        <!-- =================================================
             ABOUT
        ================================================== -->

        <section
            class="section about-section"
            id="about"
        >

            <div class="section-container">


                <div class="section-title">

                    <div class="section-eyebrow">
                        ABOUT ME
                        <span></span>
                    </div>


                    <h2>

                        Kenalan

                        <strong>
                            Sedikit.
                        </strong>

                    </h2>

                </div>


                <div class="about-content">


                    <div class="about-text">

                        <p>

                            Saya adalah seorang developer yang
                            tertarik pada pengembangan website
                            modern dan interaktif.

                        </p>


                        <p>

                            Saya suka menggabungkan teknologi
                            backend dengan desain frontend yang
                            menarik dan user friendly.

                        </p>


                        <a
                            href="#contact"
                            class="small-button"
                        >

                            Lebih Lanjut

                            <span>
                                →
                            </span>

                        </a>

                    </div>



                    <!-- =================================================
                         LAPTOP 3D
                         BAGIAN INI YANG DIGUNAKAN UNTUK LAPTOP
                    ================================================== -->

                    <div
                        class="laptop-container"
                        id="laptopContainer"
                    >

                        <div
                            class="laptop-glow"
                        ></div>


                        <canvas
                            id="laptopCanvas"
                        ></canvas>


                        <div class="laptop-floor"></div>

                    </div>



                    <div class="info-card">


                        <div class="info-item">

                            <div class="info-icon">
                                👤
                            </div>

                            <div>

                                <span>
                                    Nama
                                </span>

                                <strong>
                                    Nopal
                                </strong>

                            </div>

                        </div>


                        <div class="info-item">

                            <div class="info-icon">
                                📍
                            </div>

                            <div>

                                <span>
                                    Lokasi
                                </span>

                                <strong>
                                    Indonesia
                                </strong>

                            </div>

                        </div>


                        <div class="info-item">

                            <div class="info-icon">
                                ✦
                            </div>

                            <div>

                                <span>
                                    Pengalaman
                                </span>

                                <strong>
                                    1+ Tahun
                                </strong>

                            </div>

                        </div>


                        <div class="info-item">

                            <div class="info-icon">
                                ✉
                            </div>

                            <div>

                                <span>
                                    Email
                                </span>

                                <strong>
                                    naufalfadhilasad96@gmail.com
                                </strong>

                            </div>

                        </div>


                    </div>

                </div>

            </div>

        </section>



        <!-- =================================================
             SKILLS
        ================================================== -->

        <section
            class="section skills-section"
            id="skills"
        >

            <div class="section-container skills-layout">


                <div class="skills-heading">

                    <div class="section-eyebrow">

                        MY SKILLS

                        <span></span>

                    </div>


                    <h2>

                        Teknologi

                        <br>

                        Yang

                        <strong>
                            Saya Gunakan.
                        </strong>

                    </h2>


                    <p>

                        Beberapa teknologi yang saya gunakan
                        dalam membangun website dan aplikasi.

                    </p>

                </div>



                <div class="skills-grid">


                    <div class="skill-card">

                        <div class="skill-logo laravel">
                            L
                        </div>

                        <strong>
                            Laravel
                        </strong>

                        <span>
                            PHP Framework
                        </span>

                    </div>


                    <div class="skill-card">

                        <div class="skill-logo php">
                            php
                        </div>

                        <strong>
                            PHP
                        </strong>

                        <span>
                            Backend Development
                        </span>

                    </div>


                    <div class="skill-card">

                        <div class="skill-logo javascript">
                            JS
                        </div>

                        <strong>
                            JavaScript
                        </strong>

                        <span>
                            Web Development
                        </span>

                    </div>


                    <div class="skill-card">

                        <div class="skill-logo typescript">
                            TS
                        </div>

                        <strong>
                            TypeScript
                        </strong>

                        <span>
                            Programming
                        </span>

                    </div>


                    <div class="skill-card">

                        <div class="skill-logo three">
                            3D
                        </div>

                        <strong>
                            Three.js
                        </strong>

                        <span>
                            3D Web
                        </span>

                    </div>


                    <div class="skill-card">

                        <div class="skill-logo gsap">
                            G
                        </div>

                        <strong>
                            GSAP
                        </strong>

                        <span>
                            Animation
                        </span>

                    </div>


                    <div class="skill-card">

                        <div class="skill-logo mysql">
                            SQL
                        </div>

                        <strong>
                            MySQL
                        </strong>

                        <span>
                            Database
                        </span>

                    </div>


                    <div class="skill-card">

                        <div class="skill-logo html">
                            5
                        </div>

                        <strong>
                            HTML
                        </strong>

                        <span>
                            Frontend
                        </span>

                    </div>


                    <div class="skill-card">

                        <div class="skill-logo css">
                            #
                        </div>

                        <strong>
                            CSS
                        </strong>

                        <span>
                            UI Design
                        </span>

                    </div>


                    <div class="skill-card">

                        <div class="skill-logo git">
                            ◆
                        </div>

                        <strong>
                            Git
                        </strong>

                        <span>
                            Version Control
                        </span>

                    </div>


                </div>

            </div>

        </section>



        <!-- =================================================
             PROJECTS
        ================================================== -->

        <section
            class="section projects-section"
            id="projects"
        >

            <div class="section-container">


                <div class="projects-heading">

                    <div>

                        <div class="section-eyebrow">

                            MY PROJECTS

                            <span></span>

                        </div>


                        <h2>

                            Karya Terbaik

                            <strong>
                                Saya.
                            </strong>

                        </h2>

                    </div>


                    <p>

                        Beberapa project yang pernah saya
                        kerjakan dalam perjalanan sebagai
                        developer.

                    </p>


                    <a
                        href="#"
                        class="small-button"
                    >

                        Lihat Semua Project

                        <span>
                            →
                        </span>

                    </a>

                </div>



                <div class="projects-grid">


                    <article class="project-card">

                        <div class="project-image">

                            <div class="fake-screen">
                                E-COMMERCE
                            </div>

                            <span>
                                01
                            </span>

                        </div>


                        <div class="project-content">

                            <h3>
                                E-Commerce
                            </h3>

                            <p>

                                Website e-commerce dengan
                                sistem authentication dan
                                database.

                            </p>

                            <a href="#">
                                →
                            </a>

                        </div>

                    </article>



                    <article class="project-card">

                        <div class="project-image">

                            <div class="fake-screen">
                                COMPANY
                            </div>

                            <span>
                                02
                            </span>

                        </div>


                        <div class="project-content">

                            <h3>
                                Company Profile
                            </h3>

                            <p>

                                Website company profile modern
                                dengan desain responsive dan
                                interaktif.

                            </p>

                            <a href="#">
                                →
                            </a>

                        </div>

                    </article>



                    <article class="project-card">

                        <div class="project-image">

                            <div class="fake-screen">
                                3D PORTFOLIO
                            </div>

                            <span>
                                03
                            </span>

                        </div>


                        <div class="project-content">

                            <h3>
                                3D Portfolio
                            </h3>

                            <p>

                                Portfolio interaktif menggunakan
                                Laravel, Three.js dan GSAP.

                            </p>

                            <a href="#">
                                →
                            </a>

                        </div>

                    </article>


                </div>

            </div>

        </section>



        <!-- =================================================
             CONTACT
        ================================================== -->

        <section
            class="contact-section"
            id="contact"
        >

            <div class="section-container contact-container">


                <div>

                    <div class="section-eyebrow">

                        LET'S TALK

                        <span></span>

                    </div>


                    <h2>

                        Terhubung

                        <br>

                        Dengan

                        <strong>
                            Saya.
                        </strong>

                    </h2>

                </div>


                <p>

                    Punya project atau ingin bekerja sama?
                    Silakan hubungi saya.

                </p>


                <a
                    href="mailto:hello@nopal.dev"
                    class="email-button"
                >

                    <span>
                        ✉
                    </span>

                    naufalfadahilasad96@gmail.com

                    <strong>
                        →
                    </strong>

                </a>


                <div class="follow-card">

                    <span>
                        Follow Me
                    </span>

                    <div>

                        <a href="#">
                            GH
                        </a>

                        <a href="#">
                            in
                        </a>

                        <a href="#">
                            ◎
                        </a>

                        <a href="#">
                            ✉
                        </a>

                    </div>

                </div>

            </div>

        </section>

    </main>



    <!-- =====================================================
         FOOTER
    ====================================================== -->

    <footer>

        <div class="footer-logo">
            NOPAL<span>.</span>
        </div>


        <div class="copyright">
            © 2026 Nopal. All rights reserved.
        </div>


        <div class="footer-made">
            Built with
            <span>♥</span>
            and Code
        </div>

    </footer>



    <!-- THREE.JS -->

    <script
        type="importmap"
    >
    {
        "imports": {
            "three":
            "https://cdn.jsdelivr.net/npm/three@0.178.0/build/three.module.js",

            "three/addons/":
            "https://cdn.jsdelivr.net/npm/three@0.178.0/examples/jsm/"
        }
    }
    </script>


    <script
        type="module"
        src="{{ asset('js/laptop.js') }}"
    ></script>


</body>

</html>
document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // LOADER
    // =========================
    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {
        setTimeout(() => {
            loader.classList.add("hide");
        }, 500);
    });


    // =========================
    // MOBILE MENU
    // =========================
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-menu a");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {
            menuToggle.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        // ปิดเมนูเมื่อกดลิงก์
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                menuToggle.classList.remove("active");
                navMenu.classList.remove("active");
            });
        });
    }


    // =========================
    // SCROLL PROGRESS BAR
    // =========================
    const progressFill = document.querySelector(".progress-fill");

    function updateProgress() {
        const scrollTop = window.scrollY;
        const documentHeight =
            document.documentElement.scrollHeight - window.innerHeight;

        if (documentHeight > 0) {
            const progress = (scrollTop / documentHeight) * 100;

            if (progressFill) {
                progressFill.style.width = `${progress}%`;
            }
        }
    }

    window.addEventListener("scroll", updateProgress);
    updateProgress();


    // =========================
    // SCROLL REVEAL
    // =========================
    const pages = document.querySelectorAll(".portfolio-page");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    pages.forEach(page => {
        observer.observe(page);
    });


    // =========================
    // BACK TO TOP BUTTON
    // =========================
    const backToTop = document.querySelector(".back-to-top");

    if (backToTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }

        });

        backToTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });
    }


    // =========================
    // ACTIVE NAVIGATION
    // =========================
    const sections = document.querySelectorAll(".portfolio-page");

    const sectionObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const currentId = entry.target.getAttribute("id");

                    navLinks.forEach(link => {

                        link.classList.remove("active");

                        if (link.getAttribute("href") === `#${currentId}`) {
                            link.classList.add("active");
                        }

                    });

                }

            });

        },
        {
            threshold: 0.55
        }
    );

    sections.forEach(section => {
        sectionObserver.observe(section);
    });


    // =========================
    // SMOOTH SCROLL
    // =========================
    navLinks.forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId && targetId.startsWith("#")) {

                const target = document.querySelector(targetId);

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }

        });

    });

});

```javascript
document.addEventListener("DOMContentLoaded", () => {

    // ==============================
    // รูป Portfolio จาก GitHub
    // ==============================

    const folder =
        "https://raw.githubusercontent.com/thanasorn08/Portfolio/main/" +
        encodeURIComponent("นางสาวธนสร เกตุฉิม เลขที่38");

    document.querySelectorAll("img[data-page]").forEach((img) => {

        const number = img.dataset.page;

        img.src = `${folder}/${number}.png`;

        img.onerror = () => {
            console.error(`ไม่พบรูป ${number}.png`);
        };

    });


    // ==============================
    // LOADER
    // ==============================

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            if (loader) {
                loader.classList.add("hide");
            }

        }, 500);

    });


    // ==============================
    // MOBILE MENU
    // ==============================

    const menuToggle =
        document.querySelector(".menu-toggle");

    const navMenu =
        document.querySelector(".nav-menu");

    const navLinks =
        document.querySelectorAll(".nav-menu a");


    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {

            menuToggle.classList.toggle("active");
            navMenu.classList.toggle("active");

        });


        navLinks.forEach((link) => {

            link.addEventListener("click", () => {

                menuToggle.classList.remove("active");
                navMenu.classList.remove("active");

            });

        });

    }


    // ==============================
    // PROGRESS BAR
    // ==============================

    const progressFill =
        document.querySelector(".progress-fill");


    function updateProgress() {

        const scrollTop = window.scrollY;

        const height =
            document.documentElement.scrollHeight -
            window.innerHeight;


        if (height <= 0) return;


        const progress =
            (scrollTop / height) * 100;


        if (progressFill) {
            progressFill.style.width =
                `${progress}%`;
        }

    }


    window.addEventListener(
        "scroll",
        updateProgress,
        { passive: true }
    );

    updateProgress();


    // ==============================
    // SCROLL ANIMATION
    // ==============================

    const pages =
        document.querySelectorAll(".portfolio-page");


    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    pages.forEach((page) => {

        observer.observe(page);

    });


    // ==============================
    // BACK TO TOP
    // ==============================

    const backToTop =
        document.querySelector(".back-to-top");


    if (backToTop) {

        window.addEventListener(
            "scroll",
            () => {

                if (window.scrollY > 500) {

                    backToTop.classList.add("show");

                } else {

                    backToTop.classList.remove("show");

                }

            },
            { passive: true }
        );


        backToTop.addEventListener(
            "click",
            () => {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }


    // ==============================
    // ACTIVE NAV
    // ==============================

    const sections =
        document.querySelectorAll(".portfolio-page");


    const sectionObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) return;


                    const id =
                        entry.target.id;


                    navLinks.forEach((link) => {

                        link.classList.remove("active");


                        if (
                            link.getAttribute("href") ===
                            `#${id}`
                        ) {

                            link.classList.add("active");

                        }

                    });

                });

            },
            {
                threshold: 0.55
            }
        );


    sections.forEach((section) => {

        sectionObserver.observe(section);

    });

});
```

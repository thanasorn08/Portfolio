```javascript
document.addEventListener("DOMContentLoaded", () => {

    // =========================================
    // IMAGE LOADER
    // =========================================

    const folder = "นางสาวธนสร เกตุฉิม เลขที่38";

    const extensions = [
        ".png",
        ".jpg",
        ".jpeg",
        ".webp"
    ];

    const images = document.querySelectorAll("img[data-page]");

    images.forEach((img) => {

        const pageNumber = img.dataset.page;

        let extensionIndex = 0;

        function tryNextImage() {

            if (extensionIndex >= extensions.length) {

                console.error(
                    `ไม่พบรูปหน้า ${pageNumber}`
                );

                img.alt = `ไม่พบรูป ${pageNumber}`;

                return;
            }

            const extension = extensions[extensionIndex];

            const imagePath =
                encodeURI(
                    `${folder}/${pageNumber}${extension}`
                );

            const testImage = new Image();

            testImage.onload = () => {
                img.src = imagePath;
            };

            testImage.onerror = () => {
                extensionIndex++;
                tryNextImage();
            };

            testImage.src = imagePath;
        }

        tryNextImage();
    });


    // =========================================
    // LOADER
    // =========================================

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            if (loader) {
                loader.classList.add("hide");
            }

        }, 500);

    });


    // =========================================
    // MOBILE MENU
    // =========================================

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


    // =========================================
    // SCROLL PROGRESS
    // =========================================

    const progressFill =
        document.querySelector(".progress-fill");


    function updateProgress() {

        const scrollTop =
            window.scrollY;

        const documentHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;


        if (documentHeight <= 0) {

            if (progressFill) {
                progressFill.style.width = "0%";
            }

            return;
        }


        const progress =
            (scrollTop / documentHeight) * 100;


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


    // =========================================
    // PAGE SCROLL ANIMATION
    // =========================================

    const pages =
        document.querySelectorAll(
            ".portfolio-page"
        );


    const pageObserver =
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

        pageObserver.observe(page);

    });


    // =========================================
    // BACK TO TOP
    // =========================================

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


    // =========================================
    // ACTIVE NAVIGATION
    // =========================================

    const sections =
        document.querySelectorAll(
            ".portfolio-page"
        );


    const sectionObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }


                    const currentId =
                        entry.target.getAttribute("id");


                    navLinks.forEach((link) => {

                        link.classList.remove("active");


                        const href =
                            link.getAttribute("href");


                        if (
                            href ===
                            `#${currentId}`
                        ) {

                            link.classList.add(
                                "active"
                            );

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


    // =========================================
    // SMOOTH SCROLL
    // =========================================

    navLinks.forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                const targetId =
                    link.getAttribute("href");


                if (
                    !targetId ||
                    !targetId.startsWith("#")
                ) {
                    return;
                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) {
                    return;
                }


                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });

});
```

```javascript
/* =========================================
   THANASORN PORTFOLIO
========================================= */


/* =========================================
   IMAGE FOLDER
========================================= */

const imageFolder =
    "./สีแดงเข้ม%20โมเดิร์น%20แฟ้มสะสมผลงาน%20%20พอร์ตโฟลิโอ%20Portfolio%20เอกสาร%20A4";


/* =========================================
   MOBILE MENU
========================================= */

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");


menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


/* ปิดเมนูเมื่อกดลิงก์ */

document
    .querySelectorAll(".nav-menu a")
    .forEach((link) => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

        });

    });


/* =========================================
   BACK TO TOP
========================================= */

const backToTop =
    document.getElementById("backToTop");


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


/* =========================================
   IMAGE MODAL
========================================= */

const modal =
    document.getElementById("imageModal");

const modalImage =
    document.getElementById("modalImage");

const modalClose =
    document.getElementById("modalClose");


/* รูปที่มี class zoomable */

document
    .querySelectorAll(".zoomable")
    .forEach((image) => {

        image.addEventListener("click", () => {

            modalImage.src = image.src;
            modalImage.alt = image.alt;

            modal.classList.add("active");

            modal.setAttribute(
                "aria-hidden",
                "false"
            );

            document.body.style.overflow = "hidden";

        });

    });


/* รูปใน Gallery */

document
    .querySelectorAll(".gallery-item")
    .forEach((item) => {

        item.addEventListener("click", () => {

            const image =
                item.querySelector("img");

            modalImage.src = image.src;
            modalImage.alt = image.alt;

            modal.classList.add("active");

            modal.setAttribute(
                "aria-hidden",
                "false"
            );

            document.body.style.overflow = "hidden";

        });

    });


/* ปิด Modal */

function closeModal() {

    modal.classList.remove("active");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    modalImage.src = "";

    document.body.style.overflow = "";

}


modalClose.addEventListener(
    "click",
    closeModal
);


modal.addEventListener(
    "click",
    (event) => {

        if (event.target === modal) {

            closeModal();

        }

    }
);


/* =========================================
   ESC CLOSE MODAL
========================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            closeModal();

        }

    }
);


/* =========================================
   SMOOTH SCROLL
========================================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");

            const target =
                document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        });

    });


/* =========================================
   IMAGE ERROR HANDLER
========================================= */

document
    .querySelectorAll("img")
    .forEach((image) => {

        image.addEventListener(
            "error",
            () => {

                image.style.background =
                    "#ffffff";

                image.alt =
                    "ไม่พบรูปภาพ";

                console.warn(
                    "ไม่พบรูป:",
                    image.src
                );

            }
        );

    });


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".nav-menu a"
    );


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }

                navLinks.forEach((link) => {

                    link.classList.remove(
                        "active"
                    );

                    const href =
                        link.getAttribute("href");

                    if (
                        href ===
                        "#" + entry.target.id
                    ) {

                        link.classList.add(
                            "active"
                        );

                    }

                });

            });

        },
        {
            threshold: 0.25
        }
    );


sections.forEach((section) => {

    observer.observe(section);

});


/* =========================================
   IMAGE LAZY LOADING
========================================= */

document
    .querySelectorAll("img")
    .forEach((image) => {

        image.loading = "lazy";

    });


/* =========================================
   CONSOLE
========================================= */

console.log(
    "THANASORN Portfolio loaded successfully 💜"
);
```

```javascript
document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       📁 โฟลเดอร์รูปของเตง
       ===================================================== */

    const folderName =
        "สีแดงเข้ม โมเดิร์น แฟ้มสะสมผลงาน  พอร์ตโฟลิโอ Portfolio เอกสาร A4";

    const imageFolder =
        "./" + encodeURIComponent(folderName);


    /* =====================================================
       📚 ข้อมูล Portfolio 13 หน้า
       ===================================================== */

    const pages = [
        {
            number: "01",
            title: "",
            image: "1.png",
            id: "home",
            alt: "หน้าปก Portfolio"
        },

        {
            number: "02",
            title: "STATEMENT OF PURPOSE",
            image: "2.png",
            id: "sop",
            alt: "Statement of Purpose"
        },

        {
            number: "03",
            title: "PROFILE",
            image: "3.png",
            id: "profile",
            alt: "ประวัติส่วนตัว"
        },

        {
            number: "04",
            title: "RELATED ACTIVITIES",
            image: "4.png",
            id: "activities",
            alt: "Related Activities"
        },

        {
            number: "05",
            title: "HOSTING SKILLS",
            image: "5.png",
            id: "hosting",
            alt: "Hosting Skills"
        },

        {
            number: "06",
            title: "STUDENT COUNCIL",
            image: "6.png",
            id: "student-council",
            alt: "Student Council"
        },

        {
            number: "07",
            title: "ACTIVITY FACILITATOR",
            image: "7.png",
            id: "facilitator",
            alt: "Activity Facilitator"
        },

        {
            number: "08",
            title: "ACTIVITY",
            image: "8.png",
            id: "activity-01",
            alt: "Activity"
        },

        {
            number: "09",
            title: "ACTIVITY",
            image: "9.png",
            id: "activity-02",
            alt: "Activity"
        },

        {
            number: "10",
            title: "VOLUNTEER ACTIVITIES",
            image: "10.png",
            id: "volunteer",
            alt: "Volunteer Activities"
        },

        {
            number: "11",
            title: "SOCIAL & COMMUNITY ACTIVITIES",
            image: "11.png",
            id: "community",
            alt: "Social and Community Activities"
        },

        {
            number: "12",
            title: "CERTIFICATE",
            image: "12.png",
            id: "certificates",
            alt: "Certificate"
        },

        {
            number: "13",
            title: "",
            image: "13.png",
            id: "back-cover",
            alt: "ปกหลัง"
        }
    ];


    /* =====================================================
       🖼️ สร้างหน้า Portfolio
       ===================================================== */

    const portfolioPages =
        document.getElementById("portfolioPages");


    pages.forEach((page, index) => {

        const section =
            document.createElement("section");

        section.className =
            "portfolio-page";

        if (index === 0) {
            section.classList.add("cover-page");
        }

        if (index === pages.length - 1) {
            section.classList.add("back-cover");
        }

        section.id = page.id;


        const imagePath =
            `${imageFolder}/${page.image}`;


        section.innerHTML = `
            <div class="page-image">

                <img
                    src="${imagePath}"
                    alt="${page.alt}"
                    loading="${index === 0 ? "eager" : "lazy"}"
                >

                <div class="image-error">
                    <strong>${page.number}</strong>
                    <span>กำลังรอรูป ${page.image}</span>
                </div>

            </div>

            ${
                page.title
                ? `
                    <div class="page-label">
                        <span>${page.number}</span>
                        <h2>${page.title}</h2>
                    </div>
                `
                : ""
            }

            <div class="page-number">
                ${page.number} / 13
            </div>
        `;


        portfolioPages.appendChild(section);


        /* =================================================
           ตรวจสอบรูป
        ================================================= */

        const img =
            section.querySelector("img");

        const errorBox =
            section.querySelector(".image-error");


        img.addEventListener("load", () => {

            section.classList.add("image-loaded");

            if (errorBox) {
                errorBox.style.display = "none";
            }

            console.log(
                `✅ โหลด ${page.image} สำเร็จ`
            );

        });


        img.addEventListener("error", () => {

            section.classList.add("image-missing");

            if (errorBox) {
                errorBox.style.display = "flex";
            }

            console.warn(
                `❌ ไม่พบรูป: ${imagePath}`
            );

        });


        /* คลิกรูปเพื่อเปิดเต็มจอ */

        img.addEventListener("click", () => {

            if (
                img.complete &&
                img.naturalWidth > 0
            ) {

                openImage(
                    img.src,
                    img.alt
                );

            }

        });

    });


    /* =====================================================
       🖼️ IMAGE VIEWER
       ===================================================== */

    const modal =
        document.createElement("div");

    modal.className = "image-modal";

    modal.innerHTML = `
        <button
            class="modal-close"
            aria-label="ปิด"
        >
            ×
        </button>

        <img
            class="modal-image"
            alt=""
        >
    `;

    document.body.appendChild(modal);


    const modalImage =
        modal.querySelector(".modal-image");

    const modalClose =
        modal.querySelector(".modal-close");


    function openImage(src, alt) {

        modalImage.src = src;
        modalImage.alt = alt;

        modal.classList.add("active");

        document.body.style.overflow =
            "hidden";
    }


    function closeImage() {

        modal.classList.remove("active");

        document.body.style.overflow =
            "";
    }


    modalClose.addEventListener(
        "click",
        closeImage
    );


    modal.addEventListener(
        "click",
        (event) => {

            if (
                event.target === modal
            ) {
                closeImage();
            }

        }
    );


    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Escape") {
                closeImage();
            }

        }
    );


    /* =====================================================
       📱 MOBILE MENU
       ===================================================== */

    const menuToggle =
        document.querySelector(".menu-toggle");

    const navMenu =
        document.querySelector(".nav-menu");


    if (menuToggle && navMenu) {

        menuToggle.addEventListener(
            "click",
            () => {

                navMenu.classList.toggle("open");

                menuToggle.classList.toggle("open");

            }
        );


        navMenu
            .querySelectorAll("a")
            .forEach((link) => {

                link.addEventListener(
                    "click",
                    () => {

                        navMenu.classList.remove(
                            "open"
                        );

                        menuToggle.classList.remove(
                            "open"
                        );

                    }
                );

            });

    }


    /* =====================================================
       📊 PROGRESS BAR
       ===================================================== */

    const progressFill =
        document.querySelector(".progress-fill");


    function updateProgress() {

        if (!progressFill) {
            return;
        }

        const scrollTop =
            window.scrollY;

        const documentHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;


        const progress =
            documentHeight > 0
                ? (scrollTop / documentHeight) * 100
                : 0;


        progressFill.style.width =
            `${progress}%`;
    }


    window.addEventListener(
        "scroll",
        updateProgress
    );


    updateProgress();


    /* =====================================================
       🔝 BACK TO TOP
       ===================================================== */

    const backToTop =
        document.querySelector(".back-to-top");


    if (backToTop) {

        window.addEventListener(
            "scroll",
            () => {

                if (window.scrollY > 500) {

                    backToTop.classList.add(
                        "show"
                    );

                } else {

                    backToTop.classList.remove(
                        "show"
                    );

                }

            }
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


    /* =====================================================
       ⏳ LOADER
       ===================================================== */

    const loader =
        document.getElementById("loader");


    window.addEventListener(
        "load",
        () => {

            setTimeout(() => {

                if (loader) {
                    loader.classList.add(
                        "hidden"
                    );
                }

            }, 500);

        }
    );


    /* =====================================================
       💙 CONSOLE
       ===================================================== */

    console.log(
        "💙 Wipada Portfolio พร้อมใช้งานแล้ว"
    );

    console.log(
        "📁 Image folder:",
        folderName
    );

});
```

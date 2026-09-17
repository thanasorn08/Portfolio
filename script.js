/* =========================================
   รูปจาก Portfolio ของเพื่อน
========================================= */

const imageFolder =
    "https://thanasorn08.github.io/Portfolio/" +
    encodeURIComponent("นางสาวธนสร เกตุฉิม เลขที่38");

function getImage(number) {
    return imageFolder + "/" + number + ".png";
}


/* =========================================
   รูปหลัก
========================================= */

document.getElementById("heroImage").src = getImage(1);

document.getElementById("profileImage").src = getImage(2);

document.getElementById("educationImage").src = getImage(3);

document.getElementById("sopImage").src = getImage(4);


/* =========================================
   ACTIVITIES
========================================= */

const activityGrid =
    document.getElementById("activityGrid");

const activities = [
    {
        number: "01",
        title: "RELATED ACTIVITIES",
        description: "กิจกรรมและประสบการณ์ที่รวบรวมไว้ใน Portfolio",
        image: 5
    },
    {
        number: "02",
        title: "HOSTING SKILLS",
        description: "ประสบการณ์ด้านการสื่อสารและการนำเสนอ",
        image: 6
    },
    {
        number: "03",
        title: "STUDENT COUNCIL",
        description: "ประสบการณ์การทำงานร่วมกับผู้อื่น",
        image: 7
    },
    {
        number: "04",
        title: "ACTIVITY FACILITATOR",
        description: "การช่วยเหลือและอำนวยความสะดวกในกิจกรรม",
        image: 8
    }
];

activities.forEach((activity) => {

    const article =
        document.createElement("article");

    article.className =
        "activity-card";

    article.innerHTML = `
        <div class="activity-number">
            ${activity.number}
        </div>

        <h3>
            ${activity.title}
        </h3>

        <p>
            ${activity.description}
        </p>

        <img
            src="${getImage(activity.image)}"
            alt="${activity.title}"
            class="zoomable"
        >
    `;

    activityGrid.appendChild(article);
});


/* =========================================
   GALLERY 1 - 13
========================================= */

const galleryGrid =
    document.getElementById("galleryGrid");

for (let number = 1; number <= 13; number++) {

    const button =
        document.createElement("button");

    button.className =
        "gallery-item";

    button.type =
        "button";

    button.innerHTML = `
        <img
            src="${getImage(number)}"
            alt="Portfolio หน้า ${number}"
        >

        <span class="gallery-number">
            ${String(number).padStart(2, "0")}
        </span>
    `;

    galleryGrid.appendChild(button);
}


/* =========================================
   IMAGE MODAL
========================================= */

const modal =
    document.getElementById("imageModal");

const modalImage =
    document.getElementById("modalImage");

const modalClose =
    document.getElementById("modalClose");

function openModal(image) {

    modalImage.src = image.src;
    modalImage.alt = image.alt;

    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}

document.addEventListener(
    "click",
    (event) => {

        const image =
            event.target.closest(".zoomable");

        if (!image) return;

        openModal(image);
    }
);

document.addEventListener(
    "click",
    (event) => {

        const gallery =
            event.target.closest(".gallery-item");

        if (!gallery) return;

        const image =
            gallery.querySelector("img");

        if (image) {
            openModal(image);
        }
    }
);

function closeModal() {

    modal.classList.remove("active");

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

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {
            closeModal();
        }
    }
);


/* =========================================
   MOBILE MENU
========================================= */

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");

menuToggle.addEventListener(
    "click",
    () => {
        navMenu.classList.toggle("active");
    }
);

document
    .querySelectorAll(".nav-menu a")
    .forEach((link) => {

        link.addEventListener(
            "click",
            () => {
                navMenu.classList.remove("active");
            }
        );

    });


/* =========================================
   BACK TO TOP
========================================= */

const backToTop =
    document.getElementById("backToTop");

window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 500) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
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


/* =========================================
   NAV ACTIVE
========================================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-menu a");

const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (!entry.isIntersecting) return;

                    navLinks.forEach(
                        (link) => {

                            link.classList.remove("active");

                            if (
                                link.getAttribute("href") ===
                                "#" + entry.target.id
                            ) {
                                link.classList.add("active");
                            }

                        }
                    );

                }
            );

        },
        {
            threshold: 0.3
        }
    );

sections.forEach(
    (section) => {
        observer.observe(section);
    }
);


console.log(
    "THANASORN Portfolio พร้อมใช้งาน 💜"
);

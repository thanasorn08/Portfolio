/* =========================================
   PORTFOLIO IMAGE MAPPING
   ========================================= */

const folderName =
    "นางสาวธนสร เกตุฉิม เลขที่38";

const imageFolder =
    "./" + encodeURIComponent(folderName);

function getImage(number) {
    return imageFolder + "/" + number + ".png";
}


/* =========================================
   MAIN PAGES
   ========================================= */

// หน้าปก
const heroImage =
    document.getElementById("heroImage");

if (heroImage) {
    heroImage.src = getImage(1);
    heroImage.alt = "หน้าปก Portfolio";
}


// ประวัติส่วนตัว
const profileImage =
    document.getElementById("profileImage");

if (profileImage) {
    profileImage.src = getImage(3);
    profileImage.alt = "ประวัติส่วนตัว";
}


// Statement of Purpose
const sopImage =
    document.getElementById("sopImage");

if (sopImage) {
    sopImage.src = getImage(2);
    sopImage.alt = "Statement of Purpose";
}


/* =========================================
   EDUCATION
   ไม่มีรูปหน้าพอร์ตที่กำหนดไว้
   ========================================= */

// ถ้าใน HTML มี educationImage
// ให้ซ่อนรูปไว้ เพราะไม่มีหน้า Education
// ในลำดับพอร์ตที่เตงให้มา

const educationImage =
    document.getElementById("educationImage");

if (educationImage) {
    educationImage.style.display = "none";
}


/* =========================================
   ACTIVITIES
   ========================================= */

const activityGrid =
    document.getElementById("activityGrid");

const activities = [
    {
        number: "01",
        title: "RELATED ACTIVITIES",
        description: "กิจกรรมและประสบการณ์",
        image: 4
    },

    {
        number: "02",
        title: "HOSTING SKILLS",
        description: "ทักษะด้านการสื่อสารและการนำเสนอ",
        image: 5
    },

    {
        number: "03",
        title: "STUDENT COUNCIL",
        description: "ประสบการณ์การทำงานร่วมกับผู้อื่น",
        image: 6
    },

    {
        number: "04",
        title: "ACTIVITY FACILITATOR",
        description: "การจัดกิจกรรมและการทำงานร่วมกับผู้อื่น",
        image: 7
    }
];

if (activityGrid) {

    activityGrid.innerHTML = "";

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
}


/* =========================================
   CERTIFICATE
   ========================================= */

const certificateImage =
    document.getElementById("certificateImage");

if (certificateImage) {
    certificateImage.src = getImage(12);
    certificateImage.alt = "Certificate";
}


/* =========================================
   GALLERY
   แสดงพอร์ตครบ 1 - 13
   ========================================= */

const galleryGrid =
    document.getElementById("galleryGrid");

if (galleryGrid) {

    galleryGrid.innerHTML = "";

    for (let number = 1; number <= 13; number++) {

        const button =
            document.createElement("button");

        button.className =
            "gallery-item";

        button.type = "button";

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

    if (!modal || !modalImage) return;

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

    if (!modal || !modalImage) return;

    modal.classList.remove("active");

    modalImage.src = "";

    document.body.style.overflow = "";
}


if (modalClose) {
    modalClose.addEventListener(
        "click",
        closeModal
    );
}


if (modal) {

    modal.addEventListener(
        "click",
        (event) => {

            if (event.target === modal) {
                closeModal();
            }

        }
    );

}


document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {
            closeModal();
        }

    }
);

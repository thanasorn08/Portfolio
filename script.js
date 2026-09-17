/* =========================================
   THANASORN PORTFOLIO
   IMAGE MAPPING
========================================= */


/*
    รูปทั้งหมดอยู่ที่เว็บ Portfolio ของเพื่อน

    1  = หน้าปก
    2  = Statement of Purpose
    3  = ประวัติส่วนตัว
    4  = RELATED ACTIVITIES
    5  = HOSTING SKILLS
    6  = STUDENT COUNCIL
    7  = ACTIVITY FACILITATOR
    8  = ACTIVITY
    9  = ACTIVITY
    10 = VOLUNTEER ACTIVITIES
    11 = SOCIAL & COMMUNITY ACTIVITIES
    12 = CERTIFICATE
    13 = ปกหลัง
*/


const folderName =
    "นางสาวธนสร เกตุฉิม เลขที่38";


const imageFolder =
    "https://thanasorn08.github.io/Portfolio/" +
    encodeURIComponent(folderName);


/* สร้าง URL รูป */

function getImage(number) {

    return (
        imageFolder +
        "/" +
        number +
        ".png"
    );

}


/* =========================================
   HOME
   รูป 1 = หน้าปก
========================================= */

const heroImage =
    document.getElementById("heroImage");

if (heroImage) {

    heroImage.src =
        getImage(1);

    heroImage.alt =
        "หน้าปก Portfolio";

}


/* =========================================
   PROFILE
   รูป 3 = ประวัติส่วนตัว
========================================= */

const profileImage =
    document.getElementById("profileImage");

if (profileImage) {

    profileImage.src =
        getImage(3);

    profileImage.alt =
        "ประวัติส่วนตัว";

}


/* =========================================
   EDUCATION
========================================= */

/*
    ไม่มีรูป Education
    ในชุด 1 - 13 ที่เตงกำหนด

    ดังนั้น Education ใช้เป็น
    ส่วนข้อมูลการศึกษาแทน
*/


/* =========================================
   ACTIVITIES
========================================= */

const activityGrid =
    document.getElementById(
        "activityGrid"
    );


const activities = [

    {
        number: "01",

        title:
            "RELATED ACTIVITIES",

        description:
            "กิจกรรมและประสบการณ์ที่รวบรวมไว้ใน Portfolio",

        image: 4
    },


    {
        number: "02",

        title:
            "HOSTING SKILLS",

        description:
            "ประสบการณ์ด้านการสื่อสารและการนำเสนอ",

        image: 5
    },


    {
        number: "03",

        title:
            "STUDENT COUNCIL",

        description:
            "ประสบการณ์การทำงานร่วมกับผู้อื่น",

        image: 6
    },


    {
        number: "04",

        title:
            "ACTIVITY FACILITATOR",

        description:
            "ประสบการณ์การจัดกิจกรรมและการอำนวยความสะดวก",

        image: 7
    }

];


if (activityGrid) {

    activityGrid.innerHTML = "";


    activities.forEach(
        (activity) => {

            const article =
                document.createElement(
                    "article"
                );


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


            activityGrid.appendChild(
                article
            );

        }
    );

}


/* =========================================
   CERTIFICATE
   รูป 12 = Certificate
========================================= */

const certificateImage =
    document.getElementById(
        "certificateImage"
    );


if (certificateImage) {

    certificateImage.src =
        getImage(12);

    certificateImage.alt =
        "Certificate";

}


/* =========================================
   STATEMENT OF PURPOSE
   รูป 2 = SOP
========================================= */

const sopImage =
    document.getElementById(
        "sopImage"
    );


if (sopImage) {

    sopImage.src =
        getImage(2);

    sopImage.alt =
        "Statement of Purpose";

}


/* =========================================
   GALLERY
   รูป 1 - 13
========================================= */

const galleryGrid =
    document.getElementById(
        "galleryGrid"
    );


if (galleryGrid) {

    galleryGrid.innerHTML = "";


    for (
        let number = 1;
        number <= 13;
        number++
    ) {

        const button =
            document.createElement(
                "button"
            );


        button.type =
            "button";


        button.className =
            "gallery-item";


        button.innerHTML = `

            <img
                src="${getImage(number)}"
                alt="Portfolio หน้า ${number}"
            >

            <span class="gallery-number">
                ${String(number).padStart(2, "0")}
            </span>

        `;


        galleryGrid.appendChild(
            button
        );

    }

}


/* =========================================
   IMAGE MODAL
========================================= */

const modal =
    document.getElementById(
        "imageModal"
    );


const modalImage =
    document.getElementById(
        "modalImage"
    );


const modalClose =
    document.getElementById(
        "modalClose"
    );


function openModal(image) {

    if (
        !modal ||
        !modalImage
    ) {
        return;
    }


    modalImage.src =
        image.src;


    modalImage.alt =
        image.alt;


    modal.classList.add(
        "active"
    );


    document.body.style.overflow =
        "hidden";

}


function closeModal() {

    if (!modal) {
        return;
    }


    modal.classList.remove(
        "active"
    );


    if (modalImage) {

        modalImage.src =
            "";

    }


    document.body.style.overflow =
        "";

}


/* คลิกรูป Activity */

document.addEventListener(
    "click",
    (event) => {

        const image =
            event.target.closest(
                ".zoomable"
            );


        if (!image) {
            return;
        }


        openModal(image);

    }
);


/* คลิกรูป Gallery */

document.addEventListener(
    "click",
    (event) => {

        const galleryItem =
            event.target.closest(
                ".gallery-item"
            );


        if (!galleryItem) {
            return;
        }


        const image =
            galleryItem.querySelector(
                "img"
            );


        if (image) {

            openModal(
                image
            );

        }

    }
);


/* ปุ่มปิด */

if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeModal
    );

}


/* คลิกพื้นหลัง Modal */

if (modal) {

    modal.addEventListener(
        "click",
        (event) => {

            if (
                event.target ===
                modal
            ) {

                closeModal();

            }

        }
    );

}


/* กด ESC */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key ===
            "Escape"
        ) {

            closeModal();

        }

    }
);


/* =========================================
   MOBILE MENU
========================================= */

const menuToggle =
    document.getElementById(
        "menuToggle"
    );


const navMenu =
    document.getElementById(
        "navMenu"
    );


if (
    menuToggle &&
    navMenu
) {

    menuToggle.addEventListener(
        "click",
        () => {

            navMenu.classList.toggle(
                "active"
            );

        }
    );

}


/* ปิดเมนูหลังคลิก */

document
    .querySelectorAll(
        ".nav-menu a"
    )
    .forEach(
        (link) => {

            link.addEventListener(
                "click",
                () => {

                    if (navMenu) {

                        navMenu.classList.remove(
                            "active"
                        );

                    }

                }
            );

        }
    );


/* =========================================
   BACK TO TOP
========================================= */

const backToTop =
    document.getElementById(
        "backToTop"
    );


window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY >
            500
        ) {

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


if (backToTop) {

    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior:
                    "smooth"

            });

        }
    );

}


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

            entries.forEach(
                (entry) => {

                    if (
                        !entry.isIntersecting
                    ) {
                        return;
                    }


                    navLinks.forEach(
                        (link) => {

                            link.classList.remove(
                                "active"
                            );


                            if (
                                link.getAttribute(
                                    "href"
                                ) ===
                                "#" +
                                entry.target.id
                            ) {

                                link.classList.add(
                                    "active"
                                );

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

        observer.observe(
            section
        );

    }
);


/* =========================================
   IMAGE ERROR CHECK
========================================= */

document.addEventListener(
    "error",
    (event) => {

        if (
            event.target.tagName !==
            "IMG"
        ) {
            return;
        }


        console.warn(
            "ไม่พบรูป:",
            event.target.src
        );

    },
    true
);


console.log(
    "THANASORN Portfolio พร้อมใช้งาน 💜"
);

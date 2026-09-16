/* =========================================
   THANASORN PORTFOLIO
========================================= */


/* =========================================
   IMAGE FOLDER
========================================= */

/*
   สำคัญมาก!

   ชื่อโฟลเดอร์ใน GitHub ของเธอคือ

   สีแดงเข้ม โมเดิร์น แฟ้มสะสมผลงาน  พอร์ตโฟลิโอ Portfolio เอกสาร A4

   มี "เว้นวรรค 2 ช่อง" ระหว่าง ผลงาน กับ พอร์ตโฟลิโอ

   encodeURIComponent()
   จะช่วยจัดการภาษาไทยและช่องว่าง
*/

const folderName =
    "สีแดงเข้ม โมเดิร์น แฟ้มสะสมผลงาน  พอร์ตโฟลิโอ Portfolio เอกสาร A4";


const imageFolder =
    "./" + encodeURIComponent(folderName);


/* =========================================
   IMAGE PATH FUNCTION
========================================= */

function getImage(number) {

    return imageFolder + "/" + number + ".png";

}


/* =========================================
   SET MAIN IMAGES
========================================= */

const heroImage =
    document.getElementById("heroImage");

const profileImage =
    document.getElementById("profileImage");

const educationImage =
    document.getElementById("educationImage");

const sopImage =
    document.getElementById("sopImage");


/*
   หน้า 1 = Cover
*/

heroImage.src =
    getImage(1);


/*
   หน้า 3 = Profile
*/

profileImage.src =
    getImage(3);


/*
   หน้า 2 = Education / เอกสาร
*/

educationImage.src =
    getImage(2);


/*
   ใช้หน้า 2 เป็นภาพ SOP
   สามารถเปลี่ยนเลขได้ภายหลัง
*/

sopImage.src =
    getImage(2);


/* =========================================
   ACTIVITIES
========================================= */

const activityGrid =
    document.getElementById("activityGrid");


const activities = [

    {
        number: "01",
        title: "RELATED ACTIVITIES",
        description:
            "กิจกรรมและประสบการณ์ที่รวบรวมไว้ใน Portfolio",
        image: 4
    },

    {
        number: "02",
        title: "HOSTING SKILLS",
        description:
            "ประสบการณ์ด้านการสื่อสารและการนำเสนอ",
        image: 5
    },

    {
        number: "03",
        title: "STUDENT COUNCIL",
        description:
            "ประสบการณ์การทำงานร่วมกับผู้อื่น",
        image: 6
    },

    {
        number: "04",
        title: "ACTIVITY FACILITATOR",
        description:
            "การช่วยเหลือและอำนวยความสะดวกในกิจกรรม",
        image: 7
    },

    {
        number: "05",
        title: "ACTIVITY",
        description:
            "กิจกรรมและประสบการณ์ต่าง ๆ",
        image: 8
    },

    {
        number: "06",
        title: "ACTIVITY",
        description:
            "ผลงานและประสบการณ์จากกิจกรรม",
        image: 9
    },

    {
        number: "07",
        title: "VOLUNTEER ACTIVITIES",
        description:
            "กิจกรรมจิตอาสาและการทำประโยชน์เพื่อส่วนรวม",
        image: 10
    },

    {
        number: "08",
        title: "SOCIAL & COMMUNITY ACTIVITIES",
        description:
            "กิจกรรมเพื่อสังคมและชุมชน",
        image: 11
    }

];


/* สร้าง Activity Card */

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
   GALLERY
========================================= */

const galleryGrid =
    document.getElementById("galleryGrid");


/*
   สร้าง Gallery หน้า 1 - 11
*/

for (
    let number = 1;
    number <= 11;
    number++
) {


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


/*
   ฟังก์ชันเปิดรูป
*/

function openModal(image) {

    modalImage.src =
        image.src;

    modalImage.alt =
        image.alt;

    modal.classList.add("active");

    document.body.style.overflow =
        "hidden";

}


/*
   รูปทั่วไป
*/

document.addEventListener(
    "click",
    (event) => {

        const image =
            event.target.closest(".zoomable");


        if (!image) {
            return;
        }


        openModal(image);

    }
);


/*
   รูป Gallery
*/

document.addEventListener(
    "click",
    (event) => {

        const gallery =
            event.target.closest(".gallery-item");


        if (!gallery) {
            return;
        }


        const image =
            gallery.querySelector("img");


        if (image) {

            openModal(image);

        }

    }
);


/* =========================================
   CLOSE MODAL
========================================= */

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

        if (
            event.target === modal
        ) {

            closeModal();

        }

    }
);


/*
   กด ESC เพื่อปิด
*/

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape"
        ) {

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

        navMenu.classList.toggle(
            "active"
        );

    }
);


/*
   กดเมนูแล้วปิด Mobile Menu
*/

document
    .querySelectorAll(".nav-menu a")
    .forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                navMenu.classList.remove(
                    "active"
                );

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

        if (
            window.scrollY > 500
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
   ACTIVE NAV
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
            event.target.tagName !== "IMG"
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


/* =========================================
   CONSOLE
========================================= */

console.log(
    "THANASORN Portfolio พร้อมใช้งาน 💜"
);

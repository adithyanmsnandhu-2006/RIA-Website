document.addEventListener("DOMContentLoaded", () => {

    document.body.style.opacity = "1";

    const intro = document.getElementById("intro");
    const main = document.getElementById("main-content");

    setTimeout(() => {
        intro.style.opacity = "0";
        setTimeout(() => {
            intro.style.display = "none";
            main.style.opacity = "1";
            document.body.style.overflow = "auto";
        }, 800);
    }, 3500);
});

window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    if (window.scrollY > 50) nav.style.background = "rgba(0,0,0,0.75)";
    else nav.style.background = "rgba(0,0,0,0.45)";
});

/* Scroll Reveal Sections */
function revealOnScroll(section) {
    const trigger = window.innerHeight * 0.85;
    const top = section.getBoundingClientRect().top;
    if (top < trigger) {
        section.style.opacity = "1";
        section.style.transform = "translateY(0)";
    }
}

window.addEventListener("scroll", () => {
    revealOnScroll(document.getElementById("timeline"));
    revealOnScroll(document.getElementById("purpose"));
    revealOnScroll(document.getElementById("features"));
});

/* Smooth Scroll */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"});
    });
});
// GALLERY TAB SWITCHING
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        tab.classList.add("active");
        document.getElementById(tab.dataset.target).classList.add("active");
    });
});

/* CODE PAGE TABS */
const codeTabs = document.querySelectorAll(".code-tab");
const codeContent = document.querySelectorAll(".code-content");

codeTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        codeTabs.forEach(t => t.classList.remove("active"));
        codeContent.forEach(c => c.classList.remove("active"));
        tab.classList.add("active");
        document.getElementById(tab.dataset.target).classList.add("active");
    });
});

/* ACCORDION */
const accordions = document.querySelectorAll(".accordion");

accordions.forEach(acc => {
    acc.querySelector(".accordion-header").addEventListener("click", () => {
        const body = acc.querySelector(".accordion-body");
        body.style.maxHeight = body.style.maxHeight ? null : body.scrollHeight + "px";
    });
});

/* PROJECT FILTER TABS */
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        // remove active style from all buttons
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.textContent.toLowerCase();

        projectCards.forEach(card => {
            const category = card.querySelector(".project-category").textContent.toLowerCase();

            if (filter === "all" || category.includes(filter)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});
// ================= PROJECT FILTERING ================= //
document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => {

        // active tab highlight
        document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        const filter = tab.getAttribute("data-filter");
        const cards = document.querySelectorAll(".project-card");

        cards.forEach(card => {
            const category = card.getAttribute("data-category");

            if (filter === "all" || category === filter) {
                card.style.display = "block";
                card.style.opacity = "1";
            } else {
                card.style.display = "none";
                card.style.opacity = "0";
            }
        });
    });
});
// AUTO LOAD GALLERY IMAGES
const galleryFolder = "../assets/images/gallery/";

async function loadGalleryImages() {
    const galleryGrid = document.getElementById("galleryGrid");

    // Manually list files instead of auto directory reading (GitHub hosting limitation)
    const images = [
        "Screenshot 2025-11-30 202031.png",
        // Add more filenames here when uploaded
    ];

    images.forEach(image => {
        const imgElement = document.createElement("img");
        imgElement.src = `${galleryFolder}${image}`;
        imgElement.alt = image;
        imgElement.classList.add("gallery-image");
        galleryGrid.appendChild(imgElement);
    });
}

    
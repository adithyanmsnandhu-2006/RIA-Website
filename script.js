// GLOBAL JS – safely guards against missing elements on each page

document.addEventListener("DOMContentLoaded", () => {

    /* ====== INTRO (HOME ONLY) ====== */
    const intro = document.getElementById("intro");
    const main = document.getElementById("main-content");

    if (intro && main) {
        document.body.style.opacity = "1";
        setTimeout(() => {
            intro.style.opacity = "0";
            setTimeout(() => {
                intro.style.display = "none";
                main.style.opacity = "1";
                document.body.style.overflow = "auto";
            }, 800);
        }, 3500);
    } else {
        // internal pages
        document.body.style.opacity = "1";
        document.body.style.overflow = "auto";
    }

    /* ====== NAVBAR SCROLL BG ====== */
    const nav = document.querySelector(".navbar");
    if (nav) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                nav.style.background = "rgba(0,0,0,0.75)";
            } else {
                nav.style.background = "rgba(0,0,0,0.45)";
            }
        });
    }

    /* ====== SCROLL REVEAL ON HOME ====== */
    function revealOnScroll(section) {
        if (!section) return;
        const trigger = window.innerHeight * 0.85;
        const top = section.getBoundingClientRect().top;
        if (top < trigger) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    }

    const timeline = document.getElementById("timeline");
    const purpose  = document.getElementById("purpose");
    const features = document.getElementById("features");

    if (timeline || purpose || features) {
        const handleScroll = () => {
            revealOnScroll(timeline);
            revealOnScroll(purpose);
            revealOnScroll(features);
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
    }

    /* ====== SMOOTH SCROLL FOR HASH LINKS ====== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", e => {
            const target = document.querySelector(anchor.getAttribute("href"));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    /* ====== GALLERY TABS ====== */
    const galleryTabs = document.querySelectorAll(".gallery-tabs .tab");
    const galleryContents = document.querySelectorAll(".tab-content");

    if (galleryTabs.length && galleryContents.length) {
        galleryTabs.forEach(tab => {
            tab.addEventListener("click", () => {
                galleryTabs.forEach(t => t.classList.remove("active"));
                galleryContents.forEach(c => c.classList.remove("active"));

                tab.classList.add("active");
                const targetId = tab.dataset.target;
                const panel = document.getElementById(targetId);
                if (panel) panel.classList.add("active");
            });
        });
    }

    /* ====== CODE PAGE TABS ====== */
    const codeTabs = document.querySelectorAll(".code-tab");
    const codeContent = document.querySelectorAll(".code-content");

    if (codeTabs.length && codeContent.length) {
        codeTabs.forEach(tab => {
            tab.addEventListener("click", () => {
                codeTabs.forEach(t => t.classList.remove("active"));
                codeContent.forEach(c => c.classList.remove("active"));
                tab.classList.add("active");
                const targetId = tab.dataset.target;
                const panel = document.getElementById(targetId);
                if (panel) panel.classList.add("active");
            });
        });
    }

    /* ====== ACCORDION (CODES PAGE) ====== */
    const accordions = document.querySelectorAll(".accordion");
    if (accordions.length) {
        accordions.forEach(acc => {
            const header = acc.querySelector(".accordion-header");
            const body   = acc.querySelector(".accordion-body");
            if (!header || !body) return;

            header.addEventListener("click", () => {
                if (body.style.maxHeight) {
                    body.style.maxHeight = null;
                } else {
                    body.style.maxHeight = body.scrollHeight + "px";
                }
            });
        });
    }

    /* ====== PROJECT FILTER BUTTONS ====== */
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards  = document.querySelectorAll(".project-card");

    if (filterButtons.length && projectCards.length) {
        filterButtons.forEach(button => {
            button.addEventListener("click", () => {
                filterButtons.forEach(btn => btn.classList.remove("active"));
                button.classList.add("active");

                const filter = button.textContent.toLowerCase();

                projectCards.forEach(card => {
                    const category = (card.dataset.category || "").toLowerCase();
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
    }

    /* ====== AUTO LOAD GALLERY IMAGES (LOCAL) ====== */
    const galleryGrid = document.getElementById("galleryGrid");
    if (galleryGrid) {
        const galleryFolder = "../assets/images/gallery/";

        // list files manually here
        const images = [
            "Screenshot 2025-11-30 202031.png"
            // Add more filenames when you upload them
        ];

        images.forEach(file => {
            const img = document.createElement("img");
            img.src = galleryFolder + file;
            img.alt = file;
            img.classList.add("gallery-image");
            galleryGrid.appendChild(img);
        });
    }

    /* ====== DEVELOPMENT TABS (DAILY / WEEKLY / MONTHLY) ====== */
    const devTabs  = document.querySelectorAll(".dev-tab");
    const devPanels = document.querySelectorAll(".dev-panel");

    if (devTabs.length && devPanels.length) {
        devTabs.forEach(tab => {
            tab.addEventListener("click", () => {
                devTabs.forEach(t => t.classList.remove("active"));
                devPanels.forEach(p => p.classList.remove("active"));

                tab.classList.add("active");
                const targetId = tab.dataset.target;
                const panel = document.getElementById(targetId);
                if (panel) panel.classList.add("active");
            });
        });
    }

});

/* =====================================================
   AHMED SAMIR - GIS PORTFOLIO
   ===================================================== */


/* =====================================================
   MOBILE MENU
   ===================================================== */

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", () => {

        navbar.classList.toggle("open");

        if (navbar.classList.contains("open")) {

            menuToggle.textContent = "✕";

        } else {

            menuToggle.textContent = "☰";

        }

    });


    document.querySelectorAll(".nav-link").forEach(link => {

        link.addEventListener("click", () => {

            navbar.classList.remove("open");

            menuToggle.textContent = "☰";

        });

    });

}


/* =====================================================
   ACTIVE NAVIGATION
   ===================================================== */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});


/* =====================================================
   THEME BUTTON
   ===================================================== */

const themeToggle =
    document.getElementById("themeToggle");

let lightMode =
    localStorage.getItem("portfolioTheme") === "light";


function updateTheme() {

    if (lightMode) {

        document.documentElement.style.setProperty(
            "--bg",
            "#f4f7f9"
        );

        document.documentElement.style.setProperty(
            "--bg-secondary",
            "#eaf0f3"
        );

        document.documentElement.style.setProperty(
            "--card",
            "#ffffff"
        );

        document.documentElement.style.setProperty(
            "--text",
            "#122033"
        );

        document.documentElement.style.setProperty(
            "--text-secondary",
            "#637083"
        );

        document.documentElement.style.setProperty(
            "--border",
            "rgba(0,0,0,0.08)"
        );

        themeToggle.textContent = "☀️";

    } else {

        document.documentElement.style.setProperty(
            "--bg",
            "#07111f"
        );

        document.documentElement.style.setProperty(
            "--bg-secondary",
            "#0b1728"
        );

        document.documentElement.style.setProperty(
            "--card",
            "#0f1d30"
        );

        document.documentElement.style.setProperty(
            "--text",
            "#f5f7fb"
        );

        document.documentElement.style.setProperty(
            "--text-secondary",
            "#9eacc0"
        );

        document.documentElement.style.setProperty(
            "--border",
            "rgba(255,255,255,0.08)"
        );

        themeToggle.textContent = "🌙";

    }

}


if (themeToggle) {

    updateTheme();

    themeToggle.addEventListener("click", () => {

        lightMode = !lightMode;

        localStorage.setItem(
            "portfolioTheme",
            lightMode ? "light" : "dark"
        );

        updateTheme();

    });

}


/* =====================================================
   CURRENT YEAR
   ===================================================== */

const currentYear =
    document.getElementById("currentYear");

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* =====================================================
   BACK TO TOP
   ===================================================== */

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =====================================================
   MORE PROJECTS
   ===================================================== */

const moreProjects =
    document.getElementById("moreProjects");


if (moreProjects) {

    moreProjects.addEventListener("click", () => {

        alert(
            "More projects will be added soon."
        );

    });

}


/* =====================================================
   SIMPLE REVEAL ANIMATION
   ===================================================== */

const revealElements =
    document.querySelectorAll(
        ".skill-card, .project-card, .certificate-card, .info-card"
    );


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    revealObserver.observe(element);

});

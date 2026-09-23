/* =========================================================
   SWATHI PERSONAL PORTFOLIO
   JAVASCRIPT
========================================================= */

/* =========================================================
   MOBILE MENU
========================================================= */

const menuBtn = document.getElementById("menuBtn");

const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");

  const icon = menuBtn.querySelector("i");

  if (navMenu.classList.contains("open")) {
    icon.classList.remove("fa-bars");

    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");

    icon.classList.add("fa-bars");
  }
});

/* =========================================================
   CLOSE MOBILE MENU AFTER CLICKING LINK
========================================================= */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");

    const icon = menuBtn.querySelector("i");

    icon.classList.remove("fa-xmark");

    icon.classList.add("fa-bars");
  });
});

/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll("section[id]");

function updateActiveNav() {
  const scrollPosition = window.scrollY + 150;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    const sectionHeight = section.offsetHeight;

    const sectionId = section.getAttribute("id");

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });

      const activeLink = document.querySelector(
        `.nav-link[href="#${sectionId}"]`,
      );

      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
}

window.addEventListener("scroll", updateActiveNav);

/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");

        observer.unobserve(entry.target);
      }
    });
  },

  {
    threshold: 0.12,
  },
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

/* =========================================================
   BACK TO TOP
========================================================= */

const topBtn = document.getElementById("topBtn");

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
});

/* =========================================================
   CURRENT YEAR
========================================================= */

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();

/* =========================================================
   CARD HOVER EFFECT
========================================================= */

const cards = document.querySelectorAll(
  ".skill-card, .achievement-card, .info-card",
);

cards.forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;

    const y = event.clientY - rect.top;

    const rotateX = ((y - rect.height / 2) / rect.height) * -3;

    const rotateY = ((x - rect.width / 2) / rect.width) * 3;

    card.style.transform = `perspective(600px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-5px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});

/* =========================================================
   PROJECT BUTTON PLACEHOLDER
========================================================= */

const projectLinks = document.querySelectorAll(".project-buttons a");

projectLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const url = link.getAttribute("href");

    if (!url || url === "#") {
      event.preventDefault();

      alert("Add your project or GitHub URL in index.html.");
    }
  });
});

/* =========================================================
   SOCIAL LINK PLACEHOLDER
========================================================= */

const socialLinks = document.querySelectorAll(".social-links a");

socialLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const url = link.getAttribute("href");

    if (!url || url === "#") {
      event.preventDefault();

      alert("Add your GitHub or LinkedIn URL in index.html.");
    }
  });
});

/* =========================================================
   SMOOTH SCROLL FOR INTERNAL LINKS
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") {
      return;
    }

    const target = document.querySelector(targetId);

    if (target) {
      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

/* =========================================================
   CLOSE MENU WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener("click", (event) => {
  const clickedInsideMenu = navMenu.contains(event.target);

  const clickedMenuButton = menuBtn.contains(event.target);

  if (
    !clickedInsideMenu &&
    !clickedMenuButton &&
    navMenu.classList.contains("open")
  ) {
    navMenu.classList.remove("open");

    const icon = menuBtn.querySelector("i");

    icon.classList.remove("fa-xmark");

    icon.classList.add("fa-bars");
  }
});

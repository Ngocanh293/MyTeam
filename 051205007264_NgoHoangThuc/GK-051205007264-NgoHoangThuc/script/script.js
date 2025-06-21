document.addEventListener("DOMContentLoaded", function () {
  // ======== Header hiện khi cuộn ========
  const header2 = document.getElementById("header2");

  // ======== Hero animation khi load ========
  const heroContent = document.querySelector(".hero__content");
  const heroMedia = document.querySelector(".hero__media");
  const textName = document.querySelector(".textName");
  const navbar = document.querySelector(".navbar");

  heroContent?.classList.add("animate-left");
  heroMedia?.classList.add("animate-right");
  textName?.classList.add("animate-left");
  navbar?.classList.add("animate-right");

  // ======== Hero ảnh hover active ========
  const images = document.querySelectorAll(".hero__img");
  images.forEach(img => {
    img.addEventListener("mouseenter", () => {
      images.forEach(i => i.classList.remove("active"));
      img.classList.add("active");
    });
  });

  // ======== Scroll: navbar active + header show + hobby animate ========
  const links = document.querySelectorAll(".navbar__link");
  const sections = document.querySelectorAll("section[id]");
  const hobbySection = document.querySelector(".section2-hobby");
  const hobbyItems = document.querySelectorAll(".section2-hobby .hobby-item");

  window.addEventListener("scroll", () => {
    // --- Header ẩn/hiện khi cuộn ---
    if (header2) {
      if (window.scrollY > 140) {
        header2.classList.add("show");
      } else {
        header2.classList.remove("show");
      }
    }

    // --- Navbar active section ---
    let currentId = "";
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 500 && rect.bottom >= 300) {
        currentId = section.id;
      }
    });

    if (window.scrollY === 0) currentId = "header";
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
      currentId = "contact";
    }

    links.forEach(link => {
      link.classList.remove("navbar__link--active");
      const href = link.getAttribute("href").substring(1);
      if (href === currentId) {
        link.classList.add("navbar__link--active");
      }
    });

    // --- Animate sở thích khi hiện ra ---
    if (hobbySection) {
      const rect = hobbySection.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight - 150 && rect.bottom > 200;

      if (isVisible) {
        hobbyItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add("visible");
          }, index * 150);
        });
      } else {
        hobbyItems.forEach(item => item.classList.remove("visible"));
      }
    }
  });
});

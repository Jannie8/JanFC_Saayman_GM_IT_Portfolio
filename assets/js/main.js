 const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector("#nav-list");
const scrollTopBtn = document.querySelector(".scroll-top");
const yearSpan = document.querySelector("#year");

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

if (navToggle && navList) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    navList.classList.toggle("open");
  });

  navList.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      navList.classList.remove("open");
    });
  });
}

if (scrollTopBtn) {
  const toggleScrollBtn = () => {
    if (window.scrollY > 240) {
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }
  };

  toggleScrollBtn();
  window.addEventListener("scroll", toggleScrollBtn);

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
 

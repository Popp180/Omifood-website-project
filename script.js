const yearEL = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEL.textContent = currentYear;

// //////////////////////////////

// For mobile navigation
const headerEL = document.querySelector(".hero-header");
const btnNavEL = document.querySelector(".btn-mobile-nav");
btnNavEL.addEventListener("click", function () {
  headerEL.classList.toggle("nav-open");
});

// //////////////////////////////
// 怎么弄？
//For smooth scrolling
const allLinks = document.querySelectorAll("a:link");
// make sure they have href
// for each link
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    // in case jump4
    const href = link.getAttribute("href");

    if (href == "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// //////////////////////////////

// For sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

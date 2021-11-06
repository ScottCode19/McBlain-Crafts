//nav button

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

//STICKY NAV

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
      console.log(ent);
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
      console.log(ent);
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

obs.observe(sectionHeroEl);

//SMOOTH SCROLLING

const allLinks = document.querySelectorAll(".btn:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    //scroll to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    //scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    if (link.classList.contains("nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
    console.log(link);
  });
});

// cta choice

const ctaSelectEl = document.querySelector(".style-select-cta");
const ctaImg = document.querySelector(".cta-img");
const btnCTAEl = document.querySelector(".btn-cta");

// ctaSelectEl.addEventListener("click", function () {
//   if (ctaSelectEl.value === "monster") {
//     ctaImg.setAttribute("src", "img/Product/monster1-700x1176.webp");
//     btnCTAEl.setAttribute(
//       "href",
//       "https://www.ebay.co.uk/itm/Monster-Stash-Can-60-Dram-Pop-Top-Smellproof-Secret-Hidden-Safe-Airtight/143969139815"
//     );
//   }
//   if (ctaSelectEl.value === "coke") {
//     ctaImg.setAttribute("src", "img/Product/coke1-700x931.webp");
//     btnCTAEl.setAttribute(
//       "href",
//       "https://www.ebay.co.uk/itm/144082705334?_trkparms=amclksrc%3DITM%26aid%3D1110006%26algo%3DHOMESPLICE.SIM%26ao%3D1%26asc%3D20200818143230%26meid%3Ddb7b9532c83c47778ae7abdac2a85e5f%26pid%3D101224%26rk%3D1%26rkt%3D5%26sd%3D143969139815%26itm%3D144082705334%26pmt%3D1%26noa%3D1%26pg%3D2047675%26algv%3DDefaultOrganicWeb&_trksid=p2047675.c101224.m-1"
//     );
//   }

//   if (ctaSelectEl.value === "fanta") {
//     ctaImg.setAttribute("src", "img/Product/fanta1-700x808.webp");
//     btnCTAEl.setAttribute(
//       "href",
//       "https://www.ebay.co.uk/itm/144082705334?_trkparms=amclksrc%3DITM%26aid%3D1110006%26algo%3DHOMESPLICE.SIM%26ao%3D1%26asc%3D20200818143230%26meid%3Ddb7b9532c83c47778ae7abdac2a85e5f%26pid%3D101224%26rk%3D1%26rkt%3D5%26sd%3D143969139815%26itm%3D144082705334%26pmt%3D1%26noa%3D1%26pg%3D2047675%26algv%3DDefaultOrganicWeb&_trksid=p2047675.c101224.m-1"
//     );
//   }
// });

const optionChange = function (el) {
  if (el.value === "monster") {
    ctaImg.setAttribute("src", "img/Product/monster1-700x1176.webp");
    btnCTAEl.setAttribute(
      "href",
      "https://www.ebay.co.uk/itm/Monster-Stash-Can-60-Dram-Pop-Top-Smellproof-Secret-Hidden-Safe-Airtight/143969139815"
    );

    console.log("changed to monster");
  }
  if (el.value === "coke") {
    ctaImg.setAttribute("src", "img/Product/coke1-700x931.webp");
    btnCTAEl.setAttribute(
      "href",
      "https://www.ebay.co.uk/itm/144082705334?_trkparms=amclksrc%3DITM%26aid%3D1110006%26algo%3DHOMESPLICE.SIM%26ao%3D1%26asc%3D20200818143230%26meid%3Ddb7b9532c83c47778ae7abdac2a85e5f%26pid%3D101224%26rk%3D1%26rkt%3D5%26sd%3D143969139815%26itm%3D144082705334%26pmt%3D1%26noa%3D1%26pg%3D2047675%26algv%3DDefaultOrganicWeb&_trksid=p2047675.c101224.m-1"
    );
    console.log("changed to coke");
  }
  if (el.value === "fanta") {
    ctaImg.setAttribute("src", "img/Product/fanta1-700x808.webp");
    btnCTAEl.setAttribute(
      "href",
      "https://www.ebay.co.uk/itm/144082705334?_trkparms=amclksrc%3DITM%26aid%3D1110006%26algo%3DHOMESPLICE.SIM%26ao%3D1%26asc%3D20200818143230%26meid%3Ddb7b9532c83c47778ae7abdac2a85e5f%26pid%3D101224%26rk%3D1%26rkt%3D5%26sd%3D143969139815%26itm%3D144082705334%26pmt%3D1%26noa%3D1%26pg%3D2047675%26algv%3DDefaultOrganicWeb&_trksid=p2047675.c101224.m-1"
    );
    console.log("changed to fanta");
  }
};

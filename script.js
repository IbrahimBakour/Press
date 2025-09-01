const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const filterButtons = document.querySelectorAll(".buttons button");
const filterableCards = document.querySelectorAll(".section-content .card");

menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click());

navLinks.forEach((link) => {
  link.addEventListener("click", () => menuOpenButton.click());
});

const filterCards = (e) => {
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");

  filterableCards.forEach((card) => {
    card.classList.add("hide");
    if (
      card.dataset.name === e.target.dataset.name ||
      e.target.dataset.name === "all"
    ) {
      card.classList.remove("hide");
    }
  });
};

filterButtons.forEach((button) =>
  button.addEventListener("click", filterCards)
);

// Populate card-keywords with alt text
const galleryItems = document.querySelectorAll(".gallery-item");

galleryItems.forEach(item => {
    const img = item.querySelector(".gallery-image");
    const keywordsDiv = item.querySelector(".card-keywords");
    if (img && keywordsDiv) {
        keywordsDiv.textContent = img.alt;
    }
});

const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Initialize Hero Swiper
const heroSwiper = new Swiper(".heroSwiper", {
  loop: true,
  autoplay: {
    delay: 2000, // Autoplay every 2 seconds
    disableOnInteraction: false,
  },
  pagination: {
    el: ".heroSwiper .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-navigation-thumbs .swiper-button-next",
    prevEl: ".swiper-navigation-thumbs .swiper-button-prev",
  },
});

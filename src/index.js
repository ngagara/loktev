import "/index.scss";
import "swiper/swiper-bundle.css";

import Swiper from "swiper/bundle";

new Swiper(".swiper-container", {
  // init: false,
  loop: true,
  grabCursor: true,
  loopedSlides: 1,
  autoHeight: true,
  slidesPerGroup: 1,
  centeredSlides: true,
  breakpoints: {
    320: {
      slidesPerView: 1.1,
      spaceBetween: 8,
    },
    375: {
      slidesPerView: 1.3,
    },
    425: {
      slidesPerView: 1.4,
    },
    460: {
      slidesPerView: 1.6,
    },
    500: {
      slidesPerView: 1.7,
    },
    600: {
      slidesPerView: 2.0,
    },
    767: {
      slidesPerView: 2.5,
      spaceBetween: 12,
    },
    860: {
      slidesPerView: 2.8,
    },
    1024: {
      slidesPerView: 3.2,
    },
    1210: {
      slidesPerView: 3.6,
    },
    1280: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
});

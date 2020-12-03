import Swiper from "swiper/bundle";

export const mySwiper = new Swiper(".swiper-container", {
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
        slidesPerView: 1.2,
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
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
  });
  
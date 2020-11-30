import '/index.scss';
import 'swiper/swiper-bundle.css';

import Swiper from 'swiper/bundle';

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
        spaceBetween: 8,
      },
      425: {
        slidesPerView: 1.4,
        spaceBetween: 8,
      },
      460: {
        slidesPerView: 1.6,
        spaceBetween: 8,
      },
      500: {
        slidesPerView: 1.7,
        spaceBetween: 8,
      },
      600: {
        slidesPerView: 2.0,
        spaceBetween: 8,
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
        pageUpDown:true,
    } 
  });



  
  
  
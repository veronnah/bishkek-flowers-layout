const homeSlider = new Swiper('.main__swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper__btn-next',
        prevEl: '.swiper__btn-prev',
        disabledClass: 'swiper__btn-disable',
    },
    loop: false,
    autoplay: true,
    responsive: true,
    speed: 800,
    effect: 'slide',
    fadeEffect: {
        crossFade: true
    },
});

const articles__swiper = new Swiper('.articles__swiper-container', {
    slidesPerView: 4.5,
    spaceBetween: 20,
    loop: false,
    autoplay: true,
    responsive: true,
    breakpoints: {
        290:{
            slidesPerView: 1.5,
            spaceBetween: 20
        },
        320: {
          slidesPerView: 1.5,
          spaceBetween: 20
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 40
        },
        1000:{
            slidesPerView: 4.5,
            spaceBetween: 20,
        }
      }
});

let productsSlider = new Swiper('.products__card-swiper-container', {
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
      nextEl: '.products-slider__btn-next',
      prevEl: '.products-slider__btn-prev',
      disabledClass: 'swiper__btn-disable',
  },
  loop: true,
  autoplay: true,
  responsive: true,
  speed: 800,
  effect: 'slide',
  fadeEffect: {
      crossFade: true
  },
  breakpoints: {
    290:{
        slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 2,
    },
    1000:{
        slidesPerView: 3,
        spaceBetween: 20,
    },
    1300:{
        slidesPerView: 4,
        spaceBetween: 20,
    }
 
  }
});
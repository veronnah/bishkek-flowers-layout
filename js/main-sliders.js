let homeSlider = new Swiper('.swiper-container', {
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
var swiper = new Swiper('.articles__swiper-container', {
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
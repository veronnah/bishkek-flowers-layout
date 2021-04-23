const homeSlider = new Swiper('.swiper-container', {
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
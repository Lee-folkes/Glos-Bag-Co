const swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
      },
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    grabCursor: true,

    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      850: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  })
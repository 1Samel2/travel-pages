var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  slidesPerColumn: 2,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    568: { slidesPerView: 3 }
  }
});
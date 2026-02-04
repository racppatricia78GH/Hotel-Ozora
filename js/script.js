
const swiperCustom = new Swiper('.swiper-custom', {
  loop: true,
  autoplay: {
    delay: 2500,
  },

    // If we need pagination
  pagination: {
    el: '.swiper-pagination-page1',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

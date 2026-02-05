// Inisialisasi Swiper Foto
const swiperFoto = new Swiper('.swiper-foto', {
    loop: true,
    autoplay: {
    delay: 3500,
  },
    pagination: {
        el: '.swiper-pagination',
        clickable: true},
    effect: 'fade', // Memberikan efek transisi halus
    fadeEffect: { crossFade: true },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
// Inisialisasi Swiper Foto
const swiperFoto = new Swiper('.swiper-foto', {
    loop: true,
    effect: 'fade', // Memberikan efek transisi halus
    fadeEffect: { crossFade: true },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Inisialisasi Swiper Teks
const swiperTeks = new Swiper('.swiper-text', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

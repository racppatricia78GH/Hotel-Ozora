let bannerImages = [
    'image/banner-01.jpg',
    'image/banner-02.jpg',
    'image/banner-03.jpg',
];

const track = document.getElementById("sliderTrack");
const totalSlide = 3;
let currentIndex = 0;

/* UPDATE SLIDE */
function updateSlide() {
  const slideWidth = track.clientWidth / totalSlide;
  track.style.transform = translateX(-${currentIndex * slideWidth}px);
}

/* KLIK THUMB */
function goBanner(index) {
  currentIndex = index;
  updateSlide();
}

/* AUTO SLIDE (SEARAH JARUM JAM / KE KANAN) */
setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlide;
  updateSlide();
}, 4000);

/* RESPONSIVE FIX */
window.addEventListener("resize", updateSlide);
// 2. SCROLL REVEAL UNTUK BINTANG
window.addEventListener('scroll', () => {
    const title = document.querySelector('.main-title');
    const stars = document.querySelectorAll('.star-anim');
    
    if (title) {
        const rect = title.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            stars.forEach(s => s.classList.add('show'));
        }
    }
});

// 3. SLIDER PAGE 1
let currentSlide1 = 1;
const totalSlides1 = 5;

function updateSlide1() {
    const content = document.getElementById('slide-content-1');
    content.innerHTML = `<p class="slide-text">>teks${currentSlide1}<</p>`;
    
    // Update bullet hover effect (logic sederhana)
    console.log("Current Slide:", currentSlide1);
}

function nextSlide(page) {
    if (page === 1) {
        currentSlide1 = currentSlide1 === totalSlides1 ? 1 : currentSlide1 + 1;
        updateSlide1();
    }
}

function prevSlide(page) {
    if (page === 1) {
        currentSlide1 = currentSlide1 === 1 ? totalSlides1 : currentSlide1 - 1;
        updateSlide1();
    }
}

// 4. GANTUNGAN BOUNCE
function bounceItem(el) {
    el.classList.add('bounce');
    setTimeout(() => {
        el.classList.remove('bounce');
    }, 1000);
}

// 5. INISIALISASI BULLETS
document.addEventListener('DOMContentLoaded', () => {
    const bulletContainer = document.getElementById('bullets-page1');
    if (bulletContainer) {
        for (let i = 1; i <= 5; i++) {
            const img = document.createElement('img');
            img.src = 'image/bullet-page-star.png';
            img.onclick = () => {
                currentSlide1 = i;
                updateSlide1();
            };
            bulletContainer.appendChild(img);
        }
    }
});

 var swiper = new Swiper(".mySwiper-camp-site", {
      slidesPerView: 1,
      spaceBetween: 30,
      keyboard: {
        enabled: true,
      },
      pagination: {
        el: ".swiper-pagination-camp",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next-camp",
        prevEl: ".swiper-button-prev-camp",
      },
    });
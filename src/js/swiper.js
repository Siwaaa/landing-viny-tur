const swiper = new Swiper('.programs__carusel', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 30,
  CSSWidthAndHeight: true,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".programs__next",
    prevEl: ".programs__prev",
  },
});

const swiper2 = new Swiper('.swiper-slide__img ', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  nested: true,
});
import Swiper, { Navigation } from "swiper";

const sectionPromos = document.querySelectorAll('.section-promo__bottom');

if(window.innerWidth <= 768) {
  sectionPromos.forEach((section => {
    const swiper = new Swiper(section, {
      modules: [Navigation],
      slidesPerView: 1,
      wrapperClass: 'product-wrapper',
      slideClass: 'product',
      navigation: {
        nextEl: '.product-button-next',
        prevEl: '.product-button-prev',
      },
    })
  }))
}



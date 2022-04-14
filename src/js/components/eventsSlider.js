import Swiper, {Pagination} from "swiper";

const eventsSlider = document.querySelector(".contacts-events__slider");

if(eventsSlider) {
  const eventsSwiper = new Swiper(eventsSlider, {
    modules: [Pagination],
    //slidesPerView: 1,
    wrapperClass: 'events-wrapper',
    slideClass: 'events-item',
    slideActiveClass: 'events-item__active',
    pagination: {
      el: '.events-pagination',
      clickable: true,
      bulletActiveClass: 'contacts-bullet-active',
      bulletClass: 'contacts-bullet',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      768: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 28
      }
    }
  })
}

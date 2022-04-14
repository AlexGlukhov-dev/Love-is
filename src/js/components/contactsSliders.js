import Swiper, {Pagination} from "swiper";

const sliderTop = document.querySelector('.contacts__info-table');

if(innerWidth < 768 && sliderTop) {
  console.log(123)
  const swiper = new Swiper(sliderTop, {
    modules: [Pagination],
    slidesPerView: 1,
    wrapperClass: 'table-wrapper',
    slideClass: 'table__item',
    slideActiveClass: 'table__item-active',
    pagination: {
      el: '.table-pagination',
      clickable: true,
      bulletActiveClass: 'contacts-bullet-active',
      bulletClass: 'contacts-bullet',
    },
  })
}

const sectionsTop = document.querySelectorAll('.section-promo__top-line');
const contactsTop = document.querySelectorAll('.contacts__top-line');

const offset = el => {
  const rect = el.getBoundingClientRect(),
    scrollLeft = window.scrollX || document.documentElement.scrollLeft,
    scrollTop = window.scrollY || document.documentElement.scrollTop;
  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft
  }
}

const animOnScroll = sections => {
  sections.forEach(section => {
    const animItemHeight = section.offsetHeight;
    const animItemOffset = offset(section).top;
    const animStart = 4;

    let animItemPoint = window.innerHeight - animItemHeight / animStart;

    if (animItemHeight > window.innerHeight) {
      animItemPoint = window.innerHeight - window.innerHeight / animStart;
    }

    if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
      section.classList.add('show-line');
    } else {
      section.classList.remove('show-line');
    }
  })
}

if(sectionsTop) {
  window.addEventListener('scroll', () => animOnScroll(sectionsTop))
  animOnScroll(sectionsTop);
}

if(contactsTop) {
  window.addEventListener('scroll', () => animOnScroll(contactsTop))
  animOnScroll(contactsTop);
}


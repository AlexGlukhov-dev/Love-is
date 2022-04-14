const promoBtns = document.querySelectorAll('.product-btn');
const promo = document.querySelector('.product-promo');

promoBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if(promo.classList.contains('product-promo-active')){
      promo.classList.remove('product-promo-active')
      btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                            <path d="M0 8H18V10H0V8Z" fill="black"/>\n' +
                            <path d="M8 18L8 8.74224e-08L10 0L10 18H8Z" fill="black"/>\n' +
                       </svg>`
    } else {
      promo.classList.add('product-promo-active')
      btn.innerHTML = '';
    }
  })
})

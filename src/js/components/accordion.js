const btns = document.querySelectorAll('.product-btn');
const promos = document.querySelectorAll(".product-promo");

btns.forEach( btn => {


  btn.addEventListener("click", e => {
    btns.forEach(btn => btn.classList.contains("close") && btn.classList.remove("close"));

    for(let promo of promos) {
      /** Условие показа промо */
      const showPromo = !promo.classList.contains("open")
        && promo.getAttribute('data-product') === btn.parentNode.id;

      if (showPromo){
        btn.classList.add("close");
        promo.classList.add("open");
        promo.style.maxHeight = "540px";

      } else {
        promo.classList.remove("open");
        promo.style.maxHeight = null;
      }
    }
  })
});

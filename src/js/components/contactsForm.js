const inputItems = document.querySelectorAll('.form__item');
const form = document.querySelector('.form');

form && form.addEventListener('submit', e => e.preventDefault());

inputItems.forEach(item => {
  const input = item.querySelector('.form__item-input');
  const label = item.querySelector('.form__item-label');

  input.addEventListener('change', e => {
    input.value !== "" ? label.classList.add('shrink') : label.classList.remove('shrink')
  });
})



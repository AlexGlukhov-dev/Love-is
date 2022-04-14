const anchorHeader = document.querySelector('.main__social-btn')
const anchorFooter = document.querySelector('.anchor-footer')

const animAnchor = (element, id) => {
  if(element){
    element.addEventListener('click', e => {
      e.preventDefault()
      document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
}


animAnchor(anchorHeader, 'lemonade');
animAnchor(anchorFooter,'header');


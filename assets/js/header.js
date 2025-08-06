document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body')
  const header = document.querySelector('.header')
  const headerspBtn = document.querySelector('.header-spBtn')
  const headerMenu = document.querySelectorAll('.header-menu a')
  headerspBtn.addEventListener('click', () => {
    // header.classList.toggle('open')
    if(header.classList.contains('open')){
      header.classList.remove('open')
      body.style.removeProperty('overflow')
    } else {
      header.classList.add('open')
      body.style.overflow = 'hidden'
    }
  })
  headerMenu.forEach((item) => {
    item.addEventListener('click', ()=> {
      header.classList.remove('open')
      body.style.removeProperty('overflow')
    })
  })
})
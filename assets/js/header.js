document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body')
  const header = document.querySelector('.header')
  const headerspBtn = document.querySelector('.header-spBtn')
  headerspBtn.addEventListener('click', () => {
    header.classList.toggle('open')
    if(header.classList.contains('open')){
      console.log('header open')
      body.style.overflow = 'hidden'
    } else {
      console.log('header closed')
      body.style.removeProperty('overflow');
    }
  })
})
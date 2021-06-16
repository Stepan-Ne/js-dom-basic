const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
let slideCount = mainSlide.querySelectorAll('div').length

sidebar.style.top = `-${(slideCount - 1) * 100}vh`

upBtn.addEventListener('click', () => {
  changeSlide('up')
})
downBtn.addEventListener('click', () => {
  changeSlide('down')
})

function changeSlide(direction) {

}

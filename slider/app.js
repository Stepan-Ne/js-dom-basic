const slides = document.querySelectorAll('.slide')

for (const el of slides) {
  el.addEventListener('click', () => {
    console.log('Click')
        clearActiveClasses()
        el.classList.add('active')
      })
}

// slides.forEach(element => {
//   element.addEventListener('click', () => {
// console.log('Click')
//     clearActiveClasses()
//     element.classList.add('active')
//   })
// });

function clearActiveClasses() {
  slides.forEach((element) => {
    element.classList.remove('active')
  })
}
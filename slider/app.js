
function manageSlide(activeSlide = 0) {

  const slides = document.querySelectorAll('.slide')
  slides[activeSlide].classList.add('active')
  // on each slide
  slides.forEach(element => {
    // add listener
    element.addEventListener('click', () => {
      // which clear classes
      clearActiveClasses()
      // and set class
      element.classList.add('active')
    })
  });

  function clearActiveClasses() {
    slides.forEach((element) => {
      element.classList.remove('active')
    })
  }
}

manageSlide(1)
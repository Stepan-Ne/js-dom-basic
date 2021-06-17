const board = document.querySelector('#board')
const SQRT_NUM = 500
const colors = ['yellow', 'green', 'orange', 'skyblue', 'pink']
for (let i = 0; i < SQRT_NUM; i++) {
  const square = document.createElement('div')
  square.classList.add('square')
  square.addEventListener('mouseover', () => setColor(square))
  square.addEventListener('mouseleave', () => removeColor(square))

  board.append(square)
}

function setColor(el) {
  const color = getRandomColor()
  el.style.background = color
  el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(el) {
  el.style.background = '#1d1d1d'
  el.style.boxShadow = '0 0 2px #000'
}
function getRandomColor() {
  r = Math.floor(Math.random() * (256)),
  g = Math.floor(Math.random() * (256)),
  b = Math.floor(Math.random() * (256)),
  color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
  return color
}
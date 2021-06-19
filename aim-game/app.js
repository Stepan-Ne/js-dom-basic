const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
let time = 0;
let score = 0
startBtn.addEventListener('click', (event) => {
  event.preventDefault()
  screens[0].classList.add('up')

})

timeList.addEventListener('click', (event) => {
  if (event.target.classList.contains('time-btn')) {
    time = parseInt(event.target.getAttribute('data-time'))
    screens[1].classList.add('up')
    startGame()
  }
})
board.addEventListener('click', (event) => {
  if (event.target.classList.contains('circle')) {
    score++
    event.target.remove()
    createRandomCircle()
  }
})

function startGame() {
  createRandomCircle()
  setInterval(decreaseTime, 1000)
  setTime(time)
}

function decreaseTime() {
  if (time === 0) {
    finishGame()
  } else {
    let currentTime = --time
   if (currentTime < 10) {
    currentTime = `0${currentTime}`
  }
  setTime(currentTime)
  }
  
}

function setTime(val) {
  timeEl.innerHTML = `00:${val}`
}
function finishGame() {
  timeEl.parentNode.remove()
  board.innerHTML = `<h1>Cчёт: <span class="primary">${score}</span></h1>`
}
function createRandomCircle() {
  const circle = document.createElement('div')
  circle.classList.add('circle')
  let size = getRandomNumber(10, 60)
  const {height, width} = board.getBoundingClientRect()
  const x = getRandomNumber(0, width - size)
  const y = getRandomNumber(0, height - size)

  circle.style.background = getRandomColor()
  circle.style.width = `${size}px`
  circle.style.height = `${size}px`
  circle.style.top = `${x}px`
  circle.style.left = `${y}px`
  board.append(circle)
}
function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

function getRandomColor() {
  r = Math.floor(Math.random() * (256)),
  g = Math.floor(Math.random() * (256)),
  b = Math.floor(Math.random() * (256)),
  color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
  return color
}
const BACKGROUND_IMAGES = [
  'background_1.webp',
  'background_2.webp',
  'background_3.webp',
  'background_4.webp'
]

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

const BACKGROUND_IMAGE = BACKGROUND_IMAGES[getRandomInt(BACKGROUND_IMAGES.length)]

const body = document.querySelector('body')
body.style.backgroundImage = `url('/assets/${BACKGROUND_IMAGE}')`

window.addEventListener('load', () => {
  const html = document.querySelector('html')
  html.classList.remove('loading')
})
const prevButton = document.getElementById('projects__selector__prev')
const nextButton = document.getElementById('projects__selector__next')
const list = document.getElementById('projects__selector__list')
const step = 800

prevButton.addEventListener('click', () => { list.scrollLeft -= step })
nextButton.addEventListener('click', () => { list.scrollLeft += step })

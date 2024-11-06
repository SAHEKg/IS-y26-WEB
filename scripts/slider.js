const prev_button = document.getElementById('projects__selector__prev')
const next_button = document.getElementById('projects__selector__next')
const list = document.getElementById('projects__selector__list')
const step = 800

prev_button.addEventListener('click', () => { list.scrollLeft -= step })
next_button.addEventListener('click', () => { list.scrollLeft += step })

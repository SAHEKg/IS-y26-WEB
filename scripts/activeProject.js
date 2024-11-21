const currentPath = document.location.pathname;

for (let elem of document.getElementsByClassName('project__nav__link')) {
    if (elem.getAttribute('href') === currentPath) {
        elem.classList.add('project__nav__link_active');
    }
}

const contentDiv = document.getElementById('main__content__gallery');
const preloader = document.querySelector('.preloader');
const errorMessage = document.querySelector('.error__message');

async function loadGallery() {
    try {
        const filter = Math.random() > 0.5 ? '100&_limit=5' : '200&_limit=5';
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos?id_gte=${filter}`);

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const gallery = await response.json();
        const list = document.getElementById('main__content__gallery')
        gallery.forEach((item) => {
            const element = document.createElement('img');
            element.classList.add('gallery__item')
            element.src = item.url
            list.appendChild(element)
        })
    } catch (error) {
        errorMessage.style.display = 'flex'
    } finally {
        preloader.style.display = 'none';
    }
}

window.addEventListener('load', loadGallery)

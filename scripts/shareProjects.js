function createSharedProjectElement(index) {
    const item = document.createElement('div');
    item.classList.add('project__main__share__item');
    const language = document.createElement('div')
    language.classList.add('project__share__item__language');
    const comment = document.createElement('div')
    comment.classList.add('project__share__item__comment');

    const languageClass = 'share__item__language';
    const languageId = 'share__item__language' + index;

    const languageLabel = document.createElement('label');
    languageLabel.textContent = 'Язык';
    languageLabel.htmlFor = languageId;
    const languageSelect = document.createElement('select');
    languageSelect.id = languageId;
    languageSelect.classList.add(languageClass);
    languageSelect.name = languageId;
    const options = ['C#', 'C++', 'Java']
    options.forEach(option => {
        const selectOption = document.createElement('option');
        selectOption.value = option.toUpperCase();
        selectOption.textContent = option;
        languageSelect.appendChild(selectOption);
    })
    language.appendChild(languageLabel);
    language.appendChild(languageSelect);
    item.appendChild(language);

    const commentClass = 'comment__input';
    const commentId = 'comment' + index;

    const commentLabel = document.createElement('label');
    commentLabel.textContent = 'Описание';
    commentLabel.htmlFor = commentId;
    const br = document.createElement('br');
    const commentText = document.createElement('textarea');
    commentText.id = commentId;
    commentText.classList.add(commentClass);
    commentText.name = commentId;
    commentText.placeholder = 'МИКРОСЕРВИСЫ'
    commentText.required = true;
    comment.appendChild(commentLabel);
    comment.appendChild(br);
    comment.appendChild(commentText);
    item.appendChild(comment);

    resultDiv.appendChild(item);
}

function createSharedProjectsSubmit() {
    const button = document.createElement('button');
    button.classList.add('project__share__submit');
    button.type = 'submit';
    button.textContent = 'Отправить';

    resultDiv.appendChild(button);
}

const form = document.getElementById('project__share__info')
const resultDiv = document.getElementById('project__share__list')

const savedParams = JSON.parse(localStorage.getItem('projectShareInfo'))
if (savedParams) {
    Object.entries(savedParams).forEach(([key, value]) => {
        const formField = form.elements[key];
        if (formField) {
            formField.value = value;
        }
    })
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    while (resultDiv.firstChild) {
        resultDiv.removeChild(resultDiv.firstChild);
    }

    const formData = new FormData(form)
    const params = Object.fromEntries(formData.entries())
    for (let i = 0; i < params.project__share__amount; i++) {
        createSharedProjectElement(i);
    }
    createSharedProjectsSubmit();
})

// -Цель
// Показать красивый alert, подходящий под стилизацию сайта, вместо базового
//
// -Участники
// Пользователь - видит окно с временем загрузки
// Система - рассчитывает время загрузки страницы и показывает его
//
// -Предусловия
// Библиотека подключена
// Код для замера времени написан
//
// -Триггер
// Загрузка страницы, вызывается swal
//
// -Постусловие
// Пользователь видит время загрузки в красивом всплывающем окне
//

window.addEventListener('load', () => {
    // Call to SweetAlert Swal
    // Title - alert title
    // Text - main content of alert
    // Icon - the image inside the body of the alert
    swal({
        title: 'Page loaded!',
        text: `Loading took ${performance.now().toFixed(2)}ms`,
        icon: 'images/socialcredit.jpeg'
    });
})

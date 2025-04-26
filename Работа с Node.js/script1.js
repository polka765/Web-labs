document.getElementById('addImageBtn').addEventListener('click', () => {
    const img = document.createElement('img');
    img.src = 'цветы.jpg'; // Упростим путь
    img.alt = 'Букет цветов';
    img.style.display = 'block';
    img.style.margin = '10px';
    img.style.maxWidth = '100%'; // Добавим адаптивность

    // Добавим обработчик ошибок
    img.onerror = function() {
        console.error('Изображение не найдено по пути:', this.src);
        alert('Изображение не найдено! Проверьте путь к файлу.');
    };

    document.querySelector('.container')
        .insertAdjacentElement('afterend', img);
});
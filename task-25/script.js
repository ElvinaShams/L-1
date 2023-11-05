function addStyledElement() {
    // Создаем новый элемент (например, div)
    const newElement = document.createElement('div');

    // Устанавливаем текст или любое содержимое для элемента (необязательно)
    newElement.textContent = 'Новый элемент';

    // Устанавливаем стили для элемента с помощью CSS
    newElement.style.color = 'red';
    newElement.style.backgroundColor = 'green';
    newElement.style.padding = '15px';
    newElement.style.border = '2px solid black';

    // Добавляем элемент в конец body
    document.body.appendChild(newElement);
}

// Вызываем функцию для добавления элемента с применением стилей
addStyledElement();


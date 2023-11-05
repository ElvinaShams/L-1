function loadImage(url) {
    return new Promise(function(resolve, reject) {
        // создать новый объект изображения в JavaScript. Объект Image предоставляет программный доступ к изображению и позволяет вам работать с изображениями в вашем коде.
        var img = new Image();
        img.onload = function() {
            // В случае успешной загрузки изображения, разрешаем промис объектом img
            resolve(img);
        }
        img.onerror = function() {
            // В случае неуспешной загрузки изображения, отклоняем промис с ошибкой
            reject(new Error("Не удалось загрузить изображение: " + url));
        }
        img.src = url;
    });
}

// Пример использования:
loadImage('https://unsplash.com/photos/a-man-standing-in-front-of-a-giant-object-in-the-middle-of-a-forest-Zs8VlSx03eY')
    .then(function(image) {
        console.log('Изображение успешно загружено', image);
        // Вы можете использовать image для отображения или другой обработки
    })
    .catch(function(error) {
        console.error('Ошибка загрузки изображения:', error.message);
    });
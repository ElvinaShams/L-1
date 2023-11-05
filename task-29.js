const myForm = document.getElementById('form1'); // извлекаем элемент формы

myForm.addEventListener('submit', function (event) {
  // Отменяем стандартное поведение формы
  event.preventDefault();

  // Получаем данные из формы
  const formData = new FormData(myForm);

  // Отправляем данные на сервер
  fetch('/api/submit-form', {
    method: 'POST',
    body: formData,
  })
    .then((response) => {
      // Обрабатываем ответ от сервера
      console.log(response);
    })
    .catch((error) => {
      // Обрабатываем ошибку
      console.error(error);
    });
});
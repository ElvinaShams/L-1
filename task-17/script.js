const input = document.querySelector(".input");
const geolist = document.querySelector(".list__wrapper");
const clearButton = document.querySelector(".clear");

function debounce(func, ms) {
    // Это переменная, которая будет хранить идентификатор таймера задержки.
  let timeout;
//   Функция-обертка возвращает другую функцию, которая будет обеспечивать задержку выполнения переданной функции func.
  return function () {
    // Этот вызов очищает предыдущий таймер переданной функции. Если функция была вызвана заново до истечения времени задержки, старый таймер отменяется.
    clearTimeout(timeout);
    // Когда внутренняя функция будет вызвана, setTimeout устанавливает задержку времени ms для выполнения переданной функции func через ms миллисекунд.
    //  func.apply(this, arguments) вызывает функцию func, передавая ей те же аргументы, которые были переданы внутренней функции-обертке.
    timeout = setTimeout(() => func.apply(this, arguments), ms);
  };
}

function clearValueInput() {
  input.value = "";
  geolist.innerHTML = "";
  geolist.style.display = "none";
}

function inputValue(event) {
  // Получает значение, введенное пользователем в поле ввода, которое инициировало событие.
  const target = event.target.value;
  // Вызывается функция ymaps.ready, которая ожидает загрузку API Яндекс.Карт и вызывает функцию 
  // yandexGeocoding с переданным значением target.
  // Если условие не выполняется (длина введенного текста равна 0), то выполняется скрытие элемента
  target.length > 0
    ? ymaps.ready(yandexGeocoding(target))
    : (geolist.style.display = "none");
}

// задерживает вызов функции inputValue
const debouncedHandleInput = debounce(inputValue, 500);

input.addEventListener("input", debouncedHandleInput);
clearButton.addEventListener("click", clearValueInput);

geolist.addEventListener("click", (event) => {
  //при клике заменяем поле инпута содержимым выбранного варианта
  input.value = event.target.innerText;
  if (event.target.classList.contains("item")) {
    //и скрываем блок вариантов
    geolist.style.display = "none";
  }
});

function yandexGeocoding(text) {
  ymaps.geocode(text, { results: 6 }).then(function (res) {
    //Отчищаем блок вариантов
    geolist.innerHTML = "";
    //Делаем его видимым
    geolist.style.display = "block";
    for (let i = 0; i < 6; i++) {
      //Для каждого найденного варианта создаем свой блок и добавляем в блок вариантов
      let object = res.geoObjects.get(i);
      let option = document.createElement("div");
      option.className = "item";
      option.textContent =
        object.properties._data.description +
        " " +
        object.properties._data.name;
      geolist.appendChild(option);
    }
  });
}

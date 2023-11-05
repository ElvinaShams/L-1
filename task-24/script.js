const data_URL =
  "http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true";

const counter = document.getElementById("index");
const lnames = document.getElementById("lname");
const fnames = document.getElementById("fname");
const tel = document.getElementById("tel");
const address = document.getElementById("address");
const states = document.getElementById("state");
const zip = document.getElementById("zip");
const city = document.getElementById("city");
const main = document.querySelector(".main");
const ulList = document.querySelectorAll("ul");
const inputs = document.querySelectorAll("input");
const inputNone = document.getElementById("none");
const inputAsc = document.getElementById("asc");
const inputDesc = document.getElementById("desc");
const paginationHeader = document.querySelector('.pagination-header');


const countDates = 50;
let itemsAll = [];
let itemsShown = [];
let sortedData = [];
let offset = 0;
const countItems = 50;

// Полученные данные обрабатываются и сохраняются в массив itemsAll.
// После загрузки данных, первые 50 элементов из общего списка загруженных данных помещаются в массив itemsShown.
fetchItems().then((res) => {
  itemsAll = res;
  itemsShown = itemsAll.slice(0, countItems);
  init(itemsShown);
});

// Функция для загрузки данных с сервера
// Используется функция fetchItems для загрузки данных с внешнего сервера с использованием fetch.
async function fetchItems() {
  try {
    const result = await fetch(data_URL);
    const json = await result.json();
    return json;
  }
   catch (error) {
    return [];
  }
}

// Функция для создания кнопок пагинации
function createPagination(parent) {
    // Количество страниц
    // возвращает наименьшее целое число
    const pages = Math.ceil(itemsAll.length / countItems);
// Проходится от 1 до количества страниц (pages), создавая кнопки для каждой страницы.
    for (let i = 1; i <= pages; i++) {
//  Устанавливает классы для кнопки. Если это первая страница (когда i === 1), добавляется класс 'active'
        const button = document.createElement('button');
        button.type = 'button';
        button.dataset.page = i;
        button.textContent = i;
        button.className = i === 1 ? 'pagination-button active' : 'pagination-button';
// Добавляет созданную кнопку в указанный родительский элемент 
        parent.append(button);
    }
}

// Итерирует по каждому элементу массива arr.
//  Создает новый элемент списка <li> для каждого элемента в массиве.
// добавляется внутрь родителя
const addItem = (parent, arr) => {
  arr.forEach((item) => {
    let li = document.createElement("li");
    li.textContent = item;
    parent.appendChild(li);
  });
};

// используется для сортировки данных в соответствии с выбранным порядком (asc, desc, none).
const sortArr = (data, originalData) => {
  for (key in data) {
    if (main.classList.contains("asc")) {
      data[key].sort((a, b) => {
        if (typeof a === "string") {
          return a.localeCompare(b);
        } else {
          return a - b;
        }
      });
    }

    if (main.classList.contains("desc")) {
      data[key].sort((a, b) => {
        if (typeof a === "string") {
          return b.localeCompare(a);
        } else {
          return b - a;
        }
      });
    }
  }

  if (main.classList.contains("none")) {
    data = "";
    data = originalData;
  }

  // Устанавливает переменную sortedData равной отсортированным данным.
  sortedData = data;
  // Устанавливает переменную sortedData равной отсортированным данным.
  const keys = Object.keys(sortedData);
  ulList.forEach((ul) => {
    // Устанавливает переменную sortedData равной отсортированным данным.
    ul.innerHTML = "";
  });

// Для каждого ключа:
// Получается ссылка на элемент списка <ul> с соответствующим ключом.
// Если элемент <ul> существует, вызывается функция addItem для добавления отсортированных данных в виде элементов списка в этот элемент <ul>.
  keys.forEach((key) => {
    const ulElement = document.getElementById(key);
    if (ulElement) {
      addItem(ulElement, sortedData[key]);
    }
  });
};

const buttonChecked = (event, data, originalData) => {
  const target = event.target.id;
  if (target === "asc") {
    main.classList.add("asc");
    main.classList.remove("none");
    main.classList.remove("desc");
  }

  if (target === "desc") {
    main.classList.add("desc");
    main.classList.remove("none");
    main.classList.remove("asc");
  }

  if (target === "none") {
    main.classList.add("none");
    main.classList.remove("asc");
    main.classList.remove("desc");
  }
  sortArr(data, originalData);
};

// Обработчик события для переключения страницы


const createPage = (items) => {
    sortedData = items;
    const keys = Object.keys(items[0]); // Получаем ключи из первого объекта (предполагается, что все объекты имеют одинаковую структуру)
    const arraysByKeys = {};
    ulList.forEach((ul) => {
        ul.innerHTML = "";
      });
    keys.forEach((key) => {
      const valuesForKey = items.map((obj) => obj[key]);
      arraysByKeys[key] = valuesForKey;
      const ulElement = document.getElementById(key);
      if (ulElement) {
        addItem(ulElement, arraysByKeys[key]);
      }
    });
  
    const originalData = JSON.parse(JSON.stringify(arraysByKeys));
  
    inputs.forEach((input) => {
      input.addEventListener("change", (event) =>
        buttonChecked(event, arraysByKeys, originalData)
      );
    });
}

function changePage(event) {
    const button = event.currentTarget;
    const page = button.dataset.page;
    itemsShown = itemsAll.slice(countItems * (page - 1), countItems * page);
    createPage(itemsShown);

    // Обновляем классы активных кнопок пагинации
    document.querySelectorAll('.pagination-button').forEach(button => {
        if (button.classList.contains('active')) {
            button.classList.remove('active');
        }

        if (button.dataset.page === page) {
            button.classList.add('active');
        }
    });
}

const init = (items) => {
  createPage(items);
  createPagination(paginationHeader);

  const pageButtons = document.querySelectorAll('.pagination-button');
    pageButtons.forEach(button => {
        button.addEventListener('click', changePage)
    })
};

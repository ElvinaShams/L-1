const input = document.querySelector(".input");
const clearButton = document.querySelector(".clear");
const letter = document.getElementById("letter");
const capital = document.getElementById("capital");
const number = document.getElementById("number");
const length = document.getElementById("length");
const list = document.querySelector(".list__wrapper");

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
  list.classList.remove("error_block");
}

function inputValue(event) {
  const target = event.target.value;
  list.classList.add("error_block");
  validInput(target);
}

const debouncedHandleInput = debounce(inputValue, 500);

input.addEventListener("input", debouncedHandleInput);
clearButton.addEventListener("click", clearValueInput);

const validInput = (target) => {
  //Проверка строчных букв
  const lowerCaseLetters = /[a-z]/g;
  if (target.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  // Проверка заглавныx букв
  const upperCaseLetters = /[A-Z]/g;
  if (target.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  //Наличие цифр
  const numbers = /[0-9]/g;
  if (target.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  //Проверка на длину пароля
  if (target.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }

  const isValidInsideDiv = list.querySelector(".invalid") == null;

//   если пароль валиден, то блок скрывается
  if (isValidInsideDiv) {
    list.classList.remove("error_block");
  }
};

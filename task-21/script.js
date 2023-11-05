const count = document.querySelector(".count");
const count__variable = document.querySelector(".count__variable");
const value = document.querySelector(".value");
// число весит 8 байт
// 5 переменных
const weight_number = 8;

const number_variables = 5;

let i = 0;
//  сколько  раз выполнилась функция перед тем, как возникла ошибка без переменных
const func = () => {
  i++;

  func();
};

try {
  func();
} catch (e) {
  // Словили ошибку переполнения стэка и вывели значение счетчика в консоль
  count.textContent = i;
  console.log(i);
}

let j = 0;
//  сколько  раз выполнилась функция перед тем, как возникла ошибка с переменными
const func2 = () => {
  let a = i + 1;
  let b = a + 1;
  let c = b + 1;
  let d = c + 1;
  let e = d + 1;
  j++;

  func2();
};

try {
  func2();
} catch (e) {
  count__variable.textContent = j;
  console.log(j);
}
//Числа в JavaScript представлены 64-битными значениями с плавающей запятой. В байте 8 бит, 
//в результате каждое число занимает 64/8 = 8 байт.

function getCallstackSize() {
  //Узнаем сколько занимает один вызов функции
  let value = (number_variables * weight_number * j) / (i - j);
  //Тогда размер колстэка будет равен
  return value * i;
}

value.textContent = getCallstackSize().toFixed(0);

console.log(getCallstackSize());

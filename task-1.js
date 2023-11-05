// Задача 1

const strExmp = "аргентина манит негра";

const searchPalindrom1 = (string) => {
  // Удалили пробелы,перевели в нижний регистр
  const str = string.toLowerCase().replaceAll(" ", "");
  // Разбиваем строку на массив символов, обращаем порядок и снова объединяем в строку.
  const reverseString = str.replaceAll(" ", "").split("").reverse().join("");
  return str === reverseString;
};
console.log(searchPalindrom1(strExmp));

const searchPalindrom2 = (string) => {
  // Удалили пробелы,перевели в нижний регистр
  const str = string.toLowerCase().replaceAll(" ", "");
  let check = "";

  // Выполняется цикл, который проходит по символам строки str в обратном порядке и добавляет каждый символ к строке check. Создает обратную версию исходной строки
  for (let i = str.length - 1; i >= 0; --i) {
    check += str[i];
  }
  // Сравниваются две строки
  return str == check;
};
console.log(searchPalindrom2(strExmp));

// Если совпало,то палиндром
const searchPalindrom3 = (string) => {
  const str = string.toLowerCase().replaceAll(" ", "");

  if (str.length < 1) {
    return true;
  } else {
    // Сравнивает первый символ строки str (с индексом 0) с последним символом (с индексом str.length - 1).
    if (str[0] === str[str.length - 1]) {
      // Если символы равны, функция вызывает саму себя рекурсивно для внутренней части строки,пока не выполнит первый пункт.
      return searchPalindrom3(str.slice(1, -1));
    } else {
      // Если длина строки меньше 1,то она считается палиндромом
      return false;
    }
  }
};
console.log(searchPalindrom3(strExmp));

const searchPalindrom4 = (string) => {
  string = string.toLowerCase().replaceAll(" ", "");
  //   Методом сприт строку string преобразуется в массив с отдельными символами;
  const stringArray = [...string];
  //   NewArray пустой массив
  const newArray = [];
  //   Проходим по массиву и методом unshift() массив newArray заполняем символами в обратном порядке
  stringArray.forEach((index) => {
    newArray.unshift(index);
  });
  //   Объединяем обратно в строку и сравнивем
  const reversedString = newArray.join("");
  return string === reversedString;
};

console.log(searchPalindrom4(strExmp));

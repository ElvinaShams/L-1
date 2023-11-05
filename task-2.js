// Задача 2

//  Если num меньше 1, то не странное число
// проходим по числам от 1 до num и находим делителей без остатка,если нашли,то добавляем в sumDivisors.
// сравниваем число и сумму чисел
const searchStrangeNumber = (num) => {
 if (num < 1) return false;
 let sumDivisors = 0;

 for (let i = 1; i < num; i++) {
   if (num % i === 0) {
    sumDivisors += i;
   }
 }

 return sumDivisors === num;
}

console.log(searchStrangeNumber(16));

//  Если num меньше 1, то не странное число
//  Сделали массив из чисел от 1 до num
//  Массив перебрали и остались делители,  методом reduce просуммировали числа из массива
//  Сравнили число и сумму чисел

const searchStrangeNumber2 = (num) => {
  const arrayNum = Array.from({ length: num - 1 }, (_, i) => i + 1);
  const arr = arrayNum.map((number) => {
    if (num % number === 0) {
      return number;
    }
  });
  const sum = arr
    .filter((item) => item !== undefined)
    .reduce((acc, num) => acc + num, 0);
  return num === sum;

};

console.log(searchStrangeNumber2(6));



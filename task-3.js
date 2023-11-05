// Задача 3
// вычисление N-го числа в ряду Фибоначчи

const fibonacci = (n) => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

// вычисление всех чисел в ряду Фибоначчи до числа N

const fibonacciSequence = (n) => {
  let arrayNum = [];
  for (let i = 0; i < n; i++) {
    arrayNum.push(fibonacci(i));
  }
  return arrayNum;
};

// вычисление N-го просто числа

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
}

// Функция для вычисления N-го простого числа

const primeNumber = (n) => {
  let count = 0;
  let number = 2;
  while (count < n) {
    if (isPrime(number)) {
      count++;
    }
    number++;
  }
  return number - 1;
};

//    Функция для вычисления всех простых чисел до числа N

const primeNumbersSequence = (n) => {
  let arrayNum = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      arrayNum.push(i);
    }
  }
  return arrayNum;
};
// Оптимизация
const MathX = (() => {
  return {
    fibonacci: fibonacci,
    fibonacciSequence: fibonacciSequence,
    primeNumber: primeNumber,
    primeNumbersSequence: primeNumbersSequence,
  };
})();

console.log(MathX.primeNumbersSequence(68)); // Вывод: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67]

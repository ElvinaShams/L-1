
// Сделали замыкание функции, принимает массив функцию, возвращает функцию в которой создали пустой массив,
// прошлись foreach по массиву функций и добавляли каждый результат в пустой массив arrayValues, 
// вернули массив результатов.
// 
const createFunc = (arrayFunc) => {
    return function ()  {
let arrayValues = [];
arrayFunc.forEach(func => {
    const result = func(...arguments);
    arrayValues.push(result);
});
return arrayValues;
    }
}
// functions содержит три функции, каждая принимает один аргумент и выполняет различные операции над ним.
const functions = [
    function(a) { return a + a; },
    function(b) { return b * 7; },
    function(c) { return c - c; }
  ];

  const closure = createFunc(functions);// Создание замыкания (closure) на основе массива функций
const results = closure(5);// Вызов замыкания с аргументом 5

console.log(results);


// создаем функцию callFunction, которая возвращает промис, 
// выполняет функцию и после выполнения выводит порядковый номер функции. 
// Затем мы используем .forEach() для итерации по массиву функций, создавая цепочку промисов, 
// где каждый промис вызывает следующую функцию и выводит порядковый номер.

function callFunction(func, index) {
    return new Promise((resolve) => {
        func();
        console.log(index);
        resolve();
    });
}

function callFunctions(array) {
    let promise = Promise.resolve();

    array.forEach((func, index) => {
        promise = promise.then(() => callFunction(func, index + 1));
    });
}

const functions = [
    () => console.log('Функция 1'),
    () => console.log('Функция 2'),
    () => console.log('Функция 3')
];

callFunctions(functions);


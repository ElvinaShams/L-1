const JSONTryParse = (input) => {
  try {
    //проверяем, на входе должна быть строка
    if (typeof jsonString !== "string") {
      throw new Error("Вход должен быть строкой.");
    }

    // Метод JSON.parse() разбирает строку JSON
    let parsedData = JSON.parse(input);

    // Проверяем результат разбора объект и не ноль
    if (typeof parsedData !== "object" || parsedData === null) {
      throw new Error("Результат не является валидным JSON объектом.");
    }

    return parsedData;
  } catch (e) {
    console.error("Ошибка при разборе JSON:");
    return null;
  }
};

const jsonString = '{"name": "John", "age": 30, "city": "New York"}';

console.log(JSONTryParse(jsonString));

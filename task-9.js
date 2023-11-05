const jsonData = { name: "John", age: 30, city: "New York" };

const jsonString = JSON.stringify(jsonData);

function JSONtoString(data) {
    // Шаг рекурсии - если значение тип object и не является null
    if (typeof data === 'object' && data !== null) {
//Если значение является массивом, то происходит обход всех его элементов с помощью map, вызывая JSONtoString для каждого элемента, 
// а затем объединяет полученные строки в формат JSON-массива.
        if (Array.isArray(data)) {
            const arrayValues = data.map(JSONtoString);
            return `[${arrayValues.join(',')}]`;
        }
        // Если значение объекта, то используется Object.entries для получения пар ключ-значение,
        //  и затем формируется строка для каждой пары, соединяя их в объект JSON.
        else {
            const objectEntries = Object.entries(data).map(([key, value]) => {
                return `"${key}":${JSONtoString(value)}`;
            })
            return `{${objectEntries.join(',')}}`;
        }
    }
    // Если значение является строкой, оно обрамляется двойными кавычками.
    else if (typeof data === 'string') {
        return `"${data}"`;
    }
    // Для значений, не являющихся объектами или строками, они преобразуются в строку с помощью String().
    else {
        return String(data)
    }
}


console.log(JSONtoString(jsonData));
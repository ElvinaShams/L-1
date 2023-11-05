const sortedArray = (users) => {
    // Результат выполнения этого кода будет отсортированным массивом объектов users сначала по возрасту (по возрастанию), 
    // а затем по имени (в алфавитном порядке внутри одинаковых возрастов).
    return users.sort((a, b) => {
        // Сначала сравниваем возраст
        if (a.age !== b.age) {
            return a.age - b.age;
        }
        
        // Если возраст одинаков, сравниваем имена по алфавиту
        return a.name.localeCompare(b.name);
    });
   }
   
   let users = [
       { name: "John", age: 20, surname: "Johnson" },
       { name: "Pete", age: 18, surname: "Peterson" },
       { name: "Ann", age: 20, surname: "Hathaway" }
     ];
   

console.log(sortedArray(users));


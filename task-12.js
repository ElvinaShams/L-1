const book = {
    title: "Структуры данных и алгоритмы в Java",
    author: "Лафоре Роберт",
    year: 2018,
    
    // Метод для получения названия книги
    getTitle: function() {
        return this.title;
    },
    
    // Метод для изменения названия книги
    setTitle: function(newTitle) {
        this.title = newTitle;
    },
    
    // Метод для получения автора
    getAuthor: function() {
        return this.author;
    },
    
    // Метод для изменения автора
    setAuthor: function(newAuthor) {
        this.author = newAuthor;
    },
    
    // Метод для получения года издания
    getYear: function() {
        return this.year;
    },
    
    // Метод для изменения года издания
    setYear: function(newYear) {
        this.year = newYear;
    }
};
// Вызовы методов setTitle, setAuthor и setYear используются для обновления соответствующих свойств книги.
book.setTitle("Новое Название Книги");
book.setAuthor("Новый Автор");
book.setYear(2024);
// console.log выводит обновленные значения названия, автора и года издания книги, используя вызовы методов getTitle, getAuthor и getYear.
console.log("Обновленное название книги:", book.getTitle());
console.log("Обновленный автор книги:", book.getAuthor());
console.log("Обновленный год издания книги:", book.getYear());
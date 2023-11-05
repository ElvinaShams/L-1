function traversal(element, action) {
    // ...обработка данных узла...
    action(element); // Выполняет действие, переданное в функцию
    
    const elementChildren = Array.from(element.children);// Получает дочерние элементы текущего элемента
    
    // последовательно справа налево обходим ветви, ведущие из текущего узла
    for (let i = element.refs.length - 1; i >= 0; i--) {
        traversal( elementChildren[i], action ); // Рекурсивный вызов функции traversal для каждого дочернего элемента
    }
}
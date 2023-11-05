function createCounter() {
    // переменная, которую нужно запомнить
    let count = 0;
  
    function counter() {
      // увеличиваем нашу запомненную переменную
      count++;
      console.log(count);
    }
  
    // возвращаем функцию
    return counter;
  }
  // Когда вы вызываете createCounter(), она создает и возвращает функцию counter, которая имеет доступ к переменной count.

  // создаем новую функцию (с замыканием)
  const incrementCounter = createCounter();
    //  После этого, когда вы вызываете incrementCounter(), функция counter увеличивает значение count и выводит его в консоль.
  incrementCounter(); // 1
  incrementCounter(); // 2
  incrementCounter(); // 3



// Класс создания узлов связного списка
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function JSONtoLinkedList(json) {
  // Преобразуем JSON
  const parsedJSON = JSON.parse(json);

  // Если не массив или длина массива равна нулю, то return;
  if (!Array.isArray(parsedJSON) || parsedJSON.length === 0) {
    return;
  }

  const head = new Node(parsedJSON[0]); // Создание головного узла списка
  // Установка текущего узла в начало списка
  let currentNode = head;

  // В цикле обходим каждый элемент массива
  for (let i = 1; i < parsedJSON.length; i++) {
    // Создание нового узла
    const newNode = new Node(parsedJSON[i]);
    // Устанавливаем указатель текущего узла на новый узел
    currentNode.next = newNode;
    // Перемещаем текущий узел на только что созданный узел
    currentNode = newNode;
  }

  // Возвращаем начало списка
  return head;
}

// Используется myFetch для асинхронного получения данных из URL 'coffee.jpg'.
// Затем используется await для ожидания загрузки данных и получает их в виде объекта blob с помощью response.blob().
// Затем создается URL объекта blob с использованием URL.createObjectURL(myBlob).
// Создается новый элемент img, устанавливает его источником URL объекта и добавляет его к телу документа.
async function myFetch(){
    let response = await fetch('coffee.jpg')
    let myBlob = await response.blob()

    let objectURL = URL.createObjectURL(myBlob)
    let image = document.createElement('img')
    image.src = objectURL
    document.body.appendChild(image)
}

myFetch().catch(e => {
    console.log('There has been a problem with your fetch operation: ' + e.message)
})

const count = document.querySelector('.count');
const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima inventore adipisci consectetur, numquam aliquam magni sequi unde voluptatum, quos repellendus quis odit itaque saepe cupiditate qui enim illum! Beatae, dolor?'

function getMaxLocalStorageSize() {
    // Пробуем записать максимальное количество данных в localStorage
    try {
        for (let i = 0; i < 1000000; i++) {
            const value = text.repeat(100);
            localStorage.setItem(`${i}`, value);
        }
    } catch (event) {
        console.log('error');
    }

    // Подсчитываем объем данных, который удалось записать
    let totalBytes = 0;
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        // Т.к. браузер использует UTF-16, то каждый символ весит 2 байта
        totalBytes += (key.length + value.length) * 2;
    }
    
    // Удаляем все тестовые данные из localStorage
    for (let i = localStorage.length - 1; i >= 0; i--) {
        const key = localStorage.key(i);
        if (key.includes('i')) {     
            localStorage.removeItem(key);
        }
    }

    return totalBytes;
}

const value = getMaxLocalStorageSize();
count.innerText = `${(value/ 1024).toFixed(2)} КБ`;


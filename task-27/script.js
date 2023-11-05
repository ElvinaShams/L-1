const button = document.querySelector(".haloween");
const spider = document.querySelector(".spider");
const header = document.querySelector(".site-header");

function scarySound() {
  // создается новый аудио-элемент, устанавливает путь к аудиофайлу './sound/monstr.mp3' и воспроизводит звук.
    const audio = new Audio();
    audio.preload = 'auto';
    audio.src = './sound/monstr.mp3';
    audio.play();
}

spider.onclick = scarySound;

// обрабатывает изменения состояния чекбокса. Если чекбокс отмечен, она добавляет классы "site-header--bg" к header и "spider-animation" к spider. 
function checkedButton() {
  if (this.checked) {
    header.classList.add("site-header--bg");
    spider.classList.add("spider-animation");
  } else {
    header.classList.remove("site-header--bg");
    spider.classList.remove("spider-animation");
  }
}
button.addEventListener("change", checkedButton);

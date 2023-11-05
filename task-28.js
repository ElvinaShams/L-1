const pictureListElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderPictures = (pictures) => {
  // создаёт пустой фрагмент документа для эффективного добавления большого количества узлов в DOM.
  const pictureListFragment = document.createDocumentFragment();

  // перебирает каждый объект в массиве pictures.
  pictures.forEach((photo) => {
    // создаёт копию шаблона элемента, чтобы заполнить информацией из каждого объекта.
    const pictureElement = pictureTemplate.cloneNode(true);

    pictureElement.querySelector('.picture__img').src = photo.url;
    pictureElement.querySelector('.picture__likes').textContent = photo.likes.length;
    // добавляет каждый заполненный элемент во фрагмент документа для оптимизации работы с DOM.
    pictureListFragment.appendChild(pictureElement);

    pictureElement.addEventListener('click', () => renderBigPicture(photo));
  });
  // после того как все элементы были добавлены во фрагмент, фрагмент с новыми элементами добавляется в исходный элемент "pictureListElement".
  pictureListElement.appendChild(pictureListFragment);
};


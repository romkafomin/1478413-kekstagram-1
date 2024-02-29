import { generateArrayPhoto } from './main.js';
import {getComments} from './photos-generator.js';

const bigPictureBlock = document.querySelector('.big-picture');
const bodyElement = document.querySelector('body');
const closeButton = document.querySelector('.big-picture__cancel');


//удаляем/добавляем нужные классы для показа полного изображения, вешаем слушатель нажатия кнопки закрытия
function openFullSize () {
  bigPictureBlock.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', pushEscButton);
}

//функция закрытия полноразмерного изображения, удаление обработчика
function closeFullSize () {
  bigPictureBlock.classList.add('hidden');
  bodyElement.classList.remove('modal-open');

  document.removeEventListener('keydown', pushEscButton);
}

//функция закрытия по нажатию на клавишу esc
function pushEscButton (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeFullSize();
  }
}

closeButton.addEventListener('click', () => {
  closeFullSize();
});

/*bigPictureBlock.addEventListener('click', () => {
  openFullSize();
});
*/

//создаем полноразмерную фотографию
function renderBigPicture ({id, url,likes,comments,description}) {
  document.querySelector('.big-picture__img img').src = url;
  document.querySelector('.big-picture__img img').id = id;
  document.querySelector('.likes-count').textContent = likes;
  document.querySelector('.comments-count').textContent = comments.length;
  document.querySelector('.social__caption').textContent = description;
  getComments(comments);
}

//открываем полноразмерную фотографию через поиск по id
function openFullSizePicture (photoId) {
  const selectedPhoto = generateArrayPhoto.find((photo) => photo.id === photoId);
  if (selectedPhoto) {
    renderBigPicture(selectedPhoto);
    openFullSize();
    closeButton.addEventListener('click', () => {
      closeFullSize();
    });
  }
}

export {openFullSizePicture};

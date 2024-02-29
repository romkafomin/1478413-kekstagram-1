import { generateArrayPhoto } from './main.js';
import {getComments} from './photos-generator.js';

const bigPictureBlock = document.querySelector('.big-picture');
const socialCommentCount = bigPictureBlock.querySelector('.social__comment-count');
const commentsLoader = bigPictureBlock.querySelector('.comments-loader');
const bodyElement = document.querySelector('body');
const closeButton = bigPictureBlock.querySelector('.big-picture__cancel');
const pictureBlock = document.querySelector('.pictures');


//удаляем/добавляем нужные классы для показа полного изображения, вешаем слушатель нажатия кнопки закрытия
function openFullSize () {
  bigPictureBlock.classList.remove('hidden');
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
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

pictureBlock.addEventListener('click', () => {
  openFullSize();
});

//создаем полноразмерную фотографию
function renderBigPicture ({id, url,likes,comments,description}) {
  document.querySelector('.big-picture__img').src = url;
  document.querySelector('.big-picture__img').id = id;
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
  }
}

export {openFullSizePicture};

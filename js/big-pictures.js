import { generateArrayPhoto } from './main.js';
import {getComments} from './photos-generator.js';

const bigPictureBlock = document.querySelector('.big-picture');
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const bodyElement = document.querySelector('.body');
const closeButton = document.querySelector('.big-picture__cancel');

function openFullSize (evt) {
  evt.preventDefault();
  bigPictureBlock.classList.remove('hidden');
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  bodyElement.classList.add('modal-open');

  document.addEventListener('keydown', pushEscButton);
}

function closeFullSize () {
  bigPictureBlock.classList.add('hidden');
  bodyElement.classList.remove('modal-open');

  document.removeEventListener('keydown', pushEscButton);
}

function pushEscButton (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeFullSize();
  }
}

bigPictureBlock.addEventListener('click', () => {
  openFullSize();
});

closeButton.addEventListener('click', () => {
  closeFullSize();
});

function renderBigPicture ({id, url,likes,comments,description}) {
  document.querySelector('.big-picture__img').src = url;
  document.querySelector('.big-picture__img').id = id;
  document.querySelector('.likes-count').textContent = likes;
  document.querySelector('.comments-count').textContent = comments.length;
  document.querySelector('.social__caption').textContent = description;
  getComments(comments);
}

function openFullSizePicture (photoId) {
  const selectedPhoto = generateArrayPhoto.find((photo) => photo.id === photoId);
  if (selectedPhoto) {
    renderBigPicture(selectedPhoto);
  }
}

export {openFullSizePicture};

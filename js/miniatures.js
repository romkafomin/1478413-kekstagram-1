import {openFullSizePicture} from './big-pictures';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureBlock = document.querySelector('.pictures');

function createPicture ({url,likes,comments,description,id}) {
  const pictureElement = pictureTemplate.cloneNode(true);
  const imgElement = document.querySelector('.picture__img');
  imgElement.src = url;
  imgElement.textContent = description;
  imgElement.dataset.id = id;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.addEventListener('click' , openFullSizePicture());
  return pictureElement;
}

function createAllPicture (pictures) {
  const pictureFragment = document.createDocumentFragment();
  pictures.forEach ((picture) => {
    const miniature = createPicture(picture);
    pictureFragment.append(miniature);
  });
  pictureBlock.append(pictureFragment);
}

export {createAllPicture};


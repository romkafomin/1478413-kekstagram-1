import { makeUserPhoto } from './photos-generator.js';

const userPhoto = makeUserPhoto();
let commentsShown = 5;
const commentsShownElement = document.querySelector('.social__comment-count');
const loadMoreButton = document.querySelector('.social__comments-loader');
const commentsContainer = document.querySelector('.social__comments');

function renderComments (count) {
  //очищаем комментарии
  commentsContainer.innerHTML = '';
  userPhoto.comments.slice(0, count).forEach((comment) => {
    //создаем пункт списка
    const commentElement = document.createElement('li');
    commentElement.classList.add('social__comment');
    const commentAvatar = document.createElement('img');
    commentAvatar.classList.add('social__picture');
    commentAvatar.src = comment.avatar;
    commentAvatar.alt = comment.name;
    const commentText = document.createElement('p');
    commentText.classList.add('social__text');
    commentText.textContent = comment.message;
    //добавляем в пункт списка img и p
    commentElement.append(commentAvatar,commentText);
    //добавляем в контейнер пункт списка
    commentsContainer.append(commentElement);
  });
}

function updateCommentsShown () {
  //увеличиваем шаг на 5
  commentsShown += 5;
  //обновляем счетчик комментариев
  commentsShownElement.textContent = `${commentsShown} из ${userPhoto.comments.length} комментариев`;
  if (commentsShown >= userPhoto.comments.length) {
    loadMoreButton.classList.add('hidden');
  }
  renderComments(commentsShown);
}

export {renderComments,updateCommentsShown};

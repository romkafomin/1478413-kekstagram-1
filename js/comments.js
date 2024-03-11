const commentsShownElement = document.querySelector('.social__comment-count');
const commentsContainer = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const loadMoreCommentsButton = document.querySelector('.social__comments-loader');
const commentFragment = document.createDocumentFragment();
let commentsToShow = 0;
let newCommentsArray = [];

function renderComment ({avatar,name,message}) {
  const commentElement = commentTemplate.cloneNode(true);
  const commentImg = commentElement.querySelector('.social__picture');
  commentImg.innerHTML = '';
  commentImg.src = avatar;
  commentImg.alt = name;
  commentElement.querySelector('.social__text').textContent = message;
  return commentElement;
}


function renderCommentsShown (commentsArray) {
  commentsToShow = Math.min(commentsArray.length,5);
  newCommentsArray = commentsArray.slice(0 , commentsToShow);
  commentsShownElement.textContent = `${commentsToShow} из ${commentsArray.length} комментариев`;
  newCommentsArray.forEach((comment) => {
    const addComment = renderComment(comment);
    commentFragment.append(addComment);
  });
  commentsContainer.append(commentFragment);
  if (commentsArray.length <= 5) {
    loadMoreCommentsButton.classList.add('hidden');
  }
}

function updateCommentsShown (commentsArray) {
  newCommentsArray = commentsArray.slice(commentsToShow, commentsToShow += 5);
  if (commentsToShow >= commentsArray.length) {
    loadMoreCommentsButton.classList.add('hidden');
    commentsToShow = commentsArray.length;
  }
  commentsShownElement.textContent = `${commentsToShow} из ${commentsArray.length} комментариев`;
  newCommentsArray.forEach((comment) => {
    const addComment = renderComment(comment);
    commentFragment.append(addComment);
  });
  commentsContainer.append(commentFragment);
}

export {updateCommentsShown,renderCommentsShown};

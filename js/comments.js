const commentsShownElement = document.querySelector('.social__comment-count');
const commentsContainer = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const loadMoreCommentsButton = document.querySelector('.social__comments-loader');
let commentsToShow = 0;
let newCommentsArray = [];

function renderComments ({avatar,name,message}) {
  const commentElement = commentTemplate.cloneNode(true);
  const commentImg = commentElement.querySelector('.social__picture');
  commentImg.innerHTML = '';
  commentImg.src = avatar;
  commentImg.alt = name;
  commentElement.querySelector('.social__text').textContent = message;
  return commentElement;
}

function updateCommentsShown (commentsArray) {
  const currentCommentsLength = commentsContainer.children.length;
  if (commentsArray.length <= 5) {
    commentsToShow = Math.min(commentsArray.length,5);
    loadMoreCommentsButton.classList.add('hidden');
  }
  newCommentsArray = commentsArray.slice(0, commentsToShow + 5);
  commentsShownElement.textContent = `${currentCommentsLength + newCommentsArray.length} из ${commentsArray.length} комментариев`;
  const commentFragment = document.createDocumentFragment();
  newCommentsArray.forEach((comment) => {
    const addComment = renderComments(comment);
    commentFragment.append(addComment);
  });
  commentsContainer.append(commentFragment);
  console.log(currentCommentsLength + newCommentsArray.length);
  console.log(commentsArray.length);
  if (currentCommentsLength + newCommentsArray.length >= commentsArray.length) {
    loadMoreCommentsButton.classList.add('hidden');
  }
}

export {updateCommentsShown};

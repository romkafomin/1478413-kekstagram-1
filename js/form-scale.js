const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 55;

const imgUploadElement = document.querySelector('.img-upload__preview');
const smallerScaleButtonElement = document.querySelector('.scale__control--smaller');
const biggerScaleButtonElement = document.querySelector('.scale__control--bigger');
const scaleValueElement = document.querySelector('.scale__control--value');

function scaleImage (value) {
  imgUploadElement.style.transform = `scale(${value / 100})`;//меняем масштаб с помощью transform
  scaleValueElement.value = `${value}%`; //обновляем значение
}

function onSmallerButtonClick () {
  const currentValue = parseInt(scaleValueElement.value, 10);
  let newValue = currentValue - SCALE_STEP;
  if (newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }
  scaleImage(newValue);
}

function onBiggerButtonClick () {
  const currentValue = parseInt(scaleValueElement.value, 10);
  let newValue = currentValue + SCALE_STEP;
  if (newValue > MAX_SCALE) {
    newValue = MAX_SCALE;
  }
  scaleImage(newValue);
}

function resetScale () {
  scaleImage(DEFAULT_SCALE);
}

smallerScaleButtonElement.addEventListener('click', onSmallerButtonClick);
biggerScaleButtonElement.addEventListener('click', onBiggerButtonClick);

export {resetScale};

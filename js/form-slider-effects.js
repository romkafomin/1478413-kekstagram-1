const EFFECTS = [
  {
    name: 'none',
    style: 'none',
    min: 0,
    max: 100,
    step: 1,
    unit: '', //единица измерения
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 0,
    max: 3,
    step: 0.1,
    unit: '',
  }
];
//эффект по умолчанию
const DEFAULT_SLIDER_EFFECT = EFFECTS[0];
//актуальный эффект
let chosenSliderEffect = DEFAULT_SLIDER_EFFECT;

const imageElement = document.querySelector('.img-upload__preview img');
const effectsElement = document.querySelector('.effects');
const sliderContainerElement = document.querySelector('.img-upload__preview-container');
const effectLevelElement = document.querySelector('.effect-level__value');
const sliderElement = document.querySelector('.effect-level__slider');

function hideSlider () {
  sliderContainerElement.classList.add('hidden');
}

function showSlider () {
  sliderContainerElement.classList.remove('hidden');
}

function isDefault () {
  return chosenSliderEffect === DEFAULT_SLIDER_EFFECT;
}

function updateSlider () {
  //обновление слайдера при изменении значения
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: chosenSliderEffect.min,
      max: chosenSliderEffect.max,
    },
    start: chosenSliderEffect.max,
    step: chosenSliderEffect.step,
  });

  if (isDefault()) {
    hideSlider();
  } else {
    showSlider();
  }
}

function onEffectsChange (evt) {
  //проверка что клик произошел именно на контейнер с фильтрами
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  // поиск нужного эффекта по названию в массиве
  chosenSliderEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  //добавление класса в img-upload__preview
  imageElement.classList = `effects__preview--${chosenSliderEffect.name}`;
  //обновление слайдера при изменении значения
  updateSlider();
}

function onsliderUpdate () {
  //получаем значение слайдера
  const sliderValue = sliderElement.noUiSlider.get();
  //проверяем, что эффект не по умолчанию
  if (chosenSliderEffect === DEFAULT_SLIDER_EFFECT) {
    imageElement.style.filter = DEFAULT_SLIDER_EFFECT.style;
  } else {
    imageElement.style.filter = `${chosenSliderEffect.style}(${sliderValue}${chosenSliderEffect.unit})`;
  }
  effectLevelElement.value = sliderValue;
}

function resetSliderEffects () {
  chosenSliderEffect = DEFAULT_SLIDER_EFFECT;
  updateSlider();
}

//создание слайдера
noUiSlider.create(sliderElement, {
  range: {
    min: DEFAULT_SLIDER_EFFECT.min,
    max: DEFAULT_SLIDER_EFFECT.max,
  },
  start: DEFAULT_SLIDER_EFFECT.max,
  step: DEFAULT_SLIDER_EFFECT.step,
  connect: 'lower',
});
//hideSlider();

//обработка изменения эффекта
effectsElement.addEventListener('change', onEffectsChange);
//обновляем слайдер при изменении значения
sliderElement.noUiSlider.on('update', onsliderUpdate);

export {resetSliderEffects};

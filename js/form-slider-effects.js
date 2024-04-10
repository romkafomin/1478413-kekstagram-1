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
    style: 'graystyle',
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

const DEFAULT_SLIDER_EFFECT = EFFECTS[0];
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
  sliderElement.noUislider.updateOptions({
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
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  chosenSliderEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  imageElement.classList = `effects__preview--${chosenSliderEffect.name}`;
  updateSlider();
}

function onsliderUpdate () {
  const sliderValue = sliderElement.noUislider.get();
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

effectsElement.addEventListener('change', onEffectsChange);
sliderElement.noUiSlider.on('update', onsliderUpdate);

export {resetSliderEffects};

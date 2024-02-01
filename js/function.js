

/**
 * проверка, является ли строка палиндромом
 * @param {string} str - исходная строка
 * @returns {boolean}
 */

function testingString(str) {
  let reverseStr = str.split('').reverse().join('');
  return reverseStr.toLowerCase().replaceAll(' ') === str.toLowerCase().replaceAll(' ') ? true : false;
}

function isPolindrom(str) {
  let lowerString = str.toLowerCase();
  let reverseString = '';
  for (let i = lowerString.length -1; i >= 0; i--) {
    reverseString += lowerString[i];
  }
  return lowerString === reverseString;
}

// Строка является палиндромом
testingString('топот'); // true
// Несмотря на разный регистр, тоже палиндром
testingString('ДовОд'); // true
// Это не палиндром
testingString('Кекс');  // false


/**
 * Убрать из строки всё, кроме цифр
 * @param {string} str - исходная строка
 * @returns {string} - строка только из цифр
 */

function сutOutNumbers(str) {
  let modifiedString = str.toString();
  let newString = '';
  for (let i = 0; i < modifiedString.length; i++) {
    if (!isNaN(parseInt(modifiedString[i]))) {
      newString += modifiedString[i];
    }
  }
  if (newString.length === 0) {
    return NaN;
  }
  return newString;
}

сutOutNumbers('1sd +-pl23dfvs')
сutOutNumbers('2023 год');            // 2023
сutOutNumbers('ECMAScript 2022');     // 2022
сutOutNumbers('1 кефир, 0.5 батона'); // 105
сutOutNumbers('агент 007');           // 7
сutOutNumbers('а я томат');           // NaN

/**
 * Функция для возврата исходнуой строки, дополненной указанными символами до заданной длины
 * @param {string} str - исходная строка
 * @param {number} length - длина
 * @param {string} addStr - добавочная строка
 * @returns {string} - измененная строка
 */

function changeString(str, length, addStr) {
  const strLength = str.length;
  const freeCharsCount = length - strLength;
  if (strLength > length) {
    return str;
  }
  const repeatString = addStr.repeat(freeCharsCount / addStr.length)
  const additionalCharsToAdd = addStr.slice(0, freeCharsCount % addStr.length);

  return additionalCharsToAdd + repeatString + str;

}

// Добавочный символ использован один раз
changeString('1', 2, '0');      // '01'
// Добавочный символ использован три раза
changeString('1', 4, '0');      // '0001'
// Добавочные символы обрезаны с конца
changeString('q', 4, 'werty');  // 'werq'
// Добавочные символы использованы полтора раза
имяФункции('q', 4, 'we');     // 'wweq'
// Добавочные символы не использованы, исходная строка не изменена
changeStringз('qwerty', 4, '0'); // 'qwerty'


/**
 * Проверка длины строки
 * @param {string} str - исходная строка
 * @param {number} num - длина
 * @returns {boolean}
 */

function getStringLength(str,length) {
  return str.length <= length ? true : false ;
}

// Cтрока короче 20 символов
getStringLength('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
getStringLength('проверяемая строка', 18); // true
// Строка длиннее 10 символов
getStringLength('проверяемая строка', 10); // false

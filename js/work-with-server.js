const URL = 'https://28.javascript.htmlacademy.pro/kekstagram';
const GET_ERROR_TEXT = 'Ошибка загрузки данных';
const SEND_ERROR_TEXT = 'Ошибка отправки данных';
const GET_ROUTE = '/DATA';
const SEND_ROUTE = '/';

function loadData (route, errorText, method) {
  fetch(`${URL}${route}`, {method})
    .then ((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .catch (() => {
      throw new Error(errorText);
    });
}

function getData () {
  return loadData(GET_ROUTE, GET_ERROR_TEXT);
}

function sendData (body) {
  return loadData(SEND_ROUTE, SEND_ERROR_TEXT, 'POST', body);
}

export {getData,sendData};

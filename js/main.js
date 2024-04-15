import {makeUserPhoto} from './photos-generator.js';
import { PHOTOS_COUNT } from './data.js';
import {createAllPicture} from './miniatures.js';
import {registerChangepictureForm} from './form.js';
import {sendData , getData} from './work-with-server.js';

//const generateArrayPhoto = Array.from({length: PHOTOS_COUNT}, makeUserPhoto);
//createAllPicture(generateArrayPhoto);
registerChangepictureForm();

registerChangepictureForm((data) => {
  sendData(data)
    .then(() => {
      alert('Отправлено');
    })
    .catch(() => {
      alert('Ошибка отправки');
    });
});


getData()
  .then((data) => {
    createAllPicture(data);
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });


//export {generateArrayPhoto};

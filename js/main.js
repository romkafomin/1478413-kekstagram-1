import {makeUserPhoto} from './photos-generator.js';
import { PHOTOS_COUNT } from './data.js';

const generateArrayPhoto = Array.from({length: PHOTOS_COUNT}, makeUserPhoto);
console.log(generateArrayPhoto);

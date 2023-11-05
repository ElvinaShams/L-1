import { changeEnding } from './task-4.js'

const countMessages = 112;
const countMessages1 = 12;
const countMessages2 = 1;
const countUsers1 = 1024;
const countUsers2 = 1026;
const countUsers3 = 121;


const array = ['сообщение', 'сообщения', 'сообщений'];
const array2 = ['пользователь', 'пользователя', 'пользователей'];

console.log(changeEnding(countMessages, array));
console.log(changeEnding(countMessages1, array));
console.log(changeEnding(countMessages2, array));
console.log(changeEnding(countUsers1,array2));
console.log(changeEnding(countUsers2,array2));
console.log(changeEnding(countUsers3,array2));


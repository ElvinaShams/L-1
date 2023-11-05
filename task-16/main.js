import * as formatDate  from "./data.js";

let format = 'MM/DD/YYYY';

const Date = formatDate(new Date(),format);
console.log(Date);


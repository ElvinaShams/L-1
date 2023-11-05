import {moment} from "moment";
// создает объект Moment из переданной даты data
// форматирует эту дату в соответствии с указанным форматом.
const formatDate = (data,format) => {
   return moment(data).format(format);
}

export default formatDate;


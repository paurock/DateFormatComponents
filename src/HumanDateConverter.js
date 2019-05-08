/* yyyy - полный год, пр.: 2012
yy - последние цифры года, пр.: 12 
MM - номер месяца, пр.: 02 
dddd - полное название дня недели, пр.: Среда 
ddd - сокращенное название дня недели, пр.: Ср. 
dd - число, пр.: 01 
hh - часы, пр.: 10 
mm - минуты, пр.: 05 
ss - секунды, пр.: 23 
zz - миллисекунды, пр.: 233 

Пример использования:

getDateTimeToString("dd/MM/yy г. Время:hh:mm:ss");
getDateTimeToString("dd-MM-yyyy hh:mm");
getDateTimeToString("Год: yyyy, День недели: dddd"); */

const GetDateTimeToString = strFormat => {
  let resultDateTime = strFormat;
  const d = new Date();

  const daysLong = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье"
  ];
  const daysShort = ["Пн.", "Вт.", "Ср.", "Чт.", "Пт.", "Сб.", "Вс."];
  const yearRegExp = d.getFullYear();
  const monthRegExp =
    String(d.getMonth() + 1).length === 1
      ? "0" + (d.getMonth() + 1)
      : d.getMonth() + 1;
  const dayRegExp =
    d.getDate().toString().length === 1 ? "0" + d.getDate() : d.getDate();
  const dayNameRegExp = d.getDay();
  const hoursRegExp =
    d.getHours().toString().length === 1 ? "0" + d.getHours() : d.getHours();
  const minuteRegExp =
    d.getMinutes().toString().length === 1
      ? "0" + d.getMinutes()
      : d.getMinutes();
  const secondsRegExp =
    d.getSeconds().toString().length === 1
      ? "0" + d.getSeconds()
      : d.getSeconds();
  const milisecondsRegExp =
    d.getMilliseconds().toString().length === 1
      ? "00" + d.getMilliseconds()
      : d.getMilliseconds().toString().length === 2
      ? "0" + d.getMilliseconds()
      : d.getMilliseconds();

  resultDateTime = resultDateTime.replace(new RegExp("yyyy", "g"), yearRegExp);
  resultDateTime = resultDateTime.replace(
    new RegExp("yy", "g"),
    String(yearRegExp).slice(-2)
  );
  resultDateTime = resultDateTime.replace(new RegExp("MM", "g"), monthRegExp);
  resultDateTime = resultDateTime.replace(
    new RegExp("dddd", "g"),
    daysLong[dayNameRegExp - 1]
  );
  resultDateTime = resultDateTime.replace(
    new RegExp("ddd", "g"),
    daysShort[dayNameRegExp - 1]
  );
  resultDateTime = resultDateTime.replace(new RegExp("dd", "g"), dayRegExp);
  resultDateTime = resultDateTime.replace(new RegExp("hh", "g"), hoursRegExp);
  resultDateTime = resultDateTime.replace(new RegExp("mm", "g"), minuteRegExp);
  resultDateTime = resultDateTime.replace(new RegExp("ss", "g"), secondsRegExp);
  resultDateTime = resultDateTime.replace(
    new RegExp("zz", "g"),
    milisecondsRegExp
  );

  return resultDateTime + "";
};
export const FormatedDate = () => GetDateTimeToString("dd.MM.yyyy");

/**
 * Генерирует дату и время в заданном формате
 * 12:59:52 03.09.2012
 * author Ильин Олег
 * param {String} strFormat формат-строка
 * returns {String} отформатированная дата
 */

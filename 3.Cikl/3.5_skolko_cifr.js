let number = 123;
let quantity = 0;

while (number) {
  number = Math.floor(Math.abs(number)/10)
  quantity++
  }

//  второй вариант решения программы

quantity = String(number).length;

//  третий вариант решения программы

quantity = String(Math.floor(Math.abs(number))).length
  
/* Техническое задание

Напиши программу, которая определяет сколько цифр в одном числе.

Само число записано в переменную number.

Найди количество цифр в этом числе и запиши результат в переменную quantity.

*/

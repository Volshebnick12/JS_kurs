let numbers = [2, 4, 7, 4, 7, 2];
let number = 4;

let lastIndex=numbers.lastIndexOf( number);

// второй вариант решения

let lastIndex;

for (let i=0; i<numbers.length; i++) {
  if (numbers[i] == number) {
    lastIndex = i;
  }
}

if (lastIndex == undefined) {
  lastIndex = -1;
}

// третий вариант решения 

let lastIndex = 0;

for (let i = 0; i <= numbers.length - 1; i++) {
  if (numbers[i] === number) {
    lastIndex = i;
  } else if (numbers[i] !== number && lastIndex === 0) {
    lastIndex = -1;
  }
}
   
/* Техническое задание

Напишите программу, которая будет находить последний индекс элемента в массиве.

Массив записан в переменную numbers.

Элемент, последний индекс которого надо найти, записан в переменную number.

Создайте переменную lastIndex и записывайте в неё последний индекс числа number. Если числа number в массиве нет, переменная lastIndex должна быть равна -1.

*/

let numbers = [1, 3, 5, 7, 9, 11];

numbers.reverse();

// др решение задачи

let numbers = [1, 3, 5, 7, 9, 11];

for(let i = 0, j = numbers.length - 1; i < j; i++, j--) {

    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
}
// др решение задачи

let numbers = [1, 3, 5, 7, 9, 11];

for (let i = 0; i < numbers.length; i++) {
  for (let j = i + 1; j < numbers.length; j++) {
    let swap = numbers[j];
    numbers[j] = numbers[i];
    numbers[i] = swap;
  }
}


/* Техническое задание

Напишите программу, которая меняет массив так, чтобы его элементы шли в обратном порядке, задом наперёд.

Массив записан в переменную numbers.

Обратите внимание, что вам нужно поменять порядок элеменов в массиве numbers. Создавать другую переменную для новой версии массива не нужно.

*/

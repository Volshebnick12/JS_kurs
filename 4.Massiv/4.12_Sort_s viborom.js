let numbers = [3, 5, 15, 6, 2, 1];

numbers.sort(function (a, b) {
  return a-b;
})

// др решение задачи

let numbers = [3, 5, 15, 6, 2, 1];

for(var i = 0; i < numbers.length - 1; i++){  // Берем элементы массива по очереди для сравнения
  var minIndex; // Создаем переменную для хранения индекса минимального элемента
  var minElement = numbers[i]; // Допускаем, что это минимальный элемент
  for(var j = i + 1; j < numbers.length; j++){ // Ищем минимальный элемент из оставшихся
    if(numbers[j] < minElement){
    minElement = numbers[j];
    minIndex = j;
    }
  }
  if(minElement !== numbers[i]){ // Если минимальный элемент не равен изначальному значению, то меняем местами и идем к следующей итерации
    var swap = numbers[i];
    numbers[i] = minElement;
    numbers[minIndex] = swap;
    }
}
  console.log(numbers)
  

  /* Техническое задание

Напиши сортировку массива выбором.

Массив записан в переменную numbers.

Отсортируй значения в массиве по возрастанию, от самого маленького значения к наибольшему.

*/

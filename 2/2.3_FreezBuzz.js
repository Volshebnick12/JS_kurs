let number = 15;
let taskResult;

if (!(number % 3)) {
  taskResult = 'Fizz';
   if (!(number % 3) && !(number % 5)) {
  taskResult = 'FizzBuzz';
}
} else if (!(number % 5)) {
  taskResult = 'Buzz';
   if (!(number % 3) && !(number % 5)) {
  taskResult = 'FizzBuzz';
}
} else {
  taskResult = number;
}


/* Техническое задание

Программа должна анализировать числа.

Если число делится на 3, результат работы программы — строка 'Fizz'.

Если число делится на 5 — строка 'Buzz'.

Если число одновременно делится на 3 и на 5 — результат 'FizzBuzz'.

В остальных случаях результат работы программы — изначальное число.

Число записано в переменную number.

Результат работы программы записывайте в переменную taskResult.

*/

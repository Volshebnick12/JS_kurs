let getDiet = function (calories, dailyСalorieLimit) {
    let sumCall = 0;
    for (let i=0; i<=calories.length-1; i++) {
      if (sumCall<dailyСalorieLimit) {
        sumCall += calories[i];
      } else {
        if (sumCall>dailyСalorieLimit) {
          i--;
          return i;
        }
        return i;
    }
  }
  }
  /* Техническое задание
  
  Мяу! Напиши программу, которая будет анализировать мой суточный рацион.
  
  Оформи программу в виде функции getDiet. Она должна принимать два параметра: массив с калорийностью блюд и лимит калорий на день. Названия параметров могут быть любыми.
  
  Программа должна возвращать количество блюд из массива, которые я могу съесть и не превысить допустимые калории. Блюда будут съедаться по порядку, начиная с первого элемента в массиве.
  
  */
  
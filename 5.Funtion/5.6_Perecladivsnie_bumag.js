let getDocumentsNumbers = function (docNames, year) {
    let checkYear;
    let total = 0;
    for (let i = 0; i < docNames.length; i++) {
    checkYear = docNames[i].indexOf(year, 4);
    if (checkYear == 4) {total++;}
    }
    return total;
    }
    

    // Второй способ решить задачу

    //  Через slice

function getDocumentsNumbers (document, year) {
let summDocument = 0;
for (i = 0; i < document.length; i++) {
if (year == document[i].slice(4)) {
summDocument++
}
}
return summDocument
}

// третий способ решить задачу

let getDocumentsNumbers = function (names, year) {
    let counter = 0; //счетчик
    for (let i = 0; i < names.length; i++) {
      let yearNum = ''; //строка, в которую записываются символы из имени документа
      
      for (let j = 4; j < names[i].length; j++) {
        yearNum += names[i][j]; //добавляем символы из имени с 5го по 8
      }
      
      if (yearNum == year) //сравниваем с приведением полученную строку и искомый год
      {
        counter ++; //если значения равны, плюсуем счетчик
      }
      
    }
    
    return counter;
  }
    
    /* Техническое задание
    
    Мяу! Напиши программу getDocumentsNumbers, которая будет возвращать число документов за указанный год.
    
    У функции должно быть два параметра: массив с названиями документов и год, за который надо найти документы. Названия параметров могут быть любыми. Даты из массива записаны в виде строк.
    
    Функция должна возвращать количество документов, в названии которых есть необходимый год.
    
    Если таких документов в массиве нет, функция должна возвращать 0.
    
    */
    
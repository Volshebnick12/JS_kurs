const getData = function(keysArray, arrayOfDataArrays) {
    let array = [];
    for (let i = 0; i < arrayOfDataArrays.length; i++) {
      let obj = {};
      for (let j = 0; j < keysArray.length; j++) {
        if (arrayOfDataArrays[i][j]){
        obj[keysArray[j]] = arrayOfDataArrays[i][j];
        }
      }
      array.push(obj);
    }
    return array;
  }
  

//   Второй вариант решения

const getData = function(keysArray, arrayOfDataArrays) {
    let array = [];
    for (let i = 0; i < arrayOfDataArrays.length; i++) {
      let obj = {};
      for (let j = 0; j < keysArray.length && arrayOfDataArrays[i][j]; j++) {
        obj[keysArray[j]] = arrayOfDataArrays[i][j];
      }
      array.push(obj);
    }
    return array;
}

    // Третий вариант решения

    const getData = (keys, data) => data.map(item => item = keys.reduce(
        (acc, cur, i) => {
          item[i] ? acc[cur] = item[i] : null;
          return acc;
        }, {}));
        
  /*
  
  Создайте функцию getData. У неё должно быть два параметра. Первый параметр — массив с ключами. Второй — массив с массивами данных.
  
  Функция должна собрать объект для каждого массива значений. Каждый из этих объектов должен быть записан в массив. Именно этот массив с объектами должна вернуть функция getData.
  
  Каждому элементу из массива ключей подходит элемент с таким же индексом в массиве значений.
  
  Есть один нюанс: значений может оказаться больше или меньше, чем ключей.
  
  Если значений не хватает, то создавать пустой ключ не надо. А если значений больше, то их не нужно включать в объект — для них нет ключей.
  
  */
  
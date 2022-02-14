let getRepeats = function (data) {
    let repeats = {};
    for (let i = 0; i < data.length; i++) {
    repeats[data[i]] = 0;
    for (let j = 0; j < data.length; j++) {
    if (data[i] == data[j]) {
    repeats[data[i]]++;
    }
    }
    }
    return repeats;
    }
    
 //  Второй вариант  решения

    const getRepeats = function(words) {
        let obj = {}
        for (let word of words) {
          obj[word] === undefined ? obj[word] = 1: obj[word]++
        }
        return obj
      }
 
 //   третий вариант решения

 const getRepeats = words => words.reduce((obj, word) => (obj[word] === undefined ? obj[word] = 1: obj[word]++, obj), {})

    /*
    
    В этой задаче вам нужно проанализировать данные — вычислить повторы каждого слова.
    
    Создайте функцию getRepeats с одним параметром. В этот параметр будет приходить массив данных.
    
    Функция должна возвращать объект, в котором указано сколько раз каждое слово встречается в массиве.
    
    
    */
    
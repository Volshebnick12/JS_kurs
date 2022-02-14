const getSortedArray = function (mass, key) {
    for (var i = 0; i < mass.length - 1; i++) {
    for (var j = i + 1; j < mass.length; j++) {
    if (mass[i][key] > mass[j][key]) {
    let swap = mass[i];
    mass[i] = mass[j];
    mass[j] = swap;
    }
    }
    }
    return mass;
    }

    // второй вариант решения
    
    const getSortedArray = (array, key) => array.sort((a,b) => a[key] - b[key]);
    
    /*
    
    Создайте функцию getSortedArray. У неё должно быть два параметра. Первый — массив, который нужно отсортировать. Второй — имя ключа в объектах. Именно по значению этого ключа нужно будет делать сортировку.
    
    Функция должна возвращать отсортированный массив объектов.
    
    Значения в массиве должны увеличиваться от меньшего к большему.
    
    */
    
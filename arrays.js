var cars = ['Ford', 'Mazda', 'KIA', 'BMW']
console.log(cars)
console.log(cars[2])

console.log(cars.length)

// добавит в конец новый элемент
cars.push('Audi')
console.log(cars)

// удаляет и возвращает последний  элемент
var audi = cars.pop()
console.log(cars, audi)

// удаляет и  возвращает первый элемент
var ford =  cars.shift()
console.log(cars, ford)

// добавляет в начало
cars.unshift(audi)
console.log(cars)

var  index =cars.indexOf('KIA')
var kia = cars[index]

console.log(kia) 
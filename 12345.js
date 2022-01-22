console.log(42)
console.log(-42)
console.log(1.5)
console.log(-8 / 3) // 2.6666
console.log(0xAB) // перевод в 16 сист.счисления
console.log(NaN) // специальное значение - число NaN (нот намбер), к приимеру поделить чиисло на строку получим нан
console.log(typeof NaN)
console.log(123 / 0)

var fortyTwo = 42
var delta = 8 / 3

console.log(fortyTwo.toString())
console.log(delta.toFixed(1))  // округляем до десятых
console.log(+delta.toFixed(1)+4)  // перевод строки в число
console.log(parseFloat(delta.toFixed(2)))  // перевод строки в число (парсит число и выдает округление указанное в скобках)
console.log(parseInt(delta.toFixed(2)))  // перевод строки в число ( работает  только с целыми числами)

console.log(isNaN(NaN))
console.log(isNaN(45))

console.log(isFinite(1/0)) // false
console.log(isFinite(9999999999)) // true

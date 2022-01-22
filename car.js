var carName = 'KIA Optima'
var carYear = 2018
let currentYear = (new Date()).getFullYear()
var nameYear ='лет'
var carAge = currentYear - carYear
var nameYear = carAge <= 4
? 'года'
: 'лет'
var messageCar = carAge > 5
? `${carName} ${carAge} ${nameYear} не на гарантии`
:  `${carName} ${carAge} ${nameYear} на гарантии`
console.log(messageCar)


// var carName = 'KIA Optima'
// var carYear = 2018
// let currentYear = (new Date()).getFullYear()
// var nameYear ='лет'
// var carAge = currentYear - carYear
// if (carAge <= 4) {
//     nameYear = 'года'
// } else {
//     nameYear = 'лет'
// }
// if (carAge  > 5)  {
//     console.log(`${carName} ${carAge} ${nameYear} не на гарантии`) 
//     // console.log (carName + ' ' + carAge + ' ' + nameYear + ' ' + 'не на гарантии')
// } else {
// console.log(`${carName} ${carAge} ${nameYear} на гарантии`)
// }
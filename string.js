var str1 = 'Hello world'
var str2 = "Hello world 2"

var personName = 'Виктор'

var message = `Человека зовут ${personName}`

console.log(message)

var newMessage = 'Hello world!!!'

console.log(newMessage.length) // количество символов
console.log(newMessage.toUpperCase()) // выражение заглавными буквами
console.log(newMessage.toLowerCase()) // выражение маленькими буквами
console.log(newMessage.charAt(1)) // определение  символа на 1 позтииции (индексация  с 0 элемента)
console.log(newMessage.indexOf('world')) // определение символа иили  части строки
console.log(newMessage.indexOf('Cat')) // определение символа иили  части строки, если не нацдено пишет -1
console.log(newMessage.substr(1, 4)) // 
console.log(newMessage.substr(newMessage.indexOf('world'), 5)) 
console.log(newMessage.substring(1, 3))

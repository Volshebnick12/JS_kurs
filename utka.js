/*   
Функция получает строку на вход
и возвращает массив строк, где первый элемент равен полученой на вход строке,
а каждый последующий элемент вместо первого символа, отличного от пробела, содержит пробел
вплодь до последнего элемента, который содержиит пробелы вместо символа исходной строки, кроме последнего.

@parm {string} strValue - входная строка
@return {string[]} - массив строк
@example
strStairs("hello") -> [
    "hello",
    " ello",
    "  llo",
    "   lo",
    "    o"
]
*/


let str = "hello";
let arr = str.split();
for (let i=1; i<str.length; i++) { 
str = str.replace(str[i-1], " ");
    arr.splice(i, 1, str);
    }
console.log(arr);

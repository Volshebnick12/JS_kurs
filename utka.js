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
    arr.splice(i, 1, str);
    }
console.log(arr);


// for (let i=1; i<str.length; i++) {
//         arr.splice(i, 1, str);
//     }
// console.log(arr);


// str = str + ",\n"+ str + ",\n"+str + ",\n"+str + ",\n"+str + ",\n";
// console.log(str);
// let arr = str.split();
// for (let i=1; i<str.length; i++) {
//     arr.splice(i, 1, str[i]);
// }
// console.log(arr);
// ['hello', 'hello', 'hello', 'hello', 'hello']

// let strStairs = "hello";
// for (let i = 1; i < strStairs.length; i++) {

// let str += strStairs;
// strStairs = strStairs.concat(strStairs);
// } 
// let string = strStairs.split();
// console.log(string);
// strStairs = strStairs.concat(strStairs)

// string.push(strStairs[i++]);
// console.log(string);

// for (let i = 1; i < strStairs.length; i++) {
//        string.push(strStairs[i]);
//     }
// console.log(string);
    

// let stringNew = string.push(strStairs);

// Import - Export

import otmazka from "./otmazka.js";
import otmazka1 from "./otmazka.js";
import kabluk from "./otmazka.js";

console.log(otmazka1('физика'));
console.log(otmazka('труды'));
console.log(kabluk('уборка'));

import {checkLS, showMessage } from "./cookies.js";
if (!checkLS()) console.log(showMessage('Problem'));


// стрелочные функции

function fname() {

}

// document.querySelector('.out-2').onclick = function () {
//     console.log('show click');
// }

document.querySelector('.out-2').onclick = () => console.log('show click');
const a1 = (b,c) => b*4*c;
console.log(a1(3,2));

// spead (расширение распространения) 

const normalWork = ["инженер", "деловод", "токарь"];
const work = [...normalWork, "блогер", "инста-модель"];
console.log(work);

const worker = {
    "name" : "Alex",
    "job" : "blohher"
}

const mucDuk = {
    ...worker,
    "position" : "clean manager"
}

console.log(mucDuk);

// rest (остаток)

const num = (...args) => args;

 console.log(num(1,2));
 console.log(num(1,2,77,88,99));

 // desctucturing

 const arr = [33,44,55,66,77];
 const[d1,d2] = arr;
 console.log(d1,d2);

 const {name, position} = mucDuk;
 console.log(name,position);

 // map, filter 

 
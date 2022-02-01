const a =[3, 4, 5];
// map

let b = a.map(item => {
    console.log(item);
    return item * 3;
})

console.log(b); // [9, 12, 15]


let b = a.map((item, index) => {
    console.log(index);
    return index; // 1
})

console.log(b); // [0,1,2] // [1,1,1]


let b = a.map(item => {
    console.log(item);
    return item * 3;
})

console.log(b); // [9, 12, 15]


// filter

const a =[3, 4, 5, 6, 8, 0, 143, 45];


let c = a.filter(item => {   
    if (item > 7) {
        return item; // true or false всегда!!! нельзя писать другое
    }
})

console.log(c); // [8,143,45]

let c = a.filter(item => {   
    if (item %2 === 0) {
        return true; // true (если тут написать item, то не выведется в консоле 0, так как item интерпритируется как 0)
    }
})

console.log(c); // [4,6,8,0]
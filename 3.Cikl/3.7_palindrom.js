let poly = 1221;
let ylop = 0;
let isPalindrome = false;

for (let i = poly; i > 0; i = (i - (i % 10)) / 10) {
    ylop += i % 10;
    if (i - (i % 10) > 0) {
  ylop *= 10;
  }
}

if (poly === ylop ) {
  isPalindrome = true;
}

//  Второй вариант решения

for (let i = 0; i < poly.toString().length; i++) {
    if (poly.toString()[i] !== poly.toString()[poly.toString().length - i]) {
        isPalindrome = false;
    }
}
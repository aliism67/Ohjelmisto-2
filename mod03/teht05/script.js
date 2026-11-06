"use strict";

const numbers = [];
let num;

while (true) {
    num = Number(prompt("Give a number"));

    if (numbers.includes(num)) {
        console.log("Number already in array");
        break;
    }
    numbers.push(num);
}
numbers.sort((a, b) => a-b)

console.log(numbers)



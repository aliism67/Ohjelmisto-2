"use strict";

const ekaStr = prompt("Anna ensimmäinen numero");
const eka = parseInt(ekaStr);
const tokaStr = prompt("Anna toinen numero");
const toka = parseInt(tokaStr);
const kolmasStr = prompt("Anna kolmas numero");
const kolmas = parseInt(kolmasStr);
const neljasStr = prompt("Anna neljäs numero");
const neljas = parseInt(neljasStr);
const viidesStr = prompt("Anna viides numero");
const viides = parseInt(viidesStr);

const numbers = [];

numbers.push(eka)
numbers.push(toka)
numbers.push(kolmas)
numbers.push(neljas)
numbers.push(viides)

for (let i = numbers.length - 1 ; i >= 0; i--) {
    console.log(`: ${numbers[i]}`);
}

console.log(numbers)

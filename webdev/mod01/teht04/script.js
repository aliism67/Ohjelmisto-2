"use strict";

const name = prompt("Tell me your name")
const num = Math.floor(Math.random() * 4) + 1;
if (num === 1) {
    document.querySelector("#target").innerHTML = name + ", you are Ravenclaw";
}

if (num === 2) {
    document.querySelector("#target").innerHTML = name + ", you are Slytherin";
}

if (num === 3) {
    document.querySelector("#target").innerHTML = name + ", you are Gryffindor";
}

if (num === 4) {
    document.querySelector("#target").innerHTML = name + ", you are Hufflepuff";
}
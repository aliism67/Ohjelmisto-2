"use strict";

function dice_roll(max_roll) {
    return Math.floor(Math.random() * max_roll) + 1;
}

let result;
let html = "<ul>";

do { 
    result = dice_roll(max_roll)
    html += `<li>${result}</li>`;
} while (result !== max_roll);

html += "</ul>";

max_roll = Number(prompt("Anna nopan sivujen määrä"))

document.querySelector("#target").innerHTML = html;
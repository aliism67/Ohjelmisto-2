"use strict";

function dice_roll() {
    return Math.floor(Math.random() * 6) + 1;
}

let result;
let html = "<ul>";

do { 
    result = dice_roll()
    html += `<li>${result}</li>`;
} while (result !== 6);

html += "</ul>";

document.querySelector("#target").innerHTML = html;

"use strict";

function dice_roll(max_roll) {
    let result = Math.floor(Math.random() * max_roll) + 1;
    return result;
}
const roll = Number(prompt("Enter the maximum roll value:"));
let result;
let html = "<ul>";

do {
    result = dice_roll(roll);
    html += `<li>You rolled a ${result}</li>`;
} while (result < roll);

html += "</ul>";
document.querySelector("#target").innerHTML = html;
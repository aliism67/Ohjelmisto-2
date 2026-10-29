
"use strict";

const yearStr = prompt("Kirjoita vuosiluku");
const year = parseInt(yearStr);

if (year % 400 === 0 ||
    (year % 4 === 0 && year % 100 !== 0)) {
    document.querySelector("#target").innerHTML =
    "Vuosi on karkausvuosi";
} else {
    document.querySelector("#target2").innerHTML =
    "Vuosi ei ole karkausvuosi";
}

"use strict";

const yearStr = prompt("Kirjoita vuosiluku");

year = parseInt(yearStr)

if (year / 4 === 0 && year / 100 !== 0 || year / 400 === 0){
    document.querySelector("#target").innerHTML =
    "vuosi " + year "on karkausvuosi";
} else {
    document.querySelector("#target").innerHTML =
    "vuosi " + year "on karkausvuosi";
}
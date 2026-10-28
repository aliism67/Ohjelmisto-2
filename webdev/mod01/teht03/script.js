"use strict";

const ekaStr = prompt("Anna ensimmäinen kokonaisluku: ");
const eka = parseInt(ekaStr);
const tokaStr = prompt("Anna toinen kokonaislluku: ");
const toka = parseInt(tokaStr);
const kolmasStr = prompt("Anna kolmas kokonaisluku: ");
const kolmas = parseInt(kolmasStr);

const summa = eka + toka + kolmas
document.querySelector("#target").innerHTML =
"Summa on " + summa
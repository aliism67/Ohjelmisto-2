"use strict";

const ekaStr = prompt("Anna ensimmäinen kokonaisluku: ");
const eka = parseInt(ekaStr);
const tokaStr = prompt("Anna toinen kokonaislluku: ");
const toka = parseInt(tokaStr);
const kolmasStr = prompt("Anna kolmas kokonaisluku: ");
const kolmas = parseInt(kolmasStr);

const summa = eka + toka + kolmas
const tulo = eka * eka * eka
const keskiarvo = (eka + toka + kolmas)/3

document.querySelector("#target").innerHTML =
"Summa on " + summa;
document.querySelector("#target2").innerHTML =
"keskiarvo on " + keskiarvo;
document.querySelector("#target3").innerHTML =
"Tulo on " + tulo;
"use strict";

const participantsStr = prompt("Anna osallistujien määrä");
/*Number(prompt("")); Tekee komennosta suoraan numeron*/
const participantsNum = parseInt(participantsStr);

const participants = [];

for (let i = 0; i < participantsNum; i++) {
    const name = prompt("Anna osallistujan nimi");
    participants.push(name);
    participants.sort();
}

document.querySelector("#target").innerHTML = participants .map(name => `<li>${name}</li>`) .join("");
/* .map käy läpi jokaisen listan esineen ja tekee sille jotain mikä laitetaan kohdassa ``. Tässä tapauksessa nimestä tehdään listan esine.
"<li>${name}</li>" tekee HTML lista esineen nimen ympärille. ja .join("") yhdistää listan esineet yhdeksi jonoksi. */
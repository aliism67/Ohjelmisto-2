'use strict';
const names = ['John', 'Paul', 'Jones'];

const target = document.querySelector("#target");

for (let name of names) {
    let item = document.createElement("li");
    item.innerHTML = `${name}`;
    target.append(item)
}


"use strict";

const target = document.getElementById("target");

const firstItem = document.createElement("li");

firstItem.innerHTML = "First item";
target.appendChild(firstItem);

const secondItem = document.createElement("li");

secondItem.innerHTML = "Second item";
secondItem.classList.add("my-item")
target.appendChild(secondItem);

const thirdItem = document.createElement("li");

thirdItem.innerHTML = "Third item";
target.appendChild(thirdItem);

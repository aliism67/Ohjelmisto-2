"use strict";

const target = document.getElementById("target");
const items = document.getElementsByClassName("my-list");

target.innerHTML = `
<li>First item</li>
<li>Second item</li>
<li>Third item</li>
`;

target.items.add("my-list");

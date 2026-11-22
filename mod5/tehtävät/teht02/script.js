"use strict";

const query = document.querySelector("#query");
const form = document.querySelector("form");

form.addEventListener("submit", async function(event) {
    event.preventDefault();

    try {
        const response = await fetch(
            `https://api.tvmaze.com/search/shows?q=${query.value}`
        );

        if (!response.ok) {
            throw new Error("Fetch Failed");
        }

        const data = await response.json();
        console.log(data);
    }   catch (error) {
        console.log(error);
    }
})
"use strict";

const form = document.querySelector("#search-form");
const query = document.querySelector("#query");

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    try {
        const response = await fetch(
            `https://api.tvmaze.com/search/shows?q=${query.value}`
        );
        if (!response.ok) {
            throw new Error("Fetch failed");
        }

        const data = await response.json();

        console.log(data);
    }   catch (error) {
        console.error(error);
    }
})
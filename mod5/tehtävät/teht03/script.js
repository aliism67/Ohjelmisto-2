"use strict";

const query = document.querySelector("#query");
const form = document.querySelector("#search-form");
const results = document.querySelector("#results");

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

        results.innerHTML = "";

        for (const result of data) {
            const series = result.show;

            const article = document.createElement("article");
            const heading = document.createElement("h2");
            const image = document.createElement("img");
            const link = document.createElement("a");
            const summary = document.createElement("div");

            heading.innerText = series.name;

            image.src = series.image?.medium;
            image.alt = series.name;

            link.href = series.url;
            link.target = "_blank";
            link.innerText = "More Information";

            summary.innerHTML = series.summary;

            article.appendChild(heading);
            article.appendChild(image);
            article.appendChild(link);
            article.appendChild(summary)
            results.appendChild(article);

        }

    }   catch (error) {
        console.log(error);
    }
})

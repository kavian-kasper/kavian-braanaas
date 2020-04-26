// API URL
const baseUrl = "https://api.rawg.io/api/games";

async function fetchGames() {
  try {
    const response = await fetch(baseUrl);
    const games = await response.json();
    displayGames(games);
  } catch (error) {
    console.log(error);
  }
}

function displayGames(json) {
  const games = json.results;

  let html = "";

  const resultsContainer = document.querySelector(".results");

  for (i = 0; i < games.length; i++) {
    html += `<div class="game">
                  <h2>${games[i].name}</h2>
                  <img src="${games[i].background_image}" alt="${games[i].name}"/>
              </div>`;
    resultsContainer.innerHTML = html;
  }
}

fetchGames();

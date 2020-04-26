const baseUrl = "https://api.rawg.io/api/games/4200";

async function fetchGames() {
  try {
    const response = await fetch(baseUrl);
    const games = await response.json();
    createGameDetails(games);
  } catch (error) {
    console.log(error);
  }
}

function createGameDetails(json) {
  console.log(json);

  const description = document.querySelector(".description");
  const heading = document.querySelector("h1");
  const bgImage = document.querySelector(".image");
  heading.innerHTML = `${json.name}`;
  description.innerHTML = `${json.description}`;
  bgImage.style.backgroundImage = `url("${json.background_image}")`;
}
fetchGames();

//QUESTION 1
const sum = (a, b) => a - b;

//QUESTION 2
const baseUrl = "https://api.rawg.io/api/games?genres=sports";

fetch(baseUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    loadGames(json);
  })
  .catch(function (error) {
    document.location.href = "error.html";
  });

function loadGames(json) {
  const games = json.results;

  for (let i = 0; i < games.length; i++) {
    console.log(games[i].name);
  }
}

//QUESTION 3
const someString = "These cats are outrageous.";

const formattedString = someString.replace("cats", "giraffes");

//QUESTION 4
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
let userId = params.get("userId");

if (userId < 10) {
  document.location.href = "first.html";
} else if (userId >= 10) {
  document.location.href = "second.html";
} else {
  document.location.href = "third.html";
}

//QUESTION 5
const container = document.querySelector(".container");
const button = document.querySelector(".btn");
container.removeChild(button);

//QUESTION 6
const animals = document.querySelector(".animals");
const liParrots = document.createElement("li");
const parrotsContent = document.createTextNode("Parrots");
const liCows = document.querySelector(".cows");

liParrots.className = "Parrots";
liParrots.appendChild(parrotsContent);
animals.appendChild(liParrots);
liCows.after(liParrots);

//QUESTION 7

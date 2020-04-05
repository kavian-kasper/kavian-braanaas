// QUESTION 1
const myFunctionExpression = function () {
  console.log("I dont have a name");
};
myFunctionExpression();

// QUESTION 2
function respondToClick() {
  console.log("The button was clicked");
}

const button = document.querySelector(".btn");

button.addEventListener("click", respondToClick);

//QUESTION 3
function callAfterKeyIsPressed(event) {
  console.dir(event.key);
}

const textInput = document.querySelector("#firstName");
textInput.addEventListener("keydown", callAfterKeyIsPressed);

//QUESTION 4
function addActiveClassOnHover() {
  button.classList.add("hover");
}

const button = document.querySelector("button");
button.addEventListener("mouseover", addActiveClassOnHover);

// //QUESTION 5
function removeClass() {
  petButton.classList.remove("hover");
}

const petButton = document.querySelector("[data-animal='dog']");
button.addEventListener("mouseover", removeClass);

//QUESTION 6
// This code generatas an 'undefined' in the console. I'd very much like to know the correct answer!
function logData() {
  console.log(listItem.dataset.animal);
}

const listItem = document.querySelectorAll("li");

for (let i = 0; i < listItem.length; i++) {
  listItem[i].addEventListener("mouseover", logData);
}

//QUESTION 7
const animal = "cow";
switch (animal) {
  case "cat":
    console.log("Meow");
    break;
  case "cow":
    console.log("Moo");
    break;
  case "bird":
    console.log("Tweet");
    break;
  default:
    console.log("Harrumph");
}

//QUESTION 8
const sheep = ["Malcolm", "Anders", "Marie"];

sheep.forEach(function (eachSheep) {
  console.log(eachSheep);
});

//QUESTION 9
function logTime() {
  console.log(new Date());
  if (counter === 5) {
    clearInterval(intervalId);
  }
  counter++;
}
let counter = 0;
const intervalId = setInterval(logTime, 500);

//QUESTION 10
const timeoutContainer = document.querySelector(".container");

function updateDiv() {
  timeoutContainer.innerHTML = "Text updated.";
}

setTimeout(updateDiv, 2000);

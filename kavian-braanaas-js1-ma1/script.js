// QUESTION 1
const cat = {
  complain: function logWord() {
    console.log("meow");
  }
};
cat.complain();

// QUESTION 2
const heading = document.querySelector("h3");

// QUESTION 3
heading.style.fontSize = "2em";

// QUESTION 4
heading.classList.add("subheading");

// QUESTION 5
const paragraphs = document.querySelectorAll("p");
// for (let i = 0; i < paragraphs.length; i++) {

// }

// QUESTION 6
resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "New paragraph";

// QUESTION 7
function logName(catArray) {
  for (let i = 0; i < catArray.length; i++) {
    console.log(catArray[i].name);
  }
}
const cats = [
  {
    name: "Blob",
    age: 10
  },
  {
    name: "Harold"
  },
  {
    name: "Blurt",
    age: 21
  }
];

logName(cats);

//  QUESTION 8
let newHTML = "";

function makeName(catName) {
  for (let i = 0; i < catName.length; i++) {
    newHTML += `<h5>${catName[i].name}</h5>`;
  }
  return newHTML;
}

// QUESTION 9
resultsContainer.innerHTML = makeName(cats);

// QUESTION 10
function makeNameAndAge(catNameAndAge) {
  for (let i = 0; i < catNameAndAge.length; i++) {
    let ageValue = "Age unknown";
    if (cats[i].age) {
      ageValue = cats[i].age;
    }
    newHTML += `<div>
    <h5>${catNameAndAge[i].name}</h5>
    <p>${ageValue}</p>
    </div>`;
  }

  return newHTML;
}
resultsContainer.innerHTML = makeNameAndAge(cats);

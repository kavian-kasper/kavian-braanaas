// question 1

var petArray = ["cat", "cow", "dog"];

// question 2

console.log(petArray[1]);

// question 3

petArray.push("sheep");

// question 4

console.log(petArray.length);

// question 5

var catObject = {
  name: "Kitty",
  color: "orange",
  age: 2
};

// question 6

console.log(catObject.age);

// question 7

catArray = [
  {
    name: "Kitty",
    color: "orange",
    age: 2
  }
];

// question 8

for (var i = 0; i < catArray.length; i++) {
  console.log(catArray[i]);
}
// question 9

function logToConsole(wordLength) {
  console.log(
    "The length of the word " +
      "'" +
      wordLength +
      "'" +
      " is " +
      wordLength.length +
      " letters."
  );
}

// question 10

logToConsole("donkey");

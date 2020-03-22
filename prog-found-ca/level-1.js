// Question 1
var stringVar = "This is a string";

//Question 2
var person = {
  name: "Peter",
  age: 24
};

// Question 3
var outOfStock = false;

if (outOfStock === false) {
  console.log("In stock");
} else {
  console.log("Out of stock");
}

// Question 4
var numbers = [1, 2, 3, 4, 5];

var lengthOfNumbers = numbers.length;

for (var i = 0; i <= lengthOfNumbers; i++) {
  console.log(i);
}

// Question 5
for (var i = 15; i <= 25; i++) {
  console.log(i);
}

// Question 6
for (var i = 15; i <= 25; i++) {
  if (i === 20) {
    console.log(i);
  }
}

//QUESTION 7
var array = [
  {
    text: "This is the first object",
    number: 1,
    boolean: true
  },
  {
    text: "This is the second object",
    number: 2,
    boolean: true
  }
];

for (var numberAndBoolean of array) {
  console.log(numberAndBoolean.text);
  console.log(numberAndBoolean.boolean);
}

// Question 8
function whatIDontLike(IDislike) {
  console.log("I don't like " + IDislike);
}

whatIDontLike("the corona-virus");

// Question 9
function subtractNums(num1, num2) {
  return num1 - num2;
}
console.log(subtractNums(4, 8));

// Question 10
var usernames = [];

function addUsername(addName) {
  usernames.push(addName);
  return usernames;
}

console.log(addUsername("John"));

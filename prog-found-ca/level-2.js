// QUESTION 1
for (var i = 15; i <= 25; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// QUESTION 2 (Tried my best, but it doesn't work.
//I don't know what it's supposed to do...)
function logSentence() {
  console.log("I am a function");
}

var innerFunction = logSentence();

function outerFunction(myArgument) {
  myArgument();
}

outerFunction(innerFunction);

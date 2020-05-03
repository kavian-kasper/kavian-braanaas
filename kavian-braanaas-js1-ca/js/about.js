// // Three seconds after this page loads, replace each occurence of the word the and The with the word banana
// // and Banana respectively - the becomes banana and The becomes Banana.

function swapTheWithBanana() {
  const textContainer = document.querySelectorAll("p");
  for (let i = 0; i < textContainer.length; i++) {
    replaced = textContainer[i].innerText
      .replace(/The /g, "Banana ")
      .replace(/the /g, "banana ");
    textContainer[i].innerHTML = `<p>${replaced}</p>`;
  }
  if (counter === 1) {
    clearInterval(intervalId);
  }
}

let counter = 0;
const intervalId = setInterval(swapTheWithBanana, 3000);

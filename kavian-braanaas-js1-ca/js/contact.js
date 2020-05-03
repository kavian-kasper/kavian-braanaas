const form = document.querySelector("#contactForm");
form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();
  // first name container and value
  const firstName = document.querySelector("#name");
  const firstNameError = document.querySelector("#nameError");
  const firstNameValue = firstName.value.trim();

  // answer container and value
  const answer = document.querySelector("#answer");
  const answerError = document.querySelector("#answerError");
  const answerValue = answer.value.trim();

  // email container and value
  const email = document.querySelector("#email");
  const emailError = document.querySelector("#emailError");
  const emailValue = email.value;
  const regEx = /\S+@\S+\.\S+/;

  // address container and value
  const address = document.querySelector("#address");
  const addressError = document.querySelector("#addressError");
  const addressValue = address.value.trim();

  let formSuccess = [];
  // test name
  if (firstNameValue.length === 0) {
    firstNameError.style.display = "block";
  } else {
    firstNameError.style.display = "none";
    formSuccess.push(firstNameValue);
  }
  // test answer
  if (answerValue.length < 10) {
    answerError.style.display = "block";
  } else {
    answerError.style.display = "none";
    formSuccess.push(answerValue);
  }

  // test email
  if (regEx.test(emailValue) === true) {
    emailError.style.display = "none";
    formSuccess.push(emailValue);
  } else {
    emailError.style.display = "block";
  }
  //test address
  if (addressValue.length < 15) {
    addressError.style.display = "block";
  } else {
    addressError.style.display = "none";
    formSuccess.push(addressValue);

    if (formSuccess.length === 4) {
      form.innerHTML += `<h1>The form was successfully registered</h1>`;
    }
  }
}

document.getElementById("submit-button").addEventListener("click", function () {
  const ageInput = document.getElementById("age"); // Get the input element
  const age = ageInput.value; // Get the value of the input

  if (age <= 6) {
    window.prompt("you are young, drink milk");
  } else if (age >= 65) {
    window.prompt("you are old although age is relative");
  }
});

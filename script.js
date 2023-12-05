const form = document.querySelector(".form");
const buttons = document.querySelectorAll(".button");
const thanksSection = document.querySelector(".thanks");

// Select input variables
const nameInput = document.querySelector("#name");
const numberInput = document.querySelector("#name");
const dateInput = document.querySelector("#name");
const cvcInput = document.querySelector("#name");

// Select card variables
const cardNumber = document.querySelector(".card-front__number");
const cardName = document.querySelector(".card-front__name");
const cardDate = document.querySelector(".card-front__expiry");
const cardCvc = document.querySelector(".card-back__cvc");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    let name = nameInput.value.trim();
    let number = numberInput.value.trim();
    let date = dateInput.value.trim();
    let cvc = cvcInput.value.trim();

    form.classList.toggle("hidden");
    thanksSection.classList.toggle("hidden");
  });
});

function nameCheck(name) {
    return name === "" || isNaN(name);
}

function cardNumberCheck(cardNumber) {

}

function dateCheck() {
    const currentDate = new Date();
    
}

function cvcCheck(cvc) {
  return cvc === "" || cvc.length !== 3 || cvc < 0;
}

let amountElement = document.querySelector(".js-PLN")
let exchangeElement = document.querySelector(".js-EUR")
let formElement = document.querySelector(".js-form")
let resultElement = document.querySelector(".js-PLNEUR")


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value;
    let exchange = exchangeElement.value;


    let result = amount / exchange;


    resultElement.innerText  = result.toFixed(0);

});
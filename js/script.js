

{
const calculateResult = (amount, exchange) => {
    const amountElement = document.querySelector(".js-PLN")
    const exchangeElement = document.querySelector(".js-EUR")

    return amount / exchange;

};

const onFormSubmit = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-PLN")
    const exchangeElement = document.querySelector(".js-EUR")
    const resultElement = document.querySelector(".js-PLNEUR")

    const amount = amountElement.value;
    const exchange = exchangeElement.value;
    

    
    const result = calculateResult(amount, exchange);

    resultElement.innerText = result.toFixed(0)
};


const init = () => {
    const formElement = document.querySelector(".js-form")

    formElement.addEventListener("submit", onFormSubmit);

};

init();
}

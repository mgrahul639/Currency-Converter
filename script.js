/* eslint-disable no-undef */

const fromDropDown = document.querySelector('#from-currency-select');
const ToDropDown = document.querySelector('#to-currency-select');
// eslint-disable-next-line no-undef
let api = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

console.log(api);
 

//* fromDropDown
// eslint-disable-next-line no-undef
currencies.forEach((currency) => {
	//console.log(currency);
	const option = document.createElement('option');
	//console.log(option);
	option.value = currency;
	option.text = currency;
	fromDropDown.add(option);
});

//* toDropDown
// eslint-disable-next-line no-undef
currencies.forEach((currency) => {
	const option = document.createElement('option');
	option.value = currency;
	option.text = currency;
	ToDropDown.add(option);
	
});



function convertCurrency(){
	//Create References
	const amount = document.querySelector('#amount').value;
	//console.log(amount);
	const fromCurrency = fromDropDown.value;
	const toCurrency = ToDropDown.value;

	//If amount input field is not empty
	if (amount.length != 0) {
		fetch(api)
			.then((resp) => resp.json())
			.then((data) => {
				let fromExchangeRate = data.conversion_rates[fromCurrency];
				let toExchangeRate = data.conversion_rates[toCurrency];
				console.log(fromExchangeRate, toExchangeRate);
				const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;
				console.log(convertedAmount);
				result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
			});
	} else if(amount <= 0) {
		alert('Please fill in the amount');
	}
}

// eslint-disable-next-line no-undef
document.querySelector('#convert-button').addEventListener('click', convertCurrency);
window.addEventListener('load', convertCurrency);
const convertToCelsius = function(fTemp) {
	let celsius = (5/9)*(fTemp-32);

	return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function(cTemp) {
	let fahrenheit = ((9/5)*cTemp) + 32;

	return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

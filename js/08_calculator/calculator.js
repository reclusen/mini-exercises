const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let res = 0;

	for (let i = 0; i < arr.length; i++) {
		res += arr[i];
	}

	return res;
};

const multiply = function(arr) {
	let res = 1;

	for (let i = 0; i < arr.length; i++) {
		res *= arr[i];
	}

	return res;
};

const power = function(x, pow) {
	return x ** pow;
};

const factorial = function(num) {
	let res = 1;

	if (num == 0 || num == 1) {
		return 1;
	}

	if (num == 2) {
		return 2;
	}

	for (let i = num; i > 0; i--) {
		res *= i;
	}

	return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

const sumAll = function(a, b) {
	let c = 0;

	if (!Number.isInteger(a) || !Number.isInteger(b) || (a < 0 || b < 0)) {
		return "ERROR";
	}

	if (a > b) {
		for (let i = a; i >= b; i--) {
			c += i;
		}
	}

	for (let i = a; i <= b; i++) {
		c += i;
	}

	return c;
};

// Do not edit below this line
module.exports = sumAll;

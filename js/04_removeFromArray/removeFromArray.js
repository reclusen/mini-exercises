const removeFromArray = function(arr, ...args) {
	let j = 1;
	let newArr = [];

	arr.forEach((val) => {
		if (!args.includes(val)) {
			newArr.push(val);
		}
	});

	return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;

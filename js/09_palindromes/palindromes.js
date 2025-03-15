const palindromes = function(str) {
	let newStr = str.replaceAll(/[^A-Za-z0-9]/g, "").toLowerCase();

	let reversed = reverse(newStr);

	for (let i = 0; i < newStr.length; i++) {
		if (newStr[i] !== reversed[i]) {
			return false;
		}
	}

	return true;
};

const reverse = function(str) {
	let res = "";

	for (let i = str.length - 1; i >= 0; i--) {
		res += str[i];
	}

	return res;
}

// Do not edit below this line
module.exports = palindromes;

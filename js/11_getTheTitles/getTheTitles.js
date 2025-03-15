const getTheTitles = function(object) {
	const titles = [];

	object.forEach((obj) => {
		titles.push(obj.title);
	});

	return titles;
};

// Do not edit below this line
module.exports = getTheTitles;

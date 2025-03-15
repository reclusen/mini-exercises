const findTheOldest = function(people) {
	return people.reduce((oldestPerson, currPerson) => {
		const oldestAge = getAge(oldestPerson);
		const currAge = getAge(currPerson);

		return oldestAge < currAge ? currPerson : oldestPerson;
	});
};

const getAge = function(person) {
	let currDate = new Date().getFullYear();

	if (!person.yearOfDeath) {
		return currDate - person.yearOfBirth;
	}

	return person.yearOfDeath - person.yearOfBirth;
}


// Do not edit below this line
module.exports = findTheOldest;

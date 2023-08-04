const findTheOldest = function(people) {
  return people.reduce((prevPerson, currPerson) => {
    if (!('yearOfDeath' in currPerson)) {
      currPerson.yearOfDeath = (new Date()).getFullYear();
    }
    if (Object.keys(prevPerson).length) {
      const prevAge = prevPerson.yearOfDeath - prevPerson.yearOfBirth;
      const currAge = currPerson.yearOfDeath - currPerson.yearOfBirth;
      currPerson = currAge > prevAge ? currPerson : prevPerson;
    }
    return currPerson;
  }, {});
};

// Do not edit below this line
module.exports = findTheOldest;

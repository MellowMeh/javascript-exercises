const getAge = (birth, death) => {
    if (!death) {
        death = new Date().getFullYear();
    } 
    return death - birth;
};

const findTheOldest = function (people) {
    return people.reduce((personOne, personTwo) => {
        const personOneAge = getAge(personOne.yearOfBirth, personOne.yearOfDeath);
        const personTwoAge = getAge(personTwo.yearOfBirth, personTwo.yearOfDeath);
        return personOneAge < personTwoAge ? personTwo: personOne;
    }
)};




// Do not edit below this line
module.exports = findTheOldest;



//reduce each element with function age => yearOfDeath-yearOfBirth
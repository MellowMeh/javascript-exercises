const palindromes = function (string) {
    reversedString = string.split("").reverse().join("")
    if (reversedString === string) {
        return true;
    } else {
        return false;
    }
};

palindromes('racecar');
palindromes('racecar!');


// Do not edit below this line
module.exports = palindromes;

const palindromes = function (string) {
    acceptedValues = 'abcdefghijklmnopqrstuvwxyz0123456789';
    cleanString = string.toLowerCase().split("").filter(item => acceptedValues.includes(item)).join("");
    reverseString = string.toLowerCase().split("").filter(item => acceptedValues.includes(item)).reverse().join("");
    if (cleanString === reverseString) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;

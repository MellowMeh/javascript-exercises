let string = "";
let letterSelected = "";

const reverseString = function(string) {
    let stringReversed = "";
    for (let i = string.length; i > -1; i--)
        if (string.length > stringReversed.length) {
            letterSelected = string.charAt(i);
            stringReversed += letterSelected;
        }
    return stringReversed;
};



reverseString('hello');
reverseString('hello there');
reverseString('123! abc! Hello, Odinite.');
reverseString('');


// Do not edit below this line
module.exports = reverseString;
let string;
let letterSelected = "";
let stringReversed = "";

const reverseString = function(string) {
    for (let i = string.length; i > -1; i--)
        if (string.length > stringReversed.length) {
            letterSelected = string.charAt(i);
            stringReversed += letterSelected;
        }
        return stringReversed;
};


reverseString('hello');


// Do not edit below this line
module.exports = reverseString;
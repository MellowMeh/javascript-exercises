let array = []
let index;

const removeFromArray = function(elements, ...args) {
    array = elements
    index = array.indexOf(...args)
    array.splice(index, 1);
    return array;
};


removeFromArray([1, 2, 3, 4], 3)








// Do not edit below this line
module.exports = removeFromArray;

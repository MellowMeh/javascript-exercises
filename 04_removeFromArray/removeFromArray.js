let array = []
let index;

const removeFromArray = function(elements, ...args) {
    array = elements
    for (let i of args) {
        index = array.indexOf(i)
        array.splice(index, 1);
    }
    return array;
}


removeFromArray([1, 2, 3, 4], 3)
removeFromArray([1, 2, 3, 4], 3, 2)







// Do not edit below this line
module.exports = removeFromArray;

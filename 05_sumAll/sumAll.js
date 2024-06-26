const sumAll = function (min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) {
        return "ERROR";
    }
    if (min < 0 || max < 0) {
        return "ERROR";
    }    
    let sum = 0;
    let numberArray = Array.from(arguments) // makes an array[1,4]
    numberArray.sort(function(a,b){return a-b}); //sorts array from smallest to largest (i.e. [4, 1] becomes [1, 4])
    for (i = 0; i <= numberArray.at(1); i++) {
        sum += i;
    }
    return sum;
}



sumAll(1, 4);
sumAll(1, 4000);
sumAll(123, 1);
sumAll(-10, 4);
sumAll(10, "90");
sumAll(10, [90, 1]);

// Do not edit below this line
module.exports = sumAll;


//find smallest value
//repeat a loop incrementing i until i = largest value
    //for each loop add that i to the sum
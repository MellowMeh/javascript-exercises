const fibonacci = function(input) {
    //convert string inputs to number
    selectedIndex = Number.parseInt(input);

    //return error if input is negative
    if (selectedIndex < 0){
        return "OOPS";
    }

    //create fibonacci array
    fibonacciArray = [0, 1, 1]
    for (i = 3; i <= selectedIndex; i++)
        fibonacciArray.push((fibonacciArray[i-1]) + (fibonacciArray[i-2]));


    //return selectedIndex
    return fibonacciArray.at(selectedIndex);


}

// Do not edit below this line
module.exports = fibonacci;



//construct array
//select number to find sum of...in this case 8
    //numOne = array[num - 1]
    //numTwo = array[num -2]
    //result = numOne + numTwo
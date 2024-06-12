const add = function(num1, num2) {
	result = num1 + num2;
  return result;
};

const subtract = function(num1, num2) {
	result = num1 - num2;
  return result;
};

const sum = function(...array) {
  let result = 0;
  array[0].forEach((element) => result += element);
  return result;
}

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
};

add(0, 0);
add(2, 2);
add(2, 6);
subtract(10, 4);
sum([]);
sum([7]);
sum([7, 11]);
sum([1, 3, 5, 7, 9]);




// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

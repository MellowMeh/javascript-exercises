const add = function(num1, num2) {
	result = num1 + num2;
  return result;
};

const subtract = function(num1, num2) {
	result = num1 - num2;
  return result;
};

const sum = function(...array) {
  result = 0;
  array[0].forEach((element) => result += element);
  return result;
}

const multiply = function(...array) {
  result = 1;
  array[0].forEach((element) => result *= element);
  return result;
};

const power = function(base, exponent) {
	result = base ** exponent;
  return result;
};

const factorial = function(num) {
  result;
  if (num === 0 || num === 1) {
      result = 1;
  } else {
      result = num * factorial(num - 1);
  }
  return result;
};

add(0, 0);
add(2, 2);
add(2, 6);
subtract(10, 4);
sum([]);
sum([7]);
sum([7, 11]);
sum([1, 3, 5, 7, 9]);
multiply([2, 4]);
multiply([2, 4, 6, 8, 10, 12, 14]);
power(4, 3);
factorial(0);
factorial(1);
factorial(2);
factorial(5);
factorial(10);




// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

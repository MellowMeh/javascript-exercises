const convertToCelsius = function(degreesFahrenheit) {
  let num = (degreesFahrenheit -32) * 5/9; //F to C formula
  let n = num.toFixed(1); //rounds first place after decimal, but converts to string
  let result = Number(n); //convert string back to number
  return result;
};

const convertToFahrenheit = function(degreesCelsius) {
  let num = degreesCelsius * 9/5 + 32; // C to F formula
  let n = num.toFixed(1); //rounds first place after decimal, but converts to string
  let result = Number(n); //convert string back to number
  return result;

};

convertToCelsius(32);
convertToCelsius(100);



//x°C ≘ (x × 9/5 + 32)°F	
//x°F ≘ (x − 32) × 5/9°C






// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

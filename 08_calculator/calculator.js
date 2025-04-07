const add = (numberOne, numberTwo) => numberOne + numberTwo;

const subtract = (numberOne, numberTwo) => numberOne - numberTwo;

const sum = (arrayToSumElement) => {
  let result = 0;
  arrayToSumElement.forEach((element) => {
    result += element;
  });

  return result;
};

const multiply = (arrayToMultiplyElement) => {
  let result = 1;
  arrayToMultiplyElement.forEach((element) => {
    result *= element;
  });
  return result;
};

const power = (numberOne, numberTwo) => numberOne ** numberTwo;


const factorial = (numberToCalculedFactorial) => {
  let result = 1;
  for (let i = numberToCalculedFactorial; i > 0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

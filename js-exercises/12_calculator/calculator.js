const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arrayNumbers) {
  return arrayNumbers.reduce((total, num) => total + num, 0);
};

const multiply = function (arrayNumbers) {
  return arrayNumbers.reduce((total, num) => total * num, 1);
};

const power = function (base, exponent) {
  return base**exponent;
};

const factorial = function (a) {
  if (a===1 || a==0) return 1;
  return a * factorial(a-1)
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

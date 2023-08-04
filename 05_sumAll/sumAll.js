const sumAll = function(firstNumber, secondNumber) {
  let result = 0;
  if (!Number.isInteger(firstNumber) || 
      !Number.isInteger(secondNumber) ||
      firstNumber < 0 ||
      secondNumber < 0) {
    result = 'ERROR';
  }
  else {
    let i = firstNumber > secondNumber ? secondNumber : firstNumber;
    let max = firstNumber > secondNumber ? firstNumber : secondNumber;
    for (; i <= max; i++) {
      result += i;
    }
  }

  return result;
};

// Do not edit below this line
module.exports = sumAll;

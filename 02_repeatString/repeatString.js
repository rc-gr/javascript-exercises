const repeatString = function(text, repeatTimes) {
  let result = '';

  if (repeatTimes < 0) {
    result = 'ERROR';
  }
  else {
    for (let i = 0; i < repeatTimes; i++) {
      result += text;
    }
  }

  return result;
};

// Do not edit below this line
module.exports = repeatString;

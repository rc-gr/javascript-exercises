const palindromes = function (str) {
  let alphanumeric = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return alphanumeric === [...alphanumeric].reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;

export const capitalize = (str) => {
  const firstLetter = str.charAt(0).toUpperCase();
  return `${firstLetter}${str.slice(1)}`;
};

export const reverseString = (str) => {
  const arr = str.split('');
  arr.reverse();
  return arr.join('');
};

export const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
};

export const analyzeArray = (arr) => ({
  length: arr.length,
  average: arr.reduce((a, b) => a + b, 0) / arr.length,
  min: Math.min(...arr),
  max: Math.max(...arr),
});

const shiftChar = (char, shift = 1) => {
  const charCode = char.charCodeAt(0);
  if (charCode >= 65 && charCode <= 90) {
    return String.fromCharCode(((charCode + shift - 65) % 26) + 65);
  }
  if (charCode >= 97 && charCode <= 122) {
    return String.fromCharCode(((charCode + shift - 97) % 26) + 97);
  }
  return char;
};

export const caesarCipher = (str, shift = 1) => {
  const arr = str.split('');
  const shifted = arr.map((char) => shiftChar(char, shift));
  console.log(shifted.join(''));
  return shifted.join('');
};

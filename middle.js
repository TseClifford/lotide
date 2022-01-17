const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  let middleArray = [];
  let middleFirstIndex = 0;
  let middleSecondIndex = 0;

  if (array.length > 2) {
    // Even array
    if (array.length % 2 === 0) {
      middleFirstIndex = (array.length / 2) - 1;
      middleSecondIndex = array.length / 2;
      middleArray.push(array[middleFirstIndex], array[middleSecondIndex]);
      return middleArray;
    }
    // Odd array
    else if (array.length % 2 === 1) {
      middleFirstIndex = (array.length - 1) / 2;
      middleArray.push(array[middleFirstIndex]);
      return middleArray;
    }
  }
  return middleArray;
};

module.exports = middle;
const eqArrays = function(firstArray, secondArray) {
  let eqValue = true;
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      eqValue = false;
    }
  }
  return eqValue;
};

const assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray) === true) {
    console.log('✅ The two arrays are identical.');
  } else {
    console.log('🛑 The two arrays are not identical.');
  }
};


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
  } else {
    return middleArray;
  }
};

// TEST CODE
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
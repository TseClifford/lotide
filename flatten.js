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

const flatten = function(initialArray) {
  let flatArray = [];
  for (let i = 0; i < initialArray.length; i++) {
    if (Array.isArray((initialArray[i])) === true) {
      for (let j = 0; j < initialArray[i].length; j++) {
        flatArray.push(initialArray[i][j]);
      }
    } else {
      flatArray.push(initialArray[i]);
    }
  }
  console.log(flatArray);
};

// TEST CODE
flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
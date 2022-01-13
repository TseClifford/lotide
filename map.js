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

const words = ["ground", "control", "to", "major", "tom"];
const words2 = ['hello', 'world', 'test', 'one'];
const words3 = ['apple', 'pineapple', 'orange', 'peach'];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// const results1 = map(words, word => word[0]);

assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(words2, word => word[0]), ['h', 'w', 't', 'o']);
assertArraysEqual(map(words3, word => word[0]), ['a', 'p', 'o', 'p']);
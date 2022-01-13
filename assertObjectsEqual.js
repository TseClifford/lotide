// FUNCTION IMPLEMENTATION

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(firstArray, secondArray) {
  let eqValue = true;
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      eqValue = false;
    }
  }
  return eqValue;
};

const eqObjects = function(object1, object2) {
  let keyArray1 = Object.keys(object1);
  let keyArray2 = Object.keys(object2);

  for (let key of keyArray1) {
    if (Array.isArray((object1[key]))) {
      if (keyArray1.length !== keyArray2.length) {
        return eqArrays(object1[key], object2[key]);
      }
      for (let i = 0; i < object2[key].length; i++) {
        if (object1[key][i] !== object2[key][i]) {
          return false;
        }
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  let results = eqObjects(actual, expected);
  if (results) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({ a: 1, b: 'hello', c: [1, 2, 3], d: 'teststring' }, { a: 1, b: 'hello', c: [1, 2, 3], d: 'teststring' }); // Pass
assertObjectsEqual({ a: 1, b: 'hello', c: [1, 2, 3], d: 'teststring' }, { a: 1, b: 'hello', c: [1, 2, 3], d: 'test' }); // Fail
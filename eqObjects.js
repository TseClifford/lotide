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

// TEST CODE
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false
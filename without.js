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

const without = function(sourceArray, itemsToRemove) {
  let newArray = [];
  newArray = sourceArray;
  for (let j = 0; j < itemsToRemove.length; j++) {
    for (let i = 0; i < sourceArray.length; i++) {
      // Find item index in new array and splice if match
      if (sourceArray[i] === itemsToRemove[j]) {
        newArray.splice(newArray.indexOf(sourceArray[i]), 1);
      }
    }
  }
  return newArray;
};

// TEST CODE
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
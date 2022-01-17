const eqArrays = function(firstArray, secondArray) {
  let eqValue = true;
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      eqValue = false;
    }
  }
  return eqValue;
};

module.exports = eqArrays;
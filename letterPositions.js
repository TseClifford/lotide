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


const letterPositions = function(sentence) {
  const results = {};
  let lowerCaseSentence = '';
  lowerCaseSentence = sentence.toLowerCase();

  for (let i = 0; i < lowerCaseSentence.length; i++) {
    let letter = lowerCaseSentence[i];

    if (letter.match(/[a-z]/)) {
      if (Array.isArray(results[letter])) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      }
    }
  }
  return results;
};

// TEST CODE
console.log(letterPositions(("lighthouse in the house")));

assertArraysEqual(letterPositions("hello").e, [1]);
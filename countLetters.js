// FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
//   } else if (actual !== expected) {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const countLetters = function(str) {
  const results = {};
  let trimmedStr = '';
  trimmedStr = str.toLowerCase().replace(/\s+/g, '');

  for (let letter of trimmedStr) {
    if (!Number(results[letter])) {
      results[letter] = 1;
    } else {
      results[letter] += 1;
    }
  }
  return results;
};

// TEST CODE
console.log(countLetters("lighthouse in the house"));
const eqObjects = require('./eqObjects');

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
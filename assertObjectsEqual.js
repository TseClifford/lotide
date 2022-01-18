const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect; // <= add this line
  let results = eqObjects(object1, object2);
  if (results) {
    console.log(`✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

module.exports = assertObjectsEqual;
// assertObjectsEqual({ a: 1, b: 'hello', c: [1, 2, 3], d: 'teststring' }, { a: 1, b: 'hello', c: [1, 2, 3], d: 'teststring' }); // Pass
// assertObjectsEqual({ a: 1, b: 'hello', c: [1, 2, 3], d: 'teststring' }, { a: 1, b: 'hello', c: [1, 2, 3], d: 'test' }); // Fail
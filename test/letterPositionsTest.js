const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

// TEST CODE
describe("#letterPositions", () => {
  it(`returns [1] for letter position of 'e' in 'hello'`, () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });
});
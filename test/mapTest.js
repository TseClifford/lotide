const assert = require('chai').assert;
const map = require('../map');

// TEST CODE
describe("#map", () => {
  it(`returns ['g', 'c', 't', 'm', 't']`, () => {
    const words = ["ground", "control", "to", "major", "tom"];
    assert.deepEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
  });

  it(`returns ['h', 'w', 't', 'o']`, () => {
    const words2 = ['hello', 'world', 'test', 'one'];
    assert.deepEqual(map(words2, word => word[0]), ['h', 'w', 't', 'o']);
  });

  it(`returns ['a', 'p', 'o', 'p']`, () => {
    const words3 = ['apple', 'pineapple', 'orange', 'peach'];
    assert.deepEqual(map(words3, word => word[0]), ['a', 'p', 'o', 'p']);
  });
});
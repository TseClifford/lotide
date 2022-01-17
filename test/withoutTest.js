const assert = require('chai').assert;
const without = require('../without');

// TEST CODE
describe("#without", () => {

  it(`returns ["hello", "world"] from without(words, ["lighthouse"]`, () => {
    const words = ["hello", "world", "lighthouse"];
    assert.deepEqual(without(words, ["lighthouse"]), ["hello", "world"]);
  });

  it(`returns ["hello", "world", "lighthouse"], original array untouched`, () => {
    const words = ["hello", "world", "lighthouse"];
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });
});
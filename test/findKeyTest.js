const assert = require('chai').assert;
const findKey = require('../findKey');

// TEST CODE
describe("#findKey", () => {
  it(`returns 'noma' from keys"`, () => {
    const testObj = {
      "Blue Hill": { stars: 1 },
      "Akaleri": { stars: 3 },
      "noma": { stars: 2 },
      "elBulli": { stars: 3 },
      "Ora": { stars: 2 },
      "Akelarre": { stars: 3 }
    };
    assert.strictEqual(findKey(testObj, x => x.stars === 2), 'noma');
  });
});
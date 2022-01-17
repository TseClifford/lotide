const assert = require('chai').assert;
const countLetters = require('../countLetters');

// TEST CODE
describe("#countLetters", () => {
  it(`returns { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 } 
  from "lighthouse in the house"`, () => {
    const testString = "lighthouse in the house";
    assert.deepEqual(countLetters(testString), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 });
  });
});
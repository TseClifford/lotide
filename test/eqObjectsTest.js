const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

// TEST CODE
describe("#eqObjects", () => {
  it(`returns true for 
  cd = { c: "1", d: ["2", 3] }
  dc = { d: ["2", 3], c: "1" }`, () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.strictEqual(eqObjects(cd, dc), true);
  });

  it(`returns false for
  const cd = { c: "1", d: ["2", 3] }
  const cd2 = { c: "1", d: ["2", 3, 4] }`, () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    assert.strictEqual(eqObjects(cd, cd2), false);
  });
});
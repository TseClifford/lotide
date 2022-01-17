const assert = require('chai').assert;
const countOnly = require('../countOnly');

// TEST CODE
describe("#countOnly", () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  
  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

  it(`returns 1 count of the name "Jason" = true`, () => {
    assert.strictEqual(result1["Jason"], 1);
  });

  it(`returns undefined since no count while "Karima" = true`, () => {
    assert.strictEqual(result1["Karima"], undefined);
  });

  it(`returns 2 count of the name "Fang" = true`, () => {
    assert.strictEqual(result1["Fang"], 2);
  });

  it(`returns undefined since "Agouhanna" = false`, () => {
    assert.strictEqual(result1["Agouhanna"], undefined);
  });
});
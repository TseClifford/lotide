const assert = require('chai').assert;
const tail = require('../tail');

// TEST CODE
describe("#tail", () => {
  it(`returns 3 for total elements in original array ["Yo Yo", "Lighthouse", "Labs"]`, () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words); // no need to capture the return value since we are not checking it
    assert.strictEqual(words.length, 3); // original array should still have 3 elements!
  });

  it(`returns 2 for total elements new array`, () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result.length, 2); // original array should still have 3 elements!
  });

  it(`returns "Lighthouse" for first element in new array`, () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result[0], "Lighthouse"); // original array should still have 3 elements!
  });

  it(`returns "Labs" for second element in new array`, () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result[1], "Labs"); // original array should still have 3 elements!
  });
});
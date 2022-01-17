const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  let keyArray1 = Object.keys(object1);
  let keyArray2 = Object.keys(object2);

  for (let key of keyArray1) {
    if (Array.isArray((object1[key]))) {
      if (keyArray1.length !== keyArray2.length) {
        return eqArrays(object1[key], object2[key]);
      }
      for (let i = 0; i < object2[key].length; i++) {
        if (object1[key][i] !== object2[key][i]) {
          return false;
        }
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;
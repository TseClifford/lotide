const flatten = function(initialArray) {
  let flatArray = [];
  for (let i in initialArray) {
    if (Array.isArray((initialArray[i])) === true) {
      for (let j in initialArray[i]) {
        flatArray.push(initialArray[i][j]);
      }
    } else {
      flatArray.push(initialArray[i]);
    }
  }
  return flatArray;
};

module.exports = flatten;
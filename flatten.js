const flatten = function(array) {
  let flatArray = [];
  for (let i in array) {
    if (Array.isArray((array[i])) === true) {
      for (let j in array[i]) {
        flatArray.push(array[i][j]);
      }
    } else {
      flatArray.push(array[i]);
    }
  }
  return flatArray;
};

module.exports = flatten;
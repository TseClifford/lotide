const tail = function(array) {
  let newArray = [];
  if (array.length > 0) {
    newArray = array.slice(1);
    return newArray;
  }
  return undefined;
};

module.exports = tail;
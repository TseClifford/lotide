const findKeyByValue = function(obj, keyValue) {
  let key = undefined;

  for (let genre in obj) {
    if (obj[genre] === keyValue) {
      key = genre;
    }
  }
  return key;
};

module.exports = findKeyByValue;
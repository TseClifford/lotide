const findKey = function(obj, callback) {
  let keyName = '';
  for (let key in obj) {
    if (callback(obj[key])) {
      keyName = key;
      break;
    }
  }
  return keyName;
};

module.exports = findKey;
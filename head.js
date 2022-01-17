const head = function (array) {
  if (array.length >= 1) {
    return array[0];
  }
  return undefined;
}

module.exports = head;
const without = function(array, itemsToRemove) {
  let newArray = [];
  newArray = array;
  
  for (let j in itemsToRemove) {
    for (let i in array) {
      // Find item index in new array and splice if match
      if (array[i] === itemsToRemove[j]) {
        newArray.splice(newArray.indexOf(array[i]), 1);
      }
    }
  }
  return newArray;
};

module.exports = without;
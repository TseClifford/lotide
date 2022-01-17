const without = function(sourceArray, itemsToRemove) {
  let newArray = [];
  newArray = sourceArray;
  
  for (let j in itemsToRemove) {
    for (let i in sourceArray) {
      // Find item index in new array and splice if match
      if (sourceArray[i] === itemsToRemove[j]) {
        newArray.splice(newArray.indexOf(sourceArray[i]), 1);
      }
    }
  }
  return newArray;
};

module.exports = without;
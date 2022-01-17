const countLetters = function(str) {
  const results = {};
  let trimmedStr = '';
  trimmedStr = str.toLowerCase().replace(/\s+/g, '');

  for (let letter of trimmedStr) {
    if (!Number(results[letter])) {
      results[letter] = 1;
    } else {
      results[letter] += 1;
    }
  }
  return results;
};

module.exports = countLetters;
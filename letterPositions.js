const letterPositions = function(sentence) {
  const results = {};
  let lowerCaseSentence = '';
  lowerCaseSentence = sentence.toLowerCase();

  for (let i = 0; i < lowerCaseSentence.length; i++) {
    let letter = lowerCaseSentence[i];

    if (letter.match(/[a-z]/)) {
      if (Array.isArray(results[letter])) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      }
    }
  }
  return results;
};

module.exports = letterPositions;
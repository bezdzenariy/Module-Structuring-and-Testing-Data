function countChar(stringOfCharacters, findCharacter) {
  let count = 0; // 

  // iterate over each character in the passed string
  for (const char of stringOfCharacters) {
    if (char === findCharacter) {
      count++; // if the symbol matches the one we are looking for, we increase the counter by 1
    }
  }
  return count; // return the final value
}

module.exports = countChar;

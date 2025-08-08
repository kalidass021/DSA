// find the string's all the characters are unique or not

function hasUniqueCharacters(str) {
  // set to store the characters of the string
  let charSet = new Set();

  for (let char of str) {
    if (charSet.has(char)) {
      return false; // duplicate found
    }

    // store the character in the set
    charSet.add(char);
  }

  return true;
}

console.log(hasUniqueCharacters('abcde')); // true
console.log(hasUniqueCharacters('abcdee')); // false

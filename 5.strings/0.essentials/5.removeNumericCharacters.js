// remove the numeric characters from the sentence

function removeNumericCharacters(str) {
  let result = '';

  for (let char of str) {
    if (!(char >= '0' && char <= '9')) {
      result += char;
    }
  }

  return result;
}

console.log(removeNumericCharacters('m343y n2a3m1e is4 somethin234g'));

// using reduce

function removeNumericCharactersReduce(str) {
  return str
    .split('')
    .reduce((acc, curr) => (curr >= '0' && curr <= '9' ? acc : acc + curr), '');
}

console.log(removeNumericCharactersReduce('m343y n2a3m1e is4 somethin234g'));
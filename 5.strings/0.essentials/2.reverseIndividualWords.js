// reverse individual words in the string

// bruteforce

function reverseIndividualWordsBrute(str) {
  let result = '';
  let word = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      word = str[i] + word; // prepend character to reverse the word
    } else {
      // add reversed word to the result
      result += word + ' ';
      word = ''; // reset word for next iteration
    }
  }

  result += word; // Append the last word

  return result;
}

console.log(reverseIndividualWordsBrute('Hello World')); // olleH dlroW

// using inbuilt methods
function reverseIndividualWords(str) {
  return str
    .split(' ') // convert the sentence into array of words
    .map((word) => word.split('').reverse().join('')) // reverse each word
    .join(' '); // join the word back together
}

console.log(reverseIndividualWords('Hello World')); // olleH dlroW

// using reduce
function reverseIndividualWordsReduce(str) {
  return str
    .split('') // split the sentence into array of words
    .reduce(
      (acc, word) => acc + (acc ? ' ' : '') + [...word].reverse().join(''),
      ''
    ); // reverse the each word and built the final string
}

console.log(reverseIndividualWords('Hello World'));

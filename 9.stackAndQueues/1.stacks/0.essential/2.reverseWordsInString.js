// Given an input string s, reverse the order of the words

// Input: "the sky is blue" ==> Output: "blue is sky the"
// Input: " hello world "  ==> Output: "world hello"
// Input: "a good   example" ==> Output: "example good a"

function reverseWords(str) {
  // split the words of the string into an array
  let splitStr = str.split(' ');
  let stack = [];

  // push the words onto the stack
  for (let word of splitStr) {
    stack.push(word);
  }
  // string to store the final revesed words
  let finalStr = '';

  while (stack.length > 0) {
    // pop the words from the stack
    let current = stack.pop();

    // append words to the finalStr
    if (current) {
      finalStr += ' ' + current;
    }
  }

  // trim the finalStr to remove any leading space
  return finalStr.trim();
}

console.log(reverseWords('the sky is blue')); // blue is sky the
console.log(reverseWords('a good   example')); // example good a
console.log(reverseWords(' hello world ')); // world hello

console.log(' hello world '.trim());

// Time complexity = O(2n) => O(n)
// Space complexity = O(2n) => O(n)

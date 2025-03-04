/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
    determine if the input string is valid.

    * Open brackets must be closed by the same type of brackets.
    * Open brackets must be closed in the correct order.
    * Every close bracket has a corresponding open bracket of the same type
    * 
    * 
    * Input: "()" ==> Output: true
    * Input: "()[]{}" ==> Output: true
    * Input: "(]" ==> Output: false
*/

function validParentheses(str) {
    // initialize an empty stack
  let stack = [];

  // iterate through each character in the empty string
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    // if the character is an opening bracket, push it onto the stack
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else if (char === ')' || char === ']' || char === '}') {
        // if the character is closing bracket
        // check if the stack is empty (no corresponding opening bracket)
      if (isEmpty(stack)) {
        return false; // invalid string
      }

      // pop the top element from the stack
      let top = stack.pop();

      // check if the popped element and the current closing bracket form a valid pair
      if (
        (char === ')' && top !== '(') ||
        (char === ']' && top !== '[') ||
        (char === '}' && top !== '{')
      ) {
        return false; // invalid string
      }
    }
  }
  
  // if the stack is still empty,
  // all the opening brackets have been matched, so the string is valid
  return isEmpty(stack);
}

function isEmpty(stack) {
  return stack.length === 0;
}

console.log(validParentheses('()[]{}')); // true
console.log(validParentheses('(]')); // false


// Time complexity = O(n)
// Space complexity = O(n)

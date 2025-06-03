// find the given number is palindrome or not

function reverseNumber(n) {
  let temp = n;
  let reversed = 0; // initially
  while (temp > 0) {
    // get the last digit
    let lastDigit = temp % 10;
    reversed = reversed * 10 + lastDigit;
    // drop the last digit
    temp = Math.floor(temp / 10);
  }

  return reversed;
}

function palindromeOrNot(num) {
  if (typeof num !== 'number' || !Number.isInteger(num)) {
    return `${num} is not valid`;
  }

  let reversedNum = reverseNumber(num);

  if (num === reversedNum) {
    return `${num} is a palindrome number`;
  }

  // else
  return `${num} is a not palindrome number`;
}

console.log(palindromeOrNot(121));

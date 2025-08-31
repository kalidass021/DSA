/* 
    * A magic number is a number whose sum of digits, when repeatedly added,
    * untill a single digit is left, results in 1
    * Take 1234
    * 1 + 2 + 3 + 4
    * 1 + 0 = 1, 1234 is a magic number
    * 
    * Another shortcut
    * If a number modulo 9 equals 1, it's a magic number
*/

function isMagicNumber(num) {
    let temp = num;
    // Keep reducing the number until it's a single digit
    while (temp >= 10) {
        let sum = 0; // initially
        // Extract and sum each digit of the current number
        while (temp > 0) {
            let lastDigit = temp % 10;
            sum += lastDigit;
            // drop the last digit
            temp = Math.floor(temp / 10);
        }
    // replace temp with the sum of digits for the next iteration
    temp = sum;
    }

    return temp === 1;
}


console.log('1234', isMagicNumber(1234));

// magic number using recursion

/* 
    * Recursively reduces a number to a single digit by summing it's digits.
    * Then checks if the final digit is 1 (i,e., magic number)
*/

function isMagicNumberRecursion(num) {
    // Base Case: if num is a single digit, return whether it's 1
    if (num < 10) return num === 1;
    
    // Recursive case: sum digits and call the function again
    const digitsSum = sumDigits(num);

    return isMagicNumber(digitsSum);
}

// helper function to sum the digits of a number

function sumDigits(n) {
    if (n === 0) return 0;

    return (n % 10) + sumDigits(Math.floor(n / 10));
}

console.log('recursion 1234', isMagicNumberRecursion(1234));
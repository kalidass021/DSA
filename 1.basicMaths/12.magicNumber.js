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


// Todo: 2 approaches needs to be added 1. normal while loop 2. using recursion
// sum of digits of a number

function sumOfDigits(num) {
    if (typeof num !== 'number' || !Number.isInteger(num)) {
        return `${num} is not a positive integer`;
    }

    if (num === 0) {
        return 0;
    }

    // edge case for single digit number
    if (num>=1 && num<=9) {
        return num;
    }

    let sum = 0; // initially
    let temp = num;

    while (temp > 0) {
        // get the last digit
        let remainder = temp % 10;
        sum += remainder;
        // drop the last digit
        temp = Math.floor(temp / 10);
    }

    return sum;
}

console.log(sumOfDigits(12345)); // 15

// recursive solution
function sumOfDigitsRec(num) {
    if (typeof num !== 'number' || !Number.isInteger(num)) {
        return `${num} is not a positive integer`;
    }

    if (num === 0) {
        return 0;
    }

    if (num>=1 && num<=9) {
        return num;
    }

    // recursive case
    // get the last digit and add it to the sum of the remaining digits
    return num % 10 + sumOfDigitsRec(Math.floor(num/10));
}

console.log(sumOfDigitsRec(12345)); // 15

// language advantage solution if typecast allowed

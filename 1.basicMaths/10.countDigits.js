// count the number of digits in the number

function countDigits(num) {
    // handle negative numbers
    num = Math.abs(num);

    // edge case for zero
    if (num === 0) return 1;

    let temp = num;
    let count = 0; // initially

    while(temp > 0) {
        count += 1; // increase the count
        // drop the last digit
        temp = Math.floor(temp/10);
    }

    return count;
}

console.log(countDigits(156)); // 3
console.log(countDigits(-156)); // 3
console.log(countDigits(0)); // 1
// Sum of first n natural numbers

function sumOfNaturalNumbers(n) {
    if (typeof n !== 'number' || n<0 || !Number.isInteger(n)) {
        return 'Input must be a non-negative integer';
    }

    // sum
    let sum = 0; //initially

    for (let i=1; i<=n; i++) {
        sum += i;
    }

    return sum;
}

console.log(sumOfNaturalNumbers(4)); // 10

function optimal(n) {
    if (typeof n !== 'number' || n<0 || !Number.isInteger(n)) {
        return 'Input must be a non-negative integer';
    }

    const sum = (n*(n+1))/2;

    return sum;
}

console.log(optimal(4)); // 10


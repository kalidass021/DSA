// greatest of three numbers

function greatestOfThree(a, b, c) {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
        return 'All inputs must be numbers';
    }

    let greatest = a; // initially

    if (b > greatest) {
        greatest = b;
    }

    if (c > greatest) {
        greatest = c;
    }

    return greatest;
}

console.log(greatestOfThree(5, 10, 15));
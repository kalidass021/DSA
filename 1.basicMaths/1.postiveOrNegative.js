// Find the given number is positive or negative

function postiveOrNegative(num) {
    if (typeof num !== 'number') {
        return console.log(`${num} is not a valid number`);
    }

    if (num === 0) {
        return console.log(`The number is zero`);
    }

    if (num > 0) {
        console.log(`${num} is a positive number`);
    } else if (num < 0) {
        console.log(`${num} is a negative number`);
    }
}

postiveOrNegative(3);
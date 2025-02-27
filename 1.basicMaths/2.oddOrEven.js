// Find the given number is odd or even

function checkOddOrEven(num) {
    if (typeof num !== 'number') {
        return console.log(`${num} is not a valid number`);
    }

    if (num%2 === 0) {
        console.log(`${num} is a even number`);
    } else {
        console.log(`${num} is a odd number`);
    }
}

checkOddOrEven(4); // 4 is a even number
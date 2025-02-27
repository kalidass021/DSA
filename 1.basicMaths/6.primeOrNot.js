// prime number or not

function isPrime(num) {
    if (typeof num !== 'number') {
        return `${num} is not a valid number`;
    }

    if (num<0) {
        return `${num} is not a positive integer`;
    }

    if (num<=1) {
        return false;
    }

    for (let i=2; i<num; i++) {
        if (num%i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(2));
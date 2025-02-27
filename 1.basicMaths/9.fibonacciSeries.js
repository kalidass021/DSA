// fibonacci series

function fibonacci(num) {
    if (typeof num !== 'number' || !Number.isInteger(num) || num<0) {
        return `${num} is not a positive integer`;
    }
    
    if (num === 0) {
        return [0];
    }

    if (num === 1) {
        return [0, 1];
    }

    fibSeries = [0, 1];

    for (let i=2; i<num; i++) {
        fibSeries.push(fibSeries[i-2] + fibSeries[i-1]);
    }

    return fibSeries;
}

console.log(fibonacci(5));
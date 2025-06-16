// fibonacci series

function fibonacci(num) {
  if (typeof num !== 'number' || !Number.isInteger(num) || num < 0) {
    return `${num} is not a positive integer`;
  }

  if (num === 0) {
    return [0];
  }

  if (num === 1) {
    return [0, 1];
  }

  let fibSeries = [0, 1];

  for (let i = 2; i < num; i++) {
    // fibSeries.push(fibSeries[i-2] + fibSeries[i-1]);
    fibSeries.push(fibSeries.at(-1) + fibSeries.at(-2));
  }

  return fibSeries;
}

console.log(fibonacci(5));

// print fibonacci series in reverse order

// we can directly reverse the above result using inbuilt reverse function
// or we can reverse using for (let i=arr.length - 1; i>=0; i--)
// but these will increase the time complexity to O(2n)

function fibonacciInReverse(num) {
  if (typeof num !== 'number' || !Number.isInteger(num) || num < 0) {
    return `${num} is not a positive integer`;
  }

  if (num === 0) {
    return [0];
  }

  if (num === 1) {
    return [1, 0];
  }

  let fibSeriesInReverse = [1, 0]; // initially

  for (let i = 2; i < num; i++) {
    // fibSeriesInReverse.unshift(fibSeriesInReverse[1] + fibSeriesInReverse[0]);
    fibSeriesInReverse.unshift(
      fibSeriesInReverse.at(1) + fibSeriesInReverse.at(0)
    );
  }

  return fibSeriesInReverse;
}

console.log(fibonacciInReverse(10));

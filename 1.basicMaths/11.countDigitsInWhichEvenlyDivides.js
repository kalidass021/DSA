// find number of digits

// Count the number of digits in N which evenly divide N - GFG problem

let N = 12;

function countDigitsInWhichEvenlyDivides() {
  let temp = N;
  let count = 0;
  while (temp > 0) {
    let lastDigit = temp % 10;
    if (N % lastDigit === 0) {
      count += 1;
    }

    temp = Math.floor(temp / 10);
  }

  return count;
}

console.log(countDigitsInWhichEvenlyDivides(N));


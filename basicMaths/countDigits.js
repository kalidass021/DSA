// find number of digits

// let num = 156;
// let temp = num;

// let count = 0;

// while (temp > 0) {
//   count += 1;
//   temp = Math.floor(temp / 10);

// }

// console.log('count', count);

// Count the number of digits in N which evenly divide N - GFG problem
let N = 12;
let temp = N;
let count = 0;
while (temp > 0) {
  let lastDigit = temp % 10;
  if (N % lastDigit === 0) {
    count += 1;
  }

  temp = Math.floor(temp / 10);
}
console.log("count", count);

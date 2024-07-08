// sum of all the divisors
// let N = 4;
// let sum = 0;
// // find all the divisors
// for (let i=1; i<=N; i++) {
//   sum += i * (N/i);

// }

// console.log('sum', sum);

let N = 4;
let sum = 0;

for (let i = 1; i <= N; i++) {
  sum += i * Math.floor(N / i);
}

console.log("sum", sum);

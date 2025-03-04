// find the largest element in the array

let arr = [1, 2, 3, 4, 5];

function findMax(arr) {
  // set it to the smallest possible integer value
  let max = Number.MIN_SAFE_INTEGER;

  for (let val of arr) {
    // max = val > max && val;
    // if the current element is greater than the current max value
    if (val > max) {
      // update the maximum value
      max = val;
    }
  }

  return max;
}

console.log(findMax(arr)); // 5

// using the language advantage
// using spread operator

function findMax2(arr) {
  return Math.max(...arr);
}

console.log(findMax2(arr)); // 5

// using reduce

function findMax3(arr) {
  const max = arr.reduce(
    (max, curr) => (curr > max ? curr : max),
    Number.MIN_SAFE_INTEGER
  );

  return max;
}

console.log(findMax3(arr)); // 5

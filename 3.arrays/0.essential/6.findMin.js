// find the smallest element in the array

let arr = [1, 2, 3, 4, 5];

function findMin(arr) {
  // set it to the largest possible integer value
  let min = Number.MAX_SAFE_INTEGER;

  for (let val of arr) {
    // if the current element is smaller than the current minimum value
    if (val < min) {
      // update minimum value
      min = val;
    }
  }

  return min;
}

console.log(findMin(arr)); // 1

// using the language advantage
// using spread operator

function findMin2(arr) {
  return Math.min(...arr);
}

console.log(findMin2(arr)); // 1

// using the reduce method

function findMin3(arr) {
  let min = arr.reduce(
    (min, curr) => (curr < min ? curr : min),
    Number.MAX_SAFE_INTEGER
  );
  return min;
}

console.log(findMin3(arr)); // 1

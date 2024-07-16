// first and last occurance of a given in the sorted array

let arr = [2, 4, 6, 8, 8, 8, 11, 13];
// target
let x = 8;
// length of the arr
let n = arr.length;

// bruteforce solution using linear search
function bruteforce(arr, x, n) {
  // first and last declaration
  let first = -1,
    last = -1;

  // loop till n-1
  for (let i = 0; i < n; i++) {
    if (arr[i] === x) {
      if (first === -1) {
        first = i;
      }
      last = i;
    }
  }
  return [first, last];
}

// console.log(bruteforce(arr, x, n));

// optimal solution using - upper bound and lower bound

function optimal(arr, x, n) {
  function lowerBound(arr, x, n) {
    let ans = n;
    // low and high
    let low = 0,
      high = n - 1;
    // run a while loop until low <= high
    while (low <= high) {
      // find mid
      let mid = Math.floor((low + high) / 2);

      if (arr[mid] >= x) {
        ans = mid;
        // look on the left
        high = mid - 1;
      } else {
        // look on the right
        low = mid + 1;
      }
    }
    return ans;
  }

  function upperBound(arr, x, n) {
    let ans = n;

    // low and high
    let low = 0,
      high = n - 1;

    // run a while loop until low <= high
    while (low <= high) {
      // find mid
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] > x) {
        ans = mid;
        // look on the left
        high = mid - 1;
      } else {
        // look on the right
        low = mid + 1;
      }
    }
    return ans;
  }

  let lb = lowerBound(arr, x, n);
  let ub = upperBound(arr, x, n);
  // if lb === n || arr[lb] !== x return [-1, -1]

  if (lb === n || arr[lb] !== x) {
    return [-1, -1];
  }

  return [lb, ub - 1];
}

// console.log(optimal(arr, x, n));

// optimal solution without using lower bound and upper bound
function optimal2(arr, x, n) {
  function firstOccurance(arr, x, n) {
    // first
    let first = -1;
    // low and high
    let low = 0,
      high = n - 1;
    // run a loop until low <= high
    while (low <= high) {
      // find mid
      let mid = Math.floor((low + high) / 2);
      // may be an answer

      if (arr[mid] === x) {
        first = mid;

        // look for smaller index on the left
        high = mid - 1;
      } else if (arr[mid] < x) {
        // look on the right
        low = mid + 1;
      } else {
        // look on the left
        high = mid - 1;
      }
    }

    return first;
  }

  function lastOccurance(arr, x, n) {
    let last = -1;

    // low and high
    let low = 0,
      high = n - 1;

    // run a loop until low <= high
    while (low <= high) {
      // find mid
      let mid = Math.floor((low + high) / 2);
      // may be an answer
      if (arr[mid] === x) {
        last = mid;
        // look for larger index on the right
        low = mid + 1;
      } else if (arr[mid] < x) {
        // look on the right
        low = mid + 1;
      } else {
        // look on the left
        high = mid - 1;
      }
    }

    return last;
  }

  // return first and last
  let firstOcc = firstOccurance(arr, x, n);
  // if first occurance is -1 there is not last occurance so return [-1, -1]
  if (firstOcc === -1) {
    return [-1, -1];
  }

  let lastOcc = lastOccurance(arr, x, n);

  return [firstOcc, lastOcc];
}

console.log(optimal2(arr, x, n));

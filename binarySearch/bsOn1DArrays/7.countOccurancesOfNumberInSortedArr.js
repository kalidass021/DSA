// count occurances of a given number in the sorted array with duplicates

let arr = [1, 1, 2, 2, 2, 2, 3];
// target
let x = 2;
// length of the array
let n = arr.length;

// bruteforce
function bruteforce(arr, x, n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] === x) {
      count++;
    }
  }

  return count;
}

// console.log(bruteforce(arr, x, n));

// optimal solution without using lowerbound and upper bound
// note we can able to solve this problem using lowerboudn and upper bound
function optimal(arr, x, n) {
  // first occurance
  function firstOccurance(arr, x, n) {
    let first = -1;
    // low and high
    let low = 0,
      high = n - 1;
    // run a loop until low <= high
    while (low <= high) {
      // find a mid
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

  // last occurance
  function lastOccurance(arr, x, n) {
    // last
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

  // find the first and last occurance
  let firstOcc = firstOccurance(arr, x, n);
  // if firstOcc is -1 return 0
  if (firstOcc === -1) {
    return 0;
  }

  let lastOcc = lastOccurance(arr, x, n);
  return lastOcc - firstOcc + 1;
}

console.log(optimal(arr, x, n));

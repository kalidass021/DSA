// single element in sorted arr
// all numbers appearing twice, only one number will appear once
// the numbers those appear twice will be together since it's a sorted array
// let arr = [1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6];

let arr = [1, 1, 2, 3, 3, 4, 4, 8, 8];
// length of the arr

let n = arr.length;
// brute force solution
function bruteforce(arr, n) {
  // if arr have only one element
  if (n === 1) {
    return arr[0];
  }
  // loop till n-1
  for (let i = 0; i < n; i++) {
    // for the first element
    if (i === 0) {
      // first element don't have the previous element
      if (arr[i] !== arr[i + 1]) {
        return arr[i];
      }
    } else if (i === n - 1) {
      // for the last element
      // last element don't have the next element
      if (arr[i] !== arr[i - 1]) {
        return arr[i];
      }
    } else {
      // for other middle elements
      if (arr[i] !== arr[i - 1] && arr[i] !== arr[i + 1]) {
        return arr[i];
      }
    }
  }
}

// console.log(bruteforce(arr, n));

function optimal(arr, n) {
  // edge cases
  // if arr has only one element
  if (n === 1) {
    return arr[0];
  }

  // we're checking for first and last element separtely here
  // so, we don't need to check them inside the loop
  // first element
  if (arr[0] !== arr[1]) {
    return arr[0];
  }
  // last element
  if (arr[n - 1] !== arr[n - 2]) {
    return arr[n - 1];
  }
  // low and high

  let low = 0,
    high = n - 1;

  // loop till low <= high
  while (low <= high) {
    // find mid
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] !== arr[mid + 1] && arr[mid] !== arr[mid - 1]) {
      return arr[mid];
    }

    if (
      (mid % 2 === 1 && arr[mid] === arr[mid - 1]) ||
      (mid % 2 === 0 && arr[mid] === arr[mid + 1])
    ) {
      // we're in left half, but the target was in right half
      // search on right
      low = mid + 1;
    } else {
      // we're in right half, but the target element was in left half
      // search on left
      high = mid - 1;
    }
  }

  return -1;
}

console.log(optimal(arr, n));

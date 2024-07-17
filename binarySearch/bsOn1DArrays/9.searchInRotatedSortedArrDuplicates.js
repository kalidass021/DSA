// search in the rotated sorted array contains duplicates
let arr = [3, 1, 2, 3, 3, 3, 3];
// target 
let target = 3;
// length of the arr
let n = arr.length;
// bruteforce solution - is using linear search

// optimal solution
function optimal(arr, target, n) {
  // low and high
  let low = 0, high = n-1;
  // run a loop until low <= high
  while (low <= high) {
    // find mid
    let mid = Math.floor((low+high)/2);

    if (arr[mid] === target) {
      return true;
    }
    // edge case for duplicates
    if (arr[low] === arr[mid] && arr[mid] === arr[high]) {
      // shrinking the arr
      low = low+1;
      high = high-1;
      // terminate the current iteration of loop
      continue;
    }
    // find which part of arr is sorted
    if (arr[low] <= arr[high]) {
      // left half is sorted
      // check is the left half contains target
      if (arr[low] <= target && arr[mid] >= target) {
        // search in left
        high = mid-1;
      } else {
        // search in right
        low = mid+1;
      }
    } else {
      // right half is sorted
      // check is the right half contains target
      if (arr[mid] <= target && arr[high] >= target) {
        // search in right
        low = mid+1;
      } else {
        // search in left
        high = mid-1;
      }
    }
  }
  return false;

}

console.log(optimal(arr, target, n));
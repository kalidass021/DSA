// find peak element
// arr[i-1] < arr[i] > arr[i+1]
// assumption nums[-1] = nums[n] = -infinity
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 5, 1];
// let arr = [1,2,1,3,5,6,4];
// length of the arr
let n = arr.length;

// bruteforce
function bruteforce(arr, n) {
  for (let i = 0; i < n; i++) {
    if (
      (i === 0 || arr[i - 1] < arr[i]) &&
      (i === n - 1 || arr[i] > arr[i + 1])
    ) {
      // return peak elements index
      return i;
    }
  }
}

// console.log(bruteforce(arr, n));

// optimal solution
function optimal(arr, n) {
  // edge cases
  // if arr contains only one element
  if (n === 1) {
    // return the index 0
    return 0;
  }
  // if first element of arr is peak
  if (arr[0] > arr[1]) {
    return 0;
  }
  // if last element of arr is peak
  if (arr[n - 1] > arr[n - 2]) {
    return n - 1;
  }

  // low and high

  let low = 1,
    high = n - 2;
  // run a loop until low <= high

  while (low <= high) {
    // find mid
    let mid = Math.floor((low + high) / 2);
    // can be the answer
    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
      return mid;
    } else if (arr[mid] > arr[mid - 1]) {
      // if mid is in the increasing curve
      // peak should be on the right
      // search on right
      low = mid + 1;
    } else {
      // arr[mid] > arr[mid+1]
      // if mid is in the decreasing curve
      // peak should be on the left
      // search on left
      high = mid - 1;
    }
  }

  // dummy return statement

  return -1;
}

console.log(optimal(arr, n));

// implementation of upper bound

// smallest index such that arr[index] > target(x)

let arr = [2, 3, 6, 7, 8, 8, 11, 11, 11, 12];

// target

let target = 6;

// length of the array

let n = arr.length;

// the brute force solution implemented using linear search

// optimal solution - binary search

function upperBound(arr, target, n) {
  // assign low and high

  let low = 0,
    high = n - 1;

  // ans

  let ans = n;

  while (low <= high) {
    // find the mid

    let mid = Math.floor((low + high) / 2);

    if (arr[mid] > target) {
      // may be an answer

      ans = mid;

      // look for smaller index on the left

      high = mid - 1;
    } else {
      // look for smaller index on the right

      low = mid + 1;
    }
  }

  return ans;
}

console.log(upperBound(arr, target, n));

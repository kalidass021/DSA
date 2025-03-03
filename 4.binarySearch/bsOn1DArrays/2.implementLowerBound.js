// implementation of lower bound

// smallest index such that arr[index] >= target(x)

let arr = [1, 2, 3, 3, 5, 8, 8, 10, 10, 11];

// target

let target = 9;

// length of the array

let n = arr.length;

// brute force solution is using linear search

// optimal using binary search

function lowerBound(arr, target, n) {
  // assign low and high

  let low = 0,
    high = n - 1;

  // ans

  let ans = n;

  while (low <= high) {
    // find the mid

    let mid = Math.floor((low + high) / 2);

    if (arr[mid] >= target) {
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

console.log(lowerBound(arr, target, n));

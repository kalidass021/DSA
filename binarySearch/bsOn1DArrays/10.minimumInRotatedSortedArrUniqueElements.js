// find the minimum in the rotated sorted array (unique elements)

let arr = [4, 5, 6, 7, 0, 1, 2];
// length of the arr
let n = arr.length;

// optimal solution
function optimal(arr, n) {
  // answer - minimum
  let ans = Number.MAX_SAFE_INTEGER;
  // low and high
  let low = 0,
    high = n - 1;
  // run a loop until low <= high
  while (low <= high) {
    // find mid
    let mid = Math.floor((low + high) / 2);
    // find the sorted half
    if (arr[low] <= arr[mid]) {
      // left half is sorted
      ans = Math.min(ans, arr[low]);
      // search on right
      low = mid + 1;
    } else {
      // right half is sorted
      ans = Math.min(ans, arr[mid]);
      // search on left
      high = mid - 1;
    }
  }

  // return a minimum

  return ans;
}

console.log(optimal(arr, n));

// little more optimized solution for better time complexity

function optimal2(arr, n) {
  // answer - minimum
  let ans = Number.MAX_SAFE_INTEGER;
  // low and high
  let low = 0,
    high = n - 1;
  // run a loop until low <= high
  while (low <= high) {
    // find mid
    let mid = Math.floor((low + high) / 2);
    // if search space is already sorted
    // then arr[low] will always be the minimum in that search space
    if (arr[low] <= arr[high]) {
      ans = Math.min(ans, arr[low]);
      break;
    }

    // find the sorted half
    if (arr[low] <= arr[mid]) {
      // left half is sorted
      ans = Math.min(ans, arr[low]);
      // search on right
      low = mid + 1;
    } else {
      // right half is sorted
      ans = Math.min(ans, arr[mid]);
      // search on left
      high = mid - 1;
    }
  }
  // return a minimum
  return ans;
}

// console.log(optimal2(arr, n));

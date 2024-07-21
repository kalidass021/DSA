// find out how many times has an array been rotated

let arr = [3, 4, 5, 1, 2];
// length of the arr
let n = arr.length;

function optimal(arr, n) {
  // minNum and minIndex
  let minNum = Number.MAX_SAFE_INTEGER;
  let minIndex = -1;

  // low and high
  let low = 0,
    high = n - 1;

  // loop until low <= high
  while (low <= high) {
    // find mid
    let mid = Math.floor((low + high) / 2);
    // if search space is sorted
    if (arr[low] <= arr[high]) {
      if (arr[low] < minNum) {
        minIndex = low;
        minNum = arr[low];
      }

      break;
    }

    // find which portion of the array is sorted
    if (arr[low] <= arr[mid]) {
      // left half is sorted
      // keep the minimum
      if (arr[low] < minNum) {
        minIndex = low;
        minNum = arr[low];
      }

      // search on right
      low = mid + 1;
    } else {
      // right half is sorted
      if (arr[mid] < minNum) {
        minIndex = mid;
        minNum = arr[mid];
      }

      // search on left
      high = mid - 1;
    }
  }

  return minIndex;
}

console.log(optimal(arr, n));
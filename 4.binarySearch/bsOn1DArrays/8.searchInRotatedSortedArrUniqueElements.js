// search in rotated sorted array unique elements

let arr = [7, 8, 9, 1, 2, 3, 4, 5, 6];
// target
let target = 1;

// length of the arr
let n = arr.length;

// bruteforce solution
// the bruteforce solution is using the linear search
// optimal - using binary search


function optimal (arr, target, n) {
  // low and high
  let low = 0, high = n-1;
  // run a loop until low <= high
  while (low <= high) {
    // find mid
    let mid = Math.floor((low+high)/2);

    if (arr[mid] === target) {
      return mid;
    }

    // identify the sorted half

    if (arr[low] <= arr[mid]) {
      // left half is sorted
      // check the target is with in left half (low, mid)
      if (arr[low] <= target && arr[mid] >= target) {
        // search on left (eliminate the right half)
        high = mid-1;
      } else {
        // search on right
        low = mid+1;
      }
    } else {
      // rigtht half is sorted
      // check the target is with in right half (mid, high)
      if (arr[mid] <= target && arr[high] >= target) {
        // search on right
        low = mid+1;
      } else {
        // search on left
        high = mid-1;
      }

    }

  }

  // if no element found

  return -1;

}

console.log(optimal(arr, target, n));
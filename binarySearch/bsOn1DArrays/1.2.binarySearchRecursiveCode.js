// binary search recursive code

let arr = [3, 4, 6, 7, 9, 12, 16, 17];

let target = 6;

let n = arr.length;

let low = 0,
  high = n - 1;

function bsRecursive(arr, n, low, high, target) {
  // base case

  if (low > high) {
    return -1;
  }

  // calculate mid

  let mid = Math.floor((low + high) / 2);

  if (target === arr[mid]) {
    return mid;
  } else if (target > arr[mid]) {
    // low = mid + 1
    return bsRecursive(arr, n, mid + 1, high, target);
  } else {
    // high = mid - 1
    return bsRecursive(arr, n, low, mid - 1, target);
  }
}

console.log(bsRecursive(arr, n, low, high, target));

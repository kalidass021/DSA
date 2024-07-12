// binary search iterative code

let arr = [3, 4, 6, 7, 9, 12, 16, 17];

let target = 6;

let n = arr.length;

function bsIterative(arr, n, target) {
  let low = 0,
    high = n - 1;

  // perform the steps

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (target === arr[mid]) {
      return mid;
    } else if (target > arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

console.log(bsIterative(arr, n, target));

// find the smallest divisor given a threshold
let arr = [1, 2, 5, 9];

// threshold
let threshold = 6;

// the answer range is [1 to 9]
// i,e.. 1 to Math.max(...arr) (largest elment of the arr)

// bruteforce solution

function bruteforce(arr, threshold) {
  // size of the arr
  let n = arr.length;
  // find the largest element of the arr
  let maxi = Math.max(...arr);
  // find the smallest divisor

  for (let d = 1; d <= maxi; d++) {
    // sum
    let sum = 0;
    // loop till n-1
    for (let i = 0; i < n; i++) {
      sum += Math.ceil(arr[i] / d);
    }

    // condition
    if (sum <= threshold) {
      return d;
    }
  }

  return -1;
}

// console.log(bruteforce(arr, threshold));

// optimal solution

function sumByDiv(arr, mid) {
  let sum = 0;
  // size of the arr
  let n = arr.length;
  // loop till n-1
  for (let i = 0; i < n; i++) {
    sum += Math.ceil(arr[i] / mid);
  }

  return sum;
}

function optimal(arr, threshold) {
  // size of the arr
  let n = arr.length;
  // edge case
  if (n > threshold) {
    return -1;
  }

  // ans
  let ans = Number.MAX_SAFE_INTEGER;
  // low and high
  let low = 1,
    high = Math.max(...arr);

  // loop till low <= high

  while (low <= high) {
    // find mid
    let mid = Math.floor((low + high) / 2);
    // condition
    if (sumByDiv(arr, mid) <= threshold) {
      ans = mid;
      // eliminate right
      // search on left
      high = mid - 1;
    } else {
      // eliminate left
      // search on right
      low = mid + 1;
    }
  }

  return ans;
}

console.log(optimal(arr, threshold));

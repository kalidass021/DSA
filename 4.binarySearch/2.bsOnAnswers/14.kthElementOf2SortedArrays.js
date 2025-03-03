// find the kth element of 2 sorted arrays
let arr1 = [2, 3, 6, 7, 9];
let arr2 = [1, 4, 8, 10];

let k = 5;

let n = arr1.length;
let m = arr2.length;

// the bruteforce and better solution are similar to median of two sorted arr problems
// optimal solution
function optimal(arr1, arr2, n, m, k) {
  if (m > n) {
    return optimal(arr2, arr1, n, m, k);
  }

  // length of left half
  let left = k;

  // apply binary search
  // low and high
  let low = Math.max(0, k - n),
    high = Math.min(k, m);
  // loop till low <= high
  while (low <= high) {
    let mid1 = Math.floor((low + high) / 2);
    let mid2 = left - mid1;
    // calculate l1, l2, r1, r2
    let l1 = Number.MIN_SAFE_INTEGER,
      l2 = Number.MIN_SAFE_INTEGER;

    let r1 = Number.MAX_SAFE_INTEGER,
      r2 = Number.MAX_SAFE_INTEGER;

    if (mid1 < m) {
      r1 = arr1[mid1];
    }

    if (mid2 < n) {
      r2 = arr2[mid2];
    }

    if (mid1 - 1 >= 0) {
      l1 = arr1[mid1 - 1];
    }

    if (mid2 - 1 >= 0) {
      l2 = arr2[mid2 - 1];
    }

    if (l1 <= r2 && l2 <= r1) {
      return Math.max(l1, l2);
    } else if (l1 > r2) {
      // eliminate right

      high = mid1 - 1;
    } else {
      // eliminate left

      low = mid1 + 1;
    }
  }

  // dummy return statement

  return 0;
}

console.log(optimal(arr1, arr2, n, m, k));

// find Kth missiong positive number
let arr = [2, 3, 4, 7, 11];
let k = 5;
// size of the arr
let n = arr.length;

// the main idea is to shift k by 1 step if the current element is smaller or equal to k.
// And whenever we get a number > k, we can conclude that k is the missing number.

function bruteforce(arr, k, n) {
  // loop till n-1
  for (let i = 0; i < n; i++) {
    // if arr[i] <= k, we'll simply increase the k by 1.
    // otherwise we'll break out of the loop
    if (arr[i] <= k) {
      k += 1;
    } else {
      break;
    }
  }

  return k;
}

// console.log(bruteforce(arr, k, n));

// optimal solution using binary search

function optimal(arr, k, n) {
  // low and high
  let low = 0,
    high = n - 1;
  // loop till low <= high
  while (low <= high) {
    // find mid
    let mid = Math.floor((low + high) / 2);
    // figure out howmany are missing
    let missing = arr[mid] - (mid + 1);
    // condition
    if (missing < k) {
      // eliminate left
      // search on right
      low = mid + 1;
    } else {
      // eliminate right
      // search on left
      high = mid - 1;
    }
  }

  return high + 1 + k;
  // since low = high+1 we can simply
  // return low+k;
}

console.log(optimal(arr, k, n));

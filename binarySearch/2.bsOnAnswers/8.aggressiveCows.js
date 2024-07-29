// aggressive cows
// min distance between cows is max
// at minimum the question have 2 cows
let stalls = [0, 3, 4, 7, 10, 9];
// n stalls, and the elelements are co-ordinates
// no. of cows
let cows = 4;
// the range is 1, (max - min)

function canWePlace(stalls, dist, cows) {
  // size of stalls arr
  let n = stalls.length;
  // count of cows
  let cntCows = 1; // because the 1st cow will always at first index
  // last placed cow position
  let last = stalls[0];
  // loop from 1 to n-1
  for (let i = 1; i <= n - 1; i++) {
    if (stalls[i] - last >= dist) {
      // place one more cow
      cntCows++;
      // last placed cow placed in this index
      last = stalls[i];
    }
  }

  // if (cntCows >= cows) {
  // return true;
  // } else {
  // return false;
  // }
  return cntCows >= cows;
}

// bruteforce solution
function aggressiveCowsBrute(stalls, cows) {
  // 1. sort the arr
  stalls.sort((a, b) => a - b);
  // the answer range is 1 to (max - min)
  // limit (max - min)
  // since the arr is sorted we're using arr[n-1] - arr[0]
  // size of the arr
  let n = stalls.length;
  let limit = stalls[n - 1] - stalls[0];
  // loop till limit
  for (let i = 1; i <= limit; i++) {
    if (canWePlace(stalls, i, cows)) {
      continue;
    } else {
      return i - 1;
    }
  }
}

// console.log(aggressiveCowsBrute(stalls, cows));

// optimal solution
function aggressiveCowsOptimal(stalls, cows) {
  // ans
  let ans = -1;
  // sort the arr
  stalls.sort((a, b) => a - b);
  // size of the arr
  let n = stalls.length;
  // low and high (0 to max-min)
  let low = 1,
    high = stalls[n - 1] - stalls[0];

  // loop till low <= high
  while (low <= high) {
    // find mid
    let mid = Math.floor((low + high) / 2);
    // condition
    if (canWePlace(stalls, mid, cows)) {
      ans = mid;
      // eliminate left
      // search on right
      low = mid + 1;
    } else {
      // eliminate right
      // search on left
      high = mid - 1;
    }
  }

  return ans;

  // instead we can return high also
  // return high;
}

console.log(aggressiveCowsOptimal(stalls, cows));

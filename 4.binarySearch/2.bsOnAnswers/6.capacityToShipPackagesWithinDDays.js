// least capacity to ship packages within D days

let weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// days
let days = 5;

// answer range [10 to 55] .... if we take below 10 means we can't able to ship 10
// i,e .. largest element of arr to sum of arr
// find required days

function daysRequired(weights, capacity) {
  // intially
  let days = 1;
  let load = 0;
  // size of the arr
  let n = weights.length;
  // loop till n-1
  for (let i = 0; i < n; i++) {
    // while loading into the ship
    // if existingLoad + weights[i] > capacity
    if (load + weights[i] > capacity) {
      // we'll move to the next day
      // and load the wt on next day
      days += 1;
      load = weights[i];
    } else {
      // load it in same day
      load += weights[i];
    }
  }
  return days;
}

// bruteforce solution
function leastWeightCapcityBrute(weights, days) {
  // largest element of the arr
  let maxi = Math.max(...weights);
  // sum of arr
  let sum = weights.reduce((acc, curr) => acc + curr, 0);
  // loop from maxi to sum
  for (let i = maxi; i <= sum; i++) {
    if (daysRequired(weights, i) <= days) {
      return i;
    }
  }

  return -1;
}

// console.log(leastWeightCapcityBrute(weights, days));

function leastWeightCapcityOptimal(weights, days) {
  // ans
  let ans = Number.MAX_SAFE_INTEGER;
  // low and high
  let low = Math.max(...weights);
  let high = weights.reduce((acc, curr) => acc + curr, 0);
  // loop till low <= high
  while (low <= high) {
    // find mid
    let mid = Math.floor((low + high) / 2);
    // condition
    if (daysRequired(weights, mid) <= days) {
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

  // instead of ans we can return low also
  // return low;
}

console.log(leastWeightCapcityOptimal(weights, days));

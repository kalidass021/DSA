// longest subarray with given sum k (positives)

// bruteforce solution - works with both positives and negatives

// let arr = [1, -2, 3, -1, 1, -1, 1, -4, 2, 3];

let arr = [1, 2, 3, 1, 1, 1, 1, 4, 2, 3];

// let arr = [1, 2, 3];

let k = 3;

let n = arr.length;

function bruteforce(arr, n, k) {
  let longestLen = 0;

  for (let i = 0; i < n; i++) {
    let sum = 0;

    for (let j = i; j < n; j++) {
      // adding the last element to the existing sum

      // this will eliminate the extra one loop and reduce the time complexit to O(n^2)

      sum += arr[j];

      // looping from i to j

      // for (let k=i; k<j; k++) {

      // sum += arr[k];

      // }

      // here k is given k

      if (sum === k) {
        longestLen = Math.max(longestLen, j - i + 1);
      }
    }
  }

  return longestLen;
}

// console.log(bruteforce(arr, n, k));

// better solution - works with positives, zeros and negatives

// using hashing

function better(arr, n, k) {
  let preSumMap = new Map();

  let sum = 0;

  let longestLen = 0;

  for (let i = 0; i < n; i++) {
    // calculate the prefix sum till index i

    sum += arr[i];

    // if the sum = k, update the longestLen

    if (sum === k) {
      longestLen = Math.max(longestLen, i + 1);
    }

    // calculate the sum of the remaining part i.e. x-k

    let rem = sum - k;

    // calculate the length and update the longestLen

    if (preSumMap.has(rem)) {
      let len = i - preSumMap.get(rem);

      longestLen = Math.max(longestLen, len);
    }

    // finally, update the map checking conditions

    if (!preSumMap.has(sum)) {
      preSumMap.set(sum, i);
    }
  }

  return longestLen;
}

console.log("betterSolution", better(arr, n, k));

// optimal solution - onlyworks with positives, zeros

function optimalForPositive(arr, n, k) {
  // left and right are the two pointers

  let left = 0;

  let right = 0;

  let sum = arr[0];

  let longestLen = 0;

  while (right < n) {
    // if sum > k, reduce the subarray from left

    // until sum becomes less or equal to k

    while (left <= right && sum > k) {
      sum -= arr[left];

      left++;
    }

    // if sum = k, update the longestLen i,e answer

    if (sum === k) {
      longestLen = Math.max(longestLen, right - left + 1);
    }

    // move forward through right pointer

    right++;

    if (right < n) {
      sum += arr[right];
    }
  }

  return longestLen;
}

// console.log(optimalForPositive(arr, n, k));

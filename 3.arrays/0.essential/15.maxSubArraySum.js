let arr = [-2, -3, 4, -1, -2, 1, 5, -3]; // output 7

let n = arr.length;

// optimal solution - kadane's algorithm

function maxSubArraySum(arr, n) {
  let sum = 0;

  let maxSum = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < n; i++) {
    sum += arr[i];

    // if sum > maxi

    if (sum > maxSum) {
      maxSum = sum;
    }

    // at any moment sum < 0, reinitialize sum = 0. as per kadane's algorithm

    if (sum < 0) {
      sum = 0;
    }
  }

  return maxSum;
}

console.log(maxSubArraySum(arr, n));
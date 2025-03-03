// bruteforce is exactly similar to longest sub array

let arr = [-2, -3, 4, -1, -2, 1, 5, -3]; // output 7

let n = arr.length;

// optimal solution - kadane's algorithm

function optimal(arr, n) {
  let sum = 0;

  let maxi = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < n; i++) {
    sum += arr[i];

    // if sum > maxi

    if (sum > maxi) {
      maxi = sum;
    }

    // at any moment sum < 0, reinitialize sum = 0. as per kadane's algorithm

    if (sum < 0) {
      sum = 0;
    }
  }

  return maxi;
}

// console.log('optimal', optimal(arr, n));

// follow up question

// print any of the subarry that has the maximum sum

function followup(arr, n) {
  let sum = 0;

  let maxi = Number.MIN_SAFE_INTEGER;

  let start = 0;

  let ansStart = -1,
    ansEnd = -1;

  for (let i = 0; i < n; i++) {
    if (sum === 0) {
      start = i;
    }

    sum += arr[i];

    if (sum > maxi) {
      maxi = sum;

      ansStart = start;

      ansEnd = i;
    }

    if (sum < 0) {
      sum = 0;
    }
  }

  // printing the sub array

  console.log("The subarray is [");

  for (let i = ansStart; i <= ansEnd; i++) {
    console.log(arr[i] + " ");
  }

  console.log("]");

  return maxi;
}

console.log("follow up", followup(arr, n));

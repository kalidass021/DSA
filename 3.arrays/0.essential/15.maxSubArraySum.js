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

// follow up question return the array as well

function maxSubArraySumV2(arr, n) {
    // initially
    let sum = 0; // current running sum
    let maxSum = Number.MIN_SAFE_INTEGER; // maximum sum found so far
    // indices to track the sub array 
    let start = 0, end = 0, tempStart = 0;

    for (let i=0; i<n; i++) {
        sum += arr[i];

        if (sum > maxSum) {
            maxSum = sum;
            start = tempStart;
            end = i;
        }

        if (sum < 0) {
            sum = 0;
            tempStart = i+1;
        }
    }

    return {
        maxSum,
        subArray: arr.slice(start, end+1),
    }
}

console.log(maxSubArraySumV2(arr, n));
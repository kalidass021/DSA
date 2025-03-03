// split arr largest sum or painters partition
let arr = [10, 20, 30, 40];
// no. of sub arrays array nees to be splitted
let k = 2;

// possiblities
/* 

  [10] [20, 30, 40] => 10, 90 => 90 (max)
  [10, 20] [30, 40] => 30, 70 => 70 (max)
  [10, 20 , 30] [40] => 60, 40 => 60

  ans => min(all max) => 60 (min of max)

*/

/* 
    not allowed 
    [10, 20, 30, 40] []
    [] [10, 20, 30, 40]
    [10, 30] [20, 40]
*/

function countSubArrays(arr, maxSum) {
  // size of the arr
  let n = arr.length;
  // initially we'are at subArray1
  let subArrays = 1;
  // that subArr have below sum, initially
  let subArrSum = 0;
  // loop till n-1
  for (let i = 0; i < n; i++) {
    if (subArrSum + arr[i] <= maxSum) {
      // add arr[i] to subArrSum
      subArrSum += arr[i];
    } else {
      // move to next subArray
      subArrays += 1;
      // reset the subArrSum and assign arr[i] to it
      subArrSum = arr[i];
    }
  }
  // return subArrays
  return subArrays;
}

// bruteforce solution

function splitArrLargestSumBrute(arr, k) {
  let low = Math.max(...arr);

  let high = arr.reduce((acc, curr) => acc + curr, 0);

  for (let maxSum = low; maxSum <= high; maxSum++) {
    if (countSubArrays(arr, maxSum) === k) {
      return maxSum;
    }
  }

  return low;
}

// console.log(splitArrLargestSumBrute(arr, k));

// optimal solution

function splitArrLargestSumOptimal(arr, k) {
  // ans
  let ans = -1;
  // low and high
  let low = Math.max(...arr);
  let high = arr.reduce((acc, curr) => acc + curr, 0);

  // loop till low <= high
  while (low <= high) {
    // find mid
    let mid = Math.floor((low + high) / 2);
    // condition
    if (countSubArrays(arr, mid) <= k) {
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

console.log(splitArrLargestSumOptimal(arr, k));

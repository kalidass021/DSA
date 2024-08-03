// painters partition or split array largest sum

let arr = [10, 20, 30, 40];
// no. of painters
let k = 2;

// To paint 10 units time taken will be 10
// each of the painter need to get atleast 1 job to do
// the tasks needs to be consecutive

/* possibilities painter1 painter2
  possibility 1 [10] [20, 30, 40] => 10, 90 => 90 (max)
  possibility 2 [10, 20] [30, 40] => 30, 70 => 70 (max)
  possibility 3 [10, 20, 30] [40] => 60, 40 => 60 (max)
  ans => min(max) => 60
*/

/* 
  allocating all the units to the one painter,
  and another painter sitting idle is not allowed
  not allowed painter1 painter2

          [10, 20, 30, 40] []
          [] [10, 20, 30, 40]
          [10, 30] [20, 40]
*/

// bruteforce solution
// the bruteforce solution is exactly similar to the last problem (split array largest sum)
// function to count the partitions

function countPartitions(arr, maxSum) {
  // size of the arr
  let n = arr.length;
  // initially we're at partition 1
  let partitions = 1;
  // that partition have below sum initially
  let partitionSum = 0;

  // loop till n-1
  for (let i = 0; i < n; i++) {
    // condition
    if (partitionSum + arr[i] <= maxSum) {
      // add arr[i] to partitionSum
      partitionSum += arr[i];
    } else {
      // move to next partition
      partitions++;
      // reset the partitionSum and assign arr[i] to it
      partitionSum = arr[i];
    }
  }

  return partitions;
}

// optimal solution
function paintersPartitionOptimal(arr, k) {
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
    if (countPartitions(arr, mid) <= k) {
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

console.log(paintersPartitionOptimal(arr, k));

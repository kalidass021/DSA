// ceil in the sorted array
// smallest number in array >= x (lower bound)
let arr = [10, 20, 30, 40, 50];
// target
let target = 25;
// length of the array
let n = arr.length;

function ceil(arr, target, n) {
  // ans
  let ans = -1;
  // assign low and high
  let low = 0, high = n-1;

  while (low <= high) {
    // find mid
    let mid = Math.floor((low+high)/2);

    if (arr[mid] >= target) {
      ans = arr[mid];
      // search on the left
      high = mid-1;
    } else {
      // search on the right
      low = mid+1;
    }

  }

  return ans;

}

console.log(ceil(arr, target, n));
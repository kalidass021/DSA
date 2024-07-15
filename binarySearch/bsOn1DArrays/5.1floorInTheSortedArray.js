// floor in the sorted array
// largest num in the array <= x(target)
let arr = [10, 20, 30, 40, 50];
// target
let target = 25;
// length
let n = arr.length;

function floor(arr, target, n) {
  let ans = -1;
  // assign low and high
  let low = 0, high = n-1;

  while (low <= high) {
    // find mid
    let mid = Math.floor((low+high)/2);

    if (arr[mid] <= target) {
      // assign element to the ans
      ans = arr[mid];
      // search on the right
      low = mid+1;
    } else {
      // search on the left
      high = mid-1;
    }

  }

  return ans;

}

console.log(floor(arr, target, n));
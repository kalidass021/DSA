// rotate array leet code problem

let nums = [1, 2, 3, 4, 5, 6, 7];

let k = 3;

function rotate() {
  n = nums.length;

  k = k % n;

  // creating the temp arr and adding the last k elements in it

  let temp = [];

  for (let i = n - k; i < n; i++) {
    temp.push(nums[i]);

    // temp[i-(n-k)] = nums[i];
  }

  // shifting the remaning nums elements towards right

  for (let i = n - 1; i >= k; i--) {
    nums[i] = nums[i - k];
  }

  // placing the temp elements at the beginning of nums

  for (let i = 0; i < k; i++) {
    nums[i] = temp[i];
  }

  return nums;
}

console.log(rotate(nums, k));

let arr = [1, 2, 3, 4, 5, 6, 7];

let d = 3;

let n = arr.length;

d = d % n;

function leftRotateArrayDPlace(arr, d, n) {
  // 1. creating the temp arr and adding first 3 elements inside it

  let temp = [];

  for (let i = 0; i < d; i++) {
    temp[i] = arr[i];
  }

  // 2. shifting the elements from d to n-1 forward

  for (let i = d; i < n; i++) {
    arr[i - d] = arr[i];
  }

  // 3. placing the temp arr elements at the end of the arr

  for (let i = n - d; i < n; i++) {
    arr[i] = temp[i - (n - d)];
  }

  // returning the rotated array

  return arr;
}

console.log(leftRotateArrayDPlace(arr, d, n));

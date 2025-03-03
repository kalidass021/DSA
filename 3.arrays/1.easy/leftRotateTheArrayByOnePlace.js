let arr = [1, 2, 3, 4, 5];

let n = arr.length;

function leftRotateArrayOnePlace(arr, n) {
  // storing the first index in the temp

  let temp = arr[0];

  for (let i = 1; i < n; i++) {
    arr[i - 1] = arr[i];
  }

  // placing the temp in the last index

  arr[n - 1] = temp;

  // returning the rotated array

  return arr;
}

console.log(leftRotateArrayOnePlace(arr, n));

// right rotate arr by one place

function rightRotateArrByOnePlace(arr, n) {
  let temp = arr[n - 1];

  for (let i = 0; i > n - 1; i++) {
    arr[i + 1] = arr[i];
  }

  arr[0] = temp;

  return arr;
}

console.log(rightRotateArrByOnePlace(arr, n));

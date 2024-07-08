let arr = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];

// let arr = [1, 2, 3, 4, 5];

let n = arr.length;

// brute force

function moveNonZeroToEnd(arr, n) {
  // 1. store all the non zero values in the temp arr

  let temp = [];

  for (let i = 0; i < n; i++) {
    if (arr[i] !== 0) {
      temp.push(arr[i]);
    }
  }

  // 2. replace arr elements with temp elements

  for (let i = 0; i < temp.length; i++) {
    arr[i] = temp[i];
  }

  // 3. fill 0 for rest of the elements

  // number of non zero elements

  let nz = temp.length;

  for (let i = nz; i < n; i++) {
    arr[i] = 0;
  }

  // returning the arr

  return arr;
}

// console.log(moveNonZeroToEnd(arr, n));

// optimal

function moveZeroToEndOptimal(arr, n) {
  // the pointer that points the zero

  let zeroPointer = -1;

  // 1. find the zero and assign that index to zero pointer

  for (let i = 0; i < n; i++) {
    if (arr[i] === 0) {
      zeroPointer = i;

      break;
    }
  }

  // if no non zero numbers

  if (zeroPointer === -1) {
    return arr;
  }

  // 2. swap the non zero value with zero

  for (let i = zeroPointer; i < n; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[zeroPointer]] = [arr[zeroPointer], arr[i]];

      zeroPointer++;
    }
  }

  // returing the arr

  return arr;
}

console.log("optimal", moveZeroToEndOptimal(arr, n));

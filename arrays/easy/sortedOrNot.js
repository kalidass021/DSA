// let arr = [1, 2, 2, 3, 3, 4];

let arr = [1, 2, 1, 3, 4];

let n = arr.length;

// function sortedOrNot (arr, n) {

// for (let i=1; i<n; i++) {

// if (arr[i] >= arr[i-1]) {

// // not required

// } else {

// return false;

// }

// }

// return true;

// }

function sortedOrNot(arr, n) {
  for (let i = 1; i < n; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }

  return true;
}

console.log(sortedOrNot(arr, n));

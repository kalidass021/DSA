// search in a 2D sorted matrix

let matrix = [
  [3, 4, 7, 9],
  [12, 13, 16, 18],
  [20, 21, 23, 29],
];

// target
let target = 23;
// no. of rows
let n = matrix.length;
// no. of cols
let m = matrix[0].length;

// bruteforce solution
function bruteforce(matrix, target, n, m) {
  // loop till n-1
  for (let i = 0; i < n; i++) {
    // loop till m-1
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === target) {
        return true;
      }
    }
  }

  // if above condition not returned
  return false;
}

console.log(bruteforce(matrix, target, n, m));

// better solution
function binarySearch(arr, target) {
  // size of the row
  let n = arr.length;
  // low and high
  let low = 0,
    high = n - 1;
  // loop till low <= high
  while (low <= high) {
    // find mid
    let mid = Math.floor((low + high) / 2);
    // apply binary search
    if (arr[mid] === target) {
      return true;
    } else if (arr[mid] < target) {
      // search on right
      low = mid + 1;
    } else {
      // search on left
      high = mid - 1;
    }
  }

  return false;
}

function better(matrix, target, n, m) {
  // loop till n-1
  for (let i = 0; i < n; i++) {
    // if target was in that row
    if (matrix[i][0] <= target && matrix[i][m - 1] >= target) {
      return binarySearch(matrix[i], target);
    }
  }

  return false;
}

console.log(better(matrix, target, n, m));

// optimal solution
function optimal(matrix, target, n, m) {
  // low and high
  let low = 0,
    high = n * m - 1;

  // loop till low <= high
  while (low <= high) {
    // find mid
    let mid = Math.floor((low + high) / 2);
    // find co-ordinate in the 2D matrix
    // row
    let x = Math.floor(mid / m);
    // col
    let y = mid % m;
    // condition
    if (matrix[x][y] === target) {
      return true;
    } else if (matrix[x][y] < target) {
      // search on right
      low = mid + 1;
    } else {
      // search on left
      high = mid - 1;
    }
  }

  return false;
}

console.log(optimal(matrix, target, n, m));

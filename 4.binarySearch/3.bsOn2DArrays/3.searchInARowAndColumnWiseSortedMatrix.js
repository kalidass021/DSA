// search in a row and column wise sorted matrix - search in a sorted matrix II

let matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 17, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];

let target = 14;

// bruteforce solution
/* 
    Go through the entire matrix if we found the element return true or (row, column)
    else return -1
*/

function bruteforce(matrix, target) {
  // rows
  let n = matrix.length;
  // cols
  let m = matrix[0].length;
  // traverse the matrix
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      // condition
      if (matrix[i][j] === target) {
        return true;
      }
    }
  }

  // if target not found
  return false;
}

// console.log(bruteforce(matrix, target));

// better solution
// Do a binary search in each row
// binary search logic code
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

function better(matrix, target) {
  // rows
  let n = matrix.length;
  // loop till n-1
  for (let i = 0; i < n; i++) {
    let flag = binarySearch(matrix[i], target);
    if (flag) {
      return true;
    }
    // return flag;
  }

  return false;
}

// console.log(better(matrix, target));

// optimal solution

function optimal(matrix, target) {
  // no. of rows
  let n = matrix.length;
  // no. of cols
  let m = matrix[0].length;
  // co-ordinates for initial standing position
  let row = 0; // x axis
  let col = m - 1; // y axis
  // traverse the matrix (from 0 to m-1)
  while (row < n && col >= 0) {
    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] < target) {
      row++;
    } else {
      col--;
    }
  }

  // if target not found
  return false;
}

console.log(optimal(matrix, target));

// find peak element in 2D matrix - find peak element II

let matrix = [
  [4, 2, 5, 1, 4, 5],
  [2, 9, 3, 2, 3, 2],
  [1, 7, 6, 0, 1, 3],
  [3, 6, 2, 3, 7, 2],
];

// bruteforce solution
// scan through every element
// better solution
// find the largest element in the matrix and return it
// optimal solution

function findMaxElementRow(matrix, n, m, mid) {
  // initially
  let maxValue = -1;
  let index = -1;
  // going through entire column
  for (let i = 0; i < n; i++) {
    // condition
    if (matrix[i][mid] > maxValue) {
      maxValue = matrix[i][mid];

      index = i;
    }
  }

  // return the index
  return index;
}

function optimal(matrix) {
  // no. of rows
  let n = matrix.length;
  // no. of cols
  let m = matrix[0].length;
  // low and high
  let low = 0,
    high = m - 1;

  // loop till low <= high
  while (low <= high) {
    // find mid column
    let mid = Math.floor((low + high) / 2);
    // find the row which contains the max element of the column
    let maxRowIndex = findMaxElementRow(matrix, n, m, mid);

    // if we're at mid row
    // the left row is mid-1
    let left = mid - 1 >= 0 ? matrix[maxRowIndex][mid - 1] : -1;
    let right = mid + 1 < m ? matrix[maxRowIndex][mid + 1] : -1;

    // condition
    if (matrix[maxRowIndex][mid] > left && matrix[maxRowIndex][mid] > right) {
      return [maxRowIndex, mid];
    } else if (matrix[maxRowIndex][mid] < left) {
      // search on left
      high = mid - 1;
    } else {
      // search on right

      low = mid + 1;
    }
  }

  // dummy return
  return [-1, -1];
}

console.log(optimal(matrix));

// print the matrix in spiral manner

let matrix = [
  [1, 2, 3, 4, 5, 6],
  [20, 21, 22, 23, 24, 7],
  [19, 32, 33, 34, 25, 8],
  [18, 31, 36, 35, 26, 9],
  [17, 30, 29, 28, 27, 10],
  [16, 15, 14, 13, 12, 11],
];

// no. of rows

let rows = matrix.length;

// no. of cols

let cols = matrix[0].length;

function printSpiral(matrix, rows, cols) {
  // initialize the pointers required for traversal

  let left = 0,
    right = cols - 1;

  let top = 0,
    bottom = rows - 1;

  let ans = [];

  // flow: right -> bottom -> left -> top

  // loop until all the elements are not traversed

  while (top <= bottom && left <= right) {
    // right (for moving left to right)

    for (let i = left; i <= right; i++) {
      ans.push(matrix[top][i]);
    }

    top++;

    // bottom (for moving top to bottom)

    for (let i = top; i <= bottom; i++) {
      ans.push(matrix[i][right]);
    }

    right--;

    // left (for moving right to left)

    if (top <= bottom) {
      // this condition required only for single row matrix

      for (let i = right; i >= left; i--) {
        ans.push(matrix[bottom][i]);
      }

      bottom--;
    }

    // top (for moving bottom to top)

    if (left <= right) {
      // this condition if for the last element not moving

      for (let i = bottom; i >= top; i--) {
        ans.push(matrix[i][left]);
      }

      left++;
    }
  }

  return ans;
}

console.log(printSpiral(matrix, rows, cols));

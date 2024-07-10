// set matrix zeros

let matrix = [
  [1, 1, 1, 1],

  [1, 0, 0, 1],

  [1, 1, 0, 1],

  [1, 1, 1, 1],
];

// number of rows

let n = matrix.length;

// number of columns

let m = matrix[0].length;

// bruteforce

// step2 - mark all non-zero elements as -1 in the row i

function markRow(matrix, n, m, i) {
  for (let j = 0; j < m; j++) {
    if (matrix[i][j] !== 0) {
      matrix[i][j] = -1;
    }
  }
}

// step3 - mark all non-zero elements as -1 in the col j

function markCol(matrix, n, m, j) {
  for (let i = 0; i < n; i++) {
    if (matrix[i][j] !== 0) {
      matrix[i][j] = -1;
    }
  }
}

// step1 - zero matrix

function zeroMatrix(matrix, n, m) {
  // mark -1 for rows and cols that contains 0. Don't mark any 0 as -1

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 0) {
        markRow(matrix, n, m, i);

        markCol(matrix, n, m, j);
      }
    }
  }

  // step4 - Finally mark all -1 as 0

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === -1) {
        matrix[i][j] = 0;
      }
    }
  }

  // return the ans

  return matrix;
}

// console.log(zeroMatrix(matrix, n, m));

// Better solution

function better(matrix, n, m) {
  // row array

  let row = new Array(n).fill(0);

  // col array

  let col = new Array(m).fill(0);

  // traverse the matrix

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 0) {
        // mark ith index of row with 1

        row[i] = 1;

        // mark jth index of col with 1

        col[j] = 1;
      }
    }
  }

  // finally, mark all (i, j) as 0. if row[i] or col[j] is marked as 1

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (row[i] || col[j]) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
}

// console.log(better(matrix, n, m));

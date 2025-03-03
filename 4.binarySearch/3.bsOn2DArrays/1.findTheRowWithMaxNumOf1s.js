// find the row of the matrix with maximum number of 1's

let matrix = [
  [0, 0, 1, 1, 1],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1],
];

// no. of rows
let n = matrix.length;
// no. of cols
let m = matrix[0].length;

// bruteforce solution
function bruteforce(matrix, n, m) {
  // initially
  let cntMax = 0;
  let index = -1;
  // traverse the matrix
  for (let i = 0; i < n; i++) {
    let cntOnes = 0;
    for (let j = 0; j < m; j++) {
      // count the no. of 1's in the row
      cntOnes += matrix[i][j];
    }

    if (cntOnes > cntMax) {
      // update the cntMax
      cntMax = cntOnes;
      // update the index
      index = i;
    }
  }

  return index;
}

console.log(bruteforce(matrix, n, m));

// optimal solution

function lowerBound(arr, n, target) {
  let ans = n;
  // low and high
  let low = 0,
    high = n - 1;

  // loop till n-1
  while (low <= high) {
    // find mid
    let mid = Math.floor((low + high) / 2);
    // may be the answer
    if (arr[mid] >= target) {
      ans = mid;
      // search for smaller index on the left
      high = mid - 1;
    } else {
      // search on right
      low = mid + 1;
    }
  }

  return ans;
}

function optimal(matrix, n, m) {
  // initially
  let cntMax = 0;
  let index = -1;

  // traverse the rows
  for (let i = 0; i < n; i++) {
    // get the number of 1's
    // firstOccurance(1) = lowerBound(1) = upperBound(0);
    let cntOnes = m - lowerBound(matrix[i], m, 1);
    if (cntOnes > cntMax) {
      cntMax = cntOnes;
      index = i;
    }
  }

  return index;
}

console.log(optimal(matrix, n, m));

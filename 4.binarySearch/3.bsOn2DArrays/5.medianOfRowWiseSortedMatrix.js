// median of row wise sorted matrix
// n * m matrix
// n & m - both are odd
// n * m - will give odd number of elements in the matrix

let matrix = [
  [1, 5, 7, 9, 11],
  [2, 3, 4, 5, 10],
  [9, 10, 12, 14, 16],
];

// let matrix = [
// [1, 3, 5],
// [2, 6, 9],
// [3, 6, 9]
// ];

// no. of rows
let n = matrix.length;
// no. of cols
let m = matrix[0].length;

// bruteforce solution
// put all the elements into 1D array
// sort the 1D array
// find the median - mid index - arr[(n*m) / 2]

function bruteforce(matrix) {
  // list to put elements
  let lst = [];
  // traverse the matrix to copy the elements to the list

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      lst.push(matrix[i][j]);
    }
  }

  // sort the list
  lst.sort((a, b) => a - b);

  // median
  let median = lst[Math.floor((n * m) / 2)];

  return median;
}

// console.log(bruteforce(matrix, n, m));

// optimal solution
function upperBound(arr, x) {
  // low and high
  let low = 0,
    high = arr.length - 1;
  let ans = n;
  // loop till low <= high
  while (low <= high) {
    // find mid
    let mid = Math.floor((low + high) / 2);
    // may be answer
    if (arr[mid] > x) {
      // look for smaller index on the left
      high = mid - 1;
    } else {
      ans = mid;
      // look for larger index on the right
      low = mid + 1;
    }
  }

  return ans;
}

function countSmallerEquals(matrix, n, m, x) {
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    cnt += upperBound(matrix[i], x);
  }

  return cnt;
}

function optimal(matrix, n, m) {
  // low and high
  // initially

  let low = Number.MAX_SAFE_INTEGER,
    high = Number.MIN_SAFE_INTEGER;

  // ans
  let ans = -1;

  // since each row is sorted
  // for low go through the 0th column
  // for high go through the m-1th column
  // point low and high to the correct elements

  for (let i = 0; i < n; i++) {
    low = Math.min(low, matrix[i][0]);
    high = Math.max(high, matrix[i][m - 1]);
  }

  // required
  let req = Math.floor((n * m) / 2);

  // loop till low <= high
  while (low <= high) {
    // find mid
    let mid = Math.floor((low + high) / 2);
    // smaller equals
    let smallerEquals = countSmallerEquals(matrix, n, m, mid);
    // condition

    if (smallerEquals <= req) {
      // ans = mid;
      // need bigger value
      // search on right

      low = mid + 1;
    } else {
      // look for a smaller value
      // search on left
      high = mid - 1;
    }
  }

  // return ans;
  // instead of returning the ans we can return low also

  return low;
}

console.log(optimal(matrix, n, m));

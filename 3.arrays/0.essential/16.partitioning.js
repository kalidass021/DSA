/*
 * rearrange the array such that all elements less than x appear on the left side and
 * all the elements greater than x appear on the right side
 */

function partitioning(arr, x) {
  let left = [];
  let right = [];

  for (let val of arr) {
    if (val < x) {
      left.push(val);
    } else if (val > x) {
      right.push(val);
    }
  }

  let partitioned = [...left, x, ...right];

  return partitioned;
}

console.log(partitioning([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5));
// [ 4, 3, 2, 1, 5, 10, 9, 8, 7, 6 ]

function partitioningFilter(arr, x) {
  let left = arr.filter((num) => num < x);
  let right = arr.filter((num) => num > x);

  return [...left, x, ...right];
}

console.log(partitioningFilter([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5));
// [ 4, 3, 2, 1, 5, 10, 9, 8, 7, 6 ]

function partitioningReduce(arr, x) {
  const { left, right } = arr.reduce((acc, curr) => {
    if (curr < x) {
        acc.left.push(curr);
    } else if (curr > x) {
        acc.right.push(curr);
    }
    // we have skipped the x (we have not added x in left or right)
    return acc;
  }, {
    left: [],
    right: [],
  });

  return [...left, x, ...right];
}

console.log(partitioningReduce([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5));
// [ 4, 3, 2, 1, 5, 10, 9, 8, 7, 6 ]
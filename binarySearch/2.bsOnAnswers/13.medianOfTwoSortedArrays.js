// median of two sorted arrays
// median means on the left and on the right there must be equal number of elements

let arr1 = [1, 3, 4, 7, 10, 12];
let arr2 = [2, 3, 6, 15];

// bruteforce solution
function bruteforce(arr1, arr2) {
  // size of the arrays
  let n1 = arr1.length;
  let n2 = arr2.length;
  // new empty arr
  let arr3 = [];
  // apply the merge step
  let i = 0,
    j = 0;

  while (i < n1 && j < n2) {
    if (arr1[i] < arr2[j]) {
      arr3.push(arr1[i++]);
    } else {
      arr3.push(arr2[j++]);
    }
  }

  // if the above condition exhaust there must be some elements left
  // copy the left-out elments
  while (i < n1) {
    arr3.push(arr1[i++]);
  }

  while (j < n2) {
    arr3.push(arr2[j++]);
  }

  // find the median
  let n = n1 + n2;
  // if n is odd the mid element is the median
  if (n % 2 === 1) {
    return arr3[Math.floor(n / 2)];
  }

  // if the n is even

  let median = (arr3[n / 2] + arr3[n / 2 - 1]) / 2.0;
  return median;
}

console.log(bruteforce(arr1, arr2));

// better solution - refer the take you forward article link
// another better approach from the bruteforce using the language advantage

function better(arr1, arr2) {
  // merge the given arrays and sort it
  let arr3 = arr1.concat(arr2).sort((a, b) => a - b);
  let n = arr3.length;
  // find the median

  // if the n is odd the mid element is the median

  if (n % 2 === 1) {
    return arr3[Math.floor(n / 2)];
  }
  // if the n is even
  let median = (arr3[n / 2] + arr3[n / 2 - 1]) / 2;
  return median;
}

console.log(better(arr1, arr2));
// optimal solution - using binary search

function medianOptimal(arr1, arr2) {
  // the answer range is from 0 to lenght of shorted arr

  // here 0 to arr1.length;

  // sizes of the given arrays
  let n1 = arr1.length;
  let n2 = arr2.length;
  // we prefer to perform the operations in the smaller arr
  // so, if n1 > n2 swap the arrays
  if (n1 > n2) {
    return medianOptimal(arr2, arr1);
  }

  let n = n1 + n2;
  // length of left half
  let left = Math.floor((n1 + n2 + 1) / 2);
  let low = 0,
    high = n1;
  // loop till low <= high
  while (low <= high) {
    // find mid1
    let mid1 = Math.floor((low + high) / 2);
    // find mid2
    let mid2 = left - mid1;
    // l1, l2, r1, and r2
    let l1 = Number.MIN_SAFE_INTEGER,
      l2 = Number.MIN_SAFE_INTEGER;

    let r1 = Number.MAX_SAFE_INTEGER,
      r2 = Number.MAX_SAFE_INTEGER;

    if (mid1 < n1) {
      r1 = arr1[mid1];
    }

    if (mid2 < n2) {
      r2 = arr2[mid2];
    }

    if (mid1 - 1 >= 0) {
      l1 = arr1[mid1 - 1];
    }

    if (mid2 - 1 >= 0) {
      l2 = arr2[mid2 - 1];
    }

    // condition
    if (l1 <= r2 && l2 <= r1) {
      if (n % 2 === 1) {
        return Math.max(l1, l2);
      } else {
        return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
      }
    } else if (l1 > l2) {
      // eliminate right

      high = mid1 - 1;
    } else {
      // eliminate left

      low = mid1 + 1;
    }

    // dummy return

    return 0;
  }
}

console.log(medianOptimal(arr1, arr2));

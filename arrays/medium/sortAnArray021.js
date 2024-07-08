// sort an array of 0's, 1's and 2's

let arr = [0, 1, 2, 0, 1, 2, 1, 2, 0, 0, 0, 1];

let n = arr.length;

// brute

function brute(arr) {
  // instead of sort we need to use sorting algos like merge sort

  arr.sort((a, b) => a - b);

  return arr;
}

// console.log(brute(arr));

// better

function better(arr, n) {
  let count0 = 0;

  let count1 = 0;

  let count2 = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] === 0) {
      count0 += 1;
    } else if (arr[i] === 1) {
      count1 += 1;
    } else if (arr[i] === 2) {
      count2 += 1;
    }
  }

  for (let i = 0; i < count0; i++) {
    arr[i] = 0;
  }

  for (let i = count0; i < count0 + count1; i++) {
    arr[i] = 1;
  }

  for (let i = count0 + count1; i < n; i++) {
    arr[i] = 2;
  }

  return arr;
}

// console.log(better(arr, n));

// optimal solution - dutch national flag algorithm

function optimal(arr, n) {
  // let low = 0;

  // let mid = 0;

  // let high = n-1;

  let low = 0,
    mid = 0,
    high = n - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      // swap arr[low] with arr[mid]

      // low++

      // mid++

      [arr[low], arr[mid]] = [arr[mid], arr[low]];

      low++;

      mid++;
    } else if (arr[mid] === 1) {
      // mid++
      mid++;
    } else {
      // swap arr[mid] with arr[high]

      // high--

      [arr[mid], arr[high]] = [arr[high], arr[mid]];

      high--;
    }
  }

  return arr;
}

console.log("optimal solution", optimal(arr, n));

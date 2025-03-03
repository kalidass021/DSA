// longest consecutive sequence
let arr = [102, 4, 100, 1, 101, 3, 2, 1, 1];
let n = arr.length;

// linear search algorithm
function linearSearch(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return true;
    }
  }
  return false;
}
// bruteforce
function bruteforce(arr, n) {
  let longestLen = 1;
  // pick and element and search for its consecutive numbers
  for (let i = 0; i < n; i++) {
    let x = arr[i];
    let cnt = 1;
    // search for consecutive numbers using linear search
    while (linearSearch(arr, x + 1)) {
      x += 1;
      cnt += 1;
    }

    longestLen = Math.max(longestLen, cnt);
  }

  return longestLen;
}

// console.log('bruteforce', bruteforce(arr, n));

function better(arr, n) {
  // sort the array
  arr.sort((a, b) => a - b);
  let lastSmaller = Number.MIN_SAFE_INTEGER;
  let cnt = 0;
  let longestLen = 1;

  // find the longest sequence
  for (let i = 0; i < n; i++) {
    if (arr[i] - 1 === lastSmaller) {
      cnt += 1;
      // arr[i] is the next element of the current sequence
      lastSmaller = arr[i];
    } else if (arr[i] !== lastSmaller) {
      cnt = 1;
      lastSmaller = arr[i];
    }

    // for arr[i] === lastSmaller we're not going to do anything, simple move

    // updating the longestLen
    longestLen = Math.max(longestLen, cnt);
  }

  return longestLen;
}

// console.log('better', better(arr, n));

// optimal solution

function optimal(arr, n) {
  if (n === 0) {
    return 0;
  }

  let longestLen = 1;
  let mySet = new Set([...arr]);

  // put all the array elements into the set
  for (let i = 0; i < n; i++) {
    mySet.add(arr[i]);
  }

  // using javascript spread operator
  // let mySet = new Set([...arr]);

  // find the longest sequence
  for (let value of mySet) {
    // if value is starting number
    if (!mySet.has(value - 1)) {
      // find consecutive numbers
      let cnt = 1;
      let x = value;

      while (mySet.has(x + 1)) {
        x += 1;
        cnt += 1;
      }

      longestLen = Math.max(longestLen, cnt);
    }
  }

  return longestLen;
}

console.log("optimal", optimal(arr, n));

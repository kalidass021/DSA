// Majority Element N/2 times

// let arr = [2, 2, 3, 3, 1, 2, 2];

let arr = [7, 7, 5, 7, 5, 1, 5, 7, 5, 5, 7, 7, 5, 5, 5, 5];

let n = arr.length;

// bruteforce

// pick up an element and loop through the entire array

// increase the counter if it is there, if counter > N/2 return

function bruteforce(arr, n) {
  for (let i = 0; i < n; i++) {
    let count = 0;

    for (let j = 0; j < n; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }

    if (count > Math.floor(n / 2)) {
      return arr[i];
    }
  }

  return -1;
}

// console.log('bruteforce', bruteforce(arr, n));

function better(arr, n) {
  let myMap = new Map();

  // storing the elements with their occurances

  for (let i = 0; i < n; i++) {
    let num = arr[i];

    if (myMap.has(num)) {
      myMap.set(num, myMap.get(num) + 1);
    } else {
      myMap.set(num, 1);
    }
  }

  // searching for the majority element

  for (const [num, count] of myMap) {
    if (count > Math.floor(n / 2)) {
      return num;
    }
  }

  return -1;
}

// console.log('better', better(arr, n));

// optimal solution - moore's voting algorithm

function optimal(arr, n) {
  let candidate;

  let count = 0;

  // applying the algorithm to find potential candidate

  for (let i = 0; i < n; i++) {
    if (count === 0) {
      count = 1;

      candidate = arr[i];
    } else if (arr[i] === candidate) {
      count++;
    } else {
      count--;
    }
  }

  // verify the candidate is majority element or not

  let verifyCount = 0;

  for (let i = 0; i < n; i++) {
    if (candidate === arr[i]) {
      verifyCount++;
    }
  }

  if (verifyCount > Math.floor(n / 2)) {
    return candidate;
  } else {
    return -1;
  }
}

console.log("optimal", optimal(arr, n));

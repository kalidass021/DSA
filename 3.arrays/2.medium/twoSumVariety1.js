// variety 1 - return Yes/ No

let arr = [2, 6, 5, 8, 11];

let target = 14;

// length of the arr

let n = arr.length;

// bruteforce method

// variety 1

function bruteforce(arr, target, n) {
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] + arr[j] === target) {
        return "Yes";
      }
    }
  }

  return "No";
}

// console.log(bruteforce(arr, target, n));

// better solution

// hashing

function better(arr, target, n) {
  let myMap = new Map();

  for (let i = 0; i < n; i++) {
    // calculate the number needed to reach the target

    let moreNeeded = target - arr[i];

    // check if the myMap has moreNeeded

    if (myMap.has(moreNeeded)) {
      return "Yes";
    }

    // If not, add the current number and it's index to the map

    myMap.set(arr[i], i);
  }

  // if no element found return no

  return "No";
}

console.log(better(arr, target, n));

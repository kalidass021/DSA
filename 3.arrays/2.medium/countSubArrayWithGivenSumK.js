// count sub array with given sum K

let arr = [1, 2, 3, -3, 1, 1, 1, 4, 2, -3];

// let arr = [1, 2, 3];

let K = 3;

let n = arr.length;

function bruteforce(arr, K, n) {
  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let sum = 0;

      for (let k = i; k <= j; k++) {
        sum += arr[k];
      }

      if (sum === K) {
        count++;
      }
    }
  }

  return count;
}

// console.log(bruteforce(arr, K, n));

function better(arr, K, n) {
  let count = 0;

  for (let i = 0; i < n; i++) {
    let sum = 0;

    for (let j = i; j < n; j++) {
      sum += arr[j];

      if (sum === K) {
        count++;
      }
    }
  }

  return count;
}

// console.log(better(arr, K, n));

function optimal(arr, K, n) {
  let myMap = new Map();

  let preSum = 0;

  let count = 0;

  // setting 0 in the map

  myMap.set(0, 1);

  for (let i = 0; i < n; i++) {
    // add current elment to prefix sum

    preSum += arr[i];

    // calculate x-k

    let remove = preSum - K;

    // add the number of subarrays to be removed

    count += myMap.get(remove) || 0;

    // update the prefix sum in the map

    myMap.set(preSum, (myMap.get(preSum) || 0) + 1);
  }

  return count;
}

console.log(optimal(arr, K, n));

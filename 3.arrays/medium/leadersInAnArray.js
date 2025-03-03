// leaders in an array

let arr = [10, 22, 12, 3, 0, 6];

let n = arr.length;

// bruteforce solution

function bruteforce(arr, n) {
  let leadersArr = [];

  for (let i = 0; i < n; i++) {
    let isLeaders = true;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] > arr[i]) {
        isLeaders = false;

        break;
      }
    }

    // if (isLeaders === true)

    if (isLeaders) {
      leadersArr.push(arr[i]);
    }
  }

  return leadersArr;
}

// console.log(bruteforce(arr, n));

// optimal solution

function optimal(arr, n) {
  let maxi = Number.MIN_SAFE_INTEGER;

  let leadersArr = [];

  for (let i = n - 1; i >= 0; i--) {
    if (arr[i] > maxi) {
      leadersArr.push(arr[i]);
    }

    // keep track of the right maximum

    maxi = Math.max(maxi, arr[i]);
  }

  return leadersArr.reverse();

  // in problem if asked to return in the sorted fashion the instead of reversing, sort it
}

console.log(optimal(arr, n));

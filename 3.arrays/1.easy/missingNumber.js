// find missing number in an array

let arr = [1, 2, 4, 5];

let N = 5; // largest number in the array

// bruteforce solution

function bruteforce(arr, N) {
  for (let i = 1; i <= N; i++) {
    let flag = 0;

    for (let j = 0; j < N - 1; j++) {
      if (arr[j] === i) {
        flag = 1;

        break;
      }
    }

    if (flag === 0) {
      return i;
    }
  }
}

// console.log(bruteforce(arr, N));

// better solution

function better(arr, N) {
  // hashing

  let hash = new Array(N + 1).fill(0);

  for (let i = 0; i < N - 1; i++) {
    hash[arr[i]] = 1;
  }

  for (let i = 1; i < N; i++) {
    if (hash[i] === 0) {
      return i;
    }
  }
}

// console.log(better(arr, N));

// optiomal solution

function optimal(arr, N) {
  let sum = (N * (N + 1)) / 2;

  let s2 = 0;

  // given array contains 4 elements so giving N-1

  for (let i = 0; i < N - 1; i++) {
    s2 += arr[i];
  }

  missingNumber = sum - s2;

  return missingNumber;
}

console.log(optimal(arr, N));

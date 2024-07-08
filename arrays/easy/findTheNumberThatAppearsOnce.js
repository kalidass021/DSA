// find the number that appears once and other numbers twice

let arr = [1, 1, 2, 3, 3, 4, 4];

let n = arr.length;

function bruteforce(arr, n) {
  // looping through the array to get individual element

  for (let i = 0; i < n; i++) {
    let num = arr[i];

    let count = 0;

    // looping through the array to find occurance of element

    for (let j = 0; j < n; j++) {
      // checking number is exist in arr, if yes increase the count

      if (arr[j] === num) {
        count++;
      }
    }

    // returning the num that has count 1

    if (count === 1) {
      return num;
    }
  }
}

// console.log(bruteforce(arr, n));

// optimal solution

function optimal(arr, n) {
  let xorr = 0;

  for (let i = 0; i < n; i++) {
    xorr = xorr ^ arr[i];
  }

  return xorr;
}

console.log(optimal(arr, n));

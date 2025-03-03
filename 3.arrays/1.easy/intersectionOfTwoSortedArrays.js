let arr1 = [1, 2, 2, 3, 3, 4, 5, 6];

let arr2 = [2, 3, 3, 5, 6, 6, 7];

let n1 = arr1.length;

let n2 = arr2.length;

// bruteforce solution

function bruteforce(arr1, arr2, n1, n2) {
  let visitedArr = new Array(n2).fill(0);

  let intersectionArr = [];

  for (let i = 0; i < n1; i++) {
    for (let j = 0; j < n2; j++) {
      if (arr1[i] === arr2[j] && visitedArr[j] === 0) {
        intersectionArr.push(arr1[i]);

        visitedArr[j] = 1;

        break;
      }

      // assuming the given array is sorted

      // so if arr2 element exceeds the arr1 element breaking the loop

      if (arr2[j] > arr1[i]) {
        break;
      }
    }
  }

  return intersectionArr;
}

// console.log(bruteforce(arr1, arr2, n1, n2));

// optimal solution

// 2 pointer approach

function optimal(arr1, arr2, n1, n2) {
  let i = 0;

  let j = 0;

  let intersectionArr = [];

  while (i < n1 && j < n2) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr2[j] < arr1[i]) {
      j++;
    } else {
      intersectionArr.push(arr1[i]);

      i++;

      j++;
    }
  }

  return intersectionArr;
}

console.log(optimal(arr1, arr2, n1, n2));

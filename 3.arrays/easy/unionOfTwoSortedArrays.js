let arr1 = [1, 1, 2, 3, 4, 5];

let arr2 = [2, 3, 4, 4, 5, 6, 7];

// if array is not in sorted order, we need to sort the array

let n1 = arr1.length;

let n2 = arr2.length;

// brute force solution

function bruteforce(arr1, arr2, n1, n2) {
  let set = new Set();

  for (let i = 0; i < n1; i++) {
    set.add(arr1[i]);
  }

  for (let j = 0; j < n2; j++) {
    set.add(arr2[j]);
  }

  let unionArr = [];

  for (let item of set) {
    unionArr.push(item);
  }

  return unionArr;
}

// console.log(bruteforce(arr1, arr2, n1, n2));

// languate specific solution

function languageSpecific(arr1, arr2) {
  let mySet = new Set([...arr1, arr2]);

  let unionArr = [...mySet];

  return unionArr;
}

// console.log(languageSpecific(arr1, arr2));

// optimal solution

function optimalSolution(arr1, arr2, n1, n2) {
  let i = 0;

  let j = 0;

  let unionArr = [];

  while (i < n1 && j < n2) {
    if (arr1[i] < arr2[j]) {
      if (unionArr.length === 0 || unionArr[unionArr.length - 1] !== arr1[i]) {
        unionArr.push(arr1[i]);
      }

      i++;
    } else {
      if (unionArr.length === 0 || unionArr[unionArr.length - 1] !== arr2[j]) {
        unionArr.push(arr2[j]);
      }

      j++;
    }
  }

  // if arr1 is exhausted and still some elements left in arr2

  while (j < n2) {
    if (unionArr.length === 0 || unionArr[unionArr.length - 1] !== arr2[j]) {
      unionArr.push(arr2[j]);
    }

    j++;
  }

  // if arr2 is exhausted and still some elements left in arr1

  while (i < n1) {
    if (unionArr.length === 0 || unionArr[unionArr.length - 1] !== arr1[i]) {
      unionArr.push(arr1[i]);
    }

    i++;
  }

  return unionArr;
}

console.log(optimalSolution(arr1, arr2, n1, n2));

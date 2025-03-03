// variety 2 - return index1, index2

// index1 & index 2 are indexe of the elements that give target by sum

let arr = [2, 6, 5, 8, 11];

let target = 14;

// length of the array

let n = arr.length;

function bruteforce(arr, target, n) {
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
}

// console.log(bruteforce(arr, target, n));

// better solution

function better(arr, target, n) {
  let myMap = new Map();

  for (let i = 0; i < n; i++) {
    // calculate the number needed to reach the target

    let moreNeeded = target - arr[i];

    // check if map has more needed

    if (myMap.has(moreNeeded)) {
      // return the indices of the two numbers

      return [myMap.get(moreNeeded), i];
    }

    // if not, add the current number and it's index to map

    myMap.set(arr[i], i);
  }

  // if no element found return the emp arr

  return [];
}

console.log(better(arr, target, n));

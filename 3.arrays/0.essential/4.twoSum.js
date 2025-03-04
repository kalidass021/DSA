// two sum problem

let arr = [2, 6, 5, 8, 11];
let target = 14;

function bruteforce(arr, target) {
  // size of the the array
  let n = arr.length;

  // iterate through each element of the array
  for (let i = 0; i < n; i++) {
    // iterate through each element again to find a pair
    for (let j = 0; j < n; j++) {
        // check if sum of the current pair equals the target value
      if (arr[i] + arr[j] === target) {
        // return the pair of numbers
        return [arr[i], arr[j]];
      }
    }
  }

  // if no pair found, return the empty array
  return [];
}

console.log(bruteforce(arr, target)); // [ 6, 8 ]

// optimal solution using hash map

function optimal(arr, target) {
    // create a Map to store the elements of the array
    let myMap = new Map();

    for (let val of arr) {
        // calculate the value needed to reach the target
        const moreNeeded = target - val;
        // check if the needed value is already in the Map
        if (myMap.has(moreNeeded)) {
            // if found, return the pair of numbers that add up to the target value
            return [val, moreNeeded];
        }
        // if not found, add the current element to the Map
        myMap.set(val);
    }
    // if no pair is found, return the empty array
    return [];
}

console.log(optimal(arr, target)); // [ 8, 6 ]

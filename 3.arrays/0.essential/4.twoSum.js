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

console.log(bruteforce(arr, target));

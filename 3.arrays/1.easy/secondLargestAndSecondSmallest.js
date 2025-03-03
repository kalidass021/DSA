let arr = [1, 2, 3, 4, 5];

let n = arr.length;

function secondLargest(arr, n) {
  let largest = arr[0];

  let sLargest = -1; // assuming arr is not containing any negative numbers

  for (let i = 1; i < n; i++) {
    if (arr[i] > largest) {
      sLargest = largest;

      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > sLargest) {
      sLargest = arr[i];
    }
  }

  return sLargest;
}

function secondSmallest(arr, n) {
  let smallest = arr[0];

  let sSmallest = Number.MAX_SAFE_INTEGER;

  for (let i = 1; i < n; i++) {
    if (arr[i] < smallest) {
      sSmallest = smallest;

      smallest = arr[i];
    } else if (arr[i] !== smallest && arr[i] < sSmallest) {
      sSmallest = arr[i];
    }
  }

  return sSmallest;
}

function secondLargestAndSecondSmallest(arr, n) {
  let sLargest = secondLargest(arr, n);

  let sSmallest = secondSmallest(arr, n);

  return [sLargest, sSmallest];
}

console.log(secondLargestAndSecondSmallest(arr, n));

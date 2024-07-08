let arr = [4, 6, 2, 5, 7, 9, 1, 3];

let n = arr.length;

let low = 0;

let high = n - 1;

function partition(arr, low, high) {
  let pivot = arr[low];

  let i = low;

  let j = high;

  while (i < j) {
    while (arr[i] <= pivot && i <= high - 1) {
      i++;
    }

    while (arr[j] > pivot && j >= low + 1) {
      j--;
    }

    if (i < j) {
      // swap arr[i] && arr[j]

      // let temp = arr[i];

      // arr[i] = arr[j];

      // arr[j] = temp;

      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  // swaping the pivot and arr[low]

  // let temp2 = arr[low];

  // arr[low] = arr[j];

  // arr[j] = temp2;

  [arr[low], arr[j]] = [arr[j], arr[low]];

  // returning the partition index

  return j;
}

function quickSort(arr, low, high) {
  // we are executing this only if arr have more than one element

  if (low < high) {
    let partitionIndex = partition(arr, low, high);

    quickSort(arr, low, partitionIndex - 1);

    quickSort(arr, partitionIndex + 1, high);
  }

  // return the arr

  return arr;
}

console.log(quickSort(arr, low, high));

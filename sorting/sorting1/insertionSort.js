// insertion sort -- Takes an element and places it in correct order.

let arr = [14, 9, 15, 12, 6, 8, 13];
let n = arr.length;

function insertionSort(arr, n) {
  for (let i = 0; i <= n - 1; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      j--;
    }
  }

  console.log("sorted arr", arr);
}

insertionSort(arr, n);

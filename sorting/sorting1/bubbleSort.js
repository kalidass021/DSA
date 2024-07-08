// bubble sort - pushes the maximum to the last by adjacent swaps

let arr = [24, 18, 38, 43, 14, 40, 1, 54];
// let arr = [13, 46, 24, 52, 20, 9];
let n = arr.length;

function bubbleSort(arr, n) {
  for (let i = n - 1; i >= 1; i--) {
    let swap = 0;
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        swap = 1;
        // [arr[j+1], arr[j]] = [arr[j], arr[j+1]];
      }
    }
    if (swap === 0) {
      break;
    }
  }
  console.log("sorted arr", arr);
}

bubbleSort(arr, n);

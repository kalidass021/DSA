// merge sort - divide & merge

let arr = [3, 1, 2, 4, 1, 5, 2, 6, 4];
let n = arr.length;
// merge algorithm
function merge(arr, low, mid, high) {
  let temp = [];
  // [low to mid]
  // [mid+1 to high]
  let left = low;
  let right = mid + 1;

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }

  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }

  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  // replacing the arr with temp
  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
}

function mergeSort(arr, low, high) {
  if (low === high) return;
  let mid = Math.floor((low + high) / 2);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  merge(arr, low, mid, high);
}

mergeSort(arr, 0, n - 1);

console.log("sorted arr", arr);

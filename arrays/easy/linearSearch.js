let arr = [6, 7, 8, 4, 1];

let num = 4;

let n = arr.length;

function linearSearch(arr, n, num) {
  for (let i = 0; i < n; i++) {
    if (arr[i] === num) {
      return i;
    }
  }

  return -1;
}

console.log(linearSearch(arr, n, num));

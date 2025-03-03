let arr = [1, 1, 2, 2, 2, 3, 3];

let n = arr.length;

function removeDuplicates(arr, n) {
  let i = 0;

  for (let j = 1; j < n; j++) {
    if (arr[j] !== arr[i]) {
      arr[i + 1] = arr[j];

      i++;
    }
  }

  console.log("unique arr", arr);

  // returning the number of unique elements

  return i + 1;
}

console.log(removeDuplicates(arr, n));

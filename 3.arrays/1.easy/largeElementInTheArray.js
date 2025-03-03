let arr = [3, 2, 1, 5, 4];

let n = arr.length;

let largest = arr[0];

for (let i = 1; i < n; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
  }
}

console.log("largest element in the array", largest);

// using inbuilt method

// let max = Math.max(...arr);

// console.log('max', max);

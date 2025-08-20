// reverse the array

let arr = [1, 2, 3, 4, 5];

function reverseTheArr(arr) {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }

  return result;
}

console.log('for loop', reverseTheArr(arr));

// reverse the array using recursion

function reverseTheArrRecursion(arr) {
  let temp = [...arr];
  if (temp.length === 0) {
    return [];
  }

    return [
      temp[temp.length - 1],
      ...reverseTheArrRecursion(temp.slice(0, -1)),
    ];
}

console.log('recursion', reverseTheArrRecursion(arr));

function reverseTheArrReduce(arr) {
    return arr.reduce((acc, curr) => [curr, ...acc], []);
}

console.log('reduce', reverseTheArrReduce(arr));

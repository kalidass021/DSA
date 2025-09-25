// sum of elements in the array

function sumOfElements(arr) {
  let sum = 0; // initially

  for (let num of arr) {
    sum += num;
  }
  // return the sum
  return sum;
}

console.log(sumOfElements([1, 2, 3, 4, 5])); // 15

const sumOfElementsReduce = (arr) => arr.reduce((acc, curr) => (acc += curr));

console.log(sumOfElementsReduce([1, 2, 3, 4, 5]));

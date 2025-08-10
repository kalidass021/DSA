// flatten the nested arrays

let nestedArr = [1, [2, [3, [4, [5]]]]];
function flatArr(nestedArr) {
  let result = nestedArr.flat(Infinity);

  return result;
}

console.log(flatArr(nestedArr)); // [ 1, 2, 3, 4, 5 ]

// using recursion

function flattenRecursive(nestedArr) {
  let result = []; // initially

  for (let item of nestedArr) {
    if (Array.isArray(item)) {
      let flattenedItem = flattenRecursive(item);
      result = [...result, ...flattenedItem]; // spread the flattened sub array
    } else {
      // retult = [...result, item];
      result.push(item);
    }
  }

  return result;
}

console.log(flattenRecursive(nestedArr)); // [ 1, 2, 3, 4, 5 ]

function flattenRecursiveReduce(nestedArr) {
  let result = nestedArr.reduce((acc, curr) => {
    return Array.isArray(curr)
      ? [...acc, ...flattenRecursiveReduce(curr)]
      : [...acc, curr];
  }, []);

  return result;
}

console.log(flattenRecursiveReduce(nestedArr));
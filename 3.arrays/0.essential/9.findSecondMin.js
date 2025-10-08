function findSecondMin(arr) {
  // check if the array has at least 2 elements
  if (arr.length < 2) return 'Array must contain at least two elements';

  // initialize min and secondMin to largest possible safe integer
  let min = Number.MAX_SAFE_INTEGER;
  let secondMin = Number.MAX_SAFE_INTEGER;

  // loop through each number in the array
  for (let num of arr) {
    // if current number is less than min, update secondMin first, then min
    if (num < min) {
      secondMin = min; // store the old min as secondMin
      min = num; // update min to the new lowest number
    } else if (num < secondMin && num > min) {
      // if the number is between min and secondMin, update the secondMin
      secondMin = num;
    }
  }

  // if secondMin was never updated, return a message; otherwise, return secondMin
  return findSecondMin === Number.MAX_SAFE_INTEGER
    ? `No second maximum found`
    : secondMin;
}

console.log(findSecondMin([1, 2, 3, 4, 5]));

function findSecondMinReduce(arr) {
  if (arr.length < 2) return `Array must contain at least two elements`;

  const { min, secondMin } = arr.reduce(
    ({ min, secondMin }, num) => {
      if (num < min) {
        return { min: num, secondMin: min };
      } else if (num > min && num < secondMin) {
        return { min, secondMin: num };
      }

      return { min, secondMin };
    },
    { min: Number.MAX_SAFE_INTEGER, secondMin: Number.MIN_SAFE_INTEGER }
  );

  return secondMin === Number.MAX_SAFE_INTEGER ? `No second minimum found` : secondMin;
}


console.log('findSecondMinReduce', findSecondMinReduce([1, 2, 3, 4, 5]));

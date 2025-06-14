function secondMax(arr) {

 // check if the array has at least 2 elements

 if (arr.length < 2) return 'Array must contain at least two elements';


 // initialize max and secondMax to the smallest possible safe integer

 let max = Number.MIN_SAFE_INTEGER;

 let secondMax = Number.MIN_SAFE_INTEGER;


 // loop through each number in the array

 for (let num of arr) {

  // if current number is greater than max, update secondMax first, then max

  if (num > max) {

   secondMax = max; // store the old max as secondMax

   max = num; // update max to the new highest number

  } else if (num > secondMax && num < max) {

   // if the current number is between max and secondMax, update secondMax

   secondMax = num;

  }

 }


 // if secondMax was never updated, return a message; otherwise, return secondMax

 return secondMax === Number.MAX_SAFE_INTEGER ? 'No second maximum found' : secondMax;

}


console.log(secondMax([1, 2, 3, 4, 5]));
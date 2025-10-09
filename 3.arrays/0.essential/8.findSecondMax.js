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

 return secondMax === Number.MIN_SAFE_INTEGER ? 'No second maximum found' : secondMax;

}


console.log(secondMax([1, 2, 3, 4, 5]));

function secondMaxReduce(arr) {
    if (arr.length < 2) return `Array must contain at least two elements`;

    const { max, secondMax } = arr.reduce(( {max, secondMax }, num) => {
        if (num > max) {
            return { max: num, secondMax: max };
        } else if (num > secondMax && num < max) {
            return { max, secondMax: num };
        }

        return { max, secondMax };
    }, { max: Number.MIN_SAFE_INTEGER, secondMax: Number.MAX_SAFE_INTEGER });

    return secondMax === Number.MIN_SAFE_INTEGER ? `No maximum found` : secondMax;
}

console.log('secondMaxReduce', secondMaxReduce([1, 2, 3, 4, 5]));

/* 
    Note: In this problem if no secondMax found, instead returing message we can return -1 also
*/


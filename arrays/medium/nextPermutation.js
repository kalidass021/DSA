// find the next permutation

// let arr = [2, 1, 5, 4, 3, 0, 0];

let arr = [1, 3, 2];

let n = arr.length;


function nextPermutationOptimal() {

 // step1. find the breakpoint

 let breakpoint = -1;

 for (let i=n-2; i>=0; i--) {

  if (arr[i] < arr[i+1]) {

   breakpoint = i;

   break;

  }

 }


 // if breakPoint is still -1 (no breakpoint found in step1), reverse the array and return it

 if (breakpoint === -1) {

 return arr.reverse();

 }


 // step2. find someone greater than arr[breakPoint] but smaller among others

 // and swap it with arr[breakpoint]

 for (let i=n-1; i>breakpoint; i--) {

  if (arr[i] > arr[breakpoint]) {

   [arr[i], arr[breakpoint]] = [arr[breakpoint], arr[i]];

   break;

  }

 }


 // step3. reverse the right portion arr[breapoint] to arr[n-1]

 let reversedRightPortion = arr.slice(breakpoint+1, n).reverse(); 

 // slice extracts upto end not including end

 return [...arr.slice(0, breakpoint+1), ...reversedRightPortion];

 // [2, 3, 0, 0, 1, 4, 5]

}


console.log(nextPermutationOptimal(arr, n));



// koko eating bananas
// return the min integer k such that koko can eat all bananas in h hours
// k = bananas/h(hour)

let piles = [3, 6, 7, 11];
// hours
let h = 8;

// the answer range is 1 to largest elment in the arr

// bruteforce solution

function calculateTotalHours(piles, hourly) {
  // total hours
  let totalHours = 0;
  // length of the piles array
  let n = piles.length;

  for (let i=0; i<n; i++) {
    totalHours += Math.ceil(piles[i]/hourly);
  }

  return totalHours;

}

function bruteforce(piles, h) {

  // find the largest element in the arr
  let maxi = Math.max(...piles);

  // loop till the largest element of the arr
  // to find possible minimum value of k
  for (let i=1; i<=maxi; i++) {
    // required time
    let requiredTime = calculateTotalHours(piles, i);

    if (requiredTime <= h) {
      return i;
    }
  }
  // dummy return statement

  return maxi;

}



// console.log(bruteforce(piles, h));

// the bruteforce solution will exceed the time limit

function optimal(piles, h) {
  let ans = Number.MAX_SAFE_INTEGER;
  // low and high
  let low = 1, high = Math.max(...piles);
  // loop till low <= high
  while (low <= high) {
    // calculate mid
    let mid = Math.floor((low+high)/2);
    // total hours
    let totalHours = calculateTotalHours(piles, mid);

    if (totalHours <= h) {
      ans = mid;
      // eliminate right
      // search on left
      high = mid-1;
    } else {
      // eliminate left
      // search on right
      low = mid+1;
    }

  }
  return ans;

  // instead of ans we can return low also

  // return low;

}

console.log(optimal(piles, h));
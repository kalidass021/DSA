// find square root of a number in log n

let n = 28;

// bruteforce
function bruteforce(n) {
  let ans = 1;

  for (let i = 1; i < n; i++) {
    if (i * i <= n) {
      ans = i;
    } else {
      break;
    }
  }

  return ans;
}

// console.log(bruteforce(n));

// we'll also solve the problem using Math.sqrt

// optimal solution
function optimal(n) {
  // low and high
  let low = 1,
    high = n;

  // ans
  // let ans = 1;
  // run a loop until low <= high

  while (low <= high) {
    // find mid
    let mid = Math.floor((low + high) / 2);
    // condition
    if (mid * mid <= n) {
      // ans = mid;

      // eliminate left
      // search on right
      low = mid + 1;
    } else {
      // eliminate right
      // search on left
      high = mid - 1;
    }
  }
  // return ans;
  return high;
}

/* 

1. Initially high was at a not possible place and low was at the possible place.
2. Since we're eliminating, the low will always move towards right and
  high will move towards left.
3. Hence the low ends up pointing at the first place where it is not possible and
  high ends up pointing the place where it is possible.

  That's why instead of ans we can also return high

*/

console.log(optimal(n));

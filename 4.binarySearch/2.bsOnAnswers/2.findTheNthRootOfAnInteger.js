// find the Nth root of an Integer M

// integer

let m = 27;

let n = 3;

// bruteforce using linear search

function bruteforce(n, m) {
  // running a loop till m

  for (let i = 1; i < m; i++) {
    // condition
    if (Math.pow(i, n) === m) {
      // i*i*i === m
      return i;
    } else if (Math.pow(i, n) > m) {
      // break the loop
      break;
    }
  }

  return -1;
}

// console.log(bruteforce(n, m));

// optimal solution using binary search on answers

function midPowN(mid, n) {
  let res = 1;

  for (let i = 0; i < n; i++) {
    res *= mid;
  }
  return res;
}

function optimal(n, m) {
  // low and high

  let low = 1,
    high = m;
  // running a loop until low <= high
  while (low <= high) {
    // find mid
    let mid = Math.floor((low + high) / 2);
    // condition
    if (midPowN(mid, n) === m) {
      return mid;
    } else if (midPowN(mid, n) < m) {
      // eliminate left
      // search on right
      low = mid + 1;
    } else {
      // eliminate right
      // search on left
      high = mid - 1;
    }
  }

  return -1;
}

console.log(optimal(n, m));

// optimal solution - which covers some edge cases and avoid over flowing

function midPowN2(mid, n, m) {
  // return 1 if === m

  // return 0 if < m

  // return 2 if > m
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res *= mid;
    if (res > m) return 2;
  }
  if (res === m) return 1;
  return 0;
}

function NthRoot(n, m) {
  let low = 1,
    high = m;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let midPowNRes = midPowN2(mid, n, m);
    
    if (midPowNRes === 1) {
      return mid;
    } else if (midPowNRes === 0) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

// console.log(NthRoot(n, m));

// minimum no. of days to make M bouguets

let bloomDay = [7, 7, 7, 7, 13, 11, 12, 7];
// no. of bouguets
let m = 2;
// adjacent flowers required
let k = 3;

// answer range is [7 to 13] because on 6th day no flower bloomed
// i,e Math.min(...bloomDay) to Math.max(...bloomDay)

// bruteforce solution

// possible or not
function possible(bloomDay, day, m, k) {
  // counter
  let cnt = 0;
  // no. of bouguets formed
  let noOfBouguetsFormed = 0;
  // length of the arr
  let n = bloomDay.length;
  // loop till n-1
  for (let i = 0; i < n; i++) {
    if (day >= bloomDay[i]) {
      cnt++;
    } else {
      noOfBouguetsFormed += Math.floor(cnt / k);

      cnt = 0;
    }
  }

  noOfBouguetsFormed += Math.floor(cnt / k);
  // if (noOfBouguetsFormed >= m) {
  // return true;
  // } else {
  // false;
  // }

  return noOfBouguetsFormed >= m;
}

function bruteforce(bloomDay, m, k) {
  // size of the arr
  let n = bloomDay.length;
  // impossible case
  if (n < m * k) {
    return -1;
  }
  // answer range is from min of arr to max of arr
  let mini = Math.min(...bloomDay);
  let maxi = Math.max(...bloomDay);

  for (let i = mini; i <= maxi; i++) {
    if (possible(bloomDay, i, m, k)) {
      return i;
    }
  }

  return -1;
}

// console.log(bruteforce(bloomDay, m, k));

function optimal(bloomDay, m, k) {
  // size of the arr
  let n = bloomDay.length;
  // edge case
  if (n < m * k) {
    return -1;
  }

  // ans
  let ans = Number.MAX_SAFE_INTEGER;
  // low and high
  let low = Math.min(...bloomDay),
    high = Math.max(...bloomDay);
  // loop till low <= high
  while (low <= high) {
    // find mid
    let mid = Math.floor((low + high) / 2);

    // condition
    if (possible(bloomDay, mid, m, k)) {
      ans = mid;
      // eliminate right
      // search on left
      high = mid - 1;
    } else {
      // eliminate left
      // search on right
      low = mid + 1;
    }
  }

  return ans;

  // instead of ans we can return low also
  // return low;
}

console.log(optimal(bloomDay, m, k));

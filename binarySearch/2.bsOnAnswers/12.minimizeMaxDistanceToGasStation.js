// minimize the max distance between the gas stations
let arr = [1, 13, 17, 23];

// no. of gas stations needs to be placed
let k = 5;

// bruteforce solution
function bruteforce(arr, k) {
  // size of the arr
  let n = arr.length;
  // keep a track of how many have been placed
  let howmany = new Array(n - 1).fill(0);
  // pick and place k gas stations

  for (let gasStations = 1; gasStations <= k; gasStations++) {
    // find the maximum section and insert the gas station
    // maxSection
    let maxSection = -1;
    // maxIndex - index where the insert is occuring
    let maxInd = -1;

    for (let i = 0; i < n - 1; i++) {
      let diff = arr[i + 1] - arr[i];
      let sectionLength = diff / (howmany[i] + 1.0);
      if (sectionLength > maxSection) {
        maxSection = sectionLength;
        maxInd = i;
      }
    }

    // insert the current gas station
    howmany[maxInd]++;
  }

  // find the maximum distance i,e.. answer
  let maxAns = -1;

  for (let i = 0; i < n - 1; i++) {
    let diff = arr[i + 1] - arr[i];
    let sectionLength = diff / (howmany[i] + 1.0);
    maxAns = Math.max(maxAns, sectionLength);
  }

  return maxAns;
}

// console.log(bruteforce(arr, k));
// optimal solution using binary search
// the answer range is from 0 to max diff between the any 2 contiguous elements of the arr
// function numOfGasStationsRequired(arr, dist) {
// // size of the arr
// let n = arr.length;

// // initially
// let cnt = 0;
// for (let i=1; i<n; i++) {
// let numberInBetween = Math.floor((arr[i] - arr[i-1]) / dist);
// if ((arr[i] - arr[i-1]) === dist * numberInBetween) {
// cnt += numberInBetween - 1;
// } else {
// cnt += numberInBetween;
// }
// }
// return cnt;
// }

function numOfGasStationsRequired(arr, dist) {
  // size of the arr
  let n = arr.length;
  // initially
  let cnt = 0;
  for (let i = 0; i < n - 1; i++) {
    cnt += Math.floor((arr[i + 1] - arr[i]) / dist);
  }

  return cnt;
}

function optimal(arr, k) {
  // size of the arr
  let n = arr.length;
  // ans
  let ans = -1;
  let low = 0;
  let high = 0; // initially

  // find the maximum distance
  for (let i = 0; i < n - 1; i++) {
    high = Math.max(high, arr[i + 1] - arr[i]);
  }
  let diff = 1e-6;
  while (high - low > diff) {
    // find mid
    let mid = (low + high) / 2.0;
    let cnt = numOfGasStationsRequired(arr, mid);

    if (cnt <= k) {
      ans = mid;
      // search on left
      high = mid;
    } else {
      low = mid;
    }
  }

  // here the concept of opposite polarity will not work
  return ans;

  // instead of ans we can return high also
}

console.log(optimal(arr, k));

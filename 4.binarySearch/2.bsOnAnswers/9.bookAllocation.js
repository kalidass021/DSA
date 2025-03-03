// Allocate books or book allocation
// Allocate minimum pages GFG problem
let arr = [25, 46, 28, 49, 24];
// no. of students
let m = 4;
// size of the arr
let n = arr.length;
// the answer range is from largetst element of the arr to sum of the arr
// i,e... Math.max(...arr) to arr.reduce((acc, curr) => acc + curr, 0);

function countStudents(arr, pages) {
  // size of the arr
  let n = arr.length;
  // initially we're at the student 1
  let students = 1;
  // that student have the below pages
  let pagesSum = 0;

  // loop till n-1
  for (let i = 0; i < n; i++) {
    if (pagesSum + arr[i] <= pages) {
      // add the arr[i] with pagesSum
      pagesSum += arr[i];
    } else {
      // move to next student
      students += 1;
      // reset the pagesSum and assign the arr[i] to it
      pagesSum = arr[i];
    }
  }

  // return the no. of students

  return students;
}

// bruteforce solution

function bookAllocationBrute(arr, m, n) {
  // book allocation impossible
  if (m > n) {
    return -1;
  }

  let low = Math.max(...arr);
  let high = arr.reduce((a, b) => a + b, 0);

  // loop from low to high
  for (let pages = low; pages <= high; pages++) {
    if (countStudents(arr, pages) === m) {
      return pages;
    }
  }

  return low;
}

// console.log(bookAllocationBrute(arr, m, n));

function bookAllocationOptimal(arr, m, n) {
  // book allocation impossible
  if (m > n) {
    return -1;
  }

  let ans = -1;
  // low and high
  let low = Math.max(...arr);
  let high = arr.reduce((acc, curr) => acc + curr, 0);

  // loop till low <= high
  while (low <= high) {
    // find mid
    let mid = Math.floor((low + high) / 2);
    // condition
    // if (countStudents(arr, mid) === m) {
    // ans = mid;
    // return ans;
    // } else if (countStudents(arr, mid) < m) {
    // // eliminate right
    // // search on left
    // high = mid - 1;
    // }else {
    // // eliminate left
    // // search on right
    // low = mid + 1;
    // }

    if (countStudents(arr, mid) <= m) {
      ans = mid;
      // eliminate right
      // search on left
      high = mid - 1;
    } else {
      // search left
      // search on right
      low = mid + 1;
    }
  }

  // return the ans
  return ans;

  // instead of returning the ans we can return low also
  //return low;
}

console.log(bookAllocationOptimal(arr, m));

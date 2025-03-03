let arr = [1, 1, 0, 1, 1, 1, 0, 1, 1];

// optimal solution

function optimal(arr) {
  let maxi = 0;

  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      count += 1;

      maxi = Math.max(count, maxi);
    } else {
      count = 0;
    }
  }

  return maxi;
}

console.log(optimal(arr));

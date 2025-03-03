// rearrange elements by sign

// if length is n it will contain n/2 +ve and n/2 -ve elements

let arr = [3, 1, -2, -5, 2, -4];

let n = arr.length;

// bruteforce

function bruteforce(arr, n) {
  let positives = [];

  let negatives = [];

  // separate the array into positives and negatives

  for (let i = 0; i < n; i++) {
    if (arr[i] > 0) {
      positives.push(arr[i]);
    } else {
      negatives.push(arr[i]);
    }
  }

  // loop through the positives and negatives array and put elements in correct place

  for (let i = 0; i < n / 2; i++) {
    arr[2 * i] = positives[i];

    arr[2 * i + 1] = negatives[i];
  }

  return arr;
}

// console.log(bruteforce(arr, n));

// optimal solution

function optimal(arr, n) {
  let result = new Array(n);

  let posIndex = 0;

  let negIndex = 1;

  for (let i = 0; i < n; i++) {
    if (arr[i] > 0) {
      result[posIndex] = arr[i];

      posIndex += 2;
    } else {
      result[negIndex] = arr[i];

      negIndex += 2;
    }
  }

  return result;
}

// console.log('optimal', optimal(arr, n));

// follow up question where postitives and negatives are not equal

// in that case we can't able use optimal solution because that is working on n/2

// arr = [1, 2, -4, -5, 3, 6]; // arr for follow up question

function followup(arr, n) {
  let positives = [];

  let negatives = [];

  for (let i = 0; i < n; i++) {
    if (arr[i] > 0) {
      positives.push(arr[i]);
    } else {
      negatives.push(arr[i]);
    }
  }

  if (positives.length > negatives.length) {
    for (let i = 0; i < negatives.length; i++) {
      arr[2 * i] = positives[i];

      arr[2 * i + 1] = negatives[i];
    }

    let index = negatives.length * 2;

    for (let i = negatives.length; i < positives.length; i++) {
      arr[index] = positives[i];

      index++;
    }
  } else {
    for (let i = 0; i < positives.length; i++) {
      arr[2 * i] = positives[i];

      arr[2 * i + 1] = negatives[i];
    }

    let index = positives.length * 2;

    for (let i = positives.length; i < negatives.length; i++) {
      arr[index] = negatives[i];

      index++;
    }
  }

  return arr;
}

console.log("followup", followup(arr, n));

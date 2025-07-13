// remove the duplicates from the array

let arr = [1, 1, 1, 2, 3, 3, 4, 4, 4, 5, 5];

function removeDuplicates(arr) {
  let mySet = new Set();
  let uniqueArr = []; // to store the result

  // loop through the array and put all items into set
  // set automatically remove the duplicates
  for (let val of arr) {
    mySet.add(val);
  }

  // loop through the set and put unique elements into an new array
  for (let val of mySet) {
    uniqueArr.push(val);
  }

  return uniqueArr;
}

console.log(removeDuplicates(arr));

// using hash map

function removeDuplicatesHash(arr) {
  let myMap = new Map();
  let uniqueArr = []; // to store the result

  for (let val of arr) {
    // if the val already not present in the map
    if (!myMap.has(val)) {
      myMap.set(val, true); // add the val to the map
      uniqueArr.push(val); // push the val to the uniqueArr
    }
  }

  return uniqueArr;
}

console.log(removeDuplicatesHash(arr));

// using set

function removeDuplicatesSet(arr) {
  let mySet = new Set();

  let uniqueArr = []; // to store the result

  for (let val of arr) {
    if (!mySet.has(val)) {
      mySet.add(val); // add the val to the set
      uniqueArr.push(val)
    }
  }

  return uniqueArr;
}

console.log(removeDuplicatesSet(arr));

// simple solution using language advantage

function removeDuplicates2(arr) {
  let mySet = new Set(arr);
  // spread the set inside the array
  let uniqueArr = [...mySet];

  return uniqueArr;
}

console.log(removeDuplicates2(arr));


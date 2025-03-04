// find the no. of occurance of an elements

let arr = [1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 5, 5, 6, 6, 7, 8, 8, 8];

function frequency(arr) {
    // create a Map to store frequence of each element
  let myMap = new Map();

  for (let val of arr) {
    if (myMap.has(val)) {
        // if the element is already in the Map, increment it's count
      myMap.set(val, myMap.get(val) + 1);
    } else {
        // if the element is not in the Map, add it with the count of 1
      myMap.set(val, 1);
    }
  }

  return myMap;
}

console.log(frequency(arr)); // 1 => 3, 2 => 2, 3 => 4, 4 => 1, 5 => 2, 6 => 2, 7 => 1, 8 => 3

// if we want to return the result as object instead of map
let res = frequency(arr);

console.log(Object.fromEntries(res)); // { '1': 3, '2': 2, '3': 4, '4': 1, '5': 2, '6': 2, '7': 1, '8': 3 }

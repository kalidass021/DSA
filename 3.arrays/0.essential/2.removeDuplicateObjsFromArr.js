// remove duplicates from array of objects

let arr = [
  {
    name: 'a',
    id: 1,
  },
  {
    name: 'a',
    id: 2,
  },
  {
    name: 'b',
    id: 2,
  },
  {
    name: 'c',
    id: 3,
  },
];

function removeDuplicateObjs(arr) {
    // create a Map to keep track of unique names
  let myMap = new Map();
  // create an array to store the unique objects
  let uniqueArr = [];

  for (let obj of arr) {
    // if the name property of the object is not already in the Map
    if (!myMap.has(obj.name)) {
      myMap.set(obj.name, true); // add the name to the map
      uniqueArr.push(obj); // push the unique object to the uniqueArr
    }
  }

  return uniqueArr;
}

console.log(removeDuplicateObjs(arr)); // [ { name: 'a', id: 1 }, { name: 'b', id: 2 }, { name: 'c', id: 3 } ]

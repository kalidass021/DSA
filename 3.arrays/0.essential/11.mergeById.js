// merge the user data by id

let arr1 = [
  { id: 1, age: 20 },
  { id: 2, age: 21 },
  { id: 3, age: 22 },
];
let arr2 = [
  { id: 1, marks: 100 },
  { id: 2, marks: 99 },
  { id: 3, marks: 98 },
];

function mergeById(arr1, arr2) {
  let merged = arr1.map((item1) => {
    let item2 = arr2.find((item) => item.id === item1.id);

    return { ...item1, ...item2 };
  });

  return merged;
}

console.log(mergeById(arr1, arr2));

/* 
[
  { id: 1, age: 20, marks: 100 },
  { id: 2, age: 21, marks: 99 },
  { id: 3, age: 22, marks: 98 }
]
*/

// without using the spread operator

function mergeByIdWithoutSpread(arr1, arr2) {
  let merged = arr1.map((item1) => {
    let item2 = arr2.find((item) => item.id === item1.id);

    // return Object.assign({}, item1, item2);

    let result = {}; // initially
    result.id = item1.id;
    result.age = item1.age;
    result.marks = item2.marks ?? 0;

    return result;
  });

  return merged;
}

console.log(mergeByIdWithoutSpread(arr1, arr2));

/* 
[
  { id: 1, age: 20, marks: 100 },
  { id: 2, age: 21, marks: 99 },
  { id: 3, age: 22, marks: 98 }
]
*/

// without using the spread operator and find method
function mergeByIdWithoutSpreadAndFind(arr1, arr2) {
    // create a map to store items from arr2 using their 'id' as the key
  let myMap = new Map();
    // populate the Map with entries from arr2 for quick lookup by 'id'
  arr2.forEach((item2) => myMap.set(item2.id, item2));

  let merged = arr1.map((item1) => {
    let item2 = myMap.get(item1.id);

    let result = {}; // initially

    result.id = item1.id;
    result.age = item1.age;
    result.marks = item2.marks ?? 0;

    return result;
  });

  return merged;
}

console.log(mergeByIdWithoutSpreadAndFind(arr1, arr2));

/* 
[
  { id: 1, age: 20, marks: 100 },
  { id: 2, age: 21, marks: 99 },
  { id: 3, age: 22, marks: 98 }
]
*/

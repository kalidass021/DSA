// check the given two arrays are equal or not

function areArraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    for (let i=0; i<arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }

    return true;
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3])); // true
console.log(areArraysEqual([1, 2, 3], [1, 2, 4])); // false
console.log(areArraysEqual([1, 2, 3], [1, 2, 3, 4])); // false


// using every method

function areArraysEqualEvery(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    return arr1.every((value, index) => value === arr2[index]);
}


console.log(areArraysEqualEvery([1, 2, 3], [1, 2, 3])); // true
console.log(areArraysEqualEvery([1, 2, 3], [1, 2, 4])); // false
console.log(areArraysEqualEvery([1, 2, 3], [1, 2, 3, 4])); // false
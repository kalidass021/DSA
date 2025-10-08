function differenceBetweenArrays(arr1, arr2) {
    return arr1.filter(item => !arr2.includes(item));
}

console.log(differenceBetweenArrays([1, 2, 3, 4], [2, 4]));
console.log(differenceBetweenArrays(['a', 'b', 'c'], ['b']));

// using set
function differenceBetweenArraysSet(arr1, arr2) {
    const set2 = new Set(arr2);

    return arr1.filter(item => !set2.has(item));
}


console.log(differenceBetweenArraysSet([1, 2, 3, 4], [2, 4])); // [1, 3]

console.log(differenceBetweenArraysSet(['a', 'b', 'c'], ['b'])); // ['a', 'c']
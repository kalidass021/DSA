// sort an array based on frequency of it's elements in decending order

let arr = [1, 2, 3, 4, 1, 2, 3, 3, 3, 4];

// count the frequency of each element

function countFrequency(arr) {
    const myMap = new Map();

    for (let val of arr) {
        if (myMap.has(val)) {
            myMap.set(val, myMap.get(val) + 1);
        } else {
            myMap.set(val, 1);
        }
    }

    return myMap;
}

const frequencyMap = countFrequency(arr);


// sort based on frequency (decending)
arr.sort((a, b) => {
    const freqDiff = frequencyMap.get(b) - frequencyMap.get(a);
    return freqDiff !== 0 ? freqDiff : a - b;
});

console.log(arr);
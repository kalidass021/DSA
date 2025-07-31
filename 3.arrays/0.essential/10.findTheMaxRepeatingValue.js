// find the maximum repeating value in the arr

let arr = [1, 8, 8, 8, 8, 8, 3, 3, 3, 8, 8, 2, 3, 1];

function getMaxRepeatingValue(arr) {
    
    let freqMap = new Map();
    // count the frequrency of each element
    for (let val of arr) {
        if (!freqMap.has(val)) {
            freqMap.set(val, 1);
        } else {
            freqMap.set(val, freqMap.get(val)+1);
        }
    }

    // find the element with the highest frequency
    // initially
    let maxElement = null;
    let maxCount = 0;

    for (let [el, count] of freqMap) {
        if (count > maxCount) {
            maxCount = count;
            maxElement = el;
        }
    }

    return `Element ${maxElement} occurs the ${maxCount} times`;
}

console.log(getMaxRepeatingValue(arr));
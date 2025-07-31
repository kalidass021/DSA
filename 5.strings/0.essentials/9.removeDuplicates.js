// remove duplicates and sort the given string

function removeDuplicatesAndSort(str) {
    let freqMap = new Map();
    let uniqueArr = []; // to store the unique characters
    // remove duplicates
    for (let char of str) {
        if (!freqMap.has(char)) {
            freqMap.set(char, true);
            uniqueArr.push(char);
        }
    }

    let sortedStr = uniqueArr.sort().join('');

    return sortedStr;
}

console.log(removeDuplicatesAndSort('IIATJYBRAHBARRTTSS')); // ABHIJRSTY

function removeDuplicatesAndSortSet(str) {
    let uniqueChars = [...new Set(str)];
    let sortedStr = uniqueChars.sort().join('');

    return sortedStr;
}

console.log(removeDuplicatesAndSortSet('IIATJYBRAHBARRTTSS'));
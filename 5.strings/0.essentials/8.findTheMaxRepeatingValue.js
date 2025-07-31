// find the maximum repeating value in the given string

let str = 'accccaaaabbbbddddeeeeuiuihsfsaiiissss';

function getMaxRepeatingValue(str) {
    let freqMap = new Map();

    // frequency of each character
    for (let char of str) {
        if (!freqMap.has(char)) {
            freqMap.set(char, 1);
        } else {
            freqMap.set(char, freqMap.get(char)+1);
        }
    }

    // find the char with highest frequency
    let maxChar = null;
    let maxCount = 0;

    for (let [char, count] of freqMap) {
        if (count > maxCount) {
            maxCount = count;
            maxChar = char;
        }
    }

    return `Char ${maxChar} occurs the ${maxCount} times`;
}

console.log(getMaxRepeatingValue(str));
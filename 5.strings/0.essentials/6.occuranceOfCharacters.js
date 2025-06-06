// occurance of characters in the string

function occuranceOfCharacters(str) {
    let myMap = new Map();

    for (let char of str) {
        if (myMap.has(char)) {
            myMap.set(char, myMap.get(char) + 1);
        } else {
            myMap.set(char, 1);
        }
    }

    return myMap;
}

console.log(occuranceOfCharacters('my name is something'));
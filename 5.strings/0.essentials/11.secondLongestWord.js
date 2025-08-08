// find the second longest word in the string



function findSecondLongestWord(str) {
    // split the string into words
    let words = str.split(' ');

    let longestWord = '';
    let secondLongestWord = '';

    for (let word of words) {
        if (word.length > longestWord.length) {
            secondLongestWord = longestWord;
            longestWord = word;
        } else if (word.length > secondLongestWord.length) {
            secondLongestWord = word;
        }
    }

    return secondLongestWord;
}

console.log(findSecondLongestWord('My name is kalidass'));

// simple solution

function findSecondLongestWordSimple(str) {
    // split the string into words
    let words = str.split(' ');

    // sort the words based on length
    words.sort((a, b) => a.length - b.length);

    // get the second longest word
    return words.at(-2);
}

console.log(findSecondLongestWordSimple('my name is kalidass'));


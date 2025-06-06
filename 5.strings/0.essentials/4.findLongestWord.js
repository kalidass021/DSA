// find the longest word in the sentence

function longestWord(str) {
    const words = str.split(' ');
    let longestWord = '';

    for (let i=0; i<words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord;
}

console.log(longestWord('The quick brown fox jumped over the lazy dog')); // jumped

// using forEach

function longestWordForEach(str) {
    let words = str.split(' ');

    let longestWord = '';

    words.forEach((word) => {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });

    return longestWord;
}

console.log(longestWordForEach('The quick brown fox jumped over the lazy dog'));
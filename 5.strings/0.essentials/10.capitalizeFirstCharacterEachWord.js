// capitalize the first character of the each word in the given string
// my name is kalidass ==> My Name Is Kalidass

function capitalizeFirstCharacterOfEachWord(str) {
    let words = str.split(' ');

    let res = [];

    for (let word of words) {
        let capitalized = word[0].toUpperCase() + word.slice(1);
        res.push(capitalized);
    }
    return res.join(' ');
}

console.log(capitalizeFirstCharacterOfEachWord('my name is kalidass'));
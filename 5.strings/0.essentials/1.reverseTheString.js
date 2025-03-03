// reverse the string

let str = 'abcdefg';

function reverseTheString(str) {
    let reversed = ''; // initially

    for (let i=str.length-1; i>=0; i--) {
        // append the current character
        reversed += str[i]; 
    }

    return reversed;
}

console.log(reverseTheString(str)); // gfedcba

// simple solution using language advantage

function reverseTheString2(str) {
    // split string into an array
    let arr = [...str];
    // reverse the array
    arr.reverse();
    // join the array into string
    let reversed = arr.join('');

    return reversed;
}

console.log(reverseTheString2(str)); // gfedcba
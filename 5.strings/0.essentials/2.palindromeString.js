// find out the given string is palindrome or not

function palindromeString(str) {
    let reversed = ''; // initially

    for (let i=str.length-1; i>=0; i--) {
        reversed += str[i]; // append the current character
    }

    if (str === reversed) return true;

    return false;
}

console.log(palindromeString('madam')); // true
console.log(palindromeString('hello')); // false


// simple solution using language advantage

function palindromeString2(str) {
    // split string into an array
    let strArr = [...str];
    // reverse the array
    strArr.reverse();
    // join the str array into a string
    let reversed = strArr.join('');

    if (str === reversed) return true;

    // else
    return false;
}

console.log(palindromeString2('hello')); // false
console.log(palindromeString('madam')); // true
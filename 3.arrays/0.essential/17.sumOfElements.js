// sum of elements in the array

function sumOfElements(arr) {
    let sum = 0; // initially

    for (let num of arr) {
        sum += num;
    }
    // return the sum
    return sum;
}

console.log(sumOfElements([1, 2, 3, 4, 5]));
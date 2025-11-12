
function thirdMax(arr) {
    if (arr.length < 3) return `Array should have at least 3 elements`;

    let first = Number.MIN_SAFE_INTEGER, second = Number.MIN_SAFE_INTEGER, third = Number.MIN_SAFE_INTEGER;

    for (let num of arr) {
        if (num > first) {
            third = second;
            second = first;
            first = num;
        } else if (num < first && num > second) {
            third = second;
            second = num;
        } else if (num < second && num > third) {
            third = num;
        }
    }

    return third;
}

console.log(thirdMax([1, 2, 3, 4, 5]));
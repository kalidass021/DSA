/* 
    * rearrange the array such that all elements less than x appear on the left side and
    * all the elements greater than x appear on the right side
*/

function partitioning(arr, x) {
    let left = [];
    let right = [];

    for (let val of arr) {
        if (val < x) {
            left.push(val);
        } else if (val > x) {
            right.push(val);
        }
    }

    let partitioned = [...left, x, ...right];

    return partitioned;
}

console.log(partitioning([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5));
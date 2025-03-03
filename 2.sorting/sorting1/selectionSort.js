// selection sort - select the minimum value and swap
 
 
let arr = [13, 46, 24, 52, 20, 9];
let n = arr.length;
 
function selectionSort(arr, n) {
    for (let i=0; i<=n-2; i++) {
        let miniIndex = i;
        for (let j=i; j<=n-1; j++) {
            // find the minimum value in the arr &&
            // assigning that's index to miniIndex
            if (arr[j] < arr[miniIndex]) {
                miniIndex = j;
            }
        }
        // swap the found minimum element with first element
        // let temp = arr[miniIndex];
        // arr[miniIndex] = arr[i];
        // arr[i] = temp;
        [arr[miniIndex], arr[i]] = [arr[i], arr[miniIndex]];
    }
    console.log('sorted arr', arr);
}
 
selectionSort(arr, n);
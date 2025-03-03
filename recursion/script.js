

// let count = 0;







// function printRecursively() {



// if (count === 3) {



// return;



// }







// console.log('count', count);



// count++;



// printRecursively();



// }







// printRecursively();











// print name n times using recursion







// function printName(i, n) {



// if (i > n) {



// return;



// }



// console.log('Kalidass');



// printName(i+1, n);



// }







// printName(1, 5);







// print linearly from 1 to N







// function printNum(i, n) {



// if (i > n) {



// return;



// }



// console.log('i', i);



// printNum(i+1, n);



// }







// printNum(1, 5);







// print N to 1







// function printNum(i, n) {



// if (n < i) {



// return;



// }



// console.log('n', n);



// printNum(i, n-1);



// }







// printNum(1, 5);











// print linearly from 1 to N using Backtracking











// function printNum (i, N) {



// if (i < 1) {



// return;



// }







// printNum(i-1, N);



// console.log('i', i);



// }







// printNum(3, 3);











// print from N to 1 using Backtracking







// function printNum(i, N) {



// if (i > 3) {



// return;



// }



// printNum(i+1, N);



// console.log('i', i);



// }







// printNum(1, 3);











// print 1 to N without the help of loops - gfg problem



// this solution working in local but not working gfg







// function printNos(N) {



// if (N < 1) {



// return;



// }



// printNos(N-1);



// process.stdout.write(String(N));



// }







// printNos(100);











// print GFG n times - gfg problem







// function printGFG(N) {



// if (N < 1) {



// return;



// }



// printGFG(N-1);



// process.stdout.write('GFG ' + String(N));



// }







// printGFG(10);











// sum of first N numbers using recursion - Parameterized way







// function printSum(i, sum) {



// if (i < 1) {



// console.log(sum);



// return;



// }



// printSum(i-1, sum+i);



// }







// printSum(3, 0);







// sum of first N numbers using recursion - Functional way







// function printSum(n) {



// if (n === 0) {



// return 0;



// }



// return n + printSum(n-1);



// }







// console.log(printSum(5));











// factorial of n using recursion







// function factorial(n) {



// if (n === 0) {



// return 1;



// }



// return n * factorial(n-1);



// }







// console.log('factorial', factorial(5));











// sum of first n terms using recursion - gfg problem











// function sumOfSeries(n) {



// if (n < 1) { 



// return 0;



// }



// return ((n * n * n) + sumOfSeries(n-1));



// }







// console.log(sumOfSeries(26501));











// reverse a array using recursion







// let arr = [1, 2, 3, 4, 5];











// function reverseArr(l, r) {



// if (l >= r) {



// return;



// }



// // let temp = arr[l];



// // arr[l] = arr[r];



// // arr[r] = temp;



// // reverseArr(l+1, r-1);



// [arr[l], arr[r]] = [arr[r], arr[l]];



// }







// reverseArr(0, 4);







// console.log(arr);











// another method







// let arr = [1, 2, 3, 4, 5];







// function reverseArr(i, n) {



// if (i >= n/2) {



// return;



// }



// // swaping the values



// [arr[i], arr[n-i-1]] = [arr[n-i-1], arr[i]];



// reverseArr(i+1, n);



// }







// reverseArr(0, 5);



// console.log(arr);











// check if the string is polindrome or not







// let s = 'madam';











// function polindromeString(i) {



// let n = s.length;



// if (i > n/2) {



// return true;



// }



// if (s[i] !== s[n-i-1]) {



// return false;



// }







// return polindromeString(i+1);



// }







// console.log(polindromeString(0));











// valid polindrome - leet code problem - Maximum call stack size exceeded







// let s = "A man, a plan, a canal: Panama";



// s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');







// function isPolindrome(s) {



// let i = 0;



// let n = s.length;



// console.log(n);







// if (i > n/2) {



// return true;



// }



// if (s[i] !== s[n-i-1]) {



// return false;



// }







// return isPolindrome(i+1);



// }







// console.log(isPolindrome(s));











// fibonacci using recursion







// function fibonacci(n) {



// if (n <= 1) {



// return n;



// }



// let last = fibonacci(n-1);



// let secondLast = fibonacci(n-2);



// return last + secondLast;



// }











// console.log(fibonacci(7));







// find the no. of occurance of a number in the array - without hashing



// const arr = [1, 2, 1, 3, 2];



// let number = 3;







// function noOfOccurance(number, arr) {



// let n = arr.length;



// let cnt = 0;







// for (let i=0; i<n; i++) {



// if (number === arr[i]) {



// cnt += 1;



// }



// }







// return cnt;



// }







// console.log(noOfOccurance(number, arr));











// Number hashing



// find a number of occurance of a number in the array - with hashing







// let arr = [1, 3, 2, 1, 3];



// let numbers = [1, 4, 2, 3, 12];



// function noOfOccuranceHashing(arr, numbers) {







// // precompute



// let hash = new Array(13).fill(0);



// let n = arr.length;







// for (let i=0; i<n; i++) {



// hash[arr[i]] += 1;



// }







// // fetch



// let m = numbers.length;



  



// for (let j=0; j<m; j++) {



// console.log(hash[numbers[j]]);



// }







// }







// noOfOccuranceHashing(arr, numbers);











// Character hashing







// find the occurance of the character without hashing



// let s = 'abcdabefc';



// let character = 'c';







// function findCharOccurance(s, character) {



// let n = s.length;



// let cnt = 0;







// for (let i=0; i<n; i++) {



// if (s[i] === 'c') {



// cnt += 1;



// }



// }







// return cnt;



// }











// find the number of occurance of string character with hashing







// let s = 'abcdabehf';



// let chars = ['a', 'b', 'h', 'b', 'c'];







// function findCharOccurance(s, chars) {



// // precompute



// let hash = new Array(26).fill(0); // because all chars are lowercase



// let n = s.length;







// for (let i=0; i<n; i++) {



// hash[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;



// }







// // fetch



// let m = chars.length;



// for (let j=0; j<m; j++) {



// console.log(hash[chars[j].charCodeAt(0) - 'a'.charCodeAt(0)]);



// }



// }











// findCharOccurance(s, chars);











// let s = 'aabcdABeHF';



// let chars = ['a', 'b', 'H', 'A', 'B', 'c'];







// function findCharOccurance(s, chars) {



// // precompute



// let hash = new Array(256).fill(0); 



// // the given string contains both upper case and lower case so we're mapping it to the correspoding ascii value



// let n = s.length;







// for (let i=0; i<n; i++) {



// hash[s[i].charCodeAt(0)] += 1;



// }







// // fetch



// let m = chars.length;



// for (let j=0; j<m; j++) {



// console.log(hash[chars[j].charCodeAt(0)]);



// }



// }







// findCharOccurance(s, chars);



















// hash map







function countOfOccurances(arr) {



    let hashMap = {};
   
   
   
    for (let i=0; i<arr.length; i++) {
   
   
   
     if (hashMap[arr[i]]) {
   
   
   
      hashMap[arr[i]]++;
   
   
   
     } else {
   
   
   
      hashMap[arr[i]] = 1;
   
   
   
     }
   
   
   
    }
   
   
   
   
   
   
   
    return hashMap;
   
   
   
   }
   
   
   
   
   
   
   
   let arr = [1, 2, 2, 2, 3, 3, 3, 4, 4, 4];
   
   
   
   
   
   
   
   
   
   
   
   console.log(countOfOccurances(arr));
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   // let count = 0;
   
   
   
   // function printRecursively() {
   
   // if (count === 3) {
   
   // return;
   
   // }
   
   
   
   // console.log('count', count);
   
   // count++;
   
   // printRecursively();
   
   // }
   
   
   
   // printRecursively();
   
   
   
   
   
   // print name n times using recursion
   
   
   
   // function printName(i, n) {
   
   // if (i > n) {
   
   // return;
   
   // }
   
   // console.log('Kalidass');
   
   // printName(i+1, n);
   
   // }
   
   
   
   // printName(1, 5);
   
   
   
   // print linearly from 1 to N
   
   
   
   // function printNum(i, n) {
   
   // if (i > n) {
   
   // return;
   
   // }
   
   // console.log('i', i);
   
   // printNum(i+1, n);
   
   // }
   
   
   
   // printNum(1, 5);
   
   
   
   // print N to 1
   
   
   
   // function printNum(i, n) {
   
   // if (n < i) {
   
   // return;
   
   // }
   
   // console.log('n', n);
   
   // printNum(i, n-1);
   
   // }
   
   
   
   // printNum(1, 5);
   
   
   
   
   
   // print linearly from 1 to N using Backtracking
   
   
   
   
   
   // function printNum (i, N) {
   
   // if (i < 1) {
   
   // return;
   
   // }
   
   
   
   // printNum(i-1, N);
   
   // console.log('i', i);
   
   // }
   
   
   
   // printNum(3, 3);
   
   
   
   
   
   // print from N to 1 using Backtracking
   
   
   
   // function printNum(i, N) {
   
   // if (i > 3) {
   
   // return;
   
   // }
   
   // printNum(i+1, N);
   
   // console.log('i', i);
   
   // }
   
   
   
   // printNum(1, 3);
   
   
   
   
   
   // print 1 to N without the help of loops - gfg problem
   
   // this solution working in local but not working gfg
   
   
   
   // function printNos(N) {
   
   // if (N < 1) {
   
   // return;
   
   // }
   
   // printNos(N-1);
   
   // process.stdout.write(String(N));
   
   // }
   
   
   
   // printNos(100);
   
   
   
   
   
   // print GFG n times - gfg problem
   
   
   
   // function printGFG(N) {
   
   // if (N < 1) {
   
   // return;
   
   // }
   
   // printGFG(N-1);
   
   // process.stdout.write('GFG ' + String(N));
   
   // }
   
   
   
   // printGFG(10);
   
   
   
   
   
   // sum of first N numbers using recursion - Parameterized way
   
   
   
   // function printSum(i, sum) {
   
   // if (i < 1) {
   
   // console.log(sum);
   
   // return;
   
   // }
   
   // printSum(i-1, sum+i);
   
   // }
   
   
   
   // printSum(3, 0);
   
   
   
   // sum of first N numbers using recursion - Functional way
   
   
   
   // function printSum(n) {
   
   // if (n === 0) {
   
   // return 0;
   
   // }
   
   // return n + printSum(n-1);
   
   // }
   
   
   
   // console.log(printSum(5));
   
   
   
   
   
   // factorial of n using recursion
   
   
   
   // function factorial(n) {
   
   // if (n === 0) {
   
   // return 1;
   
   // }
   
   // return n * factorial(n-1);
   
   // }
   
   
   
   // console.log('factorial', factorial(5));
   
   
   
   
   
   // sum of first n terms using recursion - gfg problem
   
   
   
   
   
   // function sumOfSeries(n) {
   
   // if (n < 1) { 
   
   // return 0;
   
   // }
   
   // return ((n * n * n) + sumOfSeries(n-1));
   
   // }
   
   
   
   // console.log(sumOfSeries(26501));
   
   
   
   
   
   // reverse a array using recursion
   
   
   
   // let arr = [1, 2, 3, 4, 5];
   
   
   
   
   
   // function reverseArr(l, r) {
   
   // if (l >= r) {
   
   // return;
   
   // }
   
   // // let temp = arr[l];
   
   // // arr[l] = arr[r];
   
   // // arr[r] = temp;
   
   // // reverseArr(l+1, r-1);
   
   // [arr[l], arr[r]] = [arr[r], arr[l]];
   
   // }
   
   
   
   // reverseArr(0, 4);
   
   
   
   // console.log(arr);
   
   
   
   
   
   // another method
   
   
   
   // let arr = [1, 2, 3, 4, 5];
   
   
   
   // function reverseArr(i, n) {
   
   // if (i >= n/2) {
   
   // return;
   
   // }
   
   // // swaping the values
   
   // [arr[i], arr[n-i-1]] = [arr[n-i-1], arr[i]];
   
   // reverseArr(i+1, n);
   
   // }
   
   
   
   // reverseArr(0, 5);
   
   // console.log(arr);
   
   
   
   
   
   // check if the string is polindrome or not
   
   
   
   // let s = 'madam';
   
   
   
   
   
   // function polindromeString(i) {
   
   // let n = s.length;
   
   // if (i > n/2) {
   
   // return true;
   
   // }
   
   // if (s[i] !== s[n-i-1]) {
   
   // return false;
   
   // }
   
   
   
   // return polindromeString(i+1);
   
   // }
   
   
   
   // console.log(polindromeString(0));
   
   
   
   
   
   // valid polindrome - leet code problem - Maximum call stack size exceeded
   
   
   
   // let s = "A man, a plan, a canal: Panama";
   
   // s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
   
   
   
   // function isPolindrome(s) {
   
   // let i = 0;
   
   // let n = s.length;
   
   // console.log(n);
   
   
   
   // if (i > n/2) {
   
   // return true;
   
   // }
   
   // if (s[i] !== s[n-i-1]) {
   
   // return false;
   
   // }
   
   
   
   // return isPolindrome(i+1);
   
   // }
   
   
   
   // console.log(isPolindrome(s));
   
   
   
   
   
   // fibonacci using recursion
   
   
   
   // function fibonacci(n) {
   
   // if (n <= 1) {
   
   // return n;
   
   // }
   
   // let last = fibonacci(n-1);
   
   // let secondLast = fibonacci(n-2);
   
   // return last + secondLast;
   
   // }
   
   
   
   
   
   // console.log(fibonacci(7));
   
   
   
   // find the no. of occurance of a number in the array - without hashing
   
   // const arr = [1, 2, 1, 3, 2];
   
   // let number = 3;
   
   
   
   // function noOfOccurance(number, arr) {
   
   // let n = arr.length;
   
   // let cnt = 0;
   
   
   
   // for (let i=0; i<n; i++) {
   
   // if (number === arr[i]) {
   
   // cnt += 1;
   
   // }
   
   // }
   
   
   
   // return cnt;
   
   // }
   
   
   
   // console.log(noOfOccurance(number, arr));
   
   
   
   
   
   // Number hashing
   
   // find a number of occurance of a number in the array - with hashing
   
   
   
   // let arr = [1, 3, 2, 1, 3];
   
   // let numbers = [1, 4, 2, 3, 12];
   
   // function noOfOccuranceHashing(arr, numbers) {
   
   
   
   // // precompute
   
   // let hash = new Array(13).fill(0);
   
   // let n = arr.length;
   
   
   
   // for (let i=0; i<n; i++) {
   
   // hash[arr[i]] += 1;
   
   // }
   
   
   
   // // fetch
   
   // let m = numbers.length;
   
      
   
   // for (let j=0; j<m; j++) {
   
   // console.log(hash[numbers[j]]);
   
   // }
   
   
   
   // }
   
   
   
   // noOfOccuranceHashing(arr, numbers);
   
   
   
   
   
   // Character hashing
   
   
   
   // find the occurance of the character without hashing
   
   // let s = 'abcdabefc';
   
   // let character = 'c';
   
   
   
   // function findCharOccurance(s, character) {
   
   // let n = s.length;
   
   // let cnt = 0;
   
   
   
   // for (let i=0; i<n; i++) {
   
   // if (s[i] === 'c') {
   
   // cnt += 1;
   
   // }
   
   // }
   
   
   
   // return cnt;
   
   // }
   
   
   
   
   
   // find the number of occurance of string character with hashing
   
   
   
   // let s = 'abcdabehf';
   
   // let chars = ['a', 'b', 'h', 'b', 'c'];
   
   
   
   // function findCharOccurance(s, chars) {
   
   // // precompute
   
   // let hash = new Array(26).fill(0); // because all chars are lowercase
   
   // let n = s.length;
   
   
   
   // for (let i=0; i<n; i++) {
   
   // hash[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
   
   // }
   
   
   
   // // fetch
   
   // let m = chars.length;
   
   // for (let j=0; j<m; j++) {
   
   // console.log(hash[chars[j].charCodeAt(0) - 'a'.charCodeAt(0)]);
   
   // }
   
   // }
   
   
   
   
   
   // findCharOccurance(s, chars);
   
   
   
   
   
   // let s = 'aabcdABeHF';
   
   // let chars = ['a', 'b', 'H', 'A', 'B', 'c'];
   
   
   
   // function findCharOccurance(s, chars) {
   
   // // precompute
   
   // let hash = new Array(256).fill(0); 
   
   // // the given string contains both upper case and lower case so we're mapping it to the correspoding ascii value
   
   // let n = s.length;
   
   
   
   // for (let i=0; i<n; i++) {
   
   // hash[s[i].charCodeAt(0)] += 1;
   
   // }
   
   
   
   // // fetch
   
   // let m = chars.length;
   
   // for (let j=0; j<m; j++) {
   
   // console.log(hash[chars[j].charCodeAt(0)]);
   
   // }
   
   // }
   
   
   
   // findCharOccurance(s, chars);
   
   
   
   
   
   
   
   
   
   // hash map
   
   
   
   function countOfOccurances(arr) {
   
     let hashMap = {};
   
     for (let i=0; i<arr.length; i++) {
   
       if (hashMap[arr[i]]) {
   
         hashMap[arr[i]]++;
   
       } else {
   
         hashMap[arr[i]] = 1;
   
       }
   
     }
   
   
   
     return hashMap;
   
   }
   
   
   
   let arr = [1, 2, 2, 2, 3, 3, 3, 4, 4, 4];
   
   
   
   
   
   console.log(countOfOccurances(arr));
   

   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
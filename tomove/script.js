// // get Element from DOM

// let h1 = document.querySelector(".heading1");

// // get button Element

// let button = document.querySelector("button");

// // get parentDiv Element

// let parentDiv = document.querySelector(".parent");



// let parentDiv2 = document.querySelector(".parent2");



// let parentDiv3 = document.querySelector(".parent3");

// // read or write the content

// console.log(h1.textContent);

// h1.textContent = "Good Morning";



// // apply dynamic styles

// h1.style.color = "blue";

// h1.style.backgroundColor = "yellow";



// // add event listeners to the Element

// button.addEventListener('click', ()=>{

// h1.textContent = "Good Bye...."

// h1.style.color = "white"

// h1.style.backgroundColor = "red"

// })



// // create child

// let h3 = document.createElement("h3");

// // apply attribute

// h3.setAttribute("class", "text-danger text-center display-1")

// // add text textContent

// h3.textContent = "Child - 1"



// // add it to a parent

// parentDiv.appendChild(h3);



// // create multiple Child



// for(let n = 0; n <= 5; n++) {

// let h4 = document.createElement("h4");

// // add textContent

// h4.textContent = `Child ${n}`



// // add it to a parentDiv

// parentDiv.appendChild(h4);

// }



// // adding Elements using innerHTML



// parentDiv2.innerHTML = `

// <p>Technologies</p>

// <ul>

// <li>HTML</li>

// <li>CSS</li>

// <li>JavaScript</li>

// </ul>

// `



// // find children

// let childrenOfParentDiv3 = parentDiv3.children;



// // find parent

// let parentOfButton = button.parentElement;

// console.log(parentOfButton);



// // remove child element form the parent

// parentDiv3.removeChild(childrenOfParentDiv3[0])



// // remove individual element

// parentDiv2.remove();



// const arr = [1, 2, 3, 4, 5];



// const newArr = arr.map((item) => {

// return item * 2;

// });



// console.log('newArr', newArr);



// const url = 'https://dummyjson.com/products';



// const fetchData = async () => {

// try {

// const res = await fetch(url);

// const data = await res.json();

// console.log('data', data);

// } catch (err) {

// console.error('Error while fetching data', err);

// }

// }



// fetchData();



// for (var i = 1; i <= 5; i++) {

// const close = (i) => {

// setTimeout(() => {

// console.log(i);

// }, i * 1000);

// }

// close(i);

// }



// function outer () {

// function inner () {

// console.log('a', a);

// }

// var a= 10;

// return inner;

// }



// outer()();



// season 1

// lecture 1

// execution context - Everything in javascript happens inside the execution context.

// It has 2 components 1. memory component 2. code component

// In memory component the variables and functions are stored as key: value pairs.

// In Code component the code will be executed line by line one line at a time

// It will created in 2 phases 1. memory creation phase 2. code execution phase



// lecture 2

// how javascript code executed

// the javascript code executed in 2 phases 1. Memory creation phase 2. Code execution phase

// In memory creation phase it will allocate memory to all the variables and functions

// For variables it will store the special value called "Undefined".

// For functions it will literally stores the entire code.

// In code execution phase the code will be executed line by line

// Once the function is done with execution the execution context will deleted



// var n = 2;

// function square (num) {

// var ans = num * num;

// return ans;

// }



// var square2 = square(n);

// var square4 = square(4);



// console.log('square2', square2);

// console.log('square4', square4);



// lecture 3 - hoisting

// hoisting is a concept which enables us to use the variables and functions above its declartion.

// because of first phase of the execution context. For var variables we will get undefined

// but for functions we will get the output.



// var x;

// console.log('x', x);



// lecture 7

// scope - scope is nothing but a accecibility of the variable



// var m = 100;



// {

// var m = 10;

// console.log('m inside the block', m);

// }



// console.log('m in the global space', m);



// console.log('m', m);



// var s = 100;

// function shadow () {

// var s = 10;

// console.log('s inside the shadow function', s);

// }



// shadow();



// console.log('s in the global space', s);



// currying is a process in functional programming in which we can transform a function

// into sequence of nesting functions with muliple arguments.

// It returns a new function that expects next argument inline



// const radiusArr = [1, 2, 3, 4, 5, 6];



// // logic for area

// const area = (r) => Math.PI * r * r;



// // logic for circumference

// const circumference = (r) => Math.PI * r * r;



// // logic for diameter

// const diameter = (r) => 2 * r;



// const output = radiusArr.map(area);

// console.log('area', output);



// console.log('a', a);

// let a = 10;



// hoist();

// function hoist() {

// console.log('hoist');

// }

// // a += 10



// // console.log('a', a);



// // const b = 20;



// // b += 10;



// if (a <= 20) {

// a += 10;

// console.log('a', a);

// }



// const arr = [1, 2, 3, 4, 5];



// const output = arr.reduce((acc, curr) => {

// return acc + curr;

// });



// console.log('output', output);



// write a program that takes an input of age

// and prints if you are adult or not



// const age = +prompt('Enter your age: ');



// if (age >= 18) {

// console.log('You are an adult and eligible to get license');

// } else {

// console.log('You are not an adult and not eligible to get license');

// }



/* 

A. School has following rules for grading system:

a. Below 25 - F

b. 25 to 44 - E

c. 45 to 49 - D

d. 50 to 59 - C

e. 60 to 79 - B

f. 80 to 100 - A

Ask user to enter marks and print the corresponding grade.

*/



// const marks = +prompt('Enter the marks');



// if (marks < 25) {

// console.log('F');

// } else if (marks <= 44) {

// console.log('E');

// } else if (marks <= 49) {

// console.log('D');

// } else if (marks <= 59) {

// console.log('C');

// } else if (marks <= 79) {

// console.log('B');

// } else if (marks <= 100) {

// console.log('A');

// }



/*

Take the age from the user and then decide accordingly

1. If age < 18

 print --> 'not eligible for job'

2. If age >= 18 and age <= 54

 print --> 'eligible for job'

3. If age >= 55 and <= 57

 print --> 'eligible for job but retirement soon'

4. If age > 57

 print --> 'retirement time'

*/



// const age = +prompt('Enter the age');



// if (age < 18) {

// console.log('Not eligible for job');

// } else if (age <= 57) {

// console.log('Eligible for job');

// if (age >= 55) {

// console.log(', but retirement soon');

// }

// } else {

// console.log('retirement time');

// }



/* 

Take the day number and print the corresponding day

for 1 print Monday

for 2 print Tuesday and so on for print 7 for sunday

*/



// const day = +prompt('Enter the day num: ');



// switch (day) {

// case 1:

// console.log('Monday');

// break;

// case 2:

// console.log('Tuesday');

// break;

// case 3:

// console.log('Wednesday');

// break;

// case 4:

// console.log('Thursday');

// break;

// case 5:

// console.log('Friday');

// break;

// case 6:

// console.log('Saturyday');

// break;

// case 7:

// console.log('Sunday');

// break;

// default:

// console.log('Invalid input');

// }



// for (let i = 1; i <= 5; i++) {

// console.log('Striver', i);

// }



// let i = 1;

// while (i <= 5) {

// console.log('Striver', i);

// i++;

// }



// let i = 6;

// do {

// console.log('Striver', i);

// } while(i <= 5);



// Functions are set of code which performs something for us

// Functions are used to modularise code

// Functions are used to increase readability

// Functions are used to use same code multiple times



// program to find given number is positive or negative

// const num = +prompt('Enter the number');



// if (num === 0) {

// console.log(`You have entered ${num}`);

// } else if (num > 0) {

// console.log(`${num} is a positive number`);

// } else {

// console.log(`${num} is a negative number`);

// }



// even or odd number



// const num = +prompt('Enter the number');



// if (num % 2 === 0) {

// console.log(`${num} is a even number`);

// } else {

// console.log(`${num} is a odd number`);

// }



// sum of first n natural numbers



// const num = +prompt('Enter the number');

// let sum = 0;



// for (let i = 1; i <= num; i++) {

// sum += i

// }



// console.log(`The sum of first ${num} natural numbers is ${sum}`);



// greatest of threee numbers



// const num1 = +prompt('Enter the number 1');

// const num2 = +prompt('Enter the number 2');

// const num3 = +prompt('Enter the number 3');



// if (num1 > num2 && num1 > num3) {

// console.log(`The greatest number among these ${num1}`);

// } else if (num2 > num3) {

// console.log(`The greatest number among these ${num2}`);

// } else {

// console.log(`The greatest number among these ${num3}`);

// }



// leap year or not



// const year = +prompt('Enter the year: ');



// if ((year % 4 === 0 && year % 100 !== 0) || (year % 4 === 0 && year % 400 === 0)) {

// console.log(`${year} is a leap year`);

// } else {

// console.log(`${year} is not a leap year`);

// }



// prime number or not



// sum of digits of a number



// Reverse a number



// Polindrome or not



// sum of numbers in a given range



// armstrong or not



// fibonacci series



// factorial of a number



// power of a number



// Strong number or not



// Perfect number or not



// patterns

/*

 ****

 ****

 ****

 ****

 */



// function printPattern(n) {

// for (let i=0; i<n; i++) {

// for (let j=0; j<n; j++) {

// process.stdout.write('* ');

// }

// process.stdout.write('\n');

// }

// }



// printPattern(5);



/*

 *

 **

 ***

 ****

 *****

 */



// function printPattern2 (n) {

// for (let i=0; i<n; i++) {

// for (let j=0; j<=i; j++) {

// process.stdout.write('* ');

// }

// process.stdout.write('\n');

// }

// }



// printPattern2(5);



/* 

1

12

123

1234

12345

*/



// function printPattern3(n) {

// for (let i=1; i<=n; i++) {

// for (let j=1; j<=i; j++) {

// process.stdout.write(String(j));

// }

// process.stdout.write('\n');

// }

// }



// printPattern3(5);



/* 

1

22

333

4444

55555

*/



// function printPattern4(n) {

// for (let i=1; i<=n; i++) {

// for (let j=1; j<=i; j++) {

// process.stdout.write(String(i));

// }

// process.stdout.write('\n');

// }

// }



// printPattern4(5);



/*

 *****

 ****

 ***

 **

 *

 */



// function printPatter5(n) {

// for (let i=1; i<=n; i++) {

// for (let j=1; j<=n-i+1; j++) {

// process.stdout.write('* ');

// }

// process.stdout.write('\n');

// }

// }



// printPatter5(5);



/* 

12345

1234

123

12

1

*/



// function printPattern6(n) {

// for (let i=1; i<=n; i++) {

// for (let j=1; j<=n-i+1; j++) {

// process.stdout.write(String(j));

// }

// process.stdout.write('\n');

// }

// }



// printPattern6(5);



// function printPattern7(n) {

// for (let i=0; i<n; i++) {

// // space

// for (let j=0; j<n-i-1; j++) {

// process.stdout.write(' ');

// }

// // star

// for (let j=0; j<2*i+1; j++) {

// process.stdout.write('*');

// }

// // space

// for (let j=0; j<n-i-1; j++) {

// process.stdout.write(' ');

// }

// process.stdout.write('\n');

// }

// }



// printPattern7(5);



// function printPattern8(n) {

// for (let i=0; i<n; i++) {

// // space

// for (let j=0; j<i; j++) {

// process.stdout.write(' ');

// }

// // stars

// for (let j=0; j<2*n-2*i-1; j++) {

// process.stdout.write('*');

// }

// // space

// for (let j=0; j<i; j++) {

// process.stdout.write(' ');

// }

// process.stdout.write('\n');

// }

// }



// printPattern8(5);



// pattern 9

// call pattern7 & 8



// pattern 10



// function printPatter10() {



// }











// HCF/GCD of two numbers



// let a = 11;

// let b = 13;



// while (a > 0 && b > 0) {

// if (a > b) {

// a = a % b;

// } else {

// b = b % a;

// }

// }



// if (a === 0) {

// return b;

// } else {

// return b;

// }



// function lcmAndGcd(a, b){

// //code here

// let gcd = 1;

// let lcm = 1;

// let n1 = a;

// let n2 = b;

// // while (a > 0 && b > 0)

// while (n1 && n2) {

// if (n1 > n2) {

// n1 = n1 % n2;

// } else {

// n2 = n2 % n1;

// }

// }



// if (n1 === 0) {

// gcd = n2;

// } else {

// gcd = n1;

// }



// lcm = (a * b) / gcd;

// return [lcm, gcd];



// }



// console.log(lcmAndGcd(5, 10));



// program to reverse a number



// const N = -921;

// let sign = Math.sign(N);

// console.log('sign', sign);

// let temp = N;

// // getting the absolute value of the number i,e removing the negative sign

// temp = Math.abs(temp);

// // or

// // if (temp < 0) {

// // temp = temp * -1;

// // }

// console.log('temp', temp);

// let rev = 0;

// while (temp > 0) {

// let lastDigit = temp % 10;



// rev = (rev * 10) + lastDigit;



// temp = Math.floor(temp / 10);

// }



// console.log('rev', rev * sign);



// let N = -121;

// let temp = String(N);

// console.log(temp);



// var isPalindrome = function(x) {

// let temp = x;

// if (temp < 0) {

// return false;

// }

// let revSum = 0;

// while (temp > 0) {

// let lastDigit = temp % 10;

// revSum = (revSum * 10) + lastDigit;

// // eliminating the last digit

// temp = Math.floor(temp / 10);

// }



// console.log('temp', temp);



// if (revSum === x) {

// return true;

// } else {

// return false;

// }



// };



// console.log(isPalindrome(121));



// let count = 0;



// function print() {

// if (count === 3) return;

// console.log('count', count);

// count++;

// print();

// }



// print();



// let count = 1;

// function printNos(N){

// //code here

// if (count > 10) return;

// process.stdout.write(String(count));

// count++;

// printNos(N);

// }



// printNos(10);



// print name N times using recursion



// function printName(i, N) {

// if (i > N) {

// return;

// }

// console.log('Kalidass');

// printName(i+1, N);

// }



// printName(1, 5);



// print 1 to n using recursion



// function printUsingRecursion(i, N) {

// if (i > N) {

// return;

// }

// console.log(i);

// printUsingRecursion(i+1, N);

// }



// printUsingRecursion(1, 5);



// print n to 1 using recursion



// let N = 5;



// function printUsingRecursin(i, N) {

// if (i < 1) {

// return;

// }

// console.log(i);

// printUsingRecursin(i-1, N);

// }



// printUsingRecursin(N, N);



// print 1 to n without using +1 or ++; (Backtracking)



// function printUsingRecursion(N) {

// let i=N;

// if ( i < 1) {

// return;

// }

// printUsingRecursion(i-1, N);

// process.stdout.write(String(i) + ' ');

// }



// printUsingRecursion(64);



// printNos(N){

// //code here

// this.printRecursive(N);

// process.stdout.write("\n"); // Add a newline character after printing the numbers

// }



// printRecursive(current) {

// if (current > 0) {

// this.printRecursive(current - 1);

// process.stdout.write(current + " ");

// }

// }





// recursion
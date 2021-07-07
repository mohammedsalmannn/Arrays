//let arr = [];

// for (let i = 0; i < 10; i++) {
//     let number = Math.floor(Math.random() * 99) * 10;
//     arr.push(number);
// }
// console.log("Array is : " + arr);

// const getSecondLargerNumber = (arr = []) => {
//     let largestNumber = arr[0];
//     let secondLargestNumber = arr[0];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > largestNumber) {
//             secondLargestNumber = largestNumber;
//             largestNumber = arr[i];
//         }
//         else if (arr[i] > secondLargestNumber) {
//             secondLargestNumber = arr[i];
//         }
//     }
//     return secondLargestNumber;
//     console.log(secondLargestNumber);
//     console.log(arr);
// }
// getSecondLargerNumber();

// let max = 0;
// let min = 1000;
// let secMax = 0;
// let secMin = 1000;
// for (let num of arr) {
//     max = Math.max(num, max);
//     min = Math.min(num, min);
// }
// for (let element of arr) {
//     secMax = (element < max && element > secMax) ? element : secMax;
//     secMin = (element > min && element < secMin) ? element : secMin;
// }

// console.log("Second  maximum number: " + secMax);
// console.log("second minimum number: " + secMin);

//...prime factoriaztion..!
"use strict";
//let arr = [];
const ps = require("prompt-sync");
const prompt = ps();
// let num = Number(prompt("enter  number : "));

// for (let i = 2; num > 1; i++) {
//     while ((num % i) == 0) {
//         console.log(i);
//         arr.push(i);
//         num /= i;
//     }
// }
// console.log(arr);

//... twin number

// let arr = [];
// for (let i = 1; i < 100; i++) {
//     if (i % 11 == 0) {
//         arr.push(i);
//     }
// }
// console.log(arr);

// sum of digits..!

let arr = [];
arr = [3, 0, 5, 6, 10, 13, -3]
console.log(arr);
let n = arr.length;
for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
        for (let k = j + 1; k < n; k++) {
            if ((arr[i] + arr[j] + arr[k]) == 0) {
                console.log(arr[i] + " " + arr[j] + " " + arr[k])
            }
        }
    }
}
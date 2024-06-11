"use strict";
const arr = [1, 2, 2, 3, 4, 5, 6];
function myFilter(arr, n, callbackArr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            newArr.push(arr[i]);
        }
    }
    callbackArr(newArr);
}
myFilter(arr, 2, callbackArr);
myFilter(arr, 10, callbackArr);
function callbackArr(newArr) {
    console.log(`[${newArr}]`);
}

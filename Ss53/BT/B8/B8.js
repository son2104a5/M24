"use strict";
const nums = [1, 2, 3, 4, 5, 6];
function myFind(arr, n, callbackArr) {
    let check = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            callbackArr(n);
            check = true;
            break;
        }
    }
    if (!check) {
        console.log(null);
    }
}
myFind(nums, 2, callbackArr);
myFind(nums, 10, callbackArr);
function callbackArr(n) {
    console.log(n);
}

"use strict";
const arrs = [1, 2, 2, 3, 4, 5, 6];
function myFilter(arr, n) {
    let check = false;
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            callbackArr();
            check = true;
            break;
        }
    }
    if (!check) {
        console.log(-1);
    }
}
myFilter(arrs, 2, callbackArr);
myFilter(arrs, 10, callbackArr);
function callbackArr() {
    console.log(1);
}

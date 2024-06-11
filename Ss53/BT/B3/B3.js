"use strict";
function processArray(arr, callbackArr) {
    callbackArr(arr);
}
processArray([1, 2, 3, 4, 5], callbackArr);
function callbackArr(arr) {
    for (let item in arr) {
        setTimeout(() => {
            console.log('Phần tử thứ:', arr[item]);
        }, 1000);
    }
}

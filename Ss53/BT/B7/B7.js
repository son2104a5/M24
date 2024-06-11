"use strict";
const numbers = [1, 2, 3, 4, 5, 6];
function myForEach(arr, callbackArr) {
    callbackArr(arr);
}
myForEach(numbers, callbackArr);
function callbackArr(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        setTimeout(() => {
            console.log(`Vị trí : ${i}   | Phần tử: ${numbers[i]}   | Mảng:`, numbers);
        }, 1000 * i);
    }
}

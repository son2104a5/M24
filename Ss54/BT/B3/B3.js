"use strict";
let promise1 = new Promise((resolve, reject) => {
    resolve();
});
function sumWithPromise(arr) {
    promise1.then(() => {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        console.log(sum);
    });
}
sumWithPromise([1, 2, 3, 4, 5, 6, 7]);

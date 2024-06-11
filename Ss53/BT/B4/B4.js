"use strict";
function displayNumbers(n, callDisplayNumbers) {
    let t = 1;
    for (let i = t; i < 100; i++) {
        setTimeout(() => {
            callDisplayNumbers(t);
            t++;
        }, n * i);
    }
}
displayNumbers(1000, callDisplayNumbers);
function callDisplayNumbers(n) {
    console.log('Số thứ tự:', n);
}

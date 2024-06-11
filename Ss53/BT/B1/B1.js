"use strict";
function calculate(a, b, sum) {
    let total = a + b;
    sum(total);
}
calculate(10, 10, sum);
function sum(total) {
    console.log("a + b =", total);
}

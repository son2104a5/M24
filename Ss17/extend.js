"use strict";
// extend trong generic
// function merge (gộp, hợp nhất)
function merge(p1, p2) {
    return Object.assign(p1, p2);
}
console.log(merge({ name: "hoa" }, { age: 15 }));
// toán tử ? (optional chain)
function add(a, b) {
    return b ? a + b : a;
}
console.log(add(1, 4));
console.log(add(1));
// đệ quy

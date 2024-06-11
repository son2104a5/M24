"use strict";
function flattenArray(arr) {
    const flattened = [];
    arr.forEach(item => {
        if (Array.isArray(item)) {
            flattened.push(...flattenArray(item));
        }
        else {
            flattened.push(item);
        }
    });
    return flattened;
}
const inputArray = [1, [2, [3, 4], 5], 6];
const outputArray = flattenArray(inputArray);
console.log(outputArray);

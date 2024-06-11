"use strict";
function sortArrayWithPromise(arr) {
    return new Promise((resolve) => {
        const sortedArr = arr.slice().sort((a, b) => a - b);
        resolve(sortedArr);
    });
}
const unsortedArray = [1, 7, 2, 5, 9];
sortArrayWithPromise(unsortedArray)
    .then((sortedArray) => {
    console.log(sortedArray);
})
    .catch((error) => {
    console.error(error);
});

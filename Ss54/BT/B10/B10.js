"use strict";
function findElement(arr, searchValue) {
    n = searchValue;
    inputArray = arr;
    return new Promise((resolve, reject) => {
        const foundElement = arr.find((element) => element === searchValue);
        if (foundElement !== undefined) {
            resolve(foundElement);
        }
        else {
            reject(`Không tìm thấy phần tử ${searchValue}`);
        }
    });
}
let n;
let inputArray;
findElement([1, 2, 3, 4, 5], 3)
    .then((result) => {
    console.log(`Phần tử ${n} được tìm thấy ở vị trí thứ ${inputArray.indexOf(result)}`);
})
    .catch((error) => {
    console.error(error);
});

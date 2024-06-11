"use strict";
function myFirstPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Success!");
        }, 1000);
    });
}
myFirstPromise()
    .then((result) => {
    console.log(`Result! ${result}`);
})
    .catch((error) => {
    console.error(error);
});

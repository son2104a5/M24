"use strict";
function isPrimeWithPromise(n) {
    return new Promise((resolve, reject) => {
        let isPrime = 0;
        for (let i = 1; i <= n; i++) {
            if (n % i == 0)
                isPrime++;
        }
        if (isPrime <= 2)
            resolve(true);
        else
            resolve(false);
    })
        .then((data) => console.log(data));
}
isPrimeWithPromise(2);
isPrimeWithPromise(3);
isPrimeWithPromise(4);

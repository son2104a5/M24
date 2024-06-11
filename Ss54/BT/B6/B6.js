"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function isPrimeWithAsyncAwait(n) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield new Promise((resolve, reject) => {
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
    });
}
isPrimeWithAsyncAwait(2);
isPrimeWithAsyncAwait(3);
isPrimeWithAsyncAwait(4);

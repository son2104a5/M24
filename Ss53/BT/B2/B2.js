"use strict";
function delayCallback(time) {
    setTimeout(() => {
        callDelayCallback();
    }, time);
}
delayCallback(2000);
function callDelayCallback() {
    console.log('Hàm delayCallback được gọi!');
}

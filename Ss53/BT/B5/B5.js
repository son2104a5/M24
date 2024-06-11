"use strict";
function checkCondition(condition, display) {
    setTimeout(() => {
        display(condition);
    }, 1000);
}
checkCondition(true, display);
checkCondition(false, display);
function display(condition) {
    console.log('Điều kiện trả về:', condition);
}
